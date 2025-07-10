import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? "linkactive" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
