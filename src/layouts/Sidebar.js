import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/user5.jpg";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Karyawan",
    href: "/karyawan",
    icon: "bi bi-people",
  },
  {
    title: "Jabatan",
    href: "/jabatan",
    icon: "bi bi-person",
  },
  {
    title: "Divisi",
    href: "/divisi",
    icon: "bi bi-building",
  },
  {
    title: "Absensi",
    href: "/absensi",
    icon: "bi bi-check2-square",
  },
  {
    title: "Izin",
    href: "/izin",
    icon: "bi bi-exclamation-triangle",
  },
  {
    title: "Lembur",
    href: "/lembur",
    icon: "bi bi-clock-history",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div>
        <div className="p-3 d-flex">
          <img src={user1} alt="user" width="50" className="rounded-circle" />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">
          Wahyu Rifia Rizki
        </div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={"d-inline-flex " + `${navi.icon}`}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
