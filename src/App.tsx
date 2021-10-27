import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  // When click the button, the cutom hook, which is getUsers(), will be executed
  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>Retrieve Data</button>
      <br />
      {/* 
      condition ? true : false

      In this case, the code is like this if using "if" statement;
      if(error === true){
         Failed to retrieve the data
      }else{
        if(loading === true){
          Loading...
        }
        else{
          Display Users
        }
      }
      */}
      {error ? (
        <p style={{ color: "red" }}>Failed to retrieve the data</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
