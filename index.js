const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

app.post('/translate', async (req, res) => {
  const { text, targetLanguage } = req.body;
  
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured. Please set OPENAI_API_KEY environment variable.' });
  }
  
  const sourceLanguage = 'auto';
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a translation assistant. Translate the following text to ${targetLanguage}.`
          },
          {
            role: "user",
            content: text
          }
        ],
        temperature: 0.3
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const translatedText = response.data.choices[0].message.content;
    res.json({ translatedText });
  } catch (err) {
    console.error('Translation error:', err.message, err.response?.data);
    res.status(500).json({ error: 'Translation failed', details: err.message, mymemory: err.response?.data });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});