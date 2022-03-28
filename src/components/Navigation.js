import { IconLogout } from "@tabler/icons";
import React from "react";
import G_sheet_full_logo from "../assets/images/g-sheets-full-logo.svg";

export default function Navigation() {
  const account = {
    name: "yusuf's",
    avatarImage:
      "https://scontent.frak2-2.fna.fbcdn.net/v/t39.30808-6/260257050_640113407007401_6947324348828438352_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEPTfWK-nal4eCyP3AnRYOCBf6rugUiRKkF_qu6BSJEqdLFUwFLJO-9G1TLPRrrEKDh0Ixo9DmTjtlQRO7bYi9N&_nc_ohc=7ys-fwX7GakAX_1dzPU&_nc_ht=scontent.frak2-2.fna&oh=00_AT80E64HL9l56YRAndacuJyd6VKluH9OX6PNcj-HfwpZZg&oe=624592DE",
  };
  return (
    <div className="navigation">
      <div className="container">
        <a href="/">
          <img src={G_sheet_full_logo} alt="" className="logo" />
        </a>

        <div>
          <button className="btn btn-ghost-danger">
            <IconLogout />
            Disconnect
          </button>
          <div>
            {account.avatarImage ? (
              <span
                class="avatar rounded-circle"
                style={{ backgroundImage: `url("${account.avatarImage}")` }}
              ></span>
            ) : (
              <span class="avatar rounded-circle">account.name.charAt(1)</span>
            )}

            {account.name}
          </div>
        </div>
      </div>
    </div>
  );
}
