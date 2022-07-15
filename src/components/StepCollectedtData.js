import React from "react";
import { IconNotes, IconUsers } from "@tabler/icons";
import { Link } from "react-router-dom";
import TagInput from "./tagInput";

export default function StepCollectedData({ collectedData, setCollectedData, setActiveStep }) {
  const [filter, setFilter] = React.useState(false)

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
      </div>
      {collectedData.contacts && (
        <div className="filter-by-tags w-full">
          <hr />
          <label class="form-check cursor-pointer">
            <input class="form-check-input" type="checkbox" onChange={() => setFilter(!filter)} />
            <span class="form-check-label">Filter contacts by tags</span>
          </label>
          {
            filter && (
              <TagInput />
            )
          }
        </div>
      )
      }
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
