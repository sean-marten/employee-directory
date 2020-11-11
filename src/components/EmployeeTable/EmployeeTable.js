import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import TextField from "@material-ui/core/TextField";
import "./EmployeeTable.css";
import getUsers from "../../utils/Api";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  { field: "location", headerName: "Location", width: 150 },
  { field: "email", headerName: "E-mail", width: 300 },
  { field: "cell", headerName: "Cell Phone Number", width: 200 },
];



export default function EmployeeTable() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    getUsers().then((res) => {
      const rawData = res.data.results;
      const finalData = [];
      let ctr = 0;
      rawData.forEach((person) => {
        ctr++;
        const { name, email, cell, location } = person;
        finalData.push({
          id: ctr,
          firstName: name.first,
          lastName: name.last,
          location: location.city,
          email,
          cell,
        });
      });
      setData(finalData);
      setFilteredData(finalData);
    });
  }, []);

  useEffect(() => {
    if (!data){
      return
    }
    const filteredData = data.filter(person => {
      return person.firstName.toLowerCase().includes(filter);
    })
    setFilteredData(filteredData);
  }, [filter])

  const handleFilterChange = event => {
    const value = event.target.value;
    setFilter(value);
  }

  return data ? (
    <div>
      <div className="searchInput">
        <TextField onChange={handleFilterChange} placeholder="Search by First Name" label="Search by First Name" variant="outlined" />
      </div>
      <div className="container">
        <DataGrid rows={filteredData} columns={columns} />
      </div>atata
    </div>
  ) : (
    <div>Loading...</div>
  );
}
