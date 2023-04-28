import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import HailOutlinedIcon from "@mui/icons-material/HailOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Typography } from "@mui/material";
import "./Navbar.css"

const Navbar = ({ setTabs }) => {
  return (
    <div
      style={{
        width:"320px",
        display: "flex",
        justifyContent: "start",
        gap: "1rem",
        flexDirection: "column",
        background: "#262B3F",
        color: "white",
        height: "100vh",
        position: "sticky",
      }}
    >
      <div
        className="navbarTabs" onClick={()=>setTabs(1)}
        style={{
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          cursor: "pointer",
          paddingInline: "0.8rem",paddingBlock:"0.25rem",
          boxSizing: "border-box",
        }}
      >
        <span>
          <DashboardOutlinedIcon />
        </span>
        <Typography variant="subtitle1">TEACHER DASHBOARD</Typography>
      </div>
      <div
        className="navbarTabs" onClick={()=>setTabs(2)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          cursor: "pointer",
          paddingInline: "0.8rem",paddingBlock:"0.25rem",
          boxSizing: "border-box",
        }}
      >
        <span>
          <DashboardOutlinedIcon />
        </span>
        <Typography variant="subtitle1">STUDENT DASHBOARD</Typography>
      </div>
      <div
        className="navbarTabs" onClick={()=>setTabs(3)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          cursor: "pointer",
          paddingInline: "0.8rem",paddingBlock:"0.25rem",
          boxSizing: "border-box",
        }}
      >
        <span>
          <HailOutlinedIcon />
        </span>
        <Typography variant="subtitle1">TEACHERS LIST</Typography>
      </div>
      <div
        className="navbarTabs" onClick={()=>setTabs(4)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          cursor: "pointer",
          paddingInline: "0.8rem",paddingBlock:"0.25rem",
          boxSizing: "border-box",
        }}
      >
        <span>
          <ClassOutlinedIcon />
        </span>
        <Typography variant="subtitle1">SUBJECT LIST</Typography>
      </div>
      <div
        className="navbarTabs" onClick={()=>setTabs(5)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          cursor: "pointer",
          paddingInline: "0.8rem",paddingBlock:"0.25rem",
          boxSizing: "border-box",
        }}
      >
        <span>
          <SportsHandballIcon />
        </span>
        <Typography variant="subtitle1">SPORTS LIST</Typography>
      </div>
      <div
        className="navbarTabs" onClick={()=>setTabs(6)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          cursor: "pointer",
          paddingInline: "0.8rem",paddingBlock:"0.25rem",
          boxSizing: "border-box",
        }}
      >
        <span>
          <SchoolOutlinedIcon />
        </span>
        <Typography variant="subtitle1">TOP PERFORMERS</Typography>
      </div>
    </div>
  );
};

export default Navbar;
