import React from "react";
import LF_Logo from "../assets/images/lightfunnels-logo.svg";
import G_sheet_logo from "../assets/images/google-sheet-logo.svg";
import { IconPlus } from "@tabler/icons";

export default function Auth() {
  return (
    <div className="empty">
      <div className="empty-img">
        <img src={LF_Logo} width="68" height="68" alt="" />
        <img src={G_sheet_logo} width="68" height="68" alt="" />
      </div>
      <p className="empty-title">Connect your Google sheet account</p>
      <p className="empty-subtitle text-muted">
        Here will be a small description about the connection the account to Lightfunnels
      </p>
      <div className="empty-action">
        <button type="button" className="btn btn-primary">
          <IconPlus />
          Connect
        </button>
      </div>
    </div>
  );
}
