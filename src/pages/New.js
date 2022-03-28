import React, { useReducer, useRef, useState } from "react";
import { IconNotes, IconPlus, IconUsers } from "@tabler/icons";
import { Link } from "react-router-dom";

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
  const [activeStep, setActiveStep] = useState(1);
  const [collectedData, setCollectedData] = useReducer(collect, {
    contacts: true,
    orders: false,
  });
  const [addNewSpreadSheet, setAddNewSpreadSheet] = useState(false);
  const spreadsheetList = useRef(null);

  function StepCollectedData() {
    return (
      <div className="step-content collected-data-type">
        <h2>1. Select collected data</h2>
        <p>
          Make sure you are using a sheet created with an account linked to Lightfunnels. It does
          not work if created with an account other than the linked account
        </p>
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
    const spreadsheetListItem = () => {
      return <div className="dropdown-item">Spreadsheet-01</div>;
    };
    return (
      <div className="step-content select-spreadsheet">
        <h2>2. Select the Spreadsheet</h2>
        <p>
          Make sure you are using a sheet created with an account linked to Lightfunnels. It does
          not work if created with an account other than the linked account
        </p>
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
              <li className="dropdown-item">Spreadsheet-01</li>
              <li className="dropdown-item">Test-99</li>
              <li className="dropdown-item active">My Orders</li>
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

  function StepSelectTabSheet() {
    return (
      <div className="step-content collected-data-type">
        <h2>3. Set your spreadsheet tab</h2>
        <p>
          Make sure you are using a sheet created with an account linked to Lightfunnels. It does
          not work if created with an account other than the linked account
        </p>
        <div className="content"></div>
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

  function StepMetaFields() {
    return (
      <div className="step-content collected-data-type">
        <h2>4. Mapping your Meta field</h2>
        <p>
          Make sure you are using a sheet created with an account linked to Lightfunnels. It does
          not work if created with an account other than the linked account
        </p>
        <div className="content"></div>
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
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New report</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setAddNewSpreadSheet(false)}
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                name="example-text-input"
                placeholder="Your report name"
                autoFocus="true"
              />
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-link link-secondary"
                data-bs-dismiss="modal"
                onClick={() => setAddNewSpreadSheet(false)}
              >
                Cancel
              </button>
              <button class="btn btn-primary ms-auto" data-bs-dismiss="modal">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="new">
      <div className="container">
        <div class="steps steps-counter steps-lime">
          <span class={`step-item ${activeStep === 1 ? "active" : ""}`}></span>
          <span class={`step-item ${activeStep === 2 ? "active" : ""}`}></span>
          <span class={`step-item ${activeStep === 3 ? "active" : ""}`}></span>
          <span class={`step-item ${activeStep === 4 ? "active" : ""}`}></span>
        </div>
        {activeStep === 1 && <StepCollectedData />}
        {activeStep === 2 && <StepSelectSpreadsheet />}
        {activeStep === 3 && <StepSelectTabSheet />}
        {activeStep === 4 && <StepMetaFields />}
        {addNewSpreadSheet && <ModalAddNewSpreadsheet />}
      </div>
    </div>
  );
}
