// import { useContext, useEffect, useState } from "react";
// import { CompanyContext } from "../context/CompanyContext";
// import "../styles/navbar.css";

// export default function Navbar() {
//   const { filters, setFilters, companies } = useContext(CompanyContext);
//   const [tempFilters, setTempFilters] = useState(filters);

//   // dynamically extract unique values for dropdowns
//   const uniqueLocations = [...new Set(companies.map((c) => c.location))];
//   const uniqueIndustries = [...new Set(companies.map((c) => c.industry))];

//   // ✅ apply filter updates with a delay (simulate loading)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setFilters(tempFilters);
//     }, 600); // 0.6s delay (adjustable)
//     return () => clearTimeout(timer);
//   }, [tempFilters, setFilters]);

//   return (
//     <nav className="navbar">
//       <img
//         src="https://frontlinesmedia.in/wp-content/uploads/elementor/thumbs/SalesForce-By-Chaitanya-rcnkyj6r3osj1xr7vzv9w2rudazapz7j4jnq5khmxk.png"
//         alt="/"
//       />

//       <div className="filters">
//         <input
//           type="text"
//           placeholder="🔍 Search company..."
//           value={tempFilters.search || ""}
//           onChange={(e) =>
//             setTempFilters({ ...tempFilters, search: e.target.value })
//           }
//           className="filter-input"
//         />

//         <select
//           value={tempFilters.location || ""}
//           onChange={(e) =>
//             setTempFilters({ ...tempFilters, location: e.target.value })
//           }
//           className="filter-select"
//         >
//           <option value="">All Locations</option>
//           {uniqueLocations.map((loc) => (
//             <option key={loc} value={loc}>
//               {loc}
//             </option>
//           ))}
//         </select>

//         <select
//           value={tempFilters.industry || ""}
//           onChange={(e) =>
//             setTempFilters({ ...tempFilters, industry: e.target.value })
//           }
//           className="filter-select"
//         >
//           <option value="">All Industries</option>
//           {uniqueIndustries.map((ind) => (
//             <option key={ind} value={ind}>
//               {ind}
//             </option>
//           ))}
//         </select>
//       </div>
//     </nav>
//   );
// }
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
