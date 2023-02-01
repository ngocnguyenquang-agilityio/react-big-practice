import React from "react";
import { useState } from "react";
import { postURL } from "./api";

const AddContact = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setId(e.target.value);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { id, name, email, address };
    fetch(postURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        res.json()
        alert('Add Successfully')
      })
      .then((data) => console.log(data));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID</label>
        <input type="text" value={id} onChange={handleChangeId} />
      </div>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={handleChangeName} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={email} onChange={handleChangeEmail} />
      </div>
      <div>
        <label>Address</label>
        <input type="text" value={address} onChange={handleChangeAddress} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddContact;
