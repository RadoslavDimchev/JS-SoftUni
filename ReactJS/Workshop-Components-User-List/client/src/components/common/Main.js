import { Pagination } from "../pagination/Pagination";
import { Search } from "../search/Search";
import { UserList } from "../user-list/UserList";

export const Main = () => {
  return (
    <main className="main">
      <section className="card users-container">
        <Search />
        <UserList />
        <Pagination />
      </section>
    </main>
  );
};