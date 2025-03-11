import { Box } from "@mui/material";
import { assets } from "../assets";

const VideoComponent = () => {
  return (
    <Box width="80%" m="auto">
      <video
        src={`${assets.videos.AdVideo}`}
        width="100%"
        height="auto"
        muted
        controls
        loop
        autoPlay
        style={{ margin: "50px auto", borderRadius: "10px" }}
      ></video>
    </Box>
  );
};

export default VideoComponent;
