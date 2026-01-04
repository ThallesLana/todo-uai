import { X, Check, ArrowDown } from "lucide-react";

const reasons = [
  { bad: "Bagunça", good: "Organização clara" },
  { bad: "Menu confuso", good: "Navegação intuitiva" },
  { bad: "Frescura", good: "Direto ao ponto" },
  { bad: "Complicação", good: "Simplicidade" },
];

const WhyUse = () => {
  return (
    <section id="why-use" className="py-24 px-4 bg-card/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Por que usar o <span className="text-primary">Todo Uai</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Só o que importa pra organizar o dia, uai.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 gap-4 mx-auto max-w-fit lg:grid-cols-2 lg:max-w-4xl">
          {reasons.map((reason) => (
            <div
              key={reason.good}
              className="flex flex-row items-center gap-4 p-4 bg-background rounded-xl border border-border max-[575px]:flex-col max-[575px]:items-stretch max-[575px]:gap-3"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="line-through">{reason.bad}</span>
              </div>

              <div className="hidden max-[575px]:flex max-[575px]:justify-center">
                <ArrowDown className="w-4 h-4 text-muted-foreground" />
              </div>

              <span className="text-muted-foreground max-[575px]:hidden">→</span>
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <span className="font-medium">{reason.good}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-background rounded-2xl border border-border shadow-card text-center max-w-xl mx-auto">
          <p className="text-lg text-muted-foreground italic mb-2">
            "Gerenciador de tarefas bom é igual café mineiro:"
          </p>
          <p className="text-xl font-semibold text-foreground">
            Forte, simples e te dá energia pro dia todo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUse;
