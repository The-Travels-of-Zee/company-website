"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FileText, Download, Zap } from "lucide-react";
import Link from "next/link";

// PDF worker config - Updated to use the correct CDN path
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    setError(error);
    setLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  };

  return (
    <section className="py-20 mt-10 relative overflow-hidden min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-500/30">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              AI-Powered PDF Document
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-relaxed">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pricing Overview PDF
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore detailed engineer rates and roles, visualized through an embedded document viewer.
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/40 shadow-xl">
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
              <p className="text-slate-400 mt-4">Loading PDF...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <FileText className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <p className="text-red-400">Failed to load PDF. Please check the file path.</p>
              <p className="text-slate-500 text-sm mt-2">Error: {error.message}</p>
            </div>
          )}

          <Document
            file="/pdfs/pricing-version-1.0.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading=""
            error=""
            className="flex justify-center"
          >
            {!loading && !error && (
              <div className="w-full">
                <Page
                  pageNumber={pageNumber}
                  className="shadow-lg mx-auto"
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  width={Math.min(800, window?.innerWidth * 0.8)}
                />

                {/* Navigation Controls */}
                {numPages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      onClick={goToPrevPage}
                      disabled={pageNumber <= 1}
                      className="px-4 py-2 bg-slate-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
                    >
                      Previous
                    </button>

                    <span className="text-slate-300">
                      Page {pageNumber} of {numPages}
                    </span>

                    <button
                      onClick={goToNextPage}
                      disabled={pageNumber >= numPages}
                      className="px-4 py-2 bg-slate-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            )}
          </Document>
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Link href="/pdfs/pricing-version-1.0.pdf" download>
            <button className="group font-poppins font-semibold text-lg border-2 border-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl hover:from-cyan-600 hover:to-blue-700 duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
              <span className="relative flex items-center justify-center gap-2">
                <Download className="w-5 h-5 group-hover:translate-y-[1px] transition-transform" />
                Download PDF
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PdfViewer;
