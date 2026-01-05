import logo from "@/assets/todo-uai-logo.svg";
import * as React from "react";
import LegalModal from "@/components/LegalModal";
import PrivacyContent from "@/components/legal/PrivacyContent";
import TermsContent from "@/components/legal/TermsContent";

const Footer = () => {
  const [openModal, setOpenModal] = React.useState<"terms" | "privacy" | null>(null);

  const closeModal = () => setOpenModal(null);

  const syncFromHash = React.useCallback(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash === "#terms") {
      setOpenModal("terms");
      return;
    }
    if (hash === "#privacy") {
      setOpenModal("privacy");
      return;
    }
    setOpenModal(null);
  }, []);

  const setHash = React.useCallback((hash: "#terms" | "#privacy" | "") => {
    const url = `${window.location.pathname}${window.location.search}${hash}`;
    window.history.replaceState(null, "", url);
  }, []);

  React.useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  React.useEffect(() => {
    if (openModal === "terms") setHash("#terms");
    else if (openModal === "privacy") setHash("#privacy");
    else if (window.location.hash === "#terms" || window.location.hash === "#privacy") setHash("");
  }, [openModal, setHash]);

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Todo Uai" className="h-8 w-8 cursor-pointer" onClick={() => window.location.href = "/"} />
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Feito com ☕ em Minas Gerais. Organizar as tarefas, uai.
          </p>
          
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpenModal("terms")}
            >
              Termos
            </button>
            <button
              type="button"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpenModal("privacy")}
            >
              Privacidade
            </button>
          </div>
        </div>
      </div>

      <LegalModal open={openModal === "terms"} title="Termos de Uso" onClose={closeModal}>
        <TermsContent />
      </LegalModal>

      <LegalModal open={openModal === "privacy"} title="Política de Privacidade" onClose={closeModal}>
        <PrivacyContent />
      </LegalModal>
    </footer>
  );
};

export default Footer;
