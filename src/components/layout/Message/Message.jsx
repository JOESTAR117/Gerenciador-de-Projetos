import { useState, useEffect } from "react";
import { Messages } from "./MessageStyled";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
    {visible && <Messages className={type}>{msg}</Messages>}
    </>
  )
}

export default Message;
