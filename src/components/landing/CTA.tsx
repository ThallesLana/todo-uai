import { Button } from "@/components/ui/button";
import logo from "@/assets/todo-uai-logo.svg";

const CTA = () => {
  return (
    <section className="py-24 px-1 md:px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-success/10 border border-border shadow-elevated text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-success/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <img src={logo} alt="Todo Uai" className="w-16 h-16 mx-auto mb-6" />
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Bora organizar esse trem tudo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Comece agora e descubra como é bom ter as coisas no lugar. É grátis, uai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="hero"  className="max-[360px]:flex max-[360px]:items-center max-[360px]:gap-0 max-[360px]:flex-wrap text-base max-[360px]:text-xs">
                <a
                  href="https://app.todo-uai.thalles-lana.dev/register"
                >
                  Criar conta grátis
                </a>
              </Button>
              <Button asChild size="xl" variant="heroOutline" className="max-[360px]:flex max-[360px]:items-center max-[360px]:gap-0 max-[360px]:flex-wrap text-base max-[360px]:text-xs">
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
        </div>
      </div>
    </section>
  );
};

export default CTA;
