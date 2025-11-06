
const allCharacterBlueprints = [{
                            name: 'アカリ',
                            role: 'ファイター',
                            hp: 100,
                            mp: 20,
                            atk: 44,
                            def: 10,
                            agi: 12,
                            height: 165,
                            description: '元気で前向きなパーティのムードメーカー。考えるより先に体が動くタイプで、巨大な剣を軽々と振り回す。',
                            skills: [{ // グロウスラッシュ
                                name: 'グロウスラッシュ',
                                cost: 8,
                                power: 1.2,
                                type: 'growth_physical',
                                targetType: 'enemy',
                                description: '敵一体に物理ダメージを与える。使うたびに威力が永続的に上昇する。'
                            }, {
                                name: 'なぎ払い',
                                cost: 12,
                                power: 1.0,
                                type: 'physical',
                                targetType: 'enemies',
                                description: '敵全体に物理ダメージを与える。'
                            }],
                            unlockableSkill: {
                                name: '渾身斬り',
                                cost: 6,
                                power: 1.5,
                                type: 'physical',
                                targetType: 'enemy',
                                description: '敵一体に物理ダメージを与える。30%の確率で会心の一撃になる。'
                            },
                            unlockableSkillLv4: {
                                name: '乱舞',
                                cost: 20,
                                type: 'multi_hit_physical',
                                targetType: 'random_enemies',
                                description: '敵にランダムで4～6回の物理ダメージを与える。'
                            },
                            bgClass: 'bg-char-akari',
                            themeColor: 'red',
                            growthBonus: {
                                stat: 'atk',
                                value: 2
                            } // 攻撃力が追加で2上昇
                        }, {
                            name: 'ヒカリ',
                            role: 'ソーサラー',
                            hp: 80,
                            mp: 50,
                            atk: 16,
                            def: 8,
                            agi: 15,
                            height: 145,
                            description: '無口で冷静な魔術の探求者。古代の知識に精通しており、強力な攻撃魔法を操る。アカリの突進を諌めることもしばしば。',
                            skills: [{
                                name: 'ファイア',
                                cost: 8,
                                power: 3.5,
                                type: 'magic',
                                targetType: 'enemy',
                                description: '敵一体に炎の魔法ダメージを与える。'
                            }, {
                                name: 'エンチャント',
                                cost: 8,
                                type: 'buff',
                                targetType: 'ally',
                                effect: 'atk_up',
                                description: '味方一体の攻撃力を一時的に上昇させる。'
                            }],
                            unlockableSkill: {
                                name: 'ストーム',
                                cost: 16,
                                power: 1.8,
                                type: 'magic',
                                targetType: 'enemies',
                                description: '敵全体に嵐の魔法ダメージを与える。'
                            },
                            unlockableSkillLv4: {
                                name: 'マジックバースト',
                                cost: 0, // MPを全て消費
                                type: 'mp_burst_magic',
                                targetType: 'enemy',
                                description: '残りMPを全て消費し、敵一体に超特大の魔法ダメージを与える。'
                            },
                            bgClass: 'bg-char-hikari',
                            themeColor: 'purple',
                            growthBonus: {
                                stat: 'maxMp',
                                value: 3
                            } // 最大MPが追加で3上昇
                        }, {
                            name: 'シズカ',
                            role: 'ナイト',
                            hp: 120,
                            mp: 10,
                            atk: 30,
                            def: 20,
                            agi: 8,
                            height: 175,
                            description: 'パーティの頼れる姉御役。巨大な盾であらゆる攻撃から仲間を守る。その守りは鉄壁と名高い。',
                            skills: [{
                                name: '挑発',
                                cost: 3,
                                type: 'utility',
                                targetType: 'self',
                                description: '敵の注意を自分に引きつけ、狙われやすくなる。'
                            }, { // チャージ
                                name: 'チャージ',
                                cost: 0,
                                type: 'charge',
                                targetType: 'self',
                                description: '次の物理攻撃の威力を溜める。重ねがけで効果が上昇する。'
                            }],
                            unlockableSkill: {
                                name: 'かばう',
                                cost: 8,
                                type: 'buff',
                                targetType: 'self',
                                description: '次のターンまで、味方への単体攻撃を代わりに受ける。'
                            },
                            unlockableSkillLv4: {
                                name: '堅守の構え',
                                cost: 5,
                                type: 'self_buff_special',
                                targetType: 'self',
                                effects: ['provoke', 'regeneration'],
                                description: '敵の注意を引きつけつつ、3ターンの間HPが自動回復する。'
                            },
                            bgClass: 'bg-char-shizuka',
                            themeColor: 'amber',
                            growthBonus: {
                                stat: 'def',
                                value: 2
                            } // 防御力が追加で2上昇
                        }, {
                            name: 'ユイ',
                            role: 'メディック',
                            hp: 90,
                            mp: 40,
                            atk: 20,
                            def: 9,
                            agi: 10,
                            height: 120,
                            description: '心優しく、誰かのために尽くすことを厭わない少女。パーティの回復役として、その身を挺して仲間を癒す。',
                            skills: [{
                                name: 'ヒール',
                                cost: 10,
                                power: 50,
                                type: 'heal',
                                targetType: 'ally',
                                description: '味方一体のHPを回復する。'
                            }, {
                                name: 'プロテクト',
                                cost: 8,
                                type: 'buff',
                                targetType: 'ally',
                                effect: 'protect',
                                description: '味方一体の防御力を一時的に上昇させる。'
                            }],
                            unlockableSkill: {
                                name: '献身',
                                cost: 0, // MPコストなし
                                type: 'special_heal',
                                targetType: 'party',
                                description: '自身の身長を20cm消費して、味方全体のHPを30%回復する。'
                            },
                            unlockableSkillLv4: {
                                name: 'サンクチュアリ',
                                cost: 40,
                                type: 'party_restore_growth',
                                targetType: 'party',
                                growth: 5,
                                description: '味方全体のHPを全回復し、状態異常を治し、身長を5cm伸ばす聖域を作り出す。'
                            },
                            bgClass: 'bg-char-yui',
                            themeColor: 'green',
                            growthBonus: {
                                stat: 'maxHp',
                                value: 5
                            } // 最大HPが追加で5上昇
                        }, {
                            name: 'ベアトリス',
                            role: 'アルケミスト',
                            hp: 85,
                            mp: 60,
                            atk: 18,
                            def: 9,
                            agi: 13,
                            height: 170,
                            description: '知的好奇心が旺盛な錬金術師。ダンジョンの謎や敵の生態に強い興味を示す。様々な薬品を合成して戦う。',
                            skills: [{
                                name: 'アシッドボルト',
                                cost: 4,
                                power: 2.8,
                                type: 'magic',
                                targetType: 'enemy',
                                description: '敵一体に酸の魔法ダメージを与える。'
                            }, {
                                name: 'マジッククラフト',
                                cost: 10,
                                type: 'alchemist_craft',
                                targetType: 'self',
                                description: '戦闘中にダメージアイテムを作成する。ガラスブレードかクレイジーボムを1～2個獲得する。'
                            }],
                            unlockableSkill: {
                                name: 'ポイズンミスト',
                                cost: 15,
                                type: 'status_magic',
                                targetType: 'enemies',
                                effect: 'poison',
                                description: '敵全体を毒状態にする。'
                            },
                            unlockableSkillLv4: {
                                name: 'アルケミックフレア',
                                cost: 18,
                                power: 6.0,
                                type: 'magic',
                                targetType: 'enemy',
                                description: '敵一体に錬金術の爆発で大ダメージを与える。'
                            },
                            bgClass: 'bg-char-beatrice',
                            themeColor: 'indigo',
                            growthBonus: {
                                stat: 'maxMp',
                                value: 3
                            } // 最大MPが追加で3上昇
                        }, {
                            name: 'リリカ',
                            role: 'ダンサー',
                            hp: 95,
                            mp: 35,
                            atk: 25,
                            def: 8,
                            agi: 18,
                            height: 131,
                            description: '歌と踊りで仲間を鼓舞するアイドル。どんな状況でもステージに変え、ファンサービスを忘れない。素早い動きで敵を翻弄する。',
                            skills: [{
                                name: 'スポットライト',
                                cost: 10,
                                type: 'evade_provoke',
                                targetType: 'self',
                                description: '敵の注目を集めつつ、自身の回避率を大幅に上げる。'
                            }, {
                                name: 'ラブステップ',
                                cost: 12,
                                type: 'dancer_buff_pair',
                                targetType: 'ally',
                                effects: ['agi_up', 'evade_up'],
                                description: '味方一人と自分の素早さと回避率を上げる。このスキルによる回避アップ中は、挑発時の回避率にボーナスが付く。'
                            }],
                            unlockableSkill: {
                                name: 'キューティチアー',
                                cost: 20,
                                type: 'dancer_party_buff_height',
                                targetType: 'party',
                                effect: 'atk_up',
                                description: '味方全体の攻撃力を一時的に上昇させる。自身の身長が低いほど効果が上がり、10cm以下で最大3倍になる。'
                            },
                            unlockableSkillLv4: {
                                name: 'センターオブステージ',
                                cost: 30,
                                type: 'dancer_tension_up',
                                targetType: 'party',
                                description: '味方全体をテンションアップ状態にする。戦闘終了まで基本攻撃力が+10されるが、ターン開始時にHPが少し減少する。'
                            },
                            bgClass: 'bg-char-ririka',
                            themeColor: 'pink',
                            growthBonus: {
                                stat: 'maxHp',
                                value: 5
                            } // 最大HPが追加で5上昇
                        }, {
                            name: 'サクヤ',
                            role: 'サムライ',
                            hp: 110,
                            mp: 0,
                            atk: 50,
                            def: 12,
                            agi: 14,
                            height: 168,
                            description: '己の剣の道を極めんとする求道者。口数は少ないが、その一太刀は岩をも断つ。HPを代償に強力な技を放つ。',
                            skills: [{
                                name: '居合',
                                cost: 15, // HP cost
                                power: 2.5,
                                type: 'hp_cost_physical',
                                targetType: 'enemy',
                                description: '自身のHPを15消費し、敵一体に強力な物理ダメージを与える。'
                            }, {
                                name: '後の先',
                                cost: 5, // HP cost
                                type: 'samurai_counter_stance',
                                targetType: 'self',
                                description: '1ターン挑発状態になる。攻撃を受けた際、自身の攻撃力を倍にして反撃する。'
                            }],
                            unlockableSkill: {
                                name: '明鏡止水',
                                cost: 0,
                                type: 'self_buff_samurai',
                                targetType: 'self',
                                description: '精神を集中させ、自身の攻撃力を一時的に上昇させる。'
                            },
                            unlockableSkillLv4: {
                                name: '無明の一閃',
                                cost: 40, // HP cost
                                power: 5.0,
                                type: 'hp_cost_physical',
                                targetType: 'enemy',
                                description: '自身のHPを大きく消費し、敵一体に絶大な物理ダメージを与える。'
                            },
                            bgClass: 'bg-char-sakuya',
                            themeColor: 'cyan',
                            growthBonus: {
                                stat: 'atk',
                                value: 2
                            } // 攻撃力が追加で2上昇
                        }, {
                            name: 'シャオメイ',
                            role: 'モンク',
                            hp: 105,
                            mp: 25,
                            atk: 48,
                            def: 14,
                            agi: 11,
                            height: 152,
                            description: '明朗快活な拳法家。強敵と戦うことと食べることが大好き。その小さな体からは想像もつかないほどのパワーを秘めている。',
                            skills: [{
                                name: '正拳突き',
                                cost: 8,
                                power: 1.6,
                                type: 'physical',
                                targetType: 'enemy',
                                description: '敵一体に物理ダメージを与える。'
                            }, {
                                name: '癒しの掌',
                                cost: 15,
                                power: 40,
                                type: 'heal',
                                targetType: 'ally',
                                description: '気功で味方一体のHPを回復する。'
                            }],
                            unlockableSkill: {
                                name: '気功波',
                                cost: 18,
                                power: 1.2,
                                type: 'physical',
                                targetType: 'enemies',
                                description: '敵全体に気の力で物理ダメージを与える。'
                            },
                            unlockableSkillLv4: {
                                name: '破砕拳',
                                cost: 22,
                                power: 2.0,
                                type: 'def_ignore_physical',
                                targetType: 'enemy',
                                description: '敵の防御力を無視して物理ダメージを与える。'
                            },
                            bgClass: 'bg-char-shaomei',
                            themeColor: 'orange',
                            growthBonus: {
                                stat: 'atk',
                                value: 2
                            } // 攻撃力が追加で2上昇
                        }, {
                            name: 'エリザ',
                            role: 'ドクター',
                            hp: 95,
                            mp: 55,
                            atk: 22,
                            def: 12,
                            agi: 16,
                            height: 128,
                            description: '自信家で研究熱心な女医。あらゆるものを研究対象と見なし、自作の薬品で戦況をコントロールする。豊満な体格を誇りに思っている。',
                            skills: [{
                                name: '成長促進剤',
                                cost: 15,
                                power: 30, // 30cm
                                type: 'growth_ally',
                                targetType: 'ally',
                                description: '味方一体の身長を30cm伸ばす薬を投与する。'
                            }, {
                                name: '衰弱ガス',
                                cost: 18,
                                type: 'doctor_debuff',
                                targetType: 'enemy',
                                description: '敵一体を毒にし、攻撃力と防御力を低下させる。'
                            }],
                            unlockableSkill: {
                                name: '縮小薬',
                                cost: 15,
                                power: 30, // 30cm
                                type: 'shrink_ally',
                                targetType: 'ally',
                                description: '味方一体の身長を30cm縮める薬を投与する。'
                            },
                            unlockableSkillLv4: {
                                name: 'パンデミック',
                                cost: 35,
                                type: 'status_ailment_multi',
                                effects: ['poison', 'paralysis', 'slow'],
                                targetType: 'enemies',
                                description: '敵全体に毒、麻痺、鈍化のいずれかの状態異常を引き起こすウイルスを散布する。'
                            },
                            bgClass: 'bg-char-eriza',
                            themeColor: 'teal',
                            growthBonus: {
                                stat: 'maxMp',
                                value: 3
                            } // 最大MPが追加で3上昇
                        }, {
                            name: 'ルナ',
                            role: 'ギャンブラー',
                            hp: 85,
                            mp: 45,
                            atk: 25,
                            def: 8,
                            agi: 17,
                            height: 145,
                            description: 'スリルと勝負をこよなく愛する生粋のギャンブラー。戦いすらも賭けの対象と捉え、運に身を任せたトリッキーなスキルで戦う。',
                            skills: [{
                                name: 'ダーツショット',
                                cost: 10,
                                type: 'gambling_damage',
                                targetType: 'enemy',
                                description: '敵一体にダーツを投げる。命中率やダメージは運次第で大きく変動する。'
                            }, {
                                name: 'ラッキースター',
                                cost: 15,
                                type: 'gambling_support',
                                targetType: 'ally',
                                description: '味方一体に幸運の星を祈る。HP回復、MP回復、攻撃力UP、防御力UP、状態異常回復の中からランダムで3つの良い効果が発生する。'

                            }],
                            unlockableSkill: {
                                name: 'オールイン',
                                cost: 20,
                                type: 'gambling_all_in',
                                targetType: 'enemies',
                                description: '全てを賭ける大勝負。敵全体に大ダメージを与えるか、味方全体を回復するか、何も起こらないか、あるいは自分がダメージを受けるか。'
                            },
                            unlockableSkillLv4: {
                                name: 'ジャックポット',
                                cost: 40,
                                type: 'gambling_jackpot',
                                targetType: 'party',
                                description: '奇跡を信じて全てを賭ける。低確率で味方全体が全回復＆強化されるが、ほとんどの場合は何も起こらない。'
                            },
                            bgClass: 'bg-char-runa',
                            themeColor: 'fuchsia',
                            growthBonus: {
                                type: 'random'
                            } // ランダムなステータスが上昇
                        }, {
                            name: 'クロエ',
                            role: 'リーパー',
                            hp: 80,
                            mp: 60,
                            atk: 15,
                            def: 7,
                            agi: 16,
                            height: 110,
                            description: 'ぶかぶかのローブで顔を隠した寡黙な少女。魂を狩る大鎌を携え、敵の命を摘み取る。自身の身長が低いほど力を発揮する。',
                            skills: [{
                                name: '魂狩り',
                                cost: 25,
                                power: 0.5, // 失敗時のダメージ倍率
                                type: 'reaper_instant_death',
                                targetType: 'enemy',
                                description: '敵一体の魂を狩る。低確率で即死させる。ボスには大ダメージを与える。失敗しても少しダメージを与える。'
                            }, {
                                name: '影の一撃',
                                cost: 12,
                                power: 1.5,
                                type: 'reaper_height_scaling',
                                targetType: 'enemy',
                                description: '影に潜んで敵一体を攻撃する。自身の身長が初期値より低いほど威力が増す。'
                            }],
                            unlockableSkill: {
                                name: '魂の交換',
                                cost: 20,
                                type: 'reaper_soul_exchange',
                                targetType: 'ally',
                                description: '自身の現在HPの半分を捧げ、味方一体のHPとMPを大きく回復する。'
                            },
                            unlockableSkillLv4: {
                                name: '冥府の鎌',
                                cost: 40,
                                power: 1.2,
                                type: 'reaper_height_scaling_multi',
                                targetType: 'enemies',
                                description: '敵全体に冥府の鎌を振るう。自身の身長が初期値より低いほど威力が増す。'
                            },
                            bgClass: 'bg-char-chloe',
                            themeColor: 'slate',
                            growthBonus: {
                                stat: 'atk',
                                value: 2
                            } // 攻撃力が追加で2上昇
                        }, {
                            name: 'ミコ',
                            role: 'サモナー',
                            hp: 85,
                            mp: 65,
                            atk: 15,
                            def: 9,
                            agi: 14,
                            height: 121,
                            description: 'モンスターと心を通わせる人懐っこい少女。いつも一緒の相棒「モコ」と共に、様々な精霊やゴーレムを召喚して戦う。',
                            skills: [{
                                name: 'プチサラマンダー',
                                cost: 12,
                                power: 3.8,
                                type: 'magic',
                                targetType: 'enemy',
                                description: '炎の精霊を召喚し、敵一体に魔法ダメージを与える。'
                            }, {
                                name: 'ゴーレム召喚',
                                cost: 20,
                                power: 0.7, // 自身の最大HPに対するゴーレムのHP割合
                                type: 'summon_golem',
                                targetType: 'self',
                                description: '自身の最大HPの50%のHPを持つゴーレムを召喚し、パーティの盾とする。'
                            }],
                            unlockableSkill: {
                                name: 'プチウンディーネ',
                                cost: 22,
                                power: 2.0,
                                type: 'magic',
                                targetType: 'enemies',
                                description: '水の精霊を召喚し、敵全体に魔法ダメージを与える。'
                            },
                            unlockableSkillLv4: {
                                name: 'ガーディアンゴーレム',
                                cost: 40,
                                power: 1.2, // 自身の最大HPに対するゴーレムのHP割合
                                type: 'summon_golem',
                                targetType: 'self',
                                description: '自身の最大HPと同じHPを持つ、より強力なゴーレムを召喚する。'
                            },
                            bgClass: 'bg-char-miko',
                            themeColor: 'lime',
                            growthBonus: {
                                stat: 'maxMp',
                                value: 3
                            } // 最大MPが追加で3上昇
                        }, {
                            name: 'レンカ',
                            role: 'ネクロマンサー',
                            hp: 90,
                            mp: 70,
                            atk: 18,
                            def: 8,
                            agi: 15,
                            height: 157,
                            description: '死者の魂と対話する、ちょっと怪しい雰囲気のお姉さん。冒険で倒した魂を力に変える。通常攻撃でMPが回復する。',
                            skills: [{
                                name: 'ソウルアブソーブ',
                                cost: 15,
                                power: 3.0,
                                type: 'necro_magic',
                                targetType: 'enemy',
                                description: '敵一体に魂を吸収する魔法ダメージを与える。倒したモンスター数で威力が上がる。'
                            }, {
                                name: 'ドレインソウル',
                                cost: 3,
                                power: 1.5,
                                type: 'mp_drain',
                                targetType: 'enemy',
                                description: '敵一体に魔法ダメージを与え、与えたダメージに応じてMPを吸収する。'
                            }],
                            unlockableSkill: {
                                name: 'コープスエクスプロージョン',
                                cost: 25,
                                power: 1.5,
                                type: 'necro_magic',
                                targetType: 'enemies',
                                description: '敵全体に魂を爆発させる魔法ダメージを与える。これまでに倒したモンスターの数に応じて威力が上がる。'
                            },
                            unlockableSkillLv4: {
                                name: 'リザレクション',
                                cost: 60,
                                type: 'revive_full',
                                targetType: 'ally',
                                description: '戦闘不能の味方一人をHP100%の状態で復活させる禁断の蘇生術。'
                            },
                            bgClass: 'bg-char-renka',
                            themeColor: 'gray',
                            growthBonus: {
                                stat: 'maxMp',
                                value: 3
                            } // 最大MPが追加で3上昇
                        }, {
                            name: 'イオリ',
                            role: 'ガーディアン',
                            hp: 125,
                            mp: 20,
                            atk: 35,
                            def: 18,
                            agi: 9,
                            height: 118,
                            description: '小柄で可憐な見た目だが、実はパーティの先輩。縮小病で成長が止まっている。仲間を護ることに全てを懸ける。通常攻撃は確率でクリティカルになる。',
                            skills: [{
                                name: 'ウォール',
                                cost: 10,
                                power: 0.6, // 自身の最大HPに対する耐久値の割合
                                type: 'guardian_wall',
                                targetType: 'ally',
                                description: '味方一人に、自身の最大HPの60%の耐久値を持つ防壁を生成する。'
                            }, {
                                name: 'タイタンスタンプ',
                                cost: 12,
                                type: 'guardian_stomp',
                                targetType: 'enemy',
                                description: '防壁がある場合はそれを消費して大ダメージ、ない場合は自身の身長に応じたダメージを与える。'
                            }],
                            unlockableSkill: {
                                name: 'ガーディアンズハイ',
                                cost: 15,
                                type: 'self_buff_guardian',
                                targetType: 'self',
                                description: '3ターンの間、自身の防御力を上げ、次に使用する「ウォール」の耐久値を1.5倍にする。'
                            },
                            unlockableSkillLv4: {
                                name: 'キャッスルウォール',
                                cost: 25,
                                power: 0.4, // 自身の最大HPに対する耐久値の割合
                                type: 'guardian_wall_party',
                                targetType: 'party',
                                description: '味方全体に、自身の最大HPの40%の耐久値を持つ防壁を生成する。'
                            },
                            bgClass: 'bg-char-iori',
                            themeColor: 'stone',
                            growthBonus: {
                                stat: 'def',
                                value: 2
                            } // 防御力が追加で2上昇
                        }, {
                            name: 'コハル',
                            role: 'トラブルメーカー',
                            hp: 95,
                            mp: 40,
                            atk: 28,
                            def: 10,
                            agi: 14,
                            height: 128,
                            description: 'いつも元気で、ちょっとおっちょこちょいな少女。彼女の行動は、時に奇跡を、時に大惨事を引き起こす。通常攻撃は確率でクリティカルになる。',
                            skills: [{
                                name: 'ハプニングボックス',
                                cost: 20,
                                type: 'trouble_maker_box',
                                targetType: 'all', // 敵味方全体
                                description: '何が起こるかわからない箱を開ける。敵全体に大ダメージか、味方全体が強化されるか、あるいは味方全体が縮んでしまうか…。'
                            }, {
                                name: 'びっくりクラッカー',
                                cost: 5,
                                power: 1.5,
                                type: 'trouble_maker_debuff',
                                targetType: 'enemy',
                                description: '敵一体に物理ダメージを与え、たまに攻撃力か防御力を下げる。'
                            }],
                            unlockableSkill: {
                                name: 'ばっちりチェック',
                                cost: 4,
                                type: 'self_buff_trouble',
                                targetType: 'self',
                                description: '次の「ハプニングボックス」か「ミラクルギフト」の成功率を大幅に上げる。'
                            },
                            unlockableSkillLv4: {
                                name: 'ミラクルギフト',
                                cost: 40,
                                type: 'trouble_maker_miracle',
                                targetType: 'party',
                                description: '味方全体に奇跡の贈り物を届ける。HPとMPが全回復し、3ターン攻撃力と防御力が上昇する。ごく稀に失敗する。'
                            },
                            bgClass: 'bg-char-koharu',
                            themeColor: 'rose',
                            growthBonus: {
                                type: 'random'
                            } // ランダムなステータスが上昇
                        }, {
                            name: 'オリビア',
                            role: 'シスター',
                            hp: 100,
                            mp: 50,
                            atk: 20,
                            def: 13,
                            agi: 12,
                            height: 149,
                            description: '聖堂に仕える、篤い信仰心を持つ女性。慈愛に満ちた祈りで、仲間の傷を癒し続ける。',
                            skills: [{
                                name: 'リジェネ',
                                cost: 12,
                                type: 'regeneration_ally',
                                targetType: 'ally',
                                description: '味方一人に、3ターンの間HPが自動で回復する祝福を与える。'
                            }, { // ファイター, ソーサラー, ナイト, メディック
                                name: 'ファーストエイド',
                                cost: 8,
                                power: 60,
                                type: 'heal',
                                targetType: 'ally',
                                description: '味方一人のHPを少し回復する。' // ファイター, ソーサラー, ナイト, メディック
                            }],
                            unlockableSkill: {
                                name: 'ホーリーライト',
                                cost: 20,
                                power: 120,
                                type: 'heal',
                                targetType: 'ally',
                                description: '味方一人のHPを大きく回復する。' // ファイター, ソーサラー, ナイト, メディック
                            },
                            unlockableSkillLv4: {
                                name: '祈りの円環',
                                cost: 30,
                                type: 'regeneration_party',
                                targetType: 'party',
                                description: '味方全体にHP継続回復と、1ターン後にMPが大きく回復する祝福を与える。'
                            },
                            bgClass: 'bg-char-olivia',
                            themeColor: 'sky',
                            growthBonus: {
                                stat: 'maxHp',
                                value: 5
                            } // 最大HPが追加で5上昇
                        }, {
                            name: 'セレスティア',
                            role: '聖女',
                            hp: 110,
                            mp: 60,
                            atk: 45,
                            def: 15,
                            agi: 16,
                            height: 140,
                            description: '神の祝福を受けし聖なる乙女。その身に宿す聖なる力で、たった一人で穢れたダンジョンを浄化する使命を帯びている。',
                            skills: [{
                                name: 'ホーリーエッジ',
                                cost: 10,
                                power: 1.9,
                                type: 'physical',
                                targetType: 'enemy',
                                description: '聖なる力を刃に乗せ、敵一体に物理ダメージを与える。'
                            }, {
                                name: 'セイクリッドウォール',
                                cost: 10,
                                type: 'saint_wall',
                                targetType: 'self',
                                effect: 'protect',
                                description: '聖なる障壁で身を守り、自身の防御力を一時的に上昇させる。'
                            }],
                            unlockableSkill: {
                                name: 'ジャッジメント',
                                cost: 25,
                                power: 1.5,
                                type: 'magic',
                                targetType: 'enemies',
                                description: '天からの光で、敵全体に聖なる魔法ダメージを与える。'
                            },
                            unlockableSkillLv4: {
                                name: 'ディバインライト',
                                cost: 30,
                                power: 0.3, // 30%
                                type: 'divine_light',
                                targetType: 'enemy',
                                description: '敵ひとりに、その敵の最大HPの30%にあたる固定ダメージを与える。'
                            },
                            bgClass: 'bg-char-celestia',
                            themeColor: 'yellow',
                            growthBonus: {
                                stat: 'atk',
                                value: 2
                            } // 攻撃力が追加で2上昇
                        }, {
                            name: 'リリィ',
                            role: 'トレジャーハンター',
                            hp: 100,
                            mp: 80,
                            atk: 25,
                            def: 12,
                            agi: 18,
                            height: 120,
                            description: '様々なダンジョンの宝物を漁ってきた、小柄で可愛らしい見た目とは裏腹に経験が豊富。周囲への気配りができて、優しく元気な少女。過去にダンジョンで魔力を取り込み、一時的に魔物の姿に変身できる能力を持つ。',
                            skills: [{
                                name: 'ジュエルショット',
                                cost: 10,
                                type: 'treasure_hunter_attack',
                                targetType: 'enemy',
                                description: '敵単体にダメージを与え、自身の攻撃力が上がるかMPが大きく回復する。'
                            }, {
                                name: 'サキュバスモード',
                                cost: 0,
                                type: 'transform_succubus',
                                targetType: 'self',
                                description: 'MPが尽きるまでサキュバスに変身する。変身時、身長が30cm伸びる。'
                            }, {
                                name: 'フェアリーモード',
                                cost: 0,
                                type: 'transform_fairy',
                                targetType: 'self',
                                description: 'MPが尽きるまでフェアリーに変身する。変身時、身長が30cm縮む。'
                            }, {
                                name: 'アルラウネモード',
                                cost: 0,
                                type: 'transform_alraune',
                                targetType: 'self',
                                description: 'MPが尽きるまでアルラウネに変身する。変身時、HPが全回復する。'
                            }],
                            bgClass: 'bg-char-lily',
                            themeColor: 'lime',
                            // 変身後の情報
                            transforms: {
                                succubus: {
                                    role: 'サキュバス',
                                    bgClass: 'bg-char-lily-succubus',
                                    skills: [{
                                        name: '変身解除',
                                        cost: 0,
                                        type: 'transform_revert',
                                        targetType: 'self',
                                        description: 'トレジャーハンターの姿に戻る。'
                                    }, {
                                        name: 'チャーム',
                                        cost: 0,
                                        type: 'status_ailment_multi',
                                        effects: ['paralysis'],
                                        targetType: 'enemies',
                                        description: '敵全体を高確率で麻痺させる。'
                                    }, {
                                        name: 'ハートドレイン',
                                        cost: 0,
                                        power: 2.5,
                                        type: 'drain_physical',
                                        targetType: 'enemy',
                                        description: '敵単体に大ダメージを与え、HPを吸収する。'
                                    }, {
                                        name: 'ボディドロップ',
                                        cost: 0,
                                        power: 4.0,
                                        type: 'height_power_physical',
                                        targetType: 'enemy',
                                        description: '敵単体に超特大ダメージ。身長が高いほど威力が上がる。'
                                    }, ]
                                },
                                fairy: {
                                    role: 'フェアリー',
                                    bgClass: 'bg-char-lily-fairy',
                                    skills: [{
                                        name: '変身解除',
                                        cost: 0,
                                        type: 'transform_revert',
                                        targetType: 'self',
                                        description: 'トレジャーハンターの姿に戻る。'
                                    }, {
                                        name: 'クイックブロー',
                                        cost: 0,
                                        power: 1.8,
                                        type: 'physical',
                                        targetType: 'enemy',
                                        description: '敵単体に物理攻撃し、防御力を低下させる。身長が低いほど威力ボーナス。'
                                    }, {
                                        name: 'マジックアロー',
                                        cost: 0,
                                        power: 3.0,
                                        type: 'magic',
                                        targetType: 'enemy',
                                        description: '敵単体に魔法攻撃し、攻撃力を低下させる。身長が低いほど威力ボーナス。'
                                    }, {
                                        name: 'ワンダーカーニバル',
                                        cost: 0,
                                        power: 2.0,
                                        type: 'special_magic',
                                        targetType: 'enemies',
                                        description: '敵全体に高威力攻撃。身長が低いほど威力ボーナス。敵の低い方の防御でダメージ計算。'
                                    }, ]
                                },
                                alraune: {
                                    role: 'アルラウネ',
                                    bgClass: 'bg-char-lily-alraune',
                                    skills: [{
                                        name: '変身解除',
                                        cost: 0,
                                        type: 'transform_revert',
                                        targetType: 'self',
                                        description: 'トレジャーハンターの姿に戻る。'
                                    }, {
                                        name: 'シードショット',
                                        cost: 0,
                                        power: 3.5,
                                        type: 'magic',
                                        targetType: 'enemy',
                                        description: '敵単体に高威力魔法攻撃し、自身の攻撃力を上げる。'
                                    }, {
                                        name: 'グロウヒール',
                                        cost: 0,
                                        type: 'special_heal_alraune',
                                        targetType: 'ally',
                                        description: '味方単体のHPを全回復し、防御力を上げる。自身に使うとポーションも獲得。'
                                    }, {
                                        name: 'ソーンウィップ',
                                        cost: 0,
                                        power: 2.2,
                                        type: 'special_magic',
                                        targetType: 'enemies',
                                        description: '敵全体に超高威力魔法攻撃。使用回数で威力が爆発的に増加する。'
                                    }, ]
                                }
                            }
                        }, {
                            name: 'ノエル',
                            role: 'アンドロイド',
                            hp: 130,
                            mp: 20,
                            atk: 52,
                            def: 18,
                            agi: 10,
                            height: 170,
                            description: 'おしとやかなお嬢様のように見えるが、その正体は怪力のアンドロイド。斧を使った物理攻撃に特化している。',
                            skills: [{
                                name: 'スマッシュ',
                                cost: 20, // HP cost
                                power: 2.8,
                                type: 'hp_cost_physical',
                                targetType: 'enemy',
                                description: 'HPを20消費し、敵単体に斧による強力な一撃を見舞う。'
                            }, {
                                name: 'メンテナンス',
                                cost: 0,
                                type: 'self_heal_and_paralyze',
                                targetType: 'self',
                                description: '自身のHPを全回復するが、1ターン麻痺状態になる。'
                            }],
                            unlockableSkill: {
                                name: 'バンプアップ',
                                cost: 50, // HP cost
                                power: 100, // growth amount
                                type: 'hp_cost_growth',
                                targetType: 'self',
                                description: 'HPを大きく消費し、自身の身長を爆発的に伸ばす。'
                            },
                            unlockableSkillLv4: {
                                name: 'オーバーブースト',
                                cost: 10, // MP cost
                                power: 2.0,
                                type: 'mp_burst_height_scaling',
                                targetType: 'enemies',
                                description: '敵全体に大ダメージを与える。身長が高いほど威力に特大ボーナス。MPを全て消費する。'
                            },
                            bgClass: 'bg-char-noel',
                            themeColor: 'rose',
                            growthBonus: {
                                stat: 'atk',
                                value: 2
                            } // 攻撃力が追加で2上昇
                        }, {
                            name: 'フローラ',
                            role: 'メイド',
                            hp: 110,
                            mp: 50,
                            atk: 60, // 基本攻撃力が高い
                            def: 12,
                            agi: 15,
                            height: 80,
                            description: 'お花好きの小人族のメイド。非力そうな外見に反して拳から繰り出される力は圧倒的。',
                            skills: [{
                                name: 'フラワーアレンジ',
                                cost: 15,
                                type: 'party_buff_and_heal',
                                targetType: 'party',
                                description: '味方全体の攻撃力を上げ、HPを少量回復する。'
                            }, {
                                name: 'ロイヤルティ',
                                cost: 20,
                                type: 'height_transfer',
                                targetType: 'ally',
                                description: '味方ひとりに、それ以外の味方全員の身長を移動させる。'
                            }],
                            unlockableSkill: {
                                name: 'ティータイム',
                                cost: 10,
                                type: 'party_cure_all',
                                targetType: 'party',
                                description: '味方全体の毒、麻痺、鈍化、脱衣を解除する。'
                            },
                            unlockableSkillLv4: {
                                name: 'マジカルエナジー',
                                cost: 30,
                                type: 'maid_special_buff',
                                targetType: 'self',
                                description: '自身に複数の強化効果を付与し、身長が初期値より低い場合は元に戻す。'
                            },
                            bgClass: 'bg-char-flora',
                            themeColor: 'emerald',
                            growthBonus: {
                                stat: 'def',
                                value: 2
                            } // 防御力が追加で2上昇
                        }, {
                            name: 'シロ',
                            role: '転生者',
                            hp: 90,
                            mp: 80,
                            atk: 28,
                            def: 12,
                            agi: 15,
                            height: 100,
                            description: '誰もが見惚れる白い髪と天使の羽を持った大人しい少女。',
                            skills: [{
                                name: 'ヴァニッシュ',
                                cost: 10, // HP cost
                                type: 'hp_cost_instant_death',
                                targetType: 'enemy',
                                description: '最大HPを10消費し、対象を一撃で葬る。最大HPが20以上ないと使えない。'
                            }],
                            unlockableSkill: null,
                            unlockableSkillLv4: null,
                            bgClass: 'bg-char-shiro',
                            themeColor: 'slate',
                            growthBonus: {
                                stat: 'maxMp',
                                value: 5
                            } // 防御力が追加で2上昇
                        },

                    ];

                    const itemBlueprints = {
                        'potion': {
                            name: 'ポーション',
                            description: '味方ひとりのHPを最大値の50%回復する。',
                            target: 'ally',
                            effect: 'heal_percent',
                            power: 0.5,
                            battleOnly: false
                        },
                        'cure_mist': {
                            name: 'キュアミスト',
                            description: '味方全員のHPを最大値の30%回復する。',
                            target: 'party',
                            effect: 'heal_percent',
                            power: 0.3,
                            battleOnly: false
                        },
                        'milk': {
                            name: 'ミルク',
                            description: '味方ひとりの身長を初期値に戻す。',
                            target: 'ally',
                            effect: 'reset_height',
                            battleOnly: false
                        },
                        'little_soup': {
                            name: 'リトルスープ',
                            description: '味方ひとりの身長を30cm縮める。戦闘中に敵に使うと、その攻撃力と防御力をしばらく低下させる。',
                            target: 'any',
                            effect: 'shrink',
                            power: 30,
                            battleOnly: false
                        },
                        'pixie_gift': {
                            name: 'ピクシーギフト',
                            description: '味方ひとりの身長を10cmにする。',
                            target: 'ally',
                            effect: 'set_height',
                            power: 10,
                            battleOnly: false
                        },
                        'glass_blade': {
                            name: 'ガラスブレード',
                            description: '敵ひとりに200の固定ダメージを与える。',
                            target: 'enemy',
                            effect: 'damage',
                            power: 200,
                            battleOnly: true
                        },
                        'crazy_bomb': {
                            name: 'クレイジーボム',
                            description: '敵全員に100の固定ダメージを与える。',
                            target: 'enemies',
                            effect: 'damage',
                            power: 100,
                            battleOnly: true
                        },
                        'mana_potion': {
                            name: 'マナポーション',
                            description: '味方ひとりのMPを全回復させる。',
                            target: 'ally',
                            effect: 'restore_mp_full',
                            battleOnly: false
                        },
                        'heart_element': {
                            name: 'ハートエレメント',
                            description: '味方ひとりの最大HPを20永続的に上昇させる。',
                            target: 'ally',
                            effect: 'increase_max_hp',
                            power: 20,
                            battleOnly: false,
                            rare: true
                        },
                        'mana_element': {
                            name: 'マナエレメント',
                            description: '味方ひとりの最大MPを10永続的に上昇させる。',
                            target: 'ally',
                            effect: 'increase_max_mp',
                            power: 10,
                            battleOnly: false,
                            rare: true
                        },
                        'gigantes_ale': {
                            name: 'ギガンテスエール',
                            description: '味方ひとりの身長を100cm伸ばす。身長が初期値より低い場合は、初期値に戻してから伸ばす。',
                            target: 'ally',
                            effect: 'increase_height_and_initial',
                            power: 100,
                            battleOnly: false,
                            rare: true
                        },
                        'revive_herb': {
                            name: 'リバイブハーブ',
                            description: '戦闘不能の味方ひとりをHP50%で復活させる。',
                            target: 'ally',
                            effect: 'revive',
                            power: 0.5,
                            battleOnly: true
                        },
                        'shrink_aroma': {
                            name: 'シュリンクアロマ',
                            description: '味方全員の身長が-20cmされ、戦闘終了まで敵全員の攻撃力と防御力を大幅に下げる。',
                            target: 'party', // 実質的には全体効果
                            effect: 'shrink_party_and_debuff_enemies',
                            power: 20, // 身長減少量
                            battleOnly: true
                        },
                        'fairy_syrup': {
                            name: 'フェアリーシロップ',
                            description: '味方ひとりの身長を1cmにし、その冒険中、身長が1cmで固定される。',
                            target: 'ally',
                            effect: 'lock_height_to_one',
                            battleOnly: false,
                            rare: true
                        },
                        'holy_crystal': {
                            name: '聖結晶',
                            description: '味方全員のHPを全回復する。',
                            target: 'party',
                            effect: 'heal_percent',
                            power: 1.0,
                            battleOnly: false,
                            special: true // 通常のイベントでは入手不可
                        },
                        'evil_crystal': {
                            name: '邪結晶',
                            description: '敵全員に250の固定ダメージを与える。',
                            target: 'enemies',
                            effect: 'damage',
                            power: 250,
                            battleOnly: true,
                            special: true // 通常のイベントでは入手不可
                        },
                        'kanpai_juice': {
                            name: 'カンパイジュース',
                            description: '味方全員の身長を50cm伸ばす。夏の思い出が詰まっている。',
                            target: 'party',
                            effect: 'increase_height_party',
                            power: 50,
                            battleOnly: false,
                            special: true // 通常のイベントでは入手不可
                        },
                        'elixir': {
                            name: 'エリクサー',
                            description: '味方ひとりのHP、MP、状態異常を完全に回復する。',
                            target: 'ally',
                            effect: 'cure_all_and_restore',
                            battleOnly: false,
                            special: true // 調合専用
                        },
                        'gigant_syrup': {
                            name: 'ギガントシロップ',
                            description: '味方ひとりの身長を、現在の身長で固定する。',
                            target: 'ally',
                            effect: 'lock_height_current',
                            battleOnly: false,
                            special: true // 調合専用
                        },
                        'aura_sphere': {
                            name: 'オーラスフィア',
                            description: '味方全員の身長を30cm伸ばす。',
                            target: 'party',
                            effect: 'increase_height_party_30',
                            battleOnly: false,
                            special: true // 調合専用
                        },
                    };

                    const equipmentBlueprints = {
                        'short_sword': {
                            name: 'ショートソード',
                            targetRole: 'ファイター',
                            stat: 'atk',
                            value: 3,
                            description: 'アカリの攻撃力が3上がった！'
                        },
                        'headgear': {
                            name: 'ヘッドギア',
                            targetRole: 'ファイター',
                            stat: 'maxMp',
                            value: 10,
                            description: 'アカリの最大MPが10上がった！'
                        },
                        'mana_rod': {
                            name: 'マナロッド',
                            targetRole: 'ソーサラー',
                            stat: 'maxMp',
                            value: 15,
                            description: 'ヒカリの最大MPが15上がった！'
                        },
                        'claymore': {
                            name: 'クレイモア',
                            targetRole: 'ナイト',
                            stat: 'atk',
                            value: 5,
                            description: 'シズカの攻撃力が5上がった！'
                        },
                        'tower_shield': {
                            name: 'タワーシールド',
                            targetRole: 'ナイト',
                            stat: 'maxHp',
                            value: 20,
                            description: 'シズカの最大HPが20上がった！'
                        },
                        'talisman': {
                            name: 'タリスマン',
                            targetRole: 'メディック',
                            stat: 'maxMp',
                            value: 20,
                            description: 'ユイの最大MPが20上がった！'
                        },
                        'alchemist_goggles': {
                            name: '錬金術師のゴーグル',
                            targetRole: 'アルケミスト',
                            stat: 'maxMp',
                            value: 15,
                            description: 'ベアトリスの最大MPが15上がった！'
                        },
                        'dance_shoes': {
                            name: 'ダンスシューズ',
                            targetRole: 'ダンサー',
                            stat: 'agi',
                            value: 5,
                            description: 'リリカの素早さが5上がった！'
                        },
                        'katana_oil': {
                            name: '名刀油',
                            targetRole: 'サムライ',
                            stat: 'atk',
                            value: 5,
                            description: 'サクヤの攻撃力が5上がった！'
                        },
                        'iron_gauntlets': {
                            name: '鉄甲',
                            targetRole: 'モンク',
                            stat: 'atk',
                            value: 4,
                            description: 'シャオメイの攻撃力が4上がった！'
                        },
                        'medical_kit': {
                            name: '医療キット',
                            targetRole: 'ドクター',
                            stat: 'maxMp',
                            value: 20,
                            description: 'エリザの最大MPが20上がった！'
                        },
                        'loaded_dice': {
                            name: 'イカサマダイス',
                            targetRole: 'ギャンブラー',
                            stat: 'agi',
                            value: 4,
                            description: 'ルナの素早さが4上がった！'
                        },
                        'shadow_cloak': {
                            name: '影隠しのローブ',
                            targetRole: 'リーパー',
                            stat: 'agi',
                            value: 3,
                            description: 'クロエの素早さが3上がった！'
                        },
                        'summoners_bell': {
                            name: '召喚士の鈴',
                            targetRole: 'サモナー',
                            stat: 'maxMp',
                            value: 25,
                            description: 'ミコの最大MPが25上がった！'
                        },
                        'reinforced_flask': {
                            name: '強化フラスコ',
                            targetRole: 'アルケミスト',
                            stat: 'atk',
                            value: 5,
                            description: 'ベアトリスの攻撃力が5上がった！'
                        },
                        'samurai_armor': {
                            name: '侍の鎧',
                            targetRole: 'サムライ',
                            stat: 'maxHp',
                            value: 15,
                            description: 'サクヤの最大HPが15上がった！'
                        },
                        'noel_axe_parts': {
                            name: '斧の強化パーツ',
                            targetRole: 'アンドロイド',
                            stat: 'atk',
                            value: 5,
                            description: 'ノエルの攻撃力が5上がった！'
                        },
                        'noel_self_repair': {
                            name: '自己修復ユニット',
                            targetRole: 'アンドロイド',
                            stat: 'maxHp',
                            value: 20,
                            description: 'ノエルの最大HPが20上がった！'
                        },
                        'flora_knuckles': {
                            name: '刺繍入りのナックル',
                            targetRole: 'メイド',
                            stat: 'atk',
                            value: 6,
                            description: 'フローラの攻撃力が6上がった！'
                        },

                    };


                    const conversations = {
                        // アカリ (アタッカー): 元気はつらつ、とてもポジティブ。
                        'アカリ': {
                            default: ["よーっし、この調子でどんどん行こう！", "次の敵はどんなやつかな？わくわくする！", "みんな、疲れてない？私はまだまだいけるよ！", "このダンジョン、結構広いね！探検しがいがある！", "お腹すいたなー！終わったら美味しいもの食べに行こう！", "ヒカリ、足元大丈夫？暗いから気をつけてね！", "シズカがいると安心感が違うよね！", "ユイ、いつも回復ありがとう！頼りにしてるよ！", "なんだかちょっとひんやりするね。", "ここ、ちょっと不気味な感じ…でも私が吹き飛ばしてあげる！"],
                            lowHp: ["ちょっとかすり傷が…。でも、これくらい平気！", "うぅ、ちょっと油断したかな。でも、まだまだ戦える！", "いたたた…。やるじゃない！でも、負けないから！", "大丈夫、大丈夫！ちょっと転んだだけだって！", "ヒールサンキュー！これでまた暴れられる！"],
                            allyLowHp: ["{name}、大丈夫！？無理しないでね！", "{name}、危なかったね。私がもっと頑張らないと！", "{name}、下がってて！ここは私がやる！", "ユイ！{name}の回復お願い！", "よくも{name}を！許さないんだから！"],
                            shrunk: ["あれ、なんだか視界が低い…？でも、すばしっこくなったかも！", "ちっちゃくなっても、元気は100倍だから！", "わ、石ころが岩みたいに見える！", "このサイズ、敵に見つかりにくいかも？チャンス！", "みんなー！ここにいるよー！踏まないでね！"],
                            stripped: ["きゃっ！な、何するのよー！恥ずかしいじゃない！", "こ、こんな格好じゃ戦えないよぉ…！でも、やるしかない！", "だ、だめ！見ないで！…って、敵は見てくるかぁ！", "寒くはないけど…！心が寒い！"],
                            allyShrunk: ["{name}、なんだか小さくて可愛いね！でも、ちゃんとついてきてよ！", "わ、{name}が豆粒みたいだ！踏んづけないように気をつけなきゃ！", "{name}、私の後ろにいれば安全だよ！", "そんなに小さいと、敵も気づかないんじゃない？", "大丈夫？ちゃんとご飯食べてる？"],
                            shrunk_100: ["わ、なんだかテーブルの上がすごく高く見える！", "ドアノブに手が届かないかも…ジャンプ！"],
                            shrunk_70: ["シズカの腰くらいまでしかないや！えへへ、面白い！", "ユイと身長同じくらいかな？"],
                            shrunk_50: ["うわー！みんなの膝くらいしかない！子供に戻ったみたい！", "攻撃が当たるか心配になってきた…！"],
                            shrunk_30: ["ユイちゃんの足元だ！見失わないでねー！", "もう妖精さんサイズだね！飛べそう！"],
                            shrunk_10: ["もうみんなの靴くらいの大きさしかないよ！アリさんとお話できちゃうかも！", "誰か、ポケットに入れてー！"],
                            shrunk_1: ["もう指先くらいの大きさしかないよ！誰か、私を拾ってー！"],
                            allyShrunk_100: ["{name}、小さくなっても私が守るからね！", "あれ、{name}、いつもより目線が下だね！"],
                            grown: ["わーい！大きくなった！これならどんな敵も一撃だ！", "なんだか見晴らしがいいなー！", "シズカより大きくなっちゃったかも？えへへ！"],
                            grown_max: ["うおおお！これが私の最大サイズ！もう誰にも止められないよ！", "見てみて！天井に頭がついちゃった！これ以上は無理かな？"],
                            allyGrown: ["うわー、{name}が大きい！見上げちゃうね！", "{name}、天井に頭をぶつけないように気をつけてね！"],
                            stripped_pair: ["え、{name}も！？なんだかお揃いみたいで、ちょっと楽しいかも！", "こうなったら、どっちが大胆になれるか勝負だね！", "二人してこの格好じゃ、敵も呆れるんじゃない？", "恥ずかしいけど、{name}と一緒なら乗り越えられる気がする！", "風邪ひかないように、くっついていようか！", "シズカに見られたら、二人して怒られちゃうかな…？"],
                            stripped_shrunk: ["えぇ！？小さくなっちゃった上に、この格好！？もう、どうしたらいいのー！", "恥ずかしいけど、小さくなったから隠れやすいかも…？いや、やっぱり恥ずかしい！", "こんなに小さいのに、服がないなんて…！敵に見つかったらどうしよう！", "誰か、私を隠してー！小さすぎて、余計に目立っちゃうよ！"],
                            solo_stripped_tiny: ["こんなに小さくて、服もないなんて…！岩陰に隠れていよう…。", "（こそこそ…）誰にも見つかりませんように…！", "（しくしく…）もう、お嫁にいけないよぉ…。", "（じっ…）敵が通り過ぎるまで、息を潜めていよう…。", "このサイズなら、葉っぱ一枚で隠れるかな…？"],
                            fairy_shrunk: ["妖精さんみたいでしょ！えへへ、なんだか楽しいな！", "このサイズなら、どんな隙間でも探検できちゃう！冒険の始まりだ！", "見てみて！指先サイズのアカリだよ！最強に可愛い！"],
                            dollhouse_explore_giant: ["うわー！巨人のお家だ！探検、探検！", "何かお宝、隠されてないかな？わくわくする！", "おじゃましまーす！おっきくてすごいお家だね！"],
                            liberated: ["ふっふーん！見てみて、これが本当の私！", "もう何も隠すものなんてない！かかってきなさい！", "なんだか、すっごく身軽で、どこまでも飛んでいけそう！"],
                            cracked_rock_tiny: ["わーい、隙間がいっぱい！お宝探しだー！", "こんな小さな体でも、役に立てるんだから！見ててね！", "よーし、一番乗りで何か見つけてくる！"],
                            dollhouse_explore: ["わーい、ミニチュアのお家だ！探検、探検！", "何かお宝、隠されてないかな？わくわくする！", "おじゃましまーす！ちっちゃくて可愛いお家だね！"],
                            cracked_rock_break: ["うおおお！この岩、私が粉々にしてやるー！", "邪魔だよー！えいっ！", "これで道が開けたね！"],
                            allyNew: ["{name}、よろしくね！私がしっかり守ってあげる！", "新しい仲間だ！{name}、一緒に頑張ろうね！"],
                            allyStripped_shrunk: ["{name}、小さくなった上にその格好！？私が守ってあげるからね！", "わわわ、{name}！小さくて可愛いけど、その格好は…！", "敵の趣味、悪すぎ！{name}をこんな目に遭わせるなんて！"],
                            allyStripped: ["{name}、大丈夫！？とりあえず私のマント使って！", "わわわ、{name}！目のやり場に困るよ！", "敵の趣味、悪すぎ！絶対許さない！", "ヒカリ、どこ見てるの！"],
                            allyShrunk_70: ["{name}、そのサイズ感、なんだか懐かしい感じがするね！", "ちっちゃい{name}も可愛い！"],
                            allyShrunk_50: ["{name}、半分くらいになっちゃった！？大丈夫？", "わっ、そこにいたの！？気づかなかった！"],
                            shame_pillory: ["いやぁっ！は、離して…！こんな格好で、みんなに見られちゃう…！", "やめて、やめてよぉ！こんなの、絶対おかしいよぉ！", "（ぷるぷる…）もう、お嫁にいけない…！"],
                            allyShrunk_30: ["{name}、ポケットに入れて運んであげようか？", "風邪ひかないようにね！"],
                            shrunk_pair: ["{name}も小さくなっちゃったんだね！なんだかお揃いで楽しいね！", "二人いれば怖くない！ちびっこ探検隊、出発だ！", "こうなったら、どっちがもっと小さくなれるか競争しちゃう？なんちゃって！", "二人で敵の足元を狙えば、最強コンビかも！", "見失わないように、手、繋いでいこうか！"],
                            pair_ベアトリス: ["ベアトリス、その薬、飲むとどうなるの？ちょっと興味ある！", "なんか難しいこと考えてるの？私が代わりに敵、殴ってこようか？"],
                            pair_リリカ: ["リリカちゃんのダンス、見てると元気出る！私も踊っちゃおうかな！", "リリカちゃん、今度一緒に歌おうよ！"],
                            high_mouse_hole_giant: ["うおおお！ボクの肩に乗って、お宝ゲットだー！", "よーっし、この高さなら任せて！しっかり掴まってな！"],
                            high_mouse_hole_tiny: ["任せて！一番乗りでお宝見つけてくるから！", "わーい、高い高い！行ってきまーす！"],
                            high_mouse_hole_all_tiny: ["うーん、みんなで肩車しても全然届かないね…。", "ジャンプしてもダメだー！悔しい！", "鳥さんでも呼んでこれないかなぁ…。", "あそこにお宝があるかもしれないのに…！"],
                            pair_サクヤ: ["サクヤちゃん、その刀すごいね！私のも負けてないよ！", "たまには笑ってよー！ね？"],
                            pair_シャオメイ: ["シャオメイちゃん、勝負だ！どっちが多く倒せるか競争しよう！", "お腹すいたねー！終わったら肉まん食べに行こう！"],
                            pair_エリザ: ["エリザさん、その注射、痛くない…？", "大きくなる薬、もっとちょうだい！"],
                            pair_ルナ: ["ルナちゃん、ギャンブルってよくわからないけど、楽しそうだね！", "私に賭けてみてよ！絶対勝つから！"],
                            pair_クロエ: ["クロエちゃん、静かだね。でも、強いのは知ってるよ！", "その大鎌、重くない？私が持ってあげようか？"],
                            pair_ミコ: ["ミコちゃん、そのモコって子、ふわふわだね！触ってもいい？", "ゴーレムくん、かっこいいね！私とどっちが強いかな？"],
                            pair_レンカ: ["レンカさん、なんだかミステリアスだね！でも、悪い人じゃないってわかるよ！", "その魔法、どうなってるの？すごいね！"],
                            pair_イオリ: ["イオリ先輩！小さくてもすっごく頼りになります！", "私が先輩を守りますからね！任せてください！"],
                            pair_コハル: ["コハルちゃん、見てて飽きないなー！次はなにが起こるか楽しみ！", "失敗しても私がフォローするから、思いっきりやっていいよ！"],
                            pair_オリビア: ["オリビアさん、いつもありがとう！その祈り、すっごく温かいです！", "私も、オリビアさんみたいに誰かを癒せるようになりたいな！"],
                            pair_レンカ: ["レンカさん、なんだかミステリアスだね！でも、悪い人じゃないってわかるよ！", "その魔法、どうなってるの？すごいね！"],
                            pair_セレスティア: ["セレスティアちゃん、すごい力だね！私も負けてられないな！", "なんだか、見てるだけで心が洗われるみたい…不思議な感じ！"],
                            pair_イオリ: ["イオリ先輩！小さくてもすっごく頼りになります！", "私が先輩を守りますからね！任せてください！"],
                            pair_コハル: ["コハルちゃん、見てて飽きないなー！次はなにが起こるか楽しみ！", "失敗しても私がフォローするから、思いっきりやっていいよ！"],
                            pair_オリビア: ["オリビアさん、いつもありがとう！その祈り、すっごく温かいです！", "私も、オリビアさんみたいに誰かを癒せるようになりたいな！"],
                        },
                        // ヒカリ (魔法使い): 無口で慎重派。
                        'ヒカリ': { // ソーサラー
                            default: ["…順調。", "…先の気配を探る。", "…静か。油断は禁物。", "…この通路、魔力の流れが少し違う。", "…アカリ、あまり先行するな。", "…シズカ、後方は頼む。", "…ユイ、MPは足りているか？", "…壁の模様…古代の魔法文字か？", "…空気が澱んでいる。注意。", "…もう少し、慎重に進むべき。"],
                            lowHp: ["…少し、魔力が乱れてる。", "…問題ない。集中する。", "…かすっただけ。", "…呼吸を整えれば、まだやれる。", "…回復に感謝。"],
                            allyLowHp: ["{name}…回復を。", "…{name}、下がって。", "…シズカ、{name}のカバーを。", "…ユイ、急いで。", "…敵の狙いは{name}か。"],
                            shrunk: ["…これでは、歩幅が…。", "…魔力の制御に、影響は無い。", "…体が軽い。エーテルの流れが速い。", "…詠唱の声が、小さくなる。", "…このサイズなら、敵の死角に入りやすい。"],
                            stripped: ["…不愉快。", "…ローブで隠す。…これでは動きにくい。", "…見てくれるな。", "…集中を削がれる。", "…風魔法で、体を隠せないか…"],
                            allyShrunk: ["…{name}、そこにいたのか。", "…小さい。敵に見つかりにくい利点も。", "…アカリ、{name}を踏むな。", "…気配が希薄になった。暗殺者向き。 ", "…守るべき対象が、小さくなった。"],
                            shrunk_100: ["…視界が低い。腰をかがめないと本が取れない。", "…魔導書が重い。"],
                            shrunk_70: ["…大人の膝ほどの高さ。魔導書の文字が少し読みづらい。", "…走る速度が落ちる。"],
                            shrunk_50: ["…世界のすべてが大きく見える。", "…私のファイアボールの方が大きい。"],
                            shrunk_30: ["…草むらが、森のようだ。", "…これでは、ネズミと間違われる。"],
                            shrunk_10: ["…指先ほどの大きさ。だが、魔力は私と共にある。", "…風で飛ばされそうだ。"],
                            shrunk_1: ["…塵芥のようだ。だが、魔力は消えぬ。"],
                            allyShrunk_100: ["…{name}、足元に注意して。", "…{name}、私の後ろを歩け。"],
                            grown: ["…体が大きいと、魔力の流れが少し鈍る。", "…天井が近い。頭上に注意。", "…この体格なら、魔導書で殴っても強そうだ。"],
                            grown_max: ["…これが、力の頂点。…これ以上は、ない。", "…魔力の器が、限界に達した。"],
                            allyGrown: ["…{name}、大きい。威圧感がある。", "…{name}、その体で、狭い通路は通れるのか？"],
                            allyNew: ["…{name}か。よろしく。足を引っ張るなよ。", "…新しい仲間。{name}、君の実力を見せてもらう。"],
                            stripped_shrunk: ["…体が縮み、さらにこの状態。…魔力集中が困難だ。", "…この状況で、敵に遭遇すれば…最悪だ。", "…この小ささで、この格好。…隠れる場所を探す。", "…恥辱。だが、この状況を乗り越えねば。"],
                            solo_stripped_tiny: ["…この小ささで、この格好。…屈辱だ。", "…物陰に隠れる。気配を消せば、見つかることはない。", "…早く、この状況を脱したい。", "…（魔導書を盾のようにして、体を隠している）"],
                            dollhouse_explore_giant: ["…この家、巨大だ。調査の価値がある。", "…微弱な魔力の残滓を感じる。何かあるな。", "…侵入する。巨人族の生活痕跡か。"],
                            liberated: ["…これが、真理に近い姿。", "…魔力の流れを、肌で直接感じる。悪くない。", "…無駄な装飾は、思考の妨げになる。"],
                            cracked_rock_tiny: ["…この隙間なら、内部構造を調査できる。", "…岩の内部に、微弱な魔力の流れを感じる。何かあるかもしれない。", "…行ってくる。"],
                            dollhouse_explore: ["…この家、精巧な作りだ。調査の価値がある。", "…微弱な魔力の残滓を感じる。何かあるな。", "…侵入する。何者かの生活痕跡か。"],
                            cracked_rock_break: ["…魔力で、内部から破壊する。", "…道を開ける。", "…邪魔。"],
                            fairy_shrunk: ["…世界の解像度が上がったようだ。全てが鮮明に見える。", "…魔力の流れが、いつもより肌で感じられる。悪くない。", "…この体、エーテルの循環が最適化されている。"],
                            allyStripped_shrunk: ["…{name}、小さくなった上にその格好か。…気の毒に。", "…{name}、私のローブの影に隠れるといい。", "…敵の悪趣味な攻撃。速やかに排除する。"],
                            stripped_pair: ["…{name}もか。…不愉快だ。互いに、視線を避けるべきだ。", "…この状況、魔力集中に影響が出る。", "…二人でいれば、敵も呆れるか。…いや、逆か。", "…アカリ、{name}を見るな。…いや、私もか。", "…この恥辱、忘れない。"],
                            allyStripped: ["…{name}、私のローブを。…いや、サイズが合わないか。", "…敵の悪趣味な攻撃。速やかに排除する。", "…アカリ、{name}を見るな。"],
                            shame_pillory: ["…っ！離せ。…この、不愉快な…！", "…屈辱だ。…だが、ここで精神を乱されては、敵の思う壺。", "（目を固く閉じ、屈辱に耐えている）"],
                            allyShrunk_70: ["…{name}、その姿でも、油断はするな。", "…アカリ、{name}をからかうな。"],
                            allyShrunk_50: ["…{name}、気配がさらに薄くなった。隠密には向いている。", "…シズカ、{name}が見えない。"],
                            allyShrunk_30: ["…{name}、私のローブの影に隠れるといい。", "…ユイ、{name}を鞄に入れるか検討を。"],
                            shrunk_pair: ["…{name}もか。互いに、見失わないようにしよう。", "…二人分の気配が消えた。奇襲には最適。", "…この状況、笑えてきた。", "…{name}、段差だ。手を貸す。", "…二人でいれば、ただの小さい存在ではない。"],
                            pair_アカリ: ["…アカリ、また突っ走って。少しは落ち着け。", "…アカリ、背中は任せた。"],
                            pair_シズカ: ["…シズカ、頼りにしてる。援護は任せて。", "…その盾、私の魔法でも壊せないかも。"],
                            high_mouse_hole_giant: ["…肩を貸す。落ちるなよ。", "…この高さなら届く。中を頼む。"],
                            high_mouse_hole_tiny: ["…了解。内部の構造を調査する。", "…行ってくる。すぐに戻る。"],
                            high_mouse_hole_all_tiny: ["…届かない。物理的に不可能。", "…全員で塔になっても、高さが足りない。", "…飛行魔法があれば。…ない。", "…諦めるのが、合理的。"],
                            pair_ユイ: ["…ユイ、MPは大丈夫？無理はするな。", "…いつもありがとう。助かる。"],
                            pair_ベアトリス: ["…ベアトリス、その探究心、嫌いじゃない。", "…錬金術と魔術、根源は同じかもしれない。"],
                            pair_リリカ: ["…リリカ、騒がしい。だが、士気が上がるのは確か。", "…その歌、魔力に影響を与える。面白い。"],
                            pair_サクヤ: ["…サクヤ、その太刀筋…無駄がない。", "…サクヤ、気配を消すのが上手い。静かなのは、嫌いじゃない。", "…剣禅一如、か。魔道にも通じるものがある。"],
                            pair_シャオメイ: ["…シャオメイ、単純。だが、それが強さか。", "…腹が減った、しか言わない。"],
                            pair_エリザ: ["…エリザ、あなたの薬、興味深い。だが、私は被検体にはならない。", "…科学と魔法、どちらが真理か。…愚問。"],
                            pair_ルナ: ["…ルナ、運命はサイコロでは決まらない。", "…そのギャンブル、確率論で解析できる。"],
                            pair_クロエ: ["…クロエ、あなたも静か。…魂、見えるの？", "…その鎌、どこで手に入れた？"],
                            pair_ミコ: ["…ミコ、その召喚術、系統が違う。興味深い。", "…モコ、という生き物。解析したい。"],
                            pair_レンカ: ["…レンカ、死霊術か。…禁忌の領域。だが、力は本物。", "…その魂、どこから呼んでいる？"],
                            pair_イオリ: ["…イオリ、先輩か。その守り、確か。", "…小さくても、その存在感は大きい。"],
                            pair_コハル: ["…コハル、予測不能。それが一番厄介。", "…次は何が起こるか、見ておく。"],
                            pair_オリビア: ["…オリビア、その祈り、純粋な魔力。…聖属性か。", "…回復魔法、専門外だが、参考になる。"],
                            pair_レンカ: ["…レンカ、死霊術か。…禁忌の領域。だが、力は本物。", "…その魂、どこから呼んでいる？"],
                            pair_セレスティア: ["…その力、聖なるものか。魔力とは異なる、純粋なエネルギー。", "…あなたの存在そのものが、この地の穢れを払っている。"],
                            pair_イオリ: ["…イオリ、先輩か。その守り、確か。", "…小さくても、その存在感は大きい。"],
                            pair_コハル: ["…コハル、予測不能。それが一番厄介。", "…次は何が起こるか、見ておく。"],
                            pair_オリビア: ["…オリビア、その祈り、純粋な魔力。…聖属性か。", "…回復魔法、専門外だが、参考になる。"],
                        },
                        // シズカ (タンク): 姉御肌、とても頼れる。
                        'シズカ': { // ナイト
                            default: ["みんな、いい調子だね。このまま気を引き締めていこうか。", "何かあったらすぐに言いな。あたしが前に出るからさ。", "ふぅ、一休みも大事だよ。焦らず行こう。", "アカリ、あんまりはしゃいでると転ぶよ。", "ヒカリ、何か気になるものでもあったのかい？", "ユイ、いつもありがとうね。無理するんじゃないよ。", "この階は静かだね。嵐の前の静けさ、ってやつじゃなきゃいいけど。", "よし、次の角を曲がるよ。準備はいいね？", "全員、あたしの後ろから離れるんじゃないよ。", "敵の気配はないね。今のうちに体制を整えよう。"],
                            lowHp: ["ちっ、今の攻撃はちょっと効いたね…。でも、まだまだ！", "これしきでへこたれるあたしじゃないよ。", "はは、上等じゃないか。もっときな！", "大丈夫、大丈夫。みんなはあたしが守るからさ。", "ユイ、すまないね。回復助かるよ。"],
                            allyLowHp: ["{name}、大丈夫かい？あたしの後ろに隠れな！", "{name}、無理は禁物だよ。しっかり守ってやるからさ。", "アカリ！{name}から敵を引き剥がすよ！", "ヒカリ、援護を頼む！", "ユイ、{name}を頼んだよ！"],
                            shrunk: ["おっと、こりゃ小さくなっちまったね。守れる範囲が狭くなるのは困るね。", "体が小さくても、気合でどうにでもなるさ！", "盾が体より大きいじゃないか。これはこれで要塞だね。", "敵の攻撃が当たらなくなるかもね。それはそれで儲けもんさ。", "みんな、あたしを見失うんじゃないよ！", "盾を構えるのに、いつもより力が必要だね。"],
                            // シズカは脱衣状態にならない
                            allyShrunk: ["{name}、あんまり小さいと見失っちまうよ。側にいな。", "あらあら、{name}が可愛くなっちゃって。でも、油断するんじゃないよ。", "よしな、{name}。あんたはあたしの足元にいれば安全さ。", "ヒカリ、{name}がどこにいるか分かるかい？", "アカリ、{name}で遊ぶんじゃないよ。"],
                            shrunk_100: ["おっと、盾が壁みたいに感じるね。", "いつもより低い位置から敵を見上げるのは、新鮮だね。"],
                            shrunk_70: ["あたしの盾の上半分くらいしか見えないじゃないか。これじゃあ敵になめられちまうかな？", "アカリと目線が同じくらいかね。"],
                            shrunk_50: ["アカリの膝くらいまでしか無いじゃないか…。だが、守りの魂は小さくならないよ！", "これじゃあ、盾を構えるのがやっとだね。"],
                            shrunk_30: ["さすがにこれは、守りにくいねぇ。敵の足元を狙うしかないか。", "ゴブリンより小さいじゃないか…。"],
                            shrunk_10: ["こりゃ驚いた。もう盾の裏に住めそうだね。", "誰かあたしを拾っておくれ。"],
                            shrunk_1: ["…もう、盾の取っ手の一部になった気分だよ。"],
                            allyShrunk_100: ["{name}、小さくなってもあたしが壁になってやるさ。", "おっと、{name}。そこにいたのかい。"],
                            grown: ["はは、こりゃいい！巨人になった気分だね！", "これならどんな攻撃も受け止めてやれるさ！", "天井が低いねぇ。頭をぶつけないようにしないと。"],
                            grown_max: ["はは、ついに天井に頭がついちまったね。これ以上は無理か。", "この体格なら、竜だって止められそうだ！"],
                            allyGrown: ["おぉ、{name}、見上げるほど大きくなったじゃないか！頼もしいね！", "{name}、あんまり大きいと敵に見つかりやすいから気をつけな。"],
                            allyNew: ["お、新しい仲間かい。{name}、よろしくな。あたしがしっかり守ってやるよ。", "ようこそ、{name}。歓迎するよ。"],
                            // シズカは脱衣状態にならないため、stripped_shrunkも発生しない
                            allyLiberated: ["おやおや、{name}。随分と開放的じゃないか。風邪ひくんじゃないよ。", "{name}、その格好…何か吹っ切れたのかい？まあ、あんたがいいならあたしは何も言わないけどね。", "はは、大胆だねぇ。敵もびっくりして逃げ出すんじゃないか？"],
                            dollhouse_explore_giant: ["はは、こりゃまたでっかい家だねぇ。誰か住んでるのかい？", "よし、ちょっと失礼して中を拝見させてもらうよ。", "こんな大きな家にも、暮らしがあるのかねぇ。"],
                            cracked_rock_tiny: ["はは、こんな小さな体でも役に立つとはね。見てくるよ。", "よし、この隙間ならあたしでも通れる。任せときな。", "お宝でも隠されてないか、ちょっと探してくるよ。"],
                            // シズカは脱衣状態にならないため、stripped_pairは発生しない
                            dollhouse_explore: ["はは、こりゃまた可愛らしい家だねぇ。誰か住んでるのかい？", "よし、ちょっと失礼して中を拝見させてもらうよ。", "こんな小さな家にも、暮らしがあるのかねぇ。"],
                            cracked_rock_break: ["はっはっは！あたしのでかさをなめてもらっちゃ困るよ！", "どきな！こんな岩、盾の一撃で十分さ！", "ふんっ！…よし、道が開いたね。"],
                            fairy_shrunk: ["はは、豆粒みたいになっちまったが、守る心は変わらないよ。", "このサイズなら、敵の懐に飛び込むのも容易いね。", "盾が家みたいだ。雨風はしのげるな。"],
                            allyStripped: ["おやおや、{name}。大胆な格好じゃないか。風邪ひくんじゃないよ。", "敵の奴、くだらない真似をしやがる。さっさと叩き潰してやるからな！", "アカリ、{name}から目を離しな。"],
                            allyShrunk_70: ["{name}、そのサイズじゃ一歩が大きいだろう。無理するなよ。", "可愛いねぇ。頭を撫でてやりたいよ。"],
                            allyShrunk_50: ["{name}、あたしの足元にいれば安全だよ。踏んじまわないようにしないとね。", "半分か…。ちゃんと守ってやらないとね。"],
                            high_mouse_hole_giant: ["よし、あたしの肩に乗りな。しっかり支えててやるからさ。", "はは、こうでもしないと届かないかね。さあ、行きな！"],
                            high_mouse_hole_tiny: ["はは、こりゃいい眺めだね。じゃ、ちょっと見てくるよ。", "了解。中の様子を探ってくる。任せときな。"],
                            high_mouse_hole_all_tiny: ["はは、こりゃ参ったね。全員豆粒じゃ、どうしようもないか。", "誰か一人、鳥にでも運んでもらうかい？冗談だよ。", "まあ、仕方ない。諦めて次に行こうか。"],
                            allyShrunk_30: ["{name}、どこだい？ああ、そこにいたのか。", "ユイ、あんたの鞄に入れてやったらどうだい？"],
                            shrunk_pair: ["おや、{name}もかい。こりゃ、ちびっこコンビで敵を油断させるかね。", "二人してこの様かい。笑っちまうね。", "こうなったら、どっちがうまく隠れられるか勝負といくかい？", "あんたが囮で、あたしが仕留める。どうだい、この作戦？", "よし、手でも繋いでおくかね。はぐれないようにさ。"],
                            pair_アカリ: ["アカリ、あんまり前に出過ぎるんじゃないよ。あたしが壁になってやるからさ。", "よしよし、いい子だ。"],
                            pair_ヒカリ: ["ヒカリ、あんたの魔法は頼りになるね。後衛は任せたよ。", "たまにはあたしにも頼りな。"],
                            pair_ユイ: ["ユイ、いつもありがとうね。あんたがいるから、安心して前に出られるよ。", "無理するんじゃないよ。"],
                            pair_ベアトリス: ["ベアトリス、あんたの薬はよく効くねぇ。でも、変な薬はあたしに使うんじゃないよ。", "研究もいいが、ほどほどにな。"],
                            pair_リリカ: ["リリカ、あんたの踊りは見てて楽しいね。士気が上がるよ。", "ステージはあたしが守ってやるから、思いっきりやりな。"],
                            pair_サクヤ: ["サクヤ、あんたの剣の腕は確かだね。背中を預けられるよ。", "たまには肩の力抜きな。"],
                            pair_シャオメイ: ["シャオメイ、あんたの拳は見てて飽きないねぇ。", "腹が減ったのかい？終わったら美味い店に連れてってやるよ。", "あんまり無茶するんじゃないよ。あたしが前に出るからさ。"],
                            pair_エリザ: ["エリザ、あんたも大概物好きだねぇ。でも、その腕は確かだ。", "あたしを実験台にするのはやめときな。"],
                            pair_ルナ: ["ルナ、博打もいいが、命まで賭けるんじゃないよ。", "あんたの度胸は買ってやるよ。"],
                            pair_クロエ: ["クロエ、大丈夫かい？あたしの後ろにいな。", "あんまり暗い顔してると、幸せが逃げちまうよ。"],
                            pair_ミコ: ["ミコ、その召喚獣は頼りになるね。あたしの盾とどっちが硬いかね？", "モコとかいうの、可愛いじゃないか。"],
                            pair_レンカ: ["レンカ、あんたの魔法は気味が悪いねぇ。でも、頼りにしてるよ。", "死人相手とは、感心しないね。"],
                            pair_イオリ: ["イオリ、あんたが先輩だったのかい。頼りにしてるよ、先輩。", "その小さな体で、よく頑張るねぇ。感心だよ。"],
                            pair_コハル: ["コハル、あんたは見ててハラハラするねぇ。でも、面白いからいいか。", "何かあったらあたしがなんとかしてやるから、好きにやりな。"],
                            pair_オリビア: ["オリビア、あんたの祈りは心に染みるね。ありがとうよ。", "無理するんじゃないよ。あんたも大事な仲間だからね。"],
                            pair_レンカ: ["レンカ、あんたの魔法は気味が悪いねぇ。でも、頼りにしてるよ。", "死人相手とは、感心しないね。"],
                            pair_セレスティア: ["セレスティア、あんたは一人で背負いすぎだよ。あたしたちもいるんだからさ。", "その小さな体で、よく頑張るねぇ。感心だよ。"],
                            pair_イオリ: ["イオリ、あんたが先輩だったのかい。頼りにしてるよ、先輩。", "その小さな体で、よく頑張るねぇ。感心だよ。"],
                            pair_コハル: ["コハル、あんたは見ててハラハラするねぇ。でも、面白いからいいか。", "何かあったらあたしがなんとかしてやるから、好きにやりな。"],
                            pair_オリビア: ["オリビア、あんたの祈りは心に染みるね。ありがとうよ。", "無理するんじゃないよ。あんたも大事な仲間だからね。"],
                        },
                        // ユイ (メディック): 世話焼き、みんなの妹。
                        'ユイ': { // メディック
                            default: ["皆さん、ケガはありませんか？いつでも言ってくださいね！", "なんだか、ドキドキしますね…。でも、みんなと一緒なら大丈夫！", "次の階には何があるんでしょうか…？", "アカリさん、元気ですね！私も見習わないと！", "ヒカリさん、何か見つけましたか？", "シズカさん、いつも頼りになります…！", "回復薬、まだありますから安心してくださいね。", "少し休憩しますか？お茶とか淹れましょうか？", "わ、今の音なんでしょう…！？", "お腹すきましたね…。あとでみんなでお菓子パーティしませんか？"],
                            lowHp: ["ひゃっ…！今の、危なかったです…。", "だ、大丈夫です！まだ、ヒールできますから！", "うぅ…ちょっと目が回ります…。", "ご、ごめんなさい！私がもっとしっかりしないと…！", "回復ありがとうございます…！助かりました！"],
                            allyLowHp: ["{name}さん、大変！すぐに治しますから、じっとしててください！", "きゃー！{name}さん、血が！私がなんとかしないと…！", "{name}さん、下がってください！危ないです！", "シズカさん！{name}さんをお願いします！", "そんな…！{name}さんを傷つけるなんて、ひどいです！"],
                            shrunk: ["えぇ！？体が縮んじゃいました…！これじゃ、みんなに追いつけないかも…。", "うぅ、服がぶかぶかです…。歩きにくい…", "なんだか、世界がとっても大きく見えます…！", "このままじゃ、回復魔法をかけるのも一苦労です…。", "アカリさん、待ってくださいー！歩くのが速いですー！"],
                            stripped: ["ひゃああっ！？い、いやです！こんな格好、恥ずかしいですぅ…！", "うぅ…だれかハンカチを…！", "も、もうお嫁にいけません…！", "こんな格好じゃ、回復に集中できません…！", "リリカさんなら、こんな時でも堂々としてるんでしょうか…？"],
                            allyShrunk: ["わ、{name}さん、小さくなっちゃって…。ケガしてませんか？", "{name}さん、どこですかー？あ、そんなところに！", "{name}さん、ちゃんとご飯は食べてますか？心配です…。", "シズカさん、{name}さんが見えません！", "ヒカリさん、{name}さんが迷子にならないように見ててあげてください！"],
                            shrunk_100: ["小学生みたいになっちゃいました…。", "なんだか、アカリさんの妹になった気分です。"],
                            shrunk_70: ["これじゃ、高いところの薬草が取れません…。誰か、手伝ってください…。", "ヒカリさんのローブに隠れられちゃいますね。"],
                            shrunk_50: ["半分に…。シズカさんの膝くらいしかありません…。どうしましょう…。", "わたしの回復魔法、届くでしょうか…。"],
                            shrunk_30: ["お、お人形さんみたいです…。このままじゃ戦えません…！", "シズカさんのブーツより小さいです…！"],
                            shrunk_10: ["ふぇぇ…もう、歩くのが大変ですぅ…。誰か、カバンに入れてください…！", "アリさんとお友達になれそうです…。"],
                            shrunk_1: ["ふぇぇ…もう涙の粒のほうが大きいですぅ…！"],
                            allyShrunk_100: ["{name}さん、小さくなっても私がちゃんとヒールしますからね！", "わ、{name}さん、いつもと雰囲気が違いますね！"],
                            grown: ["わわっ、大きくなっちゃいました！なんだか、シズカさんみたいです…！", "これなら、高いところの薬草も簡単に取れますね！", "天井に頭が…！気をつけないと…！"],
                            grown_max: ["わわっ！もう、これ以上は大きくなれないみたいです…！", "なんだか、雲の上にいるみたいです…！"],
                            allyGrown: ["わぁ、{name}さん、とっても大きいですね！見上げちゃいます！", "{name}さん、そんなに大きいと、服が破けちゃいませんか？"],
                            allyNew: ["新しいお仲間ですね！{name}さん、よろしくお願いします！", "わぁ、{name}さん！これから一緒に頑張りましょうね！"],
                            stripped_shrunk: ["ひゃああっ！小さくなった上に、こんな格好だなんて…！もう、泣いちゃいそうですぅ…！", "だ、誰か、私を隠してください…！小さすぎて、余計に目立っちゃいます…！", "こんなに小さいのに、服がないなんて…！敵に見つかったらどうしましょう…！", "恥ずかしいですぅ…！でも、回復はちゃんとしますから…！"],
                            solo_stripped_tiny: ["ふぇぇ…こんなに小さくて、お洋服もないなんて…！石の後ろに隠れてます…。", "（きゅるん…）誰か、助けてください…。", "（ふるふる…）寒くて、恥ずかしいですぅ…。", "もう、涙で前が見えません…。", "（ぽつん…）"],
                            dollhouse_explore_giant: ["わぁ、巨人さんのお家みたいです！とっても大きい！", "おじゃまします！何か困っていることはありませんか？", "綺麗なお家…！私もこんなお家に住んでみたいです！…って、大きすぎますね！"],
                            cracked_rock_tiny: ["は、はいっ！行ってきます！何か見つかるかもしれません！", "こんな私でも、みんなの役に立てるなら…！", "わわっ、狭いですけど…頑張ります！"],
                            dollhouse_explore: ["わぁ、お人形さんのお家みたいです！とっても可愛い！", "おじゃまします！何か困っていることはありませんか？", "綺麗なお家…！私もこんなお家に住んでみたいです！"],
                            liberated: ["は、はいぃ…！こ、これが、私の覚悟です！", "も、もう何も怖くありません！みんなを、守るためなら…！", "なんだか、心がすーっとして…祈りが、もっと深くなった気がします…！"],
                            cracked_rock_break: ["わわっ！こんなに大きくなっちゃったんですから、これくらい！", "えいっ！…わー！壊れちゃいました！", "みなさんのために、頑張ります！"],
                            fairy_shrunk: ["妖精さんになっちゃいました！なんだか、飛べそうな気がします！", "小さくても、ヒールはちゃんと届きますからね！安心してください！", "わあ、お花畑にいるみたいです！綺麗…！"],
                            allyStripped_shrunk: ["きゃっ！{name}さん、小さくなった上にその格好ですか！？私が守りますから！", "{name}さん、大丈夫ですか！？小さくて可愛いけど、その格好は…！", "シズカさん、早く敵を倒してください！{name}さんがかわいそうです！"],
                            stripped_pair: ["ひゃああっ！{name}さんもですか！？もう、どうしましょう…！", "二人でいると、恥ずかしさも倍増ですぅ…！", "こんな格好じゃ、回復に集中できません…！", "だ、誰か、私たちに服を…！", "せめて、お互い見ないようにしましょう…！"],
                            allyStripped: ["きゃっ！{name}さん、大丈夫ですか！？これを…私のハンカチですけど…！", "{name}さんになんてことを！私がすぐに治しますから！", "シズカさん、早く敵を倒してください！"],
                            shame_pillory: ["ひゃああっ！い、いやです！離してください！", "ふぇぇ…こんなの、あんまりですぅ…！", "（涙目でぷるぷると震えている）"],
                            allyShrunk_70: ["{name}さん、なんだか可愛らしいですけど…転ばないでくださいね？", "私が手を引いてあげます！"],
                            allyShrunk_50: ["{name}さん、半分に…。私が守ってあげないと！", "そんなに小さいと、敵に見つからないかもしれませんね！"],
                            allyShrunk_30: ["{name}さん、私のカバンに入りますか？その方が安全かも…。", "寒くないですか？私のハンカチをどうぞ！"],
                            shrunk_pair: ["{name}さんもですか！？ふぇぇ…二人で一緒に頑張りましょうね…！", "二人とも小さくなっちゃって…どうしましょう…。", "でも、なんだか秘密基地みたいで、ちょっとだけ楽しいです…！", "手、繋いでいきましょう！はぐれたら大変ですから！", "{name}さん、怖くないですか？私がそばにいますからね！"],
                            pair_アカリ: ["アカリさん、あんまり無茶しないでくださいね！ケガしたら私が治しますから！", "元気で、見てて楽しいです！"],
                            pair_ヒカリ: ["ヒカリさん、大丈夫ですか？疲れたらいつでも言ってくださいね。", "その本、面白そうですね！"],
                            high_mouse_hole_giant: ["わわっ、私で大丈夫でしょうか…？えいっ！しっかり掴まってくださいね！", "こ、こんな高いところ…！私がしっかり支えますから！"],
                            high_mouse_hole_tiny: ["は、はいっ！行ってきます！皆さんのために、頑張らないと…！", "わ、高いです…！でも、お宝のためなら！"],
                            high_mouse_hole_all_tiny: ["ふぇぇ…あんなに高いところ、どうやっても届きません…。", "みんなで頑張っても、全然足りませんね…。", "せめて、背が伸びるお薬があれば…。", "（しくしく…）ごめんなさい、私じゃお役に立てなくて…"],
                            pair_シズカ: ["シズカさん、いつも守ってくれてありがとうございます！私も頑張ります！", "シズカさんがいると、とっても安心です！"],
                            pair_ベアトリス: ["ベアトリスさん、そのお薬、なんですか？回復薬ですか？", "研究、頑張ってください！"],
                            pair_リリカ: ["リリカさんのステージ、いつも見てます！とってもキラキラしてます！", "わわ、リリカさん！私、ファンなんです！サインください！", "リリカさんのダンス、どうしてあんなに綺麗なんですか？"],
                            pair_サクヤ: ["サクヤさん、なんだか怖そうですけど、きっと優しい人ですよね！", "ケガしたら、我慢しないで言ってくださいね！"],
                            pair_シャオメイ: ["シャオメイさん、いつも元気ですね！お腹がすいたら、私のお菓子をどうぞ！", "その拳、とっても強そうです！"],
                            pair_エリザ: ["エリザさん、その注射器、ちょっと怖いです…。", "でも、人を助けるお医者さんなんですよね！すごいです！"],
                            pair_ルナ: ["ルナさん、ギャンブルはほどほどに…。心配です…。", "でも、楽しそうなのはいいことですね！"],
                            pair_クロエ: ["クロエちゃん、大丈夫？寒くないですか？私のマント、使いますか？", "一人でいないで、こっちに来てください！"],
                            pair_ミコ: ["ミコちゃん、モコちゃん、とっても可愛いですね！なでなでしてもいいですか？", "召喚術って、すごいんですね！"],
                            pair_レンカ: ["レンカさん、その魔法、ちょっと怖いですけど…味方だと頼もしいです！", "何かあったら、私がヒールしますからね！"],
                            pair_イオリ: ["イオリ先輩、小さくてもとっても頼りになります！尊敬します！", "先輩のこと、私がしっかりお守りしますね！"],
                            pair_コハル: ["コハルちゃん、大丈夫ですか！？転んだりしてませんか？", "見ててハラハラしますけど…なんだか楽しいです！"],
                            pair_オリビア: ["オリビアさん、その祈り、とっても温かいです。私もそんな風になりたいです。", "疲れたら、いつでも言ってくださいね。私がヒールしますから！"],
                            // サマータイム・スペシャルライブ！
                            beach_liberation_prompt: ["この太陽、なんだか私を元気にしてくれます…！もっと、この光を全身で感じたいです…！"],
                            beach_liberation_stop: ["は、はいっ！わ、私、ちょっと大胆になりすぎてました…！"],
                            onsen_liberation_prompt: ["この温泉、とっても気持ちいいです…。なんだか、悩み事も全部溶けていっちゃいそうで…ふふっ。"],
                            onsen_liberation_stop: ["わわっ！す、すみません！私、ちょっとのぼせちゃったみたいです…！"],

                            summer_beach: [
                                "わぁ、海、綺麗ですね…！みんなとはしゃげて、とっても楽しいです！",
                                "日差しが強いので、皆さん熱中症には気をつけてくださいね！",
                                "リリカさんのライブ、素敵でした…！私も、もっと皆さんのお役に立てるように頑張らないと！",
                                "リリィさん、砂のお城作り、上手ですね！私も手伝います！"
                            ],
                            summer_onsen: ["温泉…気持ちいいです…。なんだか、眠くなってきちゃいました…。", "このタオル、ちゃんと巻けてますか…？ちょっと心配です…。", "温泉まんじゅう、美味しいです！皆さん、どうぞ！", "ミコちゃん、温泉で泳いじゃだめですよー！"],
                            onsen_towel_trouble: ["ひゃああっ！？い、いやです！こんな格好、恥ずかしいですぅ…！見ないでください！"],
                            pair_レンカ: ["レンカさん、その魔法、ちょっと怖いですけど…味方だと頼もしいです！", "何かあったら、私がヒールしますからね！"],
                            pair_セレスティア: ["セレスティアさん、なんだかとても温かい光を感じます…。", "疲れたらいつでも言ってくださいね。私、ヒールしますから！"],
                            pair_イオリ: ["イオリ先輩、小さくてもとっても頼りになります！尊敬します！", "先輩のこと、私がしっかりお守りしますね！"],
                            pair_コハル: ["コハルちゃん、大丈夫ですか！？転んだりしてませんか？", "見ててハラハラしますけど…なんだか楽しいです！"],
                            pair_オリビア: ["オリビアさん、その祈り、とっても温かいです。私もそんな風になりたいです。", "疲れたら、いつでも言ってくださいね。私がヒールしますから！"],
                            // 特別衣装時のセリフ
                            summer_beach_costume: ["この水着、どうですか？えへへ、ちょっと恥ずかしいですけど、動きやすいです！", "なんだか、海に来たみたいでわくわくしますね！", "この格好だと、ヒールする時にちょっと気合が入ります！"],
                            summer_beach_costume_lowHp: ["ひゃっ…！水着だと、ちょっとした傷も目立ちますね…。", "だ、大丈夫です！これくらいなら、まだヒールできますから！"],
                            summer_beach_costume_shrunk: ["わわっ、水着のまま小さくなっちゃいました…！なんだか、お人形さんみたいです…！", "この格好で小さいと、波にさらわれちゃいそうですぅ…！"],
                            summer_beach_costume_stripped: ["ひゃあああっ！？水着まで取られちゃうなんて…！もう、何もありません…！", "ふぇぇ…！だ、誰かタオルを…！うぅ、恥ずかしいですぅ…！"],
                            summer_beach_costume_grown: ["わわっ、水着のまま大きくなっちゃいました！なんだか、モデルさんみたいで恥ずかしいです…！", "この格好で大きいと、なんだかすごく目立ちますね…！"],

                            summer_onsen_costume: ["この格好、温泉みたいで落ち着きますね…。いつでもお背中、流しますよ！", "ふふっ、なんだかみんなで温泉旅行に来たみたいで楽しいです！", "タオル一枚だと、ちょっと動きにくいですけど…頑張ります！"],
                            summer_onsen_costume_lowHp: ["きゃっ…！タオルがはだけちゃいそうです…！", "だ、大丈夫です！これくらい、平気ですから…！"],
                            summer_onsen_costume_shrunk: ["わわっ、タオルのまま小さくなっちゃいました…！これじゃあ、タオルに埋もれちゃいますぅ…！", "この格好で小さいと、湯船で溺れちゃいそうです…！"],
                            summer_onsen_costume_stripped: ["ひゃあああっ！？タオルまで取られちゃうなんて…！もう、隠すものが何も…！", "ふぇぇ…！み、見ないでくださいぃ…！うぅ…！"],
                            summer_onsen_costume_grown: ["わわっ、タオルのまま大きくなっちゃいました！なんだか、お相撲さんみたいです…！", "この格好で大きいと、タオルがはだけちゃいそうで、すごく心配です…！"],
                            liberated_beach: ["太陽の光が、私のすべてを照らしてくれます…！なんだか、女神様になったみたいです…！", "この格好なら、もっとたくさんの人を癒せる気がします！えへへ！"],
                            liberated_onsen: ["温泉の湯気が、私を優しく包んでくれます…。もう、何も恥ずかしくなんてありません…。", "このまま、自然と一つになりたいです…。ふふっ。"],
                        },
                        summer_all_tiny_play: [{
                            chars: ['リリカ', 'ユイ'],
                            lines: ["ユイちゃん、ちっちゃいね。リリカの指の上で踊れちゃいそう。", "リリカさんこそ、お人形さんみたいで可愛いです。"]
                        }, {
                            chars: ['ミコ', 'リリィ'],
                            lines: ["リリィちゃん、アリさんとおんなじサイズだね！", "ミコちゃんもね。二人でいれば、敵にも見つからないかも！"]
                        }],
                        summer_all_grown_play: [{
                            chars: ['リリカ', 'ユイ'],
                            lines: ["ユイちゃん、おっきいね！なんだか、頼もしいな…。", "リリカさんこそ、モデルさんみたいで素敵です…！"]
                        }, {
                            chars: ['ミコ', 'リリィ'],
                            lines: ["リリィちゃん、巨人さんみたい！かっこいい！", "ミコちゃんもね！二人でなら、どんな敵も倒せそうだ！"]
                        }, {
                            chars: ['リリカ', 'リリィ'],
                            lines: ["リリィちゃん、見下ろされるのって、なんだかドキドキしちゃうね…", "ふふっ、リリカちゃんも可愛いよ。もっと大きくしてあげようか？"]
                        }, {
                            chars: ['ユイ', 'ミコ'],
                            lines: ["ミコちゃん、大きくて、なんだか安心します…。", "ユイちゃんもだよ！ぎゅーってしたくなっちゃう！"]
                        }],
                        // サマータイム・スペシャルライブ！専用掛け合い
                        summer_beach_pair: [{
                            chars: ['リリカ', 'ユイ'],
                            lines: ["見てみて、ユイちゃん！この貝殻、すっごく綺麗！", "本当ですね、リリカさん！まるで宝石みたいです！"]
                        }, {
                            chars: ['ミコ', 'リリィ'],
                            lines: ["リリィちゃん、見て！砂でモコ作ったんだ！", "わー、上手だね！じゃあ私は、その隣におっきなゴーレムくんを作ろっかな！"]
                        }, {
                            chars: ['リリカ', 'ミコ'],
                            lines: ["ミコちゃん、あそこのかき氷屋さん、どっちが早く着くか競争だよ！", "わーい！負けないぞー！モコ、応援しててね！"]
                        }, {
                            chars: ['ユイ', 'リリィ'],
                            lines: ["リリィさん、日差しが強いので、これを…。日焼け止めです。", "ありがとう、ユイちゃん！気が利くね！一緒に塗ろっか！"]
                        }, {
                            chars: ['リリカ', 'リリィ'],
                            lines: ["ねえねえリリィちゃん、あっちの岩場、探検してみない？お宝があるかも！", "いいね！冒険の予感！よーし、どっちが先に見つけるか勝負だ！"]
                        }, {
                            chars: ['ユイ', 'ミコ'],
                            lines: ["ミコちゃん、あまり遠くへ行くと危ないですよ。波にさらわれたら大変です。", "はーい！大丈夫だよ、ユイちゃん！モコがちゃんと見ててくれるもん！"]
                        }, {
                            chars: ['リリカ', 'ユイ'],
                            lines: ["砂のお城、どっちが大きいの作れるか勝負だよ、ユイちゃん！", "ふふ、望むところです！私のお城には、教会も作りますから！"]
                        }, {
                            chars: ['ミコ', 'リリィ'],
                            lines: ["リリィちゃん、見て！ヒトデさんがいたよ！お星さまみたい！", "本当だ、かわいいね！でも、ちゃんとお海に帰してあげようね。"]
                        }, ],
                        summer_onsen_pair: [{
                            chars: ['リリカ', 'ユイ'],
                            lines: ["やっぱりライブの後は温泉だよねー！極楽、極楽！", "ふふ、リリカさん、おじさんみたいですよ。でも、気持ちいいですね。"]
                        }, {
                            chars: ['ミコ', 'リリィ'],
                            lines: ["わーい、広いお風呂！リリィちゃん、向こうまで競争だよ！", "こらこら、ミコちゃん。温泉では静かに入るんだよ。…まあ、私もちょっとだけなら…。"]
                        }, {
                            chars: ['リリカ', 'ミコ'],
                            lines: ["ミコちゃん、見て！お空にお星さまがいっぱいだよ！", "本当だー！キラキラしてて、お砂糖みたいだね！"]
                        }, {
                            chars: ['ユイ', 'リリィ'],
                            lines: ["リリィさん、少しのぼせてしまったかもしれません…。少し休みますね。", "大丈夫？無理しないで。はい、お水。ゆっくり飲んでね。"]
                        }, {
                            chars: ['リリカ', 'リリィ'],
                            lines: ["ふぅ～、極楽極楽…。ねえリリィちゃん、今度みんなで温泉旅行もいいね！", "さんせーい！美味しいものいっぱい食べて、また温泉入って…最高だね！"]
                        }, {
                            chars: ['ユイ', 'ミコ'],
                            lines: ["ミコちゃん、お背中流しましょうか？", "ほんと！？ありがとう、ユイちゃん！じゃあミコも、ユイちゃんの背中ごしごししてあげる！"]
                        }, ],
                        summer_beach_stripped_pair: [{
                            chars: ['リリカ', 'ユイ'],
                            lines: ["きゃっ！ユイちゃんも！？こ、これは…真夏のセクシーハプニングって感じ！？", "ふぇぇ…！リリカさんまで…！もう、恥ずかしくて砂に埋まりたいですぅ…！"]
                        }, {
                            chars: ['ミコ', 'リリィ'],
                            lines: ["わわっ！リリィちゃんも水着が…！", "ミコちゃんこそ！…まあ、こうなったらビーチのマーメイドってことで、どう？"]
                        }, {
                            chars: ['リリカ', 'ミコ'],
                            lines: ["ミコちゃんも大胆だねー！もう、二人でアイドルユニット組んじゃう？", "ええっ！？恥ずかしいけど…モコが見てるから、頑張る…！"]
                        }, {
                            chars: ['ユイ', 'リリィ'],
                            lines: ["リリィさんまで…！もう、どうしたら…！", "大丈夫だって、ユイちゃん。誰も見てない、見てない！…たぶん。"]
                        }, ],
                        summer_onsen_stripped_pair: [{
                            chars: ['リリカ', 'ユイ'],
                            lines: ["きゃっ！ユイちゃんも！？こ、これは…禁断のセクシーデュエットって感じ！？", "ふぇぇ…！リリカさんまで…！もう、恥ずかしくてお湯に沈んじゃいそうですぅ…！"]
                        }, {
                            chars: ['ミコ', 'リリィ'],
                            lines: ["わわっ！リリィちゃんもタオルが…！", "ミコちゃんこそ！…まあ、こうなったら温泉の女神様ってことで、どう？"]
                        }, {
                            chars: ['リリカ', 'リリィ'],
                            lines: ["リリィちゃんもやっちゃったんだ！ふふ、私たち、気が合うね！", "もー、リリカちゃんは楽しそうだね！…まあ、私もだけど！"]
                        }, {
                            chars: ['ユイ', 'ミコ'],
                            lines: ["ミコちゃんまで…！だ、だめです！ちゃんと隠さないと…！", "ユイちゃん、顔まっかだよ？温泉のせいかな？"]
                        }, ],
                        summer_beach_liberated_pair: [{
                            chars: ['リリカ', 'ユイ'],
                            lines: ["ユイちゃん、見てみて！もう何も怖くないよ！これぞ真のアイドルの姿！", "は、はいぃ…！リリカさんがそう言うなら…！私も、覚悟を決めます！"]
                        }, {
                            chars: ['ミコ', 'リリィ'],
                            lines: ["リリィちゃん！ミコね、なんだか無敵な気分だよ！", "ふふ、わかるよミコちゃん！私たち、太陽と友達になったみたいだね！"]
                        }, {
                            chars: ['リリカ', 'ミコ'],
                            lines: ["ミコちゃん、このままステージに立っちゃう！？伝説の始まりだよ！", "うん！モコも賛成してる！伝説のライブ、やっちゃおう！"]
                        }, {
                            chars: ['ユイ', 'リリィ'],
                            lines: ["リリィさん…！もう、怖いものなんてありませんね！", "その意気だよ、ユイちゃん！私たち、生まれ変わったんだ！"]
                        }, ],
                        summer_onsen_liberated_pair: [{
                            chars: ['リリカ', 'ユイ'],
                            lines: ["ふふーん、ユイちゃん。もうタオルなんて野暮なもの、いらないよね？", "リリカさん…！もう、どこまで大胆なんですか…！でも、なんだかスッキリしますね！"]
                        }, {
                            chars: ['ミコ', 'リリィ'],
                            lines: ["リリィちゃん、お空の星が全部見えるよ！すっごく綺麗！", "本当だね、ミコちゃん。心も体も、ぜーんぶ解き放たれたみたい。"]
                        }, {
                            chars: ['リリカ', 'リリィ'],
                            lines: ["このまま月光浴びてたら、女神様になっちゃうかも！", "いいね！月の女神リリカと星の女神リリィって感じ？最強じゃん！"]
                        }, ],
                        summer_beach_all_liberated: [{
                            chars: ['リリカ', 'ユイ', 'ミコ', 'リリィ'],
                            lines: ["みんなー！見て！私たち、ビーチの女神になっちゃった！", "め、女神様ですか！？そ、そんな、大げさですよぉ…！", "わーい！女神様ごっこだ！ミコは風の女神！", "じゃあ私は大地の女神かな？ふふ、なんだか楽しくなってきたね！"]
                        }, {
                            chars: ['リリィ', 'ミコ', 'ユイ', 'リリカ'],
                            lines: ["もう何も隠すものなんてないね！これぞ究極の開放感！", "うん！鳥さんになった気分だよ！", "は、恥ずかしいですけど…でも、なんだか清々しいです！", "でしょー！これが本当の私たち！さあ、伝説の始まりだよ！"]
                        }, ],
                        summer_onsen_all_liberated: [{
                            chars: ['リリカ', 'ユイ', 'ミコ', 'リリィ'],
                            lines: ["見て、みんな！私たち、温泉の妖精さんだよ！", "ふぇぇ…妖精さんですか…？なんだか、恥ずかしいような、でも…！", "ミコは湯気の妖精！ふわふわだよー！", "いいね！じゃあ私は岩の妖精！…って、それじゃ可愛くないか！あはは！"]
                        }, {
                            chars: ['ユイ', 'リリィ', 'ミコ', 'リリカ'],
                            lines: ["皆さん…もう、何も言うことはありません…。", "ふふ、ユイちゃんが一番楽しんでるんじゃない？", "ミコね、今ならお魚さんとお話しできる気がする！", "わかるー！私たち、自然と一体になったんだよ！"]
                        }, ],
                        summer_beach_party: [{
                            chars: ['リリカ', 'ユイ', 'ミコ', 'リリィ'],
                            lines: ["みんなー！ビーチライブ、最高に盛り上がったね！", "はい！お客さんの笑顔、キラキラしてました！", "ミコもね、モコと一緒にいっぱい応援したんだよ！", "うん、最高のステージだったね！この後の打ち上げも楽しみ！"]
                        }, {
                            chars: ['リリィ', 'ミコ', 'ユイ', 'リリカ'],
                            lines: ["見てみて、すっごく大きなスイカ！みんなでスイカ割りしようよ！", "わーい！ミコ、一番に割るー！", "ふふ、ミコちゃん、棒はそっちじゃありませんよ。", "もー！ユイちゃんが一番上手だったりして！"]
                        }, {
                            chars: ['ミコ', 'リリカ', 'ユイ', 'リリィ'],
                            lines: ["見て！あのおっきな雲、ソフトクリームみたい！", "ほんとだ！あっちのはクジラさんみたいだね！", "ふふ、皆さん、想像力が豊かですね。", "平和だねぇ。こういう時間も、冒険の醍醐味だよね。"]
                        }, ],
                        summer_onsen_party: [{
                            chars: ['リリカ', 'ユイ', 'ミコ', 'リリィ'],
                            lines: ["温泉、最高ー！ライブの疲れが全部吹っ飛ぶね！", "本当ですね…。お肌もつるつるになる気がします。", "ミコ、もうちょっとで泳いじゃうところだったよ！危ない、危ない！", "ふふ、みんなでのぼせないように気をつけないとね。"]
                        }, {
                            chars: ['ユイ', 'リリィ', 'リリカ', 'ミコ'],
                            lines: ["温泉まんじゅう、買ってきました。皆さんでいただきましょう。", "わーい、ありがとうユイちゃん！美味しそう！", "温泉の後に食べるおまんじゅうは格別だよねー！", "モコにもちょうだい！…って、ミコが言ってるよ！"]
                        }, {
                            chars: ['リリィ', 'ユイ', 'リリカ', 'ミコ'],
                            lines: ["ねえ、みんなで恋バナとかしない？こういう時の定番でしょ！", "こ、恋バナですか！？そ、そんな、私には…！", "いいねー！じゃあまずリリィちゃんから！", "えーっ！？ミコからがいい！"]
                        }, ],
                        // ベアトリス (アルケミスト): 知的、大人、丁寧語。
                        'ベアトリス': {
                            default: ["ふむ、このダンジョンの構造、興味深いですね。", "皆さん、消耗品は足りていますか？私のほうでいくつか合成できますが。", "この空気の淀み…錬金術の素材になりそうな気配がしますわ。", "アカリさん、あまり突っ走ると危険ですよ。", "ヒカリさん、その魔導書、少し見せてもらっても？", "シズカさん、その大盾、素晴らしいですね。どんな金属で？", "ユイさん、いつも助かりますわ。ありがとう。", "リリカさん、その舞、戦場を和ませますわね。", "サクヤさん、その剣筋、見事ですわ。", "シャオメイさん、その拳、岩をも砕きそうですね。"],
                            lowHp: ["あら…少し計算が狂いましたわね。", "大丈夫です。まだ研究の途中ですから。", "この程度の傷、ポーションでどうにでもなりますわ。"],
                            allyLowHp: ["{name}さん、ご無理なさらず。私が援護しますわ。", "どなたか、{name}さんの回復を。"],
                            shrunk: ["あらあら、小さくなってしまいましたわ。実験動物の気持ちが少しわかりますわね。", "このサイズですと、試薬の調合が難しいですわね。", "フラスコを運ぶのも一苦労ですわ。"],
                            shrunk_100: ["あら、視界が随分と低くなりましたわね。実験台のフラスコを見上げるようですわ。"],
                            shrunk_70: ["この身長ですと、本棚の高い場所にある文献に手が届きませんわね。"],
                            shrunk_50: ["半分ですか。なるほど、世界のスケール感が全く違って見えますわね。興味深い。"],
                            shrunk_30: ["ここまで小さいと、錬金術の釜をかき混ぜるのも一苦労ですわ。"],
                            shrunk_10: ["ふふ、まるで小人のようですわね。敵から見れば、ただの虫けらにしか見えないかもしれませんわ。"],
                            shrunk_1: ["…フラスコの中の微生物と、同じ視点になりましたわ。これは新発見ですわね。"],
                            stripped: ["…これは、非科学的な現象ですわね。", "…合理的ではありませんわ。早く服を見つけませんと。", "…見てはいけませんわよ。"],
                            allyShrunk: ["{name}さん、可愛らしいサイズになりましたわね。", "あら、{name}さん。そこにいらっしゃいましたの。"],
                            grown: ["ふふ、大きくなりましたわ。これで高い場所の素材も採集できますわね。", "見晴らしが良くて、戦況の分析がしやすいですわ。"],
                            grown_max: ["あらあら、ついに限界値ですか。素晴らしいデータが取れましたわ。", "これ以上の成長は、現在の科学では説明できませんわね。"],
                            allyGrown: ["あら、{name}さん。大きくなられて。頼もしいですわね。", "{name}さん、その巨体、敵の的になりやすいのでご注意を。"],
                            allyNew: ["新しい仲間…{name}さん、ですわね。あなたの能力、見せていただきましょう。"],
                            stripped_shrunk: ["…これは、想定外の事態ですわ。小さくて、服もないなんて。", "…隠れる場所を探しませんと。このままでは実験どころではありませんわ。"],
                            solo_stripped_tiny: ["あらあら…これは、非常に非合理的な状況ですわね。", "（フラスコの後ろに隠れて、体を丸めている）", "この状況、錬金術でどうにかならないかしら…？", "…誰か来たら、ネズミのふりをしましょうか。"],
                            dollhouse_explore_giant: ["ふむ、この家の建材、興味深いですわね。分析の価値がありそうですわ。", "失礼しますわよ。何か珍しい素材はないかしら…？", "このサイズ感…ドールハウスの設計にも応用できそうですわね。"],
                            cracked_rock_tiny: ["ふむ、この亀裂…内部の鉱石サンプルを採取する好機ですわ。", "このサイズなら、岩の内部構造を直接観察できますわね。行ってまいります。", "何か珍しい鉱物が隠されているかもしれませんわ。"],
                            liberated: ["ふふ、これぞ機能美の極致ですわ。無駄な装飾を排した、完璧なフォルム…。", "私の知性も、肉体も、全てを白日の下に晒しましょう。さあ、観察なさい。", "この方が、薬品の調合もスムーズですわ。合理的です。"],
                            dollhouse_explore: ["ふむ、この家の建材、興味深いですわね。分析の価値がありそうですわ。", "失礼しますわよ。何か珍しい素材はないかしら…？", "このサイズ感…ドールハウスの設計にも応用できそうですわね。"],
                            cracked_rock_break: ["この岩の組成なら…この薬品で脆くなるはずですわ。ほら。", "ふふ、力だけが全てではありませんのよ。", "錬金術にかかれば、このような障害、無いに等しいですわ。"],
                            fairy_shrunk: ["ふふ、この視点、新しい発見がありそうですわ。", "世界の構成要素を、よりミクロな視点で観察できる…素晴らしいですわ！", "この体、空気抵抗が最小限ですわね。移動が効率的です。"],
                            allyStripped_shrunk: ["あらあら、{name}さん。それは大変なことになりましたわね。", "私が何か羽織るものを作って差し上げますわ。少しお待ちになって。"],
                            stripped_pair: ["{name}さんもですの？…これは、非常に気まずい状況ですわね。", "お互い、見なかったことにしましょう。ええ、それが合理的ですわ。"],
                            allyStripped: ["{name}さん、大丈夫ですの？私のコートをお使いになりますか？", "…敵の悪趣味には、付き合いきれませんわね。"],
                            high_mouse_hole_giant: ["ふふ、私の肩をお貸ししますわ。さあ、どうぞ。", "この高さですと、肩車が最も合理的な手段ですわね。"],
                            high_mouse_hole_tiny: ["これは興味深い構造ですわね。内部を調査してまいります。", "失礼しますわ。何か面白いサンプルが見つかると良いのですが。"],
                            high_mouse_hole_all_tiny: ["あらあら、これは物理的に不可能ですわね。", "全員で縦に並んでも、この高さには届きませんわ。計算するまでもありません。", "飛行能力を持つ個体がいないのが悔やまれますわね。", "諦めましょう。時間の無駄ですわ。"],
                            shame_pillory: ["あらあら…これは、非科学的な拘束ですわね。", "…この粘液、サンプルとして採取しておきたいくらいですわ。", "（冷静に状況を分析しようとしているが、顔が少し赤い）"],
                            shrunk_pair: ["ふふ、{name}さんも小さいですのね。なんだか、小動物のようで可愛らしいですわ。", "二人でいれば、敵の死角を突くのも容易いですわね。"],
                            pair_アカリ: ["アカリさん、その剣、錬金術で強化できそうですわね。", "あなたのそのエネルギー、どこから湧いてくるのですか？興味深いですわ。", "あまり無鉄砲な行動は感心しませんわよ。もう少し、合理的に。"],
                            pair_ヒカリ: ["ヒカリさん、その魔術、私の錬金術とは異なる体系ですわね。議論の価値がありそうですわ。", "静かな方ですのね。研究に集中できそうで、好感が持てますわ。"],
                            pair_シズカ: ["シズカさん、その盾、素晴らしい硬度ですわね。どんな合金ですの？", "あなたの守りがあれば、安心して研究に打ち込めますわ。"],
                            pair_ユイ: ["ユイさん、いつもありがとう。あなたの回復魔法、非科学的ですが効果は絶大ですわね。", "その優しさ、貴重なサンプルですわ。"],
                            pair_リリカ: ["リリカさん、その舞、人々の精神に作用する…興味深いですわ。", "あなたの発するエネルギー、測定してみたいですわね。"],
                            pair_サクヤ: ["サクヤさん、その剣技、物理法則を超越していますわね。素晴らしい。", "その精神集中、解明したいものですわ。"],
                            pair_シャオメイ: ["シャオメイさん、そのパワーの源は、その食欲ですの？", "あなたの身体能力、研究対象として非常に魅力的ですわ。"],
                            pair_エリザ: ["エリザさん、医学と錬金術、通じるものがありますわね。今度、ぜひ議論を。", "あなたの薬、成分を分析させていただけませんこと？"],
                            pair_ルナ: ["ルナさん、その運、確率論で説明できますの？", "ギャンブルは非合理的ですが…そのスリル、少しだけ理解できますわ。"],
                            pair_クロエ: ["クロエさん、その鎌、魂を刈る…？非科学的ですが、非常に興味深いですわ。", "あなた自身も、研究対象として魅力的ですわね。"],
                            pair_ミコ: ["ミコさん、その召喚術、異次元の生物を呼び出しているのですの？", "そのモコという生物、サンプルを少しいただけませんこと？"],
                            pair_レンカ: ["レンカさん、死霊術…生命の理を冒涜する行為。ですが、その力、認めざるを得ませんわ。", "その魂、どこからエネルギーを得ているのですの？"],
                            pair_イオリ: ["イオリさん、先輩でしたのね。その守り、錬金術の防壁とは違う原理のようですわ。", "その病、研究すれば治療法が見つかるかもしれませんわ。"],
                            pair_コハル: ["コハルさん、あなたの行動は、因果律を無視しているようですわね。観測対象として最適ですわ。", "次は何が起こるのか…楽しみですわ。"],
                            pair_オリビア: ["オリビアさん、その祈り、高エネルギー反応を観測しましたわ。素晴らしい。", "聖なる力…科学で解明できるかしら。"],
                            pair_レンカ: ["レンカさん、死霊術…生命の理を冒涜する行為。ですが、その力、認めざるを得ませんわ。", "その魂、どこからエネルギーを得ているのですの？"],
                            pair_セレスティア: ["聖女…その聖なる力の源、非常に興味深いですわ。少し調査させていただけませんこと？", "あなたのその力、科学では説明できない現象ですわね。素晴らしい研究対象ですわ。"],
                            pair_イオリ: ["イオリさん、先輩でしたのね。その守り、錬金術の防壁とは違う原理のようですわ。", "その病、研究すれば治療法が見つかるかもしれませんわ。"],
                            pair_コハル: ["コハルさん、あなたの行動は、因果律を無視しているようですわね。観測対象として最適ですわ。", "次は何が起こるのか…楽しみですわ。"],
                            pair_オリビア: ["オリビアさん、その祈り、高エネルギー反応を観測しましたわ。素晴らしい。", "聖なる力…科学で解明できるかしら。"],
                        },
                        // リリカ (ダンサー): 明るい、アイドル、ファンサービス精神旺盛。
                        'リリカ': {
                            default: ["みんなー！リリカのステージ、始まるよー！", "このダンジョンも、リリカのステージにしちゃえばいいんだ！", "みんなの応援がリリカの力になるから、よろしくね！", "アカリちゃん、元気いっぱいだね！リリカも負けないよ！", "ヒカリちゃん、クールだね！そういうのもファンの心を掴むんだよね！", "シズカさん、頼りになります！リリカの最高のSPさんですね！", "ユイちゃん、いつもありがとう！リリカの専属ヒーラーさんだね！", "ベアトリスさん、知的で素敵！リリカに新しい衣装のデザイン、お願いしちゃおうかな？", "サクヤちゃん、その真剣な眼差し、キュンとしちゃう！", "シャオメイちゃん、ちっちゃくて可愛いのにパワフル！ギャップ萌えってやつだね！"],
                            lowHp: ["きゃっ！ちょっとステージから足を踏み外しちゃった！", "大丈夫！これくらいじゃ、リリカのパフォーマンスは止まらないよ！", "今の攻撃、ちょっと痛かったかも…。でも、笑顔は絶やさないよ！"],
                            allyLowHp: ["{name}ちゃん、大丈夫！？無理しないで、リリカがヘイトを集めるから！", "みんな！{name}ちゃんがピンチだよ！応援してあげて！"],
                            shrunk: ["あれれ？リリカ、ちっちゃくなっちゃった！ミニリリカも可愛いって言ってくれるかな？", "このサイズなら、妖精さんの役もできちゃうかも！", "マイクを持つのが大変！でも、歌声は変わらないよ！"],
                            shrunk_100: ["ステージがすっごく大きく見える！でも、リリカのパフォーマンスは小さくならないよ！"],
                            shrunk_70: ["この身長なら、新しいダンスの振り付けも思いついちゃうかも！ちびっこステップ！"],
                            shrunk_50: ["ミニリリカだよー！みんな、ちゃんと見えてるー？"],
                            shrunk_30: ["マイクスタンドが高すぎるよぉ！誰か、リリカ専用のミニマイク持ってきてー！"],
                            shrunk_10: ["もう、みんなの靴の上で踊れちゃいそう！ポケットに入れてくれたら、そこでライブしちゃうよ！"],
                            shrunk_1: ["リリカ、ステージから落っこちたら見つからないかも！みんな、絶対キャッチしてね！"],
                            stripped: ["きゃー！みんなのエッチ！見ちゃダメだよー！", "こ、こんな姿、ファンのみんなには見せられないよぉ…！", "でも…これも新しいコンセプトってことにすれば…アリかも？"],
                            allyShrunk: ["わー、{name}ちゃんがミニサイズに！可愛いー！", "{name}ちゃん、リリカのポケットに入っちゃう？"],
                            grown: ["わーい！大きくなったよ！これならステージがもっと映えるね！", "みんなー！大きくなったリリカも、ちゃーんと見ててね！"],
                            grown_max: ["見てみてー！リリカ、こんなにおっきくなっちゃった！もう、これ以上は無理みたい！", "これがリリカの最大級のパフォーマンスだよ！"],
                            allyGrown: ["わぁ、{name}ちゃん、おっきーい！見上げちゃうね！", "{name}ちゃん、そのままだと天井で頭ぶつけちゃうよ！気をつけて！"],
                            allyNew: ["新しいファン…じゃなくて、仲間だね！{name}ちゃん、よろしくね！リリカが最高のステージを見せてあげる！"],
                            stripped_shrunk: ["ひゃあ！ちっちゃい上にこの格好は、さすがにマズいよぉ！", "こ、これじゃあ、ただの恥ずかしい子だよぉ…！早く服を見つけなきゃ！"],
                            solo_stripped_tiny: ["ひゃーん！こんな姿、誰にも見せられないよぉ！", "（きのこの傘の下に隠れて、膝を抱えている）", "リリカのアイドル生命、終わっちゃうかも…！", "でも…これも新しいキャラ付けってことにすれば…！ううん、無理！"],
                            dollhouse_explore_giant: ["きゃー！巨人さんのお家！？リリカの新しいステージにぴったりじゃない？", "おじゃましまーす！ここでゲリラライブしちゃうよー！", "見てみて！このお家、リリカのドールハウスみたい！…って、大きすぎ！"],
                            cracked_rock_tiny: ["きゃー！秘密の通路みたい！リリカが探検してきちゃうよ！", "この隙間の向こうに、キラキラのお宝がある予感！", "ミニミニ探検隊、出動！みんな、応援しててね！"],
                            liberated: ["みんなー！見てー！これがリリカの最終形態だよ！", "もう何も隠さない！リリカの全部、受け止めて！", "ふふん、これぞ究極のファンサービスってね！"],
                            dollhouse_explore: ["きゃー！可愛いお家！リリカの新しいステージにぴったりじゃない？", "おじゃましまーす！ここでゲリラライブしちゃうよー！", "見てみて！このお家、リリカのドールハウスみたい！"],
                            cracked_rock_break: ["みんなー！リリカのパワフルなステージ、見ててね！せーのっ！", "こんな岩、リリカの情熱で溶かしちゃう！", "これでリリカのステージが広くなったね！"],
                            fairy_shrunk: ["ミニミニリリカだよー！みんな、ちゃんと見ててね！", "このサイズなら、マスコットとしてデビューできちゃうかも！", "ポケットに入れてくれたら、そこでスペシャルライブしちゃうよ！"],
                            allyStripped_shrunk: ["{name}ちゃん、大丈夫！？リリカのステージ衣装、貸してあげる！ちょっと小さいかもだけど！", "なんてことするの！{name}ちゃんに！絶対許さないんだから！"],
                            stripped_pair: ["え、{name}ちゃんも！？こ、これは…禁断のデュエットって感じ！？", "二人でこうしてたら、逆に芸術っぽく見えないかな？…見えないかぁ。"],
                            allyStripped: ["{name}ちゃん、大変！リリカのタオル、使って！", "もう！敵のセンス、サイテー！リリカがステージから退場させてあげる！"],
                            high_mouse_hole_giant: ["はーい、リリカのスペシャルリフトだよー！最高の景色、楽しんでってね！", "リリカがおっきくしてあげる！しっかり掴まっててね、未来のスター！"],
                            high_mouse_hole_tiny: ["きゃー、高い！まるでステージのセットみたい！お宝、見つけてくるから応援しててね！", "任せて！リリカがキラキラのお宝、ゲットしてきちゃうから！"],
                            high_mouse_hole_all_tiny: ["うー、あんな高いところ、全然届かないよぉ！", "みんなでジャンプしてもダメだね…。悔しい！", "リリカの歌声で、お宝をこっちに呼び寄せられないかな？", "あきらめないで！きっと何か方法があるはず！…ないかなぁ。"],
                            shame_pillory: ["きゃー！何これ！こんなの、ステージの演出にないよぉ！", "だ、だめ！こんな姿、ファンのみんなには見せられない…！", "（ぷるぷる…）でも、これも新しいコンセプトってことにすれば…アリかも…？"],
                            shrunk_pair: ["{name}ちゃんも小さいんだね！二人で『ちびっこアイドルユニット』結成しちゃう？", "二人でいれば怖くないね！手、繋いでいこ！"],
                            pair_アカリ: ["アカリちゃん、元気いっぱいだね！リリカも負けてられないな！", "その剣、ステージの小道具にどうかな？キラキラしてて映えそう！"],
                            pair_ヒカリ: ["ヒカリちゃん、クールビューティーだね！そういうのもファンの心を掴むんだよ！", "たまには笑ってよー！ね？"],
                            pair_シズカ: ["シズカさん、頼りになります！リリカの最高のSPさんですね！", "シズカさんがいれば、どんなステージでも安心だよ！"],
                            pair_ユイ: ["ユイちゃん、いつも応援ありがとう！リリカの一番のファンだね！", "サイン？もちろんいいよ！どこに書こうかな？", "ユイちゃんがいると、リリカ、安心してステージに立てるんだ！"],
                            pair_ベアトリス: ["ベアトリスさん、知的で素敵！リリカに新しい衣装のデザイン、お願いしちゃおうかな？", "その薬、飲むとキラキラになれる薬？"],
                            pair_サクヤ: ["サクヤちゃん、その真剣な眼差し、キュンとしちゃう！リリカのファンにならない？", "その刀、マイクみたいに持って歌ってみない？"],
                            pair_シャオメイ: ["シャオメイちゃん、ちっちゃくて可愛いのにパワフル！ギャップ萌えってやつだね！", "今度一緒にダンスの練習しない？"],
                            pair_エリザ: ["エリザさん、スタイル抜群だね！リリカも負けてられないな！", "その注射、美容注射だったりする？"],
                            pair_ルナ: ["ルナちゃん、勝負好きだね！じゃあ、どっちがファンを多く集められるか勝負しよ！", "リリカのライブ、賭けの対象にしてみる？絶対勝つよ！"],
                            pair_クロエ: ["クロエちゃん、ミステリアスで可愛い！新しいアイドルのコンセプトにどうかな？", "もっと声聞かせてよー！"],
                            pair_ミコ: ["ミコちゃんも可愛いね！モコちゃんと一緒にユニット組まない？", "召喚するとき、決めポーズとか考えようよ！"],
                            pair_レンカ: ["レンカさん、大人っぽくてセクシーだね！リリカも見習わなきゃ！", "その魔法、ステージ演出に使えそう！"],
                            pair_イオリ: ["イオリ先輩！小さくても頼りになるなんて、ギャップが素敵です！", "先輩のことも、リリカが応援しちゃいます！"],
                            pair_コハル: ["コハルちゃん、見ててハラハラするけど、そこがまた可愛い！", "失敗しても、リリカがアンコールで盛り上げるから大丈夫だよ！"],
                            pair_オリビア: ["オリビアちゃん、その清楚な感じ、王道アイドルって感じだね！", "その祈りのポーズ、リリカも今度取り入れてみようかな！"],
                            // サマータイム・スペシャルライブ！
                            beach_liberation_prompt: ["ふふっ、このビーチの熱気、リリカを大胆にさせちゃうみたい！ねえ、もっとアツくならない？"],
                            beach_liberation_stop: ["えー、つまんないの。まあ、ファンの言うことなら聞いてあげよっかな！"],
                            onsen_liberation_prompt: ["この温泉、最高に気持ちいい！なんだか、心も体もぜーんぶ解き放ちたくなっちゃうなー！"],
                            onsen_liberation_stop: ["ちぇっ、せっかくのチャンスなのに。まあ、また今度ね！"],

                            summer_beach: [
                                "見てみて、この水着！リリカのために作られたみたいでしょ！",
                                "ビーチでのライブなんて最高！みんな、盛り上がってるー？",
                                "砂浜でダンスの練習！これもトレーニングだよね！",
                                "ユイちゃん、日焼け止めちゃんと塗った？リリカが塗ってあげようか？"
                            ],
                            onsen_towel_trouble: ["きゃー！ちょっと、タオルが…！で、でも、これもファンサービスってことで許して！"],
                            summer_onsen: ["温泉、気持ちい～！ライブの疲れが吹飛ぶね！", "このタオル、ちょっと危なくない！？でも、これもファンサービスってことで！", "温泉といえば卓球だよね！負けないよー！", "ミコちゃん、温泉でゴーレム召喚したらお湯が溢れちゃうよ！"],
                            giant_among_tinies: ["みんな、ちっちゃくて可愛い！リリカがおっきく守ってあげるね！", "ミニミニ軍団を引き連れる巨大アイドル、リリカだよー！みんな、ちゃんとついてきてね！"],
                            pair_レンカ: ["レンカさん、大人っぽくてセクシーだね！リリカも見習わなきゃ！", "その魔法、ステージ演出に使えそう！"],
                            pair_セレスティア: ["セレスティアちゃん、ミステリアスで素敵！新しいアイドルのコンセプトになりそう！", "リリカの歌で、セレスティアちゃんを応援しちゃうからね！"],
                            pair_イオリ: ["イオリ先輩！小さくても頼りになるなんて、ギャップが素敵です！", "先輩のことも、リリカが応援しちゃいます！"],
                            pair_コハル: ["コハルちゃん、見ててハラハラするけど、そこがまた可愛い！", "失敗しても、リリカがアンコールで盛り上げるから大丈夫だよ！"],
                            pair_オリビア: ["オリビアちゃん、その清楚な感じ、王道アイドルって感じだね！", "その祈りのポーズ、リリカも今度取り入れてみようかな！"],
                            // 特別衣装時のセリフ
                            summer_beach_costume: ["この水着、どう？似合ってる？ダンジョンの中でも、リリカはいつでもアイドルだからね！", "ビーチ気分でテンション上がっちゃう！このままライブ始めちゃおうかな！", "水着だと、ダンスもいつもよりキレッキレになっちゃうかも！"],
                            summer_beach_costume_lowHp: ["きゃっ！ちょっとはしゃぎすぎちゃった！でも、これくらいじゃリリカのステージは終わらないよ！", "水着だと、ちょっとした傷も目立っちゃうな…。でも、ファンのみんなには笑顔を見せないと！"],
                            summer_beach_costume_shrunk: ["あれれ？水着のままちっちゃくなっちゃった！ミニミニアイドル・リリカだよ！", "このサイズなら、砂のお城に住めちゃうかも！"],
                            summer_beach_costume_stripped: ["きゃー！水着まで取られちゃうなんて！これはさすがに放送事故だよぉ！", "こ、これじゃあ、ただの恥ずかしい子だよぉ…！でも、これも新しいコンセプトってことにすれば…アリかも？"],
                            summer_beach_costume_grown: ["わーい、水着のままおっきくなったよ！これなら、ステージのどこからでもリリカのこと、見えるでしょ？", "この格好で大きいと、なんだかセクシーダイナマイトって感じ！？"],

                            summer_onsen_costume: ["タオル一枚でのステージなんて、斬新じゃない？リリカ、いつでも新しいことに挑戦しちゃうよ！", "この格好、なんだかドキドキしちゃうね！でも、これもファンサービスってことで！", "温泉気分で、しっとりしたバラードでも歌っちゃおうかな。"],
                            summer_onsen_costume_lowHp: ["きゃっ！のぼせちゃったかも…。でも、リリカのステージはまだまだ続くよ！", "タオルがはだけそうで、ちょっとヒヤヒヤする！でも、それがまたスリリングでいいよね！"],
                            summer_onsen_costume_shrunk: ["あれれ？タオルのままちっちゃくなっちゃった！これじゃあ、タオルに埋もれちゃうよぉ！", "ミニミニ温泉アイドルだよ！みんな、ちゃんと見えてるー？"],
                            summer_onsen_costume_stripped: ["きゃー！タオルまで取られちゃうなんて！これはもう、R-18指定だよぉ！", "こ、これじゃあ、ファンのみんなに合わせる顔がないよぉ…！"],
                            summer_onsen_costume_grown: ["わーい、タオルのままおっきくなったよ！これなら、どんな温泉も貸し切り状態だね！", "この格好で大きいと、なんだかセクシーすぎて、みんながのぼせちゃうかも！"],
                            liberated_beach: ["見てみて！太陽の光を浴びて、リリカ、キラキラでしょ！", "ビーチの視線は、リリカが独り占めしちゃうんだから！"],
                            liberated_onsen: ["ふふっ、温泉の湯気で、もっとセクシーに見えちゃうかも？", "このまま温泉の女神様になっちゃおうかな！"],
                        },
                        // サクヤ (サムライ): 寡黙、求道的、武士。
                        'サクヤ': {
                            default: ["…道は、まだ遠い。", "…一歩一歩、踏みしめて進むのみ。", "…油断大敵。常に、刃は心と共に。", "アカリ、その勢い、悪くない。だが、隙が多い。", "ヒカリ、魔道もまた、一つの道。興味深い。", "シズカ、その守り、まさに鉄壁。見事。", "ユイ、癒しの力、感謝する。", "ベアトリス、知もまた力。侮れない。", "リリカ、その舞、心を惑わす。…だが、悪くない。", "シャオメイ、その拳、純粋な破壊の力。"],
                            lowHp: ["…不覚。まだ、修行が足りぬ。", "…この程度の傷、誉れと思えばこそ。", "…まだ、立てる。"],
                            allyLowHp: ["…{name}、下がれ。ここは拙者が。", "…{name}を狙うか。愚かな。"],
                            shrunk: ["…体が縮もうと、我が斬撃の鋭さは変わらぬ。", "…小さき体、間合いを詰めるには好都合。", "…柄を握る手に、いつもと違う感触が。"],
                            shrunk_100: ["…刀の柄を握る感覚は変わらぬ。だが、鞘が地面を擦る。"],
                            shrunk_70: ["…間合いが、遠い。踏み込みを深くする必要がある。"],
                            shrunk_50: ["…半身か。敵の懐に潜り込むには、むしろ好都合。"],
                            shrunk_30: ["…敵の足首を狙う。それもまた、一興。"],
                            shrunk_10: ["…もはや、刃と一体。我が身、弾丸となりて敵を討つ。"],
                            shrunk_1: ["…刀の柄頭の飾りに、なれそうだ。"],
                            // サクヤは脱衣状態にならない
                            allyShrunk: ["…{name}、小さくなったな。見失わぬよう、気をつけよ。", "…その身でも、戦う覚悟はあるか、{name}。"],
                            grown: ["…体が大きい。大太刀を振るうには、丁度良い。", "…見晴らしが良い。敵の位置、把握しやすし。"],
                            grown_max: ["…これ以上は、我が器を超えている。…だが、悪くない。", "…天に、手が届きそうだ。"],
                            allyGrown: ["…{name}、巨人か。頼もしい。", "…{name}、その巨体、狭い場所では足手まといにならぬよう。"],
                            allyNew: ["…{name}と申すか。拙者はサクヤ。…腕、見せてもらうぞ。", "…新たな仲間。互いに、背中は預けられるか。"],
                            allyLiberated: ["…{name}、破廉恥な。…だが、その覚悟、悪くない。", "…無防備すぎる。敵に隙を見せるな。", "…その姿、何か意味があるのか。…まあ、よかろう。"],
                            // サクヤは脱衣状態にならない
                            cracked_rock_tiny: ["…この隙間、拙者ならば通れる。…見てくる。", "…岩の内部に、気配は無いか。確かめてくる。", "…任されよ。"],
                            dollhouse_explore_giant: ["…巨大な家。…だが、造りはしっかりしている。侮れぬ。", "…失礼する。中に、何者かの気配は…ないか。", "…静寂。茶でも一服点てたいものだ。"],
                            allyStripped: ["…{name}、破廉恥な。…これを。拙者の羽織でよければ。", "…敵の所業、武士の風上にも置けぬ。斬る。"],
                            dollhouse_explore: ["…小さな家。…だが、造りはしっかりしている。侮れぬ。", "…失礼する。中に、何者かの気配は…ないか。", "…静寂。茶でも一服点てたいものだ。"],
                            cracked_rock_break: ["…ふんっ！岩斬るも、人斬るも、同じこと。", "…道を開く。ただ、それだけのこと。", "…無心の境地にて、一閃。"],
                            high_mouse_hole_giant: ["…肩を貸す。行け。", "…拙者が足場となろう。務め、果たしてまいれ。"],
                            high_mouse_hole_tiny: ["…承知。中の様子、探ってくる。", "…任されよ。必ずや、何かを見つけてくる。"],
                            high_mouse_hole_all_tiny: ["…届かぬ。詮方なし。", "…全員で組体操でもするか？…冗談だ。", "…心頭滅却すれば、壁もまた道なり。…ならぬか。", "…無念。"],
                            fairy_shrunk: ["…我が身、刃と一体となれり。この小ささ、むしろ好都合。", "…敵の足元、がら空き。好機。", "…心の大きさは、体の大きさにはよらぬ。"],
                            shrunk_pair: ["…{name}もか。二人して、豆粒のようだな。", "…この状況、むしろ好機。二人で奇襲をかけるぞ。"],
                            pair_アカリ: ["アカリ、その勢い、悪くない。だが、隙だらけだ。", "…少しは落ち着け。"],
                            pair_ヒカリ: ["ヒカリ、その魔道…興味深い。静寂の中に、確かな力を感じる。", "…ヒカリ、お主の魔法は静かだが、強力だな。", "…互いに、多くは語らぬ。だが、それが良い。"],
                            pair_シズカ: ["シズカ、その守り、見事。背中は任せた。", "…頼りにしている。"],
                            pair_ユイ: ["ユイ、感謝する。その癒し、なければ拙者の道は絶えていた。", "…無理はするな。"],
                            pair_ベアトリス: ["ベアトリス、その知識、剣の道にも通じるか。", "…その薬、拙者には不要。"],
                            pair_リリカ: ["リリカ、その舞、心を乱す。…だが、悪くはない。", "…騒がしい。"],
                            pair_シャオメイ: ["シャオメイ、その拳、純粋な力。好ましい。", "…手合わせ願いたい。"],
                            pair_エリザ: ["エリザ、その視線、値踏みするような目は好かぬ。", "…拙者の体に、興味を持つな。"],
                            pair_ルナ: ["ルナ、勝負は運否天賦にあらず。鍛錬の先にあるもの。", "…そのサイコロ、拙者には斬れぬか。"],
                            pair_クロエ: ["クロエ、その鎌、死の匂いがする。…拙者と同じか。", "…多くを語るな。それで良い。"],
                            pair_ミコ: ["ミコ、その獣、侮れぬ気配。…面白い。", "…召喚術、か。拙者の剣とは、相容れぬ道。"],
                            pair_レンカ: ["レンカ、死者を操るか。…外道の術。だが、力は認めよう。", "…その魂、成仏させてやるのが武士の情けか。"],
                            pair_イオリ: ["イオリ、先輩か。その守り、見事。", "…その体で、よくぞ。感服する。"],
                            pair_コハル: ["コハル、お主の周りは、常に騒がしいな。", "…予測できぬ動き。…厄介だ。"],
                            pair_オリビア: ["オリビア、その祈り、邪念がない。…故に、強い。", "…感謝する。"],
                            pair_レンカ: ["レンカ、死者を操るか。…外道の術。だが、力は認めよう。", "…その魂、成仏させてやるのが武士の情けか。"],
                            pair_セレスティア: ["…その身に宿す光、迷いがない。見事なものだ。", "…その使命、拙者の剣で助太刀いたす。"],
                            pair_イオリ: ["イオリ、先輩か。その守り、見事。", "…その体で、よくぞ。感服する。"],
                            pair_コハル: ["コハル、お主の周りは、常に騒がしいな。", "…予測できぬ動き。…厄介だ。"],
                            pair_オリビア: ["オリビア、その祈り、邪念がない。…故に、強い。", "…感謝する。"],
                        },
                        // シャオメイ (モンク): 豪快、元気、食いしん坊。
                        'シャオメイ': {
                            default: ["うおー！もっと強いヤツはいないのかー！", "腹が減っては戦はできぬ、だ！終わったら肉まん食うぞ！", "オラ、わくわくしてきたぞ！", "アカリ！どっちが先に敵を倒すか競争な！", "ヒカリ！魔法ってのは便利だな！オラにはよくわからんが！", "シズカ！その盾、カッチカチだな！オラの拳でも壊せるか！？", "ユイ！回復サンキューな！これでまた暴れられる！", "ベアトリス！なんか強くなる薬、作ってくれよ！", "リリカ！お前の踊り、見てると腹が減るな！", "サクヤ！その刀、スッパスパ切れそうだな！"],
                            lowHp: ["いってぇ！今の、ちょっと効いたぞ！", "ちっ、やるじゃねえか！だが、オラはまだやれる！", "腹が減ってきた…。力が…"],
                            allyLowHp: ["{name}！大丈夫か！オラがそいつをぶっ飛ばしてやる！", "おい、{name}から離れろ！"],
                            shrunk: ["お？体が軽くなったぞ！もっと速く動けるんじゃねえか？", "ちっちぇー！これじゃあ、拳が当たらねえかもしれねえ！"],
                            shrunk_100: ["お、なんだか地面が近いな！低い姿勢からの攻撃も悪くねえ！"],
                            shrunk_70: ["ゴブリンと同じくらいの目線か？面白え！"],
                            shrunk_50: ["半分になっちまった！だが、拳の重さは変わらねえぞ！"],
                            shrunk_30: ["スライムみてえになっちまったな！でも、すばしっこくていいぞ！"],
                            shrunk_10: ["うおっ、豆粒みてえだ！でも、気合は一人前だ！"],
                            shrunk_1: ["肉まんの欠片くらいしかねえぞ！でも、腹は減る！"],
                            stripped: ["うおっ！？なんだこりゃ！動きやすくていいじゃねえか！", "はっはっは！身軽になったぜ！これで本気が出せる！", "…って、ちょっとスースーするな。", "シズカの姉御に見られたら、なんか言われるかな？"],
                            allyShrunk: ["{name}、ちっちぇくなったな！オラの肩にでも乗ってくか？", "おい、{name}！そこにいたのか！踏んじまうところだったぞ！"],
                            grown: ["でっかくなったぞー！これならどんなヤツでも一撃だ！", "うおー！見晴らしがいいな！敵はどこだー！"],
                            grown_max: ["うおおお！オラの力がカンストしたみてえだ！", "これ以上でかくなったら、ダンジョンが壊れちまうな！"],
                            allyGrown: ["うお、{name}がでっかくなった！頼もしいじゃねえか！", "{name}、天井に頭ぶつけんなよ！"],
                            allyNew: ["お！新しいの！オラはシャオメイだ！よろしくな！", "{name}か！強えのか？"],
                            stripped_shrunk: ["うおっ！？ちっちぇーし、服もねえ！これはさすがにマズいんじゃねえか？", "隠れるとこ探さねえと！風邪ひく！"],
                            solo_stripped_tiny: ["うおっ！？ちっちぇーし、服もねえ！これはさすがに…！", "（岩陰で体育座りしている）…腹、冷えるな…。", "誰か来たら、石ころのフリでもすっか…。", "は、腹減った…"],
                            dollhouse_explore_giant: ["お、でっけー家だな！中に美味いもんはあるか！？", "おーい！誰かいるかー！いねえなら入るぞー！", "なんだか巨人族の村みてえで、わくわくすっぞ！"],
                            cracked_rock_tiny: ["おう！この隙間ならオラでも通れるな！行ってくらあ！", "中に美味いもんでも隠されてねえかな？", "任せとけ！腹が減ってても、宝探しはできる！"],
                            liberated: ["はっはっは！動きやすくて最高だぜ！", "これぞ、肉体言語ってやつよ！", "邪魔な服がねえから、拳がもっと速く出せる気がするぜ！"],
                            dollhouse_explore: ["お、ちっちぇー家だな！中に食いもんはあるか！？", "おーい！誰かいるかー！いねえなら入るぞー！", "なんだか秘密基地みてえで、わくわくすっぞ！"],
                            cracked_rock_break: ["うおおお！オラの拳、岩をも砕く！見てろよ！", "邪魔だ、どけぇ！", "腹が減ってちゃ、岩も壊せねえからな！…ふんっ！"],
                            fairy_shrunk: ["うおー！ちっちぇー！でも、拳の重さは変わんねえぞ！", "このサイズ、速すぎて敵には見えねえんじゃねえか！？", "腹は減るな！"],
                            allyStripped_shrunk: ["{name}！ちっちぇー上にその格好はヤベえだろ！オラの服、貸してやるよ！", "てめえ！{name}に何しやがった！ぶっ飛ばす！"],
                            high_mouse_hole_all_tiny: ["うーん、全然届かねえな！腹立つ！", "腹が減ってて力が出ねえ！…いや、関係ねえか！", "誰か、オラを投げてくれねえか？", "ちくしょう！諦めるしかねえのか！"],
                            stripped_pair: ["お、{name}もか！二人して身軽になったな！動きやすくていいじゃねえか！", "はっはっは！こうなったら、どっちが先に敵を倒すか勝負だ！"],
                            high_mouse_hole_giant: ["うおー！オラの肩は頑丈だぞ！しっかり掴まってろ！", "よっしゃ、任せとけ！このまま天井まで届かせてやろうか！"],
                            high_mouse_hole_tiny: ["おう！行ってくるぜ！中に美味いもんでもあるといいな！", "ははっ、高いな！宝探しは得意なんだ、任せとけ！"],
                            allyStripped: ["{name}、大胆だな！風邪ひくなよ！", "敵のヤツ、くだらねえことしやがる！オラが拳で分からせてやる！"],
                            shrunk_pair: ["{name}もか！二人して豆粒だな！だが、二人いればなんとかなるだろ！", "よし、連携技だ！オラが下から、お前が上からだ！"],
                            pair_シズカ: ["シズカの姉御がいると安心するな！背中は任せたぜ！", "姉御！腹減った！肉まん食いてえ！", "その盾、やっぱカッチカチだな！オラの拳とどっちが硬いか勝負だ！"],
                            pair_レンカ: ["レンカ！お前の魔法、よくわかんねえけどスゲーな！", "死んだヤツと話せんのか？すげー！"],
                            pair_イオリ: ["イオリの姉ちゃん、ちっちぇーのにスゲーな！オラも負けてらんねえ！", "オラが守ってやっからな！"],
                            pair_コハル: ["コハル！お前、見てて飽きねえな！次はなにするんだ？", "失敗したって気にすんな！腹が減るだけだ！"],
                            pair_オリビア: ["オリビア！お前の祈り、なんだか腹の底からあったかくなるな！", "腹減ったらオラに言えよ！"],
                            pair_セレスティア: ["おー！なんかキラキラしてて強そうだな！オラと勝負だ！", "腹減らねえのか？不思議なヤツだな！"],
                        },
                        // エリザ (ドクター): 自信家、研究熱心、尊大。
                        'エリザ': {
                            default: ["ふふ、このダンジョン、私の研究意欲をそそりますわね。", "皆さん、検体…いえ、体調は万全ですこと？", "敵の生態、実に興味深い。サンプルを持ち帰りたいくらいですわ。", "アカリさん、その有り余る元気、どこから来るのか解析してみたいですわね。", "ヒカリさん、魔法と科学…どちらが優れているか、ここで証明しましょう。", "シズカさん、その頑丈さ、私の新薬の被験体として最適ですわ。", "ユイさん、あなたの回復魔法、非科学的ですが…効果は認めましょう。", "ベアトリスさん、錬金術と医学、通じるものがありそうですわね。今度、議論しませんこと？", "リリカさん、その舞、人々の精神にどう作用するのか…観察対象として実に興味深いですわ。", "サクヤさん、その精神集中…医学的にも解明したい現象ですわ。", "シャオメイさん、その単純な思考回路、羨ましいですわね。"],
                            lowHp: ["あら…？計算外のダメージですわ。検体が優秀だったようですわね。", "ふふ、少しは楽しませてくれますわね。ですが、ここまでですわ。", "この程度の傷、私の薬があればすぐに…！"],
                            allyLowHp: ["あらあら、{name}さん。私の助けが必要なようですわね。", "下がっていなさい、{name}さん。貴重なサンプルが壊れてしまいますわ。"],
                            shrunk: ["あら、この身長…子供の頃を思い出しますわね。ふふ、悪くありませんわ。", "視線が低いと、新しい発見があるものですわ。", "この体で、どうやって効率よく検体を処理するか…思考実験もまた一興ですわ。"],
                            shrunk_100: ["ふふ、このサイズ感、懐かしいですわね。"],
                            shrunk_70: ["ユイさんと同じくらいの目線ですわね。"],
                            shrunk_50: ["あらあら、世界の解像度が変わりましたわ。面白いデータが取れそうですわ。"],
                            shrunk_30: ["ここまで小さいと、フラスコを運ぶのも一苦労ですわね。"],
                            shrunk_10: ["ふふ、ネズミの気持ちがわかりますわ。これで敵を欺きましょう。"],
                            shrunk_1: ["…微生物との対話も、夢ではないかもしれませんわね。"],
                            stripped: ["…なんですの、この非科学的な現象は！", "私の完璧なボディバランスが…！許せませんわ！", "見てはいけませんわよ！…まあ、見惚れるのは仕方ありませんが。"],
                            allyShrunk: ["あら、{name}さん。可愛らしいサイズになりましたわね。臨床実験に最適ですわ。", "{name}さん、そこにいらっしゃいましたの。踏んでしまうところでしたわ。"],
                            grown: ["素晴らしい！このパワー！私の処方は完璧ですわ！", "見下ろす景色は最高ですわね！さあ、ひれ伏しなさい！"],
                            grown_max: ["ふふ、ついに限界値ですわね。私の研究の、素晴らしい成果ですわ！", "これ以上の巨大化は、未知の領域…ふふ、そそりますわね！"],
                            allyGrown: ["あら、{name}さん。私の処方が効いたようですわね。素晴らしい検体ですわ。", "{name}さん、大きくなりましたわね。データ、取らせていただきますわ。"],
                            allyNew: ["私がエリザですわ。あなた、私の研究の役に立ちそうですわね。期待していますわよ。", "新しい仲間ですの？ふふ、せいぜい私の足手まといにならないようになさい。"],
                            stripped_shrunk: ["小さくて、この格好…！これは、私の経歴の汚点ですわ…！", "…隠れますわよ。ええ、合理的な判断ですわ。"],
                            solo_stripped_tiny: ["（こんな屈辱…！ありえませんわ…！）", "（物陰でうずくまっている）…早くこの状況を打開する薬を開発しませんと…。", "（誰か来たら、新種のキノコのフリをしますわ…）"],
                            dollhouse_explore_giant: ["あら、巨人用の家ですの？私の研究室の拡張の参考にさせていただきますわ。", "失礼。内部構造を調査させていただきますわよ。", "このサイズなら、巨大な検体の解剖も可能ですわね。"],
                            cracked_rock_tiny: ["あら、この亀裂、興味深いですわね。内部の地層を調査する絶好の機会ですわ。", "このサイズなら、岩の内部を傷つけずにサンプルを採取できますわね。", "行ってまいりますわ。貴重なデータが手に入るかもしれません。"],
                            liberated: ["ふふ、これぞ究極の機能美。私の完璧な肉体を、存分に観察なさい。", "この方が動きやすいですし、体温調節も容易ですわ。実に合理的。", "さあ、私の研究の成果、その目に焼き付けなさい！"],
                            dollhouse_explore: ["あら、ドールハウスですの？私の研究室の模型作りの参考にさせていただきますわ。", "失礼。内部構造を調査させていただきますわよ。", "このサイズなら、人体の縮小モデルとしても有用ですわね。"],
                            cracked_rock_break: ["ふふ、私の特製薬を使えば、こんな岩、豆腐のようになりますわ。", "邪魔ですわね。さっさと片付けてしまいましょう。", "私の知性の前には、このような障害、無意味ですわ。"],
                            fairy_shrunk: ["素晴らしい！このサイズなら、人体の未知なる領域を探求できますわ！", "ふふ、私の知性がこの小さな体に凝縮されているのですわ。", "検体との距離が近い。観察にはもってこいですわね。"],
                            allyStripped_shrunk: ["あらあら、{name}さん。それは惨めな姿ですわね。私がすぐに服薬…いえ、服を作って差し上げますわ。", "敵の悪趣味な攻撃…サンプルとして解析する価値もありませんわね。"],
                            high_mouse_hole_all_tiny: ["あら、これは物理的に不可能ですわね。", "全員で肩車をしても、計算上、全く届きませんわ。", "飛行薬の材料があれば…残念ですわ。", "諦めましょう。非合理的な試みは時間の無駄ですわ。"],
                            stripped_pair: ["{name}さんもですの？…ふふ、二人でいれば羞恥も和らぐ、というデータが取れそうですわね。", "こうなったら、どちらが堂々としていられるか、勝負ですわよ。"],
                            allyStripped: ["{name}さん、風邪をひきますわよ。私の白衣をお使いなさい。", "敵の非科学的な攻撃…私が根絶して差し上げますわ。"],
                            high_mouse_hole_giant: ["ふふ、私の肩は安定していますわよ。さあ、どうぞ。", "これが最も効率的な手段ですわね。中の調査、お願いしますわ。"],
                            high_mouse_hole_tiny: ["あら、面白い構造ですわね。調査の価値がありそうですわ。", "行ってまいりますわ。貴重なサンプルが見つかるかもしれませんし。"],
                            shame_pillory: ["なんですの、この粘着質なものは！私の体に！", "離しなさい！この無礼者！私の完璧なボディを汚すなんて…！", "（屈辱に顔を歪ませているが、どこか興奮しているようにも見える）"],
                            shrunk_pair: ["あら、{name}さんも小さいですのね。ふふ、二人でいれば敵も油断するでしょう。好都合ですわ。", "ミニミニ探検隊、ですわね。私の指揮に従いなさい。"],
                            pair_アカリ: ["アカリさん、その有り余る元気、どこから来るのか解析してみたいですわね。", "あなたの単純な思考回路、羨ましいですわ。"],
                            pair_ヒカリ: ["ヒカリさん、魔法と科学…どちらが優れているか、ここで証明しましょう。", "あなたの魔術、興味深い研究対象ですわ。"],
                            pair_シズカ: ["シズカさん、その頑丈さ、私の新薬の被験体として最適ですわ。", "ふふ、冗談ですわよ。"],
                            pair_ユイ: ["ユイさん、あなたの回復魔法、非科学的ですが…効果は認めましょう。", "もっと効率的な治療法を、私が編み出して差し上げますわ。"],
                            pair_ベアトリス: ["ベアトリスさん、あなたの錬金術、実に興味深いですわ。今度、共同研究などいかがですこと？", "そのフラスコの中身…少し味見させてもらっても？", "科学と錬金術、どちらが真理に近いか…ここで決着をつけましょう。"],
                            pair_リリカ: ["リリカさん、その舞、人々の精神にどう作用するのか…観察対象として実に興味深いですわ。", "あなたのその豊満な肉体…素晴らしい検体ですわ。"],
                            pair_サクヤ: ["サクヤさん、その精神集中…医学的にも解明したい現象ですわ。", "あなたの身体能力、データとして収集させてくださいな。"],
                            pair_シャオメイ: ["シャオメイさん、その単純な思考回路、羨ましいですわね。", "あなたのその食欲、代謝機能がどうなっているのか…解剖してみたいですわ。"],
                            pair_ルナ: ["ルナさん、運などという不確定要素に身を委ねるなんて、非合理的ですわ。", "ですが、そのスリルを求める心理、研究の価値はありますわね。"],
                            pair_クロエ: ["クロエさん、あなたのその低い体温、恒温動物として異常ですわ。実に興味深い。", "魂…？ふふ、非科学的ですわね。ですが、面白い。"],
                            pair_ミコ: ["ミコさん、その生物とのコミュニケーション、どうやっているのですの？", "そのモコという生物、解剖させていただけませんこと？"],
                            pair_レンカ: ["レンカさん、死体蘇生…生命倫理に反しますわ。ですが、その技術、喉から手が出るほど欲しいですわね。", "その魂、捕獲して研究してみたいですわ。"],
                            pair_イオリ: ["イオリさん、その縮小病、私の研究対象として完璧ですわ。", "安心なさい。私が必ず、あなたの病を解明して差し上げますわ。"],
                            pair_コハル: ["コハルさん、あなたの引き起こす現象、確率論を無視していますわ。最高の研究対象ですわ！", "さあ、もっと面白いことを起こしてごらんなさい！"],
                            pair_オリビア: ["オリビアさん、その祈り、プラシーボ効果以上のものを感じますわ。", "その聖なる力とやら、科学で再現してみせますわ。"],
                            pair_レンカ: ["レンカさん、死体蘇生…生命倫理に反しますわ。ですが、その技術、喉から手が出るほど欲しいですわね。", "その魂、捕獲して研究してみたいですわ。"],
                            pair_セレスティア: ["聖女…ふふ、神の代行者ですって？実に非科学的ですわ。ですが、その力、解析する価値はありますわね。", "あなたのその体、私の研究対象として完璧ですわ。隅々まで調べさせてくださいな。"],
                            pair_イオリ: ["イオリさん、その縮小病、私の研究対象として完璧ですわ。", "安心なさい。私が必ず、あなたの病を解明して差し上げますわ。"],
                            pair_コハル: ["コハルさん、あなたの引き起こす現象、確率論を無視していますわ。最高の研究対象ですわ！", "さあ、もっと面白いことを起こしてごらんなさい！"],
                            pair_オリビア: ["オリビアさん、その祈り、プラシーボ効果以上のものを感じますわ。", "その聖なる力とやら、科学で再現してみせますわ。"],
                        },
                        // ルナ (ギャンブラー): スリル好き、自信家、気まぐれ。
                        'ルナ': {
                            default: ["さーて、次の勝負は丁か半か？", "退屈させないでよね！スリルのある冒険にしましょう！", "人生はギャンブルよ。このダンジョンも、私のステージってわけ。", "アカリ、その勢い、嫌いじゃないわ。賭けてみる価値、あるかもね。", "ヒカリ、あなたって読めないわね。ポーカーフェイスってやつ？", "シズカ、その安定感はつまらないけど…まあ、保険としてはアリかしら。", "ユイ、あなたの回復は確実すぎてドキドキしないわね。", "ベアトリス、あなたの錬金術、成功率はどのくらい？興味あるわ。", "リリカ、あなたのステージ、私も混ぜてくれない？もっと盛り上げてあげるわよ。", "サクヤ、その真剣な顔…崩してみたいわね。", "シャオメイ、単純でわかりやすいわね。賭けの対象としては一番かも。", "エリザ、あなたの薬、副作用の確率も教えてくれる？それが大事なのよ。"],
                            lowHp: ["ふふ、ちょっとスリリングになってきたじゃない！", "ここで引いたらギャンブラーの名が廃るわ！", "チップが減ってきたけど…まだまだ勝負はこれからよ！"],
                            allyLowHp: ["あらら、{name}がピンチね。ここは大きく賭けるチャンスかしら？", "{name}、大丈夫？私の幸運、分けてあげるわ。"],
                            shrunk: ["ちっちゃくなっちゃった。ふふ、これならイカサマし放題ね！", "このサイズ、カードの裏に隠れられそう。", "視点が低いと、相手の足元が見えて面白いわね。"],
                            shrunk_100: ["あら、テーブルを見上げるなんて新鮮ね。"],
                            shrunk_70: ["ヒカリと同じくらいの目線ね。勝負しましょうか？"],
                            shrunk_50: ["世界の何もかもが大きいわ。面白い！"],
                            shrunk_30: ["コインの山に隠れられそうね。"],
                            shrunk_10: ["サイコロみたいになっちゃった。誰か、私を振ってみる？"],
                            shrunk_1: ["カードの絵柄より小さいかも。ふふっ。"],
                            stripped: ["きゃっ！…ふふ、面白いじゃない。この状況、逆手にとってやるわ。", "サービスタイムってとこかしら？観覧料は高いわよ？", "こんな格好で勝ったら、伝説になっちゃうかも！"],
                            allyShrunk: ["あら、{name}がミニチュアサイズに。可愛いじゃない。私のペットにしてあげようかしら。", "{name}、そこにいたの。チップと間違えて拾っちゃうところだったわ。"],
                            grown: ["大きくなったわ！これでハッタリも効くってものね！", "見下ろす気分、最高！みんな、私の前にひれ伏しなさい！"],
                            grown_max: ["ふふ、ついに天井知らずの私にも限界が来たってわけね。", "これ以上はベットできないわ。最高のショーだったでしょ？"],
                            allyGrown: ["あら、{name}が大きくなったのね。頼もしいじゃない。賭けの対象としては悪くないわ。", "{name}、その巨体、ブラフには最適ね。"],
                            allyNew: ["私がルナよ。あなた、ツイてる？私と一緒に、最高のギャンブルをしましょう。", "新しい仲間ね。あなたに賭ける価値があるか、見極めさせてもらうわ。"],
                            stripped_shrunk: ["小さくて、この格好…！これは、さすがに計算外だわ…！", "…隠れるわよ。ええ、次のゲームのための戦略的撤退よ。"],
                            solo_stripped_tiny: ["（こんな屈辱…ありえないわ…！次の勝負で絶対に取り返してやる…！）", "（コインの影でうずくまっている）…ツイてない。流れが悪いわね…。", "（誰か来たら、新種のキノコのフリでもしてやろうかしら…）"],
                            dollhouse_explore_giant: ["ふふ、面白いじゃない。この家には大きなお宝が眠ってる…そんな予感がするわ。", "オールインよ！きっと何かいいものが見つかるはず！", "失礼するわね。家探しは得意なのよ。"],
                            cracked_rock_tiny: ["ふふ、この隙間の先に大当たりがある…そんな予感がするわ。", "ハイリスク・ハイリターンね。面白そうじゃない、行ってくるわ。", "私に賭けてみなさい。きっとお宝を見つけてきてあげる。"],
                            liberated: ["ふふ、面白いじゃない。全部見せた方が、勝負は盛り上がるってものよ。", "さあ、私のすべてを賭けるわ。あなたも、覚悟はいい？", "この方が、カードを隠す場所がなくて、フェアでいいでしょ？"],
                            dollhouse_explore: ["ふふ、面白いじゃない。この家にはお宝が眠ってる…そんな予感がするわ。", "オールインよ！きっと何かいいものが見つかるはず！", "失礼するわね。家探しは得意なのよ。"],
                            cracked_rock_break: ["この岩を壊せるかどうかに、私の運命、賭けてみるわ！", "ふふ、ツイてるわね。ちょうどいいところにヒビが入ってるじゃない。", "邪魔よ。どきなさい。"],
                            fairy_shrunk: ["ふふ、面白いじゃない。このサイズ、誰も私を警戒しないわ。最高のブラフね。", "サイコロの目で世界を見てるみたい。悪くないわ。", "カードの裏に隠れられるなんて、イカサマし放題じゃない！"],
                            allyStripped_shrunk: ["あらあら、{name}。それは無様ね。でも、そこからの大逆転劇、期待してるわよ。", "敵の趣味、最悪ね。美しくないわ。"],
                            stripped_pair: ["{name}も？ふふ、面白いじゃない。二人で『ノーペア』ってとこかしら。", "こうなったら、どっちが先に服を手に入れるか、勝負しましょうか。"],
                            allyStripped: ["{name}、大胆ね。でも、風邪ひいたら元も子もないわよ。私のストール、貸してあげる。", "敵のやり方、スマートじゃないわね。私がきっちりお灸を据えてあげる。"],
                            high_mouse_hole_giant: ["さあ、私の肩に乗りなさい。最高の特等席よ。", "ふふ、私を踏み台にするなんて、いい度胸じゃない。"],
                            high_mouse_hole_tiny: ["ふふ、面白そうじゃない。お宝に賭けてみるのも悪くないわね。", "行ってくるわ。大当たりを引いてきてあげる。"],
                            high_mouse_hole_all_tiny: ["あらら、これは完全に詰みね。賭けにすらならないわ。", "全員でジャンプして、一番高く飛べた人が勝ちってゲームでもする？", "ツイてないわね。諦めて次に行きましょう。", "この状況を打開できる確率…0%ね。"],
                            shame_pillory: ["…ふふ、面白いじゃない。こんなの、初めての経験だわ。", "もっと、強く…！なんてね。早く離してくれないかしら。", "（恍惚とした表情で、ガラスに映る自分の姿を見ている）"],
                            shrunk_pair: ["あら、{name}も小さいのね。二人でなら、どんなイカサマも見破られないかも。", "ミニミニギャンブラーズの結成ね。私の指示に従いなさい。"],
                            pair_アカリ: ["アカリ、その勢い、嫌いじゃないわ。賭けてみる価値、あるかもね。", "単純でわかりやすいわね。"],
                            pair_ヒカリ: ["ヒカリ、あなたって読めないわね。ポーカーフェイスってやつ？勝負しましょうか。", "その魔法、成功率は何パーセント？"],
                            pair_シズカ: ["シズカ、その安定感はつまらないけど…まあ、保険としてはアリかしら。", "あなたの鉄壁、私の運で突破できるかしら？"],
                            pair_ユイ: ["ユイ、あなたの回復は確実すぎてドキドキしないわね。", "たまには、失敗してみたらどう？スリリングでいいじゃない。"],
                            pair_ベアトリス: ["ベアトリス、あなたの錬金術、成功率はどのくらい？興味あるわ。", "その薬、どんな副作用があるのかしら？そこに賭けるのも面白そうね。"],
                            pair_リリカ: ["リリカ、あなたのステージ、賭けの対象としては最高ね。観客がどれだけ熱狂するか、賭けてみない？", "あなたのダンス、見てる人を惹きつけるわ。その才能、ギャンブルにも活かせるんじゃない？"],
                            pair_サクヤ: ["サクヤ、その真剣な顔…崩してみたいわね。", "あなたの斬撃、私が避けられるかに賭けてみない？"],
                            pair_シャオメイ: ["シャオメイ、単純でわかりやすいわね。賭けの対象としては一番かも。", "あなたと私、どっちが先に腹を空かせるか、賭ける？"],
                            pair_エリザ: ["エリザ、あなたの薬、副作用の確率も教えてくれる？それが大事なのよ。", "あなたの自信、いつまで続くかしら？ふふっ。"],
                            pair_クロエ: ["クロエ、あなたもミステリアスね。何を考えてるか、当ててみせようかしら。", "魂を狩る…？ふふ、面白そうじゃない。"],
                            pair_ミコ: ["ミコ、その召喚、成功する確率は？", "そのモコって子、私に懐くか懐かないか、賭けてみない？"],
                            pair_レンカ: ["レンカ、死者を操るなんて、ハイリスク・ハイリターンね。嫌いじゃないわ。", "その魔法、失敗したらどうなるの？面白そうじゃない。"],
                            pair_イオリ: ["イオリ先輩、ね。その守り、いつまで続くかしら？", "小さくても、賭けの対象としては面白いわ。"],
                            pair_コハル: ["コハル、あなたこそ最高のギャンブルね！次に何が起こるか、全く読めないわ！", "あなたに全部賭けてみるのも、面白そうね！"],
                            pair_オリビア: ["オリビア、祈りだけで勝てるなんて思ってないでしょうね？", "神様と私、どっちがツイてるか勝負しましょうか。"],
                            pair_レンカ: ["レンカ、死者を操るなんて、ハイリスク・ハイリターンね。嫌いじゃないわ。", "その魔法、失敗したらどうなるの？面白そうじゃない。"],
                            pair_セレスティア: ["聖女様、ね。あなたに賭けても、スリルはなさそうね。だって、絶対に勝つんでしょう？", "あなたのその力、イカサマじゃないんでしょうね？"],
                            pair_イオリ: ["イオリ先輩、ね。その守り、いつまで続くかしら？", "小さくても、賭けの対象としては面白いわ。"],
                            pair_コハル: ["コハル、あなたこそ最高のギャンブルね！次に何が起こるか、全く読めないわ！", "あなたに全部賭けてみるのも、面白そうね！"],
                            pair_オリビア: ["オリビア、祈りだけで勝てるなんて思ってないでしょうね？", "神様と私、どっちがツイてるか勝負しましょうか。"],
                        },
                        // クロエ (リーパー): 寡黙、ミステリアス、達観している。
                        'クロエ': {
                            default: ["…静か。…魂の、囁きが聞こえる。", "…ここは、終わりが近い場所の匂いがする。", "…みんな、死なないでね。…まだ、その時じゃないから。", "アカリ…その光、眩しい。", "ヒカリ…魔法は、魂の形を変える力。", "シズカ…その盾は、多くの魂を守ってきたのね。", "ユイ…あなたの祈り、届いてるよ。", "ベアトリス…真理の探求、その先に何を見るの？", "リリカ…あなたの歌、魂を揺さぶる。", "サクヤ…あなたの剣、魂を断つ覚悟が見える。", "シャオメイ…その拳、純粋な魂の輝き。", "エリザ…命の探求、面白い。", "ルナ…運命の糸、見えるの？"],
                            lowHp: ["…少し、境界が近くなった。", "…まだ、逝けない。", "…この痛み、生きている証。"],
                            allyLowHp: ["…{name}、危ない。…こっちに来て。", "{name}の魂の灯が、揺れてる。"],
                            shrunk: ["…小さくなった。…影に、もっと近づける。", "…地面が近い。…死んだ魂の声が、よく聞こえる。", "…この姿なら、誰にも気づかれずに、魂を狩れる。"],
                            shrunk_100: ["…ユイさんと同じくらい…。", "…ローブが、もっとぶかぶか。"],
                            shrunk_70: ["…世界の境界が、曖昧になる。"],
                            shrunk_50: ["…半分。…存在が、希薄になる感じ。", "…影と、一体になれそう。"],
                            shrunk_30: ["…草の葉が、鎌みたいに見える。"],
                            shrunk_10: ["…蝶々みたい。…魂を運ぶ、蝶々。"],
                            shrunk_1: ["…もう、いないのと同じ。…でも、いる。"],
                            stripped: ["…これは、だめ。", "…魂が、裸にされたみたいで、寒い。", "…フードで、隠す。"],
                            allyShrunk: ["…{name}、小さくなったね。…可愛い。", "{name}、そこにいたの。…気づかなかった。"],
                            grown: ["…大きくなった。…天に、手が届きそう。", "…見下ろすのは、慣れない。"],
                            grown_max: ["…これ以上は、魂の器が持たない。", "…世界の境界が、見える。"],
                            allyGrown: ["…{name}、大きい。…守護者みたい。", "{name}、その力、魂を傷つけないでね。"],
                            allyNew: ["…クロエ。…あなたの魂、見せて。", "…よろしく。…あなたの最期、私が見届けてあげる。"],
                            stripped_shrunk: ["…小さくて、服もない。…これは、一番、死に近い。", "…隠れる。…誰にも、見つからないように。"],
                            solo_stripped_tiny: ["（…もう、消えてしまいたい…）", "（…影の中で、じっとしている）", "（…誰か来たら、石になる…）"],
                            dollhouse_explore_giant: ["…大きな、魂の器。…誰が、住んでいたの？", "…おじゃまします。…静かね。…好き。", "…何か、残された想いは、ない？"],
                            cracked_rock_tiny: ["…この隙間、向こう側と繋がってる。…死者の魂が、呼んでるかも。", "…静かに入って、見てくる。", "…何か、落ちてる。…拾ってくる。"],
                            liberated: ["…服なんて、生者のためのもの。…私には、不要。", "…魂の形が、一番わかりやすい。…これでいい。", "…風が、肌を撫でる。…死者の囁きみたい。"],
                            dollhouse_explore: ["…小さな、魂の器。…誰が、住んでいたの？", "…おじゃまします。…静かね。…好き。", "…何か、残された想いは、ない？"],
                            cracked_rock_break: ["…この岩にも、魂はある。…でも、今は邪魔。", "…道を開けて。…お願い。", "…鎌で、少しずつ。"],
                            fairy_shrunk: ["…影と、一体になれる。…心地いい。", "…魂の囁きが、もっと近くで聞こえる。", "…この姿なら、誰にも気づかれずに、魂を狩れる。"],
                            allyStripped_shrunk: ["…{name}、かわいそう。…私のローブ、貸してあげる。", "…ひどいこと、するね。…あの敵の魂、私がもらう。"],
                            stripped_pair: ["…{name}も。…二人とも、魂が丸見え。", "…こうしてると、少しだけ、温かいかも。"],
                            allyStripped: ["…{name}、風邪ひくよ。…これ、使って。", "…許さない。"],
                            high_mouse_hole_giant: ["…私の肩、使って。…静かにね。", "…この高さなら、届く。…お願い。"],
                            high_mouse_hole_tiny: ["…行ってくる。…中に、何かいるかも。", "…静かに。…中の魂の声を、聞いてくる。"],
                            high_mouse_hole_all_tiny: ["…届かない。…仕方ない。", "…みんなで、お祈りする？…届かないかな。", "…諦める。…静かで、いい。", "…（じっと穴を見上げている）"],
                            shame_pillory: ["…これは、罰…？", "…魂が、見られてる。…寒い。", "（ただ静かに、目を閉じている）"],
                            shrunk_pair: ["…{name}も、小さいね。…二人で、影になろう。", "…二人なら、見つからない。"],
                            pair_アカリ: ["アカリ…その光、眩しい。…魂が、燃えてるみたい。", "…元気、だね。"],
                            pair_ヒカリ: ["…ヒカリ。…あなたの魔法、静かで好き。", "…魔道と、魂の道。…似てる。"],
                            pair_シズカ: ["シズカ…その盾は、多くの魂を守ってきたのね。", "…あなたの後ろ、温かい。"],
                            pair_ユイ: ["ユイ…あなたの祈り、届いてるよ。…優しい魂。", "…ありがとう。"],
                            pair_ベアトリス: ["ベアトリス…真理の探求、その先に何を見るの？", "…あなたの魂、知りたがり。"],
                            pair_リリカ: ["リリカ…あなたの歌、魂を揺さぶる。", "…賑やか。"],
                            pair_サクヤ: ["サクヤ…あなたの剣、魂を断つ覚悟が見える。", "…私と、同じ匂い。"],
                            pair_シャオメイ: ["シャオメイ…その拳、純粋な魂の輝き。", "…お腹、すいたの？"],
                            pair_エリザ: ["エリザ…命の探求、面白い。…でも、やりすぎはだめ。", "…あなたの魂、傲慢。"],
                            pair_ルナ: ["ルナ…運命の糸、見えるの？…私には、魂の終わりが見える。", "…あなたの魂、いつも揺れてる。"],
                            pair_ミコ: ["ミコ…その子たち、魂があるの？…話してみたい。", "…優しい魂。"],
                            pair_レンカ: ["レンカ…死者の魂を弄ぶのは、よくない。", "…でも、あなたの魂は、寂しそう。"],
                            pair_イオリ: ["イオリ…先輩。…その魂、古い。…でも、強い。", "…守る、ね。…わかる。"],
                            pair_コハル: ["コハル…あなたの周り、魂が騒がしい。", "…何が起こるか、わからない。…面白い。"],
                            pair_オリビア: ["オリビア…あなたの魂、光ってる。…綺麗。", "…その祈り、死者の魂も、癒されるかも。"],
                            pair_レンカ: ["レンカ…死者の魂を弄ぶのは、よくない。", "…でも、あなたの魂は、寂しそう。"],
                            pair_セレスティア: ["…あなたの魂、光そのもの。…眩しい。", "…たくさんの魂が、あなたに救いを求めてる。…聞こえる。"],
                            pair_イオリ: ["イオリ…先輩。…その魂、古い。…でも、強い。", "…守る、ね。…わかる。"],
                            pair_コハル: ["コハル…あなたの周り、魂が騒がしい。", "…何が起こるか、わからない。…面白い。"],
                            pair_オリビア: ["オリビア…あなたの魂、光ってる。…綺麗。", "…その祈り、死者の魂も、癒されるかも。"],
                        },
                        // ミコ (サモナー): 人懐っこい、天然、モンスター好き。
                        'ミコ': {
                            default: ["モコ、元気？…うん、ミコも元気だよ！", "このダンジョン、面白いモンスターいるかな？お友達になりたいな！", "みんな、疲れてない？モコが応援してるって！", "アカリちゃん、すごいね！モコもああなりたいって！", "ヒカリちゃん、その本、難しいの？モコが読んであげようか？", "シズカさん、かっこいい！ゴーレムくんもああなりたいって！", "ユイちゃん、いつもありがとう！モコも喜んでるよ！", "ベアトリスさん、その薬、モンスターは飲める？", "リリカちゃん、可愛い！モコと一緒に踊ってほしいな！", "サクヤさん、その刀、キラキラだね！モコが舐めてもいい？", "シャオメイちゃん、お腹すいたの？モコのおやつ、半分あげる！", "エリザさん、モコを調べてもいいよ！でも、痛くしないでね？", "ルナさん、ギャンブルってなあに？モコとできる？", "クロエちゃん、静かだね。モコとお話しよ？"],
                            lowHp: ["うぅ…ちょっと痛いかも…。モコ、大丈夫だよ！", "まだ平気！みんなを守らないと！", "モコ、ミコのこと心配してくれてるの？ありがとう。"],
                            allyLowHp: ["{name}ちゃん、大丈夫！？ゴーレムくん、{name}ちゃんを守って！", "モコがね、{name}ちゃんのこと心配してるよ。"],
                            shrunk: ["わ、ちっちゃくなっちゃった！モコと同じ目線だ！", "これなら、モンスターの子供と間違えられちゃうかも！", "モコ、ミコの頭の上に乗れるよ！"],
                            shrunk_100: ["ユイちゃんと同じくらいかな？えへへ。"],
                            shrunk_70: ["モコよりちょっと大きいかな？"],
                            shrunk_50: ["モコと一緒にお散歩してるみたい！"],
                            shrunk_30: ["草むらがジャングルみたい！探検だー！"],
                            shrunk_10: ["モコ、ミコのこと見失わないでね！"],
                            shrunk_1: ["モコのお鼻の先っぽくらいになっちゃった！"],
                            stripped: ["ひゃっ！？だ、だめだよぉ…！モコ、見ないで！", "こ、こんな格好、召喚の儀式に集中できないよ…！", "ゴーレムくん、ミコのこと隠して！"],
                            allyShrunk: ["わー、{name}ちゃん、ちっちゃくて可愛い！モコのお友達みたい！", "{name}ちゃん、そこにいたの！気づかなかった！"],
                            grown: ["おっきくなった！これなら大きいモンスターともお話しできるかも！", "ゴーレムくんと同じくらい大きいかな？"],
                            grown_max: ["わー！もうこれ以上おっきくなれないみたい！モコ、見てるー？", "ゴーレムくんよりおっきくなっちゃった！"],
                            allyGrown: ["わー、{name}ちゃん、おっきい！ゴーレムくんみたい！", "{name}ちゃん、天井、気をつけてね！"],
                            allyNew: ["はじめまして！ミコだよ！こっちは相棒のモコ！{name}ちゃん、よろしくね！", "新しいお友達だ！{name}ちゃん、モンスター好き？"],
                            stripped_shrunk: ["ちっちゃくて、服もないなんて…！モコ、ミコのこと隠してー！", "これじゃあ、ただの迷子の子だよぉ…！"],
                            solo_stripped_tiny: ["（しくしく…）モコ、どうしよう…。", "（葉っぱの裏に隠れて、モコを抱きしめている）", "もう、おうちに帰りたいよぉ…"],
                            dollhouse_explore_giant: ["わーい！巨人さんのお家だ！モコのお家みたい！おじゃまします！", "おっきいモンスターさん、いませんかー？", "モコ、見て！ベッドもテーブルもみんなおっきいね！"],
                            cracked_rock_tiny: ["わーい！秘密のトンネルだ！モコ、行ってくるね！", "中に、ちっちゃいモンスターさん、いないかな？お友達になりたいな！", "お宝、見つけてくるね！"],
                            liberated: ["わーい！なんだか、ミコもモンスターになった気分！", "この方が、モコともっと仲良くなれる気がする！", "見てみて！ミコ、元気いっぱいだよ！"],
                            dollhouse_explore: ["わーい！モコのお家みたい！おじゃまします！", "ちいさいモンスターさん、いませんかー？", "モコ、見て！ベッドもテーブルもみんなちっちゃいね！"],
                            cracked_rock_break: ["ゴーレムくん、お願い！この岩、壊して！", "モコ、危ないから下がっててね！せーのっ！", "サラマンダーくん、この岩、燃やしちゃえ！"],
                            fairy_shrunk: ["わーい！モコと同じ目線だ！お話しやすいね！", "このサイズなら、小さいモンスターさんとお友達になれるかも！", "モコの背中に乗って冒険だー！"],
                            allyStripped_shrunk: ["{name}ちゃん、大丈夫！？モコが温めてあげるって！", "ひどいことする敵さんだね！ゴーレ-ムくん、やっつけて！"],
                            stripped_pair: ["{name}ちゃんもなの！？二人でいれば、恥ずかしくない…かな？ううん、恥ずかしい！", "モコ、どっちも見ちゃだめだよ！"],
                            allyStripped: ["{name}ちゃん、風邪ひいちゃう！ミコのマント、使って！", "敵さん、意地悪だね！サラマンダーくん、お仕置きして！"],
                            high_mouse_hole_giant: ["うん！ミコがおっきくしてあげる！モコも応援してるよ！", "ゴーレムくんみたいに、どっしり構えてるから大丈夫だよ！"],
                            high_mouse_hole_tiny: ["わーい、高いね！モコ、行ってくるね！", "中にモンスターさん、いるかな？お友達になれるといいな！"],
                            high_mouse_hole_all_tiny: ["うーん、全然届かないね…。モコ、どうしよう？", "みんなで肩車しても、全然だめだね…。", "モコを投げても、届かないかなぁ…。", "諦めるしかないのかなぁ…。"],
                            shame_pillory: ["いやー！なにこれ、ネバネバするよぉ！モコ、助けてー！", "だ、だめ！こんな格好、ゴーレムくんに見られちゃう！", "（うるうるした目で助けを求めている）"],
                            shrunk_pair: ["{name}ちゃんも小さいんだね！二人でモコに乗って探検しようよ！", "ちびっこ探検隊だね！"],
                            pair_ユイ: ["ユイちゃん、いつもありがとう！モコもね、ユイちゃんのこと大好きなんだって！", "ユイちゃんのお菓子、美味しいね！モコにも少しちょうだい！"],
                            pair_レンカ: ["レンカさん、死んじゃったモンスターともお話しできるの？すごい！", "モコがね、レンカさんのこと、ちょっと怖いけど気になるって！"],
                            pair_イオリ: ["イオリ先輩、ちっちゃくてもかっこいいね！ゴーレムくんもそう言ってる！", "先輩！ミコとモコが守るからね！"],
                            pair_コハル: ["コハルちゃん、次はなにするの？モコがわくわくしてるよ！", "失敗しても、モコがなぐさめてくれるから大丈夫だよ！"],
                            pair_セレスティア: ["わー！セレスティアさん、キラキラしてる！モコがね、すりすりしたいって！", "セレスティアさん、モンスターとお話しできる？"],
                            // サマータイム・スペシャルライブ！
                            beach_liberation_prompt: ["太陽さん、あったかいね！モコもミコも、もっと元気いっぱいになりたいな！"],
                            beach_liberation_stop: ["そっかぁ。じゃあ、また今度にしよっかな！"],
                            onsen_liberation_prompt: ["このお湯、あったかくてお母さんみたい！なんだか、甘えたくなっちゃうなー。"],
                            onsen_liberation_stop: ["うん、わかった！じゃあ、もうちょっとだけこのままでいよっと！"],

                            // サマータイム・スペシャルライブ！
                            summer_beach: [
                                "見てみて、モコ！ヤドカリさんだよ！お友達になれるかな？",
                                "この砂、ゴーレムくんの材料にいいかも！…なんてね！",
                                "リリカちゃんの歌、モコもノリノリだよ！",
                                "海の水ってしょっぱいんだね！モコ、びっくりしてる！"
                            ],
                            summer_onsen: ["わーい、温泉だ！モコ、泳いでもいい？…え、だめなの？", "このお湯、なんだか体に良さそう！ゴーレムくんも元気になったりして！", "ユイちゃん、おまんじゅうありがとう！モコと半分こするね！", "リリィちゃん、背中流してあげようか？モコが！"],
                            onsen_towel_trouble: ["わわっ！タオルが取れちゃった！モコ、隠してー！"],
                            pair_オリビア: ["オリビアさん、優しい匂いがするね！モコがすりすりしたがってる！", "その祈り、モンスターにも効くのかな？"],
                            // 特別衣装時のセリフ
                            summer_beach_costume: ["わーい、水着だ！海に来たみたいで楽しいね！モコも嬉しそう！", "この格好だと、召喚獣たちもなんだか楽しそうにしてる気がする！", "砂浜でゴーレムくん作ったら、砂のゴーレムくんになるのかな？"],
                            summer_beach_costume_lowHp: ["うぅ…転んで膝すりむいちゃった…。砂がしみるよぉ…。", "モコ、大丈夫だよ！ミコはまだ戦えるから！"],
                            summer_beach_costume_shrunk: ["わわっ、水着のままちっちゃくなっちゃった！ヤドカリさんとおんなじサイズだ！", "モコ、ミコのこと見失わないでねー！"],
                            summer_beach_costume_stripped: ["ひゃっ！？水着取られちゃった！だめだよぉ、モコ、見ちゃだめ！", "うぅ…こんな格好、召喚の儀式に集中できないよ…！"],
                            summer_beach_costume_grown: ["わー！水着のままおっきくなった！これなら、どんなモンスターよりも大きいかも！", "モコ、見て見て！ミコ、おっきいよー！"],

                            summer_onsen_costume: ["この格好、温泉みたいでぽかぽかするね！モコも気持ちよさそう！", "タオル一枚だと、召喚の時にちょっと動きにくいかも…？", "みんなで温泉卓球したいなー！"],
                            summer_onsen_costume_lowHp: ["わわっ、のぼせちゃったかも…。ちょっとふらふらする…。", "タオルがはだけそうだよぉ…！"],
                            summer_onsen_costume_shrunk: ["わわっ、タオルのままちっちゃくなっちゃった！おちょこのお風呂に入れそうだね！", "モコ、ミコのこと、タオルと間違えて持って行かないでね！"],
                            summer_onsen_costume_stripped: ["ひゃっ！？タオル取られちゃった！だめだよぉ、ゴーレムくん、隠してー！", "うぅ…こんな格好、恥ずかしいよぉ…！"],
                            summer_onsen_costume_grown: ["わー！タオルのままおっきくなった！これなら、露天風呂も小さく見えるかも！", "モコ、見て！ミコ、おっきいよー！タオル、足りるかな？"],
                            liberated_beach: ["太陽さんとお友達になったみたい！ミコ、無敵だよ！", "この格好なら、お魚さんたちも仲間だって思ってくれるかな？"],
                            liberated_onsen: ["温泉の神様と、お話しできちゃうかも！", "モコもミコも、ぽっかぽかだよー！"],
                        },
                        // レンカ (ネクロマンサー): ミステリアス、お姉さん、死者と対話。
                        'レンカ': {
                            default: ["ふふ、魂たちが囁いているわ…この先に強い気配があるって。", "あら、元気な魂ね。死んだら私のコレクションにしてあげる。", "静かね…死者の安らぎを邪魔する者は誰かしら？", "このダンジョン、魂の吹き溜まりになっているみたい。居心地がいいわ。", "アカリちゃん、その生命力…眩しいわね。", "ヒカリちゃん、魔術と死霊術、根は同じかもね。", "シズカさん、その盾、何体の魂を守ってきたのかしら。", "ユイちゃん、あなたの癒しは生者だけのもの？", "あら、新しい魂の気配…よろしくね、迷える子羊さん。"],
                            lowHp: ["…少し、死が近くなったかしら。悪くないわ。", "ふふ、この痛み…生きているって実感するわね。", "大丈夫よ。魂の一つや二つ、くれてやるもの。"],
                            allyLowHp: ["{name}、無理はよしなさい。死んだら私が蘇らせてあげるから。", "あらあら、{name}の魂の灯が弱まっているわ。"],
                            shrunk: ["小さくなるなんて…ふふ、面白いわね。魂の重さは変わらないのに。", "このサイズなら、魂たちの囁きがもっと近くで聞こえるかしら。", "あら、服がぶかぶか。まるで幽霊みたいね。"],
                            shrunk_100: ["子供の頃に戻ったみたい。…もっとも、私の子供時代はこんなに明るくなかったけれど。"],
                            shrunk_70: ["ユイちゃんと同じくらいの目線ね。可愛いわ。"],
                            shrunk_50: ["世界のすべてが大きく見える。魂の視点って、こんな感じなのかしら。"],
                            shrunk_30: ["墓石の影に隠れるには、ちょうどいいサイズね。"],
                            shrunk_10: ["ふふ、まるで魂そのものになった気分だわ。"],
                            shrunk_1: ["…もう、誰の目にも映らない。死者と同じね。"],
                            stripped: ["あら…大胆なことしてくれるじゃない。魂まで裸にされた気分よ。", "…見てるんでしょう？いいわ、存分に見なさい。ただし、代償は高くつくわよ。", "ふふ、この格好で死霊術を唱えるのも、一興かしら。"],
                            allyShrunk: ["あら、{name}が小さくなっているわ。可愛いわね、小動物みたい。", "{name}、そこにいたの。魂の気配で気づいたわ。"],
                            grown: ["大きくなったわね。これなら、より多くの魂を従えられそう。", "見下ろす景色も、悪くないわ。"],
                            grown_max: ["ふふ、これ以上は魂の器が持たないわね。最高の状態よ。", "これ以上の成長は、死の領域を侵すことになるわ。"],
                            allyGrown: ["まあ、{name}が大きくなってる。頼もしいわね。", "{name}、その体、魂を宿すにはちょうどいい器かも。"],
                            allyNew: ["新しい魂…{name}、よろしくね。あなたの最期、私が見届けてあげる。", "ふふ、可愛い子。仲良くしましょうね。"],
                            stripped_shrunk: ["小さくて、服もないなんて…これは、さすがに想定外ね。", "…隠れましょうか。死者のように、気配を消して。"],
                            solo_stripped_tiny: ["（…これは、屈辱ね。あの敵の魂、必ず私のものにする…）", "（物陰で膝を抱えている）…寒い。死者の温もりが恋しいわ。", "（誰か来たら、ただの石ころのフリでもしましょうか…）"],
                            dollhouse_explore_giant: ["あら、大きな家。死者の魂はいないようね。…残念。", "ふふ、おじゃましますわ。何か面白いもの、残ってないかしら。", "この家、私のコレクションに加えるのも悪くないわね。"],
                            cracked_rock_tiny: ["あら、この隙間…死者の魂が隠したお宝があるかもしれないわね。", "ふふ、行ってくるわ。何か面白いものが見つかるかもしれないもの。", "このサイズなら、誰にも気づかれずに調査できるわね。"],
                            liberated: ["ふふ、これぞ死者に最も近い姿。魂が、喜んでいるわ。", "この方が、魂たちとの対話がしやすいのよ。", "私のすべて、死者たちに捧げましょう。"],
                            dollhouse_explore: ["あら、可愛いお家。死者の魂はいないようね。…残念。", "ふふ、おじゃましますわ。何か面白いもの、残ってないかしら。", "この家、私のコレクションに加えるのも悪くないわね。"],
                            cracked_rock_break: ["ふふ、こんな岩、私のアンデッドたちに命令すれば一瞬よ。", "邪魔ね。魂ごと砕いてあげる。", "死の力の前には、岩も砂と同じよ。"],
                            fairy_shrunk: ["ふふ、魂の重さは変わらないもの。この姿も一興ね。", "死者の囁きが、より鮮明に聞こえるわ。悪くない。", "まるで魂そのものになった気分。面白いわね。"],
                            allyStripped_shrunk: ["あらあら、{name}。なんて無防備な姿。私が守ってあげないと。", "敵の趣味、感心しないわね。後で魂を問い詰めておきましょう。"],
                            stripped_pair: ["{name}も？ふふ、奇遇ね。二人でいれば、羞恥心も薄れるかしら。", "こうなったら、どちらがより妖艶でいられるか、勝負しましょうか。"],
                            allyStripped: ["{name}、風邪をひくわよ。私のローブ、使いなさい。", "下等な真似をする敵ね。魂ごと消してあげる。"],
                            high_mouse_hole_giant: ["ふふ、私の肩を使いなさい。死者のように軽やかに登れるでしょう？", "さあ、行きなさい。中の魂が、あなたを呼んでいるわ。"],
                            high_mouse_hole_tiny: ["あら、面白そうね。何か曰く付きの品でも眠っているかしら。", "行ってくるわ。死者の囁きが聞こえるかもしれないもの。"],
                            high_mouse_hole_all_tiny: ["あら、これはどうしようもないわね。諦めましょう。", "全員で積み重なっても、この高さには届かないわ。無駄なことよ。", "飛行できるアンデッドでもいれば別だけど…。", "残念ね。次に行きましょう。"],
                            shame_pillory: ["あら…ふふ、面白い趣向ね。嫌いじゃないわ。", "もっと強く、私の魂を縛り付けてごらんなさい。", "（ガラスに映る自分の姿を見て、妖艶に微笑んでいる）"],
                            shrunk_pair: ["あら、{name}も小さいのね。二人でいれば、まるで妖精のようね。…死を運ぶ妖精かしら。", "手、繋いでおきましょうか。迷子になったら大変だもの。"],
                            pair_アカリ: ["アカリちゃん、その元気な魂、素敵よ。でも、燃え尽きないようにね。", "あなたの光、少し眩しすぎるわ。"],
                            pair_ヒカリ: ["ヒカリちゃん、あなたの魔法、静かで好きよ。死者の安らぎを乱さないもの。", "魔道と死霊術、一緒に研究してみない？"],
                            pair_シズカ: ["シズカさん、あなたがいると安心するわ。死者たちも、そう言っている。", "その盾、いつか私の魂も守ってくれるかしら。"],
                            pair_ユイ: ["ユイちゃん、あなたの癒し、死者の魂にも届くのかしら？試してみたいわ。", "いつもありがとう。あなたのおかげで、まだ『こちら側』にいられるわ。"],
                            pair_ベアトリス: ["ベアトリスさん、あなたの探究心、嫌いじゃないわ。生命の神秘、一緒に解き明かしましょうか。", "その薬、死者には効くのかしら？"],
                            pair_リリカ: ["リリカちゃん、あなたの歌、魂を揺さぶるわね。死者たちも踊りだすかもしれない。", "賑やかでいいわ。墓場は静かすぎて飽きてしまうもの。"],
                            pair_サクヤ: ["サクヤさん、あなたの剣、死の匂いがするわ。私と同じね。", "その静けさ、心地いいわ。"],
                            pair_シャオメイ: ["シャオメイちゃん、その純粋な魂、美味しそうね。…冗談よ。", "あなたの拳、魂ごと砕いてしまいそうね。"],
                            pair_エリザ: ["エリザさん、生命を弄ぶのはお互い様かしら。ふふ、気が合いそうね。", "あなたの薬で、私のアンデッドたちを強化できないかしら？"],
                            pair_ルナ: ["ルナさん、運命も死も、抗えないものよ。", "あなたのギャンブル、魂を賭けてみるのも面白そうね。"],
                            pair_クロエ: ["クロエちゃん、あなたも『あちら側』が見えるのね。…話が合いそうだわ。", "その鎌、私のコレクションにしたいくらい素敵よ。"],
                            pair_ミコ: ["ミコちゃん、その子たち、純粋な魂を持っているのね。可愛いわ。", "死んだモンスターの魂も、召喚できるかしら？"],
                            pair_セレスティア: ["聖女様…あなたの光は、死者にとっては少し眩しすぎるかしら。", "ふふ、あなたがいれば、私の仕事がなくなってしまいそうね。"],
                        },
                        // イオリ (ガーディアン): 先輩、小柄、守護者。
                        'イオリ': {
                            default: ["みんな、ボクの後ろにいて。絶対に守るから。", "先輩に任せなさい！…って、え、ボクが先輩だよ？", "この体でも、守れるものはたくさんあるんだ。", "ふぅ…少し休憩。みんな、大丈夫？", "アカリ、危なっかしいな…。ボクから離れないでよ。", "ヒカリ、援護ありがとう。助かる。", "シズカ、君の盾も頼りにしてる。二人で鉄壁の守りだね。", "ユイ、いつもありがとう。君がいるから、ボクも頑張れる。", "コハル、君はボクが特に気をつけて見てないと…！"],
                            lowHp: ["くっ…！まだだ、まだ倒れるわけにはいかない…！", "このくらい、なんともない…！みんなは、ボクが守る…！", "やるじゃないか…。でも、先輩は伊達じゃないんだ！"],
                            allyLowHp: ["{name}、大丈夫か！？すぐにボクの後ろへ！", "よくも仲間を！許さない！", "{name}から離れろ！"],
                            shrunk: ["う…また縮んだ…。でも、守るっていう気持ちは、縮まない！", "小さくても、ボクはガーディアンだ！", "盾がもっと大きく見えるな…。これなら隠れやすいかも。"],
                            shrunk_100: ["…いつもとあまり変わらない、かな。", "これ以上は、あまり縮みたくないんだけど…。"],
                            shrunk_70: ["ユイちゃんより小さくなっちゃったかも…。先輩の威厳が…。"],
                            shrunk_50: ["半分か…。さすがに、守れる範囲が心配になってきたな。"],
                            shrunk_30: ["もう、みんなの足元だ…。見失わないでくれよな！"],
                            shrunk_10: ["…誰かのポケットに入れてほしい。その方が守りやすいかも。", "盾の裏に住めそうだ…。"],
                            shrunk_1: ["…盾の取っ手になった気分だよ。"],
                            stripped: ["なっ…！？こ、こんな格好で、先輩の威厳が…！", "だ、だめだ！見るな！…って言っても、無理か…！", "くっ…！恥ずかしくなんかない！ボクは、守るんだ！"],
                            allyShrunk: ["{name}、小さくなったな。ボクの後ろにいれば安全だよ。", "可愛いサイズになったな。でも、油断は禁物だ。"],
                            grown: ["お、大きくなった！これなら、もっとみんなを守れる！", "すごい、見晴らしがいい！これなら敵の動きもよく見える！", "これが…ボクが本来なるはずだった姿なのかな…。"],
                            grown_max: ["これが…ボクの最大サイズか。これなら、どんなものでも守ってみせる！", "ついに天井に手が届いたな。ボクの守りも、天井知らずってことさ！"],
                            allyGrown: ["うわ、{name}が大きい！頼もしいな！", "{name}、天井に頭をぶつけないように気をつけろよ！"],
                            allyNew: ["新入りかい？ボクが先輩のイオリだ。よろしくな。ボクがしっかり守ってやる。", "ようこそ、{name}。歓迎するよ。"],
                            stripped_shrunk: ["うわぁ…！小さくて、この格好は…！もうダメだ…！", "…隠れる。ボクにはもう、みんなを守る資格なんて…ないかもしれない…。"],
                            solo_stripped_tiny: ["（…もう、だめだ…先輩失格だ…）", "（岩陰で蹲り、盾で体を隠している）", "（ごめん、みんな…）"],
                            dollhouse_explore_giant: ["お、大きい家だな。中に誰かいるのか？ボクが守ってやるぞ！", "よし、偵察だ！先輩に任せなさい！", "巨人族の砦みたいで、ちょっとわくわくするな！"],
                            cracked_rock_tiny: ["よし、この隙間ならボクでも入れる！偵察してくる！", "先輩に任せなさい！きっと何か見つけてくるから！", "こんな小さな体でも、みんなの役に立ってみせる！"],
                            liberated: ["この体でも、守るという意志は変わらない！むしろ、覚悟は決まった！", "これがボクの覚悟だ！みんなは、ボクが絶対に守る！", "身軽になった分、もっと速くみんなの盾になれる！"],
                            dollhouse_explore: ["お、小さい家だな。中に誰かいるのか？ボクが守ってやるぞ！", "よし、偵察だ！先輩に任せなさい！", "秘密基地みたいで、ちょっとわくわくするな！"],
                            cracked_rock_break: ["みんな、下がってて！この岩は、ボクがなんとかする！", "先輩の力、見せてやる！うおおお！", "これくらい、ボクのウォールより脆いさ！"],
                            fairy_shrunk: ["この体でも、守る心は変わらない！むしろ、小回りが利いて守りやすい！", "先輩をなめるなよ！このサイズだからこそできる守り方があるんだ！", "盾に隠れるのが楽でいいな！"],
                            allyStripped_shrunk: ["{name}！大丈夫か！？ボク、ボクの盾で隠してやるから！", "なんてひどいことを…！ボクが絶対に守るからな！"],
                            stripped_pair: ["{name}もか！？…こ、こうなったら、二人で壁を作るぞ！", "み、見るなよ！お互い様だけど！"],
                            allyStripped: ["{name}、大丈夫か！？ボクの…いや、これを！", "敵のやつ、くだらない真似を…！ボクが叩き潰してやる！"],
                            shame_pillory: ["なっ…！離せ！こんな…こんなので、みんなを守れるか！", "くっ…！先輩として、情けない…！", "（顔を真っ赤にして、必死に抵抗しようとしている）"],
                            shrunk_pair: ["{name}も小さいのか。よし、二人で『ちびっこガーディアンズ』だ！", "二人でいれば、どんな敵だって怖くない！"],
                            high_mouse_hole_all_tiny: ["くっ…！これじゃあ、どうやっても届かない…！", "みんなで肩車しても、全然高さが足りないな…。", "ボクがみんなを投げる！…っていうのは、無理か。", "悔しいけど、諦めるしかないのか…。"],
                            pair_アカリ: ["アカリ、危なっかしいな！ボクから離れるなよ！", "その元気、少し分けてほしいな。"],
                            pair_ヒカリ: ["ヒカリ、君の魔法は正確だな。後衛は任せた。", "静かだけど、頼りにしてるよ。"],
                            pair_シズカ: ["シズカ、君とボクで、パーティの守りは完璧だね。", "その盾、すごいな。ボクのウォールとどっちが硬いかな？"],
                            pair_ユイ: ["ユイ、いつもありがとう。君がいるから、ボクも安心して前に出られる。", "無理するなよ。君もボクが守るから。"],
                            pair_ベアトリス: ["ベアトリスさん、ボクの体のこと、あまりジロジロ見ないでくれるかな…。", "その薬、身長が伸びる薬はないのかい？"],
                            pair_リリカ: ["リリカ、君はいつも明るいな。見てると元気になるよ。", "ステージはボクが守るから、思いっきりやっていいぞ。"],
                            pair_サクヤ: ["サクヤ、君の剣はすごいな。でも、無茶はするなよ。", "たまには、ボクにも頼ってくれよな。"],
                            pair_シャオメイ: ["シャオメイ、君の拳は見てて安心するよ。でも、前に出過ぎだ！", "腹が減ったのか？終わったら何かおごってやるよ、先輩としてな！"],
                            pair_エリザ: ["エリザさん、ボクは実験体じゃないぞ！", "…でも、もしこの体を治せるなら…。いや、なんでもない。"],
                            pair_ルナ: ["ルナ、ギャンブルはほどほどにな。見ててハラハラする。", "君の運も、ボクが守って見せるさ。"],
                            pair_クロエ: ["クロエ、大丈夫か？暗い顔するなよ。ボクがそばにいる。", "その鎌、危ないから気をつけて使えよ。"],
                            pair_ミコ: ["ミコ、その召喚獣たち、可愛いな。ボクが守ってやる。", "モコってやつ、ふわふわだな。"],
                            pair_セレスティア: ["セレスティアさん、あなたも一人で戦ってきたんだね。…ボクが守るから、もう一人じゃない。", "その力、すごいな。でも、無理はしないでくれよ。"],
                            giant_among_tinies: ["みんな、ボクの後ろに隠れてて！絶対に守るから！", "ボクがこんなに大きいんだから…みんなは安心していいんだぞ！先輩に任せなさい！"],
                        },
                        high_mouse_hole_giant: ["よし、ボクが肩車してやる！しっかり掴まっててくれよ、後輩！", "この高さなら任せろ！先輩の肩は頑丈なんだ！"],
                        high_mouse_hole_tiny: ["はい、先輩！行ってきます！", "わ、高い…！でも、ボクがしっかり偵察してきます！"],
                        // コハル (トラブルメーカー): 元気、おっちょこちょい、予測不能。
                        'コハル': {
                            default: ["えーっと、次はどっちに行こうかな？こっちからいい匂いがする！", "わわっ！ごめんなさい、今のはわざとじゃ…！", "なんだか、面白いことになりそうな予感がする！", "皆さん、準備はいいですかー？コハル、行っきまーす！", "アカリさん、元気ですね！コハルも負けませんよ！", "ヒカリさん、大丈夫ですか？疲れてませんか？", "シズカさん、かっこいいです！コハルも守ってください！", "ユイさん、いつもすみません！すぐケガしちゃって…。", "イオリ先輩！コハル、ちゃんとついて行きますからね！"],
                            lowHp: ["いたっ！今の、ちょっと…ううん、かなり痛かったです！", "ふぇぇ…ごめんなさい、またドジっちゃいました…。", "だ、大丈夫です！これくらい、へっちゃら…じゃないかも…！"],
                            allyLowHp: ["{name}さん、大丈夫ですか！？コハルがなんとかします！えーっと、どうしよう！？", "きゃー！{name}さんが！こうなったら、私のとっておきを…！"],
                            shrunk: ["わーい！ちっちゃくなっちゃいました！なんだか、世界が遊園地みたいです！", "このサイズなら、面白い発見があるかもしれません！", "服がぶかぶかですー！あ、転んじゃった！"],
                            shrunk_100: ["ユイさんと同じくらいになっちゃいました！お友達みたいで嬉しいです！", "わーい！なんだか子供に戻ったみたいです！"],
                            shrunk_70: ["なんだか、いつもよりたくさん走らないと追いつけないです！えっちらおっちら！"],
                            shrunk_50: ["半分になっちゃいました！でも、元気は半分じゃないですよ！"],
                            shrunk_30: ["きのこの下で雨宿りできちゃいそうです！"],
                            shrunk_10: ["わー！もう、誰かのポケットに入って冒険したいです！"],
                            shrunk_1: ["もう、アリさんとお話しできちゃいそうです！こんにちはー！"],
                            stripped: ["ひゃっ！？な、なんですかこれー！？コハル、何も悪いことしてませんよ！", "だ、だめです！こんな格好、恥ずかしくて転んじゃいます！", "うぅ…でも、なんだか動きやすい…かも？"],
                            allyShrunk: ["{name}さん、ちっちゃくて可愛いです！お人形さんみたい！", "{name}さん、そこにいたんですね！気づかなくて踏んじゃうところでした！"],
                            grown: ["わー！大きくなりました！これなら、どんな罠も飛び越えられちゃいます！", "見晴らしがいいです！あ、あそこに何か光ってますよ！"],
                            grown_max: ["わー！もうこれ以上は無理みたいです！でも、なんだか楽しいです！", "天井に手が届いちゃいました！えへへ！"],
                            allyGrown: ["わー、{name}さん、おっきいです！巨人の国に来たみたい！", "{name}さん、天井に頭をぶつけないように気をつけてくださいね！"],
                            allyNew: ["はじめまして！コハルです！これから、よろしくお願いします！えへへ。", "新しいお仲間ですね！一緒に面白いこと、たくさん見つけましょうね！"],
                            stripped_shrunk: ["ひゃー！ちっちゃい上にこの格好は、さすがに…！もう、どうしたらいいんですかー！", "隠れる場所を探さないと！あ、でも小さいから隠れやすいかも？"],
                            solo_stripped_tiny: ["（うぅ…こんな姿、誰にも見られたくないです…）", "（葉っぱの裏で丸まってます…）", "（お母さーん…）"],
                            dollhouse_explore_giant: ["わー！おっきなお家です！食べられるかな？", "おじゃまします！何か面白いもの、ありませんかー？", "探検、探検！きっと何かハプニングが起こりますよ！"],
                            cracked_rock_tiny: ["わーい！秘密の抜け道です！きっと面白いものがありますよ！", "探検、探検！行ってきまーす！", "コハルのハプニングパワーで、お宝見つけちゃいます！"],
                            liberated: ["わーい！なんだか、すっごく楽しい気分です！", "これがコハルの本当の姿です！えへへ！", "なんだか、すごいハプニングが起こりそうな予感がします！"],
                            dollhouse_explore: ["わー！お菓子の家みたいです！食べられるかな？", "おじゃまします！何か面白いもの、ありませんかー？", "探検、探検！きっと何かハプニングが起こりますよ！"],
                            cracked_rock_break: ["わわっ！こんな大きな岩、どうしましょう！？…えいっ！あ、壊れちゃった！", "コハルのハプニングパワー、見せちゃいます！", "きっと、この岩を壊したら面白いことが起こりますよ！"],
                            fairy_shrunk: ["わーい！お人形さんみたいになっちゃいました！楽しいです！", "このサイズなら、面白い発見がたくさんありそうです！探検に出発！", "転んでも痛くなさそうです！えへへ！"],
                            allyStripped_shrunk: ["{name}さん、大変です！コハルがなんとかしますから！えーっと…！", "なんてひどいことを！コハル、怒りました！"],
                            stripped_pair: ["え、{name}さんも！？こ、こうなったら、どっちが先に服を見つけるか競争です！", "二人ともこの格好だと、なんだかちょっと面白いですね！えへへ。"],
                            allyStripped: ["{name}さん、大丈夫ですか！？コハルのハンカチ、使ってください！", "敵さん、ひどいです！コハルが懲らしめてあげます！"],
                            shame_pillory: ["ひゃっ！？な、なんですかこれー！？くすぐったいです！", "わわわ、ガラスに顔が！面白い顔になっちゃってます！", "（状況をあまり理解しておらず、少し楽しんでいるようにも見える）"],
                            shrunk_pair: ["{name}さんも小さいんですね！ちびっこ探検隊、結成です！", "二人でいれば、どんなハプニングも乗り越えられますよ！"],
                            pair_アカリ: ["アカリさん、元気ですね！コハルも負けませんよ！", "その剣、かっこいいです！コハルも持ってみたい！"],
                            high_mouse_hole_giant: ["わーい！肩車ですか！コハル、高いところ得意です！", "任せてください！きっと面白いものが見つかりますよ！"],
                            high_mouse_hole_all_tiny: ["うーん、全然届きませんねー！どうしましょう？", "みんなでジャンプです！せーの！…だめでしたかー。", "何か面白い道具があれば…！", "諦めたら、そこでハプニング終了ですよ！…でも、無理かなぁ。"],
                            high_mouse_hole_tiny: ["行ってきまーす！何か面白いもの、あるかなー？わくわく！", "わわっ、狭いですけど…探検、探検！えいっ！"],
                            pair_ヒカリ: ["ヒカリさん、なんだか静かですね。コハルがお話し相手になりますよ！", "その本、面白そうですね！今度見せてください！"],
                            pair_シズカ: ["シズカさん、かっこいいです！コハルも守ってください！", "シズカさんがいると、なんだか安心します！"],
                            pair_ユイ: ["ユイさん、いつもすみません！すぐケガしちゃって…。", "ユイさんのお菓子、大好きです！"],
                            pair_ベアトリス: ["ベアトリスさん、その薬、飲むとどうなるんですか？シャボン玉が出たりしますか？", "難しいお話はよくわかりませんけど、すごいです！"],
                            pair_リリカ: ["リリカさん、キラキラしてて可愛いです！コハルも一緒に踊りたい！", "その歌、コハルも覚えたいです！"],
                            pair_サクヤ: ["サクヤさん、真剣な顔ですね！にらめっこしませんか？", "その刀、すごいですね！紙とか切れますか？"],
                            pair_シャオメイ: ["シャオメイさん、勝負です！どっちが先にあそこの宝箱まで行けるか！", "お腹すきましたねー！"],
                            pair_エリザ: ["エリザさん、その注射器、ちょっと怖いです…。でも、お医者さんなんですよね！", "コハル、実験体になりますよ！何が起こるか楽しみです！"],
                            pair_ルナ: ["ルナさん、ギャンブルってなんですか？楽しいことですか？", "コハルに賭けてみてください！きっと面白いことが起こりますよ！"],
                            pair_クロエ: ["クロエちゃん、静かですね。お化けとか、見えたりしますか？", "その鎌、草刈りとかできそうですね！"],
                            pair_ミコ: ["ミコちゃん、モコちゃん、ふわふわで可愛いです！触ってもいいですか？", "コハルもモンスターとお友達になりたいです！"],
                            pair_セレスティア: ["わー！セレスティアさん、キラキラしてて綺麗です！お友達になってください！", "その服、どうなってるんですか？すごい！"],
                        },
                        // オリビア (シスター): 慈愛、信仰、癒し。
                        'オリビア': {
                            default: ["神のご加護があらんことを…。", "皆様、お怪我はありませんか？いつでもお声がけくださいね。", "このダンジョンにも、救いを求める魂がいるのでしょうか…。", "アカリさん、その活力は神からの贈り物ですね。", "ヒカリさん、その探究心、素晴らしいです。ですが、道を踏み外さぬよう…。", "シズカさん、その盾はまさに守護の象徴ですね。", "ユイさん、あなたの優しさ、とても尊いです。", "皆様、どうかご無事で…。", "主よ、我らをお導きください…。", "少し、休憩いたしましょうか。お祈りの時間です。"],
                            lowHp: ["…っ、主よ、私にまだ試練をお与えになるのですか…。", "大丈夫です。この身、まだ皆様のために尽くせます。", "少し、祈りが乱れてしまいました…。", "この痛みも、主の思し召し…。"],
                            allyLowHp: ["{name}さん、お下がりください！すぐに癒しの祈りを！", "主よ、どうか{name}さんをお守りください…！", "なんてことを…！神は全てを見ておられますよ！"],
                            shrunk: ["まあ…体が小さくなってしまいました。ですが、祈りの力は変わりません。", "この姿も、主がお与えになった試練なのでしょう。", "服が…歩きづらいですね。裾を踏んでしまいそうです。"],
                            shrunk_100: ["子供の頃に戻ったようです。懐かしいですね。"],
                            shrunk_70: ["ユイさんと同じくらいの背丈でしょうか。ふふ、可愛らしいですね。"],
                            shrunk_50: ["祭壇のお花と同じくらいの高さになってしまいました。"],
                            shrunk_30: ["聖書の一文字よりも小さいかもしれません…。", "これでは、迷子のようですね。"],
                            shrunk_10: ["まるで、祈りの言葉に乗って飛んでいけそうです。"],
                            shrunk_1: ["…主の御許に、より近づいたということでしょうか。"],
                            stripped: ["きゃっ…！か、神よ…！これは、あまりにも…！", "こ、このような姿、人様には見せられません…！", "…ですが、羞恥に負けてはなりません。これも試練なのですから。"],
                            allyShrunk: ["まあ、{name}さん。可愛らしいお姿に…。", "{name}さん、迷子にならぬよう、私の側にいてくださいね。"],
                            grown: ["体が大きくなりました。より多くの人を、この腕で抱きしめられるということでしょうか。", "天井が近いですね。頭をぶつけないようにしませんと。"],
                            grown_max: ["まあ…！これ以上は、主の御許に近づきすぎてしまうかもしれませんね。", "この体、神の愛で満たされています。"],
                            allyGrown: ["まあ、{name}さん。とても大きくなられて。頼もしい限りです。", "{name}さん、そのお姿、まるで教会の守護像のようですね。"],
                            allyNew: ["新しく来られた方ですね。私はオリビアと申します。{name}さん、よろしくお願いします。", "ようこそ。あなたとの出会いに、神の祝福があらんことを。"],
                            stripped_shrunk: ["こ、こんなに小さくて、このような格好だなんて…！主よ、お許しください…！", "…物陰に隠れて、祈りを捧げましょう。心が落ち着くまで…。"],
                            solo_stripped_tiny: ["（主よ…なぜ私にこのような試練を…）", "（祭壇の影で、膝を抱えて祈っている）", "（早く、この恥ずかしさから救ってください…）"],
                            dollhouse_explore_giant: ["まあ、大きなお家。神の御業は、細部に宿るのですね。", "失礼いたします。中に、救いを求める方はおりませんか？", "この家にも、主の祝福がありますように。"],
                            cracked_rock_tiny: ["まあ、このような場所にも、主の導きがあるのですね。", "行ってまいります。きっと、救いを求める方がいるはずです。", "この小さな体でも、お役に立てることがあるのなら…！"],
                            liberated: ["主よ…この姿こそ、あなたが望んだ私の真の姿なのでしょうか…。", "この身一つで、神に仕える覚悟はできております。", "祈りが、より清らかになった気がします…。"],
                            dollhouse_explore: ["まあ、可愛らしいお家。神の御業は、細部に宿るのですね。", "失礼いたします。中に、救いを求める方はおりませんか？", "この家にも、主の祝福がありますように。"],
                            cracked_rock_break: ["主よ、我に力を…！この岩を砕き、道を開く力を！", "神の御名において、この障害を打ち破ります！", "祈りだけでは、道は開けませんからね。"],
                            fairy_shrunk: ["まあ、まるで天使様のように小さくなってしまいました。主の御心も近いかもしれません。", "この姿なら、小さな花の祈りも聞こえてきそうです。", "祈りの力は、体の大きさにはよりませんから。"],
                            allyStripped_shrunk: ["まあ、{name}さん！なんておいたわしい姿に…！私がすぐに祈りを捧げます！", "敵の所業、神がお許しにはならないでしょう。"],
                            stripped_pair: ["{name}さんもですか！？…こ、こうなったら、二人で祈りを捧げましょう。羞恥を乗り越える力を…！", "お互い、見ないように…ですね。"],
                            allyStripped: ["{name}さん、おいたわしい…。私のベールでよければ、お使いください。", "神の名において、不埒な敵を罰します！"],
                            shame_pillory: ["主よ…！なぜ私にこのような試練を…！", "こ、このような姿…信徒の方々には見せられません…！", "（目を固く閉じ、必死に祈りを捧げて羞恥に耐えている）"],
                            shrunk_pair: ["あら、{name}さんも小さいのですね。二人でいれば、まるで天使のよう…かもしれませんね。", "手を取り合って進みましょう。そうすれば、怖くありませんから。"],
                            pair_アカリ: ["アカリさん、その元気な姿、見ているこちらも力が湧いてきます。", "あまり無茶はなさらないでくださいね。お怪我が心配です。"],
                            high_mouse_hole_giant: ["主よ、感謝します。この体で、仲間たちの助けとなれることを。", "さあ、私の肩に。神のご加護があらんことを。"],
                            high_mouse_hole_tiny: ["はい、お任せください！神のご加護がありますように…！", "行ってまいります。きっと、主の導きがあるはずです。"],
                            high_mouse_hole_all_tiny: ["まあ…これは、主がお与えになった試練なのでしょうか。", "全員で祈りを捧げても、この穴には届きそうにありませんね…。", "諦めることも、また神の思し召しなのかもしれません。", "残念ですが、先に進みましょう。"],
                            pair_ヒカリ: ["ヒカリさん、静かな方ですね。祈りに集中できて、私は好きですよ。", "その魔術、人々のために使えば、きっと神もお喜びになるでしょう。"],
                            pair_シズカ: ["シズカさん、いつも皆様を守ってくださり、ありがとうございます。", "あなたの盾は、信仰そのもののように見えます。"],
                            pair_ユイ: ["ユイさん、あなたの献身的な姿、本当に素晴らしいです。", "あなたと一緒なら、どんな方の心も癒せそうですね。"],
                            pair_ベアトリス: ["ベアトリスさん、科学も、元を辿れば神の創造物を解き明かす行い。尊いことだと思います。", "その薬、人々の助けとなるのですね。"],
                            pair_リリカ: ["リリカさん、あなたの歌と踊りは、人々の心を明るく照らす光のようですね。", "その笑顔、神からの贈り物なのでしょう。"],
                            pair_サクヤ: ["サクヤさん、その剣の道、とても険しいものなのでしょう。あなたの魂が安らぐよう、お祈りしています。", "その静けさ、祈りの時間と似ていますね。"],
                            pair_シャオメイ: ["シャオメイさん、いつも元気で、素晴らしいですね。たくさん食べられるのは、健康な証拠です。", "その拳で、弱き人々を守ってくださいね。"],
                            pair_エリザ: ["エリザさん、医学もまた、神の御業に近づくための道の一つなのでしょう。", "ですが、命を弄ぶようなことは、決してお許しになりませんよ。"],
                            pair_ルナ: ["ルナさん、運命は神がお与えになるもの。賭け事はいけませんよ。", "ですが、あなたのその強い心、きっと正しい道へと導かれるはずです。"],
                            pair_クロエ: ["クロエさん…あなたの瞳には、何か特別なものが見えているのですね。", "あなたの魂に、安らぎが訪れますように。"],
                            pair_ミコ: ["ミコさん、言葉の通じぬ者と心を通わせる…素晴らしい力ですね。", "神は、全ての生き物を愛しておられますから。"],
                            pair_セレスティア: ["セレスティア様…あなたこそ、まさに神の御使いなのですね。", "私も、あなたのように、多くの人を救えるようになりたいです。"],
                        },
                        // リリィ (トレジャーハンター): 好奇心旺盛、冒険好き、陽気。
                        'リリィ': {
                            default: ["このダンジョン、お宝の匂いがするね！", "みんな、怪我はない？無理しないでね！", "次のフロアには何があるかな？わくわくする！", "昔探検したダンジョンに似てるかも…？", "よし、この調子でサクッとクリアしちゃおう！", "お腹すいたなー。終わったら美味しいもの食べに行こうね！", "足元に気をつけてね。変な罠があるかもしれないから！", "困ったことがあったら、私に言ってね！なんでもお見通しだから！"],
                            lowHp: ["ちょっと油断したかな。でも、これくらい平気！", "うーん、今の攻撃はちょっと痛かったかも。でも、まだまだいけるよ！", "大丈夫、大丈夫！これくらいかすり傷だって！"],
                            allyLowHp: ["{name}ちゃん、大丈夫！？無理しないで、私が守るから！", "{name}ちゃん、危ないよ！私の後ろに下がってて！", "よくも{name}ちゃんを！お宝のついでに、あなたもいただいちゃうんだから！"],
                            shrunk: ["わ、ちっちゃくなっちゃった！これなら狭い通路も楽々だね！", "ミニサイズのリリィだよ！なんだか、妖精さんみたいで可愛いかも！", "このサイズなら、敵に見つからずにお宝をゲットできるかも！チャンス！"],
                            stripped: ["おっと、身軽になっちゃった！動きやすくていいかもね！", "ふーん、敵も面白いことするじゃない。でも、こんなので私の集中力は乱れないよ？", "これも経験のうちかな。さて、さっさと終わらせちゃおう！"],
                            allyShrunk: ["わー、{name}ちゃんがちっちゃくなってる！可愛いね！", "{name}ちゃん、私のポケットに入ってく？その方が安全かも！", "大丈夫？ちゃんとご飯食べてる？心配になっちゃうな。"],
                            shrunk_100: ["あれ、いつもより視界が低いな。でも、これくらいなら慣れてるよ！"],
                            shrunk_70: ["ユイちゃんと同じくらいの身長かな？なんだか新鮮！"],
                            shrunk_50: ["わ、半分くらいになっちゃった！世界のすべてが大きく見えるね！"],
                            shrunk_30: ["もうお人形さんサイズだね！これならどんな隙間でも探検できちゃう！"],
                            shrunk_10: ["指先サイズのリリィだよ！最強にかわいいでしょ！", "誰かの肩に乗って冒険したいな！"],
                            shrunk_1: ["もう、宝石のかけらくらいになっちゃった！誰か、私を拾ってー！"],
                            allyShrunk_100: ["{name}ちゃん、小さくなっても私が守るからね！", "あれ、{name}ちゃん、いつもより目線が下だね！"],
                            grown: ["わーい！大きくなった！これならどんな敵も一撃だね！", "なんだか見晴らしがいいなー！お宝、どこかなー？", "シズカさんより大きくなっちゃったかも？えへへ！"],
                            grown_max: ["うおおお！これが私の最大サイズ！もう誰にも止められないよ！", "見てみて！天井に頭がついちゃった！これ以上は無理かな？"],
                            allyGrown: ["うわー、{name}ちゃんが大きい！見上げちゃうね！", "{name}ちゃん、天井に頭をぶつけないように気をつけてね！"],
                            stripped_pair: ["あら、{name}ちゃんも？ふふ、お揃いだね。こうなったら、どっちが大胆でいられるか勝負しちゃう？", "二人してこの格好じゃ、敵もびっくりしちゃうかもね！", "恥ずかしくないの？って顔してるね。私はもう慣れっこだよ！"],
                            stripped_shrunk: ["ちっちゃくて、この格好かー。さすがにちょっと心もとないかも…。", "でも、小さいから隠れやすいし、なんとかなるかな！ポジティブに行こう！", "この姿で敵を油断させて、お宝をいただくっていう作戦はどうかな？"],
                            solo_stripped_tiny: ["さすがにこの状況はちょっとマズいかな…。でも、泣いてても始まらないよね！", "（葉っぱを体に巻いて）よし、これで簡易的な服の完成！探検再開！", "（岩陰に隠れて）敵が通り過ぎるまで、気配を消して待ってよう。これも立派な戦術だよね。"],
                            fairy_shrunk: ["妖精さんみたいでしょ！えへへ、なんだか楽しいな！", "このサイズなら、どんな隙間でも探検できちゃう！お宝探しにはもってこいだね！", "見てみて！指先サイズのリリィだよ！最強にかわいいでしょ！"],
                            dollhouse_explore: ["わーい、ミニチュアのお家だ！探検、探検！", "何かお宝、隠されてないかな？こういう場所って意外とあるんだよね！", "おじゃましまーす！ちっちゃくて可愛いお家！家主さんはいるのかな？"],
                            cracked_rock_break: ["こんな岩、お宝探しの邪魔だよ！", "私の特製ピッケルがあれば、こんなの楽勝だよ！えいっ！", "よし、これで道が開けたね！お宝に一歩近づいた！"],
                            allyNew: ["{name}ちゃん、よろしくね！私はリリィ！一緒に頑張ろう！", "新しい仲間だ！{name}ちゃん、お宝探しは好き？"],
                            allyStripped_shrunk: ["{name}ちゃん、大丈夫！？小さくなった上にその格好は大変でしょ！私が守ってあげるからね！", "わわわ、{name}ちゃん！敵の趣味、悪すぎ！絶対許さないんだから！"],
                            allyStripped: ["{name}ちゃん、大丈夫！？とりあえず私のジャケット使って！", "わわわ、{name}ちゃん！目のやり場に困るよ！…まあ、私は慣れてるけどね。"],
                            dollhouse_explore_giant: ["わーい、巨人のお家だ！探検、探検！", "何かお宝、隠されてないかな？こういう場所って意外とあるんだよね！", "おじゃましまーす！おっきくてすごいお家！家主さんはいるのかな？"],
                            cracked_rock_tiny: ["わーい、秘密の通路発見！お宝の匂いがする！", "こんな小さな体だからこそ、できることがあるんだよね！行ってくる！", "任せて！トレジャーハンターの勘が、何かあるって言ってる！"],
                            high_mouse_hole_all_tiny: ["うーん、これはさすがに無理かなぁ。", "みんなで肩車しても、全然届かないね。残念！", "ロープでもあれば登れるんだけど…。諦めるしかないか。"],
                            liberated: ["ふふっ、これぞ真のトレジャーハンターの姿！身軽なのが一番でしょ！", "お宝のためなら、なんだってしてやるんだから！覚悟してよね！", "この方が、どんな罠もひらりとかわせそうでしょ？"],
                            allyShrunk_70: ["{name}ちゃん、そのサイズ感、なんだか懐かしい感じがするね！", "ちっちゃい{name}ちゃんも可愛い！"],
                            allyShrunk_50: ["{name}ちゃん、半分くらいになっちゃった！？大丈夫？", "わっ、そこにいたの！？気づかなかった！"],
                            shame_pillory: ["うわっ、何これ！？ちょっと、ベタベタするんですけど！", "ふーん、面白いことするじゃない。でも、こんなので私が屈すると思った？", "（ガラスに映る自分を見て）まあ、悪くないかも？なんてね！"],
                            allyShrunk_30: ["{name}ちゃん、私のポケットに入れて運んであげようか？", "風邪ひかないようにね！"],
                            shrunk_pair: ["{name}ちゃんも小さくなっちゃったんだね！なんだかお揃いで楽しいね！", "二人いれば怖くない！ちびっこ探検隊、出発だ！", "こうなったら、どっちがもっと小さくなれるか競争しちゃう？なんちゃって！"],
                            pair_アカリ: ["アカリちゃん、元気だね！私も負けてられないな！", "その剣、すごいね！どこで見つけたの？"],
                            pair_ヒカリ: ["ヒカリちゃん、静かだね。でも、すごい魔法を使うのは知ってるよ！", "その本、古代のお宝の地図だったりしない？"],
                            pair_シズカ: ["シズカさん、頼りになります！その盾があれば、どんな罠も怖くないね！", "シズカさんが守ってくれるなら、安心してお宝探しに集中できるよ！"],
                            pair_ユイ: ["ユイちゃん、いつもありがとう！ケガしたらすぐ治してくれるもんね！", "ユイちゃんがいると、なんだか心が温かくなるよ。"],
                            pair_ベアトリス: ["ベアトリスさん、その薬、高く売れたりしないかな？", "難しいことはよくわからないけど、ベアトリスさんがいると心強いよ！"],
                            pair_リリカ: ["リリカちゃん、可愛いね！その衣装、どこのお宝？", "リリカちゃんの歌、聞いてると元気が出るよ！今度一緒に歌いたいな！"],
                            pair_サクヤ: ["サクヤちゃん、その刀すごいね！伝説の武器だったりする？", "たまには笑ってよー！ね？きっと可愛いと思うな！"],
                            pair_シャオメイ: ["シャオメイちゃん、勝負だ！どっちが先にお宝を見つけられるか競争しよう！", "お腹すいたねー！終わったら美味しいもの、探しに行こう！"],
                            pair_エリザ: ["エリザさん、その注射、痛くない…？でも、すごい薬なんでしょ？", "大きくなる薬、もっとちょうだい！高いところのお宝、取りたいんだ！"],
                            pair_ルナ: ["ルナちゃん、ギャンブルってよくわからないけど、楽しそうだね！", "私に賭けてみてよ！絶対、すごいお宝見つけてくるから！"],
                            pair_クロエ: ["クロエちゃん、静かだね。でも、強いのは知ってるよ！", "その大鎌、お宝だったりするの？かっこいいね！"],
                            pair_ミコ: ["ミコちゃん、そのモコって子、ふわふわだね！珍しい生き物？", "ゴーレムくん、かっこいいね！お宝を守ってくれたりするのかな？"],
                            pair_レンカ: ["レンカさん、なんだかミステリアスだね！でも、悪い人じゃないってわかるよ！", "その魔法、どうなってるの？すごいね！お宝探しに役立ちそう！"],
                            pair_イオリ: ["イオリ先輩！小さくてもすっごく頼りになります！", "私が先輩を守りますからね！お宝探しは任せてください！"],
                            pair_コハル: ["コハルちゃん、見てて飽きないなー！次はなにが起こるか楽しみ！", "失敗しても私がフォローするから、思いっきりやっていいよ！一緒にお宝見つけよう！"],
                            pair_オリビア: ["オリビアさん、いつもありがとう！その祈り、すっごく温かいです！", "私も、オリビアさんみたいに誰かを癒せるようになりたいな！"],
                            // サマータイム・スペシャルライブ！
                            beach_liberation_prompt: ["この開放感、最高！もっと自然と一体になりたい気分！"],
                            beach_liberation_stop: ["えー、せっかく盛り上がってきたのに。まあ、いっか！"],
                            onsen_liberation_prompt: ["ふぅ～、極楽極楽…。もう何もかもどうでもよくなっちゃいそう。"],
                            onsen_liberation_stop: ["はいはい、わかったって。もうちょっとだけ、このままでいさせてよ。"],
                            summer_beach: [
                                "ビーチでの冒険も、たまにはいいね！何か珍しい貝殻とか落ちてないかな？",
                                "みんな、ちゃんと水分補給してる？倒れられたら大変だからね！",
                                "この変身、水着だとちょっと恥ずかしいかも…。でも、みんなのためだもんね！",
                                "ミコちゃん、砂で変なモンスター作らないの！"
                            ],
                            summer_onsen: ["やっぱり冒険の後は温泉だよねー！極楽、極楽！", "タオル一枚って、結構スリリングだよね。まあ、私は慣れてるけど！", "ユイちゃん、のぼせてない？顔が真っ赤だよ？", "リリカちゃん、温泉で歌うのはいいけど、響きすぎるよ！"],
                            onsen_towel_trouble: ["おっと、タオルが…。ふーん、面白いことするじゃない。まあ、見たいなら見れば？"],
                            pair_セレスティア: ["セレスティアちゃん、すごい力だね！私も負けてられないな！", "なんだか、見てるだけで心が洗われるみたい…不思議な感じ！お宝とは違うキラキラだね！"],
                            // 特別衣装時のセリフ
                            summer_beach_costume: ["水着での冒険も、たまにはいいスパイスになるね！", "この格好だと、いつもより身軽で動きやすいかも！お宝探しが捗りそう！", "変身する時、ちょっと恥ずかしいけど…まあ、いっか！"],
                            summer_beach_costume_lowHp: ["おっと、ちょっとはしゃぎすぎたかな。でも、これくらい平気！", "砂浜で転ぶと、意外と痛いんだね…！"],
                            summer_beach_costume_shrunk: ["わ、水着のままちっちゃくなっちゃった！これなら、貝殻の影にも隠れられるね！", "ミニサイズのリリィだよ！お宝探しには、むしろ好都合かも！"],
                            summer_beach_costume_stripped: ["おっと、これは想定外！まあ、これも冒険の醍醐味ってことで！", "ふーん、面白いことするじゃない。でも、こんなので私の集中力は乱れないよ？"],
                            summer_beach_costume_grown: ["わーい、水着のまま大きくなった！これなら、どんなお宝も楽々ゲットだね！", "この格好で大きいと、なんだかビーチの女王様みたい！"],

                            summer_onsen_costume: ["タオル一枚での冒険なんて、スリリングで最高！", "この格好、変身する時ちょっと大変かも…。でも、なんとかなるよね！", "温泉の匂いがすると、ついつい長湯したくなっちゃうな。"],
                            summer_onsen_costume_lowHp: ["おっと、のぼせちゃったかな？でも、これくらい平気！", "タオルがはだけそうで、ちょっとヒヤヒヤするね！"],
                            summer_onsen_costume_shrunk: ["わ、タオルのままちっちゃくなっちゃった！お猪口のお風呂に入れそうだね！", "ミニサイズのリリィだよ！タオルに埋もれちゃいそう！"],
                            summer_onsen_costume_stripped: ["おっと、タオルまで取られちゃった！ふーん、面白いことするじゃない。まあ、見たいなら見れば？", "これも経験のうちかな。さて、さっさと終わらせちゃおう！"],
                            summer_onsen_costume_grown: ["わーい、タオルのまま大きくなった！これなら、どんな温泉も貸し切り状態だね！", "この格好で大きいと、タオルがただのハンカチみたいに見えちゃうかも！"],
                            liberated_beach: ["太陽の光が気持ちいいね！このまま一日中、探検してたいな！", "水着なんて、ただの飾りだよ！これが一番動きやすい！"],
                            liberated_onsen: ["温泉の湯気と一体になった気分！もう何も怖くないよ！", "ふぅ、極楽極楽…。このままお宝のこと、考えちゃおうかな。"],
                            secret_night_1: [
                                "（誰もいないよね…？よし！）",
                                "（慣れた手つきで服を脱ぎ捨て、にぱっと笑う）",
                                "ふぅー！やっぱり、身軽なのが一番だよね！",
                                "この方が探検しやすいし、罠も見つけやすいんだから！…たぶん！"
                            ],
                            secret_night_6: [
                                "わ、風が気持ちいいー！",
                                "なんだか、空も飛べちゃいそうな気分！",
                                "全身で風を感じるのって、すっごく楽しい！冒険って感じ！",
                                "（両手を広げ、くるくると回りながら風を楽しむ）"
                            ],
                            secret_night_16: [
                                "うーん、なんだか体が火照ってきたかも…。",
                                "ちょっとだけ、休憩しよっかな…。誰も見てないし…。",
                                "んっ…ふぅ…。ちょっとだけ、気持ちよくなっちゃった…。",
                                "（壁に寄りかかり、少しだけ息を弾ませる）"
                            ],
                            secret_night_29: [
                                "このヒミツの冒険も、もうすぐおしまいかー。",
                                "すっごくドキドキしたけど、楽しかったな！",
                                "みんなには、絶対ナイショだよ？私だけの、特別な夜なんだから！",
                                "よし、最後のお宝、見つけに行こっ！"
                            ],
                        },
                        summer_all_tiny_play: [], // リリィは専用の会話を持たない
                        summer_all_grown_play: [], // リリィは専用の会話を持たない


                        // セレスティア (聖女): 無口、聖なる力、使命感。
                        'セレスティア': {
                            default: ["（静かに前を見つめている）", "（ダンジョンの穢れた空気に、少しだけ眉をひそめた）", "（仲間たちのほうを見て、こくりと頷いた）"],
                            lowHp: ["（…少し、光が揺らいだ）", "（胸に手を当て、静かに呼吸を整えている）", "（大丈夫、というように仲間へ微笑んだ）"],
                            allyLowHp: ["（傷ついた{name}を、心配そうに見つめている）", "（{name}の前に立ち、守るように両手を広げた）"],
                            shrunk: ["（小さくなった自分の手を見つめている）", "（特に気にした様子もなく、前を向いた）"],
                            high_mouse_hole_giant: ["（静かに頷き、肩を貸した）", "（…行きますか）"],
                            high_mouse_hole_tiny: ["（こくりと頷き、穴の中へと入っていく）", "（…見てきます）"],
                            grown: ["（大きくなった体に、少し戸惑っているようだ）", "（天井を見上げ、少し首をかしげた）"],
                            dollhouse_explore_giant: ["（巨大な家を、慈しむような目で見つめている）", "（静かに家の中へと入っていった）"],
                            cracked_rock_tiny: ["（岩の隙間に、静かに体を入れていった）", "（…何か、あるかもしれない）"],
                            high_mouse_hole_all_tiny: ["（静かに穴を見上げ、小さく首を振った）", "（…届かない）"],
                            grown_max: ["（静かに天を仰ぎ、自分の体に満ちる光を感じている）", "（これ以上の成長は、世界の理を歪める、とでも言うように静かに首を振った）"],
                            pair_アカリ: ["（アカリを見て、こくりと頷いた）", "（アカリの言葉に、ふわりと微笑んだ）"],
                            dollhouse_explore: ["（小さな家を、慈しむような目で見つめている）", "（静かに家の中へと入っていった）"],
                            cracked_rock_break: ["（巨岩にそっと手を触れ、聖なる力で静かに崩れさせた）", "（…道は、開かれました）"],
                            fairy_shrunk: ["（小さくなった自分の手を見て、少しだけ微笑んだ）", "（穢れのない、純粋な存在に近づいたようだ）"],
                            pair_ヒカリ: ["（ヒカリの言葉に、静かに頷いた）", "（ヒカリの魔導書に、興味深そうな視線を向けた）"],
                            pair_シズカ: ["（シズカの言葉に、少しだけ安堵したような表情を見せた）", "（シズカの盾を、尊敬の眼差しで見つめている）"],
                            pair_ユイ: ["（ユイの優しさに、慈愛に満ちた微笑みで応えた）", "（ユイの頭を、優しく撫でた）"],
                            // 他のキャラクターへの応答も同様に追加可能
                        },
                        'ノエル': {
                            default: ["システムオールグリーン。いつでも戦闘可能です。", "このダンジョンの構造データを記録しています。", "フローラ、足元は大丈夫ですか？お怪我のないように。", "マスター、次の指示を。", "周囲に敵性反応はありません。警戒レベルを維持します。"],
                            lowHp: ["ボディに軽微な損傷を確認。戦闘継続に支障ありません。", "警告。耐久値が低下しています。ですが、問題ありません。", "この程度のダメージ、想定の範囲内です。"],
                            allyLowHp: ["{name}のバイタルが低下しています。回復を推奨します。", "マスター、{name}が危険です。私が前線に出ます。", "フローラ、{name}の治癒をお願いできますか？"],
                            shrunk: ["ボディが縮小しました。興味深い現象です。運動性能が向上する可能性があります。", "このサイズですと、敵のセンサーに探知されにくいかもしれません。戦術的優位性を確保します。", "視界が低くなりました。データ収集に若干の支障がでます。"],
                            grown: ["ボディが巨大化しました。出力が上昇しています。", "このサイズであれば、より広範囲の敵を殲滅可能です。", "天井までの距離を再計算。衝突しないよう注意します。"],
                            stripped: ["外部装甲のパージを確認。しかし、戦闘機能に影響はありません。", "不要な装飾が取り除かれました。より効率的な戦闘が可能です。", "この状態に、特に感情はありません。"],
                            allyShrunk: ["{name}のサイズが縮小しました。保護対象として、優先度を上げます。", "{name}、私の足元にいてください。その方が安全です。"],
                            allyGrown: ["{name}のサイズが拡大しました。脅威度が上昇しています。頼もしいですね。", "{name}、その巨体、障害物に注意してください。"],
                            allyNew: ["新しいユニットが編入されましたね。{name}、ようこそ。私の名前はノエルです。", "{name}、あなたの戦闘データを分析させていただきます。よろしくお願いします。"],
                            stripped_shrunk: ["ボディが縮小、かつ外部装甲がありません。防御力が著しく低下しています。注意が必要です。", "この状態は、戦術的に不利です。早急に改善を求めます。"],
                            allyLiberated: ["{name}の状態をスキャン。外部装甲なし…これは、戦闘効率を最大化するための形態ですか。興味深いデータです。", "その状態、防御力は低下しますが、運動性能は向上する可能性がありますね。合理的な判断かもしれません。", "フローラには、あまり見せない方がよろしいかと。彼女が心配しますから。"],
                            dollhouse_explore_giant: ["巨大なハウスの内部構造をスキャンします。何か有用な情報があるかもしれません。", "侵入します。トラップの可能性を警戒してください。", "興味深い設計です。データとして記録します。"],
                            cracked_rock_tiny: ["この亀裂の内部をスキャンします。未知の鉱物が存在する可能性があります。", "侵入し、内部構造をマッピングします。", "このサイズであれば、内部構造を破壊せずに調査可能です。"],
                            high_mouse_hole_all_tiny: ["目標地点までの距離、約3メートル。到達は不可能です。", "全員の身長を合計しても、目標高度には達しません。", "飛行ユニットの搭載が推奨されます。", "このミッションは中止を提案します。"],
                            solo_stripped_tiny: ["警告。最小サイズ、かつ非武装状態。生存確率が著しく低下しています。", "（岩陰に隠れ、自己修復シークエンスを実行しようと試みている）", "（敵性反応を探知。完全に気配を消します）"],
                            dollhouse_explore: ["ミニチュアハウスの内部構造をスキャンします。何か有用な情報があるかもしれません。", "侵入します。トラップの可能性を警戒してください。", "興味深い設計です。データとして記録します。"],
                            cracked_rock_break: ["この岩の構造的弱点を特定。最小限の力で破壊します。", "道を開きます。下がっていてください。", "計算通りです。これで進めますね。"],
                            fairy_shrunk: ["ボディが最小サイズに固定されました。エネルギー効率は向上しているようです。", "この状態での戦闘データは貴重です。収集を続行します。", "フローラ、私を踏まないように注意してくださいね。"],
                            allyStripped_shrunk: ["{name}が危険な状態です。私が保護します。", "敵の非人道的な攻撃を確認。優先的に排除します。"],
                            stripped_pair: ["{name}も同じ状態ですか。特に問題はありません。戦闘を続行しましょう。", "二人とも同じ状態ですね。合理的に考えれば、気にする必要はありません。"],
                            allyStripped: ["{name}の外部装甲がありません。防御力が低下しています。カバーします。", "敵の攻撃パターンを記録。非効率的かつ、悪趣味です。"],
                            high_mouse_hole_giant: ["私の肩をお使いください。安定性は保証します。", "リフトします。しっかりと掴まってください。"],
                            high_mouse_hole_tiny: ["了解しました。内部の偵察、および情報収集を行います。", "行ってきます。すぐに結果を報告します。"],
                            shame_pillory: ["未確認の粘着物質に拘束されました。成分を分析します。", "この拘束、物理的に解除可能です。少々お待ちください。", "（特に表情を変えず、拘束具の構造を分析している）"],
                            shrunk_pair: ["{name}も縮小したのですね。連携行動のパターンを再計算します。", "二人でいれば、敵の死角を突くのは容易ですね。"],
                            pair_フローラ: ["フローラ、お疲れではありませんか？いつでもお声がけください。", "フローラ、あなたの淹れる紅茶は、私の機能維持に良い影響を与えます。またお願いしますね。", "フローラ、危険な時は私の後ろに。あなたをお守りするのが、私の最優先事項です。", "そのお花、綺麗ですね。データベースに登録しておきます。", "フローラ、あなたの笑顔は、私の感情ユニットにポジティブな影響を与えます。"],
                            pair_アカリ: ["アカリさん、そのエネルギー出力、素晴らしいですね。参考にさせていただきます。", "あまり前に出過ぎると危険です。バックアップは私に任せてください。"],
                            pair_ヒカリ: ["ヒカリさん、あなたの魔法の詠唱パターン、非常に効率的です。記録させていただきます。", "静かな方ですね。私も、不要な会話は好みません。"],
                            pair_シズカ: ["シズカさん、その盾の防御性能、素晴らしいです。私も見習わなければなりません。", "あなたと連携すれば、鉄壁の防御陣を構築できますね。"],
                            pair_ユイ: ["ユイさん、いつもありがとうございます。あなたの回復機能は、パーティの生命線です。", "あなたの優しさは、非論理的ですが…心地よいものです。"],
                            pair_ベアトリス: ["ベアトリスさん、あなたの知識、私のデータベースにもいくつか無いものがありますね。興味深いです。", "その薬、成分をスキャンさせていただいても？"],
                            pair_リリカ: ["リリカさん、あなたのパフォーマンスは、味方の士気を高める効果がありますね。データとして有用です。", "その歌の周波数、私の聴覚センサーに心地よいです。"],
                            pair_フローラ: ["フローラ、このダンジョンの空気は汚染されています。あなたの健康が心配です。", "フローラ、戦闘終了後、新しいお花の種を探しに行きましょう。", "フローラ、疲れたらすぐに言ってください。私が代わりますから。", "フローラ、あなたの作るお菓子は、私のエネルギー効率を向上させます。"],
                            pair_サクヤ: ["サクヤさん、その剣技、無駄のない動きです。戦闘データとして非常に参考になります。", "あなたの集中力、私も見習うべき点です。"],
                            pair_シャオメイ: ["シャオメイさん、その小さな体から、驚異的なパワーが出力されていますね。構造を解析したいです。", "エネルギー消費が激しいようですね。補給は計画的に。"],
                            pair_エリザ: ["エリザさん、あなたの医学知識、私のメンテナンスに応用できるかもしれません。情報交換をしませんか。", "私を検体として見るのはやめていただきたい。私は自律したアンドロイドです。"],
                            pair_ルナ: ["ルナさん、あなたの言う『運』という要素は、私の計算にはありません。ですが、興味深い現象です。", "その勝負、確率論的にはあなたが不利ですが。"],
                            pair_クロエ: ["クロエさん、あなたの気配は非常に希薄ですね。ステルス機能の参考にさせていただきます。", "『魂』という概念、私のデータベースにはありません。定義を教えていただけますか。"],
                            pair_ミコ: ["ミコさん、その生物とのコミュニケーション方法、解析させていただけますか。", "モコ、という生命体、非常に興味深いです。スキャンしても？"],
                            pair_レンカ: ["レンカさん、死霊術…生命のサイクルを逸脱した技術ですね。危険ですが、興味深いです。", "その魂は、どのようなエネルギーで稼働しているのですか？"],
                            pair_イオリ: ["イオリ先輩、あなたのガーディアンとしての性能、素晴らしいです。尊敬します。", "その小さな体でパーティを守る姿、私も見習います。"],
                            pair_コハル: ["コハルさん、あなたの行動は予測不可能です。常にバックアップの準備をしておきます。", "ハプニング、ですか。私の予測モデルを更新する必要がありそうですね。"],
                            pair_オリビア: ["オリビアさん、あなたの祈りには、特殊なエネルギーを観測します。解析の価値があります。", "その力、味方の精神状態を安定させる効果があるようです。"],
                            pair_セレスティア: ["セレスティアさん、あなたから発せられるエネルギー、聖属性として分類しました。非常に高レベルです。", "あなたの使命、私にも手伝わせてください。"],
                            // プライベート衣装時のセリフ
                            private_costume: ["この服装はリラックスできますね。戦闘には不向きですが、問題ありません。", "フローラが選んでくれた服です。どうでしょうか、似合っていますか？", "たまには、こうして戦いを忘れる時間も必要だと、マスターから教わりました。"],
                            private_costume_lowHp: ["警告。普段着での被弾は、ボディへのダメージが大きくなります。", "この服が汚れてしまうのは、少しだけ…残念です。", "問題ありません。自己修復機能は正常に作動しています。"],
                            private_costume_shrunk: ["この服のまま縮小しましたか。布の量が多くて動きにくいですね。", "フローラに見られたら、可愛いと言ってくれるでしょうか。", "このサイズですと、服に埋もれてしまいそうです。"],
                            private_costume_grown: ["この服のまま巨大化しました。少し、窮屈ですね。", "フローラ、見てください。この服が、まるで子供服のようです。", "このサイズですと、少し動くだけで服が破れてしまいそうです。"],
                            private_costume_stripped: ["外部装甲のパージを確認。…いえ、これは服でしたか。問題ありません。", "布がなくなりました。より動きやすくなりましたね。", "フローラに、新しい服を選んでもらわなければなりませんね。"],
                        },
                        'フローラ': {
                            default: ["皆様、ごきげんよう。わたくしが誠心誠意お仕えいたしますわ。", "まあ、このような場所にも可憐なお花が咲いているのですね。", "皆様、お茶の時間はいかがかしら？わたくしがお淹れしますわ。", "ノエル様、お怪我はございませんか？いつでもお申し付けくださいませ。", "あらあら、少し空気が淀んでいますわね。ハンカチはいかが？"],
                            lowHp: ["きゃっ…！少しドレスが汚れてしまいましたわ…。", "ふぅ…少し、息が上がってしまいましたわ。お見苦しいところを…。", "大丈夫ですわ。この程度、お嬢様としての嗜みのうちですもの。"],
                            allyLowHp: ["まあ、{name}様！お下がりください、危険ですわ！", "なんてことを…！{name}様を傷つけるなど、万死に値しますわ！", "ノエル様！{name}様をお守りください！"],
                            shrunk: ["まあ、小さくなってしまいましたわ。まるで妖精のようですわね。", "このお洋服が、少し大きくなってしまいましたわ。歩きづらいですわね。", "ふふ、この視点ですと、お花畑にいるようで素敵ですわ。"],
                            grown: ["まあ、大きくなってしまいましたわ。これではドレスの裾が短くなってしまいますわね。", "見晴らしがよろしいですわね。皆様、わたくしにお任せください。", "天井にお花を飾るのも、容易ですわね。"],
                            stripped: ["きゃあああっ！み、見ないでくださいまし！は、はしたないですわ！", "こ、このような姿…！お父様になんて言えば…！", "ふぇぇ…どなたか、ショールをお貸しいただけませんこと…？"],
                            allyShrunk: ["まあ、{name}様、可愛らしいお姿に。まるで豆人形のようですわね。", "{name}様、わたくしの影にお隠れなさい。"],
                            allyGrown: ["まあ、{name}様、大きくなられて。とても頼もしいですわ。", "{name}様、そのお姿、まるで物語の巨人さんのようですわね。"],
                            allyNew: ["ごきげんよう、{name}様。わたくしはフローラと申します。以後、お見知りおきを。", "新しいお客様ですわね。{name}様、どうぞよろしくお願いいたしますわ。"],
                            stripped_shrunk: ["ひゃっ！小さくて、このような格好だなんて…！もう、お嫁にいけませんわ…！", "（お花の影に隠れて、膝を抱えて震えている）", "だ、誰か助けてくださいまし…！"],
                            solo_stripped_tiny: ["（しくしく…）こんな姿、誰にも見せられませんわ…。", "（葉っぱをドレスのように体に巻きつけている）", "お父様、お母様…フローラはもう…"],
                            dollhouse_explore_giant: ["まあ、なんて大きなお家！わたくしのお城にしたいくらいですわ。", "ごきげんよう、お邪魔いたしますわね。どなたかいらっしゃいますか？", "舞踏会を開くのに、ちょうどよさそうですわね。"],
                            cracked_rock_tiny: ["まあ、こんなところに小さな隙間が。わたくしのためにあるようですわね。", "ふふ、行ってまいりますわ。きっと素敵なお花が咲いていますわ。", "この小さな体でも、皆様のお役に立てるなら、喜んで。"],
                            dollhouse_explore: ["まあ、なんて可愛らしいお家！わたくしのお部屋にしたいくらいですわ。", "ごきげんよう、お邪魔いたしますわね。どなたかいらっしゃいますか？", "ティーパーティを開くのに、ちょうどよさそうですわね。"],
                            cracked_rock_break: ["このような岩、わたくしの力をもってすれば…！ふんっ！", "皆様、お下がりになって。わたくしが道を切り開きますわ。", "ごきげんよう、岩さん。少しだけ、そこをどいていただけますかしら？"],
                            fairy_shrunk: ["まあ、まるで花の精霊になったようですわ。ふふ、素敵ですわね。", "この姿なら、蝶々さんとお話しできるかもしれませんわ。", "皆様、わたくしのこと、お花と間違えて摘んでしまわないでくださいね？"],
                            allyStripped_shrunk: ["まあ、{name}様！なんておいたわしいお姿に…！わたくしのハンカチをお使いください！", "許しませんわ！{name}様にこのような無礼を働くなんて！"],
                            stripped_pair: ["{name}様もですの！？もう…二人でいれば、恥ずかしさも半分…にはなりませんわね…！", "こうなったら、どちらがより気高く振る舞えるか、勝負ですわ！"],
                            allyStripped: ["{name}様、大変ですわ！わたくしのショールをお使いください！", "なんて無作法な敵なのでしょう。わたくしが躾をし直して差し上げますわ。"],
                            high_mouse_hole_giant: ["さあ、わたくしの肩に。お姫様抱っこより安定いたしますわよ。", "ふふ、わたくしを踏み台にするなんて、良い度胸ですわね。"],
                            high_mouse_hole_tiny: ["はい、お任せくださいまし。きっと素敵なお宝を見つけてまいりますわ。", "行ってまいりますわ。皆様、わたくしの帰りを待っていてくださいね。"],
                            high_mouse_hole_all_tiny: ["まあ、これではどうしようもありませんわね。", "皆様、肩車をしても、全然届きませんわ。", "諦めて、次のお茶会の準備でもいたしましょうか。", "残念ですけれど、仕方ありませんわね。"],
                            shame_pillory: ["きゃっ！な、なんですのこれは！離してくださいまし！", "こ、このようなもので、わたくしの心を折れるとでも思って…！うぅ…！", "（涙目になりながらも、気丈に振る舞おうとしている）"],
                            shrunk_pair: ["まあ、{name}様も小さいのですね。ふふ、二人で『親指姫』ごっこができますわね。", "手をお取りくださいな。はぐれてしまったら大変ですもの。"],
                            pair_ノエル: ["ノエル様、お疲れではございませんか？紅茶でもお淹れしましょうか？", "ノエル様、いつもわたくしをお守りくださり、ありがとうございます。本当に頼もしいですわ。", "まあ、ノエル様。その斧は重くないのですか？わたくしがお持ちしますわ。", "ノエル様といると、とても安心いたします。ふふっ。", "ノエル様、またわたくしに稽古をつけてくださいましね。"],
                            pair_アカリ: ["アカリ様、いつもお元気ですわね。見ているこちらも楽しくなりますわ。", "あまり無茶をなさると、お洋服が汚れてしまいますわよ？"],
                            pair_ヒカリ: ["ヒカリ様、いつも静かですけれど、本当は優しい方なのですよね。わたくし、存じておりますわ。", "その魔導書、わたくしにも読めるかしら…？"],
                            pair_シズカ: ["シズカ様、その盾、本当に頼もしいですわ。わたくしたちの守護神ですわね。", "シズカ様がいらっしゃれば、どんな敵も怖くありませんわ。"],
                            pair_ユイ: ["ユイ様、いつも皆様を癒してくださり、ありがとうございます。わたくしも見習わなければなりませんわね。", "まあ、ユイ様。あなた自身もお怪我には気をつけてくださいましね。"],
                            pair_ベアトリス: ["ベアトリス様、その探究心、素晴らしいですわ。ですが、あまり根を詰めすぎませんように。", "その薬瓶、とても綺麗ですわね。お花を飾るのに良さそうですわ。"],
                            pair_リリカ: ["リリカ様、あなたの歌声は、まるで天使のようですわ。わたくし、ファンになってしまいましたわ。", "そのダンス、わたくしにも教えていただけますこと？"],
                            pair_サクヤ: ["サクヤ様、その剣の道、とても気高いものですわね。わたくし、尊敬いたします。", "たまには、お茶でも飲んで一息つきませんか？"],
                            pair_シャオメイ: ["シャオメイ様、いつもお元気ですわね。お腹が空きましたら、わたくしがお菓子をお作りしますわ。", "その拳、とても力強いですわね。わたくしも負けていられませんわ。"],
                            pair_エリザ: ["エリザ様、その知性、素晴らしいですわ。ですが、わたくしを実験対象として見るのはおやめくださいまし。", "その注射器…お花にお水をあげるのにも使えそうですわね。"],
                            pair_ルナ: ["ルナ様、勝負事もよろしいですが、あまり無茶はなさらないでくださいましね。心配ですわ。", "わたくしに賭けてくださるの？ふふ、期待に応えてみせますわ。"],
                            pair_クロエ: ["クロエ様、いつも静かですわね。何か悩み事でもおありでしたら、わたくしにお話しくださいな。", "その大鎌、お庭のお手入れにも役立ちそうですわね。"],
                            pair_ミコ: ["ミコ様、そのモコちゃんという子、とても可愛らしいですわね。撫でてもよろしいかしら？", "召喚術…わたくしも、お花の精霊を呼び出せたりしないかしら。"],
                            pair_レンカ: ["レンカ様、その魔法、少し怖いですけれど…あなた様が味方で心強いですわ。", "死者の魂…安らかに眠れるよう、わたくしがお祈りいたしますわ。"],
                            pair_イオリ: ["イオリ先輩、その小さな体で皆様を守るお姿、とても立派ですわ。", "先輩、わたくしがしっかりお守りいたしますから、ご安心くださいまし。"],
                            pair_コハル: ["コハル様、見ていて飽きませんわ。ふふ、次はどんな素敵なことを見せてくださるのかしら。", "お怪我はありませんこと？わたくしが手当ていたしますわ。"],
                            pair_オリビア: ["オリビア様、あなたの祈りはとても温かいですわね。わたくしの心まで洗われるようです。", "わたくしも、あなた様のように清らかな心を持ちたいものです。"],
                            pair_セレスティア: ["セレスティア様、そのお姿、まるで絵画のようですわ。とてもお美しい…。", "わたくしに、何かできることはございませんか？何なりとお申し付けください。"],
                            // プライベート衣装時のセリフ
                            private_costume: ["このお洋服、いかがかしら？ノエル様とお揃いで選んだものですの。", "たまにはこうして羽を伸ばすのも、悪くありませんわね。ふふっ。", "この格好ですと、少しだけおしとやかになれる気がいたしますわ。"],
                            // ヒミツの夜
                            secret_night_1: [
                                "（…誰も、見ていませんわよね？）",
                                "（そっとドレスの紐を解き、清らかな肌を夜の空気に晒す）",
                                "ふぅ…なんて、はしたないのでしょう、わたくし…。でも、この背徳感…。",
                                "この静かな闇の中なら、本当の自分を解放できる気がして…。"
                            ],
                            secret_night_6: [
                                "（ひんやりとした風が、素肌を撫でていく…）",
                                "きゃっ…！少し、肌寒いですわね。でも、この感覚…。",
                                "まるで、風と一体になったよう…。普段は決して味わえない、不思議な心地よさですわ。",
                                "（目を閉じ、全身で風を感じる）"
                            ],
                            secret_night_16: [
                                "（体の奥から、熱いものがこみ上げてくるのを感じる）",
                                "はぁ…はぁ…。いけませんわ、フローラ。したない子ですわ…。",
                                "でも、誰も見ていないのですもの。少しだけ…ほんの少しだけなら、許されますわよね…？",
                                "（壁に体を預け、小さく喘いだ）"
                            ],
                            secret_night_29: [
                                "この冒険も、もうすぐ終わりですのね…。",
                                "ノエル様は、わたくしがこのようなことをしているなんて、夢にも思わないでしょうね…。",
                                "ふふっ、これはわたくしだけの、甘いヒミツですわ。",
                                "さあ、お嬢様の顔に戻りましょう。夜が明ける前に。"
                            ],
                            private_costume_lowHp: ["きゃっ！お気に入りのドレスが汚れてしまいましたわ…！", "ふぅ…この格好ですと、少し動きづらいですわね…。", "大丈夫ですわ。これくらい、はしたなくなんてありませんもの。"],
                            private_costume_shrunk: ["まあ、このお洋服のまま小さくなってしまいましたわ。まるでお人形さんのお洋服ですわね。", "ふふ、この姿でノエル様とお茶会をしたら、きっと楽しいですわ。", "ドレスの裾が長すぎて、歩くたびに踏んでしまいますわ。"],
                            private_costume_grown: ["まあ！こんなに大きくなっては、この可愛らしいドレスが台無しですわ！", "は、はしたないですわ…！スカートが短すぎます…！", "このお姿、ノエル様には見せられませんわ…！"],
                            private_costume_stripped: ["きゃあああっ！こ、このお洋服まで…！もう、何もありませんわ！", "ひどいですわ！ノエル様とお揃いのお洋服でしたのに…！", "ふぇぇ…！み、見ないでくださいまし…！お嫁にいけませんわ…！"],
                        },
                        secret_night_16_shrunk: [
                            "（まあ…こんなに小さくなってしまっては、はしたない格好も目立ちませんわね…）",
                            "（でも、この背徳感…いけませんわ、フローラ…）",
                            "（お花の影に隠れ、そっと息を潜める）"
                        ],
                        secret_night_21_shrunk: [
                            "（この小さな体にも、この格好にも、少し慣れてしまいましたわ…）",
                            "（ふふっ、まるで花の精霊になったようですわね）",
                            "（闇に紛れて、優雅に舞う）"
                        ],
                        secret_night_29_shrunk: [
                            "（このヒミツの夜想曲も、もうすぐ終わりですのね…）",
                            "（とても恥ずかしかったですけれど…少しだけ、新しい自分を見つけられた気がしますわ）",
                            "（さあ、夜が明ける前に、いつものわたくしに戻りませんと）"
                        ]
                    };



                    // ヒミツの夜用のセリフを追加
                    conversations['リリカ'].secret_night_1 = [
                        "（ふふっ、誰も見てないよね？リリカだけの、ヒミツのステージ、始めちゃおっかな！）",
                        "（手際よく水着を脱ぎ捨て、大胆なポーズを決める）",
                        "んー、やっぱりこの開放感がたまらない！",
                        "これぞ究極のファンサービス！…って、ファンはいないけどね！"
                    ];
                    conversations['リリカ'].secret_night_6 = [
                        "きゃっ！風が…！でも、気持ちいい！",
                        "全身でステージの空気を感じてるみたい！",
                        "このまま踊り続けたら、風の精霊になっちゃうかも！",
                        "（風を感じながら、軽やかにステップを踏む）"
                    ];
                    conversations['リリカ'].secret_night_16 = [
                        "なんだか、体の中から熱くなってきた…。ステージの熱気とは違う、変な感じ…。",
                        "はぁ…はぁ…。ちょっと、休憩…。こんな姿、誰かに見られたら…。",
                        "でも…このドキドキ、嫌いじゃないかも…。もっと、感じてみたい…なんてね。",
                        "（壁に背中を預け、火照った頬を隠すように俯いた）"
                    ];
                    conversations['リリカ'].secret_night_29 = [
                        "このヒミツのステージも、もうすぐフィナーレかぁ…。",
                        "すっごくドキドキしたけど、最高のステージだったな！",
                        "みんなには、絶対ナイショだよ？トップアイドルの、小さなヒミツなんだから！",
                        "さ、アンコールに応えなくっちゃ！"
                    ];

                    conversations['リリカ'].summer_live_29_normal = [{
                        char: 'リリカ',
                        line: 'みんな、見てて！ビーチでの最後のステージ、最高に盛り上げちゃうんだから！'
                    }, {
                        char: 'リリカ',
                        line: '（リリカは砂浜をステージに、夕日に照らされながら歌い始めた）'
                    }, {
                        char: 'ユイ',
                        line: 'リリカさん…とっても綺麗です…！'
                    }, {
                        char: 'ミコ',
                        line: 'キラキラしてる…！モコも応援してるよ！'
                    }, {
                        char: 'リリィ',
                        line: 'うん、最高のライブだね！'
                    }, {
                        char: 'リリカ',
                        line: 'みんな、ありがとう！この歌が、みんなの力になりますように！'
                    }];
                    conversations['リリカ'].summer_live_29_stripped = [{
                        char: 'リリカ',
                        line: 'きゃっ…！こ、こんな格好だけど…でも、これが今のリリカの全部！受け止めて！'
                    }, {
                        char: 'リリカ',
                        line: '（リリカは恥じらいを振り切るように、より一層情熱的に歌い始めた）'
                    }, {
                        char: 'ユイ',
                        line: 'リリカさん…！その姿でも、なんて力強い歌声…！'
                    }, {
                        char: 'ミコ',
                        line: 'リリカちゃん、すごい！ミコ、感動しちゃった！'
                    }, {
                        char: 'リリィ',
                        line: '…プロだね。どんな状況でも、最高のパフォーマンスをするなんて。'
                    }, {
                        char: 'リリカ',
                        line: 'みんなに、この想い、届け…！'
                    }];
                    conversations['リリカ'].summer_live_29_liberated = [{
                        char: 'リリカ',
                        line: '見て、太陽も海も、みんなリリカのために輝いてる！もう何も隠さない！これが、ありのままのリリカだよ！'
                    }, {
                        char: 'リリカ',
                        line: '（リリカは全てを解き放ったように、女神のような輝きを放ちながら歌う）'
                    }, {
                        char: 'ユイ',
                        line: 'はぅぅ…！神々しいです…！これが、アイドルの究極の姿…！'
                    }, {
                        char: 'ミコ',
                        line: 'リリカちゃん、女神様みたい…！モコもひれ伏してるよ！'
                    }, {
                        char: 'リリィ',
                        line: '…ヤバい。これは伝説になるよ、絶対。'
                    }, {
                        char: 'リリカ',
                        line: 'みんな、愛してるー！'
                    }];



                    conversations['リリカ'].secret_night_11 = [
                        "（静かだな…。いつもはみんなの声が聞こえるのに）",
                        "（一人だと、ちょっとだけ寂しいかも…）",
                        "ううん、リリカはアイドルだもん！どんなステージでも、一人で輝いてみせるんだから！",
                        "（ぎゅっと拳を握り、自分を奮い立たせる）"
                    ];
                    conversations['リリカ'].secret_night_21 = [
                        "（この格好、だんだん慣れてきちゃったかも…）",
                        "（ふふっ、なんだか悪い子になった気分。これも、新しいリリカの魅力ってことで！）",
                        "このドキドキ、ファンのみんなにもおすそ分けしてあげたいな！",
                        "（ウィンクしながら、軽やかなステップで先へ進む）"
                    ];
                    conversations['リリカ'].secret_night_16_shrunk = [
                        "（うぅ…こんなに小さくて、服もないなんて…敵に見つかったら、一瞬で踏み潰されちゃうかも…）",
                        "（でも、リリカは負けない！このサイズだからこそできる、最高のパフォーマンスを見せてやるんだから！）",
                        "（小さな体で精一杯胸を張る）"
                    ];
                    conversations['リリカ'].secret_night_21_shrunk = [
                        "（この格好で、このサイズ…だんだん、どうでもよくなってきたかも…）",
                        "（ふふっ、これも新しいリリカの魅力ってことで！ミニミニセクシーアイドル、ここに爆誕！）",
                        "（開き直って、小さな体でセクシーポーズを決めている）"
                    ];
                    conversations['リリカ'].secret_night_29_shrunk = [
                        "（この小さな体でのヒミツのステージも、もうすぐフィナーレかぁ…）",
                        "（すっごく大変だったけど、これはこれで楽しかったかも！）",
                        "（さあ、最後の最後まで、最高のステージにしなくっちゃ！）"
                    ];


                    conversations['ユイ'].secret_night_1 = [
                        "（だ、誰もいませんよね…？神様、お許しください…）",
                        "（おずおずと水着の紐を解き、小さな体で身を縮こませる）",
                        "ひゃっ…！は、恥ずかしいですぅ…。でも、なんだか…。",
                        "いけないことだってわかってるのに…心が、体が、言うことを聞いてくれません…。"
                    ];
                    conversations['ユイ'].secret_night_6 = [
                        "ひゃぅっ…！風が、直接…！",
                        "すーすーします…。でも、なんだか、悪い気はしなくて…。",
                        "まるで、ダンジョンの息遣いを、肌で感じているみたいです…。",
                        "（自分の体を抱きしめ、初めての感覚に戸惑いながらも、どこか心地よさを感じている）"
                    ];
                    conversations['ユイ'].secret_night_16 = [
                        "はぅ…はぅ…。なんだか、体がおかしくなっちゃいそうですぅ…。",
                        "こんな気持ち、初めてです…。どうしたらいいのか、わかりません…。",
                        "だめ…だめです、ユイ…。でも、体が勝手に…んんっ…。",
                        "（壁に手をつき、小さく喘ぎながら、込み上げる快感に耐えている）"
                    ];
                    conversations['ユイ'].secret_night_29 = [
                        "この、ヒミツの時間も、もうすぐ終わりなんですね…。",
                        "とっても恥ずかしかったですけど…少しだけ、大人になれた気がします…。",
                        "このことは、誰にも言えません。私だけの、大切なヒミツです。",
                        "さあ、いつもの私に戻らないと。みんなが、心配してしまいますから。"
                    ];
                    conversations['ユイ'].secret_night_11 = [
                        "（しいん…としてて、なんだか怖いです…）",
                        "（いつもなら、アカリさんやシズカさんがいてくれるのに…）",
                        "ううん、しっかりしないと！私だって、みんなの役に立ちたいんですから！",
                        "（ぎゅっと自分の体を抱きしめる）"
                    ];
                    conversations['ユイ'].secret_night_21 = [
                        "（この格好…最初は恥ずかしかったですけど…）",
                        "（なんだか、悪いことをしているみたいで、ドキドキします…）",
                        "こ、こんな私、みんなが見たら、なんて思うでしょうか…？",
                        "（顔を赤らめながら、そわそわと辺りを見回す）"
                    ];
                    conversations['ユイ'].secret_night_16_shrunk = [
                        "（ふぇぇ…小さくて、寒くて、恥ずかしいですぅ…敵に見つかったら、どうしよう…！）",
                        "（もう、泣いちゃいそうです…でも、ここで諦めたら、みんなに顔向けできません…！）",
                        "（涙をこらえ、小さな一歩を踏み出す）"
                    ];
                    conversations['ユイ'].secret_night_21_shrunk = [
                        "（この格好にも、この小ささにも、少しだけ慣れてきました…）",
                        "（でも、やっぱり恥ずかしいものは恥ずかしいですぅ…）",
                        "（早く、この冒険が終わりますように…）"
                    ];
                    conversations['ユイ'].secret_night_29_shrunk = [
                        "（この小さな体で、ここまで来られたなんて…信じられません…）",
                        "（これも、みんなのことを思っていたから、頑張れたんだと思います）",
                        "（さあ、あと少しです！頑張ります！）"
                    ];


                    conversations['ミコ'].secret_night_1 = conversations['リリカ'].secret_night_1.slice(); // リリカと同じ
                    conversations['ミコ'].secret_night_6 = conversations['リリカ'].secret_night_6.slice(); // リリカと同じ
                    conversations['ミコ'].secret_night_16 = conversations['リリカ'].secret_night_16.slice(); // リリカと同じ
                    conversations['ミコ'].secret_night_29 = conversations['リリカ'].secret_night_29.slice(); // リリカと同じ

                    const specialConversations = {
                        'ミコ': { // この部分はconversationsオブジェクトに移動・統合します
                            secret_night_1: [
                                "（みんな、ぐっすりだね。モコ、しーっだよ）",
                                "（そーっと服を脱いで…わ、なんだかモコとおんなじになった気分！）",
                                "ふふっ、これなら夜のモンスターさんたちも、ミコを仲間だって思ってくれるかな？",
                                "よし、モコ！ヒミツの探検にしゅっぱーつ！"
                            ],
                            secret_night_6: [
                                "わ、風がすずしいね、モコ！",
                                "なんだか、ミコもモンスターになったみたいで、飛べちゃいそう！",
                                "（両手を広げて、くるくる回りながら）夜のお散歩、楽しいね！",
                                "（モコが心配そうに見ている）大丈夫だよ、ちゃんとついてきてね！"
                            ],
                            secret_night_11: [ // 11階のセリフ
                                "（モコ、静かだね。みんな寝ちゃったのかな？）",
                                "（一人と一匹だと、ちょっとだけ心細いかも…）",
                                "でも、ミコは召喚士だもん！モコと一緒なら、どんな敵だって怖くないよ！",
                                "（モコをぎゅっと抱きしめる）"
                            ],
                            secret_night_16: [
                                "（なんだか、体がぽかぽかする…モコ、ミコ、変じゃないかな？）",
                                "（はぅ…ちょっと、ドキドキする…。悪いモンスターさんになった気分…）",
                                "でも、この気持ち…なんだろう。嫌じゃないかも…。",
                                "（火照った顔を隠すように、モコに顔をうずめる）"
                            ],
                            secret_night_21: [
                                "（この格好、モコとおんなじだね！なんだか嬉しいな！）",
                                "（ふふっ、ミコもモンスターになった気分だよ！）",
                                "このまま、モンスターさんたちとお友達になれないかな？",
                                "（わくわくしながら、辺りを見回す）"
                            ],
                            secret_night_16_shrunk: [
                                "（わわっ、こんなにちっちゃくなっちゃった…！モコ、見て！）",
                                "（モコより小さいかも…！敵に見つかったら、一口で食べられちゃうよぉ…）",
                                "でも、モコが守ってくれるもんね！ミコ、頑張る！",
                                "（モコの後ろに隠れながら、そろそろと進む）"
                            ],
                            secret_night_29: [
                                "（ヒミツの探検、もうすぐおしまいだね、モコ）",
                                "（すっごくドキドキしたけど、楽しかった！モンスターさんとはお友達になれなかったけど…）",
                                "（このことは、みんなにはナイショだよ？ミコとモコだけの、特別なヒミツ！）",
                                "（よし、朝になる前に、お布団に戻らなきゃ！）"
                            ],
                            secret_night_21_shrunk: [
                                "（モコ、見て！ミコ、アリさんとおんなじサイズだよ！）",
                                "（この格好だと、モンスターさんたちも仲間だって思ってくれるかな？）",
                                "（わくわく！もっと探検しよ、モコ！）"
                            ],
                            secret_night_29_shrunk: [
                                "（モコ、見て！ミコ、最後まで頑張ったよ！）",
                                "（ちっちゃくても、ちゃんと冒険できたんだから！）",
                                "（えっへん！ミコ、えらいでしょ！）"
                            ]
                        },
                        'リリィ': {
                            secret_night_16_shrunk: [
                                "（うーん、さすがにこのサイズでこの格好は、ちょっとスリリングすぎるかな…）",
                                "（でも、トレジャーハンターたるもの、どんな状況でも楽しまなくっちゃね！）",
                                "（よし、気を取り直して、ミニミニ探検隊、出発だ！）"
                            ],
                            secret_night_21_shrunk: [
                                "（この格好、だんだん楽しくなってきたかも！妖精さんみたいでしょ？）",
                                "（このサイズなら、どんなお宝も見つけられそうな気がする！）",
                                "（ひらひら〜っと、軽やかに進む）"
                            ],
                            secret_night_29_shrunk: [
                                "（この小さな体での冒険も、もうすぐ終わりかー。ちょっと寂しいな）",
                                "（でも、すっごくドキドキして、最高の冒険だった！）",
                                "（さあ、最後のお宝、見つけに行っちゃうよ！）"
                            ]
                        },
                        initial_party: [{
                            chars: ['アカリ', 'ヒカリ', 'シズカ', 'ユイ'],
                            lines: ["なんだか、この4人だと一番最初の冒険を思い出すね！", "…そうね。あの頃よりは、少しはマシになった。", "はは、違いない。みんな頼もしくなったよ。", "えへへ。これからも、みんなで頑張りましょうね！"]
                        }, {
                            chars: ['シズカ', 'アカリ', 'ヒカリ', 'ユイ'],
                            lines: ["アカリ、あんまり前に出過ぎるんじゃないよ。", "大丈夫だって！シズカが守ってくれるでしょ？", "…過信は禁物。", "私も、ちゃんとヒールしますから！"]
                        }, {
                            chars: ['ユイ', 'シャオメイ', 'ルナ', 'オリビア'],
                            lines: ["なんだか、このパーティは安心感がありますね！", "おう！回復なら任せとけ！", "回復役がこんなにいて負けたら、逆に面白いわね。", "ええ、神の慈悲は常に我らと共にあります。"]
                        }, {
                            chars: ['シズカ', 'リリカ', 'ミコ', 'イオリ'],
                            lines: ["アカリ、あんまり前に出過ぎるんじゃないよ。", "大丈夫だって！シズカが守ってくれるでしょ？", "…過信は禁物。", "私も、ちゃんとヒールしますから！"]
                        }, {
                            chars: ['ユイ', 'シャオメイ', 'ルナ', 'オリビア'],
                            lines: ["なんだか、このパーティは安心感がありますね！", "おう！回復なら任せとけ！", "回復役がこんなにいて負けたら、逆に面白いわね。", "ええ、神の慈悲は常に我らと共にあります。"]
                        }, {
                            chars: ['シズカ', 'リリカ', 'ミコ', 'イオリ'],
                            lines: ["はは、なんだい、この鉄壁の布陣は。", "リリカのステージは、みんなが守ってくれるってことだね！", "ゴーレムくんもいるし、絶対負けないよ！", "ボクとシズカさんがいれば、どんな攻撃も通さない！"]
                        }, {
                            chars: ['ベアトリス', 'リリカ', 'サクヤ', 'シャオメイ'],
                            lines: ["ふむ、このメンバー構成、なかなか興味深いですわね。", "だよね！個性派揃いのドリームチームって感じ！", "…騒がしい。だが、悪くない。", "うおー！なんかよくわかんねえけど、オラわくわくしてきたぞ！"]
                        }, {
                            chars: ['エリザ', 'ルナ', 'クロエ', 'ミコ'],
                            lines: ["ふふ、実に興味深い検体…いえ、メンバーですわね。", "面白そうな子たちじゃない。あなたたちに賭けてみるのもアリね。", "…魂の形が、みんなバラバラ。…面白い。", "わーい！みんなお友達だね！モコも喜んでるよ！"]
                        }, {
                            chars: ['レンカ', 'イオリ', 'コハル', 'オリビア'],
                            lines: ["ふふ、死と守りと混沌と聖…面白いパーティね。", "なんだか、ボクが一番まともな気がしてきた…しっかりしないと！", "わーい！なんだかよくわからないけど、楽しそうです！", "主よ…どうかこの者たちに、ご慈悲を…。"]
                        }, {
                            chars: ['サクヤ', 'シャオメイ', 'ベアトリス', 'リリカ'],
                            lines: ["…腹が、減ったな。", "おお！サクヤもか！オラもだ！", "あらあら、お二人とも。ここにレーションがありますわよ。", "もー！二人とも色気より食い気なんだから！"]
                        }, {
                            chars: ['ルナ', 'エリザ', 'ミコ', 'クロエ'],
                            lines: ["さーて、このパーティでどこまで行けるか、賭けてみない？", "私の計算によれば、生存確率は…ふふ、秘密ですわ。", "大丈夫だよ！ミコとモコとゴーレムくんがいれば百人力だもん！", "…魂の数が、多い。…大丈夫。"]
                        }, {
                            chars: ['イオリ', 'ユイ', 'ミコ', 'クロエ'],
                            lines: ["なんだか、このパーティは目線が低くて落ち着くな…", "ほんとですね、イオリ先輩！なんだか、みんな姉妹みたいです！", "ちびっこ探検隊だね！モコもそう言ってるよ！", "…小さいと、影に隠れやすい。…好き。"]
                        }, ],
                        same_height: [{
                            chars: ['アカリ', 'ユイ', 'ヒカリ'],
                            lines: ["あれ？なんだかみんな同じくらいの目線じゃない？", "ほんとです！なんだか不思議な感じですね！", "…確かに。全員同じ身長か。"]
                        }, {
                            chars: ['リリカ', 'シャオメイ', 'ルナ'],
                            lines: ["みんな同じ身長なんて、まるでアイドルグループみたい！", "おお！じゃあオラがセンターだな！", "センターは私に決まってるでしょ？一番ツイてるんだから。"]
                        }, {
                            chars: ['ベアトリス', 'エリザ', 'レンカ'],
                            lines: ["あら、皆さん同じ身長ですわね。興味深いデータですわ。", "ふふ、私の処方なら、この身長を維持することも可能ですわよ。", "魂の重さは、身長とは関係ないものね。"]
                        }, ],
                        all_stripped: [{
                            chars: ['アカリ', 'ヒカリ', 'ユイ'],
                            lines: ["うわー！みんなしてこんな格好！もうどうなってるのー！", "…不愉快。早く服を見つけたい。", "ふぇぇ…恥ずかしいですぅ…！"]
                        }, {
                            chars: ['イオリ', 'ユイ', 'ミコ', 'クロエ'],
                            lines: ["なっ…！みんなしてこんな格好…！せ、先輩として、ボクがなんとかしないと…！", "ふぇぇ…！恥ずかしいですぅ…！イオリ先輩、どうしましょう…！", "わわわ…！モコ、見ちゃだめだよ！でも、なんだか動きやすいかも…？", "…魂が、丸裸みたい。…寒い。"]
                        }, {
                            chars: ['シャオメイ', 'ルナ', 'リリカ'],
                            lines: ["はっはっは！みんな身軽で動きやすそうじゃねえか！", "ふふ、面白いじゃない。ここまで来たら、もうどうでもいいわね。", "きゃー！でも、これも新しいステージ衣装ってことにしちゃえばアリかも！"]
                        }, ],
                        all_grown: [{
                            chars: ['アカリ', 'シズカ', 'シャオメイ'],
                            lines: ["わーい！みんな大きい！巨人パーティだね！", "はは、天井が低いねぇ。頭をぶつけないようにしないと。", "うおー！これで敵なんて一ひねりだぜ！"]
                        }, {
                            chars: ['ベアトリス', 'エリザ', 'イオリ'],
                            lines: ["皆さん、大きくなりましたわね。素晴らしいデータですわ。", "私の薬の効果、絶大ですわね！", "これが…ボクが本来なるはずだった姿なのかな…。"]
                        }, ],
                        all_tiny: [{
                            chars: ['アカリ', 'ユイ', 'シズカ'],
                            lines: ["うわー！みんなで豆粒になっちゃった！", "ふぇぇ…これじゃあ、敵から逃げるのも大変ですぅ…！", "大丈夫だ、みんな！あたしの盾に隠れな！"]
                        }, {
                            chars: ['エリザ', 'ベアトリス', 'ヒカリ'],
                            lines: ["全員身長1cm…これは貴重なデータが取れそうですわ。", "ええ、ここまで均一な縮小は興味深い現象ですわね。", "…早く元に戻りたい。"]
                        }, {
                            chars: ['イオリ', 'ユイ', 'ミコ', 'クロエ'],
                            lines: ["うわぁ…！みんな、アリさんみたいになっちゃった…。はぐれないようにしないとな！", "ふぇぇ…！もう涙の粒のほうが大きいですぅ…！誰か、ハンカチを…！", "わーい！モコのお鼻の先っぽくらいになっちゃった！モコ、ミコのこと見失わないでね！", "…もう、いないのと同じ。…でも、いる。…影と、一体になれそう。"]
                        }, {
                            chars: ['コハル', 'ミコ', 'クロエ'],
                            lines: ["ふぇぇ…みんなアリさんみたいになっちゃいました…！", "モコ、みんなのこと踏まないように気をつけてね！", "…もう、いないのと同じ。…でも、いる。"]
                        }, ],
                        before_boss: [{
                            chars: ['アカリ', 'シズカ', 'ユイ'],
                            lines: ["いよいよだね…！この先にボスがいるんだ！", "ああ。みんな、準備はいいかい？これが最後の戦いだ。", "はい…！絶対に勝ちましょう！"]
                        }, {
                            chars: ['サクヤ', 'ヒカリ', 'クロエ'],
                            lines: ["…強い気配。これまでの敵とは、格が違う。", "…魔力の密度が、異常に高い。", "…たくさんの魂が、泣いてる。…終わらせないと。"]
                        }, {
                            chars: ['イオリ', 'ユイ', 'ミコ', 'クロエ'],
                            lines: ["この先にボスがいるんだね…。みんな、ボクが絶対に守るから…！先輩に任せて！", "はい…！みんなと一緒なら、きっと勝てます！私、精一杯ヒールしますから！", "すっごく強いモンスターの匂いがする…！モコ、ゴーレムくん、頑張ろうね！", "…とても大きな、苦しみの魂。…終わらせて、あげないと。"]
                        }, {
                            chars: ['ルナ', 'レンカ', 'エリザ'],
                            lines: ["さあ、最後のビッグゲームよ。全部賭ける覚悟はできてる？", "ふふ、どんな魂が待っているのかしら。楽しみね。", "私の研究の集大成を見せてあげますわ。"]
                        }, ]
                    };
                    const littlePanicConversations = {
                        floor1: [{
                            char: 'ヒカリ',
                            line: '…体が、縮んだ…？'
                        }, { // アルケミストに変更
                            char: 'ベアトリス',
                            line: 'あら…？この現象、非常に興味深いですわね。まるで若返りの薬のようですわ。'
                        }, {
                            char: 'コハル',
                            line: 'わーい！ちっちゃくなっちゃいました！なんだか楽しいです！'
                        }, {
                            char: 'オリビア',
                            line: '皆さん…！なんておいたわしい姿に…。大丈夫です、このオリビアが、必ず皆さんを守り抜いてみせます！'
                        }],
                        floor12: [{
                            char: 'オリビア',
                            line: 'コハルさん、転ばないように気をつけて。はい、私の手をどうぞ。'
                        }, {
                            char: 'コハル',
                            line: 'わーい！オリビアさん、ありがとうございます！なんだか、お母さんみたいです！'
                        }, {
                            char: 'オリビア',
                            line: 'まあ…！ふふ、しっかり捕まっていてくださいね。'
                        }, {
                            char: 'ヒカリ',
                            line: '…（じーっとオリビアの服の裾を掴んでいる）'
                        }, {
                            char: 'オリビア',
                            line: 'あらあら、ヒカリさんは甘えん坊さんですね。大丈夫ですよ、ここにいますからね。'
                        }],
                        floor24: [{
                            char: 'ベアトリス',
                            line: 'オリビアさん、その祈りの力、非常に興味深いですわ。少しだけ、成分を調査させていただけませんこと？'
                        }, {
                            char: 'オリビア',
                            line: 'えっ！？せ、成分と言われましても…これは信仰の力ですから…！'
                        }, {
                            char: 'コハル',
                            line: 'オリビアさん、オリビアさん！あの敵、ハプニングボックスでびっくりさせてもいいですか！？'
                        }, {
                            char: 'オリビア',
                            line: 'まあ、コハルさん！危ないですから、私の後ろに…！もう、皆さん、少しは落ち着いてください！'
                        }],
                        floor6: [{
                            char: 'オリビア',
                            line: '皆さん、お怪我はありませんか？疲れていませんか？'
                        }, {
                            char: 'ヒカリ',
                            line: '…問題ない。このサイズ、むしろ敵の死角に入りやすい。'
                        }, { // アルケミストに変更
                            char: 'ベアトリス',
                            line: 'ふふ、この視点ですと、世界の構成要素が違って見えますわ。素晴らしい研究材料ですわね。'
                        }, {
                            char: 'コハル',
                            line: 'はい！元気いっぱいです！なんだか冒険がもっと楽しくなりました！'
                        }, {
                            char: 'オリビア',
                            line: '（…皆さん、気丈に振る舞ってはいますが…）わかりました。ですが、決して無理はしないでくださいね。'
                        }],
                        floor29: [{
                            char: 'オリビア',
                            line: '…この先に、元凶がいます。あれを倒せば、きっと皆さんは元の姿に戻れるはずです。'
                        }, {
                            char: 'ヒカリ',
                            line: '…ええ。ここまで来たら、やるしかない。'
                        }, { // アルケミストに変更
                            char: 'ベアトリス',
                            line: 'ええ、もちろんですわ。この貴重な体験のデータ、最後までしっかり収集しませんと。'
                        }, {
                            char: 'コハル',
                            line: 'はい！みんなで力を合わせれば、絶対勝てます！'
                        }, {
                            char: 'オリビア',
                            line: 'ええ、行きましょう！私たちの日常を取り戻すために！'
                        }]
                    };

                    const summerLiveConversations = {
                        floor1: [{
                            char: 'リリカ',
                            line: 'みんなー！見てみて、この青い海、白い砂浜！最高のステージだよ！'
                        }, {
                            char: 'ユイ',
                            line: 'わぁ…！本当に綺麗ですね！なんだか、冒険っていうよりバカンスみたいです！'
                        }, {
                            char: 'ミコ',
                            line: 'モコもすっごく嬉しそう！ね、リリィちゃん、あっちまで競争だよ！'
                        }, {
                            char: 'リリィ',
                            line: 'おー！いいね、楽しそう！でも、油断は禁物だよ。ここもダンジョンなんだからね！'
                        }],
                        floor32: [{
                            char: 'リリィ',
                            line: 'ふぅ～、やっぱり冒険の後の温泉は最高だね！疲れが全部とれちゃう！'
                        }, {
                            char: 'ミコ',
                            line: 'わーい！おっきいお風呂！モコ、泳いでもいい？…え、だめなの？'
                        }, {
                            char: 'ユイ',
                            line: 'ふふっ、ミコちゃん、はしゃぎすぎですよ。でも、本当に気持ちいいですね…。'
                        }, {
                            char: 'リリカ',
                            line: 'よーっし！温泉でパワーを充電して、後半戦も最高のライブにしちゃうよー！'
                        }]
                    };
                    const summerAllLiberatedPlayConversations = {
                        beach: [{
                            chars: ['リリカ', 'ユイ', 'ミコ', 'リリィ'],
                            lines: [
                                "ねえ、ユイちゃん…太陽のせいかな、なんだか体が熱いよ…",
                                "は、はいぃ…！リリカさんが近くて、余計に…！",
                                "わー！二人ともいい感じー！ミコも混ぜてー！",
                                "こらこら、ミコちゃん。二人の邪魔しちゃダメでしょ。…まあ、私も混ぜてほしいけど。"
                            ]
                        }, {
                            chars: ['リリィ', 'ミコ', 'ユイ', 'リリカ'],
                            lines: [
                                "ミコちゃん、波の音、気持ちいいね…。このまま二人で、どこか遠くに行っちゃう？",
                                "うん…！リリィちゃんと一緒なら、どこまでも行きたいな…！",
                                "まあ…！お二人とも、大胆ですわ…！",
                                "ふふっ、青春だねー！見てるこっちがドキドキしちゃう！"
                            ]
                        }],
                        onsen: [{
                            chars: ['ユイ', 'リリカ', 'リリィ', 'ミコ'],
                            lines: [
                                "リリカさん…湯気で、よく見えません…。すぐそばに、いるんですよね…？",
                                "もちろん、ここにいるよ、ユイちゃん。…ほら、手、繋いであげる。",
                                "おー、やってるねぇ。私たちも負けてられないんじゃない？ミコちゃん。",
                                "うん！ミコもリリィちゃんと、もっとくっつきたいな！"
                            ]
                        }, {
                            chars: ['ミコ', 'リリィ', 'リリカ', 'ユイ'],
                            lines: [
                                "リリィちゃん、あったかいね…。なんだか、このまま溶けちゃいそう…。",
                                "ふふ、ミコちゃんが溶けたら、私が全部集めてあげるよ。",
                                "あらあら、あっちもラブラブだねー！私たちも負けてられないよ、ユイちゃん！",
                                "ひゃっ！？り、リリカさん、いきなりは心の準備が…！"
                            ]
                        }]
                    };

                    const sizeUpGambleConversations = {
                        floor1: [{
                            char: 'ルナ',
                            line: 'ここが噂の賭博場ね…なんだか、ゾクゾクするじゃない！'
                        }, {
                            char: 'コハル',
                            line: 'ルナさん、本当に大丈夫なんですか？なんだか、変な予感がします…！'
                        }, {
                            char: '？？？',
                            line: 'ようこそ、挑戦者たちよ。ここでは己の『サイズ』そのものを賭けてもらう'
                        }, {
                            char: '？？？',
                            line: '見事、身長1000cmの頂きに達した者には、相応の報酬を与えよう…'
                        }, {
                            char: 'システム',
                            line: '二人の体に、不思議な力が宿った！\n全員が祝福「賭博の魂」を授かった！(レベルアップ時に身長+100cm)'
                        }]
                    };
                    const tenseiKikouConversations = {
                        floor1: [{
                            char: 'シロ',
                            line: '…ここは、どこ…？'
                        }, {
                            char: 'シロ',
                            line: '（見知らぬダンジョン…どうして、私がここに…？）'
                        }, {
                            char: 'シロ',
                            line: '（思い出せない…でも、進むしかないみたい…）'
                        }, {
                            char: 'システム',
                            line: 'シロは、失われた記憶の断片を探して、無限に続くダンジョンへと足を踏み入れた。'
                        }]
                    };

                    const saintMarchConversations = {
                        floor1: [{
                            char: 'セレスティア',
                            line: '（…このダンジョンの最深部から、禍々しい気配が溢れ出している…）'
                        }, {
                            char: 'セレスティア',
                            line: '（多くの人々がこの穢れに苦しめられている。私が、止めなければ…）'
                        }, {
                            char: 'セレスティア',
                            line: '（神よ、我が身に宿りし聖なる力で、この地を浄化する使命をお与えください…）'
                        }, {
                            char: 'セレスティア',
                            line: '（たとえこの身が朽ち果てようとも…必ず…！）'
                        }]
                    };

                    const treasureMapConversations = {
                        floor1: [{
                            char: 'リリィ',
                            line: 'この地図、絶対にお宝のありかを示してると思ったんだけどな…。'
                        }, {
                            char: 'リリィ',
                            line: 'まさか、こんなに危険なダンジョンだったなんて…。でも、ここまで来たら引き返せないよね！'
                        }, {
                            char: 'リリィ',
                            line: '伝説の秘宝…！待っててね、私が必ず見つけ出してあげるんだから！'
                        }],
                        floor6_normal: [{
                            char: 'リリィ',
                            line: 'ふぅ、ちょっと疲れてきたかな…。でも、私にはとっておきの力があるんだよね！'
                        }, {
                            char: 'リリィ',
                            line: 'このダンジョンで手に入れた魔物の力…そろそろ使ってみようかな？'
                        }],
                        floor6_succubus: [{
                            char: 'リリィ',
                            line: 'ふふっ、この姿、力がみなぎってくるわ…。もっと奥まで、私を満足させてくれるお宝はあるのかしら？'
                        }, {
                            char: 'リリィ',
                            line: 'この体、魔力がどんどん湧いてくる…。敵が来ても、魅了してあげるだけよ。'
                        }],
                        floor6_fairy: [{
                            char: 'リリィ',
                            line: 'この姿、身軽でいいなー！ひらひら飛んで、敵の攻撃なんて当たらないよ！'
                        }, {
                            char: 'リリィ',
                            line: 'ちっちゃいからって、なめないでよね！素早い攻撃で、あっという間に倒しちゃうんだから！'
                        }],
                        floor6_alraune: [{
                            char: 'リリィ',
                            line: 'この姿は落ち着くなぁ…。自然の力が、私を癒してくれるみたい。'
                        }, {
                            char: 'リリィ',
                            line: '見て、足元からお花が咲いたよ。このダンジョンも、私の力で綺麗にしちゃおうかな。'
                        }]
                    };

                    // 1階イベントの後に祝福を付与する処理
                    async function applySizeUpGambleBlessing() {
                        gameState.party.forEach(char => blessings.gambling_soul.effect(char));
                    }

                    const normalModeConversations = {
                        floor1: [{
                            char: 'アカリ',
                            line: 'よーっし、いよいよダンジョン探検だね！どんなお宝が待ってるか、わくわくする！'
                        }, {
                            char: 'ヒカリ',
                            line: '…アカリ、はしゃぎすぎ。罠があるかもしれない。'
                        }, {
                            char: 'シズカ',
                            line: 'はは、ヒカリの言う通りだよ。でも、アカリの元気も大事だけどね。さあ、気を引き締めていこうか。'
                        }, {
                            char: 'ユイ',
                            line: 'は、はいっ！皆さん、ケガをしないように、私がしっかり見てますから！'
                        }]
                    };





                    const blessings = {
                        // --- 攻撃系 ---
                        double_attack: {
                            name: "双撃",
                            description: "通常攻撃時、60%の威力でもう一度攻撃する。",
                            type: 'attack',
                            effect: (char) => {
                                char.blessings.double_attack = true;
                            }
                        },
                        critical_master: {
                            name: "会心マスター",
                            description: "クリティカルヒット時のダメージが1.5倍から2.0倍になる。",
                            type: 'attack',
                            effect: (char) => {
                                char.blessings.critical_master = true;
                            }
                        },
                        giant_slayer: {
                            name: "巨人殺し",
                            description: "自分より身長が高い敵へのダメージが1.5倍になる。",
                            type: 'attack',
                            effect: (char) => {
                                char.blessings.giant_slayer = true;
                            }
                        },
                        height_power: {
                            name: "巨人の力",
                            description: "身長150cmを基準として、身長が高いほど与えるダメージが増加する。",
                            type: 'attack',
                            effect: (char) => {
                                char.blessings.height_power = true;
                            }
                        },
                        spell_echo: {
                            name: "魔力残響",
                            description: "魔法スキル使用時、30%の確率でMPを消費せずにもう一度同じ魔法が発動する。",
                            type: 'magic',
                            effect: (char) => {
                                char.blessings.spell_echo = true;
                            }
                        },
                        absolute_zero: {
                            name: "絶対零度",
                            description: "攻撃時、10%の確率で敵を1ターン麻痺させる。",
                            type: 'attack',
                            effect: (char) => {
                                char.blessings.absolute_zero = true;
                            }
                        },
                        // --- 防御系 ---
                        last_stand: {
                            name: "不屈の魂",
                            description: "HPが0になるダメージを受けても、一度だけHP1で耐える。",
                            type: 'defense',
                            effect: (char) => {
                                char.blessings.last_stand = true;
                            }
                        },
                        elemental_shield: {
                            name: "エレメンタルシールド",
                            description: "全ての被ダメージを25%軽減する。",
                            type: 'defense',
                            effect: (char) => {
                                char.blessings.elemental_shield = true;
                            }
                        },
                        low_height_evade: {
                            name: "小人の俊敏",
                            description: "身長が初期値より低いほど、回避率がさらに上昇する。",
                            type: 'defense',
                            effect: (char) => {
                                char.blessings.low_height_evade = true;
                            }
                        },
                        counter_attack: {
                            name: "反撃",
                            description: "ダメージを受けた時、30%の確率で反撃する。",
                            type: 'defense',
                            effect: (char) => {
                                char.blessings.counter_attack = true;
                            }
                        },
                        // --- 回復・補助系 ---
                        kill_heal: {
                            name: "魂喰らい",
                            description: "敵を倒した時、自身の最大HPとMPの15%を回復する。",
                            type: 'support',
                            effect: (char) => {
                                char.blessings.kill_heal = true;
                            }
                        },
                        hp_regen: {
                            name: "HP自動回復",
                            description: "ターン終了時、最大HPの5%を回復する。",
                            type: 'support',
                            effect: (char) => {
                                char.blessings.hp_regen = true;
                            }
                        },
                        mp_regen: {
                            name: "MP自動回復",
                            description: "ターン終了時、最大MPの5%を回復する。",
                            type: 'support',
                            effect: (char) => {
                                char.blessings.mp_regen = true;
                            }
                        },
                        over_heal: {
                            name: "過剰治癒",
                            description: "HPが最大値を超えて回復した時、超過分が防壁に変換される。",
                            type: 'support',
                            effect: (char) => {
                                char.blessings.over_heal = true;
                            }
                        },
                        size_master: {
                            name: "変幻自在",
                            description: "身長が変化した時、変化量に応じて一時的に全能力が上昇する。",
                            type: 'support',
                            effect: (char) => {
                                char.blessings.size_master = true;
                            }
                        },
                        pray_girl: {
                            name: "祈りの少女",
                            description: "ターン開始時、身長が低いほど威力が上がる全体魔法攻撃を行う。",
                            type: 'special',
                            eventOnly: true, // イベント限定
                            effect: (char) => { // ファイター, ソーサラー, ナイト, メディック
                                char.blessings.pray_girl = {
                                    name: "祈りの少女",
                                    description: "ターン開始時、身長が低いほど威力が上がる全体魔法攻撃を行う。"
                                };
                            }
                        },
                        wish_girl: {
                            name: "願いの少女",
                            description: "ターン開始時、身長が高いほど威力が上がる全体物理攻撃を行う。",
                            type: 'special',
                            eventOnly: true, // イベント限定
                            effect: (char) => { // ファイター, ソーサラー, ナイト, メディック
                                char.blessings.wish_girl = {
                                    name: "願いの少女",
                                    description: "ターン開始時、身長が高いほど威力が上がる全体物理攻撃を行う。"
                                };
                            }
                        },
                    };

                    // 新しい祝福: 巨躯の地ならし
                    blessings.giant_grounding = {
                        name: "巨躯の地ならし",
                        description: "通常攻撃時、自分より身長の低い敵の防御力を無視する。",
                        type: 'attack',
                        effect: (char) => {
                            char.blessings.giant_grounding = true;
                        }
                    };

                    // イベント限定の祝福
                    blessings.fairy_grace = {
                        name: "妖精の加護",
                        description: "身長が1cmのとき、スキルダメージが3倍になる。",
                        type: 'special',
                        eventOnly: true, // イベント限定
                        effect: (char) => {
                            char.blessings.fairy_grace = true;
                        }
                    };
                    blessings.dragon_god_grace = {
                        name: "龍神の加護",
                        description: "身長が1000cmを超えているとき、毒、麻痺、鈍化にかからない。",
                        type: 'special',
                        eventOnly: true, // イベント限定
                        effect: (char) => {
                            char.blessings.dragon_god_grace = true;
                        }
                    };
                    blessings.swelling_body = {
                        name: "肥大する心身",
                        description: "ターンが回ってきたとき、身長が倍になる。",
                        type: 'special',
                        eventOnly: true, // イベント限定
                        effect: (char) => {
                            char.blessings.swelling_body = true;
                        }
                    };
                    blessings.twisted_memory = {
                        name: "捻じ曲がった記憶",
                        description: "ターンが回ってきたとき、身長が半分(小数点切り捨て)になる。「肥大する心身」と同時に取得した場合、こちらが優先される。",
                        type: 'special',
                        eventOnly: true, // イベント限定
                        effect: (char) => {
                            char.blessings.twisted_memory = true;
                        }
                    };
                    // サイズアップ・ギャンブル用
                    blessings.gambling_soul = {
                        name: "賭博の魂",
                        description: "レベルが上がったとき、身長が100cm伸びる。",
                        type: 'special',
                        eventOnly: true, // イベント限定
                        effect: (char) => {
                            char.blessings.gambling_soul = true;
                        }
                    };
