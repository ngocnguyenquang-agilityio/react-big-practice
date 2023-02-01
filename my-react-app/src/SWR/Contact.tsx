import React from "react";
import useSWR from "swr";
import AddContact from "./AddContact";
import { postURL } from "./api";
import { fetcher } from "./fetcher";

const Contact = () => {
  const { data, error } = useSWR(postURL, fetcher);

  if (error) return <p>An error occurred</p>;
  if (!data) return <p>Loading</p>;
  return (
    <div className="contact">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, email, address }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddContact />
    </div>
  );
};

export default Contact;
