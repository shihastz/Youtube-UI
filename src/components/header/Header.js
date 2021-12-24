import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="data:image/png;base64,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"
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Header;
