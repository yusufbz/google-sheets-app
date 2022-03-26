import React, { useReducer, useState } from "react";
import { IconTruck, IconTruckDelivery, IconUsers } from "@tabler/icons";

function collect(state, action) {
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
  const [collectedData, setCollectedData] = useReducer(collect, {
    contacts: false,
    orders: false,
  });
  console.log(collectedData);
  return (
    <div className="new">
      <div className="container">
        <h2>1. Select collected data</h2>
        <p>
          Make sure you are using a sheet created with an account linked to Lightfunnels. It does
          not work if created with an account other than the linked account
        </p>
        <div class="mb-3">
          <label class="form-label">Selectgroup with icons and text</label>
          <div class="form-selectgroup">
            <label class="form-selectgroup-item">
              <input
                type="radio"
                name="icons"
                value="home"
                class="form-selectgroup-input"
                checked={collectedData.contacts}
                onClick={() => {
                  setCollectedData({ type: "contacts" });
                }}
              />
              <span class="form-selectgroup-label">
                <IconUsers />
                Collect contacts
              </span>
            </label>
            <label class="form-selectgroup-item">
              <input
                type="radio"
                name="icons"
                value="user"
                class="form-selectgroup-input"
                checked={collectedData.orders}
                onClick={() => {
                  setCollectedData({ type: "orders" });
                }}
              />
              <span class="form-selectgroup-label">
                <IconTruck />
                User
              </span>
            </label>
          </div>
        </div>
        <div className="Actions">
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
