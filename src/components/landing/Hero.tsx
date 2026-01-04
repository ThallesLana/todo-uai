import { Button } from "@/components/ui/button";
import { Check, Palette, List } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
              <span className="text-sm font-medium text-muted-foreground">Simples. Direto. Do jeito mineiro.</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Organizar as tarefas nunca foi tão fácil, <span className="text-primary">uai.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              O Todo Uai é um gerenciador de tarefas simples, moderno e sem enrolação. Do jeitim mineiro de fazer as coisas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" variant="hero">
                <a
                  href="https://app.todo-uai.thalles-lana.dev/register"
                >
                  Começar agora
                </a>
              </Button>
              <Button asChild size="lg" variant="heroOutline">
                <a href="https://app.todo-uai.thalles-lana.dev/login">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Entrar com Google
                </a>
              </Button>
            </div>
          </div>

          {/* Right content - App mockup */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative bg-card rounded-2xl shadow-elevated border border-border p-6 animate-float">
              {/* App header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
                <span className="text-xs text-muted-foreground">Todo Uai</span>
              </div>
              
              {/* Task lists */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                  <List className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Trabalho</span>
                  <span className="ml-auto text-xs text-muted-foreground">4 tarefas</span>
                </div>
                
                {/* Tasks */}
                <div className="space-y-2 ml-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <div className="w-5 h-5 rounded border-2 border-primary" />
                    <span className="text-foreground">Revisar relatório mensal</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border-l-4 border-success">
                    <div className="w-5 h-5 rounded bg-success flex items-center justify-center">
                      <Check className="w-3 h-3 text-success-foreground" />
                    </div>
                    <span className="text-muted-foreground line-through">Enviar proposta</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border-l-4 border-accent">
                    <div className="w-5 h-5 rounded border-2 border-muted-foreground/30" />
                    <span className="text-foreground">Agendar reunião</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                  <Palette className="w-5 h-5 text-success" />
                  <span className="font-medium text-foreground">Pessoal</span>
                  <span className="ml-auto text-xs text-muted-foreground">2 tarefas</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-success/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
