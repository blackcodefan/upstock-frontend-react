import PropTypes from 'prop-types';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ file, onLoadSuccess, pageNumber }) => (
  <Document file={file} onLoadSuccess={onLoadSuccess} renderMode="canvas" className="flex-center">
    <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer renderInteractiveForms />
  </Document>
);

PDFViewer.propTypes = {
  file: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  onLoadSuccess: PropTypes.func
};

export default PDFViewer;
