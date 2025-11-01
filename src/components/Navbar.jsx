
import { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/navbar.css";

export default function Navbar() {
  const { filters, setFilters } = useContext(CompanyContext);

  const handleToast = (label) => {
    toast.dismiss(); // ensures only one toast at a time
    toast.info(`${label} is under development 🚧`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
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

      <div className="nav-links">
        {["Job Notifications", "Resources", "Get Support", "Login"].map((item) => (
          <button key={item} className="nav-btn" onClick={() => handleToast(item)}>
            {item}
          </button>
        ))}
      </div>

      <ToastContainer limit={1} />
    </nav>
  );
}
