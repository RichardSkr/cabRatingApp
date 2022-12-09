import React, { useState } from "react";

export default function AddUser() {
  const [driver, setDriver] = useState({
    driverName: "",
    licencePlate: "",
    rating: "",
    car: "",
    carColor:"",
  });

  const { driverName, licencePlate, rating } = driver;

  const onInputChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register </h2>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="driverName" className="fomr-label">
                    Driver Name
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter the drivers name"
                    name="driverName"
                    value={driverName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="licencePlate" className="fomr-label">
                    Licence Plate
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter licence plate"
                    name="licencePlate"
                    value={licencePlate}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="driverName" className="fomr-label">
                    Driver Name
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter the drivers name"
                    name="driverName"
                    value={driverName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="licencePlate" className="fomr-label">
                    Licence Plate
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter licence plate"
                    name="licencePlate"
                    value={licencePlate}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="rating" className="fomr-label">
                    Rating
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter driver rating"
                    name="rating"
                    value={rating}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="col">
              <div className="mb-3">
                  <label htmlFor="rating" className="fomr-label">
                    Rating
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter driver rating"
                    name="rating"
                    value={rating}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <button type="submit" className="btn btn-outline-danger mx-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
