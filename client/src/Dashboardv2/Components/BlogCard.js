import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function BlogCard({ blog }) {
  console.log(blog.imagesUrl);
  function truncateWords(text, limit) {
    const words = text.split(" ");
    if (words.length <= limit) {
      return text;
    }
    return words.slice(0, limit).join(" ") + "...";
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={blog.imagesUrl[0].imageUrl}
        title="green iguana"
      />
      <CardContent>
        {/* <Box>
          {blog.seoKeywords.map((seoKeyword, index) => (
            <Typography
              gutterBottom
              variant="h6"
              fontSize="12px"
              component="div"
            >
              {seoKeyword}
            </Typography>
          ))}
        </Box> */}
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {truncateWords(blog.content.intro, 40)}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
