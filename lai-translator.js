const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
  { code: 'sv', name: 'Swedish', flag: '🇸🇪' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱' },
  { code: 'uk', name: 'Ukrainian', flag: '🇺🇦' },
  { code: 'ro', name: 'Romanian', flag: '🇷🇴' },
  { code: 'el', name: 'Greek', flag: '🇬🇷' },
  { code: 'cs', name: 'Czech', flag: '🇨🇿' },
  { code: 'hu', name: 'Hungarian', flag: '🇭🇺' },
  { code: 'fi', name: 'Finnish', flag: '🇫🇮' },
  { code: 'no', name: 'Norwegian', flag: '🇳🇴' },
  { code: 'da', name: 'Danish', flag: '🇩🇰' },
  { code: 'he', name: 'Hebrew', flag: '🇮🇱' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'th', name: 'Thai', flag: '🇹🇭' },
  { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },
  { code: 'ms', name: 'Malay', flag: '🇲🇾' },
  { code: 'fa', name: 'Persian', flag: '🇮🇷' },
  { code: 'bn', name: 'Bengali', flag: '🇧🇩' },
  { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
  { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
  { code: 'gu', name: 'Gujarati', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
  { code: 'or', name: 'Odia', flag: '🇮🇳' },
  { code: 'si', name: 'Sinhala', flag: '🇱🇰' },
  { code: 'my', name: 'Burmese', flag: '🇲🇲' },
  { code: 'km', name: 'Khmer', flag: '🇰🇭' },
  { code: 'lo', name: 'Lao', flag: '🇱🇦' },
  { code: 'am', name: 'Amharic', flag: '🇪🇹' },
  { code: 'sw', name: 'Swahili', flag: '🇹🇿' },
  { code: 'xh', name: 'Xhosa', flag: '🇿🇦' },
  { code: 'st', name: 'Sesotho', flag: '🇱🇸' },
  { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
  { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
  { code: 'so', name: 'Somali', flag: '🇸🇴' },
  { code: 'sn', name: 'Shona', flag: '🇿🇼' },
  { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' },
  { code: 'ny', name: 'Chichewa', flag: '🇲🇼' },
  { code: 'ts', name: 'Tsonga', flag: '🇿🇦' },
  { code: 'tn', name: 'Tswana', flag: '🇧🇼' },
  { code: 'ss', name: 'Swati', flag: '🇸🇿' },
  { code: 've', name: 'Venda', flag: '🇿🇦' },
  { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
  { code: 'sq', name: 'Albanian', flag: '🇦🇱' },
  { code: 'hy', name: 'Armenian', flag: '🇦🇲' },
  { code: 'az', name: 'Azerbaijani', flag: '🇦🇿' },
  { code: 'eu', name: 'Basque', flag: '🇪🇸' },
  { code: 'be', name: 'Belarusian', flag: '🇧🇾' },
  { code: 'bs', name: 'Bosnian', flag: '🇧🇦' },
  { code: 'bg', name: 'Bulgarian', flag: '🇧🇬' },
  { code: 'ca', name: 'Catalan', flag: '🇪🇸' },
  { code: 'hr', name: 'Croatian', flag: '🇭🇷' },
  { code: 'et', name: 'Estonian', flag: '🇪🇪' },
  { code: 'gl', name: 'Galician', flag: '🇪🇸' },
  { code: 'ka', name: 'Georgian', flag: '🇬🇪' },
  { code: 'is', name: 'Icelandic', flag: '🇮🇸' },
  { code: 'ga', name: 'Irish', flag: '🇮🇪' },
  { code: 'kk', name: 'Kazakh', flag: '🇰🇿' },
  { code: 'ky', name: 'Kyrgyz', flag: '🇰🇬' },
  { code: 'lv', name: 'Latvian', flag: '🇱🇻' },
  { code: 'lt', name: 'Lithuanian', flag: '🇱🇹' },
  { code: 'mk', name: 'Macedonian', flag: '🇲🇰' },
  { code: 'mn', name: 'Mongolian', flag: '🇲🇳' },
  { code: 'ne', name: 'Nepali', flag: '🇳🇵' },
  { code: 'ps', name: 'Pashto', flag: '🇦🇫' },
  { code: 'sr', name: 'Serbian', flag: '🇷🇸' },
  { code: 'sk', name: 'Slovak', flag: '🇸🇰' },
  { code: 'sl', name: 'Slovenian', flag: '🇸🇮' },
  { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
  { code: 'uz', name: 'Uzbek', flag: '🇺🇿' },
  { code: 'cy', name: 'Welsh', flag: '🇬🇧' },
  { code: 'yi', name: 'Yiddish', flag: '🇮🇱' },
  { code: 'mt', name: 'Maltese', flag: '🇲🇹' },
  { code: 'lb', name: 'Luxembourgish', flag: '🇱🇺' },
  { code: 'fo', name: 'Faroese', flag: '🇫🇴' },
  { code: 'sm', name: 'Samoan', flag: '🇼🇸' },
  { code: 'to', name: 'Tongan', flag: '🇹🇴' },
  { code: 'fj', name: 'Fijian', flag: '🇫🇯' },
  { code: 'mg', name: 'Malagasy', flag: '🇲🇬' },
  { code: 'su', name: 'Sundanese', flag: '🇮🇩' },
  { code: 'jw', name: 'Javanese', flag: '🇮🇩' },
  { code: 'ceb', name: 'Cebuano', flag: '🇵🇭' },
  { code: 'haw', name: 'Hawaiian', flag: '🇺🇸' },
  { code: 'la', name: 'Latin', flag: '🇻🇦' },
  { code: 'mi', name: 'Maori', flag: '🇳🇿' },
  { code: 'qu', name: 'Quechua', flag: '🇵🇪' },
  { code: 'ug', name: 'Uyghur', flag: '🇨🇳' },
  { code: 'wo', name: 'Wolof', flag: '🇸🇳' }
];

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

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lai-Translator</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }
        
        body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            position: relative;
            z-index: 1;
        }
        
        .header {
            text-align: center;
            margin-bottom: 3rem;
            animation: fadeIn 1s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .stars {
            position: relative;
            margin-bottom: 1.5rem;
            height: 60px;
        }
        
        .star {
            position: absolute;
            font-size: 1.5rem;
            animation: float 3s ease-in-out infinite;
        }
        
        .star:nth-child(1) {
            top: -20px;
            left: 20%;
            color: #FFD700;
            animation-delay: 0s;
        }
        
        .star:nth-child(2) {
            top: -10px;
            right: 25%;
            color: #FF6B6B;
            animation-delay: 1s;
        }
        
        .star:nth-child(3) {
            top: 10px;
            left: 15%;
            color: #4ECDC4;
            animation-delay: 2s;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .title {
            background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B, #4ECDC4, #FFD700);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 1rem;
            animation: gradientShift 4s ease-in-out infinite, glow 2s ease-in-out infinite alternate;
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
        }
        
        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        @keyframes glow {
            0% { text-shadow: 0 0 30px rgba(255, 215, 0, 0.5); }
            100% { text-shadow: 0 0 50px rgba(255, 215, 0, 0.8), 0 0 70px rgba(255, 215, 0, 0.3); }
        }
        
        .subtitle {
            color: #fff;
            font-size: 1.2rem;
            margin-bottom: 2rem;
            animation: float 3s ease-in-out infinite;
        }
        
        .decorative-line {
            width: 100px;
            height: 3px;
            background: linear-gradient(90deg, transparent, #FFD700, transparent);
            margin: 0 auto 1rem;
            border-radius: 2px;
            animation: expand 2s ease-in-out infinite;
        }
        
        @keyframes expand {
            0%, 100% { width: 100px; opacity: 0.5; }
            50% { width: 200px; opacity: 1; }
        }
        
        .main-card {
            background: rgba(26, 26, 26, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 215, 0, 0.2);
            border-radius: 20px;
            padding: 2rem;
            animation: growIn 1.5s ease-in;
        }
        
        @keyframes growIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        
        .section {
            margin-bottom: 2rem;
        }
        
        .section-title {
            color: #FFD700;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .language-select {
            width: 100%;
            padding: 12px 16px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 215, 0, 0.3);
            border-radius: 15px;
            color: #fff;
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        
        .language-select:hover {
            border: 1px solid rgba(255, 215, 0, 0.6);
            background: rgba(255, 255, 255, 0.08);
        }
        
        .language-select:focus {
            outline: none;
            border: 2px solid #FFD700;
            background: rgba(255, 255, 255, 0.1);
        }
        
        .selected-language {
            margin-top: 0.5rem;
            display: inline-block;
            background: rgba(255, 215, 0, 0.2);
            color: #FFD700;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            border: 1px solid rgba(255, 215, 0, 0.3);
            font-size: 0.9rem;
        }
        
        .text-input {
            width: 100%;
            min-height: 120px;
            padding: 16px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 215, 0, 0.3);
            border-radius: 15px;
            color: #fff;
            font-size: 1.1rem;
            font-family: 'Poppins', sans-serif;
            resize: vertical;
            transition: all 0.3s ease;
        }
        
        .text-input:hover {
            border: 1px solid rgba(255, 215, 0, 0.6);
            background: rgba(255, 255, 255, 0.08);
        }
        
        .text-input:focus {
            outline: none;
            border: 2px solid #FFD700;
            background: rgba(255, 255, 255, 0.1);
        }
        
        .char-count {
            display: flex;
            justify-content: space-between;
            margin-top: 0.5rem;
            color: #ccc;
            font-size: 0.8rem;
        }
        
        .translate-btn {
            background: linear-gradient(45deg, #FFD700, #FFA500);
            color: #000;
            border: none;
            padding: 15px 40px;
            border-radius: 25px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
            display: block;
            margin: 0 auto;
            min-width: 200px;
        }
        
        .translate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }
        
        .translate-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }
        
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            background: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(20px);
            margin: 5% auto;
            padding: 0;
            border: 1px solid rgba(255, 215, 0, 0.3);
            border-radius: 15px;
            width: 90%;
            max-width: 600px;
            animation: modalSlideIn 0.3s ease-out;
        }
        
        @keyframes modalSlideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-header {
            background: linear-gradient(45deg, #FFD700, #FFA500);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 700;
            font-size: 1.3rem;
        }
        
        .close-btn {
            color: #FFD700;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .formatting-options {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
            flex-wrap: wrap;
        }
        
        .format-btn {
            background: none;
            border: none;
            color: #666;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        .format-btn.active {
            color: #FFD700;
            background: rgba(255, 215, 0, 0.1);
        }
        
        .format-btn:hover {
            color: #FFD700;
        }
        
        .font-size-slider {
            width: 120px;
            accent-color: #FFD700;
        }
        
        .result-text {
            min-height: 200px;
            border: 2px solid rgba(255, 215, 0, 0.3);
            border-radius: 10px;
            padding: 1.5rem;
            background: rgba(0, 0, 0, 0.3);
            color: #FFD700;
            font-size: 20px;
            line-height: 1.6;
            word-break: break-word;
            transition: border-color 0.3s ease;
        }
        
        .result-text:hover {
            border: 2px solid rgba(255, 215, 0, 0.5);
        }
        
        .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 200px;
            flex-direction: column;
            gap: 1rem;
        }
        
        .spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 215, 0, 0.3);
            border-top: 4px solid #FFD700;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .divider {
            height: 1px;
            background: rgba(255, 215, 0, 0.3);
            margin: 1rem 0;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            .title {
                font-size: 2rem;
            }
            
            .main-card {
                padding: 1.5rem;
            }
            
            .formatting-options {
                gap: 0.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="stars">
                <div class="star">⭐</div>
                <div class="star">⭐</div>
                <div class="star">⭐</div>
            </div>
            <h1 class="title">✨ Lai-Translator ✨</h1>
            <p class="subtitle">✨ Break language barriers with AI-powered translation ✨</p>
            <div class="decorative-line"></div>
        </div>
        
        <div class="main-card">
            <div class="section">
                <h3 class="section-title">
                    <span>🌍</span>
                    Target Language
                </h3>
                <select id="languageSelect" class="language-select">
                    ${languages.map(lang => `<option value="${lang.code}">${lang.flag} ${lang.name}</option>`).join('')}
                </select>
                <div id="selectedLanguage" class="selected-language">🇺🇸 English</div>
            </div>
            
            <form id="translateForm">
                <div class="section">
                    <h3 class="section-title">
                        <span>✍️</span>
                        Text to Translate
                    </h3>
                    <textarea 
                        id="textInput" 
                        class="text-input" 
                        placeholder="Enter your text here..."
                        maxlength="1000"
                    ></textarea>
                    <div class="char-count">
                        <span id="charCount">0 characters</span>
                        <span>Max 1000 characters</span>
                    </div>
                </div>
                
                <button type="submit" id="translateBtn" class="translate-btn" disabled>
                    🚀 Translate
                </button>
            </form>
        </div>
    </div>
    
    <div id="modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span>🚀 Translation Result</span>
                <button class="close-btn" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="formatting-options">
                    <span style="color: #FFD700; font-weight: 600;">Formatting Options:</span>
                    <input type="range" id="fontSizeSlider" class="font-size-slider" min="12" max="48" value="20">
                    <span style="color: #FFD700; font-size: 0.9rem;" id="fontSizeDisplay">20px</span>
                    <button class="format-btn" id="boldBtn" onclick="toggleFormat('bold')">B</button>
                    <button class="format-btn" id="italicBtn" onclick="toggleFormat('italic')">I</button>
                    <button class="format-btn" id="underlineBtn" onclick="toggleFormat('underline')">U</button>
                    <input type="color" id="colorPicker" value="#FFD700" onchange="changeColor(this.value)" style="width: 30px; height: 30px; border: none; border-radius: 5px; cursor: pointer;">
                </div>
                <div class="divider"></div>
                <div id="resultContainer">
                    <div class="loading">
                        <div class="spinner"></div>
                        <p style="color: #FFD700;">Translating your text...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const languageSelect = document.getElementById('languageSelect');
        const selectedLanguage = document.getElementById('selectedLanguage');
        const textInput = document.getElementById('textInput');
        const charCount = document.getElementById('charCount');
        const translateBtn = document.getElementById('translateBtn');
        const translateForm = document.getElementById('translateForm');
        const modal = document.getElementById('modal');
        const resultContainer = document.getElementById('resultContainer');
        const fontSizeSlider = document.getElementById('fontSizeSlider');
        const fontSizeDisplay = document.getElementById('fontSizeDisplay');
        
        let currentFormat = {
            bold: false,
            italic: false,
            underline: false,
            color: '#FFD700',
            fontSize: 20
        };
        
        const languages = ${JSON.stringify(languages)};
        
        languageSelect.addEventListener('change', function() {
            const selectedLang = languages.find(lang => lang.code === this.value);
            selectedLanguage.textContent = selectedLang ? selectedLang.flag + ' ' + selectedLang.name : '🇺🇸 English';
        });
        
        textInput.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = count + ' characters';
            translateBtn.disabled = count === 0;
        });
        
        fontSizeSlider.addEventListener('input', function() {
            currentFormat.fontSize = this.value;
            fontSizeDisplay.textContent = this.value + 'px';
            updateResultText();
        });
        
        translateForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const text = textInput.value.trim();
            if (!text) return;
            
            modal.style.display = 'block';
            resultContainer.innerHTML = '<div class="loading"><div class="spinner"></div><p style="color: #FFD700;">Translating your text...</p></div>';
            
            try {
                const response = await fetch('/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        text: text,
                        targetLanguage: languageSelect.value
                    })
                });
                
                const data = await response.json();
                
                if (data.translatedText) {
                    resultContainer.innerHTML = '<div class="result-text" id="resultText" contenteditable="true">' + data.translatedText + '</div>';
                    updateResultText();
                } else {
                    resultContainer.innerHTML = '<div class="result-text">Translation failed. Please try again.</div>';
                }
            } catch (error) {
                resultContainer.innerHTML = '<div class="result-text">Translation failed. Please try again.</div>';
            }
        });
        
        function closeModal() {
            modal.style.display = 'none';
        }
        
        function toggleFormat(format) {
            currentFormat[format] = !currentFormat[format];
            const btn = document.getElementById(format + 'Btn');
            btn.classList.toggle('active', currentFormat[format]);
            updateResultText();
        }
        
        function changeColor(color) {
            currentFormat.color = color;
            updateResultText();
        }
        
        function updateResultText() {
            const resultText = document.getElementById('resultText');
            if (resultText) {
                resultText.style.fontSize = currentFormat.fontSize + 'px';
                resultText.style.fontWeight = currentFormat.bold ? 'bold' : 'normal';
                resultText.style.fontStyle = currentFormat.italic ? 'italic' : 'normal';
                resultText.style.textDecoration = currentFormat.underline ? 'underline' : 'none';
                resultText.style.color = currentFormat.color;
            }
        }
        
        window.onclick = function(event) {
            if (event.target === modal) {
                closeModal();
            }
        }
    </script>
</body>
</html>
  `);
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Lai-Translator running on port ${PORT}`);
}); 