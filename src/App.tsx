import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KalimasPage from "./pages/KalimasPage";
import NamazPage from "./pages/NamazPage";
import SurahsPage from "./pages/SurahsPage";
import DuasPage from "./pages/DuasPage";
import HadithPage from "./pages/HadithPage";
import MannersPage from "./pages/MannersPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kalimas" element={<KalimasPage />} />
          <Route path="/namaz" element={<NamazPage />} />
          <Route path="/surahs" element={<SurahsPage />} />
          <Route path="/duas" element={<DuasPage />} />
          <Route path="/hadith" element={<HadithPage />} />
          <Route path="/manners" element={<MannersPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
