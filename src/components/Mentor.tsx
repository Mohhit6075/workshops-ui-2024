import { Container, Avatar, Box, Grid } from "@material-ui/core";
import React from "react";
import mentors from "../data/mentordata.json";

const Mentor = () => {
  const data = Object.values(mentors);
  console.log(data);
  return (
    <>
      <Box className="title">
        <h2>
          <span>Know Your Mentor</span>
        </h2>
      </Box>
      {data.map((person) => (
        <Container maxWidth="lg" className="mentor-section">
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={8}>
              <Box className="mentor-box">
                <Box className="mentor-img">
                  <Avatar
                    src={person.image}
                    alt="mentor-img"
                    style={{ height: "140px", width: "140px" }}
                  />
                </Box>
                <Box className="mentor-heading">
                  <h2>{person.name}</h2>
                  <h4>{person.label}</h4>
                </Box>
                <Box className="mentor-details">
                  <p>{person.details}</p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      ))}
    </>
  );
};

export default Mentor;
