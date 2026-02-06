import Router from "./app/components/router/Router";
import { Provider } from "react-redux";
import store from "./app/components/redux/store/store";
import "./style/global.css";
import "./style/theme.css"

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
