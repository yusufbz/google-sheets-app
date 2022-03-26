import React from "react";

export default function StepSelectSpreedsheet() {
  return (
    <div className="step collected-data-type">
      <h2>2. Link your Spreedsheet</h2>
      <p>
        Make sure you are using a sheet created with an account linked to UpToSheets. It does not
        work if created with an account other than the linked account
      </p>
      <div className="options">
        <div className="mb-3">
          <label className="form-label">Advanced select</label>
          <select
            type="text"
            className="form-select tomselected ts-hidden-accessible"
            placeholder="Select a date"
            id="select-users"
            defaultValue=""
            tabIndex="-1"
          >
            <option defaultValue="2">Elon Musk</option>
            <option defaultValue="3">Paweł Kuna</option>
            <option defaultValue=""></option>
          </select>
          <div className="ts-wrapper form-select single">
            <div className="ts-control">
              <input
                tabIndex="0"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="select-users-ts-dropdown"
                id="select-users-ts-control"
                placeholder="Select a date"
                type="select-one"
                aria-activedescendant="select-users-opt-2"
              />
            </div>
            <div
              className="dropdown-menu single"
              style={{ display: "none", visibility: "visible" }}
            >
              <div
                role="listbox"
                tabIndex="-1"
                className="ts-dropdown-content"
                id="select-users-ts-dropdown"
              >
                <div
                  data-selectable=""
                  data-value="1"
                  className="dropdown-item"
                  role="option"
                  id="select-users-opt-1"
                >
                  Chuck Tesla
                </div>
                <div
                  data-selectable=""
                  data-value="2"
                  className="dropdown-item active"
                  role="option"
                  id="select-users-opt-2"
                  aria-selected="true"
                >
                  Elon Musk
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
