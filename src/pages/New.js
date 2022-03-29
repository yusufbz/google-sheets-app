import React, { useReducer, useRef, useState } from "react";
import { IconNotes, IconPlus, IconUsers } from "@tabler/icons";
import { Link, useNavigate } from "react-router-dom";
import StepSelectTabSheet from "../components/StepSelectedTabSheet";
import StepMetaFields from "../components/StepMetaFields";

import Loading from "../components/Loading";

function collect(collectedData, action) {
  switch (action.type) {
    case "contacts":
      return {
        contacts: true,
        orders: false,
      };
    case "orders":
      return {
        contacts: false,
        orders: true,
      };
    default:
      return {
        contacts: false,
        orders: false,
      };
  }
}

export default function New() {
  const [activeStep, setActiveStep] = useState(4);
  const [collectedData, setCollectedData] = useReducer(collect, {
    contacts: true,
    orders: false,
  });
  const [addNewSpreadSheet, setAddNewSpreadSheet] = useState(false);
  const spreadsheetList = useRef(null);
  const navigate = useNavigate();

  // COMPONENTS
  function StepCollectedData() {
    return (
      <div className="step-content collected-data-type">
        <div className="content-header">
          <h2>1. Select collected data</h2>
          <p>
            Make sure you are using a sheet created with an account linked to Lightfunnels. It does
            not work if created with an account other than the linked account
          </p>
        </div>
        <div className="content">
          <label className="form-selectgroup-item">
            <input
              type="radio"
              name="icons"
              value="home"
              className="form-selectgroup-input"
              defaultChecked={collectedData.contacts}
              onClick={() => {
                setCollectedData({ type: "contacts" });
              }}
            />
            <div className="form-selectgroup-label">
              <IconUsers stroke="2" />
              <span>Collect Contacts</span>
            </div>
          </label>
          <label className="form-selectgroup-item">
            <input
              type="radio"
              name="icons"
              value="user"
              className="form-selectgroup-input"
              defaultChecked={collectedData.orders}
              onClick={() => {
                setCollectedData({ type: "orders" });
              }}
            />
            <div className="form-selectgroup-label">
              <IconNotes />
              <span>Collect Orders</span>
            </div>
          </label>
        </div>
        <div className="actions">
          <Link to="/" className="btn btn-outline">
            Cancel
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => {
              setActiveStep((prevStep) => prevStep + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  function StepSelectSpreadsheet() {
    return (
      <div className="step-content select-spreadsheet">
        <div className="content-header">
          <h2>2. Select the Spreadsheet</h2>
          <p>
            Make sure you are using a sheet created with an account linked to Lightfunnels. It does
            not work if created with an account other than the linked account
          </p>
        </div>
        <div className="content">
          <div className="select-sepreadsheet">
            <button
              className="btn btn-outline select-btn form-select"
              onClick={() => {
                const display = spreadsheetList.current.style.display;
                spreadsheetList.current.style.display = display === "block" ? "none" : "block";
              }}
            >
              Select…
            </button>
            <ul
              className="dropdown-menu dropdown-menu-demo"
              ref={spreadsheetList}
              onBlur={() => {
                console.log("blur");
                spreadsheetList.current.style.display = "none";
              }}
            >
              {/* Map here over the account spreadsheets list */}
              <li className="dropdown-item">Spreadsheet-01</li>
              <li className="dropdown-item">Test-99</li>
              <li className="dropdown-item">My Orders</li>
              <li className="dropdown-item">Spreadsheet-01</li>
              <li className="dropdown-item">Test-99</li>
              <li className="dropdown-item">My Orders</li>
              <li className="dropdown-item">Spreadsheet-01</li>
              <li className="dropdown-item">Test-99</li>
              <li className="dropdown-item">My Orders</li>
              <li className="dropdown-item">Spreadsheet-01</li>
              <li className="dropdown-item">Test-99</li>
              <li className="dropdown-item">My Orders</li>
              <li className="dropdown-item">
                <div className="spinner spinner-border"></div>
                <p>loading</p>
              </li>
            </ul>
          </div>
          <div className="hr-text">OR</div>
          <button className="btn btn-outline" onClick={() => setAddNewSpreadSheet(true)}>
            <IconPlus />
            Create new one
          </button>
        </div>
        <div className="actions">
          <button
            className="btn btn-outline"
            onClick={() => setActiveStep((prevStep) => prevStep - 1)}
          >
            Back
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setActiveStep((prevStep) => prevStep + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  function ModalAddNewSpreadsheet() {
    return (
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New report</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setAddNewSpreadSheet(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="example-text-input"
                placeholder="Your report name"
                autoFocus={true}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="example-text-input"
                placeholder="Your report name"
              />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-link link-secondary"
                data-bs-dismiss="modal"
                onClick={() => setAddNewSpreadSheet(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary ms-auto"
                data-bs-dismiss="modal"
                onClick={() => {
                  setActiveStep(4);
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function redirect() {
    setTimeout(() => navigate("/"), 3000);
  }

  return (
    <div className="new">
      <div className="container-full">
        <div className="steps steps-counter steps-lime">
          <span className={`step-item ${activeStep === 1 ? "active" : ""}`}></span>
          <span className={`step-item ${activeStep === 2 ? "active" : ""}`}></span>
          <span className={`step-item ${activeStep === 3 ? "active" : ""}`}></span>
          <span className={`step-item ${activeStep === 4 ? "active" : ""}`}></span>
        </div>
        {activeStep === 1 && <StepCollectedData />}
        {activeStep === 2 && <StepSelectSpreadsheet />}
        {activeStep === 3 && <StepSelectTabSheet setActiveStep={setActiveStep} />}
        {activeStep === 4 && <StepMetaFields setActiveStep={setActiveStep} />}
        {activeStep === 5 && (
          <>
            {redirect()}
            <Loading content="Hang on, your sheet are being loaded…" />
          </>
        )}
        {addNewSpreadSheet && <ModalAddNewSpreadsheet />}
      </div>
    </div>
  );
}
