export interface ForumPost {
  id: number;
  title: string;
  category: string;
  author: string;
  replies: number;
  status: string;
  /** Classe Tailwind para cor de fundo da badge de categoria */
  colorClass: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const forumPosts: ForumPost[] = [
  {
    id: 1,
    title: "Como posso revalidar meu diploma?",
    category: "EDUCAÇÃO",
    author: "Aisha",
    replies: 2,
    status: "RESOLVIDO",
    colorClass: "bg-primary",
  },
  {
    id: 2,
    title: "Onde tirar o CPF para estrangeiros?",
    category: "DOCUMENTOS",
    author: "Carlos",
    replies: 3,
    status: "RESOLVIDO",
    colorClass: "bg-foreground",
  },
  {
    id: 3,
    title: "Preciso de ajuda com o aluguel sem fiador",
    category: "MORADIA",
    author: "Anônimo",
    replies: 0,
    status: "",
    colorClass: "bg-muted-foreground",
  },
];

export const faqs: FaqItem[] = [
  {
    id: 0,
    question: "Quem pode usar o app?",
    answer:
      "O aplicativo é voltado para imigrantes e refugiados que buscam apoio, acolhimento e oportunidades no Brasil, mas qualquer pessoa disposta a ajudar como voluntário ou mentor também pode se cadastrar e participar da nossa comunidade.",
  },
  {
    id: 1,
    question: "O serviço é gratuito?",
    answer:
      "Sim, todas as funcionalidades básicas do aplicativo são 100% gratuitas para imigrantes e refugiados.",
  },
  {
    id: 2,
    question: "Como agendo uma reunião?",
    answer:
      "Você pode ir na aba de 'Serviços' e escolher um dos especialistas disponíveis para marcar um horário online ou presencial.",
  },
];
