import * as React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/assets/todo-uai-logo.svg" alt="Todo Uai" className="h-8 w-8 cursor-pointer" onClick={() => window.location.href = "/"} />
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Feito com ☕ em Minas Gerais. Organizar as tarefas, uai.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos
            </a>
            <a
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
