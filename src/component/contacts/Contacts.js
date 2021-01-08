import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleContact from "./SingleContact";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  //   console.log(contacts);
  return (
    <div>
      <table className="table shadow table-striped">
        <thead className="bg-danger text-white">
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return <SingleContact contact={contact} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
