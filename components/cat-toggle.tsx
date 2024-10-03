"use client";

import React, { useState } from "react";

export default function CatToggle() {
  const [isCatEnabled, setIsCatEnabled] = useState(false);

  const toggleCat = () => {
    if (isCatEnabled) {
      const catElement = document.getElementById("oneko");
      if (catElement) catElement.remove();
    } else {
      if (typeof window.startOneko === "function") {
        window.startOneko();
      }
    }
    setIsCatEnabled(!isCatEnabled);
  };

  return (
    <button
      onClick={toggleCat}
      className="fixed bottom-5 right-5 bg-slate-300 px-4 py-2 rounded-full text-gray-700 hover:bg-slate-400 transition"
    >
      {isCatEnabled ? "!Cat" : "Cat?"}
    </button>
  );
}
