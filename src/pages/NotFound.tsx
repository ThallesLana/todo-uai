import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <img src="src/assets/404.svg" alt="Not Found" className="w-72 h-72 mb-4 self-center" />
        <p className="text-center mb-5">Uai, encontramo esse trem não, sô!</p>
        <Button variant="hero" className="text-white" asChild>
          <a href="/">
            Voltar para a Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
