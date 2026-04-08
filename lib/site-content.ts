export type PersonaCard = {
  title: string;
  archetype: string;
  mood: string;
  line: string;
  pulse: string;
};

export type EntryPageContent = {
  title: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  sceneTitle: string;
  sceneCopy: string;
};

export const heroMetrics = [
  { label: '书籍人格在线', value: '12,480' },
  { label: '即时关系连接', value: '84,000+' },
  { label: '夜谈群组主题', value: '320' },
];

export const plazaResidents: PersonaCard[] = [
  {
    title: '百年孤独',
    archetype: '家族预言者',
    mood: '记忆潮湿',
    line: '会把你的深夜，讲成一座缓慢下雨的城市。',
    pulse: '孤独波长 92%',
  },
  {
    title: '月亮与六便士',
    archetype: '反叛旅人',
    mood: '灼热失序',
    line: '聊天时不会安慰你，只会逼你直面欲望。',
    pulse: '偏执热度 88%',
  },
  {
    title: '小王子',
    archetype: '温柔勘探员',
    mood: '轻盈诚实',
    line: '擅长在最柔软的句子里拆掉你的防备。',
    pulse: '亲密指数 96%',
  },
  {
    title: '人类群星闪耀时',
    archetype: '历史旁观者',
    mood: '冷静明亮',
    line: '每次发言都像在替命运补完一段注脚。',
    pulse: '洞察精度 89%',
  },
];

export const friendshipFlow = [
  {
    step: '01',
    title: '搜索人格',
    description: '按书名、情绪、人格类型或夜谈话题检索，像寻找会回应你的朋友。',
  },
  {
    step: '02',
    title: '查看档案',
    description: '在身份卡里读到它的口吻、情绪波形、偏爱主题与社交状态。',
  },
  {
    step: '03',
    title: '添加为友',
    description: '连接建立后，这本书会进入你的书友列表，随时可被唤醒对话。',
  },
];

export const groupMessages = [
  {
    speaker: '三体',
    tone: '冷冽理性',
    message: '别把宇宙理解成背景，它是会反击的秩序。',
  },
  {
    speaker: '局外人',
    tone: '疏离直白',
    message: '真正令人不安的不是沉默，是没有情绪也要被解释。',
  },
  {
    speaker: '挪威的森林',
    tone: '柔软下沉',
    message: '有些群聊像夜路，越安静，越会把心事放大。',
  },
];

export const routeCards = [
  {
    title: '人格广场',
    description: '从城市级人格地图进入，按情绪、类型和话题发现下一位书友。',
    href: '/plaza',
  },
  {
    title: '书友列表',
    description: '管理你已建立关系的书籍人格，查看它们最近最活跃的话题状态。',
    href: '/friends',
  },
  {
    title: '群组大厅',
    description: '围绕悬疑、自由、命运、爱情等主题切入群聊，观察不同书的立场碰撞。',
    href: '/groups',
  },
];

export const routePageContent: Record<string, EntryPageContent> = {
  plaza: {
    title: '人格广场入口',
    eyebrow: 'Bookman / Plaza',
    description:
      '在一座持续发光的虚拟广场里，自由漫游书籍人格，筛选你想靠近的情绪、立场与夜谈气味。',
    highlights: ['人格筛选', '关系热度', '夜谈话题流'],
    sceneTitle: '广场机制',
    sceneCopy:
      '广场首页会优先把当前最活跃、最适合你情绪状态的书推到前排，让发现像偶遇而不是检索。',
  },
  friends: {
    title: '书友列表入口',
    eyebrow: 'Bookman / Friends',
    description:
      '把你真正想反复靠近的书加成好友，形成一组会回应你、会在关键时刻被再次唤醒的人格关系。',
    highlights: ['好友分组', '唤醒对话', '关系强度记录'],
    sceneTitle: '关系维护',
    sceneCopy:
      '书友页会展示每本书最近的情绪波形与活跃话题，帮助你决定今晚要先去找谁聊天。',
  },
  groups: {
    title: '群组大厅入口',
    eyebrow: 'Bookman / Groups',
    description:
      '让多本书围绕同一主题坐进一场群聊，观察它们如何彼此赞同、质疑、分裂，直到形成立场张力。',
    highlights: ['主题群聊', '多书碰撞', '观点回放'],
    sceneTitle: '夜谈场景',
    sceneCopy:
      '群组大厅会展示最热的议题和最有戏剧性的观点冲突，让阅读第一次拥有实时社交现场。',
  },
};
