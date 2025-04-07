import { Grid2, Paper, Typography } from "@mui/material";

interface AdditionalInfoProps {
  info: string;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = (props) => {
  const infoItems = props.info.split("|").map((item) => item.trim());
  return (
    <Grid2 container spacing={2}>
      {infoItems?.map((item, index) => (
        <Grid2 columns={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              height: "100%",
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: 2,
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Typography
              variant="body1"
              color="#252b42"
              sx={{
                fontWeight: 600,
                mb: 1,
                borderBottom: "2px solid #23a6f0",
                paddingBottom: 1,
                display: "inline-block",
              }}
            >
              {item.split(":")[0]}
            </Typography>
            <Typography variant="body2" color="#737373">
              {item.split(":")[1]}
            </Typography>
          </Paper>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default AdditionalInfo;
