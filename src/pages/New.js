import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import StepSelectTabSheet from "../components/StepSelectedTabSheet";
import StepMetaFields from "../components/StepMetaFields";
import StepCollectedData from "../components/StepCollectedtData";
import StepSelectSpreadsheet from "../components/StepSelectSpreadsheet";

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
  const navigate = useNavigate();

  // COMPONENTS
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
        {activeStep === 1 && (
          <StepCollectedData
            collectedData={collectedData}
            setCollectedData={setCollectedData}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 2 && (
          <StepSelectSpreadsheet
            setActiveStep={setActiveStep}
            setAddNewSpreadSheet={setAddNewSpreadSheet}
          />
        )}
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
