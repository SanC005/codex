import React from "react";
function Card({ title }) {
  return (
    <div>
      <div className="relative h-[430px] w-[280px] overflow-hidden m-auto shrink-0">
        <div className=" absolute text-center -translate-x-2/4 left-2/4 top-[10px]">
          <div className="relative w-[250px] h-[400px] duration-[0.5s] cursor-pointer hover:delay-[0.2s] hover:w-[260px] hover:h-[400px] hover:z-10 list-style: none">
            <div className="absolute w-full h-full bg-cover bg-[center_top]">
              <img
                alt="image1"
                src="https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              ></img>
              {title}
            </div>
              {/* <div className="absolute text-center">{title}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
