// index.js
function markdownToHtml(md) {
  if (!md) return '';
  let html = md
    .replace(/```[\s\S]*?```/g, '')
    .replace(/^###\s+(.+)$/gm, '<strong>$1</strong>')
    .replace(/^##\s+(.+)$/gm, '<strong>$1</strong>')
    .replace(/^#\s+(.+)$/gm, '<strong>$1</strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^-{3,}$/gm, '')
    .replace(/^[-*]\s+(.+)$/gm, '• $1')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\n/g, '<br>');
  return html;
}

const CARD_BACK_CLOUD = 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/card_back.png';

const TAROT_LIST = [
  { name: '愚者',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/00愚者.jpg' },
  { name: '魔术师',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/01魔术师.jpg' },
  { name: '女祭司',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/02女祭祀.jpg' },
  { name: '女皇',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/03皇后.jpg' },
  { name: '皇帝',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/04皇帝.jpg' },
  { name: '教皇',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/05教皇.jpg' },
  { name: '恋人',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/06恋人.jpg' },
  { name: '战车',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/07战车.jpg' },
  { name: '力量',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/08力量.jpg' },
  { name: '隐士',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/09隐士.jpg' },
  { name: '命运之轮', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/10命运之轮.jpg' },
  { name: '正义',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/11正义.jpg' },
  { name: '倒吊者',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/12倒吊人.jpg' },
  { name: '死神',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/13死神.jpg' },
  { name: '节制',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/14节制.jpg' },
  { name: '恶魔',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/15恶魔.jpg' },
  { name: '高塔',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/16高塔.jpg' },
  { name: '星星',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/17星星.jpg' },
  { name: '月亮',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/18月亮.jpg' },
  { name: '太阳',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/19太阳.jpg' },
  { name: '审判',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/20审判.jpg' },
  { name: '世界',     file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/21世界.jpg' },
  { name: '宝剑二',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/22宝剑2.jpg' },
  { name: '宝剑三',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/23宝剑3.jpg' },
  { name: '宝剑四',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/24宝剑4.jpg' },
  { name: '宝剑五',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/25宝剑5.jpg' },
  { name: '宝剑六',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/26宝剑6.jpg' },
  { name: '宝剑七',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/27宝剑7.jpg' },
  { name: '宝剑八',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/28宝剑8.jpg' },
  { name: '宝剑九',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/29宝剑9.jpg' },
  { name: '宝剑十',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/30宝剑10.jpg' },
  { name: '宝剑国王', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/31宝剑国王.jpg' },
  { name: '宝剑骑士', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/32宝剑骑士.jpg' },
  { name: '宝剑侍卫', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/33宝剑侍卫.jpg' },
  { name: '宝剑王后', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/34宝剑王后.jpg' },
  { name: '宝剑ACE',  file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/35宝剑ACE.jpg' },
  { name: '权杖二',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/36权杖2.jpg' },
  { name: '权杖三',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/37权杖3.jpg' },
  { name: '权杖四',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/38权杖4.jpg' },
  { name: '权杖五',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/39权杖5.jpg' },
  { name: '权杖六',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/40权杖6.jpg' },
  { name: '权杖七',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/41权杖7.jpg' },
  { name: '权杖八',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/42权杖8.jpg' },
  { name: '权杖九',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/43权杖9.jpg' },
  { name: '权杖十',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/44权杖10.jpg' },
  { name: '权杖国王', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/45权杖国王.jpg' },
  { name: '权杖骑士', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/46权杖骑士.jpg' },
  { name: '权杖侍卫', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/47权杖侍卫.jpg' },
  { name: '权杖王后', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/48权杖王后.jpg' },
  { name: '权杖ACE',  file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/49权杖ACE.jpg' },
  { name: '圣杯二',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/50圣杯2.jpg' },
  { name: '圣杯三',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/51圣杯3.jpg' },
  { name: '圣杯四',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/52圣杯4.jpg' },
  { name: '圣杯五',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/53圣杯5.jpg' },
  { name: '圣杯六',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/54圣杯6.jpg' },
  { name: '圣杯七',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/55圣杯7.jpg' },
  { name: '圣杯八',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/56圣杯8.jpg' },
  { name: '圣杯九',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/57圣杯9.jpg' },
  { name: '圣杯十',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/58圣杯10.jpg' },
  { name: '圣杯国王', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/59圣杯国王.jpg' },
  { name: '圣杯骑士', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/60圣杯骑士.jpg' },
  { name: '圣杯侍卫', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/61圣杯侍卫.jpg' },
  { name: '圣杯王后', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/62圣杯王后.jpg' },
  { name: '圣杯ACE',  file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/63圣杯ACE.jpg' },
  { name: '星币二',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/64星币2.jpg' },
  { name: '星币三',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/65星币3.jpg' },
  { name: '星币四',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/66星币4.jpg' },
  { name: '星币五',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/67星币5.jpg' },
  { name: '星币六',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/68星币6.jpg' },
  { name: '星币七',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/69星币7.jpg' },
  { name: '星币八',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/70星币8.jpg' },
  { name: '星币九',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/71星币9.jpg' },
  { name: '星币十',   file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/72星币10.jpg' },
  { name: '星币国王', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/73星币国王.jpg' },
  { name: '星币骑士', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/74星币骑士.jpg' },
  { name: '星币侍卫', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/75星币侍卫.jpg' },
  { name: '星币王后', file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/76星币王后.jpg' },
  { name: '星币ACE',  file: 'cloud://cloud1-d1g8mvco670ceac8e.636c-cloud1-d1g8mvco670ceac8e-1405784056/card/77星币ACE.jpg' },
];

const SPREAD_OPTIONS = [
  {
    name: '时间之流', count: 3, tag: '过去 · 现在 · 未来',
    desc: '适合回顾过去、把握当下、展望未来，了解事情发展脉络。',
    pos: ['过去', '现在', '未来'],
    layout: [{ l: 16, t: 30 }, { l: 50, t: 30 }, { l: 84, t: 30 }],
    containerH: 330,
  },
  {
    name: '圣三角', count: 3, tag: '我以为 · 真相 · 建议',
    desc: '帮你看清表象与真相的差距，获得客观建议。适合混沌困惑时。',
    pos: ['我以为的状况', '真实的状况', '建议'],
    layout: [{ l: 50, t: 30 }, { l: 22, t: 340 }, { l: 78, t: 340 }],
    containerH: 660,
  },
  {
    name: '小十字', count: 4, tag: '核心 · 障碍 · 对策 · 资源',
    desc: '第一行：问题核心；第二行：障碍、对策、资源。全面分析事件各要素。',
    pos: ['问题核心', '障碍', '对策', '资源'],
    layout: [{ l: 50, t: 30 }, { l: 16, t: 340 }, { l: 50, t: 340 }, { l: 84, t: 340 }],
    containerH: 660,
  },
  {
    name: '二选一', count: 5, tag: '现状 · A发展 · B发展 · A结果 · B结果',
    desc: '帮你在两个互斥选项中做决策。须先确定选项A和选项B分别是什么。',
    pos: ['现状', '选A发展', '选B发展', '选A结果', '选B结果'],
    layout: [{ l: 50, t: 620 }, { l: 22, t: 310 }, { l: 78, t: 310 }, { l: 22, t: 30 }, { l: 78, t: 30 }],
    containerH: 930,
  },
];

// 用getTempFileURL批量获取临时URL，完成后再生成牌组
const _imgUrlCache = {};

function fetchAllTempUrls(callback) {
  const allFiles = [CARD_BACK_CLOUD, ...TAROT_LIST.map(c => c.file)];
  const batch1 = allFiles.slice(0, 50);
  const batch2 = allFiles.slice(50);

  function processBatch(list, done) {
    wx.cloud.getTempFileURL({
      fileList: list,
      success: (res) => {
        res.fileList.forEach(item => {
          if (item.tempFileURL) {
            _imgUrlCache[item.fileID] = item.tempFileURL;
          }
        });
        console.log('批次完成，缓存总数:', Object.keys(_imgUrlCache).length);
        done();
      },
      fail: (err) => {
        console.error('getTempFileURL失败', err);
        done();
      }
    });
  }

  processBatch(batch1, () => {
    processBatch(batch2, () => {
      console.log('全部临时URL获取完成，总数:', Object.keys(_imgUrlCache).length);
      callback && callback();
    });
  });
}

function generateDeck() {
  const deck = TAROT_LIST.map((card, idx) => ({
    ...card,
    deckId: idx,
    reverse: Math.random() > 0.5,
    gone: false,
    imgPath: _imgUrlCache[card.file] || card.file,
  }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

let _msgId = 1;
function genId() { return 'm' + (_msgId++); }

Page({
  data: {
    chatList: [
      { id: 'm0', role: 'ai', content: '✨ 你好，我是你的AI塔罗助手。\n请告诉我你想占卜的问题，我将为你揭示命运的指引。' }
    ],
    userInput: '',
    lastId: 'm0',
    loading: false,
    urlsReady: false,  // 临时URL是否已就绪
    conversationHistory: [],
    step: 'chat',
    spreadOptions: SPREAD_OPTIONS,
    currentSpread: null,
    drawnCards: [],
    deck: [],
    selectedPoolIdx: -1,
    isRevealed: false,
    userQuestion: '',
    drawnCount: 0,
    drawnRemain: 0,
    drawnFull: false,
    cardBackUrl: '',
  },

  onLoad() {
    _msgId = 1;
    // 获取所有临时URL（包括牌背），完成后才允许进入抽牌
    fetchAllTempUrls(() => {
      const backUrl = _imgUrlCache[CARD_BACK_CLOUD] || CARD_BACK_CLOUD;
      this.setData({ cardBackUrl: backUrl, urlsReady: true });
      console.log('牌背URL:', backUrl);
    });
  },

  calcDerived(drawnCards, currentSpread) {
    const count = drawnCards.filter(c => c !== null).length;
    const total = currentSpread ? currentSpread.count : 0;
    return {
      drawnCount: count,
      drawnRemain: total - count,
      drawnFull: count > 0 && count === total,
    };
  },

  onInputChange(e) {
    this.setData({ userInput: e.detail.value });
  },

  sendMessage() {
    const text = (this.data.userInput || '').trim();
    if (!text || this.data.loading) return;
    const { step } = this.data;
    if (step === 'select_spread' || step === 'draw' || step === 'reveal') {
      wx.showToast({ title: '请先完成当前占卜操作', icon: 'none' });
      this.setData({ userInput: '' });
      return;
    }
    this.addMsg('user', text);
    this.setData({ userInput: '' });
    if (step === 'reading') {
      this.callAI(text, false);
      return;
    }
    this.setData({ userQuestion: text });
    const aiId = genId();
    this.pushMsg('ai', aiId, '🔮 感应到你的问题，请在下方选择一个牌阵…');
    this.setData({ step: 'select_spread' });
    this.scrollBottom();
  },

  startNewReading() {
    this.setData({
      step: 'chat',
      currentSpread: null,
      drawnCards: [],
      deck: [],
      selectedPoolIdx: -1,
      isRevealed: false,
      userQuestion: '',
      conversationHistory: [],
    });
    this.addMsg('ai', '✨ 好的，请告诉我你的新问题，我们重新开始占卜。');
    this.scrollBottom();
  },

  confirmSpread(e) {
    if (!this.data.urlsReady) {
      wx.showToast({ title: '图片加载中，请稍候...', icon: 'none' });
      return;
    }
    const spread = e.currentTarget.dataset.spread;
    const newDrawn = new Array(spread.count).fill(null);
    this.setData({
      currentSpread: spread,
      step: 'draw',
      drawnCards: newDrawn,
      deck: generateDeck(),
      selectedPoolIdx: -1,
      isRevealed: false,
      ...this.calcDerived(newDrawn, spread),
    });
    this.addMsg('ai', `已布下【${spread.name}】。\n🔮 从下方牌池感应抽牌：先单击牌让它"冒头"，再单击一次放入牌阵槽位。\n点击槽位中的牌可退还牌池。`);
    this.scrollBottom();
  },

  onPoolCardTap(e) {
    if (this.data.step !== 'draw') return;
    const idx = parseInt(e.currentTarget.dataset.idx);
    const { deck, selectedPoolIdx, drawnCards, currentSpread } = this.data;
    if (deck[idx].gone) return;
    if (selectedPoolIdx === idx) {
      const slotIdx = drawnCards.findIndex(c => c === null);
      if (slotIdx === -1) {
        wx.showToast({ title: '牌位已满，请先移除一张', icon: 'none' });
        return;
      }
      const cardData = deck[idx];
      const card = { ...cardData, slotIdx, flipped: false, imgPath: _imgUrlCache[cardData.file] || cardData.file };
      const newDrawn = [...drawnCards];
      newDrawn[slotIdx] = card;
      const newDeck = [...deck];
      newDeck[idx] = { ...deck[idx], gone: true };
      this.setData({
        drawnCards: newDrawn,
        deck: newDeck,
        selectedPoolIdx: -1,
        ...this.calcDerived(newDrawn, currentSpread),
      });
    } else {
      this.setData({ selectedPoolIdx: idx });
    }
  },

  onSlotTap(e) {
    if (this.data.step !== 'draw') return;
    const slotIdx = parseInt(e.currentTarget.dataset.slotidx);
    const card = this.data.drawnCards[slotIdx];
    if (!card) return;
    const deckIdx = this.data.deck.findIndex(d => d.deckId === card.deckId);
    const newDrawn = [...this.data.drawnCards];
    newDrawn[slotIdx] = null;
    const newDeck = [...this.data.deck];
    if (deckIdx !== -1) newDeck[deckIdx] = { ...newDeck[deckIdx], gone: false };
    this.setData({
      drawnCards: newDrawn,
      deck: newDeck,
      ...this.calcDerived(newDrawn, this.data.currentSpread),
    });
  },

  revealCards() {
    const { drawnCards, currentSpread } = this.data;
    const filled = drawnCards.filter(c => c !== null).length;
    if (filled < currentSpread.count) {
      wx.showToast({ title: `还需选 ${currentSpread.count - filled} 张牌`, icon: 'none' });
      return;
    }
    this.setData({ step: 'reveal' });
    drawnCards.forEach((card, i) => {
      if (!card) return;
      setTimeout(() => {
        const updated = this.data.drawnCards.map((c, idx) => {
          if (!c || idx !== i) return c;
          return { ...c, flipped: true };
        });
        this.setData({ drawnCards: updated });
        const allFlipped = updated.filter(c => c !== null).every(c => c.flipped);
        if (allFlipped) this.setData({ isRevealed: true });
      }, i * 600 + 200);
    });
  },

  startAnalyze() {
    if (!this.data.isRevealed) return;
    const { currentSpread, drawnCards, userQuestion } = this.data;
    const cardLines = drawnCards.map((c, i) => {
      if (!c) return '';
      return `  第${i+1}张【${currentSpread.pos[i]}】：${c.name}（${c.reverse ? '逆位' : '正位'}）`;
    }).filter(Boolean).join('\n');
    const prompt = `用户的问题：${userQuestion}\n\n牌阵：${currentSpread.name}（${currentSpread.tag}）\n\n抽到的牌：\n${cardLines}\n\n请逐张解读每张牌在其位置上的含义，最后给出综合建议。`;
    const spreadMsg = {
      id: genId(),
      role: 'ai',
      type: 'spread',
      spread: currentSpread,
      drawnCards: drawnCards.map(c => c ? {...c} : null),
    };
    const newList = [...this.data.chatList, spreadMsg];
    this.setData({
      step: 'reading',
      conversationHistory: [],
      chatList: newList,
      lastId: spreadMsg.id,
    });
    this.callAI(prompt, true);
  },

  callAI(prompt, isReading) {
    this.setData({ loading: true });
    const newUserMsg = { role: 'user', content: prompt };
    const updatedHistory = [...this.data.conversationHistory, newUserMsg];
    const type = isReading ? 'analyze' : 'followup';
    wx.cloud.callFunction({
      name: 'tarot_ai',
      data: { messages: updatedHistory, type },
      success: (res) => {
        const result = res.result;
        let reply = '';
        if (result && result.code === 200 && result.data) {
          reply = result.data;
        } else {
          reply = `解读出错：${(result && result.msg) || '未知错误'}`;
          console.error('云函数返回异常', result);
        }
        const htmlReply = markdownToHtml(reply);
        const finalHistory = [...updatedHistory, { role: 'assistant', content: reply }];
        const msgId = genId();
        const newList = [...this.data.chatList, { id: msgId, role: 'ai', content: htmlReply, isHtml: true }];
        this.setData({
          chatList: newList,
          loading: false,
          lastId: msgId,
          conversationHistory: finalHistory,
        });
        this.scrollBottom();
      },
      fail: (err) => {
        console.error('云函数调用失败', err);
        const errMsg = `云函数调用失败：${err.errMsg || '未知错误'}\n请检查云函数是否已部署、env配置是否正确。`;
        const msgId = genId();
        const newList = [...this.data.chatList, { id: msgId, role: 'ai', content: errMsg, isHtml: false }];
        this.setData({ chatList: newList, loading: false, lastId: msgId });
        this.scrollBottom();
      }
    });
  },

  addMsg(role, content) {
    const id = genId();
    this.pushMsg(role, id, content);
    return id;
  },

  pushMsg(role, id, content) {
    const list = [...this.data.chatList, { id, role, content }];
    this.setData({ chatList: list, lastId: id });
  },

  scrollBottom() {
    setTimeout(() => {
      wx.pageScrollTo({ scrollTop: 99999, duration: 300 });
    }, 80);
  },
});