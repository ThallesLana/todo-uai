import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-3">
          <img src="/assets/todo-uai-logo.svg" alt="Todo Uai" className="h-8 w-8 cursor-pointer" onClick={() => window.location.href = "/"} />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Como funciona
          </a>
          <a href="#why-use" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Por que usar
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
            <a href="https://app.todo-uai.thalles-lana.dev/login">Entrar</a>
          </Button>
          <Button asChild size="sm">
            <a
              href="https://app.todo-uai.thalles-lana.dev/register"
            >
              Começar agora
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
