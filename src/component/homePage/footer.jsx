import React from 'react'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


function Footer() {
  return (
    <div className='bg-black h-96 mt-48'>
      <div className='flex justify-evenly h-full pt-48'>
        <a href='https://github.com/'>
          <FaGithub size={40} style={{ color: "#FFFFFF" }}/>
        </a>
        <a href='https://github.com/'>
          <FaLinkedin size={40} style={{ color: "#FFFFFF" }}/>
        </a>
        <a href='https://github.com/'>
          <AiOutlineMail size={40} style={{ color: "#FFFFFF" }}/>
        </a>
      </div>

    </div>
  )
}

export default Footer