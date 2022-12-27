import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import file from './Resume.pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './Resume.css';
function Resume() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className="App">
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page height = "700" width="900" pageNumber={pageNumber} />
            </Document>
        </div>
    );
}
export default Resume;