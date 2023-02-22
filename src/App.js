import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import PDF from "./PDF";
import NewPdf from "./NewPDF";
function App() {
  return (
    <div className="App">
      <PDFViewer style={{ height: "100vh", width: "99.80%" }}>
        <PDF />
      </PDFViewer>
    </div>
  );
}

export default App;
