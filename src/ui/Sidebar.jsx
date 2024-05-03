import SidebarItem from "./SidebarItem";
import sprite from "../symbol-defs.svg";
import avatar from "../user.jpg";

function Sidebar() {
  return (
    <header className="sidebar">
      <div className="sidebar__container">
        <svg className="logo">
          <use href={sprite + "#icon-setting"} />
        </svg>
        <h1 className="sidebar__title">Dashboard</h1>
      </div>

      <nav>
        <ul className="sidebar__list">
          <SidebarItem to="/" iconName="key-square">
            Dashboard
          </SidebarItem>
          <SidebarItem to="/product" iconName="square-box">
            Product
          </SidebarItem>
          <SidebarItem to="/customers" iconName="user">
            Customers
          </SidebarItem>
          <SidebarItem to="/income" iconName="wallet">
            Income
          </SidebarItem>
          <SidebarItem to="/promote" iconName="discount">
            Promote
          </SidebarItem>
          <SidebarItem to="/help" iconName="message">
            Help
          </SidebarItem>
        </ul>
      </nav>

      <div className="sidebar__footer">
        <img src={avatar} alt="Avatar" className="sidebar__avatar" />
        <p className="sidebar__username">Vova Bondar</p>
        <p className="sidebar__role">Developer</p>
      </div>
    </header>
  );
}

export default Sidebar;
