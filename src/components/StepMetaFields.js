import React, { useRef, useState } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons";

export default function StepMetaFields({ setActiveStep }) {
  const tableScroll = useRef(null);
  const [loading, setLoading] = useState(true);
  const sheetData = [
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
    "order_total",
    "order_fulfillment_status",
    "order_financial_status",
    "order_billing_address_country",
    "order_billing_address_name",
    "order_billing_address_line2",
    "order_billing_address_city",
    "order_billing_address_line1",
    "order_billing_address_zip",
    "order_billing_address_state",
    "order_shipping_address_city",
    "order_shipping_address_line1",
    "order_shipping_address_zip",
    "order_shipping_address_name",
    "order_shipping_address_country",
    "order_shipping_address_line2",
    "order_shipping_address_state",
    "order_created_at",
  ];
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
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
            onClick={() => {
              // Some lines of code will goes here
            }}
          />
        </label>
      </>
    );
  };

  setTimeout(() => setLoading(false), 1000);

  const changeScroll = (isleft) => {
    let currentScroll = tableScroll.current.scrollLeft;
    if (currentScroll >= -300) {
      if (isleft) {
        tableScroll.current.scrollLeft = currentScroll + 300;
      } else {
        tableScroll.current.scrollLeft = tableScroll.current.scrollLeft - 300;
      }
    }
  };

  return (
    <div className="step-content fields-mapping">
      <div className="content-header">
        <h2>4. Mapping your Meta field</h2>
        <p>
          Make sure you are using a sheet created with an account linked to Lightfunnels. It does
          not work if created with an account other than the linked account
        </p>
      </div>
      <div className="content full-content">
        {loading ? (
          <div className="loading-content">
            <div className="spinner spinner-border"></div>
          </div>
        ) : (
          <>
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
                        <div className="select-sepreadsheet">
                          <button
                            className="btn btn-outline select-btn form-select"
                            onClick={() => {}}
                          >
                            {sheet}
                          </button>
                          <ul className="dropdown-menu dropdown-menu-demo">
                            {/* Map here over the account spreadsheets list */}
                            <li className="dropdown-item">Spreadsheet-01</li>
                            <li className="dropdown-item">Test-99</li>
                            <li className="dropdown-item">My Orders</li>
                          </ul>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {sheetData.map((e, index) => (
                      <td className="extra" key={index}></td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="fade-table f-left"></div>
            <div className="fade-table f-right"></div>
            <div className="fade-table f-bottom"></div>
            <div className="scroll-btn btn-left" onClick={() => changeScroll(false)}>
              <IconChevronLeft size="24" color="#fff" />
            </div>
            <div className="scroll-btn btn-right" onClick={() => changeScroll(true)}>
              <IconChevronRight size="24" color="#fff" />
            </div>
          </>
        )}
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
