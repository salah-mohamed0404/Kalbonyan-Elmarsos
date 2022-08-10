import { Route } from "react-router-dom";

const Welcome = function () {
  return (
    <section>
      <h1>The welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
