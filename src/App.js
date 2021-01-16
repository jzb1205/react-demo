import routes from "./router/index";
import { renderRoutes } from "react-router-config";
import { HashRouter, NavLink } from "react-router-dom";

import "./App.less";

function App() {
  return (
    <HashRouter>
      <NavLink to="/active" activeClassName="selected">
        <span> 活动 </span>
      </NavLink>
      <NavLink to="/dingyue" activeClassName="selected">
        <span> 订阅 </span>
      </NavLink>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
