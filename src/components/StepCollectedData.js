import React, { useReducer } from "react";
import { IconNotes, IconUsers } from "@tabler/icons";

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

export default function StepCollectedData() {
  const [collectedData, setCollectedData] = useReducer(collect, {
    contacts: false,
    orders: true,
  });
  return (
    <div className="step collected-data-type">
      <h2>1. Select collected data</h2>
      <p>
        Make sure you are using a sheet created with an account linked to Lightfunnels. It does not
        work if created with an account other than the linked account
      </p>
      <div className="data-type-options">
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
    </div>
  );
}
