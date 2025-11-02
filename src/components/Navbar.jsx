import { useContext, useState } from "react";
import { CompanyContext } from "../context/CompanyContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/navbar.css";

export default function Navbar() {
  const { filters, setFilters } = useContext(CompanyContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToast = (label) => {
    toast.dismiss();
    toast.info(`${label} is under development 🚧`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          src="https://frontlinesmedia.in/wp-content/uploads/elementor/thumbs/SalesForce-By-Chaitanya-rcnkyj6r3osj1xr7vzv9w2rudazapz7j4jnq5khmxk.png"
          alt="logo"
          className="nav-logo"
        />

        <input
          type="text"
          placeholder="🔍 Search company..."
          value={filters.search || ""}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="filter-input"
        />
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Nav links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["Job Notifications", "Resources", "Get Support", "Login"].map(
          (item) => (
            <button
              key={item}
              className="nav-btn"
              onClick={() => {
                handleToast(item);
                setMenuOpen(false);
              }}
            >
              {item}
            </button>
          )
        )}
      </div>

      <ToastContainer limit={1} />
    </nav>
  );
}
