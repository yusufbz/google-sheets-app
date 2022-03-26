import React, { useReducer } from "react";
import StepCollectedData from "../components/StepCollectedData";
import StepSelectSpreedsheet from "../components/StepSelectSpreedsheet";

function collect(collectedData, action) {
  switch (action.type) {
    case "collected_data":
      return {};
    case "selectedSpreedSheet":
      return;
    default:
      return;
  }
}

export default function New() {
  // const [state, dispatch] = useReducer(collect, {});
  return (
    <div className="new">
      <div className="container">
        <StepCollectedData />
        {/* <StepSelectSpreedsheet /> */}
        <div className="actions">
          <a href="/" className="btn btn-outline">
            Cancel
          </a>
          <a href="/" className="btn btn-primary">
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
