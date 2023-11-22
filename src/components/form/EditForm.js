import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await axios.get(
      `http://localhost:8080/api/students/find/${id}`
    );
    let jsonData = response.data;
    setPost(jsonData);
    console.log(jsonData);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPost((values) => ({ ...values, [name]: value }));
    console.log(value);
  };
  const handleChangeAddress = (event) => {
    const name = event.target.name;
    const value = event.target.value;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8080/api/students/update`, post)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };

  return (
    <div>
      <h1>Edit Form</h1>

      {post.length == 0 ? (
        <h4>Loading ...</h4>
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <TextField
              value={post.name}
              onChange={handleChange}
              required
              margin="dense"
              fullWidth
              label="Name"
              name="name"
            />
            <TextField
              onChange={handleChange}
              value={post.age}
              required
              margin="dense"
              fullWidth
              label="Age"
              name="age"
            />

            <TextField
              onChange={handleChangeAddress}
              value={post.address.zipCode}
              required
              margin="dense"
              fullWidth
              label="Zip Code"
              name="zipCode"
            />
            <TextField
              onChange={handleChangeAddress}
              value={post.address.city}
              required
              margin="dense"
              fullWidth
              label="City"
              name="city"
            />
            <TextField
              onChange={handleChange}
              value={post.address.street}
              required
              margin="dense"
              fullWidth
              label="Street"
              name="street"
            />

            <TextField
              onChange={handleChange}
              value={post.contact.phone_number}
              margin="dense"
              fullWidth
              label="Phone Number"
              name="phoneNumber"
            />
            <TextField
              onChange={handleChange}
              value={post.contact.email}
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
              Save
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditForm;
