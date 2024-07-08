import "./Message.css";

const Message = ({ message }) => {
  const { content, isMine } = message || {};
  return <div className={isMine ? "message mine" : "message"}>{content}</div>;
};

export default Message;
