import React, { useEffect, useState } from "react";
import CardView from "../components/card/CardView";
import axios from "axios";
import "../style/main.scss";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Home = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const getData = async () => {
    let response = await axios.get(
      "http://localhost:8080/api/students/find-all"
    );
    let jsonData = response.data;
    setPost(jsonData);
    //console.log(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClickEdit = (id) => {
    navigate("/edit/" + id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    setInput(id);
    console.log("Delete this : " + id);
  };

  const handleClickDelete = (input) => {
    axios
      .delete(`http://localhost:8080/api/students/delete/${input}`)
      .then(function (response) {
        console.log(response.data);
        getData();
      });
    setOpen(false);
    console.log("Button Clicked.." + input);
  };

  return (
    <div className="container">
      <h1>Home Page</h1>

      <div className="card-container">
        {post.length === 0 ? (
          <h3>Loading . . .</h3>
        ) : (
          post.map((post, index) => (
            <CardView
              key={index}
              name={post.name}
              age={post.age}
              email={post.contact.email}
              city={post.address.city}
              clickDelete={() => handleClickOpen(post.id)}
              clickEdit={() => handleClickEdit(post.id)}
            />
          ))
        )}
      </div>

      <div style={{ backgroundColor: "steelblue" }}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }}>
            Delete User with ID : {input}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              Are you sure you want to delete this ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button color="error" onClick={() => handleClickDelete(input)}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Home;
