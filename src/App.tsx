import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Billing from "./pages/Billing";
import Outages from "./pages/Outages";
import Service from "./pages/Service";
import Messages from "./pages/Messages";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import { PersonaProvider } from "./contexts/PersonaContext";
import AppointmentsFieldwork from "./pages/AppointmentsFieldwork";
import Queues from "./pages/Queues";
import UnifiedInbox from "./pages/UnifiedInbox";
import Cases from "./pages/Cases";
import Customers from "./pages/Customers";
import Broadcasts from "./pages/Broadcasts";
import Knowledge from "./pages/Knowledge";
import Analytics from "./pages/Analytics";
import Admin from "./pages/Admin";
import Workforce from "./pages/Workforce";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PersonaProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/outages" element={<Outages />} />
              <Route path="/service" element={<Service />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/support" element={<Support />} />
              <Route path="/appointments-fieldwork" element={<AppointmentsFieldwork />} />
              <Route path="/queues" element={<Queues />} />
              <Route path="/unified-inbox" element={<UnifiedInbox />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/broadcasts" element={<Broadcasts />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/workforce" element={<Workforce />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </PersonaProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
