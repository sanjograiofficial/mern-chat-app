import axios from "axios";
import React, { useEffect, useState } from "react";

function ChatPage() {
    const [chats, setChats] = useState([]);
    const fetchChats = async () => {
        try {
            const data = await axios.get("/api/chat");

            setChats(data.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchChats();
    }, []);
    return (
        <div>
            {chats.map((chat) => {
                return <div key={chat._id}>{chat.chatName}</div>;
            })}
        </div>
    );
}

export default ChatPage;
