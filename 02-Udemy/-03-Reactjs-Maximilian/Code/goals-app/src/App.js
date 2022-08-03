import { useState } from "react";
import AddUser from "./Componants/Users/AddUser";
import UsersList from "./Componants/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHanler = function (username, userAge) {
    setUsersList(prevUserList => [
      ...prevUserList,
      { name: username, age: userAge, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHanler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
