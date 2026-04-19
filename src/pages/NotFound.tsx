
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Страница не найдена - MebelCity"
        description="Запрашиваемая страница не найдена. Вернитесь на главную страницу MebelCity - ведущего производителя мебели в Узбекистане."
        noindex={true}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-navy mb-6">404</h1>
            <p className="text-xl md:text-2xl font-medium text-navy-dark mb-4">Страница не найдена</p>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Извините, запрашиваемая страница не существует или была перемещена.
            </p>
            <Button size="lg" className="bg-wood hover:bg-wood-dark text-white" asChild>
              <a href="/">
                <ArrowLeft size={20} className="mr-2" />
                Вернуться на главную
              </a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
