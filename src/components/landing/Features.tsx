import { User, FolderKanban, ClipboardCheck, Palette, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: User,
    title: "Login fácil",
    description: "Cadastro rápido, login tradicional e login com Google.",
  },
  {
    icon: FolderKanban,
    title: "Listas do seu jeito",
    description: "Crie listas personalizadas pra trabalho, estudo ou vida pessoal.",
  },
  {
    icon: ClipboardCheck,
    title: "Tarefas sem complicação",
    description: "Criou, marcou, resolveu. Um clique e pronto.",
  },
  {
    icon: Palette,
    title: "Cores pra organizar melhor",
    description: "Cada lista pode ter sua cor personalizada.",
  },
  {
    icon: CheckCircle2,
    title: "Feito é feito",
    description: "Marque como concluído e siga o dia, uai.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-card/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tudo que você precisa, <span className="text-primary">nada que não precisa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O Todo Uai foi feito pra resolver, não pra complicar. Cada função tem um propósito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:flex lg:flex-wrap lg:justify-center">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-background rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 lg:w-80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
