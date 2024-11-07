import React from 'react'

type Props = {pdf_url: string}

const PDFViewer = ({ pdf_url }: Props) => {
  return (
    <iframe 
    src={`https://docs.google.com/gview?url=${pdf_url}&embedded=true`} 
    className="w-full h-full"
    ></iframe>
  )
}

export default PDFViewer



// 'use client'; // Ensures that this code only runs on the client side

// import { useEffect, useRef } from 'react';
// import * as pdfjsLib from 'pdfjs-dist';

// interface PDFViewerProps {
//   file: string;
// }

// const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     // Set up the worker for PDF.js (only on the client side)
//     if (typeof window !== 'undefined') {
//       pdfjsLib.GlobalWorkerOptions.workerSrc =
//         'https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js'; // CDN URL for the PDF.js worker
//     }

//     const loadPdf = async () => {
//       try {
//         // Load the PDF document
//         const pdf = await pdfjsLib.getDocument(file).promise;
//         const page = await pdf.getPage(1); // Get the first page of the PDF
//         const viewport = page.getViewport({ scale: 1 });

//         const canvas = canvasRef.current;
//         if (canvas) {
//           const context = canvas.getContext('2d');
//           if (context) {
//             canvas.height = viewport.height;
//             canvas.width = viewport.width;
//             // Render the PDF page to the canvas
//             await page.render({ canvasContext: context, viewport }).promise;
//           }
//         }
//       } catch (error) {
//         console.error('Error loading PDF:', error);
//       }
//     };

//     loadPdf(); // Load the PDF once the component is mounted

//   }, [file]); // Re-run if the file prop changes

//   return <canvas ref={canvasRef} />;
// };

// export default PDFViewer;
