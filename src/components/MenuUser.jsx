import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { IoMdHome, IoMdLogOut, IoMdPerson } from "react-icons/io";
import { useAuth } from "../context/auth/AuthProvider";
import { DarkModeContext } from "../context/DarkModeContext";

function MenuUser() {
  const { logout, user } = useAuth(); // Combined useAuth destructuring
  const { isDarkMode } = useContext(DarkModeContext);

  const profileImage = user?.profile_attachment || "/studio/team/man.webp"; // Simplified user image logic

  return (
    <div>
      <div className="dropdown">
        <button
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ backgroundColor: "transparent" }}
        >
          <Image
            alt="User profile"
            src={profileImage}
            width={50}
            height={50}
            className="p-1 bg-white"
            style={{
              border: "1px solid #C9B171",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </button>
        <ul
          className="dropdown-menu text-end"
          style={{
            backgroundColor: isDarkMode ? "#2B2B2B" : "",
          }}
        >
          <li>
            <Link className="dropdown-item text_Dark" href="/">
              <IoMdHome className="fs-4 mx-2" />
              <span>الصفحة الرئيسية</span>
            </Link>
          </li>
          <hr
            className="m-1"
            style={{
              color: "#b9b8b8",
            }}
          />
          <li>
            <Link className="dropdown-item text_Dark" href="/profile">
              <IoMdPerson className="fs-4 mx-2" />
              <span>الملف الشخصي</span>
            </Link>
          </li>
          <hr
            className="m-1"
            style={{
              color: "#b9b8b8",
            }}
          />
          <li>
            <p className="dropdown-item text_Dark  m-0" onClick={logout}>
              <IoMdLogOut className="fs-4 mx-2" />
              <span>تسجيل الخروج</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuUser;
