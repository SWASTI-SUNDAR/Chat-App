import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Chatpage = () => {
  const [chats, setChats] = useState([]);
  const getMessages = async () => {
    try {
      const { data } = await axios.get("/chats");

      setChats(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMessages();
  }, []);

  return <div>{chats}</div>;
};

export default Chatpage;
