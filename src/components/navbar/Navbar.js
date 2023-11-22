import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    Link: {
      textDecoration: "none",
      fontWeight: "Bold",
      letterSpacing: "2px",
    },
  };
  return (
    <div>
      <h2>Navigate</h2>
      <div className="nav-bar">
        <Button size="large">
          <Link style={styles.Link} to={"/"}>
            Home
          </Link>
        </Button>
        <Button size="large">
          <Link style={styles.Link} to={"/register"}>
            Register
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
