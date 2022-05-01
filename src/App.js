import "./App.css";
import Router from "./router";
import ContextProvider from "./context/index";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// import Form from './components/Form';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router />
        <ToastContainer
          position="top-right"
          theme="dark"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </div>
    </ContextProvider>
  );
}

export default App;
