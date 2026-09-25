/* 幻想の魔導書（Grimoire Fantasia）紹介ページ */
/* ================================================================
 * 公開するときに書き換えるところ
 *   REPO … GitHub の「ユーザー名/リポジトリ名」
 *   VERSION … 表示する MOD のバージョン
 * ================================================================ */
const REPO = 'Ochi1125/GrimoireFantasia';
const VERSION = '1.1.0';

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
   "id": "holy_fire_grimoire",
   "name": "聖火の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "100",
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
   "id": "rampage_grimoire",
   "name": "暴爆の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "100",
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
   "id": "black_thunder_grimoire",
   "name": "黒雷の魔導書",
   "rarity": "epic",
   "source": "synthesis",
   "mana": "200",
   "dur": "64",
   "effect": "半径 32m のランダムな敵に黒い雷を 3 回（1 回 10）",
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
   "id": "blizzard_wand",
   "name": "吹雪の杖",
   "rarity": "unique",
   "source": "craft",
   "mana": "80",
   "dur": "340",
   "effect": "吹雪の渦が半径 20m の敵を 10 秒引き寄せて凍らせる",
   "desc": "小さな吹雪がいつも渦を巻いている杖。鋭い氷が嵐となって襲い掛かる時、それは命をも容易に奪う矛となる。",
   "from": "blizzard_grimoire"
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
  "broken_black_knight_pendant": "壊れた黒騎士のペンダント",
  "book_pouch": "ブックポーチ"
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
  "paladin_pendant": "銀のロケットペンダント。蓋の内側には、微笑むシンシアと、その隣に並ぶ一人の男性の写真が収められている。",
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
  "book_pouch": "魔導書だけをしまっておける革のポーチ。27 冊まで入り、壊しても中身はそのまま残る。"
 }
};

/* ---------- アニメーションするテクスチャ（コマ数, 1 コマの tick 数） ---------- */
const ANIM = {
  cynthia_prayer: [24, 2], durandal: [20, 2], magic_soul: [16, 2], mana_shard: [8, 4],
  red_core: [16, 2], green_core: [16, 2], blue_core: [16, 2], purple_core: [16, 2], yellow_core: [16, 2],
  healing_wand: [8, 3], raison_detre: [24, 2], gungnir: [24, 2], miasma_stone: [8, 3],
};
function animOf(id) {
  if (ANIM[id]) return ANIM[id];
  if (id.endsWith('_wand') && id !== 'broken_wand') return [8, 2];
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
  el.setAttribute('aria-label', DATA.names[id] || id);
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
  }
  if (typeof dialog.showModal === 'function') dialog.showModal();
}
function sourceText(it) {
  if (it.id === 'bouncing_orb_grimoire') return 'マナスライム 0.2%（ドロップ増加で 3〜5%）';
  if (it.id === 'cynthia_prayer') return '聖騎士シンシア 10%';
  if (it.id === 'raison_detre') return '魔獣グリムノウル 10%';
  if (it.source === 'chest') return `古い宝箱・ソーサラーとの交換（${RARITY[it.rarity]}）`;
  if (it.source === 'synthesis') return '合成台で作る';
  if (it.source === 'craft') return '作業台：魔導書 ＋ 壊れた杖';
  return '';
}
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

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
['light_grimoire', 'ice_grimoire', 'fire_grimoire', 'lightning_grimoire', 'explosion_grimoire',
 'fire_wand', 'blizzard_wand', 'cynthia_prayer', 'raison_detre'].forEach(id => {
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
  ['red_core', 'レッドコア', '炎', 'レッドメイジ 5%'],
  ['green_core', 'グリーンコア', '風', 'グリーンメイジ 5%'],
  ['blue_core', 'ブルーコア', '氷', 'ブルーメイジ 5%'],
  ['purple_core', 'パープルコア', '深い魔力', 'パープルメイジ 5% ／ 魔獣グリムノウル 50%'],
  ['yellow_core', 'イエローコア', '雷', 'イエローメイジ 5% ／ 聖騎士シンシア 50%'],
];
const coreList = document.getElementById('core-list');
for (const [id, name, attr, from] of CORES) {
  const li = el('li');
  li.append(sprite(id, 32));
  const t = el('span'); t.append(el('b', null, `${name}（${attr}）`), el('small', null, from));
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

/* ---------- 装束 ---------- */
const ROBES = [
  ['apprentice', ['apprentice_hat', 'apprentice_robe', 'apprentice_leggings', 'apprentice_boots'], '見習いの装束',
    '布で作る。防御は革と同じくらい。', '4 部位でマナ回復速度 +10% ／ 魔法防御 計 6'],
  ['wizard', ['wizard_hat', 'wizard_robe_top', 'wizard_robe_bottom', 'wizard_boots'], '魔法使いの装束',
    '魔法の布（布＋マナのかけら 8 個）で作る。防御は鉄と同じくらい。', '1 部位ごとマナ回復速度 +20%、4 部位で最大マナ +20% ／ 魔法防御 計 11'],
  ['archmage', ['archmage_hat', 'archmage_robe_top', 'archmage_robe_bottom', 'archmage_boots'], '大魔導士の装束',
    '大魔導士の布（布＋マナストーン 8 個）で作る。防御はネザライトより少し上で、燃えない。', '1 部位ごとマナ回復速度 +100%、4 部位で最大マナ +100% ／ 魔法防御 計 30'],
];
const robeTable = document.getElementById('robe-table');
for (const [, pieces, name, how, bonus] of ROBES) {
  const r = el('div', 'robe');
  const h = el('div', 'robe-head');
  pieces.forEach(p => h.append(sprite(p, 28)));
  h.append(el('span', null, name));
  r.append(h, el('p', null, how), el('p', null, bonus));
  robeTable.append(r);
}

/* ---------- 生き物 ---------- */
const MOBS = [
  ['mage', 'メイジ', '森（夜）', '体力 22。距離をとって魔法の弾を撃つ。'],
  ['red_mage', 'レッドメイジ', 'ネザー', '体力 34。火の弾で相手を燃やす。レッドコアを落とす。'],
  ['green_mage', 'グリーンメイジ', '空に浮かぶ島', '体力 30。風の弾で押し飛ばす。グリーンコアを落とす。'],
  ['blue_mage', 'ブルーメイジ', '氷の塔', '体力 34。氷の弾で一瞬凍りつかせる。ブルーコアを落とす。'],
  ['yellow_mage', 'イエローメイジ', '聖なる遺跡', '体力 50。重い金の弾を撃ち、弱ると自分を癒す。イエローコアを落とす。'],
  ['purple_mage', 'パープルメイジ', '沼の小屋・魔獣の遺跡', '体力 60。メイジの仲間でいちばん強い。毒の弾（毒 II 6 秒＋弱体化）を撃つ。パープルコアを落とす。'],
];
const mobGrid = document.getElementById('mob-grid');
for (const [skin, name, where, text] of MOBS) {
  const m = el('div', 'mob');
  const box = el('span', 'icon-box'); box.append(face(skin, 40));
  const b = el('div');
  b.append(el('h3', null, name), el('p', 'where', where), el('p', null, text));
  m.append(box, b);
  mobGrid.append(m);
}
[['mana_slime', 'マナスライム', '沼・マングローブの沼', '紫のスライム。小さいものがマナのかけらを落とし、ごくまれに跳球の魔導書を持っている。'],
 ['sorcerer', 'ソーサラー', '村の魔法使いの家', '友好的な魔法使い。魔導書を 5 冊預けると、1 冊と取り替えてくれる。']].forEach(([icon, name, where, text]) => {
  const m = el('div', 'mob');
  const icon2 = sprite(icon, 40); icon2.classList.add('face'); icon2.setAttribute('aria-label', name);
  const box = el('span', 'icon-box'); box.append(icon2);
  const b = el('div');
  b.append(el('h3', null, name), el('p', 'where', where), el('p', null, text));
  m.append(box, b);
  mobGrid.append(m);
});
const drops = document.getElementById('boss-drops');
[['paladin_pendant', '100%'], ['yellow_core', '50%'], ['holy_beast_egg', '30%'], ['durandal', '10%'], ['cynthia_prayer', '10%']]
  .forEach(([id, p]) => drops.append(dropButton(id, p)));
const drops2 = document.getElementById('boss-drops-2');
[['broken_black_knight_pendant', '100%'], ['purple_core', '50%'], ['miasma_stone', '30%'], ['gungnir', '10%'], ['raison_detre', '10%']]
  .forEach(([id, p]) => drops2.append(dropButton(id, p)));
function dropButton(id, p) {
  const d = el('button', 'drop'); d.type = 'button';
  d.append(sprite(id, 24), el('span', null, DATA.names[id]), el('b', null, p));
  d.addEventListener('click', () => openDetail(id));
  return d;
}

/* ---------- 使い魔 ---------- */
const FAMS = [
  ['holy_beast_egg', '聖なるウサギ', '最大 2 体・噛みつく', '出ているあいだ マナ回復速度 +50%', '聖騎士シンシア 30%'],
  ['miasma_stone', '瘴気の鷹', '1 羽・追尾する羽と闇の槍', '', '魔獣グリムノウル 30%'],
  ['blue_feather', '幸せの青い鳥', '最大 3 羽・つつく', '', '宝箱 15%'],
  ['black_feather', '八咫烏', '最大 2 羽・鋭いくちばし', '出ているあいだ 暗視', '宝箱 5%'],
  ['frayed_yarn', 'モフ猫', '1 匹・魔法の弾（10）', '出ているあいだ 落下ダメージなし', '宝箱 5%'],
  ['small_hat', 'チェシャ猫', '1 匹・強い魔法の弾（20）', '', '宝箱 5%'],
];
const famGrid = document.getElementById('fam-grid');
for (const [item, name, how, buff, odds] of FAMS) {
  const f = el('div', 'fam');
  f.append(sprite(item, 48), el('h3', null, name), el('p', 'item', DATA.names[item]), el('p', null, how));
  if (buff) f.append(el('p', 'buff', buff));
  f.append(el('p', 'odds', '入手：' + odds));
  f.addEventListener('click', () => openDetail(item));
  f.style.cursor = 'pointer';
  famGrid.append(f);
}

/* ---------- ダンジョン ---------- */
const PLACES = [
  ['村の魔法使いの家', '平原・サバンナ・タイガ・雪原の村', '#e8c46a',
   '塔のついた小さな家。ソーサラーが住んでいて、宝箱には魔法使いの手記と、ときには魔導書が入っている。',
   ['魔導書を 5 冊預けると 1 冊と交換']],
  ['空に浮かぶ島', '海・川・浜辺以外の地上（高さ 200 ほど）', '#7ed98a',
   'グリーンメイジが住む古い隠れ家。祭壇か見張り塔を中心に、宝箱の部屋・ポーションの部屋・書斎・畑が並ぶ。登る道はない。',
   ['祭壇：マジックソウル 20%・魔法の布 50%']],
  ['沼の小屋', '沼・マングローブの沼', '#b16bd8',
   'パープルメイジに囲まれた古びた小屋。醸造の道具と宝箱が 2 つ。', ['小屋ひとつで魔導書 1 冊以上 約 66%']],
  ['氷の塔', '雪原・樹氷・雪のタイガ・林・雪の斜面', '#8fd3ff',
   '6 階建ての氷の塔。各階にブルーメイジ。粉雪の落とし穴と、糸に触れると薬や矢が飛んでくる罠の部屋がある。',
   ['最上階：マジックソウル 20%・魔法の布 50%']],
  ['聖なる遺跡', '平原・ヒマワリ平原', '#f0d060',
   '崩れた石の広場から、らせん階段で地下 4 層へ。暗く、死者やクモ、イエローメイジがさまよう。仕掛け線の罠に注意。',
   ['チェストの魔導書は、出にくいかわりにレア・エピックが中心', '3〜4 層目に宝物庫（魔導書 1〜2 冊・マジックソウル 30%）', '最深部の大広間で聖騎士シンシアが目覚める']],
  ['魔獣の遺跡', 'ダークフォレスト', '#9b5bd6',
   '崩れた見張り塔の下に広がる、魔獣を閉じ込めておく地下 6 層の牢獄。牢屋・実験施設・拷問部屋・看守室が並び、パープルメイジが見張る。明かりはほとんどない。',
   ['チェストの魔導書はレア・エピックが中心で、聖なる遺跡より出やすい', '3〜6 層目に宝物庫（魔導書 1〜2 冊・マジックソウル 40%）', '最深部の半径 20 の大広間で魔獣グリムノウルが目覚める']],
];
const placeGrid = document.getElementById('place-grid');
for (const [name, biome, color, text, notes] of PLACES) {
  const p = el('article', 'place');
  p.style.setProperty('--accent', color);
  p.append(el('h3', null, name), el('p', 'biome', biome), el('p', null, text));
  const ul = el('ul');
  notes.forEach(n => ul.append(el('li', null, n)));
  p.append(ul);
  placeGrid.append(p);
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
