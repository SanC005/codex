import React from "react";
import Feed from "../../component/feed/feed";
import Sidebar from "../../component/Sidebar/sidebar";
import Header from "../../component/homePage/header";
function User() {
  return (
    <div className="flex flex-col">
      <div className="h-18 z-20 fixed w-full">
        <Header />

      </div>
      <div className="flex">
        
        <div className="invisible md:visible">
          <Sidebar />
        </div>
        <div className="absolute start-0 md:start-56 ">
          <Feed />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default User;
