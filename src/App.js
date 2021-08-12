import { useState } from "react";
import Main from "./pages/main/Main";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/*  <Home />
          </Route> */}
          <Route exact path="/main" component={Main} />
          {/* <Main />
          </Route> */}
        </Switch>
      </BrowserRouter>
      {/* <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
    </div>
  );
};

export default App;
