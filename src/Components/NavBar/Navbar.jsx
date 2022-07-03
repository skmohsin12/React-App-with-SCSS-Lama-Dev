import React from 'react';
import "../NavBar/Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined } from '@mui/icons-material';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='Search . . .' />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined  className='icon'/> English
                    </div>
                    <div className="item">
                        <DarkModeOutlined className='icon'/> Dark Mode
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className='icon' /> English
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className='icon'/>
                        <div className="counter">1</div> 
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className='icon'/>
                        <div className="counter">2</div> 
                    </div>
                    <div className="item">
                        <ListOutlined className='icon'/> English
                    </div>
                    <div className="item">
                        <img src="https://i.pinimg.com/originals/01/5a/53/015a53fb753c609e941b9c548904c34a.jpg" alt="" className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;