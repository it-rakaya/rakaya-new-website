import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { IoMdHome, IoMdLogOut, IoMdPerson } from "react-icons/io";
import { useAuth } from "../context/auth/AuthProvider";
import { DarkModeContext } from "../context/DarkModeContext";

function MenuUser() {
  const { logout } = useAuth();
  const { user } = useAuth();
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div class="dropdown">
        <button
          className=" dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <div>
            <Image
              alt=""
              src={user?.profile_attachment || "/studio/team/man.webp"}
              width={50}
              height={50}
              className="p-1 bg-white"
              style={{
                border: "1px solid #C9B171",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
        </button>
        <ul
          className="dropdown-menu text-end"
          style={{
            backgroundColor: isDarkMode ? "#2B2B2B" : "",
          }}
        >
          <li className="">
            <Link className="dropdown-item text_Dark" href="/">
              <span className="mx-2">
                <IoMdHome className="fs-4" />
              </span>
              <span>الصفحة الرئيسية</span>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text_Dark" href="/profile">
              <span className="mx-2">
                <IoMdPerson className="fs-4" />
              </span>
              <span>الملف الشخصي</span>
            </Link>
          </li>
          <li>
            <p className="dropdown-item text_Dark" onClick={() => logout()}>
              <span className="mx-2">
                <IoMdLogOut className="fs-4" />
              </span>
              <span>تسجيل الخروج</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuUser;
