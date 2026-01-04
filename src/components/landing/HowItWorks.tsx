import { LogIn, ListPlus, CheckCheck } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    number: "1",
    title: "Entra rapidim",
    description: "Cadastro simples ou login com Google. Menos de 30 segundos.",
  },
  {
    icon: ListPlus,
    number: "2",
    title: "Cria suas listas",
    description: "Organize por projeto, área da vida ou do jeito que fizer sentido pra você.",
  },
  {
    icon: CheckCheck,
    number: "3",
    title: "Resolve sem stress",
    description: "Marque as tarefas como concluídas e siga o dia leve.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Como funciona?
          </h2>
          <p className="text-lg text-muted-foreground">
            Três passos e você tá organizando sua vida.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-6 shadow-cta">
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
