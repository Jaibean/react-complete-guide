import React, { useState } from "react";

import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";

function App() {
  const [userList, setUserList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString(), },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={[userList]} />
    </div>
  );
}

export default App;
