import React, { useState } from "react";
import Header from "../../components/Header";
import UploadZone from "../../components/UploadZone";
import InvoiceForm from "../../components/InvoiceForm";

export const HomePage = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const handleFileUpload = async (file) => {
    setFile(file);
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/invoices/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      const ocrResult = await response.json();
      
      // Save parsed invoice data to MongoDB immediately
      const createResponse = await fetch("http://localhost:5000/api/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ocrResult),
      });

      if (!createResponse.ok) {
        throw new Error("Failed to save invoice record in DB");
      }

      const savedInvoice = await createResponse.json();
      setData(savedInvoice);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading invoice: " + error.message);
    }
  };

  return (
    <>
      {/* HEADER */}
      <Header />
      {/* UPLOAD BILL*/}
      {!data && <UploadZone onUpload={handleFileUpload} />}
      {data && <InvoiceForm file={file} data={data} setData={setData} />}
    </>
  );
};
