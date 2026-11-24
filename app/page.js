
"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("chat");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const modes = [
    { id: "chat", name: "چت هوشمند 💬" },
    { id: "image", name: "ساخت عکس 🎨" },
    { id: "video", name: "ساخت فیلم 🎬" }
  ];

  async function create() {
    if (!prompt.trim()) {
      setAnswer("لطفاً ابتدا ایده خود را بنویس.");
      return;
    }

    if (mode !== "chat") {
      setAnswer("این بخش هنوز به موتور تولید متصل نشده است.");
      return;
    }

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "خطا در ارتباط با هوش مصنوعی");
      }

      setAnswer(data.answer);
    } catch (error) {
      setAnswer(error.message || "ارتباط برقرار نشد.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "#080b18",
      color: "white",
      padding: "25px",
      fontFamily: "Arial",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#917cff", fontSize: 46 }}>
        NEXO AI
      </h1>

      <p>قدرت خلاقیت، بدون محدودیت</p>
      <h2>به دنیای هوش مصنوعی خوش آمدی</h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 10,
        margin: "30px 0"
      }}>
        {modes.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setMode(item.id);
              setAnswer("");
            }}
            style={{
              padding: 16,
              borderRadius: 12,
              border: "1px solid #8065ff",
              background: mode === item.id ? "#8065ff" : "#171b30",
              color: "white",
              fontSize: 16
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      <h3>
        {mode === "chat" ? "با NEXO گفتگو کن" :
         mode === "image" ? "چه تصویری بسازیم؟" :
         "چه فیلمی بسازیم؟"}
      </h3>

      <textarea
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="ایده خودت را اینجا بنویس..."
        style={{
          width: "90%",
          maxWidth: 550,
          height: 160,
          padding: 15,
          borderRadius: 15,
          background: "#171b30",
          color: "white",
          fontSize: 17,
          border: "1px solid #8065ff"
        }}
      />

      <br /><br />

      <button
        onClick={create}
        disabled={loading}
        style={{
          background: "#8065ff",
          color: "white",
          padding: "18px 40px",
          border: 0,
          borderRadius: 14,
          fontSize: 18,
          opacity: loading ? 0.6 : 1
        }}
      >
        {loading ? "در حال پردازش..." : "شروع خلق با NEXO ✨"}
      </button>

      {answer && (
        <div style={{
          margin: "25px auto",
          padding: 20,
          maxWidth: 550,
          background: "#171b30",
          border: "1px solid #8065ff",
          borderRadius: 15,
          textAlign: "right",
          whiteSpace: "pre-wrap"
        }}>
          {answer}
        </div>
      )}

      <p style={{ marginTop: 60, color: "#777" }}>
        © 2026 NEXO AI
      </p>
    </main>
  );
}
