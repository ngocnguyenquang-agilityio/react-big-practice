import useSWR from "swr";

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const Contact = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <p>An error occurred</p>;
  if (!data) return <p>Loading</p>;
  return (
    <div className="contact">
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
        </thead>
        <tbody>
          {data.map(({ id, name, email, company }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
