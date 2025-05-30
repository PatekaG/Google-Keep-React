import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="logo-area">
                <div className="tooltip">
                    <span className="material-icons-outlined hover">menu</span>
                    <span className="tooltip-text">Main Menu</span>
                </div>
                <img className="gb_Od gb_Pd" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" aria-hidden="true" role="presentation" />
                <span className="logo-text">Keep</span>
            </div>

            <div className="search-area">
                <div className="tooltip">
                    <span className="material-icons-outlined hover">search</span>
                    <span className="tooltip-text">Search</span>
                </div>
                <input type="text" placeholder="Search" />
            </div>

            <div className="setting-area">
                <div className="tooltip">
                    <span className="material-icons-outlined hover">refresh</span>
                    <span className="tooltip-text">Refresh</span>
                </div>
                <div className="tooltip">
                    <span className="material-icons-outlined hover">view_agenda</span>
                    <span className="tooltip-text">List View</span>
                </div>
                <div className="tooltip">
                    <span className="material-icons-outlined hover">settings</span>
                    <span className="tooltip-text">Settings</span>
                </div>
        </div>

        <div className="profile-action-area">
            <div className="tooltip">
                <span className="material-icons-outlined hover">apps</span>
                <span className="tooltip-text">Google Apps</span>
            </div>
            <div className="tooltip">
                <img src="https://lh3.googleusercontent.com/ogw/AF2bZyi3Cc81n7hbYUJB0U5KptFVS5tfq7vvMYJ3PShPxZV7wrg=s64-c-mo" alt="" />
                <span className="tooltip-text">Account</span>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;