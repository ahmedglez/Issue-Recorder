/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import { Header } from "./components/Header";
import { NewIssueComponent } from "./components/NewIssueComponent";
function App() {
  return (
    <div className="App">
      <Header />
      <NewIssueComponent />
    </div>
  );
}

export default App;
