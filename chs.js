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
    "Primordia": "原始",
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
    "Aqua": "水色",
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
    "": "",
    "": "",
    "": "",
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
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^Balanced up to ([\d\.,]+) Particles\/s$/, '平衡多达 $1 粒子\/秒'],
	[/^Balanced up to ([\d\.]+)e([\d\.,]+) Particles\/s$/, '平衡多达 $1e$2 粒子\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
	[/^([\d\.]+) particles\/s$/, '$1 粒子\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^It took you ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m to beat the game.$/, '你用了 $1天 $2小时 $3分 去通关游戏。'],
    [/^([\d\.]+) Air Particles$/, '$1 空气粒子'],
    [/^([\d\.]+) Cryo Particles$/, '$1 低温粒子'],
    [/^([\d\.]+) Lightning Particles$/, '$1 闪电粒子'],
    [/^([\d\.]+) Earth Particles$/, '$1 土粒子'],
    [/^([\d\.]+) Light Particles$/, '$1 光粒子'],
    [/^([\d\.]+) Sound Particles$/, '$1 声音粒子'],
    [/^([\d\.]+) Flame Particles$/, '$1 火粒子'],
    [/^([\d\.]+) Life Particles$/, '$1 生命粒子'],
    [/^([\d\.]+) Aqua Particles$/, '$1 水粒子'],
    [/^([\d\.]+) Advancements$/, '$1 进展'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);