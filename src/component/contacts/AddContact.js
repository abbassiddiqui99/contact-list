import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
import { addContact } from "../../actions/Actions";

const AddContact = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    // console.log(name, phone, email);
    const newContact = {
      id: shortid.generate(),
      name,
      phone,
      email,
    };
    dispatch(addContact(newContact));
    setEmail("");
    setName("");
    setPhone("");
    history.push("/");
  };

  return (
    <div class="card">
      <div class="card-header">Add a Contact</div>
      <div class="card-body">
        <form onSubmit={(e) => createContact(e)}>
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
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
