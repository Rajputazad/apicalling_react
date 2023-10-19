import React, { useEffect, useState } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from '@mui/material/CircularProgress';
import { Link ,useNavigate  } from 'react-router-dom';
export default function Get() {
  const navigate  = useNavigate (); 
  const [data, setData] = useState([]);
const [loading,setLoading] =useState(true)
const [del,setDel] =useState(false)
  useEffect(() => {
    fetch();
  }, []);
  const api = process.env.REACT_APP_API_URL;
  fetch = async () => {
    try {
      const res = await axios.get(
        "https://encouraging-hare-attire.cyclic.app/" + "contacts/"
      );
      if (res.status == 200) {
        console.log(res.data);
        setData(res.data);
        setLoading(false)
      } else {
        alert("error");
        console.log(res);
      }
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };

  const deletedata = async (id) => {
    setDel(true)
    try {
      const res = await axios.delete(
        "https://encouraging-hare-attire.cyclic.app/ContactDelete/"+id
      );
      if (res.status == 200) {
        setDel(false)
        fetch();
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("something went weong");
    }
  };

const edit=(id)=>{
navigate("/update/"+JSON.stringify(id),{ relative: "path" })
}


  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        {  loading? <CircularProgress color="success" />:<table className="table table-primary w-50">
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
                <td>{index + 1}</td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.Phone}</td>
                <td>{item.Disc}</td>
                <td>
                  <IconButton onClick={()=>edit(item)}>
                    <EditIcon />
                  </IconButton>
                </td>
                <td>
{del?<CircularProgress color="success" />:
                  <IconButton onClick={()=>deletedata(item._id)}>
                    <DeleteIcon />
                  </IconButton>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>}
      </div>
    </div>
  );
}
