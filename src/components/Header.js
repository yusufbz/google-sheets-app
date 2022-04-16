import { IconLogout, IconPlus } from "@tabler/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import DisconnectModal from "./DisconnectModal";

export default function Header() {
  const [disconnect, setDisconnect] = useState(false);

  const account = {
    name: "yusuf's",
    avatarImsage:
      "https://scontent.frak2-2.fna.fbcdn.net/v/t39.30808-6/260257050_640113407007401_6947324348828438352_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEPTfWK-nal4eCyP3AnRYOCBf6rugUiRKkF_qu6BSJEqdLFUwFLJO-9G1TLPRrrEKDh0Ixo9DmTjtlQRO7bYi9N&_nc_ohc=7ys-fwX7GakAX_1dzPU&_nc_ht=scontent.frak2-2.fna&oh=00_AT80E64HL9l56YRAndacuJyd6VKluH9OX6PNcj-HfwpZZg&oe=624592DE",
  };
  return (
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="page-title">
            Automations - <span>Yusuf's</span>
          </h1>
        </div>
        <div className="actions col-auto ms-auto">
          <Link to="/new" className="btn btn-primary d-none d-sm-inline-block">
            <IconPlus />
            Create new report
          </Link>
          <span className="divider-vertical"></span>
          <div className="dropdown">
            <button
              className="btn btn-outline dropdown-toggle connected-acc"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {account.avatarImage ? (
                <span
                  className="avatar rounded-circle"
                  style={{ backgroundImage: `url("${account.avatarImage}")` }}
                ></span>
              ) : (
                <span className="avatar rounded-circle">{account.name.charAt(0)}</span>
              )}
              <span className="acc-name">{account.name}</span>
              {/* <IconLogout /> */}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
              <li>
                <button className="btn btn-ghost-danger" onClick={() => setDisconnect(true)}>
                  <IconLogout />
                  Disconnect
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {disconnect && <DisconnectModal setDisconnect={setDisconnect} />}
    </div>
  );
}
