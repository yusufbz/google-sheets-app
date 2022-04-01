import React from "react";
import IconStatusCircle from "../assets/icons/status-circle";
import { IconChevronLeft, IconChevronRight, IconTrash } from "@tabler/icons";

export default function AutomationsList({ automations }) {
  function Cell({ name, status, createdDate }) {
    return (
      <>
        <td>{name}</td>
        <td className="text-muted td_status">
          <span className="dropdown">
            <button
              className="btn dropdown-toggle align-text-top automation-status"
              data-bs-boundary="viewport"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <IconStatusCircle
                size={14}
                className="automation-status-icon"
                color={status ? "#4FBB87" : "#FF4949"}
              />
              {status ? "Active" : "Desactive"}
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <a href="/" className={`dropdown-item ${status && "active"}`}>
                <IconStatusCircle size={14} className="automation-status-icon" color="#4FBB87" />
                Active
              </a>
              <a href="/" className={`dropdown-item ${!status && "active"}`}>
                <IconStatusCircle size={14} className="automation-status-icon" color="#FF4949" />
                Desactive
              </a>
            </div>
          </span>
        </td>
        <td className="text-muted">{createdDate}</td>
        <td>
          <button type="button" className="btn btn-more">
            <IconTrash size={40} />
          </button>
        </td>
      </>
    );
  }
  return (
    <div className="table-responsive">
      <table className="table table-vcenter">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {automations.map((automation) => (
            <tr key={automation.id}>
              <Cell
                name={automation.name}
                createdDate={automation.createdDate}
                status={automation.status}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <div className="card-footer d-flex align-items-center">
        <p className="m-0 text-muted">
          Showing you <span>{automations.length}</span> of <span>16</span>
        </p>
        <ul className="pagination m-0 ms-auto">
          <li className="page-item disabled">
            <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">
              <IconChevronLeft />
              Prev
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="/">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              Next
              <IconChevronRight />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
