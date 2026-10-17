/* 幻想の魔導書（Grimoire Fantasia）紹介ページ */
/* ================================================================
 * 公開するときに書き換えるところ
 *   REPO … GitHub の「ユーザー名/リポジトリ名」
 *   VERSION … 表示する MOD のバージョン
 * ================================================================ */
const REPO = 'Ochi1125/GrimoireFantasiaSite';
const VERSION = '2.0.0';

/* ---------- アイテムのデータ（言語ファイルとコードの値から作成） ---------- */
const DATA = {
 "items": [
  {
   "kind": "grimoire",
   "id": "light_grimoire",
   "name": "灯の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "10",
   "dur": "100",
   "effect": "見ている先 10m に魔法の灯（明るさ 15）を置く",
   "desc": "見習いが最初に教わる魔法。燃やすものも、火も要らない明かり。"
  },
  {
   "kind": "grimoire",
   "id": "excavation_grimoire",
   "name": "整地の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "60",
   "dur": "160",
   "effect": "向いている方の前を 幅 5×高さ 10×奥行 5 削る（土や石など自然の地形だけ）",
   "desc": "土木の魔法を記した魔導書。村の開拓や坑道掘りに重宝される。"
  },
  {
   "kind": "grimoire",
   "id": "growth_grimoire",
   "name": "成長の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "45",
   "dur": "180",
   "effect": "見ている植物 1 つに骨粉と同じ効果",
   "desc": "芽吹きの魔法を記した魔導書。畑を持つ者なら一冊は欲しい。"
  },
  {
   "kind": "grimoire",
   "id": "harvest_grimoire",
   "name": "豊穣の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "50",
   "dur": "70",
   "effect": "満腹度を 2 回復（満腹でも使える）",
   "desc": "実りの祈りを記した魔導書。読むと、ほんの少しお腹がふくれる。"
  },
  {
   "kind": "grimoire",
   "id": "ore_grimoire",
   "name": "鉱石の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "90",
   "dur": "100",
   "effect": "まわり 15m の鉱石の輪郭を白く 20 秒光らせる（壁ごしに見える）",
   "desc": "鉱脈の気配を読む魔法を記した魔導書。坑夫たちのお守り。"
  },
  {
   "kind": "grimoire",
   "id": "attraction_grimoire",
   "name": "引寄の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "20",
   "dur": "150",
   "effect": "まわり 15m の落ちているアイテムと経験値オーブを、すべて自分の足もとへ集める",
   "desc": "磁石のような紋章の魔導書。散らばった物も経験も、一度に手もとへ集まる。"
  },
  {
   "kind": "grimoire",
   "id": "levitation_grimoire",
   "name": "浮遊の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "毎秒 5",
   "dur": "132",
   "effect": "右クリックで浮遊 V ⇔ もう一度で解除。5 秒ごとに耐久 1",
   "desc": "シュルカーの魔法を写し取った魔導書。体がふわりと軽くなり、ゆっくりと空へ昇っていく。"
  },
  {
   "kind": "grimoire",
   "id": "fire_resistance_grimoire",
   "name": "耐火の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "40",
   "dur": "60",
   "effect": "自分に耐火を 3 分",
   "desc": "炎を退ける守りの術を記した魔導書。鍛冶屋や火山の旅人に重宝された。"
  },
  {
   "kind": "grimoire",
   "id": "night_vision_grimoire",
   "name": "暗視の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "40",
   "dur": "60",
   "effect": "自分に暗視を 3 分",
   "desc": "夜の獣の眼を借りる術を記した魔導書。闇の中でも昼のように見える。"
  },
  {
   "kind": "grimoire",
   "id": "leap_grimoire",
   "name": "跳躍の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "40",
   "dur": "60",
   "effect": "自分に跳躍力上昇 III を 3 分",
   "desc": "うさぎの足跡が描かれた魔導書。読むと脚が軽くなり、塀も軽々と越えられる。"
  },
  {
   "kind": "grimoire",
   "id": "ocean_grimoire",
   "name": "海洋の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "40",
   "dur": "60",
   "effect": "自分に水中呼吸とイルカの好意を 3 分",
   "desc": "潮の香りがする魔導書。海の中でも息ができ、イルカのように泳げる。"
  },
  {
  "kind": "grimoire",
  "id": "sunrise_grimoire",
  "name": "昇陽の魔導書",
  "rarity": "uncommon",
  "source": "chest",
  "mana": "100",
  "dur": "50",
  "effect": "朝にする（ネザー・エンドでは使えない）。クールタイム 30 秒",
  "desc": "夜明けを呼ぶ祈りを記した魔導書。読み上げれば、東の空がたちまち白んでいく。"
 },
  {
  "kind": "grimoire",
  "id": "moonset_grimoire",
  "name": "落月の魔導書",
  "rarity": "uncommon",
  "source": "chest",
  "mana": "100",
  "dur": "50",
  "effect": "夜にする（ネザー・エンドでは使えない）。クールタイム 30 秒",
  "desc": "太陽を沈め、月を呼ぶ術を記した魔導書。読み上げれば、空はたちまち夜の色に染まる。"
 },
  {
   "kind": "grimoire",
   "id": "wind_grimoire",
   "name": "風の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "35",
   "dur": "55",
   "effect": "前方 10m の相手を 10m 吹き飛ばす",
   "desc": "風を束ねて突風を吹き起こす魔導書。傷は与えられないが、距離は得れるだろう。"
  },
  {
   "kind": "grimoire",
   "id": "poison_grimoire",
   "name": "毒の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "30",
   "dur": "60",
   "effect": "まわり 10m の敵に毒 I（10 秒）",
   "desc": "沼の瘴気を閉じ込めた魔導書。開くと、まわりの空気がじわりと濁る。"
  },
  {
  "kind": "grimoire",
  "id": "teleport_grimoire",
  "name": "転移の魔導書",
  "rarity": "rare",
  "source": "drop",
  "mana": "20",
  "dur": "200",
  "effect": "見ている所へ瞬間移動（最大 30m。ブロックの手前に出て、埋まらない。水・溶岩・草は通り抜ける）",
  "desc": "エンダーマンが抱えていた魔導書。目に映る場所へ、一瞬で身を移す。"
 },
  {
   "kind": "grimoire",
   "id": "return_grimoire",
   "name": "帰還の魔導書",
   "rarity": "rare",
   "source": "chest",
   "mana": "100",
   "dur": "30",
   "effect": "3 秒待ってから、ベッド（なければ初期スポーン地点）へ戻る。待つあいだに動く・ダメージを受けると取り消し。同じディメンションの中だけ。クールタイム 5 分",
   "desc": "寝床の絵が描かれた魔導書。唱えて静かに待てば、眠る場所へ戻れる。"
  },
  {
   "kind": "grimoire",
   "id": "gale_grimoire",
   "name": "疾風の魔導書",
   "rarity": "rare",
   "source": "drop",
   "mana": "35",
   "dur": "80",
   "effect": "見ている方向へ 1.5 秒、エリトラでロケットを使ったように飛ぶ（向きで曲がれる）。通り道の敵に 4 ダメージ。着地まで落下ダメージなし",
   "desc": "ハーピィの羽根にはさまれていた魔導書。開くと突風が背中を押し、空へ連れ去る。"
  },
  {
   "kind": "grimoire",
   "id": "haste_grimoire",
   "name": "加速の魔導書",
   "rarity": "rare",
   "source": "chest",
   "mana": "40",
   "dur": "60",
   "effect": "自分に移動速度上昇 II と採掘速度上昇 II を 2 分",
   "desc": "風を切る矢が描かれた魔導書。足も手も、いつもより速く動く。"
  },
  {
   "kind": "grimoire",
   "id": "invisibility_grimoire",
   "name": "透明の魔導書",
   "rarity": "rare",
   "source": "chest",
   "mana": "50",
   "dur": "50",
   "effect": "自分に透明化を 1 分。攻撃すると解ける",
   "desc": "点線でしか描かれていない人影の魔導書。読むと、自分の姿も薄れていく。"
  },
  {
   "kind": "grimoire",
   "id": "crystal_wall_grimoire",
   "name": "晶壁の魔導書",
   "rarity": "rare",
   "source": "drop",
   "mana": "40",
   "dur": "60",
   "effect": "目の前 3m に幅 5 × 高さ 3 の結晶の壁を 10 秒。矢・弾・爆発を止め、壊されない",
   "desc": "クリスタルゴーレムの胸の奥にあった魔導書。マナの結晶が、壊れない壁となって立ちはだかる。"
  },
  {
   "kind": "grimoire",
   "id": "healing_grimoire",
   "name": "回復の魔導書",
   "rarity": "rare",
   "source": "chest",
   "mana": "最大 30",
   "dur": "30",
   "effect": "体力を 6 回復（回復した量に応じてマナを使う）",
   "desc": "使用者の体力を回復する魔導書。回復系の魔法は希少であるため、高値で取引される。"
  },
  {
   "kind": "grimoire",
   "id": "fire_grimoire",
   "name": "火の魔導書",
   "rarity": "rare",
   "source": "chest",
   "mana": "40",
   "dur": "45",
   "effect": "前方 10m の敵を 5 秒燃やす",
   "desc": "閉じていても紙が温かい。目の前の敵を焼き尽くさんと燻っている。"
  },
  {
   "kind": "grimoire",
   "id": "ice_grimoire",
   "name": "氷の魔導書",
   "rarity": "rare",
   "source": "chest",
   "mana": "30",
   "dur": "65",
   "effect": "まわり 4m の相手に 4 ダメージと鈍足（10 秒）。水面も凍る",
   "desc": "自身の周囲に氷のつぶてを放つ初心者向けの魔法。未熟な魔法使いは何度もこの魔法に助けられるという。"
  },
  {
   "kind": "grimoire",
   "id": "ice_shard_grimoire",
   "name": "氷晶の魔導書",
   "rarity": "rare",
   "source": "chest",
   "mana": "30",
   "dur": "60",
   "effect": "氷のつぶてを 3 本、扇形に撃つ。1 本 4 ダメージと移動速度低下 II（3 秒）",
   "desc": "雪の結晶がはさまった魔導書。氷のつぶてが、扇のように広がって飛ぶ。"
  },
  {
   "kind": "grimoire",
   "id": "water_grimoire",
   "name": "水の魔導書",
   "rarity": "rare",
   "source": "chest",
   "mana": "30",
   "dur": "50",
   "effect": "水の塊を撃つ（30m）。はじけた所から半径 2m に 5 ダメージ",
   "desc": "澄んだ泉の水を封じた魔導書。放たれた水の塊は、当たった所で勢いよくはじける。"
  },
  {
   "kind": "grimoire",
   "id": "acid_grimoire",
   "name": "酸の魔導書",
   "rarity": "rare",
   "source": "synthesis",
   "mana": "40",
   "dur": "78",
   "effect": "酸の塊を撃つ（30m）。半径 2m に 5 ダメージと毒 II（5 秒）",
   "desc": "水の魔導書に毒とパープルコアを溶かし込んだもの。黄緑に濁った塊は、触れたものを焼きただれさせる。",
   "recipe": [
    [
     "water_grimoire",
     "poison_grimoire"
    ],
    "purple_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "bouncing_orb_grimoire",
   "name": "跳球の魔導書",
   "rarity": "rare",
   "source": "drop",
   "mana": "30",
   "dur": "80",
   "effect": "跳ねる紫の球を撃つ。ダメージ 4・最大 10 回跳ね返る",
   "desc": "マナスライムの体の奥で固まっていた魔導書。開くと、ぷるんとした紫の球が弾み出る。"
  },
  {
  "kind": "grimoire",
  "id": "corrosion_grimoire",
  "name": "腐食の魔導書",
  "rarity": "rare",
  "source": "drop",
  "mana": "30",
  "dur": "43",
  "effect": "まわり 16m の敵に防御力低下 II（15 秒）",
  "desc": "ゾンビの腐った肉から見つかった魔導書。まわりのものすべてを、少しずつ朽ちさせる。"
 },
  {
  "kind": "grimoire",
  "id": "arrow_grimoire",
  "name": "射矢の魔導書",
  "rarity": "rare",
  "source": "drop",
  "mana": "30",
  "dur": "30",
  "effect": "前へ魔法の矢を 1 本（物理ダメージ 10。拾えない）",
  "desc": "スケルトンの骨の間から見つかった魔導書。弓がなくても、魔力で矢を形作って放てる。"
 },
  {
   "kind": "grimoire",
   "id": "lightning_grimoire",
   "name": "雷の魔導書",
   "rarity": "epic",
   "source": "chest",
   "mana": "35",
   "dur": "52",
   "effect": "半径 10m のランダムな敵に雷を 2 回",
   "desc": "雷を落とす魔導書。古代の火災の原因の4割はこの魔法だとか。"
  },
  {
   "kind": "grimoire",
   "id": "explosion_grimoire",
   "name": "爆発の魔導書",
   "rarity": "epic",
   "source": "chest",
   "mana": "40",
   "dur": "50",
   "effect": "見ている先 32m に威力 5 の爆発（地形も壊す）",
   "desc": "随分と年季の入った古代の魔導書。ボロボロで耐久力は低いが、魔法の威力は健在だ。"
  },
  {
   "kind": "grimoire",
   "id": "hellfire_grimoire",
   "name": "業火の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "40",
   "dur": "56",
   "effect": "炎の球が弾けて半径 10m に 30 ダメージと炎上 10 秒",
   "desc": "火の魔導書にレッドコアの熱を注ぎ込んだもの。放たれた火種は、触れたところで業火となって弾ける。",
   "recipe": [
    [
     "fire_grimoire"
    ],
    "red_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "transfer_grimoire",
   "name": "転送の魔導書",
   "rarity": "epic",
   "source": "chest",
   "mana": "500",
   "dur": "100",
   "effect": "転送魔法陣を右クリックでそのネットワークに紐づけ（1 つだけ）。右クリックで一覧を開き、選んだ魔法陣の上へ転送。距離・ディメンションによらずマナ 500",
   "desc": "小さな魔法陣が描かれた魔導書。結んだ魔法陣のもとへ、どこからでも渡れる。"
  },
  {
   "kind": "grimoire",
   "id": "space_grimoire",
   "name": "空間の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "50",
   "dur": "100",
   "effect": "右クリックで自分のエンダーチェストを開く。クールタイム 1 分",
   "desc": "転移と転送、ふたつの魔導書を束ねた魔導書。空間をたぐり寄せ、遠く離れたエンダーチェストの中へ手を伸ばす。",
   "recipe": [
    [
     "teleport_grimoire",
     "transfer_grimoire"
    ],
    "blue_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "otherworld_grimoire",
   "name": "異界の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "80",
   "dur": "100",
   "effect": "右クリックで異界の箱（エンダーチェストとは別の、自分だけの 54 マスの入れ物）を開く。クールタイム 1 分",
   "desc": "空間の魔導書をさらに深くまで開いた魔導書。この世の外にある、自分だけの大きな蔵へ通じている。",
   "recipe": [
    [
     "space_grimoire"
    ],
    "green_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "mercy_light_grimoire",
   "name": "慈光の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "30",
   "dur": "120",
   "effect": "自分と半径 8m の、敵ではない生き物（使い魔も）の体力を 5 回復",
   "desc": "癒しと灯を一つに束ねた書。開くと、あたたかな金色の光がページからあふれ出す。",
   "recipe": [
    [
     "healing_grimoire",
     "light_grimoire"
    ],
    "yellow_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "fortune_grimoire",
   "name": "天運の魔導書",
   "rarity": "epic",
   "source": "chest",
   "mana": "100",
   "dur": "50",
   "effect": "右クリック長押しでスロットが回り、離すと -100〜100 の数字が決まる。負なら自分や味方に、正なら敵に、その絶対値のダメージ（0 は何も起きない）",
   "desc": "開くたびに運命の数字が決まる、緑の表紙のサイコロの書。吉と出るか凶と出るかは、神のみぞ知る。"
  },
  {
   "kind": "grimoire",
   "id": "binding_grimoire",
   "name": "束縛の魔導書",
   "rarity": "epic",
   "source": "drop",
   "mana": "60",
   "dur": "50",
   "effect": "20m 以内の見ている敵 1 体を闇の鎖で 4 秒動けなくする（毎秒 3 ダメージ。ボスは 1 秒）",
   "desc": "鎖の亡者が引きずっていた魔導書。闇の鎖が、狙った獲物をその場に縫いとめる。"
  },
  {
   "kind": "grimoire",
   "id": "gravity_grimoire",
   "name": "重力の魔導書",
   "rarity": "epic",
   "source": "chest",
   "mana": "50",
   "dur": "50",
   "effect": "見ている地点（最大 32m）の半径 6m の敵を 2 秒浮かせ、叩きつけて 10 ダメージ（ボスは浮かない）",
   "desc": "重い錘のような手ざわりの魔導書。見つめた所の敵を宙へ浮かせ、地面へ叩きつける。"
  },
  {
   "kind": "grimoire",
   "id": "starfall_grimoire",
   "name": "星降の魔導書",
   "rarity": "epic",
   "source": "chest",
   "mana": "50",
   "dur": "48",
   "effect": "見ている地点のまわりに小さな流れ星を 5 つ落とす。1 つで半径 2m に 6 ダメージ。地形は壊さない",
   "desc": "星空を閉じこめた魔導書。夜空から小さな流れ星を呼び落とす。"
  },
  {
   "kind": "grimoire",
   "id": "life_drain_grimoire",
   "name": "吸命の魔導書",
   "rarity": "epic",
   "source": "drop",
   "mana": "50",
   "dur": "60",
   "effect": "前方 15m の敵 1 体に紫の光の線を 2 秒つなぎ、合計 10 ダメージ。与えたダメージの半分だけ回復",
   "desc": "ダークスピリットが抱えていた魔導書。紫の光の線が、相手の命を少しずつ奪う。"
  },
  {
   "kind": "grimoire",
   "id": "mana_drain_grimoire",
   "name": "吸魔の魔導書",
   "rarity": "epic",
   "source": "drop",
   "mana": "0",
   "dur": "40",
   "effect": "20m 以内の見ている敵 1 体に 10 ダメージ。与えたダメージの 1000% をマナとして取り戻す（最大 200）。クールタイム 1 分",
   "desc": "深淵の者の瘴気の中に沈んでいた魔導書。傷つけた相手から、魔力をすすり取る。"
  },
  {
   "kind": "grimoire",
   "id": "holy_fire_grimoire",
   "name": "聖火の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "60",
   "dur": "90",
   "effect": "いちばん近い敵の足もとに聖火（5 秒・毎秒 10、アンデッドは 1.5 倍）",
   "desc": "灯と炎を一つに束ねた書。開くと淡い金色の火がページの上で静かに揺れる。",
   "recipe": [
    [
     "light_grimoire",
     "fire_grimoire"
    ],
    "yellow_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "blizzard_grimoire",
   "name": "吹雪の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "50",
   "dur": "70",
   "effect": "吹雪の渦が半径 10m の敵を 5 秒引き寄せ、鈍足 IV・毎秒 10",
   "desc": "吹雪を思わせる凍てつく魔法。ページをめくると細かな雪が舞い上がる。",
   "recipe": [
    [
     "ice_grimoire",
     "wind_grimoire"
    ],
    "blue_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "tornado_grimoire",
   "name": "竜巻の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "70",
   "dur": "50",
   "effect": "竜巻の弾を撃ち、当たった所（32m）に竜巻。5 秒間、半径 10m の敵を中心へ吸い寄せる（ダメージなし・ボスには効かない）",
   "desc": "風の魔導書にグリーンコアの力を注いだもの。巻き起こる風は、あらゆるものを渦の中心へと引きずり込む。",
   "recipe": [
    [
     "wind_grimoire"
    ],
    "green_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "black_thunder_grimoire",
   "name": "黒雷の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "60",
   "dur": "64",
   "effect": "半径 32m のランダムな敵に黒い雷を 3 回（1 回 15）",
   "desc": "雷に瘴気を吸わせて黒く染めた書。鋭い雷撃がバチバチと音を立てている。",
   "recipe": [
    [
     "lightning_grimoire",
     "poison_grimoire"
    ],
    "purple_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "chain_explosion_grimoire",
   "name": "爆迅の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "45",
   "dur": "128",
   "effect": "32m 先に威力 5 の爆発。地形を壊さず 0.5 秒ごとに撃てる",
   "desc": "爆発と風、ふたつの魔導書を束ねて作られた魔導書。一撃は控えめだが、間を置かずに何度でも撃てる。",
   "recipe": [
    [
     "explosion_grimoire",
     "wind_grimoire"
    ],
    "green_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "bouncing_bomb_grimoire",
   "name": "跳爆の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "40",
   "dur": "80",
   "effect": "跳ねる火の球を前へ 1 つ。ブロックや敵に当たって跳ねるたびに威力 4 の爆発（最大 10 回跳ねる・地形は壊さない）。クールタイム 2 秒",
   "desc": "跳球と爆発、ふたつの魔導書を束ねた魔導書。弾む火の球が、ふれた所をつぎつぎと吹き飛ばす。",
   "recipe": [
    [
     "bouncing_orb_grimoire",
     "explosion_grimoire"
    ],
    "green_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "rampage_grimoire",
   "name": "暴爆の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "50",
   "dur": "30",
   "effect": "爆発の弾（威力 5）＋爆発の範囲の敵に追加 50 の魔法ダメージ",
   "desc": "爆発を風で押し固め、一点で弾けさせる術の書。その威力は一撃で屍の山を築く。",
   "recipe": [
    [
     "explosion_grimoire",
     "wind_grimoire"
    ],
    "red_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "miasma_grimoire",
   "name": "瘴爆の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "80",
   "dur": "78",
   "effect": "爆発の弾（威力 5）＋弱体化 5 種 II と毒 II（30 秒）",
   "desc": "爆炎に毒気を混ぜ込んだ魔法。紙のすき間から、紫の煙がかすかに漏れている。",
   "recipe": [
    [
     "explosion_grimoire",
     "poison_grimoire"
    ],
    "purple_core"
   ]
  },
  {
  "kind": "grimoire",
  "id": "lifeline_grimoire",
  "name": "命脈の魔導書",
  "rarity": "epic",
  "source": "synthesis",
  "mana": "100",
  "dur": "50",
  "effect": "自分に衝撃吸収（黄色いハート 5 個 = +10）を 5 分。クールタイム 1 分",
  "desc": "回復と灯の魔法を、ブルーコアで一つに編んだ魔導書。命の脈を太くし、傷を受け止める光の膜を張る。",
  "recipe": [
   [
    "healing_grimoire",
    "light_grimoire"
   ],
   "blue_core"
  ]
 },
  {
   "kind": "grimoire",
   "id": "seekers_lament",
   "name": "探究者の嘆き",
   "rarity": "epic",
   "source": "drop",
   "mana": "50",
   "dur": "80",
   "effect": "まわり 24m の敵に防御力低下・魔法防御力低下・弱体化・魔法攻撃力低下 IV（30 秒）",
   "desc": "答えにたどり着けなかった魔導士の嘆きが綴られた魔導書。読む者の力を、周りの者から少しずつ奪っていく。"
  },
  {
   "kind": "grimoire",
   "id": "freezing_breath",
   "name": "凍てつく息吹",
   "rarity": "epic",
   "source": "drop",
   "mana": "毎秒 5",
   "dur": "120",
   "effect": "押し続けるあいだ前方 18m に冷気を吹く。毎秒 8 ダメージ、1 秒当て続けると凍結 3 秒",
   "desc": "氷竜の吐息を封じた魔導書。ページを開くと、読む者の口から凍える風があふれ出す。"
  },
  {
   "kind": "grimoire",
   "id": "scorching_breath",
   "name": "灼けつく息吹",
   "rarity": "epic",
   "source": "drop",
   "mana": "毎秒 5",
   "dur": "120",
   "effect": "押し続けるあいだ前方 18m に炎を吹く。毎秒 10 ダメージ、当たるたびに 8 秒燃える",
   "desc": "炎竜の吐息を封じた魔導書。ページを開くと、読む者の口から灼けつく炎があふれ出す。"
  },
  {
   "kind": "grimoire",
   "id": "earth_grace",
   "name": "大地の恩寵",
   "rarity": "epic",
   "source": "drop",
   "mana": "100",
   "dur": "50",
   "effect": "自分と半径 30m の、敵ではない生き物（使い魔も）の体力を 30 回復し、再生 II を 10 秒付ける。クールタイム 20 秒",
   "desc": "大地に満ちる生命の力を記した魔導書。ページを開くと、足もとから若葉の香りがひろがる。"
  },
  {
   "kind": "grimoire",
   "id": "resoflare",
   "name": "レゾフレア",
   "rarity": "unique",
   "source": "synthesis",
   "mana": "100",
   "dur": "70",
   "effect": "巨大な火球を 30m 飛ばし、通り道を焼き払う。生き物か硬いブロックにふれると半径 15m の大爆発（地形も壊す）。直撃 80 ＋ 爆発 60〜15、燻炎 10 秒",
   "desc": "業火の魔導書にレッドコアの熱を極限まで注ぎ込んだ、最上位の炎の魔法。放たれた火球は大地さえも焼き尽くし、炭へと変える。",
   "recipe": [
    [
     "hellfire_grimoire"
    ],
    "red_core"
   ]
  },
  {
   "kind": "grimoire",
   "id": "thunder_beast_cannon",
   "name": "雷獣砲",
   "rarity": "unique",
   "source": "drop",
   "mana": "毎秒 30",
   "dur": "150",
   "effect": "押し続けるあいだ 24m の雷のレーザー（毎秒 30）。当たった相手から 15m 以内の敵にも毎秒 30 の感電",
   "desc": "雷獣の角を削り出して作った砲。雷獣と同じ、ビリビリとした雷のレーザーを撃ち出す。"
  },
  {
   "kind": "grimoire",
   "id": "demon_flame",
   "name": "悪魔の炎",
   "rarity": "unique",
   "source": "drop",
   "mana": "100〜300",
   "dur": "240",
   "effect": "押し続けて目の前に火球をため（1〜5 秒）、離すと視線の先（最大 60m）へ秒速 20 ブロックで飛ばす。火球が爆発した場所のまわりに、ため具合で 50〜100 の魔法ダメージ（半径 10〜20m）。5 秒ためきると半径 30m に 300",
   "desc": "焔魔の炎を閉じ込めた魔導書。ページの隙間から、赤黒い火がちろちろとこぼれている。"
  },
  {
   "kind": "grimoire",
   "id": "core_overload",
   "name": "コア・オーバーロード",
   "rarity": "unique",
   "source": "drop",
   "mana": "100",
   "dur": "100",
   "effect": "1 分間、攻撃・魔法攻撃が 2 倍、移動速度上昇 II・跳躍力上昇 II、落下ダメージ無効。代わりに受けるダメージが 1.4 倍（再使用は 30 秒後）",
   "desc": "ルーンの神兵が緊急時に使う、コアを暴走させる術を記した魔導書。力と引き換えに、守りは削られる。"
  },
  {
   "kind": "grimoire",
   "id": "tenkai_raibaku",
   "name": "天海雷瀑",
   "rarity": "unique",
   "source": "drop",
   "mana": "500",
   "dur": "60",
   "effect": "半径 32m のランダムな敵に青い雷を 30 回（1 回 20・凍結 2 秒）",
   "desc": "海の王が空に預けていた雷を記した魔導書。ページをめくるたび、潮の匂いがする。"
  },
  {
   "kind": "grimoire",
   "id": "cynthia_prayer",
   "name": "シンシアの祈り",
   "rarity": "legendary",
   "source": "drop",
   "mana": "100",
   "dur": "10",
   "effect": "1 分間ダメージを受けない。クールタイム 10 分",
   "desc": "彼女が大切な誰かに施したかった祈り。奇跡が起きない限り、この祈りは届かない。"
  },
  {
   "kind": "grimoire",
   "id": "raison_detre",
   "name": "レゾンデートル",
   "rarity": "legendary",
   "source": "drop",
   "mana": "1 / tick",
   "dur": "200",
   "effect": "自分と同じ姿の影を 3 体呼ぶ ⇔ もう一度で消す。呼ぶたびに耐久 1",
   "desc": "己の存在理由を問う禁書。頁を開けば、持ち主と同じ姿をした影が目を覚ます。"
  },
  {
   "kind": "wand",
   "id": "light_wand",
   "name": "灯の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "5",
   "dur": "1500",
   "effect": "32m 先に灯。持っているあいだ足もとも明るい",
   "desc": "見た先に光を灯す杖。これを持つ者が暗がりを歩くことはない。",
   "from": "light_grimoire"
  },
  {
   "kind": "wand",
   "id": "excavation_wand",
   "name": "整地の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "50",
   "dur": "1200",
   "effect": "前を削る。しゃがむと範囲を 5×5×5 → 9×10×9 → 15×20×15 に切り替え、白い枠で見せる",
   "desc": "整地の魔導書を杖に宿したもの。ひと振りで丘がひとつ消える。",
   "from": "excavation_grimoire"
  },
  {
   "kind": "wand",
   "id": "growth_wand",
   "name": "成長の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "20",
   "dur": "1500",
   "effect": "見ている所のまわり 3×3 の植物に骨粉と同じ効果",
   "desc": "成長の魔導書を杖に宿したもの。振るたびに、まわりの畑が一斉に伸びる。",
   "from": "growth_grimoire"
  },
  {
   "kind": "wand",
   "id": "harvest_wand",
   "name": "豊穣の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "45",
   "dur": "700",
   "effect": "満腹度 +6・隠し満腹度 +3（満腹でも使える）",
   "desc": "豊穣の魔導書を杖に宿したもの。これがあれば、旅の糧に困ることはない。",
   "from": "harvest_grimoire"
  },
  {
   "kind": "wand",
   "id": "ore_wand",
   "name": "鉱石の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "150",
   "dur": "500",
   "effect": "まわり 30m の鉱石の輪郭を、鉱石ごとの色で 20 秒光らせる",
   "desc": "鉱石の魔導書を杖に宿したもの。岩の奥で眠る鉱石が、それぞれの色で浮かび上がる。",
   "from": "ore_grimoire"
  },
  {
   "kind": "wand",
   "id": "attraction_wand",
   "name": "引寄の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "毎秒 2",
   "dur": "1000",
   "effect": "発動 ⇔ 解除。発動中、まわり 20m のアイテムと経験値オーブを引き寄せ続ける",
   "desc": "引寄の魔導書を杖に宿したもの。持っているあいだ、あらゆる落とし物が寄ってくる。",
   "from": "attraction_grimoire"
  },
  {
   "kind": "wand",
   "id": "levitation_wand",
   "name": "浮遊の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "毎秒 5",
   "dur": "550",
   "effect": "クリエイティブのように自由に飛べる（解除すると落ちる）",
   "desc": "浮遊の魔導書を杖に宿したもの。浮かぶだけでなく、思うままに空を舞うことができる。",
   "from": "levitation_grimoire"
  },
  {
   "kind": "wand",
   "id": "fire_resistance_wand",
   "name": "耐火の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "40",
   "dur": "200",
   "effect": "自分とまわり 20m の味方（敵以外すべて）に耐火を 15 分",
   "desc": "耐火の魔導書を杖に宿したもの。守りの膜が仲間たちまで包みこむ。",
   "from": "fire_resistance_grimoire"
  },
  {
   "kind": "wand",
   "id": "night_vision_wand",
   "name": "暗視の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "40",
   "dur": "200",
   "effect": "自分とまわり 20m の味方（敵以外すべて）に暗視を 15 分",
   "desc": "暗視の魔導書を杖に宿したもの。仲間の目にも、夜を見通す光が宿る。",
   "from": "night_vision_grimoire"
  },
  {
   "kind": "wand",
   "id": "leap_wand",
   "name": "跳躍の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "40",
   "dur": "200",
   "effect": "自分とまわり 20m の敵以外すべてに跳躍力上昇 III を 15 分",
   "desc": "跳躍の魔導書を杖に宿したもの。仲間たちの脚まで軽くする。",
   "from": "leap_grimoire"
  },
  {
   "kind": "wand",
   "id": "ocean_wand",
   "name": "海洋の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "40",
   "dur": "200",
   "effect": "自分とまわり 20m の敵以外すべてにコンジットパワーとイルカの好意を 15 分",
   "desc": "海洋の魔導書を杖に宿したもの。コンジットの加護が仲間たちを包む。",
   "from": "ocean_grimoire"
  },
  {
  "kind": "wand",
  "id": "sunrise_wand",
  "name": "昇陽の杖",
  "rarity": "rare",
  "source": "craft",
  "mana": "50",
  "dur": "500",
  "effect": "朝にする（ネザー・エンドでは使えない）。クールタイム 30 秒",
  "desc": "昇陽の魔導書を杖に宿したもの。少ない魔力で朝を招く。",
  "from": "sunrise_grimoire"
 },
  {
  "kind": "wand",
  "id": "moonset_wand",
  "name": "落月の杖",
  "rarity": "rare",
  "source": "craft",
  "mana": "50",
  "dur": "500",
  "effect": "夜にする（ネザー・エンドでは使えない）。クールタイム 30 秒",
  "desc": "落月の魔導書を杖に宿したもの。少ない魔力で夜を招く。",
  "from": "moonset_grimoire"
 },
  {
   "kind": "wand",
   "id": "wind_wand",
   "name": "風の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "30",
   "dur": "280",
   "effect": "前方 10m の敵を 15m 吹き飛ばし、10m 打ち上げる",
   "desc": "一瞬のうちに爆発的な上昇気流を発生させて敵を空高く打ち上げて吹き飛ばす杖。",
   "from": "wind_grimoire"
  },
  {
   "kind": "wand",
   "id": "poison_wand",
   "name": "毒の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "30",
   "dur": "300",
   "effect": "まわり 15m の敵に毒 II と鈍足 IV（10 秒）",
   "desc": "毒の魔導書を杖に宿したもの。濃い瘴気が相手の体を蝕み、足取りを重くする。",
   "from": "poison_grimoire"
  },
  {
  "kind": "wand",
  "id": "teleport_wand",
  "name": "転移の杖",
  "rarity": "epic",
  "source": "craft",
  "mana": "10",
  "dur": "2000",
  "effect": "見ている所へ瞬間移動（最大 60m）。クールタイム 1 秒",
  "desc": "転移の魔導書を杖に宿したもの。より遠くへ、より軽やかに跳ぶ。",
  "from": "teleport_grimoire"
 },
  {
   "kind": "wand",
   "id": "return_wand",
   "name": "帰還の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "100",
   "dur": "150",
   "effect": "1 秒待ってから、ベッド（なければ初期スポーン地点）へ戻る。ディメンションをまたいでも戻れる。クールタイム 1 分",
   "desc": "帰還の魔導書を杖に宿したもの。どこの世界にいても、すぐに眠る場所へ戻れる。",
   "from": "return_grimoire"
  },
  {
   "kind": "wand",
   "id": "gale_wand",
   "name": "疾風の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "毎秒 15",
   "dur": "300",
   "effect": "押し続けるあいだ見ている方向へ飛び続ける。通り道の敵に 6 ダメージ。離すと着地まで落下ダメージなし",
   "desc": "疾風の魔導書を杖に宿したもの。風が途切れないかぎり、どこまでも飛んでいける。",
   "from": "gale_grimoire"
  },
  {
   "kind": "wand",
   "id": "haste_wand",
   "name": "加速の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "60",
   "dur": "250",
   "effect": "自分とまわり 20m の敵以外すべてに移動速度上昇 II を 10 分",
   "desc": "加速の魔導書を杖に宿したもの。仲間たちの足どりを軽くする。",
   "from": "haste_grimoire"
  },
  {
   "kind": "wand",
   "id": "invisibility_wand",
   "name": "透明の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "80",
   "dur": "200",
   "effect": "透明化を 2 分。防具と持ち物も見えなくなり、ボス以外の敵は狙いを外す",
   "desc": "透明の魔導書を杖に宿したもの。防具も持ち物も消え、敵はこちらを見失う。",
   "from": "invisibility_grimoire"
  },
  {
   "kind": "wand",
   "id": "crystal_wall_wand",
   "name": "晶壁の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "80",
   "dur": "300",
   "effect": "幅 9 × 高さ 4 の壁を 20 秒。しゃがんで使うと自分を囲む半球の壁（半径 4）を 15 秒",
   "desc": "晶壁の魔導書を杖に宿したもの。身を包む結晶のドームさえ作り出す。",
   "from": "crystal_wall_grimoire"
  },
  {
   "kind": "wand",
   "id": "healing_wand",
   "name": "回復の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "最大 40",
   "dur": "128",
   "effect": "体力を 10 回復",
   "desc": "使用者の体力を回復する杖。回復系の杖はなかなか手に入らない高価な代物とされる。",
   "from": "healing_grimoire"
  },
  {
   "kind": "wand",
   "id": "fire_wand",
   "name": "火の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "30 / 40 / 50",
   "dur": "300",
   "effect": "ためて 3 段階。前方 10 / 15 / 20m を燃やし、4 / 8 / 14 ダメージ",
   "desc": "熱を内部に溜め続けた杖。普段は燃えていないが、発動時には身を焦がす業火を放つ。",
   "from": "fire_grimoire"
  },
  {
   "kind": "wand",
   "id": "ice_wand",
   "name": "氷の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "10 / 20 / 40",
   "dur": "320",
   "effect": "ためて 3 段階。冷気の波で鈍足 II → 鈍足 IV → 凍結（5 秒）",
   "desc": "周囲を凍てつかせる氷の杖。熟練の魔法使いの放つ冷気は敵の体を凍らせる。",
   "from": "ice_grimoire"
  },
  {
   "kind": "wand",
   "id": "ice_shard_wand",
   "name": "氷晶の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "10 / 20 / 40",
   "dur": "300",
   "effect": "ためて 3 段階で 3 / 5 / 7 本。1 本 6 ダメージと移動速度低下 III。3 段目は凍結 2 秒",
   "desc": "氷晶の魔導書を杖に宿したもの。ためるほど、つぶては増え、冷たさも増す。",
   "from": "ice_shard_grimoire"
  },
  {
   "kind": "wand",
   "id": "water_wand",
   "name": "水の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "毎秒 10",
   "dur": "320",
   "effect": "押し続けるあいだ水のレーザー（18m）。触れている相手に毎秒 8 ダメージ",
   "desc": "水の魔導書を杖に宿したもの。細く絞った水流は、岩をも穿つ。",
   "from": "water_grimoire"
  },
  {
   "kind": "wand",
   "id": "acid_wand",
   "name": "酸の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "80",
   "dur": "240",
   "effect": "はじけた所の上に半径 15m の酸の雲を 10 秒。雲の下の敵に毎秒 4 ダメージと毒 II",
   "desc": "酸の魔導書を杖に宿したもの。はじけた酸は雲となって空にとどまり、下にいるものへ降りそそぐ。",
   "from": "acid_grimoire"
  },
  {
   "kind": "wand",
   "id": "bouncing_orb_wand",
   "name": "跳球の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "30",
   "dur": "800",
   "effect": "跳ねる紫の球を正面と左右ななめの 3 方向へ",
   "desc": "跳球の魔導書を杖に宿したもの。三つの球が扇のように散り、あたりを跳ね回る。",
   "from": "bouncing_orb_grimoire"
  },
  {
  "kind": "wand",
  "id": "corrosion_wand",
  "name": "腐食の杖",
  "rarity": "epic",
  "source": "craft",
  "mana": "30",
  "dur": "230",
  "effect": "まわり 32m の敵に防御力低下 IV（30 秒）",
  "desc": "腐食の魔導書を杖に宿したもの。より広く、より深く、鎧を朽ちさせる。",
  "from": "corrosion_grimoire"
 },
  {
  "kind": "wand",
  "id": "arrow_wand",
  "name": "射矢の杖",
  "rarity": "epic",
  "source": "craft",
  "mana": "30",
  "dur": "450",
  "effect": "前へ扇形（60°）に魔法の矢を 5 本（1 本 物理ダメージ 10）",
  "desc": "射矢の魔導書を杖に宿したもの。一度に何本もの矢を扇のように放つ。",
  "from": "arrow_grimoire"
 },
  {
   "kind": "wand",
   "id": "lightning_wand",
   "name": "雷の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "50",
   "dur": "215",
   "effect": "半径 15m のランダムな敵に雷を 5 回（1 回ごとに追加 8）",
   "desc": "雷鳴が響く古代の杖。かのメイジはこの魔法で軍隊すら殲滅させたという。",
   "from": "lightning_grimoire"
  },
  {
   "kind": "wand",
   "id": "explosion_wand",
   "name": "爆発の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "10〜40",
   "dur": "256",
   "effect": "ためるほど大きな爆発（威力 1〜10・64m）",
   "desc": "原初の魔法使いが使用した古代の杖。その魔法はいとも簡単に砦を破壊する威力があるようだ。",
   "from": "explosion_grimoire"
  },
  {
   "kind": "wand",
   "id": "hellfire_wand",
   "name": "業火の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "60 / 100 / 150",
   "dur": "320",
   "effect": "ためて 3 段階。25 / 40 / 60 ダメージ、半径 5 / 7 / 10m、炎上 5 / 8 / 10 秒",
   "desc": "業火の魔導書を杖に宿したもの。ためるほどに火球は膨れ上がり、あたりを焼き尽くす。",
   "from": "hellfire_grimoire"
  },
  {
   "kind": "wand",
   "id": "transfer_wand",
   "name": "転送の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "500",
   "dur": "1000",
   "effect": "転送魔法陣のネットワークにいくつでも紐づけられる（もう一度右クリック・画面の × で外す）。右クリックで一覧を開き、選んだ魔法陣の上へ転送",
   "desc": "転送の魔導書を杖に宿したもの。いくつもの魔法陣の網を、ひとつの杖で渡り歩ける。",
   "from": "transfer_grimoire"
  },
  {
   "kind": "wand",
   "id": "space_wand",
   "name": "空間の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "30",
   "dur": "500",
   "effect": "右クリックで自分のエンダーチェストを開く。クールタイム 10 秒",
   "desc": "空間の魔導書を杖に宿したもの。ひと振りで、いつでも自分の箱の中をのぞける。",
   "from": "space_grimoire"
  },
  {
   "kind": "wand",
   "id": "otherworld_wand",
   "name": "異界の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "50",
   "dur": "500",
   "effect": "右クリックで異界の箱（自分だけの 54 マスの入れ物）を開く。クールタイム 10 秒",
   "desc": "異界の魔導書を魔法の杖に宿したもの。異界の蔵の扉を、軽々と開け閉めできる。",
   "from": "otherworld_grimoire"
  },
  {
   "kind": "wand",
   "id": "mercy_light_wand",
   "name": "慈光の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "30",
   "dur": "360",
   "effect": "自分と半径 16m の、敵ではない生き物（使い魔も）の体力を 10 回復",
   "desc": "先端の珠に慈しみの光が満ちている。その光は、そばにいるすべての者の傷をふさぐ。",
   "from": "mercy_light_grimoire"
  },
  {
   "kind": "wand",
   "id": "fortune_wand",
   "name": "天運の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "100",
   "dur": "100",
   "effect": "スロットが 3 つ回り、3 つのうち最大の数字を採用する。効果は天運の魔導書と同じ",
   "desc": "三つのサイコロが先端で踊る杖。いちばん大きな目だけが、運命を決める。",
   "from": "fortune_grimoire"
  },
  {
   "kind": "wand",
   "id": "binding_wand",
   "name": "束縛の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "120",
   "dur": "200",
   "effect": "30m 以内の敵、最大 5 体を闇の鎖で 6 秒動けなくする（毎秒 6、終わるときに 20 ダメージ。ボスは 2 秒）",
   "desc": "束縛の魔導書を杖に宿したもの。何本もの闇の鎖が、群れごと縛りあげる。",
   "from": "binding_grimoire"
  },
  {
   "kind": "wand",
   "id": "gravity_wand",
   "name": "重力の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "100",
   "dur": "220",
   "effect": "最大 60m・半径 10m。浮かせて叩きつけるのを 3 回（1 回 15 ダメージ）",
   "desc": "重力の魔導書を杖に宿したもの。何度も浮かせては叩きつける。",
   "from": "gravity_grimoire"
  },
  {
   "kind": "wand",
   "id": "starfall_wand",
   "name": "星降の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "60 / 120 / 200",
   "dur": "200",
   "effect": "ためて 3 段階で流れ星 5 / 10 / 20 個（1 つ 10 ダメージ）。3 段目は最後に大きな星（半径 5m に 40）",
   "desc": "星降の魔導書を杖に宿したもの。ためきれば、最後に大きな星が降ってくる。",
   "from": "starfall_grimoire"
  },
  {
   "kind": "wand",
   "id": "life_drain_wand",
   "name": "吸命の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "毎秒 25",
   "dur": "240",
   "effect": "押し続けるあいだ（最大 5 秒）20m 以内の敵 1 体から吸い続ける。毎秒 8 ダメージ、自分は毎秒 4 回復",
   "desc": "吸命の魔導書を杖に宿したもの。つないだ線から、命が絶えず流れこむ。",
   "from": "life_drain_grimoire"
  },
  {
   "kind": "wand",
   "id": "mana_drain_wand",
   "name": "吸魔の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "0",
   "dur": "150",
   "effect": "20m 以内の見ている敵 1 体に 10 ダメージ。与えたダメージの 2000% をマナとして取り戻す（最大 500）。クールタイム 1 分",
   "desc": "吸魔の魔導書を杖に宿したもの。一撃で、枯れた魔力を満たすほどに吸い上げる。",
   "from": "mana_drain_grimoire"
  },
  {
   "kind": "wand",
   "id": "holy_fire_wand",
   "name": "聖火の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "200",
   "dur": "320",
   "effect": "半径 32m の近い敵 5 体の足もとに聖火（毎秒 20）",
   "desc": "聖なる光を閉じ込めた炎。消えることのない聖火が宿っている。",
   "from": "holy_fire_grimoire"
  },
  {
   "kind": "wand",
   "id": "blizzard_wand",
   "name": "吹雪の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "80",
   "dur": "340",
   "effect": "吹雪の渦が半径 20m の敵を 10 秒引き寄せて凍らせる",
   "desc": "小さな吹雪がいつも渦を巻いている杖。鋭い氷が嵐となって襲い掛かる時、それは命をも容易に奪う矛となる。",
   "from": "blizzard_grimoire"
  },
  {
   "kind": "wand",
   "id": "tornado_wand",
   "name": "竜巻の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "70",
   "dur": "210",
   "effect": "竜巻の弾を撃ち、当たった所（64m）に竜巻。8 秒間、半径 20m の敵を中心へ吸い寄せる（ダメージなし）",
   "desc": "先端で小さな竜巻が渦を巻き続ける杖。放たれた嵐は、遠く離れた敵さえも逃さない。",
   "from": "tornado_grimoire"
  },
  {
   "kind": "wand",
   "id": "black_thunder_wand",
   "name": "黒雷の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "150",
   "dur": "128",
   "effect": "半径 32m のランダムな敵に黒い雷を 10 回（1 回 20）",
   "desc": "黒い稲妻を呼ぶ杖。稲光は須臾に光り、触れた者の魂を破壊する。",
   "from": "black_thunder_grimoire"
  },
  {
   "kind": "wand",
   "id": "chain_explosion_wand",
   "name": "爆迅の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "80",
   "dur": "1024",
   "effect": "64m 先に威力 10 の爆発を 0.5 秒ごと。地形を壊さない",
   "desc": "爆迅の魔導書をさらに研ぎ澄ませた杖。威力の高い爆発を間髪入れずに喰らわせるが、魔力の高い者でなければ使いこなすのは難しい。",
   "from": "chain_explosion_grimoire"
  },
  {
   "kind": "wand",
   "id": "bouncing_bomb_wand",
   "name": "跳爆の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "80",
   "dur": "400",
   "effect": "跳ねる火の球を正面と左右斜めに 3 つ。跳ねるたびに威力 8 の爆発（最大 10 回・地形は壊さない）。クールタイム 2 秒",
   "desc": "跳爆の魔導書を杖に宿したもの。三つの火の球が扇のように散り、あたり一面を爆炎に包む。",
   "from": "bouncing_bomb_grimoire"
  },
  {
   "kind": "wand",
   "id": "rampage_wand",
   "name": "暴爆の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "100 / 140 / 180",
   "dur": "95",
   "effect": "ためて 3 段階。爆発の弾＋追加 30 / 50 / 100",
   "desc": "真紅の宝珠が脈打つ杖。力をためるほど、宝珠が熱く膨れあがる。",
   "from": "rampage_grimoire"
  },
  {
   "kind": "wand",
   "id": "miasma_wand",
   "name": "瘴爆の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "120",
   "dur": "560",
   "effect": "爆発の弾（威力 10）＋弱体化 5 種 IV と毒 100（60 秒）",
   "desc": "濃い瘴気を閉じこめた杖。その瘴気は触れるだけで体の自由が奪われる。",
   "from": "miasma_grimoire"
  },
  {
  "kind": "wand",
  "id": "lifeline_wand",
  "name": "命脈の杖",
  "rarity": "unique",
  "source": "craft",
  "mana": "150",
  "dur": "350",
  "effect": "自分に衝撃吸収（黄色いハート 10 個 = +20）を 10 分。クールタイム 1 分",
  "desc": "命脈の魔導書を杖に宿したもの。より厚い光の膜が、より長く持ち主を守る。",
  "from": "lifeline_grimoire"
 },
  {
   "kind": "wand",
   "id": "resoflare_unleash",
   "name": "レゾフレア＝アンリーシュ",
   "rarity": "legendary",
   "source": "craft",
   "mana": "250",
   "dur": "540",
   "effect": "3 秒ためないと撃てない（光ったら合図）。レゾフレアと同じ大爆発で、直撃 200 ＋ 爆発 150〜40、燻炎 20 秒",
   "desc": "レゾフレアを魔法の杖に宿し、その炎の枷を解き放ったもの。太陽のごとく燃え上がる火球は、ひとたび放たれれば何もかもを灰に還す。",
   "from": "resoflare"
  }
 ],
 "names": {
  "manasteel_ingot": "マナスチールインゴット",
  "manaaurum_ingot": "マナオーラムインゴット",
  "mana_diamond": "マナダイヤモンド",
  "manalite_ingot": "マナライトインゴット",
  "manasteel_helmet": "マナスチールのヘルメット",
  "manasteel_chestplate": "マナスチールのチェストプレート",
  "manasteel_leggings": "マナスチールのレギンス",
  "manasteel_boots": "マナスチールのブーツ",
  "manaaurum_helmet": "マナオーラムのヘルメット",
  "manaaurum_chestplate": "マナオーラムのチェストプレート",
  "manaaurum_leggings": "マナオーラムのレギンス",
  "manaaurum_boots": "マナオーラムのブーツ",
  "manadiamond_helmet": "マナダイヤモンドのヘルメット",
  "manadiamond_chestplate": "マナダイヤモンドのチェストプレート",
  "manadiamond_leggings": "マナダイヤモンドのレギンス",
  "manadiamond_boots": "マナダイヤモンドのブーツ",
  "manalite_helmet": "マナライトのヘルメット",
  "manalite_chestplate": "マナライトのチェストプレート",
  "manalite_leggings": "マナライトのレギンス",
  "manalite_boots": "マナライトのブーツ",
  "tesseros_summon_circle": "テセロスの召喚陣",
  "glaioria_summon_circle": "グライオリアの召喚陣",
  "regius_summon_circle": "レギウスの召喚陣",
  "shinra_summon_circle": "森羅の守護者の召喚陣",
  "fulgarion_summon_circle": "フルガリオンの召喚陣",
  "ignied_summon_circle": "イグニードの召喚陣",
  "rune_giant_summon_circle": "ルーンの神兵の召喚陣",
  "nodens_summon_circle": "ノーデンスの召喚陣",
  "cynthia_summon_circle": "シンシアの召喚陣",
  "grimnowl_summon_circle": "グリムノウルの召喚陣",
  "broken_wand": "壊れた杖",
  "red_core": "レッドコア",
  "green_core": "グリーンコア",
  "blue_core": "ブルーコア",
  "purple_core": "パープルコア",
  "moon_core": "ムーンコア",
  "yellow_core": "イエローコア",
  "cloth": "布",
  "mana_shard": "マナのかけら",
  "durandal": "デュランダル",
  "paladin_pendant": "聖騎士のペンダント",
  "holy_beast_egg": "聖獣の卵",
  "blue_feather": "青い羽根",
  "black_feather": "黒い羽根",
  "frayed_yarn": "ほつれた毛糸",
  "small_hat": "小さな帽子",
  "magic_soul": "マジックソウル",
  "oblivion_residue": "忘却の残滓",
  "wizard_notes": "魔法使いの手記",
  "light_grimoire": "灯の魔導書",
  "ice_grimoire": "氷の魔導書",
  "wind_grimoire": "風の魔導書",
  "poison_grimoire": "毒の魔導書",
  "levitation_grimoire": "浮遊の魔導書",
  "healing_grimoire": "回復の魔導書",
  "fire_grimoire": "火の魔導書",
  "lightning_grimoire": "雷の魔導書",
  "fortune_grimoire": "天運の魔導書",
  "explosion_grimoire": "爆発の魔導書",
  "bouncing_orb_grimoire": "跳球の魔導書",
  "chain_explosion_grimoire": "爆迅の魔導書",
  "hellfire_grimoire": "業火の魔導書",
  "holy_fire_grimoire": "聖火の魔導書",
  "miasma_grimoire": "瘴爆の魔導書",
  "rampage_grimoire": "暴爆の魔導書",
  "black_thunder_grimoire": "黒雷の魔導書",
  "blizzard_grimoire": "吹雪の魔導書",
  "cynthia_prayer": "シンシアの祈り",
  "light_wand": "灯の杖",
  "ice_wand": "氷の杖",
  "wind_wand": "風の杖",
  "poison_wand": "毒の杖",
  "levitation_wand": "浮遊の杖",
  "healing_wand": "回復の杖",
  "fire_wand": "火の杖",
  "lightning_wand": "雷の杖",
  "fortune_wand": "天運の杖",
  "explosion_wand": "爆発の杖",
  "bouncing_orb_wand": "跳球の杖",
  "chain_explosion_wand": "爆迅の杖",
  "hellfire_wand": "業火の杖",
  "holy_fire_wand": "聖火の杖",
  "miasma_wand": "瘴爆の杖",
  "rampage_wand": "暴爆の杖",
  "black_thunder_wand": "黒雷の杖",
  "blizzard_wand": "吹雪の杖",
  "synthesis_table_front": "合成台",
  "raison_detre": "レゾンデートル",
  "gungnir": "グングニル",
  "miasma_stone": "瘴気の魔石",
  "broken_black_knight_pendant": "壊れた騎士のペンダント",
  "magic_pouch": "マジックポーチ",
  "wizard_pouch": "ウィザードポーチ",
  "sage_pouch": "セイジポーチ",
  "archmage_pouch": "アークメイジポーチ",
  "transfer_circle": "転送魔法陣",
  "mannequin": "マネキン",
  "ley_line_device": "霊脈装置",
  "mana_energy_1": "マナエネルギー（レベル I）",
  "mana_energy_2": "マナエネルギー（レベル II）",
  "mana_energy_3": "マナエネルギー（レベル III）",
  "mana_energy_4": "マナエネルギー（レベル IV）",
  "mana_energy_5": "マナエネルギー（レベル V）",
  "excavation_grimoire": "整地の魔導書",
  "growth_grimoire": "成長の魔導書",
  "harvest_grimoire": "豊穣の魔導書",
  "ore_grimoire": "鉱石の魔導書",
  "water_grimoire": "水の魔導書",
  "acid_grimoire": "酸の魔導書",
  "mercy_light_grimoire": "慈光の魔導書",
  "seekers_lament": "探究者の嘆き",
  "freezing_breath": "凍てつく息吹",
  "scorching_breath": "灼けつく息吹",
  "earth_grace": "大地の恩寵",
  "tenkai_raibaku": "天海雷瀑",
  "excavation_wand": "整地の杖",
  "growth_wand": "成長の杖",
  "harvest_wand": "豊穣の杖",
  "ore_wand": "鉱石の杖",
  "fire_resistance_grimoire": "耐火の魔導書",
  "night_vision_grimoire": "暗視の魔導書",
  "fire_resistance_wand": "耐火の杖",
  "night_vision_wand": "暗視の杖",
  "water_wand": "水の杖",
  "acid_wand": "酸の杖",
  "mercy_light_wand": "慈光の杖",
  "mana_stone": "マナストーン",
  "magic_cloth": "魔法の布",
  "mage_cloth": "魔導士の布",
  "sage_cloth": "賢者の布",
  "archmage_cloth": "大魔導士の布",
  "nordensia": "ノーデンシア",
  "ancient_sword": "古の剣",
  "ancient_spear": "古の槍",
  "world_tree_twig": "世界樹の小枝",
  "research_results": "研究成果",
  "ice_scale": "氷竜の鱗",
  "flame_scale": "炎竜の鱗",
  "divine_talisman": "神気の札",
  "ocean_drop": "大海の雫",
  "saint_soul": "聖者の魂",
  "monster_soul": "魔物の魂",
  "sturdy_string": "頑丈な紐",
  "ice_dragon_egg": "氷竜の卵",
  "fire_dragon_egg": "炎竜の卵",
  "forest_core": "樹霊王の核",
  "spirit_king_staff": "霊王の杖",
  "sapling_sprout": "新樹の芽",
  "thunder_beast_horn": "雷獣の角",
  "charged_orb": "電気を帯びた球",
  "thunder_beast_sword": "雷獣剣",
  "thunder_beast_cannon": "雷獣砲",
  "demon_heart": "焔魔の心臓",
  "colossus_core": "巨兵の核",
  "demon_contract": "悪魔の契約書",
  "prominence_scythe": "プロミネンスサイズ",
  "ancient_emergency_device": "古代の緊急装置",
  "rune_axe": "ルーンアクス",
  "tornado_grimoire": "竜巻の魔導書",
  "tornado_wand": "竜巻の杖",
  "resoflare": "レゾフレア",
  "resoflare_unleash": "レゾフレア＝アンリーシュ",
  "magic_wand": "魔法の杖",
  "crystal": "クリスタル",
  "mana_crystal": "マナクリスタル",
  "magic_crystal": "魔力の結晶",
  "unicorn_horn": "ユニコーンの角",
  "core_overload": "コア・オーバーロード",
  "demon_flame": "悪魔の炎",
  "crail_berry": "クレイルの実"
 },
 "descs": {
  "broken_wand": "メイジが持っている壊れた杖。修理しなければほとんど使い物にならない。",
  "red_core": "炎の魔力を凝縮したコア。宝石のように輝き、温かく脈打っている。",
  "green_core": "風の魔力を凝縮したコア。淡く発光し、絶えず微風をまとっている。",
  "blue_core": "氷の魔力を凝縮したコア。触れると冷たく、表面にうっすら霜がつく。",
  "purple_core": "深い魔力を凝縮したコア。中心の光が、こちらを見返しているように静かに揺れる。",
  "moon_core": "月の魔力を凝縮した、薄く青白いコア。\n夜が深まるほど、内側の光がかすかに満ちていく。",
  "yellow_core": "雷の魔力を凝縮したコア。ときどきパチッと鳴り、持つと指先がしびれる。",
  "cloth": "羊毛からただ織っただけの布。それ自体はただの布だが衣服を作るのには十分だ。",
  "mana_shard": "結晶になったマナの欠片。ほのかな魔力の暖かさが絶えず漂っている。",
  "durandal": "聖騎士シンシアが振るっていた聖剣。刃に宿る光は、今も持ち主を選ぶように静かに揺らめいている。\n攻撃力 40（アンデッドに 2 倍）・壊れない。\n右クリック【聖光の斬撃】：光の斬撃（40・15 m・貫通）。\n右クリック 1 秒長押し【聖騎士の極光】：自分と 5 m 以内の味方に、20 秒の聖なる加護（無敵）・黄色い体力 +10（60 秒）・マナ再生 III と再生 III（60 秒）。攻撃してきた相手に光の柱（60 ダメージ）。クールタイム 3 分（オフハンドに盾がないとき）。",
  "paladin_pendant": "古びた聖騎士のペンダント。\n長い年月が経っているにもかかわらず、淡い光を失っていない。\n蓋の内側には、微笑むシンシアと、その隣に並ぶ一人の男性の写真が収められている。",
  "holy_beast_egg": "淡く光る白い卵。耳をあてると、小さな鼓動が聞こえる。",
  "blue_feather": "空の色をそのまま写したような、小さな青い羽根。持っているだけで少し心が軽くなる。",
  "black_feather": "濡れたように艶のある黒い羽根。光にかざすと、ふちが金色に透ける。",
  "frayed_yarn": "さんざん転がされて、端がほつれた白い毛糸玉。ふわふわの毛が何本も絡まっている。",
  "small_hat": "猫の頭にちょうど乗るくらいの、とんがり帽子。ときどき、中からにやにや笑いだけが覗く。",
  "magic_soul": "淡い紫色に燃え揺れる、半透明の人魂。取り込むと肉体になじみ、扱えるマナの器そのものを押し広げる。",
  "oblivion_residue": "記憶がほどけて灰になったような、灰色の霞のかたまり。\n触れたものから、覚えたことを静かに奪い去る。\n持って使い魔を右クリックで、割り振ったポイントがすべて戻る。",
  "wizard_notes": "",
  "gungnir": "魔獣グリムノウルの内に眠っていた神槍。放てば闇を裂き、狙ったものを決して外さない。\n攻撃力 40・壊れない。\n右クリック【必中の神槍】：背後の魔法陣から槍が 3 本。視界の敵を追尾して必ず当たり（60 ダメージ）、足もとに闇の柱（15 × 4 回・ウィザー）。\n深淵の浸食（持つだけ）：攻撃力と魔法攻撃力が 3 倍。そのかわり受けるダメージも 3 倍。",
  "miasma_stone": "瘴気が凝り固まった魔石。耳を澄ますと、遠くで大きな翼が風を打つ音がする。",
  "broken_black_knight_pendant": "瘴気に染まり、ぼろぼろに砕けたペンダント。割れた蓋の内側には、かすれた誰かの写真の跡だけが残っている。",
  "mannequin": "木でできた人形。いくら叩いても壊れないので、武器や魔法の試し打ちにちょうどいい。\n受けたダメージは頭の上に数字で出て、続けて当てると合計と DPS も出る。毒や炎などのエフェクトも効く。\n防具を持って右クリックで着せ、素手で右クリックで外す。防具やローブを着せれば、どれだけ軽くなるかも試せる。\nスニークしながら素手で右クリックで回収。\n作り方：防具立てを下の段のまん中に置き、上の段の左右をのぞいた残りを板材で埋める",
  "ley_line_device": "霊脈の上に据える、黒曜石と鉄の装置。紫の霊脈が脈打つように光る（明るさ 7）。\n右クリックで画面を開き、マナエネルギーを入れて「霊脈を掘り出す」を押すと、襲撃イベント「霊脈の防衛」が始まる。真上に 2 ブロックの空きがいる。\n作り方：マナのかけら 3・鉄インゴット 2・レッドストーンブロック・黒曜石 3",
  "mana_energy_1": "ガラスの器に満ちた紫のマナ。霊脈装置に入れると、霊脈を掘り出して襲撃を呼び寄せる。\n器の体力 50。ウェーブが進むほど強い敵が増える。\n守り抜くと：マナのかけら 32〜64 個。\n入手：下位のダンジョンとバニラの構造物の宝箱に、まれに入っている（5%）",
  "mana_energy_2": "ガラスの器に満ちた紫のマナ。霊脈装置に入れると、霊脈を掘り出して襲撃を呼び寄せる。\n器の体力 100。ウェーブが進むほど強い敵が増える。\n守り抜くと：マナクリスタル 32〜64 個。\n入手：下位のダンジョンとバニラの構造物の宝箱に、まれに入っている（5%）",
  "mana_energy_3": "ガラスの器に満ちた紫のマナ。霊脈装置に入れると、霊脈を掘り出して襲撃を呼び寄せる。\n器の体力 150。ウェーブが進むほど強い敵が増える。\n守り抜くと：マナストーン 32〜64 個。\n入手：ダンジョンや遺跡の宝箱に、まれに入っている（5%）",
  "mana_energy_4": "ガラスの器に満ちた紫のマナ。霊脈装置に入れると、霊脈を掘り出して襲撃を呼び寄せる。\n器の体力 200。ウェーブが進むほど強い敵が増える。\n守り抜くと：魔力の結晶 32〜64 個。\n入手：上位のダンジョンの宝箱に、まれに入っている（5%）",
  "mana_energy_5": "ガラスの器に満ちた紫のマナ。霊脈装置に入れると、霊脈を掘り出して襲撃を呼び寄せる。\n器の体力 250。ウェーブが進むほど強い敵が増える。\n守り抜くと：魔力の結晶 64〜128 個。\n入手：上位のダンジョンの宝箱に、まれに入っている（5%）",
  "transfer_circle": "床に描く、3×3 マスに広がる魔法陣。ゆっくりと明滅しながら光る（明るさ 7）。当たり判定はない。\n右クリックで画面を開き、名前・ネットワークネーム・色（16 色）を決められる。同じネットワークネームの魔法陣どうしで転送でき（マナ 500・ディメンションもまたげる）、ネットワークネームを知らない人は入れない。\n作り方：マジックソウルを真ん中に、マナストーンを上下左右、マナクリスタルを四隅",
  "magic_pouch": "魔法の布で縫った、魔導書だけをしまっておけるポーチ。27 冊まで入り、壊しても中身はそのまま残る。\n作り方：魔法の布 3・革 5",
  "wizard_pouch": "魔導士の布で縫ったポーチ。魔導書のほか、杖や使い魔の召喚アイテムも 27 個まで入る。\n作り方：マジックポーチ・魔導士の布 2・ユニコーンの角・革 5（中身は引き継ぐ）",
  "sage_pouch": "賢者の布で縫ったポーチ。魔導書・杖・使い魔の召喚アイテムが 54 個まで入る。\n作り方：ウィザードポーチ・賢者の布 2・マナストーン・革 5（中身は引き継ぐ）",
  "archmage_pouch": "大魔導士の布で縫った、底の見えないポーチ。シュルカーボックスやポーチのような入れ物以外なら、なんでも 108 個（2 ページ）まで入る。\n作り方：セイジポーチ・大魔導士の布 2・シュルカーの殻・革 5（中身は引き継ぐ）",
  "mage_cloth": "マナクリスタルの粉を織り込んだ、深い青の布。銀の縁取りが淡く光を返す。\n作り方：布をマナクリスタル 8 個で囲む。下位のダンジョン（氷の塔・浮島もふくむ）のいい宝箱に 25%、上位のダンジョンのいい宝箱に 50% で入っている。",
  "sage_cloth": "古い賢者たちが纏ったという、緑と金の布。胸元のルーンが静かに脈打っている。\n作り方：布をマナストーン 8 個で囲む。上位のダンジョン（5 か所）のいい宝箱に 25% で入っている。",
  "archmage_cloth": "魔力の結晶を砕いて染ませた、深い紫の布。糸の一本一本に濃いマナが流れている。\n作り方：布を魔力の結晶 8 個で囲む。宝箱からは出ない。",
  "magic_crystal": "紫色の魔力が閉じ込められた結晶。\n強大な魔の者の体内で、長い年月をかけて凝り固まったものだという。\n後半のボスだけが落とし、先のボスほど多い（ドロップ増加は効かない）。大魔導士の布の材料。",
  "nordensia": "海王ノーデンスが携えていた三叉の槍。穂先から、いつも冷たい霧がこぼれている。\n攻撃力 45・壊れない。\n海王の威厳（持つだけ）：水中呼吸・イルカの好意。水の中でも地上と同じ速さで掘れて、動ける。\n右クリック：氷の槍（30 ダメージ・2 秒凍結）。\n水中で右クリック長押し【大渦潮】：半径 16 m の敵を前方 4 m へ引き寄せて縛る（最長 10 秒・0.5 秒ごとに 3 ダメージ。クールタイム 30 秒）。",
  "ancient_sword": "竜のねぐらに眠っていた古びた剣。刃は欠け、柄の飾りもすり減っているが、いまだに鋭い。\n攻撃力 16・壊れない。\n氷竜の牙：当てた相手を 2 秒凍結。\n白銀の竜巻：ダッシュ攻撃で相手の足もとに氷の竜巻。半径 3 m の敵に 24 ダメージと打ち上げ（クールタイム 5 秒）。",
  "ancient_spear": "火山の奥に眠っていた古びた槍。穂先は熱で黒ずみ、ところどころ赤くくすぶっているが、いまだに鋭い。\n攻撃力 16・壊れない。\n炎竜の逆鱗：当てた相手を 5 秒燃やす。\n右クリック長押し【大火球】：1〜3 秒ためて離すと炎の球。半径 3〜6 m の爆発で 40〜80 ダメージと炎上（クールタイム 10 秒）。",
  "world_tree_twig": "テセロスが研究のために持ち帰った、世界樹の細い枝。武器にするには頼りないが、折れる気配もない。\n攻撃力 10・壊れない。\n生命の加護（持つだけ）：体力が 5 以下になると全回復（30 秒に 1 回）。死ぬダメージでも死なずに全回復（そのときは 1 分に 1 回）。\n右クリック【生命の賛歌】：半径 50 m の味方を 30 回復（クールタイム 30 秒）。",
  "research_results": "魔力と物質の関係について記された研究成果。\n素材に秘められた力を、より強く、より長く引き出すための研究が記されている。",
  "ice_scale": "氷竜から剥がれ落ちた鱗。\n長い時間が経っても冷気を失わず、触れているだけで周囲の熱を奪っていく。",
  "flame_scale": "長い時間が経っても炎を纏い続ける炎竜の鱗。\nその熱は森一帯を焼き尽くしてしまうほどだ。",
  "divine_talisman": "神聖な力が刻み込まれた一枚の札。\n文字を読むことはできないが、手にすると遠い昔の祈りが聞こえるような気がする。",
  "ocean_drop": "深い海の色をした雫。耳を近づけると、遠くでイルカの声がする。",
  "saint_soul": "聖騎士の祈りに寄りそっていた、あたたかな光の魂。",
  "monster_soul": "魔獣の瘴気から生まれた、冷たい闇の魂。かすかにささやく声がする。",
  "sturdy_string": "紫がかった太い糸をより合わせた紐。テセロスの実験室で、何かをつないでおくのに使われていた。",
  "ice_dragon_egg": "ひんやりと冷たい、水色の竜の卵。耳をあてると、中で小さな羽ばたきの音がする。",
  "fire_dragon_egg": "ほんのりと熱い、赤黒い竜の卵。ひびの奥で、小さな炎がゆらめいている。",
  "forest_core": "樹霊の王の身体に宿っていた、生命力の結晶。\n手にするだけで脈打つような生命の気配を感じる。",
  "spirit_king_staff": "樹霊の王が森の力を束ねていた、ねじれた木の杖。先の結晶は、いまもかすかに緑の光を宿している。\n攻撃力 18・壊れない。\n森羅の癒し（持つだけ）：半径 10 m の味方を毎秒 1 回復。\n右クリック【大地の縛め】：視界の 32 m 以内の敵の足もとから木の根。50 ダメージと打ち上げ（クールタイム 8 秒）。",
  "sapling_sprout": "樹霊の王の力を受けて芽吹いた、小さな若木の芽。耳を近づけると、葉のさざめきが聞こえる。",
  "thunder_beast_horn": "雷獣の頭部から伸びる巨大な角。\n表面には今も微かな電流が走り、近づけるだけで空気が震えている。",
  "charged_orb": "雷獣の電気が凝り固まった、青白い雷の塊。手のひらの上で、絶えずビリビリとはじけている。\n使い魔のサンダーエレメント（最大 3 体）を呼び出す。",
  "thunder_beast_sword": "雷獣の溜め込んだ電気をすべて詰め込んだ剣。刀身はいつも雷を纏っている。\n攻撃力 26・壊れない。\n紫電連鎖：当てると半径 5 m の敵 3 体まで感電（12 ダメージ）。\n右クリック【雷獣の神速】：前へ 10 m 瞬間移動し、すり抜けた敵に 40 ダメージ＋感電 18（クールタイム 3 秒）。",
  "colossus_core": "ルーンの神兵を動かしていた巨大な魔力の核。\n長い年月を経ても衰えることのない力が、今もなお内部で脈動している。",
  "demon_heart": "未だに燃え続ける、焔魔の心臓。\n炎を消しても熱を失うことはなく、触れた金属はゆっくりと赤く染まっていく。",
  "demon_contract": "焔魔が人の魂と引き換えに結んだ、血のように赤い契約書。署名の欄が、かすかに熱を帯びている。\n使い魔の炎の悪魔（最大 2 体）を呼び出す。",
  "prominence_scythe": "焔魔が振るっていた、燃える死神の大鎌。刃のふちは、いまも紅炎のようにゆらめいている。\n攻撃力 28・壊れない。\n魂の刈り取り：与えたダメージの 30% 回復。\n悪魔の狂騒：まわり 4 m の敵にも同じダメージ。倒すたびに「悪魔化」が 1 レベル上がり、攻撃力・魔法攻撃力・防御力・魔法防御力が 1 レベルごとに +20%（30 秒）。11 レベル以上になると、上がるたびに悪魔の力に侵食されて死ぬ。",
  "ancient_emergency_device": "ルーンの神兵が危機のときに起動していた、古代の緊急装置。刻まれたルーンが、起動を待って淡く脈打っている。\n使い魔のルーンの戦兵（最大 2 体）を呼び出す。",
  "rune_axe": "ルーンの神兵の大斧を、人が振るえる大きさに写した斧。刃のルーンが、今も緑に光っている。\n攻撃力 36・攻撃速度 1.0・壊れない。\nルーン吸収（持つだけ）：マナの回復速度 +100%。\n右クリック【飛斧のルーン】：大斧を 24 m 先へ投げ、ブーメランのように戻ってくる。行きと帰りで通り道の敵すべてに 55 ダメージ。",
  "magic_wand": "上位のメイジが手にしていた、傷ひとつない杖。\n先の宝玉には、今もマナが静かに満ちている。",
  "unicorn_horn": "聖なる獣ユニコーンの、金のらせんが走る白い角。けがれを払う力が宿るという。"
 }
};

/* ---------- アニメーションするテクスチャ（コマ数, 1 コマの tick 数） ---------- */
const ANIM = {
  cynthia_prayer: [24, 2], raison_detre: [24, 2], tenkai_raibaku: [24, 2], mercy_light_grimoire: [8, 3],
  gungnir: [24, 2], nordensia: [24, 2],
  magic_soul: [16, 2], oblivion_residue: [16, 2], mana_shard: [8, 4],
  red_core: [16, 2], green_core: [16, 2], blue_core: [16, 2], purple_core: [16, 2], yellow_core: [16, 2], moon_core: [16, 2],
  healing_wand: [8, 3], mercy_light_wand: [24, 2],
  mana_diamond: [16, 2], manalite_ingot: [16, 2],
  tesseros_summon_circle: [8, 3], glaioria_summon_circle: [8, 3], regius_summon_circle: [8, 3], shinra_summon_circle: [8, 3], fulgarion_summon_circle: [8, 3], ignied_summon_circle: [8, 3], rune_giant_summon_circle: [8, 3], nodens_summon_circle: [8, 3], cynthia_summon_circle: [8, 3], grimnowl_summon_circle: [8, 3],
  miasma_stone: [8, 3], ocean_drop: [8, 2], saint_soul: [24, 2], monster_soul: [24, 2],
  charged_orb: [8, 2], thunder_beast_cannon: [4, 3],
  earth_grace: [16, 2], demon_flame: [16, 2], demon_contract: [16, 2], holy_beast_egg: [16, 2],
  core_overload: [24, 2], ancient_emergency_device: [24, 2],
  resoflare: [16, 2], resoflare_unleash: [24, 2],
  mana_stone: [8, 3],
  sage_cloth: [24, 2], archmage_cloth: [24, 2], magic_crystal: [24, 2], sage_pouch: [24, 2], archmage_pouch: [24, 2],
  world_tree_twig: [24, 2], ancient_sword: [24, 2], ancient_spear: [24, 2], spirit_king_staff: [24, 2],
  thunder_beast_sword: [24, 2], prominence_scythe: [24, 2], rune_axe: [24, 2], durandal: [24, 2],
  binding_wand: [24, 2], life_drain_wand: [24, 2], mana_drain_wand: [24, 2], gravity_wand: [24, 2], starfall_wand: [24, 2], transfer_wand: [24, 2], space_wand: [24, 2], otherworld_wand: [24, 2], bouncing_bomb_wand: [24, 2],
};
function animOf(id) {
  if (ANIM[id]) return ANIM[id];
  if (id.endsWith('_wand') && id !== 'broken_wand' && id !== 'magic_wand') return [8, 2];
  return null;
}

/** ドット絵のアイコンを作る。size は表示する大きさ（px）。 */
function sprite(id, size = 32) {
  if (id === 'oak') {
    const p = document.createElement('span');
    p.className = 'plank';
    p.style.width = p.style.height = size + 'px';
    return p;
  }
  const el = document.createElement('span');
  el.className = 'sprite';
  el.style.width = el.style.height = size + 'px';
  el.style.backgroundImage = `url("img/${id}.png")`;
  const anim = animOf(id);
  if (anim) {
    const [n, t] = anim;
    el.classList.add('anim');
    el.style.backgroundSize = `${size}px ${size * n}px`;
    el.style.setProperty('--n', n);
    el.style.setProperty('--s', size + 'px');
    el.style.setProperty('--dur', (n * t * 50) + 'ms');
  } else {
    el.style.backgroundSize = `${size}px ${size}px`;
  }
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', (DATA.names[id] || (byId[id] && byId[id].name) || id));
  return el;
}

/** Mob の顔（スキンの頭の正面と帽子の層）。 */
function face(skin, size = 48) {
  const el = document.createElement('span');
  el.className = 'face';
  const k = size / 8;
  const w = skin === 'cynthia' ? 128 : 64;
  el.style.width = el.style.height = size + 'px';
  el.style.backgroundImage = `url("img/skin_${skin}.png"), url("img/skin_${skin}.png")`;
  el.style.backgroundSize = `${w * k}px ${64 * k}px, ${w * k}px ${64 * k}px`;
  el.style.backgroundPosition = `${-40 * k}px ${-8 * k}px, ${-8 * k}px ${-8 * k}px`;
  return el;
}

const RARITY = { uncommon: 'アンコモン', rare: 'レア', epic: 'エピック', unique: 'ユニーク', legendary: 'レジェンダリー' };
const SOURCE = { chest: '宝箱', synthesis: '合成台', drop: '生き物から', craft: '作業台' };
const byId = Object.fromEntries(DATA.items.map(i => [i.id, i]));

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}
/** アイテムの名前（DATA.names になければ図鑑の name）。 */
function nameOf(id) {
  return DATA.names[id] || (byId[id] && byId[id].name) || id;
}
/** 杖の作業台の材料（レゾフレア＝アンリーシュと異界の杖は魔法の杖、ほかは壊れた杖）。 */
function wandBase(wand) {
  return wand === 'resoflare_unleash' || wand === 'otherworld_wand' ? 'magic_wand' : 'broken_wand';
}

/* ---------- ボスのドロップ品の、攻略での役目（必要性）。ボスのカードと説明の窓に出す ---------- */
const NEEDS = {
  research_results: "魔導士が研究していた、素材に宿る魔力を定着・強化するための研究成果。\nこの研究を利用することで、氷竜の鱗が持つ冷気を長時間維持できるようになる。",
  ice_scale: "研究成果を利用して加工することで、氷竜の鱗が持つ冷気を長時間維持できる。\n炎竜の火山に満ちる猛烈な熱に耐えるために必要。",
  flame_scale: "炎竜の鱗には極めて高密度な炎の魔力が宿っている。\nその炎は通常の火では燃やせない魔力植物を焼き切ることができ、森羅の守護者と戦うために必要。",
  forest_core: "木の精霊である森羅の守護者の生命力が凝縮された核。\n雷獣の雷撃によって受けた傷を再生するほどの強大な生命力を得るために必要。",
  demon_heart: "焔魔の心臓には、悪魔炎を生み出す特殊な魔力が凝縮されている。\nその炎は魔力を吸収する古代合金すら溶かすことができ、ルーンの神兵の装甲とコアを破壊するために必要。",
  colossus_core: "ルーンの神兵を動かしていた巨大な魔力源。\nその膨大な魔力を身に宿すことで、海王ノーデンスが放つ強大な神気に耐えられるようになる。",
  thunder_beast_horn: "雷獣の角には非常に高密度の電気エネルギーが蓄えられている。\nこの力によって焔魔の悪魔炎を構成する魔力に干渉し、炎を一時的に消滅させることができる。",
  divine_talisman: "神気を宿した特別な札。\n聖騎士の遺跡を覆う封印を解除するために必要。",
  paladin_pendant: "シンシアが身につけていたペンダント。\n強い魔力と記憶が残されており、魔獣グリムノウルの失われた記憶を目覚めさせるために必要。",
  broken_black_knight_pendant: "この先に使用する場所はない。",
};

/* ---------- ボス（進捗の順） ----------
 * gear は「目安の戦力」。ボスのカードの説明の窓に出す（進め方タブの目安と同じ内容にする）。
 * drops の先頭は 100% で落とす素材（NEEDS の必要性を出す）。 */
const BOSSES = [
  { id: 'tesseros', name: '魔導士テセロス', kicker: 'BOSS 1', theme: 'violet',
    lead: '沼地の小屋の主の老魔導士。小屋の母屋にはじめて足を踏み入れた者の前に、紫の魔法陣から現れる。',
    points: ['体力 <b>200</b>。紫の魔法の弾、足もとの輪で打ち上げる魔法、防御や攻撃を弱める弾、山なりに落ちてくる範囲攻撃を使う。',
      '体力が半分を切ると、30 秒ごとにパープルメイジを 1 体呼び寄せる。'],
    gear: '魔法使いの装束、鉄以上の剣、攻撃の魔導書を何冊か',
    adv: '正義の魔導士',
    drops: [['research_results', '100%'], ['sturdy_string', '30%'], ['purple_core', '20%'], ['world_tree_twig', '10%'], ['seekers_lament', '10%']] },
  { id: 'glaioria', name: '氷竜グライオリア', kicker: 'BOSS 2', theme: 'ice',
    lead: '空に浮かぶ大きな島、崩れた石柱に囲まれた竜のねぐらの主。石柱の輪に入ると、凍りついた魔法陣から舞い降りる。',
    points: ['体力 <b>450</b>。噛みつきと回転攻撃に、凍てつく息吹、氷のつぶて、相手を島の外へ投げ飛ばす氷の竜巻。',
      '体力が半分を切ると吹雪が強まり、技が速くなって、竜巻も増える。'],
    gear: '魔法使いの装束かマナスチールの鎧、攻撃の杖 2〜3 本、浮遊の魔導書',
    adv: 'ドラゴンスレイヤー',
    drops: [['ice_scale', '100%'], ['ice_dragon_egg', '30%'], ['blue_core', '20%'], ['ancient_sword', '10%'], ['freezing_breath', '10%']] },
  { id: 'regius', name: '炎竜レギウス', kicker: 'BOSS 3', theme: 'fire',
    lead: '山岳にそびえる火山の地の底、灼熱の大広間の主。火口の穴を降りて大広間に入ると、赤く燃え上がる魔法陣から目を覚ます。',
    points: ['体力 <b>600</b>。噛みつきと回転攻撃に、燃え移る灼けつく息吹、扇形に吐く炎の球。',
      '5 秒かけてためた<b>大きな炎の球</b>は、半径 20 m を焼き払う。走れば逃げきれる速さなので、ためはじめたら距離をとろう。',
      '体力が半分を切ると炎が激しくなり、技が速くなって、炎の球も増える。'],
    gear: '魔導士の装束かマナオーラムの鎧、耐火の魔導書か杖',
    adv: '灼熱を越えて',
    drops: [['flame_scale', '100%'], ['fire_dragon_egg', '30%'], ['red_core', '20%'], ['ancient_spear', '10%'], ['scorching_breath', '10%']] },
  { id: 'shinra', name: '森羅の守護者', kicker: 'BOSS 4', theme: 'forest',
    lead: '森をまとう樹霊の王。木の幹の体に枝の冠をいただき、胸のコアが森の生命の力でエメラルドグリーンに光る。巨大樹の迷宮のいちばん下、根の間に入ると、緑に輝く魔法陣から目を覚ます。',
    points: ['体力 <b>800</b>。杖で殴るほか、杖を構えて、足もとから突き出す木の根、0.5 秒おきに飛んでくる 5 本の木の槍、相手を追いかけて引き寄せる葉のトルネードを使う。',
      '体力が半分を切ると、8 秒ごとに杖を天へ掲げて <b>80 回復</b>する。ただし<b>燃えているあいだと、火が消えてから 30 秒は回復できない</b>。火打ち石と打ち金、火属性のエンチャント、火の魔法などで、燃やしながら戦おう。'],
    gear: '魔導士の装束、火の魔導書や杖などの火を起こす手段',
    adv: '森羅万象',
    drops: [['forest_core', '100%'], ['sapling_sprout', '30%'], ['green_core', '20%'], ['spirit_king_staff', '10%'], ['earth_grace', '10%']] },
  { id: 'fulgarion', name: '雷獣フルガリオン', kicker: 'BOSS 5', theme: 'thunder',
    lead: '白い毛並みにシアンと黄色の稲妻の縞を走らせ、灰青のねじれた角を持つ雷の獣。バッドランズの雷獣の渓谷、地下 2 層目の寝床に入ると、黄色くまたたく魔法陣から目を覚ます。',
    points: ['体力 <b>1200</b>。相手のまわりを素早く駆けまわり、ときどき立ち止まってにらむ。噛みつきと飛び掛かりのほか、2 つの雷の技を使う。',
      '<b>咆哮</b>すると、まわりのブロックに雷が 10 回落ちる。落ちる 1 秒前に地面がビリビリするので、その場から離れよう。',
      '<b>雷のレーザー</b>は追いかけてくるが向きを変えるのが遅く、横へ走り続ければ逃げきれる。当たった相手から 15 m 以内の仲間にも感電するので、固まらないように。',
      '体力が半分を切ると体から雷があふれ、噛みつきと飛び掛かりが雷をまとって強くなる（着地のまわりにも電撃）。'],
    gear: '魔導士の装束以上、回復の手段をたっぷり',
    adv: '雷鳴を鎮めし者',
    drops: [['thunder_beast_horn', '100%'], ['charged_orb', '30%'], ['yellow_core', '20%'], ['thunder_beast_sword', '10%'], ['thunder_beast_cannon', '10%']] },
  { id: 'ignied', name: '焔魔イグニード', kicker: 'BOSS 6', theme: 'demon',
    lead: '赤いフードに骸骨の仮面をつけた、死神のような悪魔。プレイヤーの 1.5 倍ほどの背丈で、燃える大鎌プロミネンスサイズを手にしている。砂漠にそびえるフレイムジグラートの地下深く、焔の大聖堂に入ると、赤く燃える魔法陣から現れる。',
    points: ['体力 <b>1500</b>。斬撃のほか、足もとから半径 9 m に広がる<b>全方位の炎</b>と、狙いすました<b>炎の連弾</b>（8 発）を使う。',
      '<b>炎の悪魔</b>を 2 体呼び、倒されると呼び直す。<b>爆破コア</b>は相手のまわりに 10 個置かれ、2 秒後に爆発する。足もとに置かれたら動き続けよう。',
      '頭上にためる<b>巨大な炎の球</b>（5 秒）は、半径 20 m を焼き払う。ためはじめたら距離をとろう。',
      '体力が半分を切ると、翼と尾を持つ悪魔の姿に変わる。'],
    gear: '賢者の装束かマナダイヤモンドの鎧、耐火は必須',
    adv: 'サンイーター',
    drops: [['demon_heart', '100%'], ['magic_crystal', '1〜2 個'], ['red_core', '50%'], ['demon_contract', '30%'], ['prominence_scythe', '10%'], ['demon_flame', '10%']] },
  { id: 'rune_giant', name: 'ルーンの神兵', kicker: 'BOSS 7', theme: 'rune',
    lead: '背丈 10 ブロックほどの石の巨像。胸に緑の渦を巻く核を宿し、体じゅうのルーン文字が淡く光る。ジャングルのルーンドーム（ガラスのドームの研究所）の地下、実験場に入ると、緑の魔法陣から目を覚ます。',
    points: ['体力 <b>2000</b>。巨大な斧の<b>振り下ろし</b>と、足もとから半径 12 m に広がる<b>地面叩き</b>（打ち上げ）を使う。',
      '胸のコアから<b>極太のビーム</b>（3 秒）で追いかけ、<b>ルーン弾</b>を 12 発連射する。ビームは横へ走り続ければかわせる。',
      '<b>斧を投げつけ</b>、ブーメランのように戻ってくる。行きも帰りも当たるので、通り道から離れよう。',
      '体力が半分を切るとコアが赤く染まり、核の渦が速く回って、技の間隔が短くなる。'],
    gear: '賢者の装束以上',
    adv: '巨兵を打ち砕く者',
    drops: [['colossus_core', '100%'], ['magic_crystal', '2〜3 個'], ['green_core', '50%'], ['ancient_emergency_device', '30%'], ['rune_axe', '10%'], ['core_overload', '10%']] },
  { id: 'nodens', name: '海王ノーデンス', kicker: 'BOSS 8', theme: 'sea',
    lead: '深い海にそびえる大海の塔、その最上階の海王の間で待つ老いた海神。下半身は魚の尾で、三叉の槍を携えている。',
    points: ['体力 <b>2500</b>。槍の突きと突進、氷の槍、予兆の輪のあとに落ちる青い雷、渦潮、大津波。',
      '手下の大海のイルカを呼び、倒されると呼び直す。体力が半分を切ると海が荒れ、技が速くなる。'],
    gear: '賢者の装束以上',
    adv: '海王を討ちし者',
    drops: [['divine_talisman', '100%'], ['magic_crystal', '3〜4 個'], ['blue_core', '50%'], ['ocean_drop', '30%'], ['nordensia', '10%'], ['tenkai_raibaku', '10%']] },
  { id: 'cynthia', name: '聖騎士シンシア', kicker: 'BOSS 9', theme: 'gold',
    lead: '聖なる遺跡の最深部、円い大広間で眠る聖騎士。はじめて足を踏み入れた者の前で、魔法陣から目を覚ます。',
    points: ['体力 <b>3000</b>。聖剣の斬撃、光の斬撃・光の槍・光の柱、聖なるウサギの呼び出し。張り付いていると光の波で吹き飛ばしてくる。',
      '体力が半分を切ると技が速くなり、光の雨を降らせる。'],
    gear: '大魔導士の装束かマナライトの鎧',
    adv: '聖騎士を超えて',
    drops: [['paladin_pendant', '100%'], ['magic_crystal', '4〜5 個'], ['yellow_core', '50%'], ['durandal', '10%'], ['cynthia_prayer', '10%'], ['saint_soul', '10%']] },
  { id: 'grimnowl', name: '魔獣グリムノウル', kicker: 'FINAL BOSS', theme: 'dark',
    lead: '魔獣の遺跡の最深部、半径 20 の暗い大広間に封じられた魔獣。はじめて足を踏み入れた者の前で、闇の魔法陣から目を覚ます。',
    points: ['体力 <b>5000</b>。噛みつき、尻尾の薙ぎ払い、突進に、闇の槍・闇の柱・闇の炎・咆哮を使う。',
      '体力が半分を切ると空へ舞い上がって急降下や闇の雨を降らせ、4 分の 1 を切ると闇の鎧をまとって、受けるダメージを大きく減らす。'],
    gear: '持てるかぎり最高の装備と使い魔',
    adv: '英雄',
    drops: [['broken_black_knight_pendant', '100%'], ['magic_crystal', '5〜6 個'], ['purple_core', '50%'], ['gungnir', '10%'], ['raison_detre', '10%'], ['monster_soul', '10%']] },
];

/* ---------- ネタバレ防止 ----------
 * ボスからしか手に入らないもの（ボスのドロップのうち、コアと魔力の結晶をのぞいたものと、召喚陣）は、
 * 一覧では黒いシルエットと「？？？」で出す。押すと正体が見え、そのブラウザの localStorage（gf-revealed-items）に覚える。
 * ボスのカードは別に gf-revealed-bosses で覚える。 */
const OPEN_DROPS = new Set(['red_core', 'green_core', 'blue_core', 'yellow_core', 'purple_core', 'magic_crystal']);
const SECRET = new Set(BOSSES.flatMap(b => [...b.drops.map(d => d[0]).filter(id => !OPEN_DROPS.has(id)), b.id + '_summon_circle']));
const SECRET_KEY = 'gf-revealed-items';
let seenItems = new Set();
try { seenItems = new Set(JSON.parse(localStorage.getItem(SECRET_KEY) || '[]')); } catch (e) { /* 使えなくても動く */ }
const isHidden = id => SECRET.has(id) && !seenItems.has(id);
/** ボスのドロップ品（id）の入手元のボス。 */
function bossOf(id) {
  return BOSSES.find(b => b.drops.some(d => d[0] === id) || b.id + '_summon_circle' === id);
}
/**
 * 一覧のマス。id がボスからしか手に入らないもので、まだ見ていなければ、シルエットと「？？？」で出す。
 * 押すと正体を見せてから onOpen。
 */
function secretTile(id, iconEl, name, onOpen, cls) {
  const t = tile(iconEl, isHidden(id) ? '？？？' : name, () => {
    if (isHidden(id)) {
      seenItems.add(id);
      try { localStorage.setItem(SECRET_KEY, JSON.stringify([...seenItems])); } catch (e) { /* 使えなくても動く */ }
      t.classList.remove('is-secret');
      t.querySelector('.tile-name').textContent = name;
      if (iconEl) iconEl.setAttribute('aria-label', name);
    }
    onOpen();
  }, cls);
  if (isHidden(id)) {
    t.classList.add('is-secret');
    if (iconEl) iconEl.setAttribute('aria-label', '？？？');
    t.title = 'ボスから手に入るもの（押すと正体がわかる）';
  }
  return t;
}


/* ---------- 詳しい説明の窓（魔導書・杖・素材・防具・生き物・使い魔・ダンジョンで共通） ---------- */
const dialog = document.getElementById('detail');
/**
 * 説明の窓を開く。o の中身：
 *   icon（要素）・kind（上の小さな字）・kindClass（その字の色のクラス）・name・desc（説明文）・
 *   stats（[見出し, 中身] の配列。中身は文字か要素）・extra（下に足す要素の配列）・view（3D の設定。viewer.js）・wide（広い窓）
 */
function openInfo(o) {
  const icon = document.getElementById('detail-icon');
  icon.replaceChildren();
  if (o.icon) icon.append(o.icon);
  icon.hidden = !o.icon;
  const kind = document.getElementById('detail-kind');
  kind.textContent = o.kind || '';
  kind.className = 'detail-kind' + (o.kindClass ? ' ' + o.kindClass : '');
  document.getElementById('detail-name').textContent = o.name;
  const desc = document.getElementById('detail-desc');
  desc.textContent = o.desc || '';
  desc.hidden = !o.desc;
  const stats = document.getElementById('detail-stats');
  stats.replaceChildren();
  for (const [k, v] of (o.stats || [])) {
    if (v == null || v === '') continue;
    const dd = el('dd');
    if (typeof v === 'string') dd.textContent = v; else dd.append(v);
    stats.append(el('dt', null, k), dd);
  }
  const extra = document.getElementById('detail-extra');
  extra.replaceChildren(...(o.extra || []));
  const view = document.getElementById('detail-view');
  if (window.GFViewer) window.GFViewer.dispose();
  view.replaceChildren();
  view.hidden = !o.view;
  dialog.classList.toggle('is-wide', !!(o.view || o.wide));
  if (typeof dialog.showModal === 'function' && !dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  if (o.view && window.GFViewer) window.GFViewer.show(view, o.view);
}
function openDetail(id) {
  const it = byId[id];
  if (it) {
    openInfo({
      icon: sprite(id, 64),
      kind: `${it.kind === 'wand' ? '杖' : '魔導書'} ・ ${RARITY[it.rarity]}`, kindClass: 'r-' + it.rarity,
      name: it.name, desc: it.desc,
      stats: [['レア度', RARITY[it.rarity]], ['効果', it.effect], ['消費マナ', it.mana], ['耐久', it.dur], ['入手', sourceText(it)]],
      extra: [it.recipe && recipeRow(it.recipe[0], it.recipe[1], it.id), it.from && wandRow(it.from, it.id)].filter(Boolean),
    });
  } else {
    openInfo({ icon: sprite(id, 64), name: nameOf(id), desc: DATA.descs[id] || '', stats: [['攻略での役目', NEEDS[id]]] });
  }
}
function sourceText(it) {
  const DROP = {
    bouncing_orb_grimoire: 'マナスライム 0.2%（ドロップ増加で 3〜5%）',
    seekers_lament: '魔導士テセロス 10%',
    freezing_breath: '氷竜グライオリア 10%',
    scorching_breath: '炎竜レギウス 10%',
    earth_grace: '森羅の守護者 10%',
    thunder_beast_cannon: '雷獣フルガリオン 10%',
    demon_flame: '焔魔イグニード 10%',
    core_overload: 'ルーンの神兵 10%',
    tenkai_raibaku: '海王ノーデンス 10%',
    cynthia_prayer: '聖騎士シンシア 10%',
    raison_detre: '魔獣グリムノウル 10%',
    corrosion_grimoire: 'ゾンビ 1%（プレイヤーが倒したとき。ドロップ増加 1 レベルごとに +0.5%）',
    arrow_grimoire: 'スケルトン 1%（プレイヤーが倒したとき。ドロップ増加 1 レベルごとに +0.5%）',
    teleport_grimoire: 'エンダーマン 1%（プレイヤーが倒したとき。ドロップ増加 1 レベルごとに +0.5%）',
    gale_grimoire: 'ハーピィ 1%（プレイヤーが倒したとき。ドロップ増加 1 レベルごとに +0.5%）',
    binding_grimoire: '鎖の亡者 1%（プレイヤーが倒したとき。ドロップ増加 1 レベルごとに +0.5%）',
    crystal_wall_grimoire: 'クリスタルゴーレム 1%（プレイヤーが倒したとき。ドロップ増加 1 レベルごとに +0.5%）',
    life_drain_grimoire: 'ダークスピリット 1%（プレイヤーが倒したとき。ドロップ増加 1 レベルごとに +0.5%）',
    mana_drain_grimoire: '深淵の者 1%（プレイヤーが倒したとき。ドロップ増加 1 レベルごとに +0.5%）',
  };
  if (DROP[it.id]) return DROP[it.id];
  if (it.source === 'chest') return `古い宝箱・ソーサラーとの交換（${RARITY[it.rarity]}）`;
  if (it.source === 'synthesis') return '合成台で作る';
  if (it.source === 'craft') return `作業台：${nameOf(it.from)} ＋ ${nameOf(wandBase(it.id))}`;
  return '';
}
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { if (window.GFViewer) window.GFViewer.dispose(); });

/** 一覧のマス（アイコンと名前だけ）。押すと onOpen。 */
function tile(iconEl, name, onOpen, cls) {
  const b = el('button', 'tile' + (cls ? ' ' + cls : ''));
  b.type = 'button';
  if (iconEl) { const box = el('span', 'tile-icon'); box.append(iconEl); b.append(box); }
  b.append(el('span', 'tile-name', name));
  b.addEventListener('click', onOpen);
  return b;
}
/** 見出しの要素（クリックで説明が開くアイテムの丸いボタンを並べる）。 */
function itemChips(list) {
  const box = el('div', 'drops');
  list.forEach(([id, p]) => box.append(dropButton(id, p)));
  return box;
}

function slot(id) {
  const s = el('span', 'slot');
  s.append(sprite(id, 32));
  s.title = nameOf(id);
  if (byId[id] || DATA.descs[id]) s.addEventListener('click', () => openDetail(id));
  return s;
}
function recipeRow(grims, core, out) {
  const row = el('div', 'recipe-row');
  grims.forEach((g, i) => { if (i) row.append(el('span', 'plus', '＋')); row.append(slot(g)); });
  row.append(el('span', 'plus', '＋'), slot(core), el('span', 'eq', '→'), slot(out));
  return row;
}
function wandRow(grim, wand) {
  const row = el('div', 'recipe-row');
  row.append(slot(grim), el('span', 'plus', '＋'), slot(wandBase(wand)), el('span', 'eq', '→'), slot(wand));
  return row;
}

/* ---------- ヒーローの棚・特徴のアイコン ---------- */
const hero = document.getElementById('hero-shelf');
['light_grimoire', 'ice_grimoire', 'water_grimoire', 'fire_grimoire', 'lightning_grimoire', 'explosion_grimoire',
 'mercy_light_wand', 'blizzard_wand', 'holy_fire_grimoire', 'tornado_wand', 'resoflare'].forEach(id => {
  const s = el('span', 'slot'); s.append(sprite(id, 40)); hero.append(s);
});
document.querySelectorAll('[data-icons]').forEach(box => {
  box.dataset.icons.split(',').forEach(id => box.append(sprite(id, 36)));
});
document.querySelectorAll('.sprite[data-src]').forEach(s => {
  const id = s.dataset.src.replace(/^img\/|\.png$/g, '');
  s.replaceWith(sprite(id, +s.dataset.size));
});
document.querySelectorAll('[data-icon]').forEach(c => c.append(sprite(c.dataset.icon, c.classList.contains('cg-result') ? 36 : 30)));
document.querySelectorAll('.face[data-skin]').forEach(f => f.replaceWith(face(f.dataset.skin, +f.dataset.size)));

/* ---------- 図鑑 ---------- */
const grid = document.getElementById('catalog-grid');
const filter = { kind: 'all', source: 'all' };
function renderCatalog() {
  grid.replaceChildren();
  const list = DATA.items.filter(it =>
    (filter.kind === 'all' || it.kind === filter.kind) &&
    (filter.source === 'all' || it.source === filter.source));
  if (!list.length) grid.append(el('p', 'empty', '当てはまるものはありません'));
  for (const it of list) {
    grid.append(secretTile(it.id, sprite(it.id, 40), it.name, () => openDetail(it.id), 'r-' + it.rarity));
  }
}
document.querySelectorAll('.chip-group').forEach(group => {
  group.addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    group.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-on', c === b));
    filter[group.dataset.filter] = b.dataset.value;
    renderCatalog();
  });
});
renderCatalog();

/* ---------- 合成台 ---------- */
const CORES = [
  ['red_core', 'レッドコア', 'レッドメイジ 1% ／ フレイムメイジ 3% ／ 炎の悪魔 3% ／ ボス 2 体（20%・50%）'],
  ['green_core', 'グリーンコア', 'グリーンメイジ 1% ／ アースメイジ 3% ／ ハーピィ 3% ／ ルーン・センチネル 3% ／ ボス 2 体（20%・50%）'],
  ['blue_core', 'ブルーコア', 'ブルーメイジ 1% ／ アイスメイジ 3% ／ ホロウ・ローブ 3% ／ シェルクラブ 5% ／ ボス 2 体（20%・50%）'],
  ['yellow_core', 'イエローコア', 'イエローメイジ 1% ／ ライトメイジ 3% ／ クリスタルゴーレム 3% ／ サンダーエレメント 5% ／ ホーリースピリット 5% ／ ボス 2 体（20%・50%）'],
  ['purple_core', 'パープルコア', 'パープルメイジ 1% ／ ダークメイジ 3% ／ グリモア・ミミック 3% ／ 鎖の亡者 3% ／ 深淵の者 3% ／ ダークスピリット 5% ／ ボス 2 体（20%・50%）'],
];
const coreList = document.getElementById('core-list');
for (const [id, name, from] of CORES) {
  const li = el('li');
  li.append(sprite(id, 32));
  const t = el('span'); t.append(el('b', null, name), el('small', null, from));
  li.append(t);
  coreList.append(li);
}
const recipes = document.getElementById('recipe-list');
DATA.items.filter(i => i.recipe).forEach(it => {
  const box = el('div', 'recipe');
  box.append(recipeRow(it.recipe[0], it.recipe[1], it.id));
  box.append(el('p', 'recipe-name r-' + it.rarity, it.name));
  box.append(el('p', null, it.effect));
  recipes.append(box);
});
document.querySelectorAll('.js-recipe-count').forEach(e => { e.textContent = DATA.items.filter(i => i.recipe).length; });

/* ---------- 合成の流れ図（recipe を持つ項目から自動で作る） ---------- */
/** コアの色（線と丸のふち）。新しいコアを足したらここにも足す。 */
const CORE_COLORS = {
  red_core: '#ff6a4a', green_core: '#5fe08a', blue_core: '#5fb8ff', yellow_core: '#ffd84a', purple_core: '#c27bff',
};
function buildSynthesisFlow() {
  const box = document.getElementById('synthesis-flow');
  if (!box) return;
  const recs = DATA.items.filter(i => i.recipe);
  const outIds = new Set(recs.map(r => r.id));
  // 段：材料にしかならない魔導書 = 0、合成でできる魔導書 = 材料の段の最大 + 1
  const tier = {};
  const tierOf = id => {
    if (id in tier) return tier[id];
    const r = byId[id];
    tier[id] = 0;
    if (r && r.recipe) tier[id] = 1 + Math.max(...r.recipe[0].map(tierOf));
    return tier[id];
  };
  recs.forEach(r => { tierOf(r.id); r.recipe[0].forEach(tierOf); });
  const maxTier = Math.max(...Object.values(tier));
  const order = DATA.items.map(i => i.id);
  const cols = [];
  for (let t = 0; t <= maxTier; t++) cols.push([]);
  Object.keys(tier).forEach(id => cols[tier[id]].push(id));
  // 合成でできる列は図鑑の順
  for (let t = 1; t <= maxTier; t++) cols[t].sort((a, b) => order.indexOf(a) - order.indexOf(b));
  // 材料の列は、つながる先の平均の位置で並べる（線が交差しにくい）
  const pos1 = id => {
    const outs = recs.filter(r => r.recipe[0].includes(id)).map(r => cols[tier[r.id]].indexOf(r.id) / Math.max(1, cols[tier[r.id]].length - 1));
    return outs.length ? outs.reduce((a, b) => a + b, 0) / outs.length : 0;
  };
  cols[0].sort((a, b) => pos1(a) - pos1(b) || order.indexOf(a) - order.indexOf(b));

  const ROW = 64, TOP = 34, NODE_W = 92;
  const rows = Math.max(...cols.map(c => c.length));
  const H = TOP + rows * ROW;
  const W0 = Math.max(box.clientWidth - 16, 560);
  const W = Math.min(Math.max(W0, 140 * (maxTier + 1) + 160), 1100);
  const colX = t => 38 + t * (W - NODE_W - 76) / maxTier;
  const flow = el('div', 'flow');
  flow.style.width = W + 'px';
  flow.style.height = H + 'px';
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'flow-lines');
  svg.setAttribute('width', W); svg.setAttribute('height', H);
  flow.append(svg);
  const heads = ['材料の魔導書'];
  for (let t = 1; t <= maxTier; t++) heads.push(t === 1 ? '合成でできる魔導書' : `さらに合成（${t} 段目）`);
  heads.forEach((h, t) => {
    const p = el('p', 'flow-head', h);
    p.style.left = (colX(t) - 30) + 'px'; p.style.width = (NODE_W + 60) + 'px';
    flow.append(p);
  });
  const at = {};
  const nodes = {};
  cols.forEach((col, t) => {
    const off = (rows - col.length) * ROW / 2;
    col.forEach((id, k) => {
      const y = TOP + off + k * ROW + ROW / 2;
      at[id] = { x: colX(t), y };
      const it = byId[id];
      const n = el('button', 'flow-node' + (it ? ' r-' + it.rarity : ''));
      n.type = 'button';
      n.style.left = colX(t) + 'px'; n.style.top = y + 'px'; n.style.width = NODE_W + 'px';
      const sl = el('span', 'flow-slot'); sl.append(sprite(id, 32));
      n.append(sl, el('span', 'flow-name', nameOf(id)));
      n.addEventListener('click', () => openDetail(id));
      nodes[id] = n;
      flow.append(n);
    });
  });
  const links = [];
  recs.forEach(r => {
    const [grims, core] = r.recipe;
    const to = at[r.id];
    const c = CORE_COLORS[core] || '#e8c46a';
    const jx = to.x - 30;
    const jy = to.y;
    const paths = grims.map(g => {
      const from = at[g];
      const x1 = from.x + NODE_W / 2 + 22, y1 = from.y;
      const p = document.createElementNS(NS, 'path');
      const mx = (x1 + jx) / 2;
      p.setAttribute('d', `M${x1},${y1} C${mx},${y1} ${mx},${jy} ${jx - 15},${jy}`);
      p.setAttribute('class', 'flow-path'); p.style.stroke = c;
      svg.append(p);
      return p;
    });
    const tail = document.createElementNS(NS, 'path');
    tail.setAttribute('d', `M${jx + 15},${jy} L${to.x + NODE_W / 2 - 22},${to.y}`);
    tail.setAttribute('class', 'flow-path'); tail.style.stroke = c;
    svg.append(tail);
    paths.push(tail);
    const j = el('button', 'flow-join');
    j.type = 'button';
    j.style.left = jx + 'px'; j.style.top = jy + 'px'; j.style.setProperty('--c', c);
    j.title = `${nameOf(core)}：${grims.map(nameOf).join('＋')} → ${nameOf(r.id)}`;
    j.append(sprite(core, 20));
    j.addEventListener('click', () => openDetail(core));
    flow.append(j);
    links.push({ ids: [...grims, r.id], core, paths, join: j });
  });
  // 魔導書・コアにカーソルを合わせると、関係する線だけ光る
  const focus = (pred) => {
    flow.classList.add('is-focus');
    links.forEach(L => {
      const on = pred(L);
      L.paths.forEach(p => p.classList.toggle('on', on));
      L.join.classList.toggle('on', on);
      if (on) L.ids.forEach(id => nodes[id].classList.add('on'));
    });
  };
  const blur = () => {
    flow.classList.remove('is-focus');
    flow.querySelectorAll('.on').forEach(e => e.classList.remove('on'));
  };
  Object.entries(nodes).forEach(([id, n]) => {
    const f = () => focus(L => L.ids.includes(id));
    n.addEventListener('mouseenter', f); n.addEventListener('focus', f);
    n.addEventListener('mouseleave', blur); n.addEventListener('blur', blur);
  });
  links.forEach(L => {
    const f = () => focus(M => M === L);
    L.join.addEventListener('mouseenter', f); L.join.addEventListener('focus', f);
    L.join.addEventListener('mouseleave', blur); L.join.addEventListener('blur', blur);
  });
  box.replaceChildren(flow);
}

/* ---------- 防具（魔法使いの装束 5 組・魔法金属の鎧 4 組） ----------
 * model：3D の形（models.js の ◯◯_Hat / _Top / _Bottom / _Boots）とテクスチャ（img/models/◯◯.png・_glow・_bright）の名前。
 * 数値は仕様書 7 章「防具」の表と同じ。 */
const ARMORS = [
  { id: 'apprentice', group: 'robe', name: '見習いの装束', rarity: 'common', tex: 'apprentice_robe',
    pieces: ['apprentice_hat', 'apprentice_robe', 'apprentice_leggings', 'apprentice_boots'],
    desc: '縄のベルトと継ぎ当ての、飾りのない一揃い。刃や牙への守りは控えめで、魔法の傷を防ぐ。',
    def: '0 / 1 / 1 / 0', mdef: '1 / 2 / 2 / 1（計 6）', dur: '6', tough: '0',
    effect: '4 部位でマナ回復速度 +10%', material: '布' },
  { id: 'wizard', group: 'robe', name: '魔法使いの装束', rarity: 'uncommon', tex: 'wizard_robe',
    pieces: ['wizard_hat', 'wizard_robe_top', 'wizard_robe_bottom', 'wizard_boots'],
    desc: '帽子の先で星の飾りが揺れる、藤色の装束。胸に光る三日月の紋。',
    def: '1 / 3 / 2 / 1', mdef: '2 / 4 / 3 / 2（計 11）', dur: '15', tough: '0',
    effect: '1 部位ごとにマナ回復速度 +20%\n4 部位で最大マナ +20%', material: '魔法の布（布＋マナのかけら 8 個）' },
  { id: 'mage', group: 'robe', name: '魔導士の装束', rarity: 'rare', tex: 'mage_robe',
    pieces: ['mage_hat', 'mage_robe_top', 'mage_robe_bottom', 'mage_boots'],
    desc: '立ち襟と背中のマント、腰に魔導書を下げた深い青と銀の装束。',
    def: '1 / 4 / 3 / 1', mdef: '3 / 6 / 5 / 3（計 17）', dur: '22', tough: '0',
    effect: '1 部位ごとにマナ回復速度 +35%\n4 部位で最大マナ +40%', material: '魔導士の布（布＋マナクリスタル 8 個）' },
  { id: 'sage', group: 'robe', name: '賢者の装束', rarity: 'epic', tex: 'sage_robe',
    pieces: ['sage_hat', 'sage_robe_top', 'sage_robe_bottom', 'sage_boots'],
    desc: '光るルーンのストールと葉の肩当ての、緑と金の装束。帽子の先に宝石が浮かぶ。',
    def: '2 / 4 / 4 / 2', mdef: '5 / 8 / 6 / 5（計 24）', dur: '30', tough: '1',
    effect: '1 部位ごとにマナ回復速度 +60%\n4 部位で最大マナ +70%', material: '賢者の布（布＋マナストーン 8 個）' },
  { id: 'archmage', group: 'robe', name: '大魔導士の装束', rarity: 'unique', tex: 'archmage_robe',
    pieces: ['archmage_hat', 'archmage_robe_top', 'archmage_robe_bottom', 'archmage_boots'],
    desc: '星空のマントと高い襟、帽子のまわりを結晶が回る。刃や牙への守りも固い。',
    def: '3 / 6 / 5 / 3', mdef: '6 / 10 / 8 / 6（計 30）', dur: '42', tough: '6',
    effect: '1 部位ごとにマナ回復速度 +150%\n4 部位で最大マナ +150%\nノックバック耐性（1 部位 0.1）・燃えない',
    material: '大魔導士の布（布＋魔力の結晶 8 個。魔力の結晶は上位のボスが落とす）' },
  { id: 'manasteel', group: 'metal', name: 'マナスチールの鎧', rarity: 'uncommon', tex: 'manasteel_armor',
    pieces: ['manasteel_helmet', 'manasteel_chestplate', 'manasteel_leggings', 'manasteel_boots'],
    desc: '青い光の筋が走る、青白い鋼の鎧。魔法金属の鎧でいちばん素朴。',
    def: '2 / 7 / 5 / 2', mdef: '1 / 2 / 2 / 1（計 6）', dur: '20', tough: '0.5',
    effect: '1 部位ごとにマナ回復速度 +10%\n4 部位で与える魔法ダメージ +10%', material: 'マナスチールインゴット（鉄インゴット＋マナのかけら 8 個）' },
  { id: 'manaaurum', group: 'metal', name: 'マナオーラムの鎧', rarity: 'rare', tex: 'manaaurum_armor',
    pieces: ['manaaurum_helmet', 'manaaurum_chestplate', 'manaaurum_leggings', 'manaaurum_boots'],
    desc: '薄紅の金に紫のマナクリスタルを散りばめ、赤紫のマントをなびかせる華やかな鎧。',
    def: '3 / 7 / 6 / 2', mdef: '2 / 3 / 2 / 2（計 9）', dur: '25', tough: '1',
    effect: '1 部位ごとにマナ回復速度 +20%\n4 部位で与える魔法ダメージ +20%', material: 'マナオーラムインゴット（金インゴット＋マナクリスタル 8 個）' },
  { id: 'manadiamond', group: 'metal', name: 'マナダイヤモンドの鎧', rarity: 'epic', tex: 'manadiamond_armor',
    pieces: ['manadiamond_helmet', 'manadiamond_chestplate', 'manadiamond_leggings', 'manadiamond_boots'],
    desc: '紫の結晶の板と白銀の鎧。胸と肩に結晶をはめ込み、兜の溝が紫に光る。',
    def: '3 / 8 / 7 / 3', mdef: '3 / 4 / 3 / 2（計 12）', dur: '36', tough: '2.5',
    effect: '1 部位ごとにマナ回復速度 +50%\n4 部位で与える魔法ダメージ +50%', material: 'マナダイヤモンド（ダイヤモンド＋マナのかけら 8 個）' },
  { id: 'manalite', group: 'metal', name: 'マナライトの鎧', rarity: 'unique', tex: 'manalite_armor',
    pieces: ['manalite_helmet', 'manalite_chestplate', 'manalite_leggings', 'manalite_boots'],
    desc: '脈打つ紫の光と角を持つ黒紫の鎧。まわりを結晶が回る。',
    def: '4 / 9 / 7 / 4', mdef: '4 / 5 / 4 / 3（計 16）', dur: '42', tough: '4',
    effect: '1 部位ごとにマナ回復速度 +100%\n4 部位で与える魔法ダメージ +100%\nノックバック耐性（1 部位 0.1）・燃えない',
    material: 'マナライトインゴット（ネザライトインゴット＋魔力の結晶 8 個）' },
];
RARITY.common = 'コモン';
/** グレーの人型（プレイヤーと同じ形）に防具 4 部位を着せた 3D。脚の回転の中心はプレイヤーと同じ ±1.9。 */
function armorView(a) {
  const legs = { right_leg: { x: -1.9 }, left_leg: { x: 1.9 } };
  const layer = slot => ({ key: `${a.id}_${slot}`, tex: a.tex, glow: a.tex + '_glow', bright: a.tex + '_bright', pose: legs });
  return {
    parts: [{ key: 'humanoid', tex: 'mannequin', hide: ['hat'] }, layer('Hat'), layer('Top'), layer('Bottom'), layer('Boots')],
    toggles: [{ label: a.group === 'robe' ? '帽子' : 'ヘルメット', index: 1 }, { label: '上', index: 2 }, { label: '下', index: 3 }, { label: '靴', index: 4 }],
  };
}
function openArmor(a) {
  const icons = el('div', 'feature-icons');
  a.pieces.forEach(p => icons.append(sprite(p, 32)));
  openInfo({
    name: a.name, kind: `${a.group === 'robe' ? '魔法使いの装束' : '魔法金属の鎧'} ・ ${RARITY[a.rarity]}`, kindClass: 'r-' + a.rarity,
    desc: a.desc, view: armorView(a),
    stats: [['部位', icons], ['レア度', RARITY[a.rarity]], ['防御', a.def + '（頭 / 胴 / 脚 / 足）'], ['魔法防御', a.mdef], ['防具強度', a.tough],
      ['耐久倍率', a.dur], ['効果', a.effect], ['素材', a.material]],
  });
}
for (const a of ARMORS) {
  document.getElementById(a.group === 'robe' ? 'robe-grid' : 'metal-grid')
    .append(tile(sprite(a.pieces[1], 40), a.name, () => openArmor(a), 'r-' + a.rarity));
}

/* ---------- 生き物 ----------
 * icon：['face', スキン] は顔の切り出し、['sprite', ID] はドット絵、['pic', ファイル] は立体の絵（img/mob_◯◯.png）。
 * view：3D の設定（なければ立体の絵だけ）。数値は仕様書 9 章の表と同じ。 */
const HUMAN = (tex, glow) => ({ parts: [{ key: 'humanoid', tex, glow }] });
const MOBS = [
  { name: 'メイジ', icon: ['face', 'mage'], type: '敵', hp: '22', where: '森（夜）・森林の小屋',
    text: '距離をとって魔法の弾（6）を撃つ。木の扉は開けて通る。', drops: [['broken_wand', '10%']], view: HUMAN('mage') },
  { name: 'レッドメイジ', icon: ['face', 'red_mage'], type: '敵', hp: '50', where: 'ネザー',
    text: '火の弾（5）で相手を燃やす。炎が効かない。', drops: [['broken_wand', '10%'], ['red_core', '1%']], view: HUMAN('red_mage') },
  { name: 'グリーンメイジ', icon: ['face', 'green_mage'], type: '敵', hp: '50', where: '空に浮かぶ島・巨大樹の迷宮',
    text: '風の弾（4）で押し飛ばす。落下ダメージを受けない。', drops: [['broken_wand', '10%'], ['green_core', '1%']], view: HUMAN('green_mage') },
  { name: 'ブルーメイジ', icon: ['face', 'blue_mage'], type: '敵', hp: '50', where: '氷の塔',
    text: '氷の弾（6）で一瞬凍りつかせる。', drops: [['broken_wand', '10%'], ['blue_core', '1%']], view: HUMAN('blue_mage') },
  { name: 'イエローメイジ', icon: ['face', 'yellow_mage'], type: '敵', hp: '50', where: '雷獣の渓谷',
    text: '重い金の弾（7）を撃ち、弱ると自分を 10 癒す（10 秒に 1 回）。', drops: [['broken_wand', '10%'], ['yellow_core', '1%']], view: HUMAN('yellow_mage') },
  { name: 'パープルメイジ', icon: ['face', 'purple_mage'], type: '敵', hp: '50', where: '沼地の小屋',
    text: '下位のメイジでいちばん強い。毒の弾（5。毒 II 6 秒＋弱体化 5 秒）を撃つ。', drops: [['broken_wand', '10%'], ['purple_core', '1%']], view: HUMAN('purple_mage') },
  { name: 'フレイムメイジ', icon: ['face', 'flame_mage'], type: '敵（上位のメイジ）', hp: '250', where: 'フレイムジグラート（上位のダンジョン）',
    text: '弾は下位の 2 倍の強さ。8 秒ごとに相手の足もとから火柱（20 ダメージ＋炎上）。炎が効かない。',
    drops: [['magic_wand', '10%'], ['red_core', '3%']], view: HUMAN('flame_mage', 'flame_mage_glow') },
  { name: 'アースメイジ', icon: ['face', 'earth_mage'], type: '敵（上位のメイジ）', hp: '250', where: 'ルーンドーム（上位のダンジョン）',
    text: '弾は下位の 2 倍の強さ。10 秒ごとに竜巻の弾を撃ち、半径 8m の相手を吸い寄せる。落下ダメージを受けない。',
    drops: [['magic_wand', '10%'], ['green_core', '3%']], view: HUMAN('earth_mage', 'earth_mage_glow') },
  { name: 'アイスメイジ', icon: ['face', 'ice_mage'], type: '敵（上位のメイジ）', hp: '250', where: '大海の塔（上位のダンジョン）',
    text: '弾は下位の 2 倍の強さ。近づくと冷気の波（8 ダメージ・鈍足 IV）で押し返す。',
    drops: [['magic_wand', '10%'], ['blue_core', '3%']], view: HUMAN('ice_mage', 'ice_mage_glow') },
  { name: 'ライトメイジ', icon: ['face', 'light_mage'], type: '敵（上位のメイジ）', hp: '250', where: '聖なる遺跡（上位のダンジョン）',
    text: '弾は下位の 2 倍の強さ。光をためて閃光を放ち、半径 10m を盲目に（12 ダメージ）。弱ると 50 回復。',
    drops: [['magic_wand', '10%'], ['yellow_core', '3%']], view: HUMAN('light_mage', 'light_mage_glow') },
  { name: 'ダークメイジ', icon: ['face', 'dark_mage'], type: '敵（上位のメイジ）', hp: '250', where: '魔獣の遺跡（上位のダンジョン）',
    text: '弾は下位の 2 倍の強さ。15 秒ごとに呪いをかけ、受けるダメージを 1.4 倍にする。',
    drops: [['magic_wand', '10%'], ['purple_core', '3%']], view: HUMAN('dark_mage', 'dark_mage_glow') },
  { name: 'マナスライム', icon: ['sprite', 'mana_slime'], type: '敵', hp: '1.5 / 6 / 24（大きさで変わる）', where: '沼・マングローブの沼',
    text: '紫のスライム。いちばん小さいものがマナのかけらを落とし、ごくまれに跳球の魔導書を持っている。',
    drops: [['mana_shard', '1〜2 個（いちばん小さいものだけ）'], ['bouncing_orb_grimoire', '0.2%']],
    view: { parts: [{ key: 'slime', tex: 'mana_slime', translucent: ['outer'] }] } },
  { name: 'ソーサラー', icon: ['pic', 'mob_sorcerer'], type: '友好', hp: '400', where: '村の魔法使いの家',
    text: '白いひげの老魔導士。魔導書を 5 冊預けると、1 冊と取り替えてくれる（宝箱から出る魔導書だけ）。敵を強い魔法の弾（20）で撃ち、近づいた魔物は衝撃波（10）で吹き飛ばす。体力が半分を切ると自分を癒す（10 秒に 1 回）。上位のメイジにも負けない強さ。殴られても反撃はしない。',
    drops: [], view: { parts: [{ key: 'sorcerer', tex: 'sorcerer', glow: 'sorcerer_glow', bright: 'sorcerer_bright' }] } },
  { name: '魔法使い（村人）', icon: ['pic', 'mob_wizard_villager'], type: '友好（村人の職業）', where: '合成台のある村',
    text: '村に合成台があると、村人のひとりが魔法使いになる。マナのかけら 5〜30 個とコンパス 1 個を渡すと、ダンジョンの地図と交換してくれる。レベルを上げるほど行ける場所が増える（新米：沼地の小屋・大きな浮島／見習い：火山・巨大樹／一人前：雷獣の渓谷・フレイムジグラート／熟練者：ルーンドーム・大海の塔／達人：聖なる遺跡・魔獣の遺跡）。',
    drops: [] },
  { name: 'ユニコーン', icon: ['pic', 'mob_unicorn'], type: '友好', hp: '30〜40', where: 'クリスタルの平原（まれ）',
    text: '友好的な白い馬。ウマと同じく、何度か乗るうちになつき、鞍をつけて乗れる。足の速さもジャンプ力もウマより上。繁殖はできない。',
    drops: [['unicorn_horn', '30%（ドロップ増加で 1 レベルにつき +10%）']], dropNote: '革 0〜2',
    view: { parts: [{ key: 'unicorn', tex: 'unicorn', glow: 'unicorn_glow',
      hide: ['saddle', 'head_saddle', 'mouth_saddle_wrap', 'left_saddle_mouth', 'right_saddle_mouth', 'left_saddle_line', 'right_saddle_line',
        'left_front_baby_leg', 'right_front_baby_leg', 'left_hind_baby_leg', 'right_hind_baby_leg'] }] } },
  { name: 'シェルクラブ', icon: ['pic', 'mob_shell_crab'], type: '敵', hp: '100', where: '砂浜・石だらけの海岸・大海の塔',
    text: '青い甲羅のカニ。攻撃を受けると、ときどき殻にこもって守りを固める。', drops: [['blue_core', '5%']],
    view: { parts: [{ key: 'shell_crab', tex: 'shell_crab' }] } },
  { name: 'ホロウ・ローブ', icon: ['pic', 'mob_hollow_robe'], type: '中立（浮く）', hp: '120', where: '図書館（最初から 2 体いて、館の中の暗い所でも湧く）',
    text: '中身のないローブだけが浮かぶ魔法使い。自分からは襲ってこないが、殴ると怒り、まわり 16m の仲間も一緒に怒る（見失って 20 秒で落ち着く）。相手と 6〜12m の間をとり、3 秒ごとに凍える魔弾（魔法 8 と鈍化 I・3 秒）を撃つ。魔導書を頭の上に掲げたら氷の詠唱の合図で、1 秒後に相手の足もとから氷柱が立つ（半径 1.5m・魔法 12 と凍結 2 秒）。近づかれると掌で突く（10）。矢などの飛び道具は半分しか効かず、攻撃を受けるとときどき 6〜10m 先へ消えて現れる。',
    drops: [['blue_core', '3%']],
    view: { parts: [{ key: 'hollow_robe', tex: 'hollow_robe', glow: 'hollow_robe_glow', bright: 'hollow_robe_bright' }] } },
  { name: 'ハーピィ', icon: ['pic', 'mob_harpy'], type: '敵（飛ぶ）', hp: '40', where: '山岳・空に浮かぶ島（どちらも暗いときだけ）',
    text: '赤い体毛に青い翼の、鳥の脚をした魔物。相手の上空を回り、甲高く鳴いて翼をたたむと急降下してくる（7 ダメージと強いノックバック）。8 秒ごとに羽根を 3 本投げる。弱ると一度だけ高く逃げる。落下ダメージを受けない。',
    drops: [['gale_grimoire', '1%'], ['green_core', '3%']],
    view: { parts: [{ key: 'harpy', tex: 'harpy', glow: 'harpy_glow' }] } },
  { name: 'ルーン・センチネル', icon: ['pic', 'mob_rune_sentinel'], type: '敵', hp: '250', where: 'ルーンドーム',
    text: 'ルーンを刻んだ石の番人。浮かぶ拳で殴り（16）、右の拳を後ろへ引いたら拳を飛ばしてくる合図（物理 12。当たっても外れても手もとへ戻る）。両拳を頭の上まで上げたら地面を叩く合図で、半径 6m に 10 ダメージと打ち上げ。体力が半分を切ると覚醒してルーンが強く光り、足が速くなって技の間隔も短くなる。ノックバックを受けない。',
    drops: [['green_core', '3%']],
    view: { parts: [{ key: 'rune_sentinel', tex: 'rune_sentinel', glow: 'rune_sentinel_glow', bright: 'rune_sentinel_bright' }] } },
  { name: 'サンダーエレメント', icon: ['pic', 'mob_thunder_element'], type: '敵', hp: '40', where: '雷獣の渓谷',
    text: 'ビリビリした雷の塊。宙をただよい、15m 以内の相手に雷のビームを放つ。炎が効かない。', drops: [['yellow_core', '5%']],
    view: { parts: [{ key: 'thunder_element', tex: 'thunder_element', glow: 'thunder_element_glow', bright: 'thunder_element_bright' }] } },
  { name: '炎の悪魔', icon: ['pic', 'mob_demon_imp'], type: '敵', hp: '150', where: 'フレイムジグラート（上位のダンジョン）',
    text: '宙をただよう小さな赤い悪魔。爪で相手を燃やし、炎の弾を撃つ。炎が効かない。ボスが呼び出したものは何も落とさない。', drops: [['red_core', '3%']],
    view: { parts: [{ key: 'demon_imp', tex: 'demon_imp', glow: 'demon_imp_glow', bright: 'demon_imp_bright' }] } },
  { name: 'ホーリースピリット', icon: ['pic', 'mob_holy_spirit'], type: '敵', hp: '300', where: '聖なる遺跡',
    text: '宙をただよう白い精霊。近接攻撃（25）と光のビーム（25）。半径 16m の自分と仲間の傷を 30 癒す（20 秒に 1 回）。', drops: [['yellow_core', '5%']],
    view: { parts: [{ key: 'holy_spirit', tex: 'holy_spirit', glow: 'holy_spirit_glow', bright: 'holy_spirit_bright' }] } },
  { name: 'クリスタルゴーレム', icon: ['pic', 'mob_crystal_golem'], type: '敵', hp: '600', where: 'マナの洞窟',
    text: '肩や背中からマナクリスタルが突き出た、見上げるほど大きな岩の人形（高さ 5 ブロック近く）。長い腕で殴り（28）、両腕を上げて地面を叩くと、半径 5m に結晶のトゲが生える（20 ダメージと打ち上げ）。足もとに光の輪が広がったら離れること。',
    drops: [['crystal_wall_grimoire', '1%'], ['yellow_core', '3%']],
    view: { parts: [{ key: 'crystal_golem', tex: 'crystal_golem', glow: 'crystal_golem_glow' }] } },
  { name: 'グリモア・ミミック', icon: ['pic', 'mob_grimoire_mimic'], type: '敵（飛ぶ）', hp: '50', where: 'ダンジョンの図書室・書庫・図書館（最初から本に化けて床に置かれている。図書館の中の暗い所でも湧く）',
    text: '床に置かれた魔導書のふりをした魔物。4m 以内に近づくか攻撃すると目を覚まし、宙に浮いて噛みつく（8。プレイヤーはマナも 5 吸われる）。6 秒ごとにページを 3 枚飛ばす（魔法 3）。相手を 10 秒見失うと、また床に降りて本のふりに戻る。',
    drops: [['purple_core', '3%']],
    view: { parts: [{ key: 'grimoire_mimic', tex: 'grimoire_mimic', glow: 'grimoire_mimic_glow', bright: 'grimoire_mimic_bright' }] } },
  { name: '鎖の亡者', icon: ['pic', 'mob_chain_wraith'], type: '敵（アンデッド）', hp: '320', where: '魔獣の遺跡・暗い森（まれ）',
    text: '錆びた鎧を着た亡霊。殴る力は 20。右腕を後ろへ引いたら鎖を投げてくる合図で、当たると 8 ダメージで目の前まで引き寄せられる。囲まれると鎖を振り回す（12）。兜があるので日光では燃えない。',
    drops: [['binding_grimoire', '1%'], ['purple_core', '3%']],
    view: { parts: [{ key: 'chain_wraith', tex: 'chain_wraith', glow: 'chain_wraith_glow' }] } },
  { name: 'ダークスピリット', icon: ['pic', 'mob_dark_spirit'], type: '敵', hp: '300', where: '魔獣の遺跡',
    text: '宙をただよう闇の精霊。近接攻撃（25）と闇のビーム（25）。5 秒かけて相手の体力を 20 吸い取る。', drops: [['purple_core', '5%'], ['life_drain_grimoire', '1%']],
    view: { parts: [{ key: 'dark_spirit', tex: 'dark_spirit', glow: 'dark_spirit_glow', bright: 'dark_spirit_bright' }] } },
  { name: '深淵の者', icon: ['pic', 'mob_abyss_dweller'], type: '敵（アンデッド）', hp: '200', where: '地下の深い所（y 0 より下の暗い場所）',
    text: '背を丸めた、得体のしれない人の形の魔物。つかまれるとマナを 15 吸われ、その分だけ傷が癒える。近づくと瘴気を吐く（吐き気・弱体化）。マナを吸うほど速くなる。明るい所を嫌い、倒すと瘴気の雲が残る。',
    drops: [['mana_drain_grimoire', '1%'], ['purple_core', '3%']],
    view: { parts: [{ key: 'abyss_dweller', tex: 'abyss_dweller', glow: 'abyss_dweller_glow' }] } },
  { name: 'ルナスピリット', icon: ['pic', 'mob_luna_spirit'], type: '敵', hp: '400', where: 'クリスタルの平原（満月と新月の夜だけ）',
    text: '満月と新月の夜にだけ、クリスタルの平原に現れる、青白く透きとおった精霊。近接攻撃（30）と月光のビーム（30）。足もとに光の輪が浮かんだら、2 秒のうちに離れること（月光の輪 45）。エンダーマンのように、ふっと消えては別の場所に現れる。\n月の満ち欠けと、まだ私たちには知りえない関わりがあるのかもしれない……。', drops: [['moon_core', '5%']] },
];
/** 立体モデルの絵（img/mob_◯◯.png、160×160）。 */
function portrait(file, name, size) {
  const img = el('img', 'mob-portrait');
  img.src = `img/${file}.png`; img.width = img.height = size; img.alt = name;
  return img;
}
function mobIcon(m, size) {
  const [t, v] = m.icon;
  if (t === 'face') return face(v, size);
  if (t === 'pic') return portrait(v, m.name, size);
  const s = sprite(v, size); s.classList.add('face'); s.setAttribute('aria-label', m.name);
  return s;
}
function openMob(m) {
  const drops = m.drops.length ? itemChips(m.drops) : (m.dropNote ? null : 'なし');
  let dropEl = drops;
  if (m.dropNote) { dropEl = el('div'); dropEl.append(el('span', null, m.dropNote)); if (drops) dropEl.append(drops); }
  openInfo({
    icon: m.view ? null : mobIcon(m, 64), name: m.name, kind: m.type, desc: m.text, view: m.view,
    stats: [['種類', m.type], ['体力', m.hp], ['すみか', m.where], ['ドロップ', dropEl]],
  });
}
const mobGrid = document.getElementById('mob-grid');
for (const m of MOBS) mobGrid.append(tile(mobIcon(m, 44), m.name, () => openMob(m)));

/** ボスのテーマ色：[カードの光, カードの縁]。theme は style.css の .boss-◯◯ と同じ名前 */
const THEME_GLOWS = {
  violet: ['rgba(180, 84, 200, .45)', '#9a52c0'],
  ice: ['rgba(131, 207, 255, .45)', '#5f9fd0'],
  fire: ['rgba(255, 106, 30, .45)', '#d0582a'],
  forest: ['rgba(60, 232, 160, .4)', '#4fae70'],
  thunder: ['rgba(255, 224, 102, .45)', '#c8a830'],
  demon: ['rgba(220, 40, 50, .5)', '#c03040'],
  rune: ['rgba(92, 255, 168, .4)', '#3fae86'],
  sea: ['rgba(79, 184, 216, .45)', '#3f8fb0'],
  gold: ['rgba(232, 196, 106, .45)', '#b8963e'],
  dark: ['rgba(155, 91, 214, .5)', '#7a4aa8'],
};
/** 正体を見たボス（このブラウザだけに覚える） */
const REVEAL_KEY = 'gf-revealed-bosses';
let revealed = new Set();
try { revealed = new Set(JSON.parse(localStorage.getItem(REVEAL_KEY) || '[]')); } catch (e) { /* 使えなくても動く */ }
function saveRevealed() {
  try { localStorage.setItem(REVEAL_KEY, JSON.stringify([...revealed])); } catch (e) { /* 使えなくても動く */ }
}
const bossFile = b => (b.id === 'grimnowl' ? 'grimnowl' : 'boss_' + b.id);
const bossGrid = document.getElementById('boss-grid');
const bossDialog = document.getElementById('boss-detail');
for (const b of BOSSES) {
  const card = el('button', 'boss-card');
  card.type = 'button';
  const [glow, accent] = THEME_GLOWS[b.theme] || THEME_GLOWS.gold;
  card.style.setProperty('--card-glow', glow);
  card.style.setProperty('--card-accent', accent);
  if (revealed.has(b.id)) card.classList.add('revealed');
  const wrap = el('div', 'boss-card-icon-wrap');
  const img = portrait(bossFile(b), b.name, 96);
  img.className = 'boss-card-icon';
  wrap.append(img);
  card.append(wrap, el('p', 'boss-card-kicker', b.kicker), el('h3', 'boss-card-name', b.name));
  card.setAttribute('aria-label', `${b.kicker} ${b.name} の詳細を開く`);
  card.addEventListener('click', () => {
    card.classList.add('revealed');
    revealed.add(b.id); saveRevealed();
    openBoss(b);
  });
  bossGrid.append(card);
}
function openBoss(b) {
  const box = el('article', 'boss in-dialog boss-' + b.theme);
  const faceBox = el('div', 'boss-face');
  const img = portrait(bossFile(b), b.name, 96);
  img.className = 'boss-portrait';
  faceBox.append(img);
  const body = el('div', 'boss-body');
  body.append(el('p', 'boss-kicker', b.kicker));
  const h = el('h3', null, b.name); h.id = 'boss-detail-name';
  body.append(h, el('p', null, b.lead));
  const ul = el('ul', 'dots');
  b.points.forEach(t => { const li = el('li'); li.innerHTML = t; ul.append(li); });
  body.append(ul);
  if (b.gear) body.append(el('p', 'boss-gear', `目安の戦力：${b.gear}`));
  body.append(el('p', 'boss-adv', `倒すと挑戦「${b.adv}」`));
  const need = NEEDS[b.drops[0][0]];
  if (need) body.append(el('p', 'boss-need', `${nameOf(b.drops[0][0])}：${need}`));
  const drops = el('div', 'drops');
  b.drops.forEach(([id, p]) => drops.append(dropButton(id, p)));
  body.append(drops);
  box.append(faceBox, body);
  document.getElementById('boss-detail-content').replaceChildren(box);
  bossDialog.className = 'boss-' + b.theme;
  if (typeof bossDialog.showModal === 'function' && !bossDialog.open) bossDialog.showModal();
}
// ---- EXTRA（隠しボス。名前も強さも落とすものも出会い方も、あえて書かない）----
const extraGrid = document.getElementById('boss-extra-grid');
if (extraGrid) {
  for (let i = 0; i < 2; i++) {
    const card = el('button', 'boss-card boss-card-extra');
    card.type = 'button';
    card.style.setProperty('--card-glow', 'rgba(190, 170, 255, 0.45)');
    card.style.setProperty('--card-accent', '#8f7ad8');
    const wrap = el('div', 'boss-card-icon-wrap');
    wrap.append(el('div', 'boss-extra-mark', '？'));
    card.append(wrap, el('p', 'boss-card-kicker', 'EXTRA'), el('h3', 'boss-card-name', '？？？'));
    card.setAttribute('aria-label', 'EXTRA の隠しボス。正体はわからない');
    card.addEventListener('click', openExtra);
    extraGrid.append(card);
  }
}
function openExtra() {
  const box = el('article', 'boss in-dialog boss-extra-detail');
  const faceBox = el('div', 'boss-face');
  faceBox.append(el('div', 'boss-extra-mark', '？'));
  const body = el('div', 'boss-body');
  body.append(el('p', 'boss-kicker', 'EXTRA'));
  const h = el('h3', null, '？？？'); h.id = 'boss-detail-name';
  body.append(h, el('p', null, 'この世界のどこかに、まだ誰も知らないボスがいるらしい。その姿を見た者はいない。'));
  const ul = el('ul', 'dots');
  ['名前：？？？', '強さ：？？？', '落とすもの：？？？', '出会い方：？？？'].forEach(t => ul.append(el('li', null, t)));
  body.append(ul);
  box.append(faceBox, body);
  document.getElementById('boss-detail-content').replaceChildren(box);
  bossDialog.className = 'boss-extra-dialog';
  if (typeof bossDialog.showModal === 'function' && !bossDialog.open) bossDialog.showModal();
}
bossDialog.querySelector('.dialog-close').addEventListener('click', () => bossDialog.close());
bossDialog.addEventListener('click', e => { if (e.target === bossDialog) bossDialog.close(); });
function dropButton(id, p) {
  const d = el('button', 'drop'); d.type = 'button';
  d.append(sprite(id, 24), el('span', null, nameOf(id)), el('b', null, p));
  if (byId[id] || DATA.descs[id]) d.addEventListener('click', () => openDetail(id));
  return d;
}

/* ---------- 使い魔（7 章の召喚アイテムの順） ----------
 * view：3D の設定（models.js のキーとテクスチャ）。体力は仕様書 7 章・9 章の値。 */
const FAMS = [
  { item: 'blue_feather', name: '幸せの青い鳥', count: '最大 3 羽', hp: '10', how: 'つつく（2）。羽ばたいて飛び、主人のそばで止まると地面に降りる。', buff: '', odds: '宝箱 15%',
    view: { parts: [{ key: 'bird', tex: 'blue_bird', hide: ['middle_leg'] }] } },
  { item: 'black_feather', name: '八咫烏', count: '最大 2 羽', hp: '30', how: '鋭いくちばし（8）。足が 3 本ある。', buff: '出ているあいだ 暗視', odds: '宝箱 5%',
    view: { parts: [{ key: 'bird', tex: 'yatagarasu' }] } },
  { item: 'frayed_yarn', name: 'モフ猫', count: '1 匹', hp: '10', how: '魔法の弾（10）を 2 秒ごとに撃つ。', buff: '出ているあいだ 落下ダメージなし', odds: '宝箱 5%',
    view: { parts: [{ key: 'mofu_cat', tex: 'mofu_cat', pose: { left_hind_leg: { z: 2.5 }, right_hind_leg: { z: 2.5 } } }] } },
  { item: 'sturdy_string', name: '実験体S', count: '1 匹', hp: '40', how: '噛みつきと、動きを鈍らせる蜘蛛糸。', buff: '', odds: '魔導士テセロス 30%',
    view: { parts: [{ key: 'spider', tex: 'subject_s', glow: 'subject_s_eyes' }] } },
  { item: 'ice_dragon_egg', name: '幼い氷竜', count: '1 匹', hp: '50', how: '噛みつき・凍てつく息吹・氷のつぶて。', buff: '出ているあいだ 落下ダメージなし・凍結しない', odds: '氷竜グライオリア 30%',
    view: { parts: [{ key: 'baby_ice_dragon', tex: 'baby_ice_dragon', glow: 'baby_ice_dragon_glow', bright: 'baby_ice_dragon_bright' }] } },
  { item: 'fire_dragon_egg', name: '幼い炎竜', count: '1 匹', hp: '50', how: '噛みつき・灼けつく息吹・炎の球。', buff: '出ているあいだ 火のダメージを受けない', odds: '炎竜レギウス 30%',
    view: { parts: [{ key: 'baby_fire_dragon', tex: 'baby_fire_dragon', glow: 'baby_fire_dragon_glow', bright: 'baby_fire_dragon_bright' }] } },
  { item: 'sapling_sprout', name: '樹の精霊', count: '1 体', hp: '30', how: '小さな杖で殴り、5 秒ごとに半径 20m の仲間を 5 回復。', buff: '', odds: '森羅の守護者 30%',
    view: { parts: [{ key: 'tree_spirit', tex: 'tree_spirit', glow: 'tree_spirit_glow' }] } },
  { item: 'small_hat', name: 'チェシャ猫', count: '1 匹', hp: '15', how: '宙に浮かんで強い魔法の弾（20）を撃つ。', buff: '', odds: '宝箱 5%',
    view: { parts: [{ key: 'cheshire_cat', tex: 'cheshire_cat' }] } },
  { item: 'charged_orb', name: 'サンダーエレメント', count: '最大 3 体', hp: '40', how: '雷のビーム（毎秒 10）。当たった相手から 15m 以内の敵にも感電する。', buff: '', odds: '雷獣フルガリオン 30%',
    view: { parts: [{ key: 'thunder_element', tex: 'thunder_element', glow: 'thunder_element_glow', bright: 'thunder_element_bright' }] } },
  { item: 'demon_contract', name: '炎の悪魔', count: '最大 2 体', hp: '80', how: '近接の爪と炎の弾（どちらも 50）で燃やす。', buff: '出ているあいだ 火のダメージを受けない', odds: '焔魔イグニード 30%',
    view: { parts: [{ key: 'demon_imp', tex: 'demon_imp', glow: 'demon_imp_glow', bright: 'demon_imp_bright' }] } },
  { item: 'ocean_drop', name: '大海のイルカ', count: '最大 2 頭', hp: '35', how: '宙を泳いで水のビームと水の斬撃。', buff: '出ているあいだ 水中呼吸・イルカの好意', odds: '海王ノーデンス 30%',
    view: { parts: [{ key: 'sea_dolphin', tex: 'sea_dolphin', glow: 'sea_dolphin_glow', bright: 'sea_dolphin_bright' }] } },
  { item: 'holy_beast_egg', name: '聖なるウサギ', count: '最大 2 体', hp: '50', how: '噛みつく（8）。頭の上に金の光輪。', buff: '出ているあいだ マナ回復速度 +50%', odds: '聖なる遺跡の宝物庫 20%',
    view: { parts: [{ key: 'holy_rabbit', tex: 'holy_rabbit', glow: 'holy_rabbit_glow', bright: 'holy_rabbit_bright' }] } },
  { item: 'miasma_stone', name: '瘴気の鷹', count: '1 羽', hp: '25', how: '追尾する羽と闇の槍。', buff: '', odds: '魔獣の遺跡の宝物庫 20%',
    view: { parts: [{ key: 'miasma_hawk', tex: 'miasma_hawk', glow: 'miasma_hawk_glow', bright: 'miasma_hawk_bright' }] } },
  { item: 'ancient_emergency_device', name: 'ルーンの戦兵', count: '最大 2 体', hp: '300', how: '近接の拳（アイアンゴーレムと同じ強さ）。', buff: '出ているあいだ 耐性（1 体で I・2 体で II）', odds: 'ルーンの神兵 30%',
    view: { parts: [{ key: 'rune_soldier', tex: 'rune_soldier', glow: 'rune_soldier_glow' }] } },
  { item: 'saint_soul', name: 'ホーリースピリット', count: '1 体', hp: '300', how: '近接 20・光のビーム 30。半径 30m の自分とプレイヤーの傷を、祈ってから 20 癒す。必殺技「聖域」：半径 15m の光の輪を 10 秒張り、中の仲間は受けるダメージ半分・毎秒 4 回復（45 秒に 1 回）。', buff: '', odds: '聖騎士シンシア 10%',
    view: { parts: [{ key: 'holy_spirit', tex: 'holy_spirit', glow: 'holy_spirit_glow', bright: 'holy_spirit_bright' }] } },
  { item: 'monster_soul', name: 'ダークスピリット', count: '1 体', hp: '200', how: '近接 40・闇のビーム 80・体力を吸い取る魔法（5 × 10 回）。必殺技「魂喰らい」：4 秒の溜めのあと、半径 30m のボス以外の敵の命を体力に関係なく奪う（45 秒に 1 回）。', buff: '', odds: '魔獣グリムノウル 10%',
    view: { parts: [{ key: 'dark_spirit', tex: 'dark_spirit', glow: 'dark_spirit_glow', bright: 'dark_spirit_bright' }] } },
];
function openFam(f) {
  const item = el('div');
  item.append(dropButton(f.item, ''));
  openInfo({
    name: f.name, kind: '使い魔', desc: DATA.descs[f.item] || '', view: f.view,
    stats: [['召喚アイテム', item], ['数', f.count], ['体力', f.hp], ['能力', f.how], ['主人への効果', f.buff || 'なし'], ['入手', f.odds]],
  });
}
const famGrid = document.getElementById('fam-grid');
for (const f of FAMS) famGrid.append(secretTile(f.item, sprite(f.item, 40), f.name, () => openFam(f)));

/* ---------- ダンジョン ---------- */
const PLACES = [
  ['村の魔法使いの家', '平原・サバンナ・タイガ・雪原の村', '#e8c46a',
   '塔のついた小さな家。ソーサラーが住んでいて、宝箱には魔法使いの手記と、ときには魔導書が入っている。',
   ['魔導書を 5 冊預けると 1 冊と交換', '村に合成台があると、地図を交換してくれる魔法使いの村人が現れる']],
  ['森林の小屋', '森・花の森', '#8fcf6a',
   'メイジがひとりで住む、レンガと木の小さな家。暖炉と本棚のある部屋に宝箱が 1 つ。まわりの暗がりにはメイジや魔物が出る。',
   ['宝箱の魔導書 約 42%']],
  ['図書館', '森・花の森（森林の小屋よりずっと珍しい）', '#a38bd6',
   'うち捨てられた 2 階建ての石と木の館。本棚の並ぶ吹き抜けのホールをホロウ・ローブがさまよい、床の本にはグリモア・ミミックが化けている。明かりが消えていて暗い。',
   ['書庫の宝箱 2 つ（1 階と 2 階の回廊）', '奥の館長の部屋にいい宝箱（マジックソウル 20%・忘却の残滓 20%・魔法の布 50%・魔導士の布 25%・マナのかけら 50%・マナクリスタル 25%）', '館の中の暗い所では、ホロウ・ローブとグリモア・ミミックが湧く']],
  ['沼地の小屋', '沼・マングローブの沼', '#b16bd8',
   'パープルメイジに囲まれた古びた小屋。暖炉の下には宝箱が隠されている。',
   ['暖炉の下に隠しチェスト（浮遊の魔導書が必ず 1 冊・魔法の布 50%・魔導士の布 25%・マナのかけら 50%・マナクリスタル 25%）', '小屋ひとつで魔導書 1 冊以上 100%', '母屋に入ると、小屋の主の魔導士テセロスが現れる']],
  ['空に浮かぶ島', '海・川・浜辺以外の地上（高さ 200 ほど）', '#7ed98a',
   'グリーンメイジが住む古い隠れ家。暗くなるとハーピィも飛んでくる。祭壇か見張り塔を中心に、宝箱の部屋・ポーションの部屋・書斎・畑が並ぶ。登る道はない。',
   ['祭壇：マジックソウル 20%・忘却の残滓 20%・魔法の布 50%・魔導士の布 25%・マナのかけら 50%・マナクリスタル 25%', '書斎の床にグリモア・ミミックが本に化けている']],
  ['大きな浮島（竜のねぐら）', '浮島と同じ場所（ずっとまれ）', '#9fdcff',
   '崩れた石柱が輪になって立つ、大きな空の島。まん中のねぐらには宝箱が 3 つ。',
   ['祭壇と同じ宝箱 1（魔法の布 50%・魔導士の布 25%・マナのかけら 50%・マナクリスタル 25%）・浮島の宝箱 2', '石柱の輪に入ると、ねぐらの主が舞い降りる']],
  ['氷の塔', '雪原・樹氷・雪のタイガ・林・雪の斜面', '#8fd3ff',
   '6 階建ての氷の塔。各階にブルーメイジ。粉雪の落とし穴と、糸に触れると薬や矢が飛んでくる罠の部屋がある。',
   ['最上階：マジックソウル 20%・忘却の残滓 20%・魔法の布 50%・魔導士の布 25%・マナのかけら 50%・マナクリスタル 25%', '書庫の階にはグリモア・ミミックが本に化けている']],
  ['大海の塔', '深い海', '#4fb8d8',
   '海底から空までそびえる、21 階建ての珊瑚の城塔。各階の階段は部屋の反対側にあり、アイスメイジ（上位）やシェルクラブのいる部屋を通り抜けて上る。書庫の床にはグリモア・ミミックが本に化けている。',
   ['まれに宝物庫（魔導書 1 冊が必ず・魔導士の布 50%・賢者の布 25%・マナクリスタル 50%・マナストーン 25%）', '最上階の海王の間で、塔の主が目を覚ます']],
  ['火山', '山岳（切り立った山頂・草地・雪の斜面など）', '#e0582a',
   '山岳にそびえる、ふもとの半径 110 ほどの大きな火山。黒い岩の斜面を冷えた溶岩の流れが下り、火口からは煙が上がる。火口のまん中の穴は、地の底の灼熱の大広間まで一直線に続いている。',
   ['火口の底は y190 ほど、大広間は y0 付近（降りる道はない）', '大広間の奥の壇に宝箱が 3 つ（まん中の金の台の上がいい宝箱。魔法の布 50%・魔導士の布 25%・マナのかけら 50%・マナクリスタル 25%）', '大広間に入ると、地の底の主が目を覚ます']],
  ['巨大樹の迷宮', '古代の巨大樹林（マツ・トウヒ・シラカバ）・森・シラカバの森', '#5fbf5a',
   '高さ 80 ほどの巨大樹。根もとの洞から幹の中のら旋の坂を下りると、土と根の壁でできた地下 3 層の迷路が広がる。グリーンメイジがさまよい、層から層へは天井から垂れるグロウベリーのつるを伝って下りる。',
   ['行き止まりに宝箱やスポナー、仕掛け線の罠の部屋も', '2〜3 層目のどこかに宝物の部屋（いい宝箱。魔法の布 50%・魔導士の布 25%・マナのかけら 50%・マナクリスタル 25%）', 'いちばん下の根の間で、森の主が目を覚ます（奥の壇に宝箱が 3 つ）']],
  ['雷獣の渓谷', 'バッドランズ・侵食されたバッドランズ・樹木のバッドランズ', '#f0c93a',
   '台地を割る深い谷と、谷をまたぐ吊り橋。谷のつきあたりから斜めに下ると、地下 2 層の洞窟が広がる。広場と通路の並びは、ワールドごと（場所ごと）に変わる。サンダーエレメントとイエローメイジがさまよい、1 層目には吊り橋のかかった大空洞、2 層目への縦穴にははしごがある。',
   ['行き止まりや広場に宝箱とスポナー、各層に仕掛け線の罠の部屋', '2 層目に宝物の部屋（いい宝箱。魔法の布 50%・魔導士の布 25%・マナのかけら 50%・マナクリスタル 25%）', 'いちばん奥の円い寝床で、谷の主が目を覚ます（奥の壇に宝箱が 3 つ）']],
  ['フレイムジグラート', '砂漠', '#ff7a3a',
   '砂漠にそびえる 6 段の黒い階段ピラミッド。悪魔を崇める教団の神殿で、北の大階段の上には頂上の神殿がある。南の角の門をくぐると、ピラミッドの中の拝殿。悪魔の偶像の祭壇の前から地下へ下りると、地下 2 層に部屋が広がる。部屋の並びと種類は場所ごとに変わる（礼拝堂・生贄の間・牢獄・納骨堂・召喚の間・禁書庫・祭司の部屋・聖火の間・スポナー部屋・罠の部屋）。フレイムメイジ（上位）と炎の悪魔が見張る。1 層の奥のらせん階段で 2 層へ。2 層の前室の大扉の先が焔の大聖堂（ボス部屋）。',
   ['建物の中にフレイムメイジ（上位）と炎の悪魔が同じくらい湧く', '2 層の宝物庫と大聖堂の壇にいい宝箱（魔導士の布 50%・賢者の布 25%・マナクリスタル 50%・マナストーン 25%）', '焔の大聖堂に入ると、神殿の主が現れる']],
  ['ルーンドーム', 'ジャングル・竹のジャングル・まばらなジャングル', '#5cffa8',
   '地面に半分うまった巨大なガラスのドーム（半径 34）が入口の古代の研究施設。ドームの中の明るいホールから北の大階段を下りると、地下 2 層に部屋が広がる。部屋の並びと種類は場所ごとに変わる（図書室・実験室・標本室・動力室・工房・倉庫・宿舎・スポナー部屋・罠の部屋）。アースメイジ（上位）とルーン・センチネルが見張り、図書室ではグリモア・ミミックが本に化けている。1 層の奥のらせん階段で 2 層へ。2 層の前室の大扉の先が実験場（ボス部屋）。',
   ['暗い通路や部屋にアースメイジ・ルーン・センチネル・ゾンビ・スケルトンなどが湧く', '2 層の宝物庫と実験場の東の壇にいい宝箱（魔導士の布 50%・賢者の布 25%・マナクリスタル 50%・マナストーン 25%）', '実験場に入ると、施設の番人が目を覚ます']],
  ['クリスタルの平原', '涼しく乾いた平原の奥（沼地より珍しいバイオーム）', '#f3a8cf',
   '白っぽい草原に、淡いピンクの結晶がとがって生える聖なる野。白い幹にピンクや水色の葉をつけた白晶樹が立ち、水は神秘的な藤色。空中には小さな光の粒がただよう。',
   ['クリスタルブロック（壊すとクリスタル 1〜2 個・幸運で増える）', '地下にマナの洞窟が眠っていることがある', '白晶樹（木材一式）・まれにクリスタルの芽やクリスタルローズ', 'ユニコーンがまれに現れる', '満月と新月の夜にだけ、ルナスピリットが姿を見せる']],
  ['マナの洞窟', 'クリスタルの平原の地下', '#b06cff',
   '平原の地面にぽっかり開いた穴から、ゆるやかな下り坂が地下 30 ほどまで続く天然の洞窟。奥の大広間は白い方解石とアメジストに覆われ、壁・床・天井から紫のマナクリスタルの結晶が生えている。',
   ['マナクリスタルが手に入るのはここだけ（1 つの洞窟に結晶のブロックが 20〜28 個。ダイヤのツルハシ以上）', '幸運のツルハシで掘ると 2〜3 か所で魔導士の装備 4 部位ぶん', 'ダンジョンではないので宝箱はない', '暗がりにはクリスタルゴーレムが潜む']],
  ['聖なる遺跡', '平原・ヒマワリ平原', '#f0d060',
   '崩れた石の広場から、らせん階段で地下 8 層へ。暗く、死者やクモ、ライトメイジ（上位）、ホーリースピリットがさまよう。研究部屋の床にはグリモア・ミミックが本に化けている。仕掛け線の罠やスポナーの部屋に注意。',
   ['チェストの魔導書は、出にくいかわりにレア・エピックが中心', '7〜8 層目に宝物庫（魔導書 1〜2 冊・聖獣の卵 20%・魔導士の布 50%・賢者の布 25%・マナクリスタル 50%・マナストーン 25%）', '最深部の大広間で、何者かが眠っている']],
  ['魔獣の遺跡', 'ダークフォレスト', '#9b5bd6',
   '崩れた見張り塔の下に広がる、魔獣を閉じ込めておく地下 10 層の牢獄。牢屋・実験施設・拷問部屋・看守室が並び、ダークメイジ（上位）とダークスピリット、鎖の亡者が見張る。書庫にはグリモア・ミミックが本に化けている。明かりはほとんどない。',
   ['チェストの魔導書はレア・エピックが中心で、聖なる遺跡より出やすい', '7〜10 層目に宝物庫（魔導書 1〜2 冊・瘴気の魔石 20%・魔導士の布 50%・賢者の布 25%・マナクリスタル 50%・マナストーン 25%）', '最深部の大広間に、何かが封じられている']],
];
const placeGrid = document.getElementById('place-grid');
for (const [name, biome, color, text, notes] of PLACES) {
  const t = tile(null, name, () => {
    const ul = el('ul', 'dots');
    notes.forEach(n => ul.append(el('li', null, n)));
    openInfo({ name, kind: biome, desc: text, stats: [['見どころ', ul]] });
  }, 'tile-place');
  t.style.setProperty('--accent', color);
  placeGrid.append(t);
}

/* ---------- 素材（種類ごと） ----------
 * [ID, 手に入れ方, 使い道]。数値と入手元は仕様書 12 章「素材の一覧」と同じにする。
 * ボスの素材（SECRET に入るもの）は、ほかの一覧と同じくシルエットで出す。 */
const MATERIALS = [
  { title: '布', lead: '装束とポーチのもと。羊毛から作った布を、マナの素材 8 個で囲むと上の布になる。', items: [
    ['cloth', '作業台で羊毛 4 つ（色は問わない）を 2×2 に並べる。', '見習いの装束、合成台、上の布のしん'],
    ['magic_cloth', '布をマナのかけら 8 個で囲む。下位のダンジョンのいい宝箱にも 50% で 2〜4 枚入っている。', '魔法使いの装束、マジックポーチ'],
    ['mage_cloth', '布をマナクリスタル 8 個で囲む。いい宝箱にも入っている（下位のダンジョンは 25% で 1〜2 枚、上位のダンジョンは 50% で 2〜4 枚）。', '魔導士の装束、ウィザードポーチ'],
    ['sage_cloth', '布をマナストーン 8 個で囲む。上位のダンジョンのいい宝箱にも 25% で 1〜2 枚入っている。', '賢者の装束、セイジポーチ'],
    ['archmage_cloth', '布を魔力の結晶 8 個で囲む。宝箱からは出ない。', '大魔導士の装束、アークメイジポーチ'],
  ] },
  { title: 'マナの素材', lead: 'マナが固まってできた素材。布や魔法金属の材料になる。', items: [
    ['mana_shard', '沼やマングローブの沼に出るマナスライムの、いちばん小さいものが 1〜2 個落とす（ドロップ増加で増える）。下位のダンジョンのいい宝箱にも 50% で 3〜6 個入っている。', '魔法の布、合成台、マナスチールインゴット、マナダイヤモンド、魔法使いの村人との取引、使い魔のランク上げ（経験値 5）'],
    ['mana_crystal', 'クリスタルの平原の地下にある、マナの洞窟の結晶のブロックを掘る（ダイヤモンドのツルハシ以上）。1 ブロックから 1〜2 個で、幸運で増える。いい宝箱にも入っている（下位のダンジョンは 25% で 1〜3 個、上位のダンジョンは 50% で 2〜4 個）。', '魔導士の布、マナオーラムインゴット、転送魔法陣、使い魔のランク上げ（経験値 20）'],
    ['mana_stone', '山岳やディープダークに埋まっているマナストーン鉱石を掘る。幸運で増える。上位のダンジョンのいい宝箱にも 25% で 1〜2 個入っている。', '賢者の布、セイジポーチ、転送魔法陣、使い魔のランク上げ（経験値 50）'],
    ['magic_crystal', '後半のボスだけが落とす。先のボスほどたくさん落とす。', '大魔導士の布、マナライトインゴット、使い魔のランク上げ（経験値 100）'],
    ['magic_soul', 'ダンジョンの宝箱に入っている。浮島の祭壇や氷の塔の最上階のような、いい宝箱ほど出やすい。', '右クリックで最大マナ +20（20 回まで）、転送魔法陣'],
    ['oblivion_residue', 'ダンジョンの宝箱に入っている。マジックソウルと同じ宝箱に、同じ確率で入る。', '持って使い魔を右クリックすると、割り振ったポイントがすべて戻る（1 個使う。ランクと経験値はそのまま）'],
    ['crystal', 'クリスタルの平原に生えるクリスタルのブロックを壊すと 1〜2 個（幸運で増える）。', 'まだ使い道はない'],
  ] },
  { title: '魔法金属', lead: 'インゴットや宝石をマナの素材 8 個で囲んで作る。魔法金属の鎧の材料と修理に使う。', items: [
    ['manasteel_ingot', '鉄インゴットをマナのかけら 8 個で囲む。', 'マナスチールの鎧'],
    ['manaaurum_ingot', '金インゴットをマナクリスタル 8 個で囲む。', 'マナオーラムの鎧'],
    ['mana_diamond', 'ダイヤモンドをマナのかけら 8 個で囲む。', 'マナダイヤモンドの鎧'],
    ['manalite_ingot', 'ネザライトインゴットを魔力の結晶 8 個で囲む。燃えない。', 'マナライトの鎧'],
  ] },
  { title: '杖の素材', lead: '魔導書と一緒に作業台に並べると、魔法の宿った杖になる。', items: [
    ['broken_wand', 'メイジ（色つきもふくむ 6 種）を倒すと 10%。', 'ほとんどの杖'],
    ['magic_wand', '上位のメイジ（5 種）を倒すと 10%。', 'レゾフレア＝アンリーシュ、異界の杖'],
  ] },
  { title: 'コア', lead: '合成台で魔導書をつなぐ宝石。おもにボスが落とし、雑魚からはまれにしか出ない。くわしい入手元は「合成台」タブ。', items: [
    ['red_core', 'レッドメイジ・フレイムメイジ・炎の悪魔と、ボス。', '合成台、召喚陣'],
    ['green_core', 'グリーンメイジ・アースメイジ・ハーピィ・ルーン・センチネルと、ボス。', '合成台、召喚陣'],
    ['blue_core', 'ブルーメイジ・アイスメイジ・ホロウ・ローブ・シェルクラブと、ボス。', '合成台、召喚陣'],
    ['yellow_core', 'イエローメイジ・ライトメイジ・クリスタルゴーレム・サンダーエレメント・ホーリースピリットと、ボス。', '合成台、召喚陣'],
    ['purple_core', 'パープルメイジ・ダークメイジ・グリモア・ミミック・鎖の亡者・深淵の者・ダークスピリットと、ボス。', '合成台、召喚陣'],
    ['moon_core', 'ルナスピリットが 5% で落とす。ほかにも、月の夜に関わる何かが落とすらしい……。', 'まだ使い道は見つかっていない'],
  ] },
  { title: '生き物と植物から', lead: '', items: [
    ['unicorn_horn', 'クリスタルの平原にまれに現れるユニコーンが 30% で落とす（ドロップ増加で増える）。', 'ウィザードポーチ'],
    ['crail_berry', '沼地の小屋や巨大樹の迷宮の宝箱に入っている。村の魔法使いの家にはクレイルの茂みが植わっている。土に植えれば増やせる。', 'マナのポーション（奇妙なポーションに入れる）。食べるとマナの戻りが 10 秒早くなる'],
  ] },
  { title: 'ボスの素材', lead: 'ボスがかならず落とす素材。次のボスへ挑むための鍵で、そのボスの召喚陣の材料にもなる。', items: [
    ['research_results'], ['ice_scale'], ['flame_scale'], ['forest_core'], ['thunder_beast_horn'],
    ['demon_heart'], ['colossus_core'], ['divine_talisman'], ['paladin_pendant'], ['broken_black_knight_pendant'],
  ] },
];
function openMaterial(group, [id, how, use]) {
  const boss = bossOf(id);
  openInfo({
    icon: sprite(id, 64), name: nameOf(id), kind: group.title, desc: DATA.descs[id] || '',
    stats: boss
      ? [['入手', `${boss.name}（100%）`], ['攻略での役目', NEEDS[id]], ['使い道', `${nameOf(boss.id + '_summon_circle')}の材料`]]
      : [['入手', how], ['使い道', use]],
  });
}
const materialBox = document.getElementById('material-groups');
for (const g of MATERIALS) {
  materialBox.append(el('h3', 'sub', g.title));
  if (g.lead) materialBox.append(el('p', 'small', g.lead));
  const grid = el('div', 'tiles');
  g.items.forEach(m => grid.append(secretTile(m[0], sprite(m[0], 40), nameOf(m[0]), () => openMaterial(g, m))));
  materialBox.append(grid);
}

/* ---------- リンク・メニュー ---------- */
const releases = `https://github.com/${REPO}/releases/latest`;
document.getElementById('download-btn').href = releases;
document.getElementById('download-btn-2').href = releases;
document.getElementById('repo-link').href = `https://github.com/${REPO}`;
document.getElementById('mod-version').textContent = VERSION;
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

/* ---------- タブの切り替え（URL の #◯◯ で、表示する節を 1 つだけにする） ---------- */
const tabs = [...document.querySelectorAll('.tab-content')];
const navLinks = [...document.querySelectorAll('.nav a')];
let flowBuilt = false;
function showTab(hash, scroll) {
  const id = (hash || '').replace(/^#/, '');
  let target = id && document.getElementById(id);
  const inner = target && !target.classList.contains('tab-content') ? target : null;
  if (inner) target = inner.closest('.tab-content');
  if (!target) target = document.getElementById('home');
  document.querySelectorAll('dialog[open]').forEach(d => d.close());
  tabs.forEach(t => t.classList.toggle('is-active', t === target));
  navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + target.id));
  if (target.id === 'synthesis') { buildSynthesisFlow(); flowBuilt = true; }
  if (inner) inner.scrollIntoView({ block: 'start' });
  else if (scroll) window.scrollTo(0, 0);
}
window.addEventListener('hashchange', () => showTab(location.hash, true));
// 同じタブのリンクをもう一度押したときは hashchange が起きないので、上へ戻すだけ
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (a && a.getAttribute('href') === location.hash) { e.preventDefault(); showTab(location.hash, true); }
});
showTab(location.hash, false);
// 画面の幅が変わったら、合成の流れ図を作り直す（見えているときだけ）
let flowTimer = 0;
window.addEventListener('resize', () => {
  clearTimeout(flowTimer);
  flowTimer = setTimeout(() => {
    if (document.getElementById('synthesis').classList.contains('is-active')) buildSynthesisFlow();
  }, 200);
});

/* ---------- ホームの背景スライダー ---------- */
(() => {
  const slides = [...document.querySelectorAll('#hero-slider .hero-slide')];
  const dots = [...document.querySelectorAll('#hero-slider-dots .dot')];
  if (!slides.length) return;
  let cur = slides.findIndex(sl => sl.classList.contains('active'));
  if (cur < 0) cur = 0;
  let timer = 0;
  const go = i => {
    cur = (i + slides.length) % slides.length;
    slides.forEach((sl, k) => sl.classList.toggle('active', k === cur));
    dots.forEach((d, k) => d.classList.toggle('active', k === cur));
  };
  const restart = () => {
    clearInterval(timer);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => go(cur + 1), 7000);
  };
  dots.forEach(d => d.addEventListener('click', () => { go(+d.dataset.index); restart(); }));
  go(cur);
  restart();
})();
