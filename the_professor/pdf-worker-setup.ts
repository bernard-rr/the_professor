// Import necessary modules
import { pdfjs } from 'react-pdf';

// Configure the worker source
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();
                                                                                                                                                                      