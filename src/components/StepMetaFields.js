import React, { useRef, useState } from "react";
import { IconChevronRight, IconChevronLeft, IconTrash, IconPlus } from "@tabler/icons";

export default function StepMetaFields({ setActiveStep }) {
  const tableScroll = useRef(null);
  const fieldSelect = useRef();
  const [loading, setLoading] = useState(true);
  const arr = [1, 2, 3];
  const [sheetData, setSheetData] = useState([
    "id",
    "price",
    "title",
    "sku",
    "financial_status",
    "type",
    "order_id",
    "order_phone",
    "order_name",
    "order_email",
    "order_sub_total",
    // "order_total",
    // "order_fulfillment_status",
    // "order_financial_status",
    // "order_billing_address_country",
    // "order_billing_address_name",
    // "order_billing_address_line2",
    // "order_billing_address_city",
    // "order_billing_address_line1",
    // "order_billing_address_zip",
    // "order_billing_address_state",
    // "order_shipping_address_city",
    // "order_shipping_address_line1",
    // "order_shipping_address_zip",
    // "order_shipping_address_name",
    // "order_shipping_address_country",
    // "order_shipping_address_line2",
    // "order_shipping_address_state",
    // "order_created_at",
  ]);
  const Thead = ({ fieldName }) => {
    return (
      <>
        <input
          className="form-control"
          defaultValue={fieldName}
          onBlur={() => {
            // Fire some lines of code after user finishe the inout value change
          }}
        />
        <label className="form-check form-switch">
          {/* <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
            onClick={() => {
              // Some lines of code will goes here
            }}
          /> */}
          <button
            type="button"
            className="btn btn-more"
            onClick={() => {
              // Trigger the delete column
            }}
          >
            <IconTrash size="20px" />
          </button>
        </label>
      </>
    );
  };

  const FieldSelect = ({ sheet }) => {
    const [isCustom, setIsCustom] = useState(false);
    const customFieldInput = useRef("");
    const [isListShow, setIsListShow] = useState(false);
    const [customField, setCustomField] = useState("");

    return (
      <div className="field-select dropdown">
        <div
          className="btn btn-outline dropdown-toggle select-btn form-select"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <input
            ref={customFieldInput}
            value={isCustom ? customField : sheet}
            disabled={isCustom ? false : true}
            style={{ pointerEvents: `${isCustom ? "auto" : "none"}` }}
            placeholder="custom field"
            onChange={(e) => setCustomField(e.target.value)}
          />
        </div>
        <ul
          className="dropdown-menu w-full"
          aria-labelledby="dropdownMenuButton1"
          ref={fieldSelect}
        >
          {/* Map here over the account spreadsheets list */}
          <li
            className="dropdown-item"
            onClick={() => {
              setIsCustom(true);
              setIsListShow(false);
              setTimeout(() => customFieldInput.current.focus(), 1);
            }}
          >
            Custom
          </li>
          <li
            className="dropdown-item"
            onClick={() => {
              setIsCustom(false);
              setIsListShow(false);
            }}
          >
            Spreadsheet-01
          </li>
          <li
            className="dropdown-item"
            onClick={() => {
              setIsCustom(false);
              setIsListShow(false);
            }}
          >
            Test-99
          </li>
          <li
            className="dropdown-item"
            onClick={() => {
              setIsCustom(false);
              setIsListShow(false);
            }}
          >
            My Orders
          </li>
          <li
            className="dropdown-item"
            onClick={() => {
              setIsCustom(false);
              setIsListShow(false);
            }}
          >
            Spreadsheet-01
          </li>
          <li
            className="dropdown-item"
            onClick={() => {
              setIsCustom(false);
              setIsListShow(false);
            }}
          >
            Test-99
          </li>
          <li
            className="dropdown-item"
            onClick={() => {
              setIsCustom(false);
              setIsListShow(false);
            }}
          >
            My Orders
          </li>
          <li
            className="dropdown-item"
            onClick={() => {
              setIsCustom(false);
              setIsListShow(false);
            }}
          >
            Spreadsheet-01
          </li>
          <li className="dropdown-item" onClick={() => setIsCustom(false)}>
            Test-99
          </li>
          <li className="dropdown-item" onClick={() => setIsCustom(false)}>
            My Orders
          </li>
        </ul>
      </div>
    );
  };

  setTimeout(() => setLoading(false), 1000);

  const changeScroll = (isleft, end) => {
    let currentScroll = tableScroll.current.scrollLeft;
    if (currentScroll >= -300) {
      if (isleft) {
        tableScroll.current.scrollLeft = currentScroll + (end ? 900000 : 300);
      } else {
        tableScroll.current.scrollLeft = tableScroll.current.scrollLeft - 300;
      }
    }
  };

  function addNewColumn() {
    setSheetData([...sheetData, "New column"]);
    setTimeout(() => changeScroll(true, 9000000), 1);
  }

  return (
    <div className="step-content fields-mapping">
      <div className="content-header">
        <h2>4. Mapping your Meta field</h2>
        <p>
          Make sure you are using a sheet created with an account linked to Lightfunnels. It does
          not work if created with an account other than the linked account
        </p>

        <button className="btn btn-ghost-primary" onClick={() => addNewColumn()}>
          <IconPlus />
          Add new collumn
        </button>
      </div>
      <div className="content full-content d-block">
        {loading ? (
          <div className="loading-content">
            <div className="spinner spinner-border"></div>
          </div>
        ) : (
          <div className="d-flex flex-column">
            <div className="list-fields" ref={tableScroll}>
              <table className="table table-responsive">
                <thead>
                  <tr>
                    {sheetData.map((sheet, index) => (
                      <th key={index}>
                        <div className="field-item-header">
                          <Thead fieldName={sheet} />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {sheetData.map((sheet, index) => (
                      <td key={index}>
                        <FieldSelect sheet={sheet} />
                      </td>
                    ))}
                  </tr>
                  {arr.map((e, index) => {
                    return (
                      <tr key={index}>
                        {sheetData.map((index) => {
                          return (
                            <td className="extra" key={index}>
                              {arr.length === e && (
                                <div className="fade-table f-bottom" key={index}></div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button className="" onClick={() => addNewColumn()}>
                Add new col
              </button>
            </div>
            <div className="fade-table f-left"></div>
            <div className="fade-table f-right"></div>
            {/* <div className="fade-table f-bottom"></div> */}
            <div className="scroll-btn btn-left" onClick={() => changeScroll(false)}>
              <IconChevronLeft size="24" color="#fff" />
            </div>
            <div className="scroll-btn btn-right" onClick={() => changeScroll(true)}>
              <IconChevronRight size="24" color="#fff" />
            </div>
            <div className="alert alert-primary group-items-label align-self-center" role="alert">
              <label className="form-check">
                <input className="form-check-input" type="checkbox" />
                <span className="form-check-label">
                  Group orders by the same ID's to one group item
                </span>
              </label>
            </div>
          </div>
        )}
      </div>
      <div className="actions actions2 pt-3">
        <button
          className="btn btn-outline"
          onClick={() => setActiveStep((prevStep) => prevStep - 1)}
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setActiveStep(5);
            // Trigger the automation creation
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}
