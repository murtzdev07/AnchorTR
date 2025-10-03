import React from "react";
import "./downloads.css";
import { FaDownload } from "react-icons/fa";

function Downloads() {
  // Example files with thumbnails
  const files = [
    {
      name: "Product Catalog",
      path: "/assets/Catalog.pdf",
      thumbnail: "/Cat_thumb.png",
    },
    // {
    //   name: "Company Profile",
    //   path: "/assets/CompanyProfile.pdf",
    //   thumbnail: "/assets/thumbnails/CompanyProfile.png",
    // },
  ];

  return (
    <div className="downloads">
      <div className="downloads-container">
        <h1>Downloads</h1>
        <p>Click the buttons below to download our documents:</p>
        <div className="downloads-grid">
          {files.map((file, index) => (
            <div key={index} className="download-card">
              <div className="file-preview">
                <img
                  src={file.thumbnail}
                  alt={file.name}
                  className="file-thumbnail"
                />
              </div>
              <div className="file-info">
                <h3>{file.name}</h3>
                <a href={file.path} download className="download-button">
                  <FaDownload className="download-icon" /> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Downloads;
