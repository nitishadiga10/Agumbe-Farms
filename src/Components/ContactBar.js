import { CBar, BarItem } from "./StyledItems";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const ContactBar = () => {
  return (
    <>
      <CBar>
        <BarItem>
          <IoLocation className="CIcon"></IoLocation>
          <h6>Agumbe, Karnataka</h6>
        </BarItem>
        <BarItem>
          <AiFillPhone className="CIcon"></AiFillPhone>
          <h6>+91-9663217697</h6>
        </BarItem>
        <BarItem>
          <MdEmail className="CIcon"></MdEmail>
          <h6>nitish.adiga10@gmail.com</h6>
        </BarItem>
      </CBar>
    </>
  );
};

export default ContactBar;
