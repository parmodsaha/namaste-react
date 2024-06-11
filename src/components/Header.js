import { LOGO_URL } from "../utils/constant";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About Us</a>
                    </li>
                    <li>
                        <a>Contact Us</a>
                    </li>
                    <li>
                        <a>Cart</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;