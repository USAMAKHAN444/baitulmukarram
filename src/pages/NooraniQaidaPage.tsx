import { useEffect } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InstituteBrand from "@/components/InstituteBrand";

const PDF_PATH = "/Noorani-Qaida-With-Tajweed-Rules-In-English-Urdu-PDF-File-3-42.pdf";

const NooraniQaidaPage = () => {
  useEffect(() => {
    document.title = "Noorani Qaida — Bait Ul Mukarram";
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_PATH;
    link.download = "Noorani-Qaida-With-Tajweed-Rules-In-English-Urdu.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/80 to-background flex flex-col">
      <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <InstituteBrand variant="header" />
          <Button type="button" variant="outline" size="sm" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-2 sm:px-4 py-4">
        <h1 className="text-lg sm:text-xl font-bold text-center mb-4 text-primary">
          Noorani Qaida — With Tajweed Rules
        </h1>
        <iframe
          title="Noorani Qaida PDF"
          src={PDF_PATH}
          className="w-full rounded-lg border shadow-lg bg-white"
          style={{ height: "calc(100vh - 140px)", minHeight: "480px" }}
        />
      </main>
    </div>
  );
};

export default NooraniQaidaPage;
