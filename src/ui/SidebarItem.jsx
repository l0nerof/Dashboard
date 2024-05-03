import { NavLink } from "react-router-dom";
import sprite from "../symbol-defs.svg";

function SidebarItem({ children, to, iconName }) {
  return (
    <li>
      <NavLink to={to} className="sidebar__link">
        <svg>
          <use href={sprite + `#icon-${iconName}`} />
        </svg>

        <span>{children}</span>

        <svg className="icon-chevron">
          <use href={sprite + "#icon-chevron-right"} />
        </svg>
      </NavLink>
    </li>
  );
}

export default SidebarItem;
