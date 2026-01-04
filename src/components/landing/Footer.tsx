import logo from "@/assets/todo-uai-logo.svg";
import * as React from "react";
import LegalModal from "@/components/LegalModal";

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
        <h4>1. Aceite</h4>
        <p>
          Ao acessar e utilizar o Todo Uai ("Serviço"), você concorda com estes Termos de Uso. Se você não concordar,
          não utilize o Serviço.
        </p>
        <h4>2. Uso do Serviço</h4>
        <p>
          Você concorda em utilizar o Serviço de forma lícita, sem tentar interromper, explorar vulnerabilidades ou
          acessar áreas não autorizadas.
        </p>
        <h4>3. Conteúdo e dados</h4>
        <p>
          Você é responsável pelas informações que inserir no Serviço (ex.: tarefas e listas). Não publique conteúdo
          ilegal ou que viole direitos de terceiros.
        </p>
        <h4>4. Disponibilidade</h4>
        <p>
          O Serviço pode sofrer interrupções para manutenção, atualizações ou por fatores externos. Não garantimos
          disponibilidade ininterrupta.
        </p>
        <h4>5. Alterações</h4>
        <p>
          Podemos atualizar estes Termos periodicamente. Ao continuar usando o Serviço após mudanças, você concorda com
          a versão atualizada.
        </p>
        <h4>6. Contato</h4>
        <p>
          Para dúvidas, entre em contato pelos canais informados no aplicativo/site.
        </p>
      </LegalModal>

      <LegalModal open={openModal === "privacy"} title="Política de Privacidade" onClose={closeModal}>
        <h4>1. Dados coletados</h4>
        <p>
          Podemos coletar dados fornecidos por você (ex.: nome, e-mail, tarefas) e dados técnicos (ex.: navegador,
          endereço IP, logs) para operar e melhorar o Serviço.
        </p>
        <h4>2. Uso dos dados</h4>
        <p>
          Utilizamos os dados para fornecer funcionalidades, suporte, segurança, prevenção de fraudes e melhorias.
        </p>
        <h4>3. Compartilhamento</h4>
        <p>
          Não vendemos seus dados. Podemos compartilhar informações com provedores de infraestrutura e serviços (quando
          necessário) e em cumprimento de obrigações legais.
        </p>
        <h4>4. Cookies e tecnologias similares</h4>
        <p>
          Podemos usar cookies/armazenamento local para preferências e funcionamento básico. Você pode gerenciar
          configurações no seu navegador.
        </p>
        <h4>5. Segurança</h4>
        <p>
          Adotamos medidas razoáveis para proteger seus dados, mas nenhum sistema é 100% seguro.
        </p>
        <h4>6. Seus direitos</h4>
        <p>
          Você pode solicitar acesso, correção ou exclusão de dados, quando aplicável, conforme a legislação.
        </p>
      </LegalModal>
    </footer>
  );
};

export default Footer;
