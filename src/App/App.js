import { Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import ProductsListView from "../Views/ProductsListView";
import ProductView from "../Views/ProductView";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/InforceTask" exact>
          <ProductsListView />
        </Route>
        <Route path="/InforceTask/:productid">
          <ProductView />
        </Route>
        <Redirect to="/InforceTask" exact />
      </Switch>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
