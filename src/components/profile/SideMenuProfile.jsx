import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Container from "../Container";
import {
  MdDashboard,
  MdLock,
  MdOutlineDashboard,
  MdOutlineLock,
  MdOutlineVerified,
  MdVerified,
} from "react-icons/md";
import { FaIdCard, FaRegAddressCard, FaRegNewspaper } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import Image from "next/image";
import { IoNewspaperOutline } from "react-icons/io5";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useAuth } from "../../context/auth/AuthProvider";

const titleVariant = {};

const hrVariant = {
  active: { width: "100%" },
  inactive: { width: 0 },
};

const ListItem = ({
  children,
  last = false,
  active,
  onClick,
  href,
  to,
  icon,
}) => {
  return (
    <motion.div
      variants={titleVariant}
      whileHover="active"
      initial={active ? "active" : "inactive"}
      exit={"inactive"}
      className=" w-100 "
    >
      <Link to={to} href={href} onClick={onClick}>
        <div className="my-1 w-100" style={{ cursor: "pointer" }}>
          <div
            className={`d-flex justify-content-start gap-2 border  text-dark  rounded-3 p-2 w-100 ${
              active ? "bg-primary text-white" : "bg-white"
            }   align-items-center `}
          >
            {icon}
            <p className=" fs-5 m-0">{children}</p>
          </div>
          {/* <Separator active={active} /> */}
        </div>
      </Link>
    </motion.div>
  );
};

const Separator = () => (
  <div className="position-relative">
    <hr className="separator bg-white-50" />
    <motion.div
      variants={hrVariant}
      className="separator-fill position-absolute bg-primary top-0"
      style={{ height: 2 }}
    />
  </div>
);

const paths = [
  {
    title: "نظرة عامة",
    href: "/profile",
    icon: <MdDashboard style={{ width: "22px", height: "22px" }} />,
    iconOutLine: (
      <MdOutlineDashboard style={{ width: "22px", height: "22px" }} />
    ),
  },
  {
    title: "البيانات الشخصية",
    href: "/profile/info",
    icon: <FaIdCard style={{ width: "22px", height: "22px" }} />,
    iconOutLine: <FaRegAddressCard style={{ width: "22px", height: "22px" }} />,
  },
  {
    title: "السيرة الذاتية",
    href: "/profile/cv",
    icon: <IoIosPaper style={{ width: "22px", height: "22px" }} />,
    iconOutLine: <FaRegNewspaper style={{ width: "22px", height: "22px" }} />,
  },
  {
    title: "توثيق البيانات",
    href: "/profile/complete",
    icon: <MdVerified style={{ width: "22px", height: "22px" }} />,
    iconOutLine: (
      <MdOutlineVerified style={{ width: "22px", height: "22px" }} />
    ),
  },
  {
    title: "تغيير كلمة المرور",
    href: "/profile/change-password",
    icon: <MdLock style={{ width: "22px", height: "22px" }} />, // أيقونة جديدة هنا
    iconOutLine: <MdOutlineLock style={{ width: "22px", height: "22px" }} />, // أيقونة جديدة هنا
  },
  {
    title: "المعلومات البنكية",
    href: "/profile/bank-information",
    icon: <MdLock style={{ width: "22px", height: "22px" }} />, // أيقونة جديدة هنا
    iconOutLine: <MdOutlineLock style={{ width: "22px", height: "22px" }} />, // أيقونة جديدة هنا
  },
];

const SideMenuProfile = () => {
  const { pathname } = useRouter();
  const { user } = useAuth();
  const [activeRouteIndex, setActiveRouteIndex] = useState(
    paths.indexOf(paths.find((path) => path.href == pathname))
  );
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container
      className={`col-lg-2 mx-0 menuProfile    ${isDarkMode ? "bg-dark" : ""}`}
      style={{
        backgroundColor: "#eee",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        // justifyContent: "center",
      }}
    >
      <div
        className="d-flex justify-content-center flex-column align-items-center "
        style={{ marginTop: "4rem" }}
      >
        <div>
          <Image
            alt=""
            src={user?.profile_attachment || "/studio/team/man.webp"}
            width={100}
            height={100}
            className="p-1 mb-4 bg-white"
            style={{
              border: "1px solid #C9B171",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <h6 className="mb-3">{`${user?.f_name_ar} ${user?.l_name_ar}`}</h6>
        {/* <p className="fw-bold">Front End Developer</p> */}
      </div>
      {paths.map((path, index) => (
        <ListItem
          key={index}
          active={activeRouteIndex == index}
          last={index == paths.length - 1}
          onClick={() => {
            setActiveRouteIndex(index);
          }}
          href={path.href}
          icon={activeRouteIndex == index ? path?.iconOutLine : path?.icon}
        >
          {path.title}
        </ListItem>
      ))}
    </Container>
  );
};
export default SideMenuProfile;
