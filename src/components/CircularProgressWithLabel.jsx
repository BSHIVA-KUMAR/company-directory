import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel({ value }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={value}
          size={90}
          thickness={5}
          sx={{
            color: "#1976d2",
            "& .MuiCircularProgress-circle": { transition: "stroke-dashoffset 0.35s" },
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            fontWeight="bold"
            fontSize="1rem"
            sx={{ color: "#1976d2" }}
          >
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="body2"
        sx={{
          mt: 2,
          color: "#1976d2",
          fontWeight: 500,
          letterSpacing: 0.5,
        }}
      >
        Loading data...
      </Typography>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 10
      );
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
