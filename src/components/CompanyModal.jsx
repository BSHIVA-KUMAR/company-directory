import { Modal, Box, Typography, Link, Divider } from "@mui/material";
import "../styles/companyModal.css";

export default function CompanyModal({ company, onClose }) {
  if (!company) return null;

  return (
    <Modal open={!!company} onClose={onClose}>
      <Box className="company-modal-box">
        <div className="modal-header">
          <img src={company.logo} alt={company.name} className="modal-logo" />
          <Typography variant="h5" className="modal-title">
            {company.name}
          </Typography>
        </div>

        <Divider className="modal-divider" />

        <div className="modal-section">
          <Typography variant="h6" className="modal-heading">
            🏢 Company Overview
          </Typography>
          <Typography className="modal-info">
            <strong>📍 Location:</strong> {company.location}
          </Typography>
          <Typography className="modal-info">
            <strong>🏭 Industry:</strong> {company.industry}
          </Typography>
          {company.website && (
            <Typography className="modal-info">
              <strong>🔗 Website:</strong>{" "}
              <Link
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="primary"
              >
                Visit Portal
              </Link>
            </Typography>
          )}
        </div>

        <Divider className="modal-divider" />

        <div className="modal-section">
          <Typography variant="h6" className="modal-heading">
            📝 About the Company
          </Typography>
          <Typography className="modal-description">
            {company.description}
          </Typography>
        </div>

        <Divider className="modal-divider" />

        <div className="modal-section">
          <Typography variant="h6" className="modal-heading">
            📞 Contact Information
          </Typography>
          <Typography className="modal-contact">{company.contact}</Typography>
        </div>
      </Box>
    </Modal>
  );
}
