import HomeIcon from "mui/icons-material/Home";
import NotificationsIcon from "mui/icons-material/Notifications";
import PlaylistPlayIcon from "mui/icons-material/PlaylistPlay";
import MenuBookIcon from "mui/icons-material/MenuBook";
import TravelExploreIcon from "mui/icons-material/TravelExplore";
import ExitToAppIcon from "mui/icons-material/ExitToApp";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Notification",
    icon: <NotificationsIcon />,
    link: "/notification",
  },
  {
    title: "Create Quiz",
    icon: <PlaylistPlayIcon />,
    link: "/createquiz",
  },
  {
    title: "Subjects",
    icon: <MenuBookIcon />,
    link: "/home",
  },
  {
    title: "Explore",
    icon: <TravelExploreIcon />,
    link: "/explore",
  },
  {
    title: "Sign Out",
    icon: <ExitToAppIcon />,
    link: "/",
  },
];
