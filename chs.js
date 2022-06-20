/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '存档',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Made in Profectus, by thepaperpilot with inspiration from Acameada and Jacorb": "使用 Profectus 制作，thepaperpilot 灵感来自 Acameada 和 Jacorb",
    "NaN value detected!": "检测到 NaN 值！",
    "New Game": "新游戏",
    "No, I'm not going to back down just because I'm younger than you, let me have this.": "不，我不会因为我比你年轻而退缩，让我拥有这个。",
    "None": "无",
    "Nordic": "北欧",
    "Offline Production": "离线生产",
    "Open Saves Manager": "打开存档管理器",
    "Options": "选项",
    "Paper": "Paper",
    "particles": "粒子",
    "Pause game": "暂停游戏",
    "Please check the Discord to discuss the game or to check for new content updates!": "请查看 Discord 以讨论游戏或查看新内容更新！",
    "Primordia": "原始树",
    "Saves Manager": "存档管理",
    "Show Milestones": "显示里程碑",
    "Show TPS": "显示 TPS",
    "So... you're telling me that I can make my own universe? Sweet!": "所以……你是在告诉我，我可以创造自己的宇宙？ 靓仔！",
    "The Beginning": "开端",
    "The Modding Tree": "The Modding Tree",
    "The Paper Pilot Community": "Paper Pilot 社区",
    "Theme": "主题",
    "Unthrottled": "无限制",
    ": For the Senses": ": 感官",
    ". Auto-saving has been enabled. Check the console for more details, and consider sharing it with the developers on discord.": ". 已启用自动保存。 检查控制台以获取更多详细信息，并考虑在 discord 上与开发人员共享它。",
    "[Base Gain:": "[基础增益：",
    "Classic": "经典",
    "Close": "关闭",
    "Configurable": "可配置",
    "Congratulations!": "恭喜！",
    "Create Save": "创建存档",
    "Default Save": "默认存档",
    "Dev Speed:": "开发速度：",
    "Game Paused": "游戏暂停",
    "Great! So, I can just take these tools and get started then?": "太棒了！ 那么，我可以使用这些工具并开始使用吗？",
    "Hide Maxed Challenges": "隐藏最大挑战",
    "Ignore": "忽略",
    "Implemented Air layer": "实施的 空气层",
    "Implemented Cryo layer": "实现的 低温层",
    "Implemented Earth layer": "实施的地球层",
    "Implemented Flame, Life, & Water layers": "实施火焰、生命和水层",
    "Implemented Intrabonds": "实施内部债券",
    "Implemented Light and Sound.": "实现了灯光和声音。",
    "Implemented Lightning layer": "实施闪电层",
    "Implemented Particle Combinators": "实现的粒子组合器",
    "Import Save": "导入存档",
    "Incomplete": "未完成",
    "Attempted to assign \"\" to NaN": "尝试将 \"\" 分配给 NaN",
    "Autosave": "自动保存",
    "All": "全部",
    "Alright, here goes!": "好了，这就去！",
    "Aqua": "水",
    "Advancements": "进展",
    "particles/s": "粒子/秒",
    "Req:": "要求：",
    "Reset for": "重置获得 ",
    "A Hot Start": "一个火热的开始",
    "Base": "基本",
    "Cost:": "成本：",
    "Currently:": "当前：",
    "Flame Particles": "火焰粒子",
    "Flame Particles multiply Particle gain at a reduced rate.": "火焰粒子以递减的速率增加粒子增益。",
    "Generate": "产生",
    "Heat = Speed": "热量=速度",
    "Modifiers": "倍率",
    "Next:": "下一个：",
    "Particles/second.": "粒子/秒。",
    "Total:": "共计：",
    "Aqua Particles": "水粒子",
    "Bubbles, each generating 1 Particle/second": "气泡，每个产生 1 个粒子/秒",
    "Buyable Power:": "购买力：",
    "Life Particles": "生命粒子",
    "Torrents, each increasing Particle gain by": "洪流，每个都提高粒子增益",
    "Waves, each halving the Aqua Particle cost": "波浪，每个减半 水粒子 成本",
    "Amount:": "数量：",
    "Double Particle gain.": "双倍粒子增益。",
    "Generate 1 Particle/second.": "生成 1 粒子/秒。",
    "Regeneration": "再生",
    "The Source": "源头",
    "Flame Particles make the Bubble bar faster.": "火焰粒子使气泡条变得更快。",
    "Liquid Fire": "液态火",
    "Cancel": "取消",
    "Delete": "删除",
    "Duplicate": "复制",
    "Edit Name": "重命名",
    "Saves": "存档",
    "Solar Warmth": "太阳热",
    "Flame Upgrade 1's effect increases by 2.": "火 升级1 的效果增加 2。",
    "A few minor bugfixes, and updated to Profectus 0.4.1": "一些小错误修正，并更新到 Profectus 0.4.1",
    "A New Particle": "一个新粒子",
    "Advancement": "进展",
    "Lightning Particles": "闪电粒子",
    "Milestone earned!": "获得里程碑！",
    "Oh... you've already heard of this one? I thought I made some kind of discovery...": "哦……你已经听说过这个了？ 我以为我有什么发现...",
    "Ooh I have news for you! I found a new primordial particle!": "哦，我有消息要告诉你！ 我发现了一个新的原始粒子！",
    "Ugh I guess I'll just keep building this thing then, maybe you could tell me things like this a little sooner next time?": "呃，我想我会继续建造这个东西，也许你下次能早点告诉我这样的事情？",
    "Unlock Lightning": "解锁闪电",
    "Yes, I did expect a universe to be normally made of only three particle types, thank you.": "是的，我确实希望一个宇宙通常只由三种粒子组成，谢谢。",
    "You've beaten Primordia v1.3: For the Senses": "你已经击败 Primordia v1.3: For the Senses",
    "(Active)": "(已激活)",
    "/s": "/秒",
    "Info": "信息",
    "Increase Particle gain based on Lightning Particles (Currently: +": "增加基于闪电粒子的粒子增益（当前：+",
    "Multiply Flame, Life, and Aqua Particle gain based on Lightning Particles (Currently: x": "乘以火焰粒子、生命粒子和水粒子增益基于闪电粒子（当前：x",
    "Multiply Particle gain based on Lightning Particles (Currently: x": "乘以粒子增益基于闪电粒子（当前：x",
    "Currently: +": "当前: +",
    "Flame Particles add levels to the first Life Buyable.": "火焰粒子为第一个 生命可购买 增加了等级。",
    "Magma Spirit": "岩浆之灵",
    "Particles multiply Flame Particle gain at a reduced rate.": "粒子以降低的速率乘以火焰粒子增益。",
    "Speed = Heat?": "速度=热量？",
    "Unlock a new row of Flame Upgrades": "解锁新的火焰升级行",
    "Multiply Particle gain based on Particles and Lightning Particles (Currently: x": "基于粒子和闪电粒子乘以粒子增益（当前：x",
    "Forums": "论坛",
    "Are you sure?": "你确定吗？",
    "No": "否",
    "Yes": "是",
    "All Aqua bars are faster based on Cryo Particles.": "所有 水进度条 都基于 低温粒子 而更快。",
    "All Life Buyables are cheaper based on Cryo Particles.": "基于 低温粒子，所有 生命可购买 都更便宜。",
    "Cryo Particles": "低温粒子",
    "Disable the Aqua layer, and Fire Upgrade and Life Buyable costs are raised ^2.50": "禁用 水 层，提高火焰升级和生命可购买成本 ^2.50",
    "Disable the Flame layer, Life buyable costs are raised ^1.75, and Aqua Particle base cost is raised ^1.60 and cannot get below 1": "禁用火焰层，生命可购买成本提高 ^1.75，水光粒子基础成本提高 ^1.60，且不能低于 1",
    "Disable the Life layer, and Aqua bars are 15.00x slower": "禁用 生命 层，水进度条 会慢 15.00 倍",
    "Empower the first Flame upgrade.": "赋予第一个火焰升级。",
    "Frozen Solid": "冷冻固体",
    "I guess particles that make things cold aren't really all that interesting, and are probably completely useless, but hey why not put them in too, right?": "我猜使物体变冷的粒子并不是那么有趣，而且可能完全没用，但是为什么不把它们也放进去，对吧？",
    "Infinity": "无限",
    "Oh let me guess, this one was already discovered too, right?": "哦，让我猜猜，这个也已经被发现了，对吧？",
    "Reward:": "奖励：",
    "See, I knew it. Damn discovering new things is harder than I thought.": "看，我就知道了。 该死的发现新事物比我想象的要难。",
    "Time to keep making this boring universe...": "是时候继续创造这个无聊的宇宙了……",
    "Unlock Cryo": "解锁低温",
    ", Wind Speed:": ", 风速：",
    "Add levels to all previous Life Buyables based on Particle gain.": "基于粒子增益为所有以前的 生命可购买 添加等级。",
    "Ah, my universe has finally reached the point where it can generate its own particles! This has gotta be revolutionary, right?": "啊，我的宇宙终于到了可以自己产生粒子的地步了！这一定是革命性的，对吧？",
    "Air Particles": "空气粒子",
    "Disable the Flame layer, Life buyable costs are raised ^2.50, and Aqua Particle base cost is raised ^2.20 and cannot get below 1": "禁用火焰层，生命可购买成本提高 ^2.50，水族粒子基础成本提高 ^2.20，且不能低于 1",
    "Disable the Life layer, and Aqua bars are 50.63x slower": "禁用 生命 层，水进度条 慢 50.63 倍",
    "Existence Formula": "存在公式",
    "Flame Particles increase base Particle gain at a reduced rate.": "火焰粒子以降低的速率增加基础粒子增益。",
    "Flame, Life, and Aqua Particle gain is tripled for the first": "火焰、生命和水族粒子增益增加三倍在每轮游戏的前",
    "Gain 100% of Flame, Life, and Aqua Particles every second.": "每秒获得 100% 的火焰、生命和水粒子。",
    "Hot Feet": "热脚",
    "Increase Life Particle gain by 15%.": "增加 15% 的生命粒子增益。",
    "Make the Bubble bar 125% faster.": "使气泡条快 125%。",
    "Multiplies Life Particle gain by": "将生命粒子增益乘以",
    "Nah, I'll be able to make something unique, you may think it's all been done before but I'm sure I'll stumble upon something unique soon.": "不，我将能够做出一些独特的东西，你可能认为这一切都是以前做过的，但我相信我很快就会偶然发现一些独特的东西。",
    "No? I mean that could result in some wacky worlds, couldn't it? Don't we want some kind of order in the multiverse?": "不？我的意思是这可能会导致一些古怪的世界，不是吗？难道我们不想要多元宇宙中的某种秩序吗？",
    "No? You're saying that self-sustaining universes already exist? Ughhhh what does it take to make something new?": "不？你是说自给自足的宇宙已经存在？ Ughhhh 创造新事物需要什么？",
    "Oh, so now I discover Air Particles? I would've thought that was needed sooner, no? How can Flame Particles exist without some air to keep them alive?": "哦，所以现在我发现了空气粒子？我会认为这需要更早，不是吗？没有空气，火焰粒子怎么可能存在？",
    "Okay okay, jeez you don't have to yell, I know I shouldn't be asking these things, I was just saying-": "好吧好吧，天哪，你不必大喊大叫，我知道我不应该问这些事情，我只是说——",
    "Purest Form": "最纯粹的形式",
    "seconds of a run.": "秒。",
    "Self Sustaining": "自我维持",
    "Sustenance of the Universe": "宇宙的维持",
    "Sweet! Thanks for the free motivation!": "靓仔！感谢您的免费动力！",
    "Ugh fine, I guess I'll just keep building the world like you asked, but could I get some answers later?": "嗯，好吧，我想我会像你问的那样继续建设这个世界，但我以后能得到一些答案吗？",
    "Unlock a new row of Life Buyables": "解锁新的生活可购买品行",
    "Unlock Air": "解锁空气",
    "Water Lily": "荷花",
    "Wind:": "风：",
    "You don't have to believe in me, just let me prove you wrong.": "你不必相信我，只要让我证明你错了。",
    "You're saying that there aren't rules here yet? I mean I guess I never actually made those, but who cares? There should be some default rules to keep things making sense, right?": "你是说这里还没有规矩？我的意思是我想我从来没有真正做过这些，但谁在乎呢？应该有一些默认规则来让事情变得有意义，对吧？",
    ", Tornado Speed:": ", 龙卷风速度：",
    ", Zephyr Speed:": ", 西风速度:",
    "Ultrasound boosts its own gain at a reduced rate.": "超声波以较低的速度提高自身的增益。",
    "Ultrasound boosts Life Buyable Power at a reduced rate.": "超声波以较低的速度提升 生命可购买力量。",
    "Ultrasound boosts the gain speed of all Light Energy colors at a very reduced rate.": "超声波以非常低的速度提高所有光能颜色的增益速度。",
    "Ultrasound boosts Wind/Zephyr/Tornado speeds at a reduced rate.": "超声波以较低的速度提高 风/西风/龙卷风 的速度。",
    "Violet": "紫色",
    "Volume": "体积",
    "Wood Molecule": "木分子",
    "Yellow": "黄色",
    "Yellow Energy": "黄色能量",
    "Yellow Energy Boost": "黄色能量提升",
    "Yellow Energy boosts Lightning Particle gain.": "黄色能量提升闪电粒子增益。",
    "Yellow Energy boosts Orange Energy gain at a reduced rate.": "黄色能量以降低的速率提高橙色能量的增益。",
    "Zephyr:": "西风：",
    "Divide the Earth Grid Cost based on Combinators.": "根据组合器划分地球电网成本。",
    "Duration": "期间",
    "Earth Particles": "地球粒子",
    "Earth, Lightning, Air, and Cryo Particles by": "地球、闪电、空气和低温粒子",
    "Energy": "能量",
    "Fill Grid": "填充网格",
    "Flame Particle Multiplier:": "火焰粒子倍增器：",
    "Flame, Life, Aqua,": "火焰、生命、水、",
    "Frightened Screams": "惊恐的尖叫",
    "Frozen Light": "冰冻之光",
    "Furious Height": "愤怒的高度",
    "Generate 1 Red Energy every second.": "每秒产生 1 点红色能量。",
    "Generate Blue Energy over time based on Total Cryo Challenge Completions.": "根据 总计冷冻挑战 的完成情况，随着时间的推移产生蓝色能量。",
    "Generate Green Energy over time based on Combinators.": "基于组合器随着时间的推移产生绿色能源。",
    "Generate Indigo Energy over time based on Ultrasound.": "基于超声波随着时间的推移产生靛蓝能量。",
    "Generate Orange Energy over time based on Red Energy.": "基于红色能量随时间产生橙色能量。",
    "Generate Yellow Energy over time based on Light Particles.": "基于光粒子随时间产生黄色能量。",
    "Green": "绿色",
    "Green Energy": "绿色能源",
    "Green Energy Boost": "绿色能源助力",
    "Green Energy boosts Ultrasound gain.": "绿色能源提高超声波增益。",
    "Green Energy boosts Yellow Energy gain at a reduced rate.": "绿色能量以降低的速率提高黄色能量的增益。",
    "Grid Cost:": "电网成本：",
    "Grid Level:": "网格级别：",
    "Increase Base Particle gain based on Flame Particles.": "增加基于火焰粒子的基础粒子增益。",
    "Increase Life Buyable Power based on Combinators.": "基于组合器增加生命可购买力。",
    "Indigo": "靛青",
    "Indigo Energy": "靛蓝能源",
    "Indigo Energy Boost": "靛蓝能量提升",
    "Indigo Energy boosts Attraction Power gain.": "Indigo Energy 可提高吸引力增益。",
    "Indigo Energy boosts Blue Energy gain at a reduced rate.": "靛蓝能量以降低的速率提高蓝色能量增益。",
    "Intrabonds": "内部债券",
    "Ionic Bonds": "离子键",
    "Ionic Boosts": "离子增强",
    "Ionic Power.": "离子能量。",
    "Level Down": "降级",
    "Level Up": "升级",
    "levels to all Life Buyables.": "所有生活可购买物品的等级。",
    "Levels up the Earth Grid, but resets it. Requires all grid cells filled.": "升级地球网格，但重置它。需要填充所有网格单元格。",
    "Life Buyable 6 Effect Mult:": "Life Buyable 6 效果倍增：",
    "Light Particles": "光粒子",
    "Location": "地点",
    "Magma Molecule": "岩浆分子",
    "Makes Covalent Bonds 200.00% stronger.": "使共价键强 200.00%。",
    "Makes Ionic Bonds 150.00% stronger.": "使离子键强 150.00%。",
    "Makes Metallic Bonds 150.00% stronger.": "使金属键强度提高 150.00%。",
    "Max All": "最大全部",
    "Metallic Bonds": "金属键",
    "Metallic Boosts": "金属提升",
    "Metallic Power.": "金属力量。",
    "Methane Molecule": "甲烷分子",
    "Molecules": "分子",
    "Morning Sights": "早间景点",
    "Mud Molecule": "泥分子",
    "Multiplies": "相乘",
    "Multiply Particle & Aqua Particle gain based on Earth Particles.": "基于地球粒子的乘法粒子和水族粒子增益。",
    "Ocean Nigh": "海洋之夜",
    "Orange": "橙色",
    "Orange Energy": "橙色能量",
    "Orange Energy adds to Base Particle gain.": "橙色能量增加了基础粒子增益。",
    "Orange Energy Boost": "橙色能量提升",
    "Orange Energy boosts Red Energy gain at a reduced rate.": "橙色能量以降低的速率提高红色能量增益。",
    "Particle Combinators": "粒子组合器",
    "Particle Gain Mult:": "粒子增益倍数：",
    "Passion Bright": "热情明亮",
    "Peace and Quiet": "和平与宁静",
    "Pitch": "沥青",
    "Protein Molecule": "蛋白质分子",
    "Quantum Condensed": "量子凝聚",
    "Raise Base Particle gain ^": "提高基础粒子增益 ^",
    "Red": "红色",
    "Red Energy": "红色能量",
    "Red Energy Boost": "红色能量提升",
    "Red Energy boosts Particle gain.": "红色能量提高粒子增益。",
    "Refracted Lights": "折射灯",
    "Shattered Dreams": "破碎的梦想",
    "Snow Molecule": "雪分子",
    "Sound Particles": "声音粒子",
    "Spark Molecule": "火花分子",
    "Steel Molecule": "钢分子",
    "Sunset Sight": "日落景象",
    "Texture": "质地",
    "The Night Sky": "夜空",
    "There is": "有",
    "Thunderous Streams": "雷鸣般的溪流",
    "Timbre": "音色",
    "Tornado:": "龙卷风：",
    "Torrent Effect Added: +": "洪流效果添加：+",
    "Triples all Color Energy gain for 2m 22.43s, but sacrifices all Light Particles.": "在 2m 22.43 秒内将所有颜色能量增益增加三倍，但会牺牲所有光粒子。",
    "Triples Blue Energy gain for 2m 22.43s, but sacrifices 33% of Light Particles.": "在 2m 22.43 秒内将蓝色能量增益增加三倍，但会牺牲 33% 的光粒子。",
    "Triples Green Energy gain for 2m 22.43s, but sacrifices 33% of Light Particles.": "在 2m 22.43 秒内将绿色能量增益增加三倍，但会牺牲 33% 的光粒子。",
    "Triples Indigo Energy gain for 2m 22.43s, but sacrifices 33% of Light Particles.": "在 2m 22.43 秒内使靛蓝能量增加三倍，但会牺牲 33% 的光粒子。",
    "Triples Orange Energy gain for 2m 22.43s, but sacrifices 33% of Light Particles.": "在 2m 22.43 秒内将橙色能量增加三倍，但会牺牲 33% 的光粒子。",
    "Triples Red Energy gain for 2m 22.43s, but sacrifices 33% of Light Particles.": "在 2m 22.43 秒内将红色能量增加三倍，但会牺牲 33% 的光粒子。",
    "Triples Yellow Energy gain for 2m 22.43s, but sacrifices 33% of Light Particles.": "在 2m 22.43 秒内将黄色能量增益增加三倍，但会牺牲 33% 的光粒子。",
    "Ultrasound": "超声波",
    "Ultrasound (generated by Sound Particles)": "超声波（由声音粒子产生）",
    "Ultrasound boosts Aqua bar speed.": "超声波可提高 水进度条 的速度。",
    "Ultrasound boosts Flame Particle gain at a reduced rate.": "超声波以降低的速率提高火焰粒子的增益。",
    "Adds": "添加",
    "All Energy Boosts": "所有能量提升",
    "Attraction Power": "吸引力",
    "Attraction Power, which multiplies effective Molecules by": "吸引力，将有效分子乘以",
    "Base Particle Gain Added: +": "添加了基础粒子增益：+",
    "Beach Plight": "海滩困境",
    "Beautiful Fragrance": "美丽的香味",
    "Blinding Light": "眩目之光",
    "Blue": "蓝色",
    "Blue Energy": "蓝色能量",
    "Blue Energy Boost": "蓝色能量提升",
    "Blue Energy boosts Green Energy gain at a reduced rate.": "蓝色能量以降低的速率提高绿色能量增益。",
    "Blue Energy boosts the speed of all Aqua bars.": "蓝色能量提升所有 水进度条 的速度。",
    "Boost Attraction Power gain based on Life Buyable Power.": "基于生命可购买的力量提高吸引力力量增益。",
    "Boost the effect of the \"Full Freeze\" challenge based on Air Particles.": "提升基于空气粒子的“完全冻结”挑战的效果。",
    "Boost the effect of the \"Heat = Speed\" upgrade based on Base Particle gain.": "基于基础粒子增益提升“热量 = 速度”升级的效果。",
    "Boost the effect of the \"Temperature Decrease\" challenge based on Combinators.": "提升基于组合器的“降温”挑战的效果。",
    "Calm Sense": "冷静的感觉",
    "Covalence Boosts": "共价提升",
    "Covalence Power.": "共价力量。",
    "Covalent Bonds": "共价键",
    "Disable the Aqua layer, and Fire Upgrade and Life Buyable costs are raised ^7.00": "禁用 水 层，提高火焰升级和生命可购买成本 ^7.00",
    "Disable the Flame layer, Life buyable costs are raised ^6.25, and Aqua Particle base cost is raised ^5.20 and cannot get below 1": "禁用火焰层，生命可购买成本提高 ^6.25，水光粒子基础成本提高 ^5.20，且不能低于 1",
    "A Dense Mind": "迟钝的头脑",
    "Alright, enjoy your vacation or whatever, I'll keep building this universe I guess.": "好吧，享受你的假期或其他什么，我想我会继续建造这个宇宙。",
    "Brought Together": "汇集",
    "Correction Major": "矫正专业",
    "Good! If you don't like them, I probably will, so please, send them over as soon as possible. Goodbye forever!": "好的！如果您不喜欢它们，我可能会，所以请尽快将它们发送过来。永远的告别！",
    "Heartfelt Emotion": "衷情",
    "Hello! Yes I'm the one making the universe here! Maybe I'm just a novice, but that's what you're here for, right?": "你好！是的，我是在这里创造宇宙的人！也许我只是一个新手，但这就是你来这里的目的，对吧？",
    "Look, I'm tired of your sass, okay? Just let me have a fun time with this, or literally just leave, I couldn't care less.": "听着，我厌倦了你的无礼，好吗？让我玩得开心，或者直接离开，我不在乎。",
    "No, you cannot take control of this operation, it's mine! You have no authority here, so leave or I'll throw over a septillion particles at you! That oughta leave a dent!": "不，你不能控制这个操作，它是我的！你在这里没有权限，所以离开，否则我会向你扔一个 septillion 粒子！那应该留下一个凹痕！",
    "Nobody cares about that tired old protocol, dammit, I'm bored and I could use someone else to talk to. Eh regardless, I guess I'll just keep going for now, but please just get me someone, thanks.": "没有人会在意那个陈旧的协议，该死，我很无聊，我可以找别人说话。嗯，不管怎样，我想我现在就继续，但请给我找个人，谢谢。",
    "Oh, so you're telling me you know everything then? No. If I don't know anything than neither do you, so don't claim otherwise.": "哦，所以你告诉我你什么都知道？不。如果我什么都不知道，你也不知道，所以不要声称其他。",
    "Oh, you meant that I need experience before I can make a universe here? But to get experience I'd need to make a universe, right?": "哦，你的意思是我需要经验才能在这里创造一个宇宙？但要获得经验，我需要创造一个宇宙，对吧？",
    "Oh? So you're telling me that I don't have enough combinators to make \"countless combinations\"? Damn you're always making things less interesting...": "哦？所以你是在告诉我，我没有足够的组合器来制作“无数组合”？该死的，你总是让事情变得不那么有趣......",
    "Ooh, so I can use these to strengthen molecules?": "哦，所以我可以用这些来强化分子？",
    "So I need experience to make a universe, but need to make a universe to have experience. Jeez, I'm no million-year-old genius but that sounds like a paradox to me.": "所以我需要经验来创造一个宇宙，但需要创造一个宇宙才能有经验。天哪，我不是百万岁的天才，但这对我来说听起来像是一个悖论。",
    "Ugh whatever, I'm tired of talking at you. Can't you just have me talk with one of your assistants or something? I'm sure you have a few to spare.": "呃，无论如何，我已经厌倦了跟你说话。你不能让我和你的一位助理谈谈吗？我敢肯定你有一些空闲的。",
    "Wait really? You'll actually leave? Damn okay, I guess I'll be alone in this universe then, just me and the hundred quadrillion particles I create every second...": "真的等吗？你真的会离开吗？该死的好吧，我想那时我将独自一人在这个宇宙中，只有我和我每秒创造的一百亿亿个粒子……",
    "Wait what? You're saying that I'm underqualified for this? How dare you, just because I skipped half of my classes doesn't mean-": "等什么？你是说我没有资格做这件事？你怎么敢，仅仅因为我跳过了一半的课并不意味着——",
    "Wait you're still here? Fine I guess I'll suffer through you for the time being if you're really going to be like that.": "等等，你还在吗？好吧，如果你真的要那样的话，我想我会暂时忍受你的痛苦。",
    "Wait, you'll actually send one of your assistants to keep me company? Wow I'm excited, I'll have someone fun to talk to!": "等等，你真的会派你的一名助手来陪我吗？哇，我很兴奋，我要找人聊聊！",
    "Well, I guess it's time to add something to help people sense the world around them, huh... What shall I do...": "好吧，我想是时候添加一些东西来帮助人们感知周围的世界了，嗯……我该怎么办……",
    "Whatever. Enjoy your quiet time while I do all the work. I know you're technically my boss but cmon, you could help a little. Anyways, time to make some molecules, I guess.": "任何。在我做所有工作的同时享受你的安静时光。我知道你在技术上是我的老板，但是 拜托，你可以帮上忙。无论如何，我想是时候制造一些分子了。",
    "Whatever. So it seems I can combine particles into molecules now? That's pretty sick, but I'd say it's something that exists in other universes too, right?": "任何。看来我现在可以将粒子组合成分子了？这很恶心，但我会说它也存在于其他宇宙中，对吧？",
    "Yeah you're right, that's barely anything, but still! You have no right! I'll mind my business, and you mind yours! Or you could actually do your job and help me out here!": "是的，你是对的，这几乎没有什么，但仍然如此！你没有权利！我管我的事，你管你的！或者你真的可以做你的工作并在这里帮助我！",
    "Yep, thought so. I'm glad I didn't get my hopes up for this one. That being said, this is pretty great, there are countless combinations to make now!": "是的，是这么想的。我很高兴我没有对这个抱有希望。话虽这么说，这很棒，现在有无数种组合可以制作！",
    "Yet another fundamental base for any universe, huh. I was really hoping to find something interesting, something I haven't heard of being in a universe before...": "任何宇宙的另一个基本基础，呵呵。我真的很希望能找到一些有趣的东西，一些我以前在宇宙中从未听说过的东西......",
    "You may think that, but there are certainly more combinations of particles in a universe than universes in the cosmos, or at least I assume as much.": "你可能会这么想，但宇宙中的粒子组合肯定比宇宙中的宇宙多，或者至少我假设的数量一样多。",
    "After 1 second of a reset, all Flame Upgrades are automatically purchased if you can afford them.": "重置 1 秒后，如果您负担得起，所有火焰升级都会自动购买。",
    "All Life Buyables are automatically purchased every second.": "每秒自动购买所有 Life Buyables。",
    "All Light Energy colors are generated 4x as fast.": "所有光能颜色的生成速度都是 4 倍。",
    "All Light Energy colors are generated twice as fast, and you can buy max Life Buyables.": "所有光能颜色的生成速度都快了两倍，您可以购买最多的 Life Buyables。",
    "Automatically level up and fill the Earth Grid if both are possible every second, and double Ultrasound gain.": "如果每秒都可能，则自动升级并填充地球网格，并加倍超声波增益。",
    "Color Energy boosts only use up 33% of your Light Particles when used, and they last 50% longer.": "使用时，颜色能量提升仅消耗 33% 的光粒子，并且它们的持续时间延长 50%。",
    "Color Energy Boosts only use up half of your Light Particles when used, and they last 50% longer.": "使用时，颜色能量提升仅消耗一半的光粒子，并且它们的持续时间延长 50%。",
    "Covalent/Ionic Bond costs scale 67% slower, and all Light Energy colors are generated 3x as fast.": "共价键/离子键成本比例降低 67%，所有光能颜色的生成速度提高 3 倍。",
    "Gain 10% of Light Particle gain every second, and you can activate all Color Energy boosts at once if you have unlocked all seven Color Energy types.": "每秒获得 10% 的光粒子增益，如果您已解锁所有七种颜色能量类型，则可以一次激活所有颜色能量提升。",
    "Gain 100% of Air Particle gain every second.": "每秒获得 100% 的空气粒子增益。",
    "Gain 100% of Cryo Particle gain every second.": "每秒获得 100% 的低温粒子增益。",
    "Gain 100% of Earth Particle gain every second.": "每秒获得 100% 的地球粒子增益。",
    "Increase the Molecule limit by 20%, and the Wood Molecule effect uses a better formula.": "将分子上限提高 20%，木分子效果使用更好的公式。",
    "Increase the Molecule limit by 20%.": "将分子限制提高 20%。",
    "Keep Cryo Challenge completions on all resets, and increase the completion limits of the first two Cryo Challenges by 10.": "在所有重置时保持冷冻挑战的完成，并将前两个冷冻挑战的完成限制增加 10。",
    "Layers only reset along their branches, rather than by row (this does NOT affect Cryo Challenges).": "图层仅沿其分支重置，而不是按行重置（这不会影响 低温 挑战）。",
    "Multiply Zephyr Speed and Tornado Speed by 10.": "Zephyr Speed 和 Tornado Speed 乘以 10。",
    "Purchasing Life Buyables does not spend Life Particles": "购买 Life Buyables 不会花费 Life Particles",
    "Square the effect of the \"Liquid Fire\", \"Magma Spirit\" and \"Speed = Heat\" upgrades.": "将“液体之火”、“岩浆之灵”和“速度 = 热量”升级的效果平方。",
    "The Air requirement uses a more efficient formula, you can buy max Air, and you can buy all Life Buyables at once.": "空气需求使用更有效的公式，您可以购买最大空气，并且您可以一次购买所有生命可购买物品。",
    "The amount of Magma Molecules are effectively squared.": "岩浆分子的数量有效地平方。",
    "The effect of the milestone at 5 Advancements is permanently active, and all Aqua bar requirements scale 10% slower.": "5 级进度的里程碑效果永久有效，并且所有 水进度条 要求的比例降低 10%。",
    "The main Combinator effect also affects the first row of Particles.": "主要的组合器效果也会影响第一行粒子。",
    "The milestone at 5 Advancements lasts 30 seconds longer per Advancement after 7": "5 级的里程碑在 7 级后每级的持续时间延长 30 秒",
    "The Spark Molecule effect is cubed.": "火花分子效应是立方的。",
    "The Wave requirement scales 50% slower.": "波浪 要求的扩展速度降低了 50%。",
    "Unlock a new Aqua Bar": "解锁新的 水进度条。",
    "Unlock a new Aqua Bar.": "解锁一个新的 水进度条。",
    "Unlock Earth, and all Aqua Bars are twice as fast.": "解锁地球，所有 水进度条 的速度都提高了一倍。",
    "Unlock Intrabonds.": "解锁内部债券。",
    "Unlock Light & Sound, square the Particle Combinator effect, and Lightning Modes are never de-selected by resets.": "解锁灯光和声音，使粒子组合器效果平方，并且闪电模式永远不会被重置取消选择。",
    "Unlock Metallic Bonds, and all Light Energy colors are generated 20% faster for every Advancement after 35 (": "解锁金属键，所有光能颜色的生成速度在 35 (",
    "Unlock Particle Combinators, gain 100% of Lightning Particle gain every second, and starting a Cryo Challenge only resets the Aqua layer.": "解锁粒子组合器，每秒获得 100% 的闪电粒子增益，开始低温挑战只会重置 Aqua 层。",
    "Wind/Zephyr/Tornado Speeds work sublinearly (square root) rather than logarithmically, and Aqua Bars are faster based on your Earth Grid Level (": "风/西风/龙卷风 速度以次线性（平方根）而非对数方式工作，并且 水进度条 根据您的地球网格级别更快（",
    "x)": "X）",
    "You can activate two Lightning Modes at once.": "您可以一次激活两种闪电模式。",
    "You can fill the Earth Grid with a single button.": "您可以用一个按钮填充地球网格。",
    "You can max all Molecules at once.": "您可以一次最大化所有分子。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "close": "close",
    "check": "check",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'v1.3': 'v1.3',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'L': 'L',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动存档: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Set to ": "设置到 ",
    "Implemented Advancement ": "实现的进步 ",
    "Implemented Advancements ": "实现的进步 ",
    "Floods, each increasing the Base Particle gain exponent by ": "洪水，每一次都将基础粒子增益指数增加",
    "Lightning Mode ": "闪电模式 ",
    "Absolute Zero (": "绝对零度 （",
    "Full Freeze (": "完全冻结 (",
    "Temperature Decrease (": "降温（",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^TPS: ([\d\.,]+)$/,
    /^([\d\.,]+)\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^Added (.+)$/,
    /^Updated (.+)$/,
    /^Fixed (.+)$/,
    /^v([\d\.]+) (.+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Last played (.+)$/, '最近游戏 $1'],
    [/^Disable the Life layer, and Aqua bars are (.+)x slower$/, '禁用 生命 层，水进度条 条会慢 $1x'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Creates (.+) additional Covalence Power$/, '创造 $1 额外的 共价能量'],
    [/^Creates (.+) additional Covalence Power.$/, '创造 $1 额外的 共价能量。'],
    [/^Creates (.+) additional Ionic Power$/, '创造 $1 额外的 离子能量'],
    [/^Creates (.+) additional Ionic Power.$/, '创造 $1 额外的 离子能量。'],
    [/^Creates (.+) additional Metallic Power$/, '创造 $1 额外的 金属能量'],
    [/^Creates (.+) additional Metallic Power.$/, '创造 $1 额外的 金属能量。'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^Balanced up to ([\d\.,]+) Particles\/s$/, '平衡多达 $1 粒子\/秒'],
	[/^Balanced up to ([\d\.]+)e([\d\.,]+) Particles\/s$/, '平衡多达 $1e$2 粒子\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
	[/^([\d\.]+) particles\/s$/, '$1 粒子\/秒'],
	[/^([\d\.]+)\/s$/, '$1\/秒'],
	[/^([\d\.]+)e([\d\.,]+) particles\/s$/, '$1e$2 粒子\/秒'],
	[/^([\d\.,]+) particles\/s$/, '$1 粒子\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/, '$1小时 $2分 $3秒'],
    [/^It took you ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m to beat the game.$/, '你用了 $1天 $2小时 $3分 去通关游戏。'],
    [/^It took you ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s to beat the game.$/, '你用了 $1小时 $2分 $3秒 去通关游戏。'],
    [/^It took you ([\d\.]+)y ([\d\.]+)d ([\d\.]+)h to beat the game.$/, '你用了 $1年 $2天 $3小时 去通关游戏。'],
    [/^([\d\.]+) Particles$/, '$1 粒子'],
    [/^([\d\.]+) Air Particles$/, '$1 空气粒子'],
    [/^([\d\.]+) Cryo Particles$/, '$1 低温粒子'],
    [/^([\d\.]+) Lightning Particles$/, '$1 闪电粒子'],
    [/^([\d\.]+) Earth Particles$/, '$1 土粒子'],
    [/^([\d\.]+) Light Particles$/, '$1 光粒子'],
    [/^([\d\.]+) Sound Particles$/, '$1 声音粒子'],
    [/^([\d\.]+) Flame Particles$/, '$1 火粒子'],
    [/^([\d\.]+) Life Particles$/, '$1 生命粒子'],
    [/^([\d\.]+) Aqua Particles$/, '$1 水粒子'],
    [/^([\d\.,]+) Air Particles$/, '$1 空气粒子'],
    [/^([\d\.,]+) Cryo Particles$/, '$1 低温粒子'],
    [/^([\d\.,]+) Lightning Particles$/, '$1 闪电粒子'],
    [/^([\d\.,]+) Earth Particles$/, '$1 土粒子'],
    [/^([\d\.,]+) Light Particles$/, '$1 光粒子'],
    [/^([\d\.,]+) Sound Particles$/, '$1 声音粒子'],
    [/^([\d\.,]+) Flame Particles$/, '$1 火粒子'],
    [/^([\d\.,]+) Life Particles$/, '$1 生命粒子'],
    [/^([\d\.,]+) Aqua Particles$/, '$1 水粒子'],
    [/^([\d\.,]+) Advancements$/, '$1 进展'],
    [/^([\d\.]+)e([\d\.,]+) Air Particles$/, '$1e$2 空气粒子'],
    [/^([\d\.]+)e([\d\.,]+) Cryo Particles$/, '$1e$2 低温粒子'],
    [/^([\d\.]+)e([\d\.,]+) Lightning Particles$/, '$1e$2 闪电粒子'],
    [/^([\d\.]+)e([\d\.,]+) Earth Particles$/, '$1e$2 土粒子'],
    [/^([\d\.]+)e([\d\.,]+) Light Particles$/, '$1e$2 光粒子'],
    [/^([\d\.]+)e([\d\.,]+) Sound Particles$/, '$1e$2 声音粒子'],
    [/^([\d\.]+)e([\d\.,]+) Flame Particles$/, '$1e$2 火粒子'],
    [/^([\d\.]+)e([\d\.,]+) Life Particles$/, '$1e$2 生命粒子'],
    [/^([\d\.]+)e([\d\.,]+) Aqua Particles$/, '$1e$2 水粒子'],
    [/^([\d\.]+)e([\d\.,]+) Particles$/, '$1e$2 粒子'],
    [/^([\d\.]+)e([\d\.,]+) Advancements$/, '$1e$2 进展'],
    [/^([\d\.,]+) Particle Combinators$/, '$1e$2 粒子组合器'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: (.+) Earth Particles$/, '成本：$1 土粒子'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);