// Footer component for footer section
import {AiFillHeart } from "react-icons/ai";
import {AiFillCopyrightCircle } from "react-icons/ai";
const Footer = () => {
    return (
      <div className=" flex flex-wrap justify-center shadow-md pt-[20px] pl-[10px] pb-[20px] pr-[10px] m-[10px] w-auto text-center ">
        Created By
        <AiFillHeart className="pr-[5px] pl-[5px] mt-[5px] w-[2em]" color= {"#8b0000"} />
        <a href="https://www.linkedin.com/in/yogesh-sharma-21099b99/" target="_blank" title="Yogesh Sharma Linkedin Profile">
          Yogesh Sharma
        </a>
        <AiFillCopyrightCircle className="pr-[5px] pl-[5px] mt-[5px] w-[2em]" />2023
        <strong className="pl-[5px]">
          Foodie<span>Faster</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;