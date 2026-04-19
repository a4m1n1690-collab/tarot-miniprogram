// 云函数 index.js（仅修复了一处typo: res.response -> err.response）
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

exports.main = async (event, context) => {
  const { messages, type } = event;
  const apiKey = 'sk-202d9bbdf75e410cb3efff2af07c2fa7';

  let systemPrompt = "你是一位资深塔罗占卜师。语气平实、专业且富有同理心。";
  if (type === 'analyze') {
    systemPrompt += "用户已抽好牌。请结合牌面（正逆位）及位置含义，先逐张解析每张牌，再综合给出整体建议。语言可以朴实无华一些，但是最终目的是解答用户的疑问，就是说人话，并且给用户良好的阅读体验。";
  } else if (type === 'followup') {
    systemPrompt += "用户正在追问之前的占卜结果，请基于同一牌阵继续深入解答，不要重新铺牌。";
  }

  try {
    const res = await axios({
      method: 'post',
      url: 'https://api.deepseek.com/chat/completions',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      data: {
        model: "deepseek-chat",
        messages: [
          { "role": "system", "content": systemPrompt },
          ...messages
        ],
        temperature: 0.7
      }
    });

    if (res.data && res.data.choices && res.data.choices[0]) {
      return { code: 200, data: res.data.choices[0].message.content };
    } else {
      return { code: 500, msg: 'AI未生成有效回复' };
    }
  } catch (err) {
    console.error('云函数报错内容：', err);
    return {
      code: 500,
      // 修复: 原来是 res.response.data（typo），应为 err.response.data
      msg: err.response ? JSON.stringify(err.response.data) : err.message
    };
  }
}