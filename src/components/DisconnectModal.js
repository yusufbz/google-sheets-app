import { IconAlertTriangle } from "@tabler/icons";
import React from "react";

export default function DisconnectModal({ setDisconnect }) {
  return (
    <div
      class="modal modal-blur fade show"
      id="modal-danger"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      style={{ display: "block" }}
    >
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setDisconnect(false)}
          ></button>
          <div class="modal-status bg-danger"></div>
          <div class="modal-body text-center py-4">
            <IconAlertTriangle className="mb-2 text-danger icon-lg" />
            <h3>Are you sure?</h3>
            <div class="text-muted">
              Do you really want to disconnect?
              <br />
              All the created automation will gonna be deleted and this action cannot be undone.
            </div>
          </div>
          <div class="modal-footer">
            <div class="w-100">
              <div class="row">
                <div class="col">
                  <button
                    class="btn w-100"
                    data-bs-dismiss="modal"
                    onClick={() => setDisconnect(false)}
                  >
                    Cancel
                  </button>
                </div>
                <div class="col">
                  <button
                    class="btn btn-danger w-100"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      // Do some shit here
                    }}
                  >
                    Yes, Disconnect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
