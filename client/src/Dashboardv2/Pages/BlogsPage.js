import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";

// Import ContextAPI
import { useContext } from "react";
import DataContext from "../../ContextAPI/DataState";
// End Import ContextAPI
const BlogPage = ({ prop }) => {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [blog, setBlog] = useState(dataContext.blogs[dataContext.selectedBlog]);
  //   console.log(dataContext.blogs);
  return (
    <>
      <div>
        <Typography>Page sdfsd</Typography>
        <Box>{blog.content.title}</Box>
        <Box>{blog.content.intro}</Box>
      </div>
    </>
  );
};

export default BlogPage;
