import { UserList } from "../user-list/UserList";

export const Main = () => {
  return (
    <main className="main">
      <section className="card users-container">
        <UserList />
      </section>
    </main>
  );
};