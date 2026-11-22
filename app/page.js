import "./globals.css";
"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#080b18",
      color: "white",
      padding: "30px",
      fontFamily: "Arial",
      textAlign: "center"
    }}>
      <h1 style={{fontSize: "48px", color: "#8b7cff"}}>
        NEXO AI
      </h1>

      <p>هوش مصنوعی خلاقیت و تولید محتوا</p>

      <h2>به دنیای NEXO خوش آمدی</h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="ایده خودت را بنویس..."
        style={{
          width: "90%",
          maxWidth: "600px",
          height: "130px",
          padding: "15px",
          borderRadius: "15px",
          fontSize: "17px"
        }}
      />

      <br /><br />

      <button
        onClick={() => alert("به‌زودی موتور تولید NEXO فعال می‌شود!")}
        style={{
          background: "#8065ff",
          color: "white",
          padding: "15px 35px",
          border: "none",
          borderRadius: "12px",
          fontSize: "18px"
        }}
      >
        شروع خلق با NEXO
      </button>

      <p style={{marginTop: "50px", color: "#888"}}>
        © 2026 NEXO AI
      </p>
    </main>
  );
          }
