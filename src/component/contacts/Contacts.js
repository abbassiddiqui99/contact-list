import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllContact, deleteAll, selectedAll } from "../../actions/Actions";
import SingleContact from "./SingleContact";

const Contacts = () => {
  const contacts = useSelector((state) => state.contact.contacts);
  const selectContact = useSelector((state) => state.contact.selectedContacts);
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (selectAll) {
      dispatch(selectedAll(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);

  const deleteAllHandler = () => {
    dispatch(deleteAll());
    setSelectAll(false);
  };

  return (
    <div>
      {selectContact.length > 1 ? (
        <button className="btn btn-danger mb-3" onClick={deleteAllHandler}>
          Delete All
        </button>
      ) : null}
      <table className="table shadow table-striped">
        <thead className="bg-danger text-white">
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="selectAll"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => {
                    setSelectAll(!selectAll);
                  }}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <SingleContact
                contact={contact}
                key={contact.id}
                selectAll={selectAll}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
