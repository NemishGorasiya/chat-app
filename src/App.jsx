import { useEffect, useRef, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
const listData = [
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
  {
    id: 1,
    content: "Hello",
    isMine: true,
  },
  {
    id: 2,
    content: "Hi",
    isMine: false,
  },
  {
    id: 3,
    content: "How r u?",
    isMine: true,
  },
  {
    id: 4,
    content: "good",
    isMine: false,
  },
  {
    id: 5,
    content: "what about u?",
    isMine: false,
  },
];
function App() {
  const chatRef = useRef(null);
  const inputRef = useRef(null);
  const [list, setList] = useState(listData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target[0].value;
    if (message) {
      setList((prev) => [
        ...prev,
        {
          content: message,
          isMine: true,
          id: Math.random(),
        },
      ]);
      inputRef.current.value = "";
    }
  };
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [list]);
  return (
    <div ref={chatRef} className="chat-container">
      <Chat list={list} />
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Enter Message"
          ref={inputRef}
          type="text"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
