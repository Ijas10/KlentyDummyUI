import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="headerFirstCont">
      <img
        alt="klenty"
        className="klentyLogo"
        src="https://res.cloudinary.com/dnlxvy81c/image/upload/v1652444706/Big_Logo_w5v73o.jpg"
      />
      <ul className="nav-items-list">
        <li className="link-item">Platform</li>
        <li className="link-item">Pricing</li>
        <li className="link-item">Acceleration</li>
        <li className="link-item">Resources</li>
        <li className="link-item">Customer Stories </li>
      </ul>
    </div>
    <div className="headerLastPart">
      <button className="noOutlineBtn" type="button">
        Log in
      </button>
      <button className="blueBtn" type="button">
        SCHEDULE DEMO
      </button>
      <button className="tryForFreeBtn" type="button">
        TRY FOR FREE
      </button>
    </div>
  </nav>
)

export default Header
