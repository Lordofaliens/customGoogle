import React from 'react';
import {INavProps} from "../Interfaces/IProps";
import {Link} from "react-router-dom";

const Nav: React.FC<INavProps> = () => {
    return (
        <div className="navMainContainer">
            <div className="navMain">
                <Link  to={"https://mail.google.com/mail/u/0/#inbox"}><img src={"./icons/icons8-gmail-100.png"} alt={"socialMediaIcon"}/></Link>
                <Link  to={"https://web.whatsapp.com/"}><img src={"./icons/icons8-whatsapp-100.png"} alt={"socialMediaIcon"}/></Link>
                <Link  to={"https://web.telegram.org/a/"}><img src={"./icons/icons8-telegram-100.png"} alt={"socialMediaIcon"}/></Link>
                <Link  to={"https://www.instagram.com/"}><img src={"./icons/icons8-instagram-100.png"} alt={"socialMediaIcon"}/></Link>
                <Link  to={"https://github.com/"}><img src={"./icons/icons8-github-100.png"} alt={"socialMediaIcon"}/></Link>
                <Link  to={"https://webmail.tudelft.nl/owa/#path=/mail"}><img src={"./icons/icons8-t-100.png"} alt={"socialMediaIcon"}/></Link>
            </div>
        </div>
    );
}

export default Nav;