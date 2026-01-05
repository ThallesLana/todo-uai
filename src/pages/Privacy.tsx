import PrivacyContent from "@/components/legal/PrivacyContent";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import * as React from "react";

const Privacy = () => {
  React.useEffect(() => {
    document.title = "Política de Privacidade | Todo Uai";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl font-extrabold text-foreground mb-6">Política de Privacidade</h1>
          <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <PrivacyContent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
