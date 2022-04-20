import React, { useRef } from "react";
import { IconPlus } from "@tabler/icons";

export default function StepSelectSpreadsheet({ setAddNewSpreadSheet, setActiveStep }) {
  const spreadsheetList = useRef(null);

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
        <div className="select-sepreadsheet dropdown">
          <button
            className="btn btn-outline select-btn form-select dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            // onClick={() => {
            //   const display = spreadsheetList.current.style.display;
            //   spreadsheetList.current.style.display = display === "block" ? "none" : "block";
            // }}
          >
            Select…
          </button>
          <ul
            className="dropdown-menu w-full"
            aria-labelledby="dropdownMenuButton1"
            // ref={spreadsheetList}
            // onBlur={() => {
            //   console.log("blur");
            //   spreadsheetList.current.style.display = "none";
            // }}
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
