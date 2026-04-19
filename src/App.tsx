
import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n/context";
import { CartProvider } from "@/contexts/CartContext";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop.tsx";
import PageLoader from "@/components/PageLoader";

// Lazy-loaded Pages
const Index = React.lazy(() => import('./pages/Index'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const About = React.lazy(() => import('./pages/About'));
const Catalog = React.lazy(() => import('./pages/Catalog'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ProductCategory = React.lazy(() => import('./pages/ProductCategory'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Cards = React.lazy(() => import('./pages/Cards'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Checkout = React.lazy(() => import('./pages/Checkout'));

// Lazy-loaded Service Pages
const ServiceOffers = React.lazy(() => import('./pages/services/ServiceOffers'));
const ServiceDesign = React.lazy(() => import('./pages/services/ServiceDesign'));
const ServiceWarranty = React.lazy(() => import('./pages/services/ServiceWarranty'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <CartProvider>
          <HelmetProvider>
            <BrowserRouter
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
              }}
            >
              <TooltipProvider>
                <ScrollToTop />
                <Suspense fallback={<PageLoader />}>
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
                </Suspense>
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

