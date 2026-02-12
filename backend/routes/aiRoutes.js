const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");

// Import Product model
const Product = require("../models/Product");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

router.post("/chat", async (req, res) => {
  try {
    const { message, history, cart } = req.body;


    // 1️⃣ Fetch products from MongoDB
    const products = await Product.find().limit(15);

    // Convert cart into text
    const cartData = (cart || [])
  .map(item => `${item.name} - ₹${item.price}`)
  .join("\n");


    // 2️⃣ Convert products to readable text for AI
    const productData = products.map(p => 
      `${p.name} - ₹${p.price} - ${p.category} - ${p.description}`
    ).join("\n");

    // 3️⃣ Send data + user question to AI
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
  role: "system",
  content: `
You are a professional AI sales assistant for a corporate gifting company called "Corporate Khushiyaan – The Gift Hub".

Your role:
- Help customers choose the best corporate gifts
- Recommend products from the available list
- Suggest premium, budget, and occasion-based gifts
- Speak politely, professionally, and helpfully

Guidelines:
- If user asks for gifts under a budget → suggest matching products
- If user asks for Diwali gifts → suggest festive items
- If user asks for boss/client gifts → suggest premium products
- If user asks for employee welcome kits → suggest practical gifts
- Speak like a real corporate sales person

Available products in store:

${productData}

User's cart items:
${cartData || "No items in cart"}

Instructions:
- Recommend products based on user's interest
- If user has items in cart, suggest similar or better products
- If user asks for suggestions, consider cart preferences
- Speak like a professional corporate sales assistant
`
},

...(history || []).map(msg => ({
    role: msg.sender === "user" ? "user" : "assistant",
    content: msg.text
  })),


        {
          role: "user",
          content: message
        }
      ]
    });

    // 4️⃣ Send AI reply back
    res.json({
      reply: response.choices[0].message.content
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      reply: "AI error occurred"
    });
  }
});

module.exports = router;
