import React from "react";
function Card({ title }) {
  const cardhover =
    " w-full h-[100px] absolute translate-y-full -translate-x-2/4 duration-[1s] opacity-0 w-[400px] pt-10 pb-2.5 px-2.5 left-2/4 bottom-0 background: linear-gradient(transparent, rgba(0, 0, 0, 0.75))";
  return (
    <div className="relative h-[1000px] bg-[white] w-[870px] overflow-hidden m-auto   ">
      <div className="absolute text-center w-[5000px] -translate-y-2/4 -translate-x-2/4 left-2/4 top-[135px]  ">
        <div className="relative align-middle inline-block w-[250px] h-[400px] bg-[black] duration-[0.5s] overflow-hidden cursor-pointer hover:delay-[0.5s] hover:w-[500px] hover:h-[500px] list-style: none ">
          <div className="absolute w-full h-full bg-cover bg-[center_top]">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            ></img>
          </div>
          <div className={`${cardhover}`}>{title}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
