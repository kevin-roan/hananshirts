import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";

function Header() {
  return (
    <div className="header_wrapper">
      <div>
        <div className="header_item_details">
          <FaArrowLeftLong />
          <div>
            <h4>Bottomwear</h4>
            <p>6960 Products</p>
          </div>
        </div>
      </div>
      <div className="header_icon_container">
        <IoSearchOutline />
        <CiHeart />
        <IoBagOutline />
      </div>
    </div>
  );
}

export default Header;
