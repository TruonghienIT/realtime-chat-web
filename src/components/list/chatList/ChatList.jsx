import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/addUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";

const ChatList = () => {
    const [chats, setChats]= useState([]);
    const [addMode, setAddMode]= useState(false);

    const {currentUser}  = useUserStore();
    const { changeChat }  = useChatStore();

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "userchats", currentUser.id), 
        async(res) => {
            const items = res.data().chats;

            const promises = items.map(async(item) => {
                const userDocRef = doc(db, "users", item.receiverId);
                const userDocSnap = await getDoc(userDocRef);

                const user = userDocSnap.data();

                return { ...item, user };
            });

            const chatData = await Promise.all(promises);
            
            setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        });

        return ()=>{
            unSub();
        }
    }, [currentUser.id]);

    const handleSelect =async (chat) =>{

        changeChat(chat.chatId,chat.user)

    }

    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Tìm kiếm tại đây?" />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add"
                onClick={()=>setAddMode((prev) => !prev)}
                />
            </div>

            {/* Những người nhắn tin */}

            {/* {chats.map((chat) => {
                <div className="item" key={chat.chatId}>
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Trương Hiện</span>
                    <p>Chat.lastMessage</p>
                </div>
            </div>
            })} */}

            {/* UPDATE sau khi thêm người */}

            {chats.map((chat) => {
                return (
                    <div className="item" key={chat.chatId} onClick={() =>handleSelect(chat)}>
                        <img src={chat.user.avatar || "./avatar.png"} alt="" />
                        <div className="texts">
                            <span>{chat.user.username}</span>
                            <p>{chat.lastMessage}</p>
                        </div>
                    </div>
                );
            })}
    
            {addMode && <AddUser/>}
        </div>
    );
};

export default ChatList