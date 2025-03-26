
const NavBar = ()=>{
    return(
        <div className="navbar shadow-sm">
            <div className="navbar-start">
            <button className="btn btn-ghost text-xl hidden lg:block">
                <img src="logo.png" alt="logo" className="h-10" />
            </button>

                {/* Logo for Small Screens */}
            <button className="btn btn-ghost text-xl lg:hidden">
                <img src="small_logo.png" alt="small-logo" className="h-10" />
            </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    <li><details>
                        <summary>Study-abroad</summary>
                    </details></li>
                    <li><details>
                        <summary>Bootcamps</summary>
                    </details></li>
                    <li><details>
                        <summary>Products</summary>
                    </details></li>
                    <li className='flex-row items-center'><img src='pro_icon.png' alt='pro'/>Ambitios Pro</li>
                    <li className='flex-row items-center'><img src='crown.png' alt='pro'/>Ambitios Elite</li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn w-auto bg-white text-[#B1060F] border border-[#B1060F]"><img src='phone.png' alt='phone_icon'/> Speak to our Exports</button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost w-16 lg:hidden bg-white">
                        <img src="menu.png" alt="menu" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;