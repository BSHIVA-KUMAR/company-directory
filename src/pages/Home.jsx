import { useContext, useState } from "react";
import { CompanyContext } from "../context/CompanyContext";
import CompanyCard from "../components/CompanyCard";
import CompanyModal from "../components/CompanyModal";
import FilterPills from "../components/FilterPills";
import CircularWithValueLabel from "../components/CircularProgressWithLabel";
import { Pagination } from "@mui/material";
import "../styles/home.css";

export default function Home() {
  const { filteredCompanies, filters, setFilters, companies, loading } = useContext(CompanyContext);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [page, setPage] = useState(1);
  const [isPaging, setIsPaging] = useState(false); // ✅ Loading for pagination

  const uniqueLocations = [...new Set(companies.map((c) => c.location))];
  const uniqueIndustries = [...new Set(companies.map((c) => c.industry))];
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  // ✅ Page loading animation
  const handlePageChange = (event, value) => {
    setIsPaging(true);
    setTimeout(() => {
      setPage(value);
      setIsPaging(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600); // short animation time
  };

  // ❌ No loading animation for filters

  if (loading || isPaging)
    return (
      <div className="loader">
        <CircularWithValueLabel />
        <p style={{ marginTop: "10px" }}>Loading page...</p>
      </div>
    );

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>Company Directory</h2>
      </div>

      {/* 🔽 Dropdown filters */}
      <div className="home-filters">
        <select
          value={filters.location || ""}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          value={filters.industry || ""}
          onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
        >
          <option value="">All Industries</option>
          {uniqueIndustries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Pills below filters */}
      <FilterPills />

      {filteredCompanies.length > 0 ? (
        <div className="cards-grid">
          {filteredCompanies
            .slice((page - 1) * 9, page * 9)
            .map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                onClick={() => setSelectedCompany(company)}
              />
            ))}
        </div>
      ) : (
        <div className="no-results">No companies found for selected filters.</div>
      )}

      {filteredCompanies.length > 0 && (
        <div className="pagination-container">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      )}

      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          open={!!selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
}
