import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../../.env"
export default function Get() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);
  const api = process.env.REACT_APP_API_URL;
  console.log(api);
  fetch = async () => {
    try {
      const res = await axios.get(
        "https://encouraging-hare-attire.cyclic.app/" + "contacts/"
      );
      if (res.status == 200) {
        console.log(res.data);
        setData(res.data);
      } else {
        alert("error");
        console.log(res);
      }
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <table className="table table-primary w-50">
          <thead>
            <tr>
                <th>Sno.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.Phone}</td>
                <td>{item.Disc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
