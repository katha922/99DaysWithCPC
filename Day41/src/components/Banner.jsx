import image from "../../public/images/profile.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ReactTyped } from "react-typed";


const Banner = () => {
    return (
        <div>
           <div className="flex items-center justify-center mt-20 ">
               <div className="">
                   <img src={image} className="h-40 w-40 rounded-full" alt="" />
                
                </div>
            
                
            </div>
            <div className=" text-center">
               <h4 className="text-slate-600 mt-2">Hi! I'm Katha Saha</h4>
               <h2 className="text-2xl font-semibold mt-2">Frontend Web <ReactTyped className="text-red-700"
          
          strings={["Developer","Coder","Programmer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        /></h2>
               <p className="mt-2 text-slate-500">Passionate Frontend Developer crafting responsive, user-friendly websites with modern tools like React and CSS.</p>
            </div>

            <div>
                <ul className="flex gap-4 justify-center mt-4">
                    <li className="text-2xl bg-blue-600 rounded-full"><FaFacebook /></li>
                    <li className="text-2xl bg-blue-600 rounded"><FaWhatsappSquare /></li>
                    <li className="text-2xl bg-blue-600 rounded"><FaLinkedin /></li>
                    <li className="text-2xl bg-blue-600 rounded"><MdEmail /></li>
                </ul>
            </div>
            <div className="flex justify-center mt-6">
                <button className="bg-blue-600 rounded-xl p-2 font-semibold text-white">Download CV</button>
            </div>
        </div>
        
    );
};

export default Banner;