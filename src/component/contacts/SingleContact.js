import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const SingleContact = ({ contact }) => {
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={contact.name} size="45" round={true} />
        {contact.name}
      </td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td className="action">
        <Link to={`/contacts/edit/${contact.id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <Link to="#">
          <span className="material-icons text-danger">remove_circle</span>
        </Link>
      </td>
    </tr>
  );
};

export default SingleContact;
