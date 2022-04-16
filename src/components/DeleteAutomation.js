import React from "react";

export default function DeleteAutomation({ setIsDelete }) {
  return (
    <div
      class="modal modal-blur fade show"
      id="modal-simple"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      style={{ display: "block" }}
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete automation</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsDelete(false)}
            ></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this automation? This action cannot be undone.
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn me-auto"
              data-bs-dismiss="modal"
              onClick={() => setIsDelete(false)}
            >
              Cancel
            </button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
