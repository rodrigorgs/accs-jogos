export type NavItem = { label: string; href: string };
export type Evaluation = { title: string; weight: string; description: string };
export type TimelineItem = { period: string; title: string; description: string };

export const site = {
  name: 'ACCS Jogos na Educação Básica',
  shortName: 'ACCS Jogos',
  institution: 'UFBA · Instituto de Computação',
  description:
    'Universidade e comunidades escolares criando, experimentando e aprimorando jogos para a Educação Básica.',
  email: 'rodrigorgs@ufba.br',
  semester: '2026.2',
} as const;

export const nav: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Estudantes UFBA', href: '/estudantes' },
  { label: 'Comunidade escolar', href: '/comunidade' },
];

export const course = {
  workload: '60 horas',
  dates: '29 de agosto a 5 de dezembro',
  day: 'Sábados',
  time: '8h50 às 12h30',
  place: 'Smart Class I, Instituto de Computação',
  campus: 'Campus de Ondina',
  prerequisite: 'Sem pré-requisito',
  teachers: ['Rodrigo Rocha', 'Diego Zabot', 'Cláudia Gama'],
} as const;

export const evaluations: Evaluation[] = [
  {
    title: 'Seminário em grupo',
    weight: '2,0',
    description: 'Análise de mecanismos ou estilos de jogo, com exemplos para a turma experimentar.',
  },
  {
    title: 'Relatos de experiência',
    weight: '1,5',
    description: 'Registros individuais sobre jogos e atividades vivenciadas durante o semestre.',
  },
  {
    title: 'Criação de um jogo',
    weight: '4,0',
    description: 'Proposta pedagógica, manual, pacote print-and-play e componentes testáveis.',
  },
  {
    title: 'Visitas ou apoio',
    weight: '2,0',
    description: 'Atuação nas escolas ou em tarefas de suporte combinadas com a equipe docente.',
  },
  {
    title: 'Evento final',
    weight: '0,5',
    description: 'Sessão aberta na UFBA para jogar e compartilhar os projetos produzidos.',
  },
];

export const semesterTimeline: TimelineItem[] = [
  {
    period: 'Agosto',
    title: 'Entrar no jogo',
    description: 'Fundamentos de jogos e educação, formação das equipes e primeira sessão de jogos.',
  },
  {
    period: 'Setembro',
    title: 'Aprender a mediar',
    description: 'Explicação de regras, convivência, neurodiversidade, BNCC, playtesting e seminários.',
  },
  {
    period: 'Outubro',
    title: 'Criar e prototipar',
    description: 'Adaptação de jogos, fabricação digital, produção de componentes e testes internos.',
  },
  {
    period: 'Novembro',
    title: 'Jogar com as escolas',
    description: 'Sessões em campo, observação, coleta de feedback e refinamento das versões finais.',
  },
  {
    period: 'Dezembro',
    title: 'Compartilhar',
    description: 'Evento aberto na UFBA e fechamento da experiência extensionista.',
  },
];

export const tools = [
  { label: 'Moodle', href: 'https://ava.ufba.br/', note: 'Entregas e prazos' },
  { label: 'Microsoft Planner', href: 'https://planner.cloud.microsoft/', note: 'Tarefas de apoio' },
  { label: 'Discord', href: '#', note: 'Comunicação da turma — acesso pelos canais internos' },
  { label: 'BNCC', href: 'http://basenacionalcomum.mec.gov.br/', note: 'Referência curricular' },
  { label: 'BoardGameGeek', href: 'https://boardgamegeek.com/', note: 'Pesquisa de jogos e mecanismos' },
  { label: 'Ludopedia', href: 'https://ludopedia.com.br/', note: 'Comunidade brasileira de jogos' },
] as const;

export const projectCycle = [
  ['01', 'Dialogar', 'Ouvir estudantes, educadores e gestores.'],
  ['02', 'Criar', 'Adaptar ideias às necessidades e à BNCC.'],
  ['03', 'Jogar', 'Experimentar em um ambiente seguro.'],
  ['04', 'Avaliar', 'Observar estratégias, dúvidas e experiências.'],
  ['05', 'Refinar', 'Transformar feedback em versões melhores.'],
] as const;

export const communityFlow = [
  ['Escuta', 'A equipe da UFBA conversa com a escola para compreender o contexto, os públicos e os conteúdos prioritários.'],
  ['Planejamento', 'A escola define horários, espaços e a forma de participação, sempre com acompanhamento de educadores.'],
  ['Criação', 'Estudantes universitários adaptam e produzem jogos e materiais no Instituto de Computação.'],
  ['Sessões', 'Monitores apresentam os jogos, explicam regras e acompanham as mesas junto à equipe escolar.'],
  ['Devolutiva', 'As observações orientam melhorias; a escola recebe registros, jogos, manuais e orientações pedagógicas.'],
] as const;

export const faqs = [
  ['A parceria tem custo para a escola?', 'Não. As atividades da ACCS e os materiais previstos no projeto são oferecidos sem cobrança à comunidade escolar.'],
  ['Quais etapas da Educação Básica são atendidas?', 'O projeto foi planejado para os anos iniciais e finais do Ensino Fundamental e para o Ensino Médio. Cada atividade é ajustada ao grupo participante.'],
  ['Os professores da escola participam?', 'Sim. Educadores acompanham o planejamento e as sessões, ajudam a contextualizar as necessidades e participam da reflexão com os estudantes.'],
  ['Como a neurodiversidade é considerada?', 'A equipe busca oferecer formas variadas de participação, observar diferentes ritmos e evitar que uma única maneira de jogar ou aprender seja tratada como padrão.'],
  ['Quanto dura uma sessão?', 'A duração e a organização são combinadas com cada escola. Como referência, as visitas do projeto preveem sessões de aproximadamente duas horas.'],
  ['Que tipo de registro é feito?', 'Os monitores registram observações pedagógicas sobre a experiência de jogo. Qualquer uso de imagens ou dados pessoais depende das autorizações e regras da escola.'],
  ['O que acontece com os jogos?', 'Depois dos testes e ajustes, a proposta é entregar materiais às escolas e disponibilizar versões finais e orientações gratuitamente online.'],
] as const;
