
"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("chat");

  const modes = [
    { id: "chat", name: "چت هوشمند", icon: "💬" },
    { id: "image", name: "ساخت عکس", icon: "🎨" },
    { id: "video", name: "ساخت فیلم", icon: "🎬" }
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "#080b18",
      color: "white",
      padding: "25px",
      fontFamily: "Arial",
      textAlign: "center"
    }}>
      <h1 style={{
        color: "#917cff",
        fontSize: "46px"
      }}>NEXO AI</h1>

      <p>قدرت خلاقیت، بدون محدودیت</p>

      <h2>به دنیای هوش مصنوعی خوش آمدی</h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        margin: "30px 0"
      }}>
        {modes.map(item => (
          <button
            key={item.id}
            onClick={() => setMode(item.id)}
            style={{
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #8065ff",
              background: mode === item.id ? "#8065ff" : "#171b30",
              color: "white",
              fontSize: "15px"
            }}
          >
            {item.icon} {item.name}
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
          maxWidth: "550px",
          height: "140px",
          padding: "15px",
          borderRadius: "15px",
          background: "#171b30",
          color: "white",
          fontSize: "17px",
          border: "1px solid #8065ff"
        }}
      />

      <br /><br />

      <button
        onClick={() => alert(
          prompt.trim()
            ? "درخواست شما ثبت شد. موتور تولید NEXO باید متصل شود."
            : "لطفاً ابتدا ایده خود را بنویسید."
        )}
        style={{
          background: "#8065ff",
          color: "white",
          padding: "16px 40px",
          border: "none",
          borderRadius: "14px",
          fontSize: "18px"
        }}
      >
        شروع خلق با NEXO ✨
      </button>

      <p style={{
        marginTop: "60px",
        color: "#777"
      }}>
        © 2026 NEXO AI
      </p>
    </main>
  );
}

