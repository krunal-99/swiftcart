import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const posts = [
  {
    id: 1,
    image: "./src/assets/images/post1.jpeg",
    tag: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    image: "./src/assets/images/post2.jpeg",
    tag: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    image: "./src/assets/images/post3.jpeg",
    tag: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];

const FeaturedPosts: React.FC = () => {
  return (
    <Container sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="body2" color="#23a6f0" fontWeight={700}>
        Practice Advice
      </Typography>
      <Typography
        variant="h4"
        color="#252b42"
        fontWeight={700}
        fontSize="40px"
        sx={{ mt: 1, mb: 2 }}
      >
        Featured Posts
      </Typography>
      <Typography
        variant="body1"
        color="#737373"
        fontWeight={500}
        maxWidth={470}
        mx="auto"
      >
        Problems trying to resolve the conflict between the two major realms of
        Classic physics: Newton mechanics
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ boxShadow: 3, textAlign: "left", cursor: "pointer" }}>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={post.image}
                  alt={`Post ${post.id}`}
                />
                <Chip
                  label="NEW"
                  color="error"
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    fontWeight: 700,
                  }}
                />
              </Box>
              <CardContent>
                <Box display="flex" gap={1} mb={1}>
                  <Chip label={post.tag} color="primary" size="small" />
                  <Chip
                    sx={{ fontWeight: 400, color: "#737373" }}
                    label="Trending"
                    variant="outlined"
                    size="small"
                  />
                  <Chip
                    sx={{ fontWeight: 400, color: "#737373" }}
                    label="New"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Typography
                  variant="h6"
                  fontSize="20px"
                  color="#737373"
                  fontWeight={400}
                  gutterBottom
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color="#737373"
                  mb={2}
                >
                  {post.description}
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <AccessTimeIcon color="primary" fontSize="small" />
                    <Typography variant="caption" color="textSecondary">
                      {post.date}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <CommentIcon color="success" fontSize="small" />
                    <Typography variant="caption" color="textSecondary">
                      {post.comments} comments
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    color="textSecondary"
                  >
                    Learn More
                  </Typography>
                  <IconButton size="small" color="primary">
                    <ChevronRightIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedPosts;
