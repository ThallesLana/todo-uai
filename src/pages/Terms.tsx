import TermsContent from "@/components/legal/TermsContent";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import * as React from "react";

const Terms = () => {
  React.useEffect(() => {
    document.title = "Termos de Uso | Todo Uai";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl font-extrabold text-foreground mb-6">Termos de Uso</h1>
          <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <TermsContent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
