import Contacts from "./component/contacts/Contacts";
import Navbar from "./component/navbar/Navbar";
import "./styles/App.scss";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Contacts />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
