import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [filters, setFilters] = useState({
    search: "", // 🔹 renamed from name → search for consistency
    location: "",
    industry: "",
  });
  const [loading, setLoading] = useState(true);

  // Load companies from local/Static JSON file
  useEffect(() => {
    axios
      .get("/companies.json")
      .then((res) => {
        setCompanies(res.data);
        setFilteredCompanies(res.data);
      })
      .catch(() => toast.error("Error fetching company data"))
      .finally(() => setLoading(false));
  }, []);

  // Apply filters dynamically
  useEffect(() => {
    const searchLower = filters.search.toLowerCase();
    let filtered = companies.filter((c) => {
      const matchesSearch =
        !filters.search ||
        c.name.toLowerCase().includes(searchLower) ||
        c.location.toLowerCase().includes(searchLower) ||
        c.industry.toLowerCase().includes(searchLower) ||
        c.description.toLowerCase().includes(searchLower);
      const matchesLocation =
        !filters.location ||
        c.location.toLowerCase() === filters.location.toLowerCase();
      const matchesIndustry =
        !filters.industry ||
        c.industry.toLowerCase() === filters.industry.toLowerCase();
      return matchesSearch && matchesLocation && matchesIndustry;
    });
    setFilteredCompanies(filtered);
  }, [filters, companies]);

  return (
    <CompanyContext.Provider
      value={{
        companies,
        filteredCompanies,
        filters,
        setFilters,
        loading,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
