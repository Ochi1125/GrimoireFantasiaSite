/* 幻想の魔導書（Grimoire Fantasia）紹介ページ */
const REPO = 'Ochi1125/GrimoireFantasiaSite';
const VERSION = '2.0.0';

/* ---------- アイテムのデータ ---------- */
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
   "id": "ice_grimoire",
   "name": "氷の魔導書",
   "rarity": "uncommon",
   "source": "chest",
   "mana": "30",
   "dur": "65",
   "effect": "まわり 4m の相手に 4 ダメージと鈍足（10 秒）。水面も凍る",
   "desc": "自身の周囲に氷のつぶてを放つ初心者向けの魔法。未熟な魔法使いは何度もこの魔法に助けられるという。"
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
   "desc": "風を束ねて突風を吹き起こす魔導書。傷は与えられないが、距離は得られるだろう。"
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
   "id": "healing_grimoire",
   "name": "回復の魔導書",
   "rarity": "rare",
   "source": "chest",
   "mana": "最大 50",
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
   "recipe": [["water_grimoire", "poison_grimoire"], "purple_core"]
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
   "recipe": [["fire_grimoire"], "red_core"]
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
   "recipe": [["healing_grimoire", "light_grimoire"], "yellow_core"]
  },
  {
   "kind": "grimoire",
   "id": "holy_fire_grimoire",
   "name": "聖火の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "100",
   "dur": "90",
   "effect": "いちばん近い敵の足もとに聖火（5 秒・毎秒 10、アンデッドは 1.5 倍）",
   "desc": "灯と炎を一つに束ねた書。開くと淡い金色の火がページの上で静かに揺れる。",
   "recipe": [["light_grimoire", "fire_grimoire"], "yellow_core"]
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
   "recipe": [["ice_grimoire", "wind_grimoire"], "blue_core"]
  },
  {
   "kind": "grimoire",
   "id": "black_thunder_grimoire",
   "name": "黒雷の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "200",
   "dur": "64",
   "effect": "半径 32m のランダムな敵に黒い雷を 3 回（1 回 10）",
   "desc": "雷に瘴気を吸わせて黒く染めた書。鋭い雷撃がバチバチと音を立てている。",
   "recipe": [["lightning_grimoire", "poison_grimoire"], "purple_core"]
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
   "recipe": [["explosion_grimoire", "wind_grimoire"], "green_core"]
  },
  {
   "kind": "grimoire",
   "id": "rampage_grimoire",
   "name": "暴爆の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "100",
   "dur": "30",
   "effect": "爆発の弾（威力 5）＋爆発の範囲の敵に追加 50 の魔法ダメージ",
   "desc": "爆発を風で押し固め、一点で弾けさせる術の書。その威力は一撃で屍の山を築く。",
   "recipe": [["explosion_grimoire", "wind_grimoire"], "red_core"]
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
   "recipe": [["explosion_grimoire", "poison_grimoire"], "purple_core"]
  },
  {
   "kind": "grimoire",
   "id": "seekers_lament",
   "name": "探究者の嘆き",
   "rarity": "epic",
   "source": "drop",
   "mana": "50",
   "dur": "80",
   "effect": "まわり 16m の敵に防御力低下・魔法防御力低下・弱体化・魔法攻撃力低下 II（15 秒）",
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
   "effect": "押し続けるあいだ前方 14m に冷気を吹く。毎秒 4 ダメージ、1 秒当て続けると凍結 2 秒",
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
   "effect": "押し続けるあいだ前方 14m に炎を吹く。毎秒 4 ダメージ、当たるたびに 5 秒燃える",
   "desc": "炎竜の吐息を封じた魔導書。ページを開くと、読む者の口から灼けつく炎があふれ出す。"
  },
  {
   "kind": "grimoire",
   "id": "earth_grace",
   "name": "大地の恩寵",
   "rarity": "epic",
   "source": "drop",
   "mana": "200",
   "dur": "50",
   "effect": "自分と半径 30m の、敵ではない生き物（使い魔も）の体力を 20 回復する。クールタイム 30 秒",
   "desc": "大地に満ちる生命の力を記した魔導書。ページを開くと、足もとから若葉の香りがひろがる。"
  },
  {
   "kind": "grimoire",
   "id": "thunder_beast_cannon",
   "name": "雷獣砲",
   "rarity": "unique",
   "source": "drop",
   "mana": "毎秒 10",
   "dur": "150",
   "effect": "押し続けるあいだ前方 24m に雷のレーザー（毎秒 10）。当たった相手から 15m 以内の敵にも毎秒 10 の感電",
   "desc": "雷獣の角の力を閉じ込めた魔導書。ページを開くと、雷獣と同じビリビリとしたレーザーが走る。"
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
   "effect": "1 分間ダメージを受けない。クールタイム 30 分",
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
   "id": "ice_wand",
   "name": "氷の杖",
   "rarity": "rare",
   "source": "craft",
   "mana": "10 / 20 / 40",
   "dur": "320",
   "effect": "ためて 3 段階。冷気の波で鈍足 II → 鈍足 IV → 凍結（5 秒）",
   "desc": "周囲を凍てつかせる氷の杖。熟練の魔法使いの放つ冷気は敵の体を凍らせる。",
   "from": "ice_grimoire"
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
   "id": "healing_wand",
   "name": "回復の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "最大 50",
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
   "id": "water_wand",
   "name": "水の杖",
   "rarity": "epic",
   "source": "craft",
   "mana": "毎秒 20",
   "dur": "320",
   "effect": "押し続けるあいだ水のレーザー（18m）。触れている相手に毎秒 5 ダメージ",
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
   "effect": "ためて 3 段階。12 / 20 / 32 ダメージ、半径 5 / 7 / 10m、炎上 5 / 8 / 10 秒",
   "desc": "業火の魔導書を杖に宿したもの。ためるほどに火球は膨れ上がり、あたりを焼き尽くす。",
   "from": "hellfire_grimoire"
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
   "id": "black_thunder_wand",
   "name": "黒雷の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "300",
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
   "id": "rampage_wand",
   "name": "暴爆の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "250 / 300 / 350",
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
  }
 ],
 "names": {
  "broken_wand": "壊れた杖",
  "red_core": "レッドコア",
  "green_core": "グリーンコア",
  "blue_core": "ブルーコア",
  "purple_core": "パープルコア",
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
  "book_pouch": "ブックポーチ",
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
  "rune_axe": "ルーンアクス"
 },
 "descs": {
  "broken_wand": "メイジが持っている壊れた杖。修理しなければほとんど使い物にならない。",
  "red_core": "炎の魔力を凝縮したコア。宝石のように輝き、温かく脈打っている。",
  "green_core": "風の魔力を凝縮したコア。淡く発光し、絶えず微風をまとっている。",
  "blue_core": "氷の魔力を凝縮したコア。触れると冷たく、表面にうっすら霜がつく。",
  "purple_core": "深い魔力を凝縮したコア。中心の光が、こちらを見返しているように静かに揺れる。",
  "yellow_core": "雷の魔力を凝縮したコア。ときどきパチッと鳴り、持つと指先がしびれる。",
  "cloth": "羊毛からただ織っただけの布。それ自体はただの布だが衣服を作るのには十分だ。",
  "mana_shard": "結晶になったマナの欠片。ほのかな魔力の暖かさが絶えず漂っている。",
  "durandal": "聖騎士シンシアが振るっていた聖剣。刃に宿る光は、今も持ち主を選ぶように静かに揺らめいている。",
  "paladin_pendant": "古びた聖騎士のペンダント。\n長い年月が経っているにもかかわらず、淡い光を失っていない。\n蓋の内側には、微笑むシンシアと、その隣に並ぶ一人の男性の写真が収められている。",
  "holy_beast_egg": "淡く光る白い卵。耳をあてると、小さな鼓動が聞こえる。",
  "blue_feather": "空の色をそのまま写したような、小さな青い羽根。持っているだけで少し心が軽くなる。",
  "black_feather": "濡れたように艶のある黒い羽根。光にかざすと、ふちが金色に透ける。",
  "frayed_yarn": "さんざん転がされて、端がほつれた白い毛糸玉。ふわふわの毛が何本も絡まっている。",
  "small_hat": "猫の頭にちょうど乗るくらいの、とんがり帽子。ときどき、中からにやにや笑いだけが覗く。",
  "magic_soul": "淡い紫色に燃え揺れる、半透明の人魂。取り込むと肉体になじみ、扱えるマナの器そのものを押し広げる。",
  "wizard_notes": "",
  "gungnir": "魔獣グリムノウルの内に眠っていた神槍。放てば闇を裂き、狙ったものを決して外さない。",
  "miasma_stone": "瘴気が凝り固まった魔石。耳を澄ますと、遠くで大きな翼が風を打つ音がする。",
  "broken_black_knight_pendant": "瘴気に染まり、ぼろぼろに砕けたペンダント。割れた蓋の内側には、かすれた誰かの写真の跡だけが残っている。",
  "book_pouch": "魔導書だけをしまっておける革のポーチ。27 冊まで入り、壊しても中身はそのまま残る。",
  "nordensia": "海王ノーデンスが携えていた三叉の槍。穂先から、いつも冷たい霧がこぼれている。",
  "ancient_sword": "竜のねぐらに眠っていた古びた剣。刃は欠け、柄の飾りもすり減っているが、いまだに鋭い。",
  "ancient_spear": "火山の奥に眠っていた古びた槍。穂先は熱で黒ずみ、ところどころ赤くくすぶっているが、いまだに鋭い。",
  "world_tree_twig": "テセロスが研究のために持ち帰った、世界樹の細い枝。武器にするには頼りないが、折れる気配もない。",
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
  "spirit_king_staff": "樹霊の王が森の力を束ねていた、ねじれた木の杖。先の結晶は、いまもかすかに緑の光を宿している。",
  "sapling_sprout": "樹霊の王の力を受けて芽吹いた、小さな若木の芽。耳を近づけると、葉のさざめきが聞こえる。",
  "thunder_beast_horn": "雷獣の頭部から伸びる巨大な角。\n表面には今も微かな電流が走り、近づけるだけで空気が震えている。",
  "charged_orb": "雷獣の電気が凝り固まった、青白い雷の塊。手のひらの上で、絶えずビリビリとはじけている。\n使い魔のサンダーエレメント（最大 3 体）を呼び出す。",
  "thunder_beast_sword": "雷獣の溜め込んだ電気をすべて詰め込んだ剣。刀身はいつも雷を纏っている。\n攻撃力 14・耐久 1500。当てると半径 5 m の敵 3 体まで感電（6 ダメージ）。",
  "thunder_beast_cannon": "雷獣の角の力を閉じ込めた魔導書。雷獣と同じ、ビリビリとした雷のレーザーを撃ち出す。\n右クリックを押し続けるあいだ 24 m のレーザー（毎秒 10）。当たった相手から 15 m 以内の敵にも毎秒 10 の感電。マナ毎秒 10・耐久 150。",
  "colossus_core": "ルーンの神兵を動かしていた巨大な魔力の核。\n長い年月を経ても衰えることのない力が、今もなお内部で脈動している。",
  "demon_heart": "未だに燃え続ける、焔魔の心臓。\n炎を消しても熱を失うことはなく、触れた金属はゆっくりと赤く染まっていく。",
  "demon_contract": "焔魔が人の魂と引き換えに結んだ、血のように赤い契約書。署名の欄が、かすかに熱を帯びている。\n使い魔の炎の悪魔（最大 2 体）を呼び出す。",
  "prominence_scythe": "焔魔が振るっていた、燃える死神の大鎌。刃のふちは、いまも紅炎のようにゆらめいている。\n攻撃力 12・耐久 4000。",
  "ancient_emergency_device": "ルーンの神兵が危機のときに起動していた、古代の緊急装置。刻まれたルーンが、起動を待って淡く脈打っている。\n使い魔のルーンの戦兵（最大 2 体）を呼び出す。",
  "rune_axe": "ルーンの神兵の大斧を、人が振るえる大きさに写した斧。刃のルーンが、今も緑に光っている。\n攻撃力 30・攻撃速度 1.0・耐久 3000。"
 }
};

/* ---------- アニメーションするテクスチャ ---------- */
const ANIM = {
  cynthia_prayer: [24, 2], raison_detre: [24, 2], tenkai_raibaku: [24, 2], mercy_light_grimoire: [8, 3],
  durandal: [20, 2], gungnir: [24, 2], nordensia: [24, 2],
  magic_soul: [16, 2], mana_shard: [8, 4],
  red_core: [16, 2], green_core: [16, 2], blue_core: [16, 2], purple_core: [16, 2], yellow_core: [16, 2],
  healing_wand: [8, 3], mercy_light_wand: [24, 2],
  miasma_stone: [8, 3], ocean_drop: [8, 2], saint_soul: [24, 2], monster_soul: [24, 2],
  charged_orb: [8, 2], thunder_beast_sword: [8, 2], thunder_beast_cannon: [4, 3],
  earth_grace: [16, 2], demon_flame: [16, 2], demon_contract: [16, 2], holy_beast_egg: [16, 2],
  core_overload: [24, 2], ancient_emergency_device: [24, 2],
};
function animOf(id) {
  if (ANIM[id]) return ANIM[id];
  if (id.endsWith('_wand') && id !== 'broken_wand') return [8, 2];
  return null;
}

/** ドット絵のアイコンを作る */
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
  el.setAttribute('aria-label', DATA.names[id] || id);
  return el;
}

/** Mob の顔 */
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

/* ---------- ボスのドロップ品の、攻略での役目 ---------- */
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

/* ---------- 詳しい説明の窓 ---------- */
const dialog = document.getElementById('detail');
function openDetail(id) {
  const it = byId[id];
  const icon = document.getElementById('detail-icon');
  icon.replaceChildren(sprite(id, 64));
  const stats = document.getElementById('detail-stats');
  const extra = document.getElementById('detail-extra');
  stats.replaceChildren();
  extra.replaceChildren();
  const add = (k, v) => { stats.append(el('dt', null, k), el('dd', null, v)); };
  if (it) {
    document.getElementById('detail-kind').textContent =
      `${it.kind === 'wand' ? '杖' : '魔導書'} ・ ${RARITY[it.rarity]}`;
    document.getElementById('detail-kind').className = 'detail-kind r-' + it.rarity;
    document.getElementById('detail-name').textContent = it.name;
    document.getElementById('detail-desc').textContent = it.desc;
    add('効果', it.effect);
    add('消費マナ', it.mana);
    add('耐久', it.dur);
    add('入手', sourceText(it));
    if (it.recipe) extra.append(recipeRow(it.recipe[0], it.recipe[1], it.id));
    if (it.from) extra.append(wandRow(it.from, it.id));
  } else {
    document.getElementById('detail-kind').textContent = '';
    document.getElementById('detail-name').textContent = DATA.names[id] || id;
    document.getElementById('detail-desc').textContent = DATA.descs[id] || '';
    if (NEEDS[id]) add('攻略での役目', NEEDS[id]);
  }
  if (typeof dialog.showModal === 'function') dialog.showModal();
}
function sourceText(it) {
  const DROP = {
    bouncing_orb_grimoire: 'マナスライム 0.2%（ドロップ増加 I 0.4% ／ II 0.7% ／ III 1.0%）',
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
  };
  if (DROP[it.id]) return DROP[it.id];
  if (it.source === 'chest') return `古い宝箱・ソーサラーとの交換（${RARITY[it.rarity]}）`;
  if (it.source === 'synthesis') return '合成台で作る';
  if (it.source === 'craft') return '作業台：魔導書 ＋ 壊れた杖';
  return '';
}
if(dialog) {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
}

function slot(id) {
  const s = el('span', 'slot');
  s.append(sprite(id, 32));
  s.title = DATA.names[id] || '';
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
  row.append(slot(grim), el('span', 'plus', '＋'), slot('broken_wand'), el('span', 'eq', '→'), slot(wand));
  return row;
}

/* ---------- ヒーローの棚・特徴のアイコン ---------- */
const hero = document.getElementById('hero-shelf');
if(hero) {
  ['light_grimoire', 'ice_grimoire', 'water_grimoire', 'fire_grimoire', 'lightning_grimoire', 'explosion_grimoire',
   'mercy_light_wand', 'blizzard_wand', 'tenkai_raibaku', 'cynthia_prayer', 'raison_detre'].forEach(id => {
    const s = el('span', 'slot'); s.append(sprite(id, 40)); hero.append(s);
  });
}

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
  if(!grid) return;
  grid.replaceChildren();
  const list = DATA.items.filter(it =>
    (filter.kind === 'all' || it.kind === filter.kind) &&
    (filter.source === 'all' || it.source === filter.source));
  if (!list.length) grid.append(el('p', 'empty', '当てはまるものはありません'));
  for (const it of list) {
    const card = el('button', 'card');
    card.type = 'button';
    const box = el('span', 'icon-box'); box.append(sprite(it.id, 40));
    const body = el('span');
    body.append(el('p', 'card-name r-' + it.rarity, it.name));
    body.append(el('p', 'card-meta', it.effect));
    body.append(el('p', 'card-meta', `マナ ${it.mana} ・ 耐久 ${it.dur}`));
    card.append(box, body);
    card.addEventListener('click', () => openDetail(it.id));
    grid.append(card);
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
  ['red_core', 'レッドコア', '炎', 'レッドメイジ 1% ／ 炎竜レギウス 20% ／ 焔魔イグニード 50%'],
  ['green_core', 'グリーンコア', '風', 'グリーンメイジ 1% ／ ルーンの神兵 50%'],
  ['blue_core', 'ブルーコア', '氷', 'ブルーメイジ 1% ／ シェルクラブ 5% ／ 氷竜グライオリア 20% ／ 海王ノーデンス 50%'],
  ['purple_core', 'パープルコア', '深い魔力', 'パープルメイジ 1% ／ ダークスピリット 5% ／ 魔導士テセロス 20% ／ 魔獣グリムノウル 50%'],
  ['yellow_core', 'イエローコア', '雷', 'イエローメイジ 1% ／ サンダーエレメント 5% ／ ホーリースピリット 5% ／ 雷獣フルガリオン 20% ／ 聖騎士シンシア 50%'],
];
const coreList = document.getElementById('core-list');
if(coreList) {
  for (const [id, name, attr, from] of CORES) {
    const li = el('li');
    li.append(sprite(id, 32));
    const t = el('span'); t.append(el('b', null, `${name}（${attr}）`), el('small', null, from));
    li.append(t);
    coreList.append(li);
  }
}

const recipes = document.getElementById('recipe-list');
if(recipes) {
  DATA.items.filter(i => i.recipe).forEach(it => {
    const box = el('div', 'recipe');
    box.append(recipeRow(it.recipe[0], it.recipe[1], it.id));
    box.append(el('p', 'recipe-name r-' + it.rarity, it.name));
    box.append(el('p', null, it.effect));
    recipes.append(box);
  });
}

/* ---------- 装束 ---------- */
const ROBES = [
  ['apprentice', ['apprentice_hat', 'apprentice_robe', 'apprentice_leggings', 'apprentice_boots'], '見習いの装束',
    '布で作る。刃や牙への守りは控えめで、魔法の傷を防ぐ。', '4 部位でマナ回復速度 +10% ／ 魔法防御 計 6'],
  ['wizard', ['wizard_hat', 'wizard_robe_top', 'wizard_robe_bottom', 'wizard_boots'], '魔法使いの装束',
    '魔法の布（布＋マナのかけら 8 個）で作る。刃や牙への守りは鉄の半分ほどで、魔法の傷をよく防ぐ。', '1 部位ごとマナ回復速度 +20%、4 部位で最大マナ +20% ／ 魔法防御 計 11'],
  ['archmage', ['archmage_hat', 'archmage_robe_top', 'archmage_robe_bottom', 'archmage_boots'], '大魔導士の装束',
    '大魔導士の布（布＋マナストーン 8 個）で作る。刃や牙への守りは鉄くらいだが、魔法の傷を大きく防ぐ。燃えない。', '1 部位ごとマナ回復速度 +100%、4 部位で最大マナ +100% ／ 魔法防御 計 30'],
];
const robeTable = document.getElementById('robe-table');
if(robeTable) {
  for (const [, pieces, name, how, bonus] of ROBES) {
    const r = el('div', 'robe');
    const h = el('div', 'robe-head');
    pieces.forEach(p => h.append(sprite(p, 28)));
    h.append(el('span', null, name));
    r.append(h, el('p', null, how), el('p', null, bonus));
    robeTable.append(r);
  }
}

/* ---------- 生き物 ---------- */
const MOBS = [
  ['mage', 'メイジ', '森（夜）・森林の小屋', '体力 22。距離をとって魔法の弾を撃つ。'],
  ['red_mage', 'レッドメイジ', 'ネザー', '体力 34。火の弾で相手を燃やす。レッドコアを落とす。'],
  ['green_mage', 'グリーンメイジ', '空に浮かぶ島・巨大樹の迷宮', '体力 30。風の弾で押し飛ばす。グリーンコアを落とす。'],
  ['blue_mage', 'ブルーメイジ', '氷の塔・大海の塔', '体力 34。氷の弾で一瞬凍りつかせる。ブルーコアを落とす。'],
  ['yellow_mage', 'イエローメイジ', '聖なる遺跡・雷獣の渓谷', '体力 50。重い金の弾を撃ち、弱ると自分を癒す。イエローコアを落とす。'],
  ['purple_mage', 'パープルメイジ', '沼地の小屋・魔獣の遺跡', '体力 60。メイジの仲間でいちばん強い。毒の弾（毒 II 6 秒＋弱体化）を撃つ。パープルコアを落とす。'],
];
const mobGrid = document.getElementById('mob-grid');
function mobCard(iconEl, name, where, text) {
  const m = el('div', 'mob');
  const box = el('span', 'icon-box'); box.append(iconEl);
  const b = el('div');
  b.append(el('h3', null, name), el('p', 'where', where), el('p', null, text));
  m.append(box, b);
  if(mobGrid) mobGrid.append(m);
}
if(mobGrid) {
  for (const [skin, name, where, text] of MOBS) mobCard(face(skin, 40), name, where, text);

  [['mana_slime', 'マナスライム', '沼・マングローブの沼', '紫のスライム。小さいものがマナのかけらを落とし、ごくまれに跳球の魔導書を持っている。'],
   ['sorcerer', 'ソーサラー', '村の魔法使いの家', '友好的な魔法使い。魔導書を5冊渡すと、ランダムな1冊と交換してくれる。']].forEach(([icon, name, where, text]) => {
    const icon2 = sprite(icon, 40); icon2.classList.add('face'); icon2.setAttribute('aria-label', name);
    mobCard(icon2, name, where, text);
  });

  [['mob_wizard_villager', '魔法使い（村人）', '合成台のある村', '村人の職業。村に合成台があると、村人の一人が魔法使いになる。マナのかけら5〜30個とコンパス1個を渡すと、ダンジョンの地図と交換してくれる。レベルを上げるほど行ける場所が増える（新米：沼地の小屋・大きな浮島／見習い：火山・巨大樹／一人前：雷獣の渓谷・フレイムジグラート／熟練者：ルーンドーム・大海の塔／達人：聖なる遺跡・魔獣の遺跡）。'],
   ['mob_shell_crab', 'シェルクラブ', '砂浜・石だらけの海岸・大海の塔', '体力 100。青い甲羅のカニ。攻撃を受けると、ときどき殻にこもって守りを固める。ブルーコアを落とす。'],
   ['mob_thunder_element', 'サンダーエレメント', '雷獣の渓谷', '体力 40。ビリビリした雷の塊。宙をただよい、15 m 以内の相手に雷のビームを放つ。イエローコアを落とす。'],
   ['mob_demon_imp', '炎の悪魔', '焔魔イグニードが呼ぶ', '体力 60。宙をただよう小さな赤い悪魔。爪で相手を燃やし、炎の弾を撃つ。ドロップはない。'],
   ['mob_holy_spirit', 'ホーリースピリット', '聖なる遺跡', '体力 120。宙をただよう白い精霊。光のビームを放ち、まわりの魔物の傷を癒す。イエローコアを落とす。'],
   ['mob_dark_spirit', 'ダークスピリット', '魔獣の遺跡', '体力 120。宙をただよう闇の精霊。闇のビームを放ち、相手の体力を吸い取る。パープルコアを落とす。']].forEach(([file, name, where, text]) => {
    mobCard(portrait(file, name, 48), name, where, text);
  });
}

function portrait(file, name, size) {
  const img = el('img', 'mob-portrait');
  img.src = `img/${file}.png`; img.width = img.height = size; img.alt = name;
  return img;
}

/* ---------- ボス（進捗の順） ---------- */
const BOSSES = [
  { id: 'tesseros', name: '魔導士テセロス', kicker: 'BOSS 1', theme: 'violet',
    lead: '沼地の小屋の主の老魔導士。小屋の母屋にはじめて足を踏み入れた者の前に、紫の魔法陣から姿を現す。',
    points: ['体力 <b>200</b>。紫の魔法の弾、足もとの輪で打ち上げる魔法、防御や攻撃を弱める弾、山なりの範囲攻撃を使う。',
      '体力が半分を切ると、30 秒ごとにパープルメイジを 1 体呼び寄せる。'],
    adv: '正義の魔導士',
    drops: [['research_results', '100%'], ['sturdy_string', '30%'], ['purple_core', '20%'], ['world_tree_twig', '10%'], ['seekers_lament', '10%']] },
  { id: 'glaioria', name: '氷竜グライオリア', kicker: 'BOSS 2', theme: 'ice',
    lead: '空に浮かぶ大きな島、崩れた石柱に囲まれた竜のねぐらの主。石柱の輪に入ると、凍りついた魔法陣から舞い降りる。',
    points: ['体力 <b>450</b>。噛みつき・回転攻撃に、凍てつく息吹・氷のつぶて・相手を島の外へ投げ飛ばす氷の竜巻。',
      '体力が半分を切ると吹雪が強まり、技が速く、竜巻が増える。'],
    adv: 'ドラゴンスレイヤー',
    drops: [['ice_scale', '100%'], ['ice_dragon_egg', '30%'], ['blue_core', '20%'], ['ancient_sword', '10%'], ['freezing_breath', '10%']] },
  { id: 'regius', name: '炎竜レギウス', kicker: 'BOSS 3', theme: 'fire',
    lead: '山岳にそびえる火山の地の底、灼熱の大広間の主。火口の穴を降りて大広間に入ると、赤く燃え上がる魔法陣から目を覚ます。',
    points: ['体力 <b>600</b>。噛みつき・回転攻撃に、燃え移る灼けつく息吹、扇形に吐く炎の球。',
      '5 秒かけてためる<b>大きな炎の球</b>は、半径 20 m を焼き払う。逃げ切れる速度のため、ため始めたら距離をとること。',
      '体力が半分を切ると炎が激しくなり、技が速く、炎の球が増加する。'],
    adv: '灼熱を越えて',
    drops: [['flame_scale', '100%'], ['fire_dragon_egg', '30%'], ['red_core', '20%'], ['ancient_spear', '10%'], ['scorching_breath', '10%']] },
  { id: 'shinra', name: '森羅の守護者', kicker: 'BOSS 4', theme: 'forest',
    lead: '森を纏いし樹霊の王。木の幹の体に枝の冠をいただき、胸のコアが森の生命の力でエメラルドグリーンに光る。巨大樹の迷宮の一番下、根の間に入ると、緑に輝く魔法陣から目を覚ます。',
    points: ['体力 <b>800</b>。杖で殴るほか、杖を構えて、足もとから突き出す木の根・0.5 秒おきに飛んでくる 5 本の木の槍・相手を追いかけて引き寄せる葉のトルネードを使う。',
      '体力が半分を切ると、8 秒ごとに杖を天へ掲げて <b>80 回復</b>する。ただし、燃焼中および火が消えてから30秒間は回復できない。火打ち石と打ち金や火属性のエンチャント、火の魔法などで、燃やしながら戦うとよい。'],
    adv: '森羅万象',
    drops: [['forest_core', '100%'], ['sapling_sprout', '30%'], ['green_core', '20%'], ['spirit_king_staff', '10%'], ['earth_grace', '10%']] },
  { id: 'fulgarion', name: '雷獣フルガリオン', kicker: 'BOSS 5', theme: 'thunder',
    lead: '白い毛並みにシアンと黄色の稲妻の縞を走らせ、灰青のねじれた角を持つ雷の獣。バッドランズの雷獣の渓谷、地下 2 層目の寝床に入ると、黄色くまたたく魔法陣から目を覚ます。',
    points: ['体力 <b>1200</b>。相手のまわりを素早く駆けまわり、ときどき立ち止まって睨みつける。噛みつき・飛び掛かりのほか、2 つの雷の技を使う。',
      '<b>咆哮</b>すると、まわりのブロックに 10 回雷が落ちる。落ちる 1 秒前に地面がビリビリするので、その場から離れること。',
      '<b>雷のレーザー</b>は追いかけてくるが向きを変えるのが遅く、横へ走り続ければ逃げ切れる。当たった相手から 15 m 以内の仲間にも感電するため、固まらないよう注意。',
      '体力が半分を切ると体から雷があふれ、噛みつきと飛び掛かりが雷をまとって強くなる（着地のまわりにも電撃）。'],
    adv: '雷鳴を鎮めし者',
    drops: [['thunder_beast_horn', '100%'], ['charged_orb', '30%'], ['yellow_core', '20%'], ['thunder_beast_sword', '10%'], ['thunder_beast_cannon', '10%']] },
  { id: 'ignied', name: '焔魔イグニード', kicker: 'BOSS 6', theme: 'demon',
    lead: '赤黒い死神のような悪魔。プレイヤーの 1.5 倍ほどの背丈で、燃える鎌のような腕を振るう。いまはスポーンエッグで呼び出せる。',
    points: ['体力 <b>1500</b>。斬撃のほか、足もとから半径 9 m に広がる<b>全方位の炎</b>、狙いすました<b>炎の連弾</b>（8 発）を使う。',
      '<b>炎の悪魔</b>を 2 体呼び、倒されると呼び直す。<b>爆破コア</b>は相手のまわりに 10 個置かれ、2 秒後に爆発する。足もとに置かれたら動き続けること。',
      '頭上にためる<b>巨大な炎の球</b>（5 秒）は、半径 20 m を焼き払う。ためはじめたら距離をとること。',
      '体力が半分を切ると、翼と尾をもつ悪魔の姿に変わる。'],
    adv: 'サンイーター',
    drops: [['demon_heart', '100%'], ['red_core', '50%'], ['demon_contract', '30%'], ['prominence_scythe', '10%'], ['demon_flame', '10%']] },
  { id: 'rune_giant', name: 'ルーンの神兵', kicker: 'BOSS 7', theme: 'rune',
    lead: '背丈およそ 10 ブロックの石の巨像。胸に緑の渦を巻く核を宿し、体じゅうのルーン文字が淡く光る。いまはスポーンエッグで呼び出せる。',
    points: ['体力 <b>2000</b>。巨大な斧の<b>振り下ろし</b>と、足もとから半径 12 m に広がる<b>地面叩き</b>（打ち上げ）を使う。',
      '胸のコアから<b>極太のビーム</b>（3 秒）で追いかけ、<b>ルーン弾</b>を 12 発連射する。ビームは横へ走り続ければかわせる。',
      '<b>斧を投げつけ</b>、ブーメランのように戻ってくる。行きも帰りも当たるので、通り道から離れること。',
      '体力が半分を切るとコアが赤く染まり、核の渦が速く回って、技の間隔が短くなる。'],
    adv: '巨兵を打ち砕く者',
    drops: [['colossus_core', '100%'], ['green_core', '50%'], ['ancient_emergency_device', '30%'], ['rune_axe', '10%'], ['core_overload', '10%']] },
  { id: 'nodens', name: '海王ノーデンス', kicker: 'BOSS 8', theme: 'sea',
    lead: '深い海にそびえる大海の塔、その最上階・海王の間で待つ老海神。下半身は魚の尾で、三叉の槍を携えている。',
    points: ['体力 <b>2500</b>。槍の突き・突進、氷の槍、予兆の輪のあとに落ちる青い雷、渦潮、大津波。',
      '手下の大海のイルカを呼び、倒されると呼び直す。体力が半分を切ると海が荒れ、技が速くなる。'],
    adv: '海王を討ちし者',
    drops: [['divine_talisman', '100%'], ['blue_core', '50%'], ['ocean_drop', '30%'], ['nordensia', '10%'], ['tenkai_raibaku', '10%']] },
  { id: 'cynthia', name: '聖騎士シンシア', kicker: 'BOSS 9', theme: 'gold',
    lead: '聖なる遺跡の最深部、円い大広間で眠る聖騎士。はじめて足を踏み入れた者の前で、魔法陣から目を覚ます。',
    points: ['体力 <b>3000</b>。聖剣の斬撃、光の斬撃・光の槍・光の柱、聖なるウサギの召喚、張り付くと光の波で吹き飛ばしてくる。',
      '体力が半分を切ると技が速くなり、光の雨を降らせる。'],
    adv: '聖騎士を超えて',
    drops: [['paladin_pendant', '100%'], ['yellow_core', '50%'], ['durandal', '10%'], ['cynthia_prayer', '10%'], ['saint_soul', '10%']] },
  { id: 'grimnowl', name: '魔獣グリムノウル', kicker: 'FINAL BOSS', theme: 'dark',
    lead: '魔獣の遺跡の最深部、半径 20 の暗い大広間に封じられた魔獣。はじめて足を踏み入れた者の前で、闇の魔法陣から目を覚ます。',
    points: ['体力 <b>5000</b>。噛みつき・尻尾の薙ぎ払い・突進に、闇の槍・闇の柱・闇の炎・咆哮を使う。',
      '体力が半分を切ると空へ舞い上がって急降下や闇の雨を、4 分の 1 を切ると闇の鎧をまとい、受けるダメージを大きく減らす。'],
    adv: '大魔導士',
    drops: [['broken_black_knight_pendant', '100%'], ['purple_core', '50%'], ['gungnir', '10%'], ['raison_detre', '10%'], ['monster_soul', '10%']] },
];

const bossGrid = document.getElementById('boss-grid');
const bossDialog = document.getElementById('boss-detail');
const bossDetailContent = document.getElementById('boss-detail-content');

const THEME_GLOWS = {
  violet: 'rgba(180, 84, 200, .4)',
  ice: 'rgba(131, 207, 255, .4)',
  fire: 'rgba(255, 106, 30, .4)',
  demon: 'rgba(220, 40, 50, .45)',
  sea: 'rgba(79, 184, 216, .4)',
  dark: 'rgba(155, 91, 214, .45)',
  thunder: 'rgba(90, 220, 255, .45)',
  rune: 'rgba(92, 255, 168, .4)',
  forest: 'rgba(60, 232, 160, .4)',
  gold: 'rgba(232, 196, 106, .35)'
};

if(bossGrid) {
  for (const b of BOSSES) {
    const card = el('button', 'boss-card');
    card.type = 'button';
    const glowColor = THEME_GLOWS[b.theme] || THEME_GLOWS.gold;
    card.style.setProperty('--card-glow', glowColor);

    const iconBox = el('div', 'boss-card-icon-wrap');
    const icon = portrait(b.id === 'grimnowl' ? 'grimnowl' : 'boss_' + b.id, b.name, 80);
    icon.className = 'boss-card-icon';
    iconBox.append(icon);

    card.append(iconBox);
    card.append(el('h3', 'boss-card-name', b.name));
    card.append(el('p', 'boss-card-kicker', b.kicker));

    card.addEventListener('click', () => {
      card.classList.add('revealed');
      icon.style.boxShadow = `0 0 15px ${glowColor}`; // 正体判明後に光らせる
      openBossDetail(b);
    });
    bossGrid.append(card);
  }
}

function openBossDetail(b) {
  if(!bossDetailContent) return;
  bossDetailContent.replaceChildren();
  
  const article = el('article', 'boss boss-' + b.theme);
  article.classList.add('in-dialog');

  const faceBox = el('div', 'boss-face');
  faceBox.append(portrait(b.id === 'grimnowl' ? 'grimnowl' : 'boss_' + b.id, b.name, 96));
  faceBox.firstChild.className = 'boss-portrait';
  
  const body = el('div', 'boss-body');
  body.append(el('p', 'boss-kicker', b.kicker), el('h3', null, b.name), el('p', null, b.lead));
  const ul = el('ul', 'dots');
  b.points.forEach(t => { const li = el('li'); li.innerHTML = t; ul.append(li); });
  body.append(ul, el('p', 'boss-adv', `倒すと挑戦「${b.adv}」`));
  const need = NEEDS[b.drops[0][0]];
  if (need) body.append(el('p', 'boss-need', `${DATA.names[b.drops[0][0]]}：${need}`));
  
  const drops = el('div', 'drops');
  b.drops.forEach(([id, p]) => drops.append(dropButton(id, p)));
  body.append(drops);
  
  article.append(faceBox, body);
  bossDetailContent.append(article);
  
  if (typeof bossDialog.showModal === 'function') {
    bossDialog.showModal();
  }
}

if(bossDialog) {
  bossDialog.querySelector('.dialog-close').addEventListener('click', () => bossDialog.close());
  bossDialog.addEventListener('click', e => { if (e.target === bossDialog) bossDialog.close(); });
}

function dropButton(id, p) {
  const d = el('button', 'drop'); d.type = 'button';
  d.append(sprite(id, 24), el('span', null, DATA.names[id]), el('b', null, p));
  if (byId[id] || DATA.descs[id]) d.addEventListener('click', () => openDetail(id));
  return d;
}

/* ---------- 使い魔 ---------- */
const FAMS = [
  ['blue_feather', '幸せの青い鳥', '最大 3 羽・つつく', '', '宝箱 15%'],
  ['black_feather', '八咫烏', '最大 2 羽・鋭いくちばし', '出ているあいだ 暗視', '宝箱 5%'],
  ['frayed_yarn', 'モフ猫', '1 匹・魔法の弾（10）', '出ているあいだ 落下ダメージなし', '宝箱 5%'],
  ['sturdy_string', '実験体S', '1 匹・噛みつきと、動きを鈍らせる蜘蛛糸', '', '魔導士テセロス 30%'],
  ['ice_dragon_egg', '幼い氷竜', '1 匹・噛みつき・凍てつく息吹・氷のつぶて', '出ているあいだ 落下ダメージなし', '氷竜グライオリア 30%'],
  ['fire_dragon_egg', '幼い炎竜', '1 匹・噛みつき・灼けつく息吹・炎の球', '出ているあいだ 火のダメージを受けない', '炎竜レギウス 30%'],
  ['sapling_sprout', '樹の精霊', '1 体・小さな杖で殴り、5 秒ごとに半径 20 m の仲間を 5 回復', '', '森羅の守護者 30%'],
  ['small_hat', 'チェシャ猫', '1 匹・宙に浮かんで強い魔法の弾（20）', '', '宝箱 5%'],
  ['charged_orb', 'サンダーエレメント', '最大 3 体・雷のビーム（毎秒 10）、当たった相手から 15 m 以内の敵にも感電', '', '雷獣フルガリオン 30%'],
  ['demon_contract', '炎の悪魔', '最大 2 体・近接の爪と炎の弾（どちらも 50）で燃やす', '出ているあいだ 火のダメージを受けない', '焔魔イグニード 30%'],
  ['ocean_drop', '大海のイルカ', '最大 2 頭・宙を泳いで水のビームと水の斬撃', '出ているあいだ 水中呼吸・イルカの好意', '海王ノーデンス 30%'],
  ['holy_beast_egg', '聖なるウサギ', '最大 2 体・噛みつく', '出ているあいだ マナ回復速度 +50%', '聖なる遺跡の宝物庫 20%'],
  ['miasma_stone', '瘴気の鷹', '1 羽・追尾する羽と闇の槍', '', '魔獣の遺跡の宝物庫 20%'],
  ['ancient_emergency_device', 'ルーンの戦兵', '最大 2 体・近接の拳（アイアンゴーレムと同じ強さ）。体力 300', '出ているあいだ 耐性（1 体で I・2 体で II）', 'ルーンの神兵 30%'],
  ['saint_soul', 'ホーリースピリット', '1 体・光のビームと、仲間をまとめて癒す魔法', '', '聖騎士シンシア 10%'],
  ['monster_soul', 'ダークスピリット', '1 体・闇のビームと、体力を吸い取る魔法', '', '魔獣グリムノウル 10%'],
];
const famGrid = document.getElementById('fam-grid');
if(famGrid) {
  for (const [item, name, how, buff, odds] of FAMS) {
    const f = el('div', 'fam');
    f.append(sprite(item, 48), el('h3', null, name), el('p', 'item', DATA.names[item]), el('p', null, how));
    if (buff) f.append(el('p', 'buff', buff));
    f.append(el('p', 'odds', '入手：' + odds));
    f.addEventListener('click', () => openDetail(item));
    f.style.cursor = 'pointer';
    famGrid.append(f);
  }
}

/* ---------- ダンジョン ---------- */
const PLACES = [
  ['村の魔法使いの家', '平原・サバンナ・タイガ・雪原の村', '#e8c46a',
   '塔のついた小さな家。ソーサラーが住んでおり、宝箱には魔法使いの手記や、まれに魔導書が入っている。',
   ['魔導書を 5 冊預けると 1 冊と交換', '村に合成台があると、地図を交換してくれる魔法使いの村人が現れる']],
  ['森林の小屋', '森・花の森', '#8fcf6a',
   'メイジがひとりで住む、レンガと木の小さな家。暖炉と本棚のある部屋に宝箱が 1 つ。まわりの暗がりにはメイジや魔物が出る。',
   ['宝箱の魔導書 約 42%']],
  ['沼地の小屋', '沼・マングローブの沼', '#b16bd8',
   'パープルメイジに囲まれた古びた小屋。母屋に入ると、主の魔導士テセロスが現れる。',
   ['暖炉の下に隠しチェスト（浮遊の魔導書が必ず 1 冊）', '小屋ひとつで魔導書 1 冊以上 100%', '母屋で魔導士テセロスが現れる']],
  ['空に浮かぶ島', '海・川・浜辺以外の地上（高さ 200 ほど）', '#7ed98a',
   'グリーンメイジが住む古い隠れ家。祭壇か見張り塔を中心に、宝箱の部屋・ポーションの部屋・書斎・畑が並ぶ。登る道はない。',
   ['祭壇：マジックソウル 20%・魔法の布 50%']],
  ['大きな浮島（竜のねぐら）', '浮島と同じ場所（ずっとまれ）', '#9fdcff',
   '崩れた石柱が輪になって立つ、大きな空の島。まん中のねぐらには宝箱が 3 つ。',
   ['祭壇と同じ宝箱 1・浮島の宝箱 2', '石柱の輪に入ると氷竜グライオリアが舞い降りる']],
  ['氷の塔', '雪原・樹氷・雪のタイガ・林・雪の斜面', '#8fd3ff',
   '6 階建ての氷の塔。各階にブルーメイジ。粉雪の落とし穴と、糸に触れると薬や矢が飛んでくる罠の部屋がある。',
   ['最上階：マジックソウル 20%・魔法の布 50%']],
  ['大海の塔', '深い海', '#4fb8d8',
   '海底から空までそびえる、21 階建ての珊瑚の城塔。各階の階段は部屋の反対側にあり、ブルーメイジやシェルクラブのいる部屋を通り抜けて上る。',
   ['まれに宝物庫（魔導書 1 冊が必ず）', '最上階・海王の間で海王ノーデンスが目覚める']],
  ['火山', '山岳（切り立った山頂・草地・雪の斜面など）', '#e0582a',
   '山岳にそびえる、ふもとの半径 110 ほどの大きな火山。黒い岩の斜面を冷えた溶岩の流れが下り、火口からは煙が上がる。火口のまん中の穴は、地の底の灼熱の大広間まで一直線に続いている。',
   ['火口の底は y190 ほど、大広間は y0 付近（降りる道はない）', '大広間の奥の壇に宝箱が 3 つ（まん中の金の台の上がいい宝箱）', '大広間に入ると炎竜レギウスが目を覚ます']],
  ['巨大樹の迷宮', '古代の巨大樹林（マツ・トウヒ・シラカバ）・森・シラカバの森', '#5fbf5a',
   '高さ 80 ほどの巨大樹。根もとの洞から幹の中のら旋の坂を下りると、土と根の壁でできた地下 3 層の迷路が広がる。グリーンメイジがさまよい、層から層へは天井から垂れるグロウベリーのつるを伝って下りる。',
   ['行き止まりに宝箱やスポナー、仕掛け線の罠の部屋も', '2〜3 層目のどこかに宝物の部屋（いい宝箱）', '一番下の根の間で森羅の守護者が目を覚ます（奥の壇に宝箱が 3 つ）']],
  ['雷獣の渓谷', 'バッドランズ・侵食されたバッドランズ・樹木のバッドランズ', '#f0c93a',
   '台地を割る深い谷と、谷をまたぐ吊り橋。谷のつきあたりから斜めに下ると、地下 2 層の洞窟が広がる。広場と通路の並びは、ワールドごと（場所ごと）に変わる。サンダーエレメントとイエローメイジがさまよい、1 層目には吊り橋のかかった大空洞、2 層目への縦穴にははしごがある。',
   ['行き止まりや広場に宝箱とスポナー、各層に仕掛け線の罠の部屋', '2 層目に宝物の部屋（いい宝箱）', '一番奥の円形の寝床で雷獣フルガリオンが目を覚ます（奥の壇に宝箱が 3 つ）']],
  ['聖なる遺跡', '平原・ヒマワリ平原', '#f0d060',
   '崩れた石の広場から、らせん階段で地下 8 層へ。暗く、死者やクモ、イエローメイジ、ホーリースピリットがさまよう。仕掛け線の罠やスポナーの部屋に注意。',
   ['チェストの魔導書は、出にくいかわりにレア・エピックが中心', '7〜8 層目に宝物庫（魔導書 1〜2 冊・聖獣の卵 20%）', '最深部の大広間で聖騎士シンシアが目覚める']],
  ['魔獣の遺跡', 'ダークフォレスト', '#9b5bd6',
   '崩れた見張り塔の下に広がる、魔獣を閉じ込めておく地下 10 層の牢獄。牢屋・実験施設・拷問部屋・看守室が並び、パープルメイジとダークスピリットが見張る。明かりはほとんどない。',
   ['チェストの魔導書はレア・エピックが中心で、聖なる遺跡より出やすい', '7〜10 層目に宝物庫（魔導書 1〜2 冊・瘴気の魔石 20%）', '最深部の半径 20 の大広間で魔獣グリムノウルが目覚める']],
];
const placeGrid = document.getElementById('place-grid');
if(placeGrid) {
  for (const [name, biome, color, text, notes] of PLACES) {
    const p = el('article', 'place');
    p.style.setProperty('--accent', color);
    p.append(el('h3', null, name), el('p', 'biome', biome), el('p', null, text));
    const ul = el('ul');
    notes.forEach(n => ul.append(el('li', null, n)));
    p.append(ul);
    placeGrid.append(p);
  }
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
nav.addEventListener('click', e => { if (e.target.tagName === 'A') nav.classList.remove('is-open'); });


/* ---------- タブ切り替え制御 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.nav a, .brand, .btn[href^="#"]');
  const contents = document.querySelectorAll('.tab-content');

  function activateTab(tabId) {
    if (!tabId) return;
    const targetId = tabId === 'top' ? 'home' : tabId;
    const targetContent = document.getElementById(targetId);
    
    if (targetContent) {
      // 全コンテンツを非表示
      contents.forEach(c => c.classList.remove('is-active'));
      // 対象コンテンツを表示
      targetContent.classList.add('is-active');
      
      // メニューのアクティブ状態を更新
      document.querySelectorAll('.nav a').forEach(a => a.classList.remove('is-active'));
      document.querySelectorAll(`.nav a[href="#${tabId}"]`).forEach(a => {
        a.classList.add('is-active');
      });
      // トップへスクロール
      window.scrollTo(0, 0);
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const href = tab.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        activateTab(href.substring(1));
        // URLハッシュを更新(履歴に残さない場合は history.replaceState を使う)
        history.pushState(null, null, href);
      }
    });
  });

  // 初期化：URLのハッシュがあればそれを開く、なければトップ（home）
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash === 'top' ? 'home' : hash)) {
    activateTab(hash);
  } else {
    activateTab('home');
  }
  
  /* --- ヒーロー背景スライダーの初期化 --- */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-slider-dots .dot');
  if (slides.length > 0 && dots.length > 0) {
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      let next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }

    function startSlider() {
      slideInterval = setInterval(nextSlide, 6000); // 6秒で切り替え
    }

    function resetSlider() {
      clearInterval(slideInterval);
      startSlider();
    }

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        showSlide(index);
        resetSlider();
      });
    });

    startSlider();
  }
});
