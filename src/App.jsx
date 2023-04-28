import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BoyOutlinedIcon from "@mui/icons-material/BoyOutlined";
import HailOutlinedIcon from "@mui/icons-material/HailOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PercentIcon from "@mui/icons-material/Percent";
import DescriptionIcon from "@mui/icons-material/Description";
import { Divider, Typography, Chip } from "@mui/material";
import ChartContainer from "./components/ChartContainer";
import DonutChart from "react-donut-chart";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileNavbar from "./components/MobileNavbar";

function App() {
  const medium = useMediaQuery("(min-width: 1050px)");
  const [tabs, setTabs] = useState("1");
  useEffect(() => {
    console.log(tabs);
  }, [tabs]);
  const studentColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: true,
    },
    {
      field: "examname",
      headerName: "Exam Name",
      width: 150,
      editable: true,
    },
    {
      field: "subject",
      headerName: "Subject",
      width: 150,
      editable: true,
    },
    {
      field: "grade",
      headerName: "Grade",
      width: 110,
      editable: true,
    },
    {
      field: "percent",
      headerName: "Percent",
      width: 110,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
    },
  ];

  const studentRows = [
    {
      id: "12",
      examname: "Class Test",
      subject: "Maths",
      grade: "A",
      percent: "85%",
      date: "02/03/2019",
    },
    {
      id: "18",
      examname: "Class Test",
      subject: "English",
      grade: "A",
      percent: "82%",
      date: "25/09/2019",
    },
    {
      id: "12",
      examname: "Class Test",
      subject: "Maths",
      grade: "A",
      percent: "85%",
      date: "02/03/2019",
    },
    {
      id: "18",
      examname: "Class Test",
      subject: "English",
      grade: "A",
      percent: "82%",
      date: "25/09/2019",
    },
    {
      id: "12",
      examname: "Class Test",
      subject: "Maths",
      grade: "A",
      percent: "85%",
      date: "02/03/2019",
    },
    {
      id: "18",
      examname: "Class Test",
      subject: "English",
      grade: "A",
      percent: "82%",
      date: "25/09/2019",
    },
    {
      id: "12",
      examname: "Class Test",
      subject: "Maths",
      grade: "A",
      percent: "85%",
      date: "02/03/2019",
    },
    {
      id: "18",
      examname: "Class Test",
      subject: "English",
      grade: "A",
      percent: "82%",
      date: "25/09/2019",
    },
    {
      id: "12",
      examname: "Class Test",
      subject: "Maths",
      grade: "A",
      percent: "85%",
      date: "02/03/2019",
    },
    {
      id: "18",
      examname: "Class Test",
      subject: "English",
      grade: "A",
      percent: "82%",
      date: "25/09/2019",
    },
    {
      id: "12",
      examname: "Class Test",
      subject: "Maths",
      grade: "A",
      percent: "85%",
      date: "02/03/2019",
    },
    {
      id: "18",
      examname: "Class Test",
      subject: "English",
      grade: "A",
      percent: "82%",
      date: "25/09/2019",
    },
    {
      id: "12",
      examname: "Class Test",
      subject: "Maths",
      grade: "A",
      percent: "85%",
      date: "02/03/2019",
    },
    {
      id: "18",
      examname: "Class Test",
      subject: "English",
      grade: "A",
      percent: "82%",
      date: "25/09/2019",
    },
    {
      id: "12",
      examname: "Class Test",
      subject: "Maths",
      grade: "A",
      percent: "85%",
      date: "02/03/2019",
    },
    {
      id: "18",
      examname: "Class Test",
      subject: "English",
      grade: "A",
      percent: "82%",
      date: "25/09/2019",
    },
    {
      id: "12",
      examname: "Class Test",
      subject: "Maths",
      grade: "A",
      percent: "85%",
      date: "02/03/2019",
    },
    {
      id: "18",
      examname: "Class Test",
      subject: "English",
      grade: "A",
      percent: "82%",
      date: "25/09/2019",
    },
    {
      id: "12",
      examname: "Class Test",
      subject: "Maths",
      grade: "A",
      percent: "85%",
      date: "02/03/2019",
    },
    {
      id: "18",
      examname: "Class Test",
      subject: "English",
      grade: "A",
      percent: "82%",
      date: "25/09/2019",
    },
  ];
  const teacherColumns = [
    {
      field: "id",
      headerName: "Roll",
      width: 70,
      editable: true,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "class",
      headerName: "Class",
      width: 70,
      editable: true,
    },
    {
      field: "section",
      headerName: "Section",
      width: 70,
      editable: true,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 70,
      editable: true,
    },
    {
      field: "dob",
      headerName: "Date of birth",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone number",
      width: 150,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      width: 250,
      editable: true,
    },
  ];

  const teacherRows = [
    {
      id: "24",
      name: "Aryan",
      gender: "Male",
      class: "1",
      section: "A",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "25",
      name: "Piyush ds",
      gender: "Male",
      class: "11",
      section: "A",
      dob: "11/02/2000",
      phone: "7851773632",
      email: "jhsjs@gmail.com",
      address: "Kolkata dds sjhjdsdd ,711107",
    },
    {
      id: "27",
      name: "Piyus",
      gender: "Female",
      class: "10",
      section: "B",
      dob: "11/02/2000",
      phone: "7891703632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "29",
      name: "Rohit",
      gender: "Male",
      class: "7",
      section: "C",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "26",
      name: "Piyush",
      gender: "Male",
      class: "1",
      section: "B",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "14",
      name: "Aryan",
      gender: "Female",
      class: "5",
      section: "A",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "45",
      name: "Piyush",
      gender: "Male",
      class: "1",
      section: "A",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "7",
      name: "Piyush",
      gender: "Female",
      class: "1",
      section: "B",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "9",
      name: "Aryan5",
      gender: "Male",
      class: "10",
      section: "B",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "13",
      name: "Madhu",
      gender: "Female",
      class: "1",
      section: "A",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "98",
      name: "Piyush",
      gender: "Male",
      class: "7",
      section: "A",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "67",
      name: "Piyush",
      gender: "Male",
      class: "1",
      section: "A",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
    {
      id: "56",
      name: "Piyush34",
      gender: "Male",
      class: "13",
      section: "B",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjcddjs@gmail.com",
    },
    {
      id: "72",
      name: "Rex",
      gender: "Male",
      class: "1",
      section: "B",
      dob: "11/02/2000",
      phone: "7891773632",
      email: "jhsjdjs@gmail.com",
      address: "Hsd dds sjhjdsdd ,700107",
    },
  ];
  return (
    <div>
      {medium?<></>:<MobileNavbar setTabs={setTabs}/>}
    <div style={{ width: "100%", boxSizing: "border-box", display: "flex" }}>
     {medium?<Navbar setTabs={setTabs} />:""}
      {tabs === 2 ? (
        <div
          style={{
            width: "100%",
            padding: "2rem",
            backgroundColor: "#F0F1F3",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", gap: "2rem",flexWrap:"wrap" }}>
            <div style={{
                flex: "1",
                padding: "2rem",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <Typography
                sx={{ fontWeight: "600", marginBottom: "2rem" }}
                variant="h6"
              >
                About Me
              </Typography>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    flex: "4",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <img src="/student.png" />
                </div>
                <div style={{ flex: "6" }}>
                  <Typography
                    sx={{ fontWeight: "600", marginBottom: "1.5rem" }}
                    variant="h6"
                  >
                    Piyush Jais
                  </Typography>
                  <Typography variant="subtitle2">
                    Aliquam erat volutpat. Curabiene natis massa sedde
                    lacustiquen sodale word moun taiery.
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ flex: "4" }}>
                  <Typography variant="subtitle1" sx={{ color: "grey" }}>
                    Name
                  </Typography>
                </div>
                <div style={{ flex: "6" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    Piyush Jaiswal
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ flex: "4" }}>
                  <Typography variant="subtitle1" sx={{ color: "grey" }}>
                    Gender
                  </Typography>
                </div>
                <div style={{ flex: "6" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    Male
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ flex: "4" }}>
                  <Typography variant="subtitle1" sx={{ color: "grey" }}>
                    Father Name
                  </Typography>
                </div>
                <div style={{ flex: "6" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    Prem Jaiswal
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ flex: "4" }}>
                  <Typography variant="subtitle1" sx={{ color: "grey" }}>
                    Mother Name
                  </Typography>
                </div>
                <div style={{ flex: "6" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    Pria Jaiswal
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ flex: "4" }}>
                  <Typography variant="subtitle1" sx={{ color: "grey" }}>
                    Date of birth
                  </Typography>
                </div>
                <div style={{ flex: "6" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    15/05/2000
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ flex: "4" }}>
                  <Typography variant="subtitle1" sx={{ color: "grey" }}>
                    Religion
                  </Typography>
                </div>
                <div style={{ flex: "6" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    Hindu
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ flex: "4" }}>
                  <Typography variant="subtitle1" sx={{ color: "grey" }}>
                    Email
                  </Typography>
                </div>
                <div style={{ flex: "6" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    piyush@gmail.com
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "center",
                }}
              >
                <div style={{ flex: "4" }}>
                  <Typography variant="subtitle1" sx={{ color: "grey" }}>
                    Phone number
                  </Typography>
                </div>
                <div style={{ flex: "6" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    7891525522
                  </Typography>
                </div>
              </div>
            </div>
            <div style={{ flex:medium?"2.75":"1",width:medium?"auto":"100%",flexDirection:"column",flexWrap:"wrap"}}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection:medium?"row":"column",
                  gap: "2rem",
                  flexWrap: "wrap",
                  justifyContent:"center"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "1.5rem",
                    alignItems: "center",
                    gap: "2rem",
                    flex: "1",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                    height: "120px",
                    boxSizing: "border-box",
                    
                  }}
                >
                  <div
                    style={{
                      width:"80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#F3E5F5",
                    }}
                  >
                    <ClassOutlinedIcon
                      sx={{ fontSize: "2.5rem", color: "#8E24AA" }}
                    />
                  </div>
                  <div style={{ flex: "1", textAlign: "end" }}>
                    <Typography variant="subtitle1" sx={{ color: "grey" }}>
                      Notification
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "600" }}>
                      10
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    padding: "1.5rem",
                    alignItems: "center",
                    flex: "1",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                    height: "120px",
                    boxSizing: "border-box",
                    
                  }}
                >
                  <div
                    style={{
                      width:"80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#73A0FD",
                    }}
                  >
                    <DateRangeIcon
                      sx={{ fontSize: "2.5rem", color: "#3F7AFC" }}
                    />
                  </div>
                  <div style={{ flex: "1", textAlign: "end" }}>
                    <Typography variant="subtitle1" sx={{ color: "grey" }}>
                      Events
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "600" }}>
                      6
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    padding: "1.5rem",
                    alignItems: "center",
                    flex: "1",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                    height: "120px",
                    boxSizing: "border-box",
                    
                  }}
                >
                  <div
                    style={{
                      width:"80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#FFF2D8",
                    }}
                  >
                    <PercentIcon
                      sx={{ fontSize: "2.5rem", color: "#FFA001" }}
                    />
                  </div>
                  <div style={{ flex: "1", textAlign: "end" }}>
                    <Typography variant="subtitle1" sx={{ color: "grey" }}>
                      Attendance
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "600" }}>
                      94%
                    </Typography>
                  </div>
                </div>
              </div>
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  marginTop: "2rem",
                  padding: "2rem",
                  boxSizing: "border-box",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "600", marginBottom: "2rem" }}
                  variant="h6"
                >
                  Students
                </Typography>
                <DataGrid
                  rows={studentRows}
                  columns={studentColumns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 6,
                      },
                    },
                  }}
                  pageSizeOptions={[6]}
                  disableRowSelectionOnClick
                />
              </Box>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                borderRadius: "5px",
                maxHeight: "450px",
                backgroundColor: "white",
              }}
            >
              <Typography sx={{ fontWeight: "600" }} variant="h6">
                Attendance
              </Typography>
              <div
                style={{
                  width: "100%",
                }}
              >
                <DonutChart
                  width={300}
                  height={300}
                  legend={false}
                  data={[
                    {
                      label: "Absent",
                      value: 26,
                      color: "#ff5722",
                    },
                    {
                      label: "Present",
                      value: 74,
                      color: "#795548",
                    },
                  ]}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: "1" }}>
                  <Divider
                    sx={{
                      borderBottomWidth: 7,
                      width: "40px",
                      background: "#EC87AB",
                      marginBlock: "5px",
                    }}
                  />
                  <Typography variant="subtitle2" sx={{ color: "grey" }}>
                    Present
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "500" }}>
                    74%
                  </Typography>
                </div>

                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "end",
                  }}
                >
                  <Divider
                    sx={{
                      borderBottomWidth: 7,
                      width: "40px",
                      background: "#F29A94",
                      marginBlock: "5px",
                    }}
                  />
                  <Typography variant="subtitle2" sx={{ color: "grey" }}>
                    Absent
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "500" }}>
                    26%
                  </Typography>
                </div>
              </div>
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                borderRadius: "5px",
                maxHeight: "450px",
                backgroundColor: "white",
              }}
            >
              <Typography sx={{ fontWeight: "600" }} variant="h6">
                Notifications
              </Typography>
              <div
                style={{
                  width: "100%",
                  overflowY: "scroll",
                  marginTop: "8px",
                }}
              >
                <div>
                  <Chip
                    sx={{ marginTop: "1rem" }}
                    label="29 March 2023"
                    color="primary"
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ marginBlock: "0.5rem", cursor: "pointer" }}
                  >
                    Great School manag mene esom tus eleifend lectus sed maximus
                    mi faucibusnting.
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "darkgray" }}>
                    Jennyfar Lopez / 5 min ago
                  </Typography>
                  <Divider
                    sx={{
                      borderBottomWidth: 1,
                      background: "grey",
                      marginTop: "8px",
                    }}
                  />
                </div>
                <div>
                  <Chip
                    sx={{ marginTop: "1rem" }}
                    label="2 Feb 2023"
                    color="success"
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ marginBlock: "0.5rem", cursor: "pointer" }}
                  >
                    Great School manag mene esom tus eleifend lectus sed maximus
                    mi faucibusnting.
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "darkgray" }}>
                    Jennyfar Lopez / 5 min ago
                  </Typography>
                  <Divider
                    sx={{
                      borderBottomWidth: 1,
                      background: "grey",
                      marginTop: "8px",
                    }}
                  />
                </div>
                <div>
                  <Chip
                    sx={{ marginTop: "1rem" }}
                    label="10 Jan 2023"
                    color="error"
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ marginBlock: "0.5rem", cursor: "pointer" }}
                  >
                    Great School manag mene esom tus eleifend lectus sed maximus
                    mi faucibusnting.
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "darkgray" }}>
                    Jennyfar Lopez / 5 min ago
                  </Typography>
                  <Divider
                    sx={{
                      borderBottomWidth: 1,
                      background: "grey",
                      marginTop: "8px",
                    }}
                  />
                </div>
                <div>
                  <Chip
                    sx={{ marginTop: "1rem" }}
                    label="29 May 2022"
                    color="secondary"
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ marginBlock: "0.5rem", cursor: "pointer" }}
                  >
                    Great School manag mene esom tus eleifend lectus sed maximus
                    mi faucibusnting.
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "darkgray" }}>
                    Jennyfar Lopez / 5 min ago
                  </Typography>
                  <Divider
                    sx={{
                      borderBottomWidth: 1,
                      background: "grey",
                      marginTop: "8px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                borderRadius: "5px",
                maxHeight: "450px",
                backgroundColor: "white",
              }}
            >
              <Typography sx={{ fontWeight: "600" }} variant="h6">
                Performance
              </Typography>
              <div
                style={{
                  width: "100%",
                }}
              >
                <DonutChart
                  width={300}
                  height={300}
                  legend={false}
                  data={[
                    {
                      label: "Sports",
                      value: 40,
                      color: "#ff5722",
                    },
                    {
                      label: "Academic",
                      value: 60,
                      color: "#795548",
                    },
                  ]}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: "1" }}>
                  <Divider
                    sx={{
                      borderBottomWidth: 7,
                      width: "40px",
                      background: "#EC87AB",
                      marginBlock: "5px",
                    }}
                  />
                  <Typography variant="subtitle2" sx={{ color: "grey" }}>
                    Sports
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "500" }}>
                    40%
                  </Typography>
                </div>

                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "end",
                  }}
                >
                  <Divider
                    sx={{
                      borderBottomWidth: 7,
                      width: "40px",
                      background: "#F29A94",
                      marginBlock: "5px",
                    }}
                  />
                  <Typography variant="subtitle2" sx={{ color: "grey" }}>
                    Acedmic
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "500" }}>
                    60%
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            padding: "2rem",
            backgroundColor: "#F0F1F3",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            <div
              style={{
                flex: "1",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  minWidth: "100px",
                  flex: "1",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "2rem",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    width: "75px",
                    height: "75px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: "#F3E5F5",
                  }}
                >
                  <HailOutlinedIcon
                    sx={{ fontSize: "50px", color: "#8E24AA" }}
                  />
                </div>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    marginTop: "6px",
                    fontWeight: "600",
                  }}
                >
                  35000
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                  Total Students
                </Typography>
              </div>
              <div
                style={{
                  flex: "1",
                  minWidth: "100px",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "2rem",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    width: "75px",
                    height: "75px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: "#E1F1FF",
                  }}
                >
                  <DescriptionIcon
                    sx={{ fontSize: "50px", color: "#3F7AFC" }}
                  />
                </div>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    marginTop: "6px",
                    fontWeight: "600",
                  }}
                >
                  19050
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                  Total Exams
                </Typography>
              </div>
              <div
                style={{
                  flex: "1",
                  minWidth: "100px",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "2rem",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    width: "75px",
                    height: "75px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: "#FFF2D8",
                  }}
                >
                  <SchoolOutlinedIcon
                    sx={{ fontSize: "50px", color: "#FFB02C" }}
                  />
                </div>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    marginTop: "6px",
                    fontWeight: "600",
                  }}
                >
                  23890
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                  Graduate Students
                </Typography>
              </div>
              <div
                style={{
                  flex: "1",
                  minWidth: "100px",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "2rem",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    width: "75px",
                    height: "75px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: "#FFEAEA",
                  }}
                >
                  <PriceChangeIcon
                    sx={{ fontSize: "50px", color: "#FF0000" }}
                  />
                </div>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    marginTop: "6px",
                    fontWeight: "600",
                  }}
                >
                  $2102
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                  Total Income
                </Typography>
              </div>
            </div>
            <div
              style={{
                flex: "2",
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "5px",
                  maxHeight: "450px",
                  backgroundColor: "white",
                }}
              >
                <Typography sx={{ fontWeight: "600" }} variant="h6">
                  Students
                </Typography>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <DonutChart
                    width={300}
                    height={300}
                    legend={false}
                    data={[
                      {
                        label: "Girls",
                        value: 30,
                        color: "#ff5722",
                      },
                      {
                        label: "Boys",
                        value: 70,
                        color: "#795548",
                      },
                    ]}
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ flex: "1" }}>
                    <Divider
                      sx={{
                        borderBottomWidth: 7,
                        width: "40px",
                        background: "#EC87AB",
                        marginBlock: "5px",
                      }}
                    />
                    <Typography variant="subtitle2" sx={{ color: "grey" }}>
                      Female Students
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "500" }}>
                      10,500
                    </Typography>
                  </div>

                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "end",
                    }}
                  >
                    <Divider
                      sx={{
                        borderBottomWidth: 7,
                        width: "40px",
                        background: "#F29A94",
                        marginBlock: "5px",
                      }}
                    />
                    <Typography variant="subtitle2" sx={{ color: "grey" }}>
                      Male Students
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "500" }}>
                      24,500
                    </Typography>
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "5px",
                  maxHeight: "450px",
                  backgroundColor: "white",
                }}
              >
                <Typography sx={{ fontWeight: "600" }} variant="h6">
                  Notifications
                </Typography>
                <div
                  style={{
                    width: "100%",
                    overflowY: "scroll",
                    marginTop: "8px",
                  }}
                >
                  <div>
                    <Chip
                      sx={{ marginTop: "1rem" }}
                      label="29 March 2023"
                      color="primary"
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{ marginBlock: "0.5rem", cursor: "pointer" }}
                    >
                      Great School manag mene esom tus eleifend lectus sed
                      maximus mi faucibusnting.
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "darkgray" }}>
                      Jennyfar Lopez / 5 min ago
                    </Typography>
                    <Divider
                      sx={{
                        borderBottomWidth: 1,
                        background: "grey",
                        marginTop: "8px",
                      }}
                    />
                  </div>
                  <div>
                    <Chip
                      sx={{ marginTop: "1rem" }}
                      label="2 Feb 2023"
                      color="success"
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{ marginBlock: "0.5rem", cursor: "pointer" }}
                    >
                      Great School manag mene esom tus eleifend lectus sed
                      maximus mi faucibusnting.
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "darkgray" }}>
                      Jennyfar Lopez / 5 min ago
                    </Typography>
                    <Divider
                      sx={{
                        borderBottomWidth: 1,
                        background: "grey",
                        marginTop: "8px",
                      }}
                    />
                  </div>
                  <div>
                    <Chip
                      sx={{ marginTop: "1rem" }}
                      label="10 Jan 2023"
                      color="error"
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{ marginBlock: "0.5rem", cursor: "pointer" }}
                    >
                      Great School manag mene esom tus eleifend lectus sed
                      maximus mi faucibusnting.
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "darkgray" }}>
                      Jennyfar Lopez / 5 min ago
                    </Typography>
                    <Divider
                      sx={{
                        borderBottomWidth: 1,
                        background: "grey",
                        marginTop: "8px",
                      }}
                    />
                  </div>
                  <div>
                    <Chip
                      sx={{ marginTop: "1rem" }}
                      label="29 May 2022"
                      color="secondary"
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{ marginBlock: "0.5rem", cursor: "pointer" }}
                    >
                      Great School manag mene esom tus eleifend lectus sed
                      maximus mi faucibusnting.
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "darkgray" }}>
                      Jennyfar Lopez / 5 min ago
                    </Typography>
                    <Divider
                      sx={{
                        borderBottomWidth: 1,
                        background: "grey",
                        marginTop: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white",
              marginTop: "2rem",
              padding: "2rem",
              boxSizing: "border-box",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{ fontWeight: "600", marginBottom: "2rem" }}
              variant="h6"
            >
              Students
            </Typography>
            <DataGrid
              rows={teacherRows}
              columns={teacherColumns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 6,
                  },
                },
              }}
              pageSizeOptions={[6]}
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
