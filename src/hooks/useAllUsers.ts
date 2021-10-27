import axios from "axios";
import { useState } from "react";
import { UserProfile } from "../types/userProfile";
import { User } from "../types/api/user";

// This custom hook is to retrieve all users
export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    // when click the button, then setLoading
    setLoading(true);
    // initialization
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        // if error === true...
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // return all functions and useState
  return { getUsers, userProfiles, loading, error };
};
