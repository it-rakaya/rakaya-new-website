import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdHome, IoMdLogOut, IoMdPerson } from "react-icons/io";
import { useAuth } from "../context/auth/AuthProvider";

function MenuUser() {
  const { logout } = useAuth();
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
              src={"/studio/team/man.webp"}
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
        <ul className="dropdown-menu text-end">
          <li className="">
            <Link className="dropdown-item" href="/">
              <span className="mx-2">
                <IoMdHome className="fs-4" />
              </span>
              <span>الصفحة الرئيسية</span>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/profile">
              <span className="mx-2">
                <IoMdPerson className="fs-4" />
              </span>
              <span>الملف الشخصي</span>
            </Link>
          </li>
          <li>
            <p className="dropdown-item" onClick={() => logout()}>
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
