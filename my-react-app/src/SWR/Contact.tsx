import useSWR from "swr";
import AddContact from "./AddContact";
import { postURL } from "./api";
import { fetcher } from "./fetcher";

const Contact = () => {
  const { data, error } = useSWR(postURL, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (key === postURL) return;
      if (retryCount >= 10) return;

      setTimeout(() => revalidate({ retryCount }), 5000);
    },
  });

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
          {data.map((user: any) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddContact />
    </div>
  );
};

export default Contact;
