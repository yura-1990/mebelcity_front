
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n/context";
import { CartProvider } from "@/contexts/CartContext";
import { HelmetProvider } from "react-helmet-async";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
import Cards from "./pages/Cards";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

// Service Pages
import ServiceOffers from "./pages/services/ServiceOffers";
import ServiceDesign from "./pages/services/ServiceDesign";
import ServiceWarranty from "./pages/services/ServiceWarranty";
import ScrollToTop from "@/components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <CartProvider>
          <HelmetProvider>
            <BrowserRouter>
              <TooltipProvider>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/ofisnaya-mebel" element={<Catalog home={false} />} />
                  <Route path="/ofisnaya-mebel/:category" element={<ProductCategory />} />
                  <Route path="/ofisnaya-mebel/:category/:type/:slug" element={<ProductDetail />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cards" element={<Cards />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />

                  {/* Service pages */}
                  <Route path="/services/offers" element={<ServiceOffers />} />
                  <Route path="/services/design" element={<ServiceDesign />} />
                  <Route path="/services/warranty" element={<ServiceWarranty />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Toaster />
                <Sonner />
              </TooltipProvider>
            </BrowserRouter>
          </HelmetProvider>
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
