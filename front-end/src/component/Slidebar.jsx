import { SidebarData } from "./SidebarData";

export default function Slidebar() {

  const sidebar = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(224, 224, 224)',
    height: '100vh',
    width: '200px'
  }

  return (
    <div style={sidebar}>
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
