/* 幻想の魔導書 紹介ページ：3D ビューワー
 * ゲームのモデル（Java の LayerDefinition をそのまま読み出した models.js の GF_MODELS）と、ゲームのテクスチャ（img/models/）で、
 * 生き物・使い魔・防具を立体で見せる。ドラッグで回せ、何もしなければゆっくり回る。
 *
 * 座標：モデルは Minecraft の向き（y が下・正面が -z）。three.js では (x, -y, -z) に直す（x 軸まわりの 180° 回転なので左右は反転しない）。
 * 回転は Minecraft と同じく Z → Y → X の順（Euler 'ZYX'）で、y・z の角度だけ符号を逆にする。
 * 箱の面と UV は Minecraft の ModelPart.Cube と同じ割り当て（mirror のときは x を入れかえて頂点の順を逆にする）。
 * 光る層：_glow は足し算（RenderType.eyes）、_bright はその色のまま（全体が光る部品）で、同じ形をもう一度重ねて描く。
 */
(function () {
  const THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  let ready = null;
  function load(src) {
    return new Promise((ok, ng) => {
      const s = document.createElement('script');
      s.src = src; s.onload = ok; s.onerror = ng;
      document.head.append(s);
    });
  }
  function ensure() {
    if (!ready) ready = Promise.all([window.THREE ? null : load(THREE_URL), window.GF_MODELS ? null : load('models.js')]);
    return ready;
  }

  // ---- テクスチャ ----
  const texCache = {};
  function tex(name) {
    if (!name) return null;
    if (!texCache[name]) {
      const t = new THREE.TextureLoader().load('img/models/' + name + '.png');
      t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.flipY = false;
      t.generateMipmaps = false;
      texCache[name] = t;
    }
    return texCache[name];
  }

  // ---- 箱（Minecraft の ModelPart.Cube と同じ面・UV） ----
  function cubeGeometry(cubes, tw, th) {
    const pos = [], uv = [], nor = [], idx = [];
    for (const c of cubes) {
      const [x, y, z, w, h, d, u, v, mir, gx, gy, gz] = c;
      let f = x - gx, g = y - gy, hh = z - gz, i = x + w + gx, j = y + h + gy, k = z + d + gz;
      if (mir) { const t = i; i = f; f = t; }
      const V = [[f, g, hh], [i, g, hh], [i, j, hh], [f, j, hh], [f, g, k], [i, g, k], [i, j, k], [f, j, k]];
      const l = u, m = u + d, n = m + w, o = n + w, p = n + d, q = p + w;
      const r = v, s = v + d, t = s + h;
      const faces = [
        [[5, 4, 0, 1], m, r, n, s],   // 下
        [[2, 3, 7, 6], n, s, o, r],   // 上
        [[0, 4, 7, 3], l, s, m, t],   // 西（-x）
        [[1, 0, 3, 2], m, s, n, t],   // 北（-z、正面）
        [[5, 1, 2, 6], n, s, p, t],   // 東（+x）
        [[4, 5, 6, 7], p, s, q, t],   // 南（+z）
      ];
      for (const [vs, u1, v1, u2, v2] of faces) {
        let q4 = [[vs[0], u2, v1], [vs[1], u1, v1], [vs[2], u1, v2], [vs[3], u2, v2]];
        if (mir) q4 = q4.reverse();
        const base = pos.length / 3;
        const P = q4.map(e => V[e[0]]);
        // 法線（three の座標で）
        const a = P.map(p => [p[0], -p[1], -p[2]]);
        const e1 = [a[1][0] - a[0][0], a[1][1] - a[0][1], a[1][2] - a[0][2]];
        const e2 = [a[2][0] - a[0][0], a[2][1] - a[0][1], a[2][2] - a[0][2]];
        let nx = e1[1] * e2[2] - e1[2] * e2[1], ny = e1[2] * e2[0] - e1[0] * e2[2], nz = e1[0] * e2[1] - e1[1] * e2[0];
        const L = Math.hypot(nx, ny, nz) || 1; nx /= L; ny /= L; nz /= L;
        q4.forEach((e, n2) => {
          pos.push(a[n2][0], a[n2][1], a[n2][2]);
          uv.push(e[1] / tw, e[2] / th);
          nor.push(nx, ny, nz);
        });
        idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    geo.setIndex(idx);
    return geo;
  }

  /** 1 つのモデル（GF_MODELS のキー）を組み立てる。opt：tex・glow・bright・translucent（名前 → 半透明）・hide（名前の配列）・pose（名前 → {x,y,z,rx,ry,rz} の上書き） */
  function buildModel(key, opt) {
    const M = window.GF_MODELS[key];
    const matBase = new THREE.MeshLambertMaterial({ map: tex(opt.tex), alphaTest: 0.1, side: THREE.DoubleSide });
    const matTrans = new THREE.MeshLambertMaterial({ map: tex(opt.tex), transparent: true, depthWrite: false, side: THREE.DoubleSide });
    const matGlow = opt.glow && new THREE.MeshBasicMaterial({
      map: tex(opt.glow), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
      side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    const matBright = opt.bright && new THREE.MeshBasicMaterial({
      map: tex(opt.bright), alphaTest: 0.1, side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    const named = {};
    function part(name, P, path) {
      const g = new THREE.Group();
      const ov = (opt.pose && opt.pose[name]) || {};
      const st = {
        x: ov.x ?? P.p[0], y: ov.y ?? P.p[1], z: ov.z ?? P.p[2],
        rx: ov.rx ?? P.r[0], ry: ov.ry ?? P.r[1], rz: ov.rz ?? P.r[2], s: 1, vis: true,
      };
      g.userData.base = { ...st };
      g.userData.st = st;
      apply(g);
      if (opt.hide && opt.hide.includes(name)) g.visible = false;
      if (P.c.length) {
        const geo = cubeGeometry(P.c, M.tw, M.th);
        const trans = opt.translucent && opt.translucent.includes(name);
        g.add(new THREE.Mesh(geo, trans ? matTrans : matBase));
        if (matGlow) g.add(new THREE.Mesh(geo, matGlow));
        if (matBright) g.add(new THREE.Mesh(geo, matBright));
      }
      named[path] = g;
      if (P.k) for (const [n, c] of Object.entries(P.k)) g.add(part(n, c, path ? path + '/' + n : n));
      return g;
    }
    const root = part('', M.root, '');
    root.userData.named = named;
    root.userData.anims = [];
    for (const a of (M.anim || [])) if (named[a[0]]) root.userData.anims.push({ g: named[a[0]], kind: 'mesh', a });
    for (const a of (M.ranim || [])) if (named[a[0]]) root.userData.anims.push({ g: named[a[0]], kind: 'robe', a });
    return root;
  }
  function apply(g) {
    const s = g.userData.st;
    g.position.set(s.x, -s.y, -s.z);
    g.rotation.set(s.rx, -s.ry, -s.rz, 'ZYX');
    g.scale.set(s.s * (s.sx || 1), s.s * (s.sy || 1), s.s * (s.sz || 1));
    g.visible = s.vis;
  }

  // ---- 自分で動く部品（client/MeshAnim・client/armor/RobeAnim と同じ式） ----
  function animate(list, t) {
    for (const { g, kind, a } of list) {
      const o = g.userData.base, s = g.userData.st;
      Object.assign(s, o);
      if (kind === 'robe') {
        const [, type, phase, amp, bob, radius, height, speed, orbitPhase] = a;
        if (type === 0) s.rx = o.rx + Math.sin(t * 3 + phase) * amp;
        else if (type === 1) { s.rx = o.rx + Math.sin(t * 2.6 + phase) * amp; s.rz = o.rz - Math.sin(t * 1.9 + phase * 1.7) * amp * 0.6; }
        else if (type === 2) s.y = o.y - Math.sin(t * 2 + phase) * bob;
        else if (type === 3) {
          const an = t * speed + orbitPhase;
          s.x = Math.cos(an) * radius; s.y = -(height + Math.sin(t * 2 + orbitPhase) * 1.5); s.z = -Math.sin(an) * radius; s.ry = -an;
        }
      } else {
        const [, kd, a0, a1, a2] = a;
        s.sx = 1; s.sy = 1; s.sz = 1;
        switch (kd) {
          case 0: s.rx = o.rx + Math.sin(t * a2 + a0) * a1; break;
          case 1: s.rz = o.rz + Math.sin(t * a2 + a0) * a1; break;
          case 2: s.ry = o.ry + Math.sin(t * a2 + a0) * a1; break;
          case 3: s.rx = o.rx + Math.sin(t * 2.6 + a0) * a1; s.rz = o.rz + Math.sin(t * 1.9 + a0 * 1.7) * a1 * 0.6; break;
          case 4: s.y = o.y - Math.sin(t * a2 + a0) * a1; break;
          case 5: s.ry = o.ry + (t * a1) % (Math.PI * 2); break;
          case 6: s.rz = o.rz + (t * a1) % (Math.PI * 2); break;
          case 7: { const an = t * a1 + a0; s.x = o.x + Math.cos(an) * a2; s.y = o.y - Math.sin(t * 2 + a0) * 1.2; s.z = o.z + Math.sin(an) * a2; s.ry = -(an % (Math.PI * 2)); break; }
          case 8: { let f = t * a1 + a0; f -= Math.floor(f); s.y = o.y - f * a2; s.s = Math.max(0.05, 1 - f); break; }
          case 9: s.vis = (((t * 20 + a0) % a1) + a1) % a1 < 3; break;
          case 10: { const n = Math.floor(t * 20 / a1); const r = Math.sin(n * 12.9898 + a0 * 78.233) * 43758.5453; s.vis = r - Math.floor(r) < a2; break; }
          case 11: s.s = 1 + Math.sin(t * a2 + a0) * a1; break;
          case 12: { const k = Math.sin(t * a2 + a0) * a1; s.sx = 1 + k * 0.5; s.sy = 1 + k; s.sz = 1 + k * 0.5; break; }
          case 13: { const p = (((t + a0) % 3.6) + 3.6) % 3.6; const b = p < 0.12 ? p / 0.12 : p < 0.26 ? 1 - (p - 0.12) / 0.14 : 0; s.vis = b > 0.02; s.sy = Math.max(0.02, b); break; }
        }
      }
      apply(g);
    }
  }

  // ---- 見せる窓 ----
  let cur = null;
  /**
   * box（要素）の中に 3D ビューワーを作る。spec.parts は [{ key, tex, glow, bright, ... }, …]（重ねて描く）。
   * spec.toggles があれば、部位ごとに出し入れするボタンを付ける（[{ label, index }]）。
   */
  function show(box, spec) {
    dispose();
    box.replaceChildren();
    const wrap = document.createElement('div');
    wrap.className = 'viewer';
    const msg = document.createElement('p');
    msg.className = 'viewer-msg'; msg.textContent = '読み込み中…';
    wrap.append(msg);
    box.append(wrap);
    const token = {};
    cur = { token };
    ensure().then(() => {
      if (!cur || cur.token !== token) return;
      msg.remove();
      start(wrap, spec, token);
    }).catch(() => { msg.textContent = '3D の表示を読み込めませんでした'; });
  }

  function start(wrap, spec, token) {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.className = 'viewer-canvas';
    wrap.prepend(renderer.domElement);
    const scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xffffff, 0.62));
    const d1 = new THREE.DirectionalLight(0xffffff, 0.55); d1.position.set(20, 50, 40); scene.add(d1);
    const d2 = new THREE.DirectionalLight(0xffffff, 0.22); d2.position.set(-30, 20, -40); scene.add(d2);
    const turn = new THREE.Group();
    scene.add(turn);
    const model = new THREE.Group();
    model.position.y = 24;
    turn.add(model);
    const layers = spec.parts.map(p => { const m = buildModel(p.key, p); model.add(m); return m; });
    const anims = layers.flatMap(m => m.userData.anims);
    if (spec.scale) model.scale.setScalar(spec.scale);

    // 大きさに合わせてカメラを決める（動く前の形の外接箱）
    animate(anims, 0);
    model.updateMatrixWorld(true);
    const bb = new THREE.Box3().setFromObject(model);
    const size = bb.getSize(new THREE.Vector3()), mid = bb.getCenter(new THREE.Vector3());
    const R = Math.max(size.x, size.y, size.z, 8) * 0.5;
    // 足もとの影
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(Math.max(size.x, size.z) * 0.6 + 2, 40),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = bb.min.y - 0.05;
    turn.add(shadow);
    const cam = new THREE.PerspectiveCamera(30, 1, 1, 4000);
    const dist = R / Math.sin(15 * Math.PI / 180) * 1.12;
    let pitch = 0.22;
    function placeCam() {
      cam.position.set(0, mid.y + Math.sin(pitch) * dist, Math.cos(pitch) * dist);
      cam.lookAt(0, mid.y, 0);
    }
    placeCam();
    turn.position.set(-mid.x, 0, -mid.z);
    const pivot = new THREE.Group();
    scene.remove(turn); pivot.add(turn); scene.add(pivot);

    // 部位の出し入れ
    if (spec.toggles) {
      const row = document.createElement('div');
      row.className = 'viewer-toggles';
      spec.toggles.forEach(tg => {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'chip is-on'; b.textContent = tg.label;
        b.addEventListener('click', () => {
          const on = !b.classList.contains('is-on');
          b.classList.toggle('is-on', on);
          layers[tg.index].visible = on;
        });
        row.append(b);
      });
      wrap.append(row);
    }

    let yaw = -0.5, drag = false, lx = 0, ly = 0, idle = 0;
    const el = renderer.domElement;
    el.addEventListener('pointerdown', e => { drag = true; lx = e.clientX; ly = e.clientY; el.setPointerCapture(e.pointerId); });
    el.addEventListener('pointermove', e => {
      if (!drag) return;
      yaw += (e.clientX - lx) * 0.012;
      pitch = Math.max(-0.3, Math.min(1.1, pitch + (e.clientY - ly) * 0.006));
      lx = e.clientX; ly = e.clientY; idle = 0; placeCam();
    });
    const up = () => { drag = false; };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);

    function resize() {
      const w = wrap.clientWidth || 320, h = Math.round(Math.min(340, Math.max(240, w * 0.62)));
      renderer.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix();
    }
    resize();
    const ro = new ResizeObserver(resize); ro.observe(wrap);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();
    let raf = 0;
    (function loop() {
      raf = requestAnimationFrame(loop);
      const dt = clock.getDelta(), t = clock.elapsedTime;
      if (!drag && !reduce) { idle += dt; if (idle > 0.6) yaw += dt * 0.5; }
      pivot.rotation.y = yaw;
      if (!reduce) animate(anims, t);
      renderer.render(scene, cam);
    })();
    cur = { token, stop() { cancelAnimationFrame(raf); ro.disconnect(); renderer.dispose(); scene.traverse(o => { if (o.geometry) o.geometry.dispose(); }); } };
  }

  function dispose() {
    if (cur && cur.stop) cur.stop();
    cur = null;
  }

  window.GFViewer = { show, dispose };
})();
