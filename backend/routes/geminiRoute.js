import axios from "axios";
import dotenv from "dotenv";
import express from "express";


dotenv.config();

const geminiRoute = express.Router();
const GEMINI_API = process.env.GEMINI_API;


geminiRoute.post('/', async(req,res) => {
    const {messages} = req.body;

    if (!Array.isArray(messages) || messages.length ==0){
        return res.status(400).json({error: "Invalid format"});
    }

    try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API}`,
      {
        contents: messages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        }))
      }
    );

    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No reply received.';
    res.json({ reply });
  } catch (error) {
    console.error('Gemini API error:', error.message);
    res.status(500).json({ error: 'Failed to fetch Gemini response' });
  }

});

export default geminiRoute;