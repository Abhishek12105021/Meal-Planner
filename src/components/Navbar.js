import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <Fragment>
      <div>
        <nav>
          <ul className="nav-bar">
            <Link
              to="/"
              className="nav-link brand"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <i
                className="fa-brands fa-slack fa-2x"
                style={{ color: "white" }}
              ></i>
              <div className="navbar-brand">Health Guru</div>
            </Link>

            <input type="checkbox" id="check" />
            <span className="menu">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/profile" className="nav-link">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link login-btn">
                  Login
                </Link>
              </li>
              <label htmlFor="check" className="close-menu">
                <i className="fas fa-times"></i>
              </label>
            </span>
            <label htmlFor="check" className="open-menu">
              <i className="fas fa-bars"></i>
            </label>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;


// import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

// import "./css/navbar.css";

// const Navbar = () => {
//   return (
//     <Fragment>
//       <div>
//         <nav>
//           <ul className="nav-bar">
//             <Link
//               to="/"
//               className="nav-link"
//               style={{
//                 display: "flex",
//               }}
//             >
//               <i
//                 className="fa-brands fa-slack fa-2x"
//                 style={{ color: "white", padding: "10px" }}
//               ></i>
//               <div
//                 className="navbar-brand"
//                 style={{ color: "white", fontSize: "20px", padding: "10px" }}
//               >
//                 Health Guru
//               </div>
//             </Link>

//             <input type="checkbox" id="check" />
//             <span className="menu">
//               {/* Menu items */}
//               <li>
//                 <Link to="/" className="nav-link">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products" className="nav-link">
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="nav-link">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/profile" className="nav-link">
//                   My Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/login" className="nav-link">
//                     Login
//                 </Link>
//               </li>
//               <label htmlFor="check" className="close-menu">
//                 <i className="fas fa-times"></i>
//               </label>
//             </span>
//             <label htmlFor="check" className="open-menu">
//               <i className="fas fa-bars"></i>
//             </label>
//           </ul>
//         </nav>
//       </div>
//     </Fragment>
//   );
// };

// export default Navbar;
