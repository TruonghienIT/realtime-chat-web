import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";

const Chat = () => {
    const [chat, setChat] = useState();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const { chatId }  = useChatStore();

    const endRef = useRef(null);

    useEffect(()=>{
        endRef.current?.scrollIntroView({behavior:"smooth"});
    },[]);

    useEffect (() => {
        const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
            setChat(res.data())
        })

        return () => {
            unSub();
        };
    },[chatId]);

    console.log(chat)

    const handleEmoji = e =>{
        setText((prev) => prev + e.emoji);
        setOpen(false)
    };

    console.log(text)

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Trương Hiện</span>
                        <p>Lorem ipsum dolor, sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Dù họ có thô bạo hơn, nhưng họ vẫn sẽ bỏ rơi chúng ta, tôi sẽ mở lòng với người công bằng.
                            Để bị đẩy lùi, lựa chọn này ngăn cản anh ta đổ lỗi cho nỗi đau của mình.
                            Anh ấy ghét những điều tuyệt vời nhưng không ghét những thứ khác.
                        </p>
                        <span>1 phút trước</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Dù họ có thô bạo hơn, nhưng họ vẫn sẽ bỏ rơi chúng ta, tôi sẽ mở lòng với người công bằng.
                            Để bị đẩy lùi, lựa chọn này ngăn cản anh ta đổ lỗi cho nỗi đau của mình.
                            Anh ấy ghét những điều tuyệt vời nhưng không ghét những thứ khác.
                        </p>
                        <span>1 phút trước</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Dù họ có thô bạo hơn, nhưng họ vẫn sẽ bỏ rơi chúng ta, tôi sẽ mở lòng với người công bằng.
                            Để bị đẩy lùi, lựa chọn này ngăn cản anh ta đổ lỗi cho nỗi đau của mình.
                            Anh ấy ghét những điều tuyệt vời nhưng không ghét những thứ khác.
                        </p>
                        <span>1 phút trước</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Dù họ có thô bạo hơn, nhưng họ vẫn sẽ bỏ rơi chúng ta, tôi sẽ mở lòng với người công bằng.
                            Để bị đẩy lùi, lựa chọn này ngăn cản anh ta đổ lỗi cho nỗi đau của mình.
                            Anh ấy ghét những điều tuyệt vời nhưng không ghét những thứ khác.
                        </p>
                        <span>1 phút trước</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Dù họ có thô bạo hơn, nhưng họ vẫn sẽ bỏ rơi chúng ta, tôi sẽ mở lòng với người công bằng.
                            Để bị đẩy lùi, lựa chọn này ngăn cản anh ta đổ lỗi cho nỗi đau của mình.
                            Anh ấy ghét những điều tuyệt vời nhưng không ghét những thứ khác.
                        </p>
                        <span>1 phút trước</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://images.pexels.com/photos/19155212/pexels-photo-19155212/free-photo-of-roof-on-a-yellow-background.jpeg" alt="" />
                        <p>
                            Dù họ có thô bạo hơn, nhưng họ vẫn sẽ bỏ rơi chúng ta, tôi sẽ mở lòng với người công bằng.
                            Để bị đẩy lùi, lựa chọn này ngăn cản anh ta đổ lỗi cho nỗi đau của mình.
                            Anh ấy ghét những điều tuyệt vời nhưng không ghét những thứ khác.
                        </p>
                        <span>1 phút trước</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input 
                    type="text" 
                    placeholder="Viết tin nhắn ..." 
                    value={text}
                    onChange={e=>setText(e.target.value)}
                />
                <div className="emoji">
                    <img 
                    src="./emoji.png" 
                    alt="" 
                    onClick={() => setOpen (prev=> !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Gửi</button>
            </div>
        </div>
    )
}

export default Chat