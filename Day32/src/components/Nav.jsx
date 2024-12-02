import { useEffect } from "react";

const Nav = ({color}) => {
    useEffect(()=>{
        alert("color change")
    
      },[color])
    return (
        <div>
            this is {color} color nav
        </div>
    );
};

export default Nav;