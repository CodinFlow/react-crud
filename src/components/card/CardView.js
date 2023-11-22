import { Avatar, Button } from "@mui/material";
import React from "react";

const CardView = ({ name, age, email, city, clickDelete, clickEdit }) => {
  const styles = {
    p: {
      marginTop: "12px",
    },
    card: {
      width: "300px",
      height: "340px",
      marginLeft: "6px",
      marginTop: "16px",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      backgroundColor: "white",
      borderRadius: "4px",
    },
    container: {
      padding: "px",
    },
    avatar: {
      width: "120px",
      height: "120px",
      margin: "auto",
      marginTop: "16px",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "80%",
      margin: "auto",
      marginTop: "32px",
    },
  };
  return (
    <div style={styles.card}>
      <div style={styles.container}>
        <Avatar
          style={styles.avatar}
          alt="Remy Sharp"
          src="https://ghadatalebamer.github.io/PS70/assignments/Final%20Project%20Ideas/avatar.png"
        />

        <h3>{name}</h3>
        <h4>{age}</h4>
        <p style={styles.p}>{email}</p>
        <p style={styles.p}>{city}</p>
      </div>

      <div style={styles.btnContainer}>
        <Button onClick={clickDelete} variant="contained" color="error">
          Delete
        </Button>
        <Button onClick={clickEdit} variant="contained" color="primary">
          Edit
        </Button>
      </div>
    </div>
  );
};

export default CardView;
