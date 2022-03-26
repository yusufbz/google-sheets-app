import { IconLogout } from "@tabler/icons";
import React from "react";
import G_sheet_full_logo from "../assets/images/g-sheets-full-logo.svg";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img src={G_sheet_full_logo} alt="" className="logo" />
        <a href="/" className="btn btn-ghost-danger">
          <IconLogout />
          Disconnect
        </a>
      </div>
    </div>
  );
}
