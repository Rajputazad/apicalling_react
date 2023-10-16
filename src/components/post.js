import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { makeStyles } from '@mui/styles'; 

export default function Post() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Disc, setDisc] = useState("");
  const [errors, setErrors] = useState({
    Name: false,
    Email: false,
    Phone: false,
  });
  const send = (e) => {
    console.log(Name);
    e.preventDefault();
    if (!Object.values(errors).some((error) => error)) {
        // Perform form submission or other action here
        console.log('Form submitted:');
      } else {
        alert('Form has errors. Please fix them.');
      }
  };


const name=(e)=>{
    const value =e.target.value
    setName(value)
    if(value.length<3){
        setErrors({...errors,Name:true})
    }else{
        setErrors({...errors,Name:false})
}

}
const email=(e)=>{
    const value =e.target.value
    setEmail(value)
    if(value.length<3){
        setErrors({...errors,Name:true})
    }else{
        setErrors({...errors,Name:false})
}

}
const phone=(e)=>{
    const value =e.target.value
    setPhone(value)
    if(value.length<3){
        setErrors({...errors,Name:true})
    }else{
        setErrors({...errors,Name:false})
}

}
const desc=(e)=>{
    const value =e.target.value
    setDisc(value)
   
}




  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <form onSubmit={send}>
          <TextField
onChange={name}
            error={errors.Name}
            required
            id="outlined-required"
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
            error
            required
            id="outlined-required"
            label="Email"
            value={Email}
            // onChange={}
          />
          <br />
          <br />
          <TextField
onChange={phone}
            error
            required
            id="outlined-required"
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
        disabled={errors.Name}
      >
        Submit
      </Button>
        </form>
      </div>
    </div>
  );
  }
// const useStyles = makeStyles((theme) => ({
//     customTextarea: {
//       '& .MuiInputBase-input': {
//         padding: '10px', // Adjust the padding as needed
//         fontSize: '16px', // Adjust the font size as needed
//         border: '1px solid #ccc', // Adjust the border style as needed
//         borderRadius: '5px', // Adjust the border radius as needed
//       },
//     },
//   }));