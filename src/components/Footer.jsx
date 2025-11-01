import "../styles/footer.css";
import { Typography, Box, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box className="footer">
      <Typography variant="body2" className="footer-text">
        © {new Date().getFullYear()} Company Directory — All Rights Reserved.
      </Typography>
      <Typography variant="body2" className="footer-links">
        Built with ❤️ using <Link href="https://react.dev/" target="_blank" rel="noopener">React</Link> &{" "}
        <Link href="https://mui.com/" target="_blank" rel="noopener">Material UI</Link>
      </Typography>
    </Box>
  );
}
