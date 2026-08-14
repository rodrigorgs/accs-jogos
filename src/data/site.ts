export type NavItem = { label: string; href: string };
export type Evaluation = { title: string; weight: string; description: string };
export type TimelineItem = { period: string; title: string; description: string };
export type TopicItem = { theme: string; activities: string; phase: string };

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

export const courseTopics: TopicItem[] = [
  { phase: 'Descobrir', theme: 'Jogos, educação e mecanismos', activities: 'Apresentação da ACCS, formação das equipes, fundamentos e sessão de jogos leves.' },
  { phase: 'Descobrir', theme: 'Como explicar um jogo', activities: 'Estratégias para ensinar regras, prática em duplas e relato individual da experiência.' },
  { phase: 'Mediar', theme: 'Jogar e lidar com pessoas', activities: 'Comunicação, mediação de conflitos, neurodiversidade e atividade prática.' },
  { phase: 'Mediar', theme: 'Criar, adaptar e escrever regras', activities: 'Estratégias de adaptação, vocabulário de jogos e princípios de um bom manual.' },
  { phase: 'Investigar', theme: 'Currículo escolar e BNCC', activities: 'Busca de jogos relacionados ao currículo e seleção de conteúdos com potencial pedagógico.' },
  { phase: 'Investigar', theme: 'Playtesting e avaliação da aprendizagem', activities: 'Como testar protótipos, observar decisões e transformar uma partida em evidências para reflexão.' },
  { phase: 'Compartilhar', theme: 'Seminários e experimentação', activities: 'Apresentações sobre mecanismos ou estilos, seguidas de jogos escolhidos pelas equipes.' },
  { phase: 'Produzir', theme: 'Fabricação digital', activities: 'Cartas, tabuleiros, caixas, dados, impressão, corte, modelagem e preparação de arquivos.' },
  { phase: 'Produzir', theme: 'Prototipação dos jogos', activities: 'Produção dos primeiros componentes, testes internos e revisão das regras.' },
  { phase: 'Testar', theme: 'Playtest e ajustes', activities: 'Partidas com os protótipos, registro de problemas e preparação para a experiência em campo.' },
  { phase: 'Testar', theme: 'Aprender com a escola', activities: 'Discussão das sessões realizadas nas escolas e incorporação do feedback recebido.' },
  { phase: 'Refinar', theme: 'Versões finais', activities: 'Ajustes de jogabilidade, adequação pedagógica, acessibilidade e acabamento dos materiais.' },
  { phase: 'Refinar', theme: 'Manuais e preparação do evento', activities: 'Fechamento do pacote print-and-play, testes finais e organização da apresentação pública.' },
  { phase: 'Celebrar', theme: 'Grande sessão de jogos na UFBA', activities: 'Evento aberto à comunidade para jogar, apresentar os projetos e compartilhar aprendizados.' },
];

export const seminarThemes = [
  'Jogos pen & paper', 'Jogos tradicionais', 'Jogos de cartas', 'Jogos cooperativos',
  'Ordem de turno', 'Leilão', 'Movimentação', 'Coleção de conjuntos', 'Blefe',
  'Construção de baralho', 'Controle de área', 'Alocação de trabalhadores',
  'Comunicação limitada', 'Condições de vitória', 'Force sua sorte',
] as const;

export const learningLoop = [
  ['Estudar', 'Conhece fundamentos de jogos, educação e mecanismos.'],
  ['Experimentar', 'Joga diferentes jogos e relata o que sentiu, aprendeu e percebeu.'],
  ['Compartilhar', 'Apresenta um seminário e conduz uma experiência de jogo com a turma.'],
  ['Investigar', 'Identifica na BNCC um conteúdo que poderia ser trabalhado por meio de um jogo.'],
  ['Problematizar', 'Percebe que o jogo existente é longo e que sua temática conversa mais com estudantes dos Estados Unidos.'],
  ['Adaptar', 'Cria uma versão mais curta, contextualizada e adequada ao público da escola.'],
  ['Produzir', 'Escreve o manual, prepara o print-and-play e fabrica os componentes.'],
  ['Testar em campo', 'Leva o jogo à escola, observa as partidas e coleta feedback de estudantes e educadores.'],
  ['Refinar', 'Revê regras, linguagem, duração e materiais com base no que aconteceu.'],
  ['Celebrar', 'Apresenta o jogo final em um grande evento aberto na UFBA.'],
] as const;

export const studentFaqs = [
  ['Todo mundo precisa visitar uma escola?', 'Não. Na atividade extensionista, você pode optar por participar das visitas ou realizar tarefas de apoio ao projeto, combinadas com a equipe docente. Entre as possibilidades estão site, redes sociais, fotografia, organização, documentação e materiais de apoio.'],
  ['As visitas acontecem no sábado, durante a aula?', 'Não necessariamente. As visitas serão realizadas nos dias e horários em que cada escola funciona e recebe seus estudantes. Portanto, podem acontecer durante a semana e fora do horário regular da aula da ACCS. As opções e escalas serão organizadas com antecedência.'],
  ['Como funciona a alternativa de tarefas de apoio?', 'As tarefas serão definidas de acordo com as necessidades do projeto e registradas no Planner. A entrega correspondente será combinada com a equipe docente e vale a mesma parcela da avaliação que as visitas.'],
  ['Preciso saber criar jogos ou usar ferramentas de fabricação?', 'Não. A disciplina não possui pré-requisito. As técnicas serão apresentadas ao longo do semestre, e equipes interdisciplinares permitem que diferentes habilidades se complementem.'],
  ['O jogo precisa ser totalmente original?', 'Não. Você pode partir de um jogo existente e modificar tema, regras, duração, componentes ou forma de participação, desde que explique as escolhas e produza uma versão adequada ao objetivo pedagógico.'],
  ['O cronograma pode mudar?', 'Sim. Visitas dependem do calendário das escolas e atividades de produção podem exigir ajustes. Moodle, Discord e os avisos da equipe docente são as fontes definitivas para datas e entregas.'],
] as const;

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
