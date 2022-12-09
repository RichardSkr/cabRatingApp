import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [cabDrivers, setCabDrivers] = useState([]);

  useEffect(() => {
    loadCabDrivers();
  }, []);

  const loadCabDrivers = async () => {
    const result = await axios.get("http://localhost:8080/drivers");
    setCabDrivers(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Driver Name</th>
              <th scope="col">License Plate</th>
              <th scope="col">Rating</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cabDrivers.map((driver, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{driver.driverName}</td>
                <td>{driver.licensePlate}</td>
                <td>{driver.rating}/10</td>
                <td>
                  <button className="btn btn-outline-primary mx-2">View</button>
                  <button className="btn btn-danger">Rate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
