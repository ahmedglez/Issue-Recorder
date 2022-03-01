/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import { Header } from "./components/Header";
import { NewIssueComponent } from "./components/NewIssueComponent";

function App() {
  return (
    <div className="App">
      <div>
        IssueC
        <Header />
        <NewIssueComponent />
      </div>
    </div>
  );
}

export default App;
