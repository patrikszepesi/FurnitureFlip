import { useState, useEffect } from "react";
import Link from "next/link";

const InstructorNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills">
      <Link href="/instructor">
        <a className={`nav-link ${current === "/instructor" && "active"}`}>
          Menü
        </a>
      </Link>
      <Link href="/instructor/course/create">
        <a
          className={`nav-link ${
            current === "/instructor/course/create" && "active"
          }`}
        >
          Kurzus létrehozása
        </a>
      </Link>

      <Link href="/instructor/revenue">
        <a
          className={`nav-link ${
            current === "/instructor/revenue" && "active"
          }`}
        >
          Bevétel
        </a>
      </Link>
    </div>
  );
};

export default InstructorNav;
