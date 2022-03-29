import React from "react";

export default function StepSelectTabSheet({ setActiveStep }) {
  const sheets = [
    { id: "01", name: "sheet-01" },
    { id: "02", name: "sheet-02" },
    { id: "03", name: "sheet-03" },
  ];
  const SheetTab = ({ name }) => {
    return (
      <>
        <input type="radio" name="form-payment" value="visa" className="form-selectgroup-input" />
        <div className="form-selectgroup-label d-flex align-items-center p-3">
          <div className="me-3">
            <span className="form-selectgroup-check"></span>
          </div>
          <span>{name}</span>
        </div>
      </>
    );
  };
  return (
    <div className="step-content select-sheet-tab">
      <div className="content-header">
        <h2>3. Set your spreadsheet tab</h2>
        <p>
          Make sure you are using a sheet created with an account linked to Lightfunnels. It does
          not work if created with an account other than the linked account
        </p>
      </div>
      <div className="content">
        <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column sheet-tabs">
          {sheets.map((sheet) => (
            <label className="form-selectgroup-item flex-fill sheet-tab-item" key={sheet.id}>
              <SheetTab name={sheet.name} />
            </label>
          ))}
        </div>
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
