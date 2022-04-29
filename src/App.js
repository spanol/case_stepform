import "./App.css";
import Router from "./router";
import ContextProvider from "./context/index";
// import Form from './components/Form';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router />
      </div>
    </ContextProvider>
  );
}

export default App;
