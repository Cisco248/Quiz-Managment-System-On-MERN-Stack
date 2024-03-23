import SlideBarCSS from "./Slidebar.module.css";
import { SidebarData } from "./SidebarData";

export default function Slidebar() {
  return (
    <div className={SlideBarCSS.sidebar}>
      {SidebarData.map((val, key) => {
        return (
          <li
            key={key}
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            <div>{val.icon}</div>
            <div>{val.title}</div>
            <div>{val.link}</div>
          </li>
        );
      })}
    </div>
  );
}
