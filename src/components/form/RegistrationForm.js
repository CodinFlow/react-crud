import React from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

const Form = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      // Prevent the browser from reloading the page
      e.preventDefault();

      // Read the form data
      const form = e.target;
      const formData = new FormData(form);

      const formJson = Object.fromEntries(formData.entries());

      const requestData = {
        name: formJson.name,
        age: parseInt(formJson.age),
        address: {
          zipCode: parseInt(formJson.zipCode),
          city: formJson.city,
          street: formJson.street,
        },
        contact: {
          phone_number: parseInt(formJson.phoneNumber),
          email: formJson.email,
        },
      };

      await axios
        .post("http://localhost:8080/api/students/add", requestData)
        .then((request) => {
          //console.log(request.status, "Added Successfully!");
          navigate("/");
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField required margin="dense" fullWidth label="Name" name="name" />
        <TextField required margin="dense" fullWidth label="Age" name="age" />

        <TextField
          required
          margin="dense"
          fullWidth
          label="Zip Code"
          name="zipCode"
        />
        <TextField required margin="dense" fullWidth label="City" name="city" />
        <TextField
          required
          margin="dense"
          fullWidth
          label="Street"
          name="street"
        />

        <TextField
          margin="dense"
          fullWidth
          label="Phone Number"
          name="phoneNumber"
        />
        <TextField
          required
          margin="dense"
          fullWidth
          label="Email"
          name="email"
        />

        <Button
          type="submit"
          className="material-button"
          size="large"
          variant="contained"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Form;
