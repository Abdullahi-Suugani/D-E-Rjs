import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      name: "Abdullahi",
      email: "abdullahi@gmail.com",
    },
    {
      id: 2,
      name: "Mohamed",
      email: "mohamed@gmail.com",
    },
    {
      id: 3,
      name: "Ahmed",
      email: "ahmed@gmail.com",
    },
  ];

  return (
    <div>
      <h1>User List</h1>

      <UserList users={users} />
    </div>
  );
}

export default App;
