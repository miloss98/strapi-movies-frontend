import { useState } from "react";
import "./../styles/components/modal.css";

const ConfirmationModal = ({ children, description }) => {
  const [open, setOpen] = useState(false);
  const [callback, setCallback] = useState(null);

  const show = (callback) => (event) => {
    event.preventDefault();
    setOpen(true);
    event = {
      ...event,
      target: { ...event.target, value: event.target.value },
    };
    setCallback({
      run: () => callback(event),
    });
  };

  const hide = () => {
    setCallback(null);
    setOpen(false);
  };

  const confirm = () => {
    console.log("confirm");
    callback.run();
    hide();
  };

  return (
    <>
      {children(show)}
      {open && (
        <section className="modal-container">
          <p className="modal-question">{description}</p>
          <button className="modal-btns" onClick={hide}>
            Cancel
          </button>
          <button className="modal-btns" onClick={confirm}>
            Logout
          </button>
        </section>
      )}
    </>
  );
};
export default ConfirmationModal;
