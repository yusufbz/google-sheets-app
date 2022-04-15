import { IconLogout, IconPlus } from "@tabler/icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="page-title">
            Automations - <span>Yusuf's</span>
            <span className="divider-vertical"></span>
            <button className="btn btn-ghost-danger">
              <IconLogout />
              Disconnect
            </button>
          </h1>
        </div>
        <div className="col-auto ms-auto">
          <Link to="/new" className="btn btn-primary d-none d-sm-inline-block">
            <IconPlus />
            Create new report
          </Link>
        </div>
      </div>
    </div>
  );
}
