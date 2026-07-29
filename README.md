# 意林体翻译器

基于 [zhouli-translator](https://github.com/Aspirin0000/zhouli-translator) 改造的意林体反讽文生成工具。

## 功能

- **开写** — 输入一个梗/槽点，生成一本正经的意林体反讽段子
- **自定义 API** — 自配供应商 + Key + 模型，无限使用
- 内置 DeepSeek API，每人免费 5 次

## 部署

```bash
git clone https://github.com/alsunmengy/yilin-translator.git
cd yilin-translator
npm install
cp .env.example .env.local  # 填入 DEEPSEEK_API_KEY
npm run dev -p 8666 --hostname 0.0.0.0
```

## 环境变量

| 变量 | 说明 |
|------|------|
| `DEEPSEEK_API_KEY` | DeepSeek API 密钥 |
| `DEEPSEEK_MODEL` | 默认模型 (deepseek-v4-flash) |

## 技术栈

- Next.js 16 (App Router)
- TypeScript
- DeepSeek API
- nginx (反代 + HTTPS + 限流)
