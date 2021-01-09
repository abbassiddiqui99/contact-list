import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getContact, updateContact } from "../../actions/Actions";

const EditContact = () => {
  const contact = useSelector((state) => state.contact.contact);
  const dispatch = useDispatch();
  let history = useHistory();
  let { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const updateChangeHandler = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(contact, { name, phone, email });
    // console.log(update_contact);
    dispatch(updateContact(update_contact));
    setName("");
    setPhone("");
    setEmail("");
    history.push("/");
  };

  return (
    <div class="card">
      <div class="card-header">Add a Contact</div>
      <div class="card-body">
        <form onSubmit={(e) => updateChangeHandler(e)}>
          <div class="mb-3">
            <label class="form-label">Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Phone:</label>
            <input
              type="text"
              class="form-control"
              placeholder="+92 XXX XXXXXXX"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email address:</label>
            <input
              type="email"
              class="form-control"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary create-contact">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
