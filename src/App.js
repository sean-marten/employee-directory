import { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Navbar";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Toolbar from "@material-ui/core/Toolbar";

export default function App() {

  const [filter, setFilter] = useState();

  useEffect(() => {
    
  }, [])


  return (
    <div>
      <Navbar />
      <Toolbar />
      <EmployeeTable />
    </div>
  );
}
