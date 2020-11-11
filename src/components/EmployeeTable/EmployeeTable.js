import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
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

  useEffect(() => {
    getUsers().then((res) => {
      const rawData = res.data.results;
      console.log(rawData);
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
    });
  }, []);

  return data ? (
      <div class="container" >
        <DataGrid rows={data} columns={columns} />
      </div>
  ) : (
    <div>Loading...</div>
  );
}
