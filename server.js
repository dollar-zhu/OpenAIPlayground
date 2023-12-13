const express = require("express");
//const OpenAIApi = require("openai");
const OpenAI = require("openai");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "assistant", content: prompt }],
    model: "gpt-4",
    temperature: 0,
  });
  res.send(completion.choices[0].message.content);
});

const PORT = 8020;
app.listen(PORT, () => console.log(`server running on port : ${PORT}`));
