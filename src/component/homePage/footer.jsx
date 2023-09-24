import React from 'react'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='bg-black h-60'>
      <div className='flex justify-center pt-24 gap-12'>
        <Link to='https://github.com/'>
          <FaGithub size={40} style={{ color: "#FFFFFF" }}/>
        </Link>
        <Link to='https://github.com/'>
          <FaLinkedin size={40} style={{ color: "#FFFFFF" }}/>
        </Link>
        <Link to='https://github.com/'>
          <AiOutlineMail size={40} style={{ color: "#FFFFFF" }}/>
        </Link>
      </div>

    </div>
  )
}

export default Footer