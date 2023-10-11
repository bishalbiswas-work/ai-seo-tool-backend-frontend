import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// Visual Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// End Visual Imports
// Import Components
import Navbar from "../Components/Navbar";
import BlogCard from "../Components/BlogCard";
// End Import Components
import { useContext } from "react";
import DataContext from "../../ContextAPI/DataState";
// Import ContextAPI

// End Import ContextAPI
export default function Dashboard() {
  //   const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [blogs, setBlogs] = useState(dataContext.blogs);
  return (
    <>
      <Navbar />

      <Container sx={{ p: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
