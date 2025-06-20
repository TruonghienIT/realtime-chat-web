import { auth } from "../../lib/firebase";
import "./detail.css"

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Trương Hiện</h2>
                <p>Lorem ipsum dolor sit amit.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Cài đặt</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chính sách & Trợ giúp</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chia sẻ hình ảnh</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img 
                                    src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&" 
                                    alt="" 
                                />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div> 
                        {/* <div className="photoItem">
                            <div className="photoDetail">
                                <img 
                                    src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&" 
                                    alt="" 
                                />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>  */}
                        {/* <div className="photoItem">
                            <div className="photoDetail">
                                <img 
                                    src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&" 
                                    alt="" 
                                />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div> 
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img 
                                    src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&" 
                                    alt="" 
                                />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>  */}
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chia sẻ file</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Chặn người dùng</button>
                <button className="logout" onClick={()=>auth.signOut()}>Đăng xuất</button>
            </div>
        </div>
    );
};

export default Detail