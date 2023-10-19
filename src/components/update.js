import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Update() {
  const { id } = useParams();
  const data = JSON.parse(id)
  console.log(data._id);
  const [Name, setName] = useState(data.Name);
  const [Email, setEmail] = useState(data.Email);
  const [Phone, setPhone] = useState(data.Phone);
  const [Disc, setDisc] = useState(data.Disc);
  const [errors, setErrors] = useState({
    Name: false,
    Email: false,
    Phone: false,
  });

  useEffect(() => {
    const error = Object.values(errors);
    if (
      error[0] ||
      error[1] ||
      error[2] ||
      Name.length < 3 ||
      Email.length < 3 ||
      Phone.length < 9
    ) {
      setButton(true);
    } else {
      setButton(false);
    }

    // for(const i=0;i<errors.length)
    //   setButton(!hasErrors);
  }, [errors]);
  const [button, setButton] = useState(true);
  const send = async (e) => {
    e.preventDefault();
    if (Name.length < 3 || Email.length < 3 || Phone.length < 3) {
      // Perform form submission or other action here
      alert("Form has errors. Please fix them.");
    } else {
      try {
        const datas = {
          Name: Name,
          Email: Email,
          Phone: Phone,
          Disc:Disc

        };
        console.log(datas);
        const res = await axios.put(
          "https://encouraging-hare-attire.cyclic.app/updatecontact/"+data._id,
          datas
        );
        console.log(res.data.message);
        if (res.status == 200) {
          alert(res.data.message);
        }
        console.log("Form submitted:");
      } catch (error) {
        console.log(error);
        // if (error.response.data.message.Name) {
        //   alert(error.response.data.message.Name);
        // } else if (error.response.data.message.Email) {
        //   alert(error.response.data.message.Email);
        // } else if (error.response.data.message.Phone) {
        //   alert(error.response.data.message.Phone);
        // } else {
          alert("Somthing went worng");
        }
    //   }
    }
  };

  const name = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.length < 3) {
      setErrors({ ...errors, Name: true });
    } else {
      setErrors({ ...errors, Name: false });
    }
  };
  const email = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length < 3) {
      setErrors({ ...errors, Email: true });
    } else {
      setErrors({ ...errors, Email: false });
    }
  };
  const phone = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (value.length < 9) {
      setErrors({ ...errors, Phone: true });
    } else {
      setErrors({ ...errors, Phone: false });
    }
  };
  const desc = (e) => {
    const value = e.target.value;
    setDisc(value);
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <form onSubmit={send}>
          <TextField
            type="text"
            onChange={name}
            error={errors.Name}
            required
            // id="outlined-required"
            label="Name"
            name="Name"
            value={Name}
            // onChange={}
          />
          <br />
          <br />
          <TextField
            onChange={email}
            type="email"
            error={errors.Email}
            required
            // id="outlined-required"
            label="Email"
            value={Email}
            // onChange={}
          />
          <br />
          <br />
          <TextField
            type="number"
            onChange={phone}
            error={errors.Phone}
            required
            // id="outlined-required"
            label="Phone"
            value={Phone}
            // onChange={}
          />
          <br />
          <br />
          <TextField
            onChange={desc}
            multiline
            rows={4} // You can adjust the number of rows
            variant="outlined"
            fullWidth
            value={Disc}
            placeholder="Your text goes here"
          />
          <br />
          <br />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={button}
          >
            Submit
          </Button>
          <br />
          <br />
          <Link to="/get">
            <p>Next page</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
