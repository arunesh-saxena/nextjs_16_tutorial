"use client";

import "./style.css";
import { useState } from "react";

const AuthTemplate = ({ children }) => {
  
  const [input, setInput] = useState("");

  return (
    <div className="auth-template">
      <header>
        <b>Auth template header</b>
      </header>
      <label htmlFor="input">Input</label>
      <input
        id="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <main>{children}</main>
    </div>
  );
};

export default AuthTemplate;
