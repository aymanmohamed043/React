import globe from '../assets/images/globe.png'

function Header() {
    return(
    <header className="header"> 
        <img src={globe} alt="globel image" />
        <h1 className="header-text">My Travel Journey</h1>
    </header>
)};

export default Header;