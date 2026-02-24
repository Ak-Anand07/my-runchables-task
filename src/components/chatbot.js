"use client";

import { useState } from "react";

const quickReplies = [
  "How can I join?",
  "What is pricing?",
  "How many weekly masterminds?",
];

const getBotReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes("join") || text.includes("apply")) {
    return "Click any 'Apply to Join' button and complete the membership application form.";
  }

  if (text.includes("price") || text.includes("pricing")) {
    return "Go to the Pricing section to compare plans, then click a plan button to start your application.";
  }

  if (text.includes("mastermind") || text.includes("weekly")) {
    return "FounderRise runs five live masterminds every week with focused sessions.";
  }

  if (text.includes("contact") || text.includes("email")) {
    return "You can reach the team at hello@saasrise.com.";
  }

  return "I can help with membership, pricing, or weekly sessions. Ask me anything about FounderRise.";
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I am the FounderRise assistant. Need help with membership or pricing?",
    },
  ]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "bot", text: getBotReply(trimmed) },
    ]);
    setInput("");
  };

  return (
    <div className="chatbot">
      {open ? (
        <section className="chatbot-panel" aria-label="FounderRise chatbot">
          <header className="chatbot-head">
            <strong>FounderRise Assistant</strong>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)}>
              x
            </button>
          </header>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <p key={`${msg.role}-${index}`} className={`chatbot-msg ${msg.role === "user" ? "is-user" : "is-bot"}`}>
                {msg.text}
              </p>
            ))}
          </div>

          <div className="chatbot-quick">
            {quickReplies.map((item) => (
              <button key={item} type="button" onClick={() => sendMessage(item)}>
                {item}
              </button>
            ))}
          </div>

          <form
            className="chatbot-input"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </section>
      ) : null}

      <button className="chatbot-toggle" type="button" aria-label="Open chat" onClick={() => setOpen((value) => !value)}>
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M12 2.75c-5.1 0-9.25 3.62-9.25 8.08 0 2.64 1.46 4.98 3.7 6.45v3.22a.75.75 0 0 0 1.22.58l3.2-2.58c.37.05.75.08 1.13.08 5.1 0 9.25-3.62 9.25-8.08S17.1 2.75 12 2.75Zm0 14.33c-.42 0-.83-.04-1.23-.11a.75.75 0 0 0-.61.15L7.95 18.9v-2.12a.75.75 0 0 0-.39-.66c-2.02-1.11-3.31-3.07-3.31-5.29 0-3.62 3.48-6.58 7.75-6.58s7.75 2.96 7.75 6.58-3.48 6.58-7.75 6.58Z" />
          <path d="M8.2 10.83c0-.48.4-.88.88-.88h5.84c.49 0 .88.4.88.88s-.39.87-.88.87H9.08a.88.88 0 0 1-.88-.87Zm0 2.92c0-.48.4-.88.88-.88h3.74c.48 0 .88.4.88.88s-.4.88-.88.88H9.08a.88.88 0 0 1-.88-.88Z" />
        </svg>
      </button>
    </div>
  );
}

