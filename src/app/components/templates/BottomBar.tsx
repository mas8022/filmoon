import React from "react";
import ProfileBtn from "./ProfileBtn";
import Side from "../modules/Side";
import MainSideBarBody from "./MainSideBarBody";
import HomeBtn from "./HomeBtn";
import CommentBtn from "./CommentBtn";
import FavoriteBtn from "./FavoriteBtn";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-32 bg-second rounded-t-[4rem] p-6 flex items-center justify-evenly">
      <Side sideBarName="main-sidebar" cls="llg:hidden block">
        <MainSideBarBody />
      </Side>
      <ProfileBtn />
      <HomeBtn />
      <CommentBtn />
      <FavoriteBtn />
    </div>
  );
};

export default BottomBar;
