import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
const NavLinks = () => {
  const { pathname } = useLocation();
  return (
    <>
      <NavLink
        
        to={"/"}
        className={({ isActive }) => (isActive ? "navLinkActive" : "navLink")}>
        Home
      </NavLink>
      <NavLink
        
        to={"/about-us"}
        className={({ isActive }) => (isActive ? "navLinkActive" : "navLink")}>
        About Us
      </NavLink>
      <NavLink
        
        to={"/blog"}
        className={({ isActive }) => (isActive ? "navLinkActive" : "navLink")}>
        Blog
      </NavLink>
      <NavLink
        
        to={"/contact-us"}
        className={({ isActive }) => (isActive ? "navLinkActive" : "navLink")}>
        Contact Us
      </NavLink>
      <NavLink
        
        to={"/my-cart"}
        className={({ isActive }) => (isActive ? "navLinkActive" : "navLink")}>
        <span className="cart2">
          {pathname === "/my-cart" ? (
            <svg
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_243)">
                <path
                  d="M15.9219 38.2222C17.4061 38.2222 18.6094 37.0189 18.6094 35.5347C18.6094 34.0504 17.4061 32.8472 15.9219 32.8472C14.4376 32.8472 13.2344 34.0504 13.2344 35.5347C13.2344 37.0189 14.4376 38.2222 15.9219 38.2222Z"
                  fill="#f72d57"
                />
                <path
                  d="M32.2499 38.2222C33.7342 38.2222 34.9374 37.0189 34.9374 35.5347C34.9374 34.0504 33.7342 32.8472 32.2499 32.8472C30.7657 32.8472 29.5624 34.0504 29.5624 35.5347C29.5624 37.0189 30.7657 38.2222 32.2499 38.2222Z"
                  fill="#f72d57"
                />
                <path
                  d="M39.5122 6.41418C39.401 6.27716 39.2609 6.16647 39.1019 6.09005C38.9428 6.01364 38.7689 5.9734 38.5924 5.97223H13.7241L14.5005 8.36112H37.0277L33.8385 22.6945H15.9219L10.4633 5.41085C10.4042 5.22745 10.3017 5.06106 10.1644 4.92586C10.0272 4.79067 9.85922 4.69069 9.67494 4.63446L4.77772 3.12946C4.62713 3.08318 4.46891 3.06702 4.31208 3.0819C4.15526 3.09677 4.00289 3.14239 3.8637 3.21615C3.58257 3.36511 3.37214 3.61965 3.27869 3.92376C3.18524 4.22788 3.21642 4.55666 3.36538 4.83778C3.51434 5.1189 3.76888 5.32934 4.07299 5.42279L8.36105 6.73668L13.8435 24.0561L11.8847 25.6567L11.7294 25.812C11.2448 26.3703 10.9702 27.0802 10.9528 27.8193C10.9353 28.5584 11.1762 29.2805 11.6338 29.8611C11.9594 30.257 12.3731 30.5713 12.8418 30.7787C13.3106 30.9861 13.8213 31.0809 14.3333 31.0556H34.2686C34.5853 31.0556 34.8891 30.9297 35.1131 30.7057C35.3372 30.4817 35.463 30.1779 35.463 29.8611C35.463 29.5443 35.3372 29.2405 35.1131 29.0165C34.8891 28.7925 34.5853 28.6667 34.2686 28.6667H14.1422C14.0046 28.662 13.8706 28.6219 13.7531 28.5503C13.6356 28.4787 13.5385 28.378 13.4712 28.2579C13.404 28.1378 13.3689 28.0024 13.3692 27.8648C13.3696 27.7272 13.4054 27.592 13.4733 27.4722L16.3519 25.0833H34.7941C35.0702 25.0901 35.3401 25.0009 35.5579 24.8311C35.7757 24.6612 35.9279 24.4211 35.9885 24.1517L39.7749 7.42946C39.8113 7.25139 39.8065 7.06737 39.7609 6.89144C39.7154 6.7155 39.6303 6.55227 39.5122 6.41418Z"
                  fill="#f72d57"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_243">
                  <rect width="43" height="43" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_243)">
                <path
                  d="M15.9219 38.2222C17.4061 38.2222 18.6094 37.0189 18.6094 35.5347C18.6094 34.0504 17.4061 32.8472 15.9219 32.8472C14.4376 32.8472 13.2344 34.0504 13.2344 35.5347C13.2344 37.0189 14.4376 38.2222 15.9219 38.2222Z"
                  fill="#3F3F3F"
                />
                <path
                  d="M32.2499 38.2222C33.7342 38.2222 34.9374 37.0189 34.9374 35.5347C34.9374 34.0504 33.7342 32.8472 32.2499 32.8472C30.7657 32.8472 29.5624 34.0504 29.5624 35.5347C29.5624 37.0189 30.7657 38.2222 32.2499 38.2222Z"
                  fill="#3F3F3F"
                />
                <path
                  d="M39.5122 6.41418C39.401 6.27716 39.2609 6.16647 39.1019 6.09005C38.9428 6.01364 38.7689 5.9734 38.5924 5.97223H13.7241L14.5005 8.36112H37.0277L33.8385 22.6945H15.9219L10.4633 5.41085C10.4042 5.22745 10.3017 5.06106 10.1644 4.92586C10.0272 4.79067 9.85922 4.69069 9.67494 4.63446L4.77772 3.12946C4.62713 3.08318 4.46891 3.06702 4.31208 3.0819C4.15526 3.09677 4.00289 3.14239 3.8637 3.21615C3.58257 3.36511 3.37214 3.61965 3.27869 3.92376C3.18524 4.22788 3.21642 4.55666 3.36538 4.83778C3.51434 5.1189 3.76888 5.32934 4.07299 5.42279L8.36105 6.73668L13.8435 24.0561L11.8847 25.6567L11.7294 25.812C11.2448 26.3703 10.9702 27.0802 10.9528 27.8193C10.9353 28.5584 11.1762 29.2805 11.6338 29.8611C11.9594 30.257 12.3731 30.5713 12.8418 30.7787C13.3106 30.9861 13.8213 31.0809 14.3333 31.0556H34.2686C34.5853 31.0556 34.8891 30.9297 35.1131 30.7057C35.3372 30.4817 35.463 30.1779 35.463 29.8611C35.463 29.5443 35.3372 29.2405 35.1131 29.0165C34.8891 28.7925 34.5853 28.6667 34.2686 28.6667H14.1422C14.0046 28.662 13.8706 28.6219 13.7531 28.5503C13.6356 28.4787 13.5385 28.378 13.4712 28.2579C13.404 28.1378 13.3689 28.0024 13.3692 27.8648C13.3696 27.7272 13.4054 27.592 13.4733 27.4722L16.3519 25.0833H34.7941C35.0702 25.0901 35.3401 25.0009 35.5579 24.8311C35.7757 24.6612 35.9279 24.4211 35.9885 24.1517L39.7749 7.42946C39.8113 7.25139 39.8065 7.06737 39.7609 6.89144C39.7154 6.7155 39.6303 6.55227 39.5122 6.41418Z"
                  fill="#3F3F3F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_243">
                  <rect width="43" height="43" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </span>
      </NavLink>
      <NavLink
        to={"/signup"}
        className={`SignupButton `}>
        Sign Up
      </NavLink>
    </>
  );
};

export default NavLinks;
