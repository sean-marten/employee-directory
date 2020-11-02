import Navbar from "./components/NavBar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Toolbar from "@material-ui/core/Toolbar";

function App() {
  return (
    <div>
      <Navbar />
      <Toolbar />
      <SearchInput />
      <EmployeeTable />
    </div>
  );
}

export default App;
