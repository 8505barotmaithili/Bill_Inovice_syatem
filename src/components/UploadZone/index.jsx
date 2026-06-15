import React from "react";
import { useDropzone } from "react-dropzone";
import { Icons } from "../../constant/icons";

export default function UploadZone({ onUpload }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
      "application/pdf": [],
    },
    onDrop: (files) => {
      onUpload(files[0]);
    },
  });

  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center p-6 container">
      <div className="w-full max-w-[520px] animate-fade-in-up rounded-2">
        {/* Card wrapper */}
        <div className="bg-white rounded-xl shadow-xl shadow-gray-200/60 border border-gray-100  overflow-hidden">
          {/* Top decorative band */}
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500" />

          <div className="p-[30px]">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-500"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>

            <h2 className="text-xl font-bold text-gray-900 text-center mb-2">
              Upload Invoice
            </h2>
            <p className="text-sm text-gray-500 text-center mb-7 max-w-[300px] mx-auto leading-relaxed">
              Drop your invoice image or document to auto-extract details
            </p>

            {/* Drop zone */}
            <div
              {...getRootProps()}
              className={`
                relative rounded-xl border-2 border-dashed transition-all duration-300 cursor-pointer
                ${
                  isDragActive
                    ? "border-indigo-400 bg-indigo-50/50 scale-[1.02]"
                    : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50/50"
                }
              `}
            >
              <input {...getInputProps()} />

              <div className="flex flex-col items-center justify-center py-10 px-6">
                {isDragActive ? (
                  <>
                    <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-indigo-600"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </div>
                    <p className="text-indigo-600 font-bold text-lg">
                      Drop your file here...
                    </p>
                    <p className="text-indigo-400 text-sm mt-1">
                      Release to upload
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      >
                        <path d="M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-semibold text-base">
                      Drag & drop your invoice
                    </p>
                    <p className="text-gray-400 text-sm mt-1.5">
                      or{" "}
                      <span className="text-indigo-600 font-semibold underline underline-offset-2 decoration-indigo-200">
                        browse files
                      </span>
                    </p>
                    <div className="mt-5 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[11px] font-medium text-gray-500">
                        PNG
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[11px] font-medium text-gray-500">
                        JPG
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[11px] font-medium text-gray-500">
                        PDF
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400">
                Your file is uploaded to the secure server for invoice details extraction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
