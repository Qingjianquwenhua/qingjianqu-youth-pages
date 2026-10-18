/* 轻简趣·青年 服务引擎 QJQ-YOUTH-SERVICES-V1 — 全部服务真实上线 */
(function(){
/* ===== 服务注册表：真实内容 + 工具 + 体系链接 ===== */
var SERVICES={
 study:{icon:"📖",title:"学习与升学",tag:"学习方法 · 时间管理 · 升学规划",
  sections:[
   {h:"高效学习法",items:["间隔复习：学完 1 天 / 3 天 / 7 天 / 21 天四轮复习，记忆留存率提升数倍","主动回忆：合上书自问自答，比反复阅读有效 3 倍","番茄工作法：25 分钟专注 + 5 分钟休息，四个番茄后长休 20 分钟","错题本制度：只记「为什么错」，每周复盘一次"]},
   {h:"时间管理",items:["每日三只青蛙：先吃最丑的那只（最难的任务先做）","周计划 + 日清单：周日晚规划一周，每晚列出明日 3 件要事","碎片时间清单：排队背 5 个单词、通勤听 1 篇文章","睡眠优先：熬夜学习得不偿失，7–9 小时睡眠是记忆巩固的关键"]},
   {h:"升学规划",items:["了解自己：兴趣 + 学科优势 + 性格测评，选对方向","信息战：目标学校近三年分数线、招生政策、特色项目","提前量：初三/高三学年启动规划，留出调整空间","备选方案：冲稳保三档，永远给自己留 Plan B"]}],
  actions:["今晚用番茄钟完成 2 个专注回合","写下本周三只青蛙","整理一科的错题本框架"],
  links:[["轻简趣图书馆（全球学术资源）","https://library.qingjianqu.cn"],["轻简趣·知识库","https://ima.qingjianqu.cn"],["青年端下载中心（学习工具）","https://dl.qingjianqu.cn"]],
  tool:"pomodoro"},
 psych:{icon:"🧠",title:"心理护航",tag:"情绪疏导 · 压力管理 · 专业转介",
  sections:[
   {h:"认识你的情绪",items:["所有情绪都是信使：焦虑提示「准备不足」，愤怒提示「边界被侵犯」，悲伤提示「有失去需要哀悼」","情绪没有好坏，只有舒服不舒服；接纳比对抗更有效","命名情绪：说出「我感到焦虑」本身就能降低杏仁核活跃度"]},
   {h:"压力管理工具箱",items:["4-7-8 呼吸法：吸气 4 秒、屏息 7 秒、呼气 8 秒，即刻激活副交感神经（下方工具可用）","身体扫描：从脚趾到头顶逐部位放松，睡前特别有效","运动处方：每周 3 次 30 分钟出汗运动，效果媲美轻度抗焦虑","书写疗法：把烦恼写下来，写 15 分钟，情绪强度平均下降 30%"]},
   {h:"何时求助",items:["情绪持续低落超过 2 周、失眠、兴趣丧失、自我伤害念头——立即求助","求助是强者的行为，不是软弱","全国心理援助热线 12356（24 小时）；青少年服务 12355","平台举报通道亦受理「心理困扰需要帮助」类求助，有专人跟进"]}],
  actions:["现在做一组 4-7-8 呼吸（用下方工具）","给信任的人发一条消息","把最困扰的一件事写下来"],
  links:[["心理援助热线","tel:12356"],["青少年服务热线","tel:12355"],["她安（女性安全保护）","https://guard.qingjianqu.cn"]],
  tool:"breath"},
 female:{icon:"★",title:"青少年女性保护",tag:"分层保护 G1–G5 · 零容忍 · 全程护航",
  sections:[
   {h:"你的五重保护（G1–G5）",items:["G1 人身安全：禁止一切形式的性侵害、危险接触与人身控制","G2 心理尊严：禁止基于性别的侮辱、贬损、身材羞辱与精神操控","G3 发展保障：平等享有学习与发展的机会，任何理由不得剥夺","G4 隐私保护：你的影像、生理信息、行踪受严格保护，传播或威胁传播均违法","G5 救济优先：你的求助优先受理、优先处置、必要时联动 110/12338/12355"]},
   {h:"识别危险信号",items:["诱骗套路：免费礼物 → 索要隐私照片 → 威胁传播（这是敲诈勒索，立即报警）","情感操控：贬低你、孤立你、让你觉得「只有他对你好」","权力压迫：以成绩、机会、身份施压换取亲密接触——无论对方是谁","网络风险：不与网友单独见面；见面必须告知家长并选公共场所"]},
   {h:"遭遇侵害怎么办",items:["第一优先：脱离现场，去人多的地方，拨打 110","保留证据：聊天记录、录音、录像、监控位置，不要清洗身体或衣物","告诉可信任的成年人：家长、老师、社工——说出来不是你的错","拨打 12338 妇女维权热线，或用本平台举报通道（匿名、保密、专人跟进）"]}],
  actions:["记住 3 个求助号码：110 / 12338 / 12355","和家长约定一个「安全暗号」","完成下方安全自检清单"],
  links:[["举报/求助（匿名）","#report"],["妇女维权热线","tel:12338"],["她安（女性安全保护平台）","https://guard.qingjianqu.cn"],["报警","tel:110"]],
  tool:"checklist"},
 safety:{icon:"🛡",title:"安全与权益",tag:"反欺凌 · 反诱骗 · 法律护航",
  sections:[
   {h:"校园与网络欺凌",items:["欺凌形式：肢体、言语、关系孤立、网络曝光羞辱——都不可接受","应对三步：明确说「不」→ 保留证据（截图/录音）→ 告诉老师家长","旁观者也是力量：站出来或报告，就是对欺凌者的最大威慑","法律底线：14 周岁起对严重暴力犯罪负刑事责任；欺凌他人须承担法律责任"]},
   {h:"反诱骗指南",items:["金钱诱骗：刷单返利、免费皮肤、中奖通知——全是诈骗","身份诱骗：冒充公检法、老师、明星助理——核实官方渠道","危险接触：网友邀约单独见面、要求发隐私照片——立即拒绝并拉黑","记住：真正的帮助从不要求你保密、不索取你的隐私"]},
   {h:"权益与法律",items:["《未成年人保护法》《预防未成年人犯罪法》《妇女权益保障法》《个人信息保护法》是你的后盾","个人信息：姓名、学校、住址、证件号不轻易给陌生人","未成年人个人信息受特别保护，任何人违规采集可举报","重大法律问题由公司法律委员会提供专项支持"]}],
  actions:["完成安全自检清单","把 110/12338/12355 存入手机","检查你的社交账号隐私设置"],
  links:[["举报/求助","#report"],["报警","tel:110"],["法律支持（轻简趣数据库）","https://data.qingjianqu.cn"]],
  tool:"checklist"},
 interest:{icon:"🎨",title:"兴趣与创造",tag:"社团 · 创作 · 编程 · 艺术",
  sections:[
   {h:"找到你的兴趣",items:["尝试期（1–3 个月）：广泛尝试 5 种以上，不求精通只求体验","收敛期：留下 1–2 个「做的时候会忘记时间」的方向","深耕期：设定小目标（作品/比赛/演出），用输出倒逼成长","兴趣是人生的第二曲线，成年后会给你惊喜"]},
   {h:"创造工具箱",items:["写作：每天 200 字，一年就是 7 万字","编程：从 Python 或网页开始，做出自己的第一个小工具","艺术：绘画、音乐、舞蹈、摄影——表达是刚需","手工与创造：把想法变成实物的过程锻炼系统思维"]},
   {h:"展示与连接",items:["作品集思维：把每次创作存档，三年后你会感谢自己","比赛与展演：以赛代练，认识同频伙伴","跨文化创造：结合多语言与多元文化元素，是独特竞争力"]}],
  actions:["今天尝试一个新领域 30 分钟","注册一个作品存档空间","找一位同好交流"],
  links:[["轻简趣图书馆（艺术/百科资源）","https://library.qingjianqu.cn"],["轻简趣·知识库","https://ima.qingjianqu.cn"]],
  tool:null},
 cross:{icon:"🌍",title:"跨文化视野",tag:"外语 · 国际理解 · 跨文化交流",
  sections:[
   {h:"外语学习路线",items:["目标导向：先定场景（留学/旅行/兴趣），再倒推词汇与表达","输入为王：每天 30 分钟可理解输入（听读），比背单词表有效","输出倒逼：找语伴、写日记、配音模仿","多语种时代：英语 + 第二外语（西语/阿语/法语等）打开更大世界"]},
   {h:"跨文化理解",items:["文化维度：直接 vs 委婉、个体 vs 集体、时间观念差异","黄金法则：先观察再判断，问「他们为什么这样做」","禁忌意识：宗教、饮食、手势、礼物的禁忌因文化而异","跨文化能力是未来 30 年最稀缺的软实力之一"]},
   {h:"体验与连接",items:["线上国际交流、笔友、语言角","体系内跨文化活动与礼遇通服务","留学与游学规划（详见「全球视野」）"]}],
  actions:["今天外语输入 30 分钟","了解一个国家的文化禁忌","参加一次跨文化交流活动"],
  links:[["轻简趣·礼遇通（跨文化服务）","https://cross.qingjianqu.cn"],["轻简趣图书馆（多语资源）","https://library.qingjianqu.cn"],["青年端跨文化活动","https://youth.qingjianqu.cn"]],
  tool:null},
 startup:{icon:"🚀",title:"创业与合伙",tag:"创业启蒙 · 合伙合作 · 项目实战",
  sections:[
   {h:"创业启蒙（做事业的主人）",items:["核心理念：不为别人打工，做事业的主人——合伙、合作、联盟、创业、投资","从小开始：一个社群、一个作品集、一个小服务，就是创业起点","需求思维：先找到「谁的什么问题没被解决」，再谈产品","MVP 思维：最小可行产品先跑起来，用真实反馈迭代"]},
   {h:"合伙合作之道",items:["选对人 > 做对事：价值观一致是合伙第一原则","规则先行：贡献如何计量、收益如何分配、如何退出，先说清再开始","贡献值思维：你的价值由你创造的贡献定义","法律护航：重要合作签书面协议，权责清晰是长久合作的基础"]},
   {h:"体系内资源",items:["轻简趣·商机平台：需求与能力全域匹配","合伙人·合作者大典对照本：合伙治理的成熟范式","公司业务线 B1–B5：签证出入境/跨文化接待/留学/IT 运维/订阅咨询"]}],
  actions:["写下一个你想解决的问题","找到 1 位潜在合伙人聊聊","了解体系内 1 条业务线"],
  links:[["轻简趣·商机平台","https://opportunity.qingjianqu.cn"],["合伙人·合作者大典","https://partnership.qingjianqu.cn"],["轻简趣数据库","https://data.qingjianqu.cn"]],
  tool:null},
 skill:{icon:"💡",title:"技能升级",tag:"外语 · IT · 设计 · 新媒体",
  sections:[
   {h:"硬技能清单",items:["IT 技能：办公三件套、Python、网页开发、AI 工具运用","设计：PPT 设计、平面设计、视频剪辑","新媒体：写作、短视频、公众号运营","外语：商务外语、翻译实务"]},
   {h:"学习方法",items:["项目驱动：以做出作品为目标学，比看课有效 10 倍","输出检验：教别人/发作品，暴露知识漏洞","刻意练习：卡住的地方才是进步的地方","每天 1 小时，一年 365 小时，足以从入门到熟练"]},
   {h:"技能变现",items:["技能 → 作品 → 案例 → 口碑 → 机会","自由协作：远程项目、合伙项目、联盟服务","体系内 IT 运维订阅等业务线可承接协作"]}],
  actions:["选 1 个技能开始项目驱动学习","今天输出一个小作品","加入一个学习社群"],
  links:[["轻简趣·知识库","https://ima.qingjianqu.cn"],["轻简趣图书馆","https://library.qingjianqu.cn"],["IT 运维业务线","https://data.qingjianqu.cn"]],
  tool:"pomodoro"},
 global:{icon:"🌏",title:"全球视野",tag:"留学 · 游学 · 国际理解",
  sections:[
   {h:"留学规划",items:["早规划：目标国语言、成绩、背景提升，初中/高中启动","选校逻辑：专业实力 > 综合排名 > 地理位置","资金规划：学费+生活费+保险，奖学金与打工政策","学历互认：确认目标国学历与中国互认（教育部涉外监管信息网）"]},
   {h:"游学与国际体验",items:["短期游学/夏校：低成本试错，判断是否适合","国际志愿服务、文化交流项目","线上国际协作：远程国际项目也是经历"]},
   {h:"全球公民素养",items:["理解世界多元：不卑不亢，自信开放","讲好中国故事：跨文化表达能力","合规意识：留学服务选择正规机构（备案资质）"]}],
  actions:["列出 3 个目标国家与理由","查询目标国语言要求","了解 1 个留学奖学金项目"],
  links:[["轻简趣·礼遇通（跨文化）","https://cross.qingjianqu.cn"],["轻简趣图书馆","https://library.qingjianqu.cn"],["轻简趣数据库（业务线）","https://data.qingjianqu.cn"]],
  tool:null},
 career:{icon:"💼",title:"事业发展",tag:"合伙事业 · 贡献值成长 · 伙伴连接",
  sections:[
   {h:"事业观",items:["事业不是「找工作」，是「创造价值的平台」","合伙、合作、联盟、创业、投资——五种事业参与方式","贡献值（CV）成长：你的贡献记录就是你的事业资产"]},
   {h:"能力构建",items:["专业力：一技之长是立身之本","协作力：跨文化、跨领域的协作能力","判断力：信息甄别、风险意识、长期主义"]},
   {h:"伙伴网络",items:["同频伙伴 > 泛泛人脉","体系内深度合伙人连接机制","以贡献赢得信任，以信任获得机会"]}],
  actions:["盘点你的核心能力","找到 1 位事业伙伴深聊","记录本月贡献清单"],
  links:[["合伙人·合作者大典","https://partnership.qingjianqu.cn"],["轻简趣·商机平台","https://opportunity.qingjianqu.cn"]],
  tool:null},
 balance:{icon:"❤",title:"身心平衡",tag:"压力管理 · 健康生活 · 人际智慧",
  sections:[
   {h:"身体是根基",items:["睡眠 7–9 小时：记忆、情绪、免疫力都靠它","每周 3 次出汗运动：慢跑、球类、游泳均可","饮食规律：早餐必吃，少糖少饮料","定期体检，关注身高体重与视力变化"]},
   {h:"人际与情感",items:["青春期人际冲突正常，学会表达「我感到…」而非指责","喜欢一个人是美好的事，但要以尊重与成长为前提","拒绝不舒服的接触，任何关系中你都有说「不」的权利"]},
   {h:"数字健康",items:["屏幕时间管理：每天娱乐屏幕 ≤ 2 小时","睡前 1 小时不刷手机，蓝光影响睡眠质量","网络社交不替代真实陪伴"]}],
  actions:["今晚 23 点前入睡","安排 30 分钟运动","做一组呼吸练习"],
  links:[["心理援助热线","tel:12356"],["青少年服务","tel:12355"]],
  tool:"breath"},
 wealth:{icon:"📊",title:"财富与规划",tag:"财商启蒙 · 记账 · 理性消费",
  sections:[
   {h:"财商启蒙",items:["四个账户：消费、储蓄、成长投资、分享（零花钱按 50/30/10/10 分配）","记账 30 天：看清钱去哪了，是理财第一步","区分「需要」和「想要」：延迟满足是最重要的财商","警惕消费主义陷阱：营销制造焦虑，理性才是自由"]},
   {h:"防诈骗必修课",items:["刷单、返利、免费皮肤、中奖、校园贷——全是坑","任何要你先交钱的「赚钱机会」都是诈骗","未成年人借贷不受法律保护，坚决远离","遇到金钱威胁立即告诉家长并报警"]},
   {h:"长期思维",items:["投资自己（学习与健康）是回报率最高的投资","复利思维：每天进步 1%，一年进步 37 倍","创业与合伙的财富观：价值创造优先于价格博弈"]}],
  actions:["开始记账（今天）","写下本月储蓄目标","检查一次防诈骗知识"],
  links:[["个人财务总账（体系）","https://data.qingjianqu.cn"],["轻简趣·知识库","https://ima.qingjianqu.cn"]],
  tool:null},
 family:{icon:"👨‍👩‍👧",title:"亲子共成长",tag:"家庭活动 · 成长记录 · 家长指引",
  sections:[
   {h:"给孩子的成长建议",items:["每天和家人说说今天发生的事","遇到困扰先告诉爸妈，家是最安全的港湾","学习自己的事情自己做，从小事开始独立"]},
   {h:"给家长的指引",items:["5–12 岁：陪伴 > 说教，游戏化学习效果好","屏幕时间约定：和孩子一起制定规则并共同遵守","性教育从认识身体界限开始：背心短裤覆盖的地方不许别人看和摸","发现孩子情绪或行为突变，先倾听再处理"]},
   {h:"家庭活动库",items:["每周一次家庭活动：户外/桌游/共读","成长记录：每月一张照片+一句话记录","家庭会议：让孩子参与家庭事务讨论，培养责任感"]}],
  actions:["今晚进行一次家庭共读","约定屏幕时间规则","记录一张成长照片"],
  links:[["青少年服务热线","tel:12355"],["轻简趣图书馆（亲子阅读）","https://library.qingjianqu.cn"]],
  tool:null},
 learnfun:{icon:"📚",title:"趣味学习",tag:"绘本 · 科普 · 思维游戏",
  sections:[
   {h:"玩中学",items:["绘本阅读：每天 15 分钟，语言与想象力双发展","科普百科：十万个为什么，保持好奇心","思维游戏：数独、拼图、桌游锻炼逻辑","动手实验：厨房科学、自然观察、手工制作"]},
   {h:"学习习惯",items:["固定时间做固定事：生物钟是最强学习工具","25 分钟专注 + 5 分钟动一动（儿童版番茄钟）","错题变宝藏：做错说明找到了进步点"]},
   {h:"兴趣发现",items:["广泛尝试：运动、音乐、绘画、科学、语言","观察孩子「做什么时最专注」，那就是天赋信号","不比较，每个孩子都有自己的花期"]}],
  actions:["今天读一本绘本/科普书","玩一个思维游戏","尝试一个小实验"],
  links:[["轻简趣图书馆（少儿资源）","https://library.qingjianqu.cn"]],
  tool:"pomodoro"},
 safetykid:{icon:"🛡",title:"安全课堂",tag:"身体界限 · 拒绝危险 · 记住求助",
  sections:[
   {h:"认识身体界限",items:["背心和短裤覆盖的地方，是隐私部位，不许别人看、不许别人摸","你自己也不能随便碰别人的隐私部位","无论对方是谁（亲戚、老师、网友），让你不舒服的接触都要拒绝","「说出来不是你的错」——被伤害永远不是孩子的错"]},
   {h:"识别危险",items:["危险信号：给礼物要求保密、单独邀约、拍照要求、威胁恐吓","不跟陌生人走，不吃陌生人给的东西","记住家庭住址和家长电话","走失时找警察、保安、带孩子的妈妈求助"]},
   {h:"牢记求助",items:["报警 110（遇到坏人、危险）","青少年服务 12355（任何困扰）","告诉爸妈和老师","本平台有求助按钮，点一下就有大人来帮你"]}],
  actions:["背出爸妈的电话号码","和爸妈约定走失集合点","记住 110"],
  links:[["报警","tel:110"],["青少年服务","tel:12355"],["求助","#report"]],
  tool:"checklist"},
 careerdeep:{icon:"🏆",title:"事业深耕",tag:"合伙进阶 · 资源整合 · 深度合伙",
  sections:[
   {h:"进阶路径",items:["从参与者到主导者：主动承担项目核心环节","资源整合：把能力、伙伴、机会串成价值链","深度合伙：以长期贡献赢得深度合伙人身份","治理参与：从做事到参与规则，事业进入新层次"]},
   {h:"风险管理",items:["合规先行：重要决策过法律与合规审查","分散风险：不把所有资源押一个方向","现金储备：保持 6–12 个月生活与事业储备"]},
   {h:"长期主义",items:["个人品牌 = 长期兑现承诺的记录","持续学习：认知水平决定事业天花板","反脆弱：每一次危机都是结构升级的机会"]}],
  actions:["盘点核心资源清单","制定季度事业目标","完成一次合规自查"],
  links:[["合伙人·合作者大典","https://partnership.qingjianqu.cn"],["轻简趣·商机平台","https://opportunity.qingjianqu.cn"],["治理文件库","https://docs.qingjianqu.cn"]],
  tool:null},
 travel:{icon:"🌍",title:"全球旅居",tag:"旅居办公 · 跨文化生活 · 多语种",
  sections:[
   {h:"旅居办公",items:["数字游民装备：轻薄本、随身 WiFi、云盘备份","时间管理：跨时区协作的黄金时段规划","成本地图：生活成本、签证政策、网络环境三维选目的地","保险与安全：医疗险、紧急联系人、使领馆备案"]},
   {h:"跨文化生活",items:["落地第一周：办好电话卡、交通卡、了解紧急号码","尊重当地文化与法律，做文明使者","建立本地连接：社区、语言角、兴趣社群"]},
   {h:"多语种能力",items:["旅居是语言学习的加速器","每天与当地人 10 分钟真实对话","随身云/无限盘：资料全球随行"]}],
  actions:["研究 1 个旅居目的地","准备旅居装备清单","开始学习目的地语言"],
  links:[["随身云（全球随行）","https://disk.qingjianqu.cn"],["轻简趣·礼遇通","https://cross.qingjianqu.cn"],["GitHub 无限盘","https://ghdisk.qingjianqu.cn"]],
  tool:null},
 life:{icon:"❤",title:"生活自洽",tag:"健康管理 · 亲密关系 · 家庭思考",
  sections:[
   {h:"健康管理",items:["年度体检、牙齿、视力三项基础","运动习惯：找到能坚持 10 年的运动方式","心理健康：定期自我觉察，必要时专业支持"]},
   {h:"亲密关系智慧",items:["好的关系让彼此成为更好的人","边界感：再亲密也要尊重对方的独立性","冲突处理：对事不对人，就事论事","慎重对待婚姻与生育决策，符合个人价值观与人生规划"]},
   {h:"家庭与传承",items:["家庭责任与个人追求的平衡","传承思考：你的价值观、技能与事业如何延续","社会参与：以合伙、合作、公益方式贡献社会"]}],
  actions:["预约一次体检","和伴侣/好友进行一次深度对话","写下你的人生价值观清单"],
  links:[["她安（安全保护）","https://guard.qingjianqu.cn"],["心理援助","tel:12356"]],
  tool:"breath"},
 learnlife:{icon:"🎓",title:"终身学习",tag:"持续成长 · 跨领域 · 认知升级",
  sections:[
   {h:"学习体系",items:["T 型结构：一专多能，深耕主业+广泛涉猎","主题学习法：每季度一个主题，集中输入+输出","费曼技巧：能把别人教会，才算真学会"]},
   {h:"认知升级",items:["多元思维模型：心理学、经济学、系统论、概率思维","批判性思维：不轻信、求证据、看反面","复盘习惯：每月一次复盘，把经验变成能力"]},
   {h:"学习资源",items:["轻简趣·知识库：体系化知识","轻简趣图书馆：全球开放学术资源","合伙人·合作者大典：治理与合伙智慧"]}],
  actions:["选定本季度学习主题","输出一篇学习笔记","教别人一个知识点"],
  links:[["轻简趣·知识库","https://ima.qingjianqu.cn"],["轻简趣图书馆","https://library.qingjianqu.cn"],["特劳专库（治理学习）","https://slp.qingjianqu.cn"]],
  tool:"pomodoro"}
};
/* ===== 工具 ===== */
function toolHTML(tool){
 if(tool==="pomodoro")return '<div class="svc-tool"><h4>⏱ 番茄钟（真实可用）</h4><div id="pomoDisplay" style="font-size:40px;font-weight:900;color:#0A4F7A;text-align:center;margin:10px">25:00</div><div style="text-align:center"><button class="btn otp" onclick="pomoStart()">开始专注</button> <button class="btn otp" style="background:#9ab" onclick="pomoReset()">重置</button></div></div>';
 if(tool==="breath")return '<div class="svc-tool"><h4>🌬 4-7-8 呼吸引导（真实可用）</h4><div id="breathCircle" style="width:130px;height:130px;border-radius:50%;background:linear-gradient(135deg,#0CB8B8,#0A4F7A);margin:14px auto;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:700;transition:transform 3s">准备</div><div style="text-align:center"><button class="btn otp" onclick="breathStart()">开始呼吸引导</button> <button class="btn otp" style="background:#9ab" onclick="breathStop()">停止</button></div><div id="breathCount" style="text-align:center;color:#678;font-size:12px;margin-top:8px"></div></div>';
 if(tool==="checklist")return '<div class="svc-tool"><h4>✅ 安全自检清单（真实可用）</h4><div id="clBox"><label><input type="checkbox" class="clItem"> 我记住了求助电话 110 / 12338 / 12355</label><label><input type="checkbox" class="clItem"> 我的社交账号已设为私密</label><label><input type="checkbox" class="clItem"> 我知道「背心短裤覆盖的地方不许碰」</label><label><input type="checkbox" class="clItem"> 我能识别 3 种以上诱骗套路</label><label><input type="checkbox" class="clItem"> 我有一位可信任的成年人可以求助</label><label><input type="checkbox" class="clItem"> 我知道走失/遇险时怎么办</label></div><div id="clResult" style="margin-top:10px;padding:10px;background:#f0fbfb;border-radius:10px;font-size:13px">勾选完成查看结果</div></div>';
 return "";
}
window.openService=function(key){
 var s=SERVICES[key];if(!s){toast('服务加载中，请稍后');return;}
 var h='<button class="mclose" onclick="document.getElementById(\'svcModal\').classList.remove(\'show\')">×</button>';
 h+='<div style="font-size:38px">'+s.icon+'</div><h3>'+s.title+'</h3><div class="sub">'+s.tag+'</div>';
 for(var i=0;i<s.sections.length;i++){
  h+='<div class="svc-sec"><h4>'+s.sections[i].h+'</h4><ul>';
  for(var j=0;j<s.sections[i].items.length;j++)h+='<li>'+s.sections[i].items[j]+'</li>';
  h+='</ul></div>';
 }
 h+='<div class="svc-sec"><h4>行动清单</h4><ul>';
 for(var k=0;k<s.actions.length;k++)h+='<li>☐ '+s.actions[k]+'</li>';
 h+='</ul></div>';
 if(s.links&&s.links.length){
  h+='<div class="svc-sec"><h4>连通资源</h4><div style="display:flex;flex-wrap:wrap;gap:8px">';
  for(var m=0;m<s.links.length;m++){
   var u=s.links[m][1];
   if(u==="#report")h+='<a class="dlbtn" style="background:#E75480" href="#" onclick="document.getElementById(\'svcModal\').classList.remove(\'show\');openReport();return false">'+s.links[m][0]+'</a>';
   else h+='<a class="dlbtn" href="'+u+'" target="_blank">'+s.links[m][0]+'</a>';
  }
  h+='</div></div>';
 }
 h+=toolHTML(s.tool);
 var mo=document.getElementById('svcModal');
 if(!mo){mo=document.createElement('div');mo.id='svcModal';mo.className='modal';
  mo.innerHTML='<div class="mbox" style="max-width:600px"><div id="svcBody"></div></div>';
  mo.onclick=function(e){if(e.target===mo)mo.classList.remove('show');};
  document.body.appendChild(mo);
  var st=document.createElement('style');
  st.textContent='.svc-sec{background:#f7fafc;border-radius:12px;padding:14px 16px;margin:12px 0}.svc-sec h4{color:#0A4F7A;font-size:15px;margin-bottom:8px}.svc-sec ul{margin-left:20px;font-size:13.5px;color:#456}.svc-sec li{margin:6px 0}.svc-tool{background:#eef9f9;border:1.5px solid #b8e6e6;border-radius:12px;padding:16px;margin-top:14px}.svc-tool h4{color:#0A6E7A;margin-bottom:8px}.svc-tool label{display:block;font-size:13px;padding:7px 4px;border-bottom:1px dashed #dde;cursor:pointer}';
  document.head.appendChild(st);
 }
 document.getElementById('svcBody').innerHTML=h;
 mo.classList.add('show');
};
/* ===== 番茄钟 ===== */
var pomoT=null,pomoLeft=1500;
window.pomoStart=function(){
 if(pomoT)return;
 pomoT=setInterval(function(){
  pomoLeft--;
  var d=document.getElementById('pomoDisplay');
  if(!d){clearInterval(pomoT);pomoT=null;return;}
  var m=Math.floor(pomoLeft/60),s=pomoLeft%60;
  d.textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;
  if(pomoLeft<=0){clearInterval(pomoT);pomoT=null;d.textContent='完成！休息一下';toast('一个番茄回合完成！休息 5 分钟');pomoLeft=1500;}
 },1000);
 toast('专注开始，25 分钟不看手机');
};
window.pomoReset=function(){
 if(pomoT){clearInterval(pomoT);pomoT=null;}
 pomoLeft=1500;
 var d=document.getElementById('pomoDisplay');if(d)d.textContent='25:00';
};
/* ===== 呼吸 ===== */
var breathT=null,breathN=0;
window.breathStart=function(){
 if(breathT)return;
 breathN=0;
 var c=document.getElementById('breathCircle');
 var cnt=document.getElementById('breathCount');
 function cycle(){
  if(!document.getElementById('breathCircle')){clearInterval(breathT);breathT=null;return;}
  c.style.transform='scale(1.35)';c.textContent='吸气 4 秒';
  setTimeout(function(){c.textContent='屏息 7 秒';},4000);
  setTimeout(function(){c.style.transform='scale(1)';c.textContent='呼气 8 秒';},11000);
  setTimeout(function(){breathN++;if(cnt)cnt.textContent='已完成 '+breathN+' 组';},19000);
 }
 cycle();
 breathT=setInterval(cycle,20000);
 toast('呼吸引导开始：4 秒吸气 → 7 秒屏息 → 8 秒呼气');
};
window.breathStop=function(){
 if(breathT){clearInterval(breathT);breathT=null;}
 var c=document.getElementById('breathCircle');if(c){c.style.transform='scale(1)';c.textContent='准备';}
};
/* ===== 自检清单 ===== */
document.addEventListener('change',function(e){
 if(e.target&&e.target.className==='clItem'){
  var all=document.querySelectorAll('.clItem'),n=0;
  for(var i=0;i<all.length;i++)if(all[i].checked)n++;
  var r=document.getElementById('clResult');
  if(!r)return;
  if(n===all.length){r.innerHTML='<b style="color:#2e7d32">✓ 全部通过！</b> 你具备很强的安全意识，保持住！';r.style.background='#e8f5e9';}
  else{r.innerHTML='已完成 '+n+'/'+all.length+' 项。未完成的项目就是需要补强的安全点，全部勾选查看结果。';r.style.background='#fff8e1';}
 }
},false);
/* ===== 服务就绪：全量服务真实可用 ===== */
window.QJQ_SERVICES=SERVICES;
})();
