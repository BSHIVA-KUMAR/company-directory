import "../styles/filterPills.css";
import { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";
import { Chip } from "@mui/material";

export default function FilterPills() {
  const { filters, setFilters } = useContext(CompanyContext);

  // build pill list based on active filters
  const activeFilters = Object.entries(filters).filter(
    ([_, val]) => val !== ""
  );

  const handleRemove = (key) => {
    setFilters({ ...filters, [key]: "" });
  };

  if (activeFilters.length === 0) return null;

  return (
    <div className="pill-container">
      <h3>Filters Applied: </h3>
      {activeFilters.map(([key, val]) => (
        <Chip
          key={key}
          label={`${val}`}
          onDelete={() => handleRemove(key)}
          className="filter-pill"
          color="primary"
          variant="outlined"
        />
      ))}
    </div>
  );
}
