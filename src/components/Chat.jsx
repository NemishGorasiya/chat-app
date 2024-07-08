import Message from "./Message";
import "./Chat.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Chat = ({ list }) => {
  return (
    <div className="chat">
      {list.map((message, idx) => (
        <Message key={idx} message={message} />
      ))}
    </div>
  );
};

export default Chat;
