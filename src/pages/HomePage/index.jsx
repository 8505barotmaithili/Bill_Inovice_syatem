import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import UploadZone from "../../components/UploadZone";
import InvoiceForm from "../../components/InvoiceForm";
import AllbillPage from "../AllbillPage";

const STORAGE_KEY = "invoices";

function safeParseInvoices(raw) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const HomePage = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const currentInvoiceKey = useMemo(() => {
    if (!data?.invoiceNumber) return null;
    return data.invoiceNumber;
  }, [data]);

  useEffect(() => {
    if (!data?.invoiceNumber) return;

    const raw = localStorage.getItem(STORAGE_KEY);
    const existing = safeParseInvoices(raw);

    const alreadyExists = existing.some(
      (x) => x.invoiceNumber === data.invoiceNumber,
    );
    if (alreadyExists) return;

    const next = {
      id: Date.now(),
      ...data,
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...(existing || []), next]),
    );
  }, [currentInvoiceKey, data]);

  const handleFileUpload = (file) => {
    setFile(file);
    // Fake OCR auto-fill (mock data)
    setTimeout(() => {
      setData({
        invoiceNumber: "INV-2026-001",
        invoiceDate: "2026-06-13",
        clientName: "ABC Pvt Ltd",
        taxableValue: 50000,
        invoiceValue: 59000,
        address: "Surat, Gujarat, India",
      });
    }, 1000);
  };

  return (
    <>
      {/* HEADER */}
      <Header />
      {/* UPLOAD BILL*/}
      {!data && <UploadZone onUpload={handleFileUpload} />}
      {data && <InvoiceForm file={file} data={data} setData={setData} />}
      {/* <AllbillPage /> */}
    </>
  );
};
