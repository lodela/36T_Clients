import { useEffect } from "react";
import { useState } from "react";
import useFetch from "react-fetch-hook";
const url = "https://jsonplaceholder.typicode.com/users";

export const Users = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {/* {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))} */}
    </div>
  );
};
