import useFetch from "react-fetch-hook";
export const Users = () => {
  const { isLoading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return isLoading ? (
    <div>is Loading...</div>
  ) : (
    <ul>
      {data.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};
