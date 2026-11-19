import heroResidencia from '@/src/assets/images/hero_residencia_autoral_1795090871781.jpg';
import casaHorizonte from '@/src/assets/images/projeto_casa_horizon_1795090873564.jpg';
import sedeAtlantica from '@/src/assets/images/projeto_sede_nautica_1795090873089.jpg';
import galeriaJardins from '@/src/assets/images/projeto_atelier_jardins_1795090873202.jpg';
import patioSerena from '@/src/assets/images/projeto_vila_serena_1795090872836.jpg';
import estudioArquiteto from '@/src/assets/images/sobre_estudio_arquiteto_1795090874993.jpg';
import type {
  ArchitecturalProject,
  CreativeProcessStep,
  StudioMetric,
} from '@/src/types';

export const STUDIO_CONTACT = {
  brandName: 'Jhow Arquitetura',
  address: 'SEU ENDEREÇO AQUI',
  phoneDisplay: '(00) 00000-0000',
  phoneHref: 'tel:+5500000000000',
  whatsappHref:
    'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20um%20projeto%20com%20a%20Jhow%20Arquitetura.',
  hours: 'Não informado',
};

export const HERO_PROJECT = {
  image: heroResidencia,
  alt: 'Pavilhão Brisa e Pedra projetado por Jhow Arquitetura ao entardecer, com volume em concreto aparente, brises de madeira natural e espelho d’água refletindo a iluminação interna',
  title: 'Pavilhão Brisa & Pedra',
  meta: 'Residencial · 2025 · 640 m²',
  projectId: 'pavilhao-brisa-pedra',
};

export const STUDIO_IMAGE = {
  src: estudioArquiteto,
  alt: 'Mesa de trabalho do estúdio Jhow Arquitetura com maquete física em escala, pranchas técnicas enroladas, amostras de pedras naturais e luz lateral de janela',
};

export const STUDIO_METRICS: StudioMetric[] = [
  {
    id: 'anos',
    value: 14,
    suffix: '+',
    label: 'Anos de prática autoral',
    detail: 'Atuação contínua em arquitetura e design espacial',
  },
  {
    id: 'obras',
    value: 48,
    suffix: '',
    label: 'Obras executadas',
    detail: 'Residências unifamiliares, sedes corporativas e galerias',
  },
  {
    id: 'area',
    value: 18400,
    suffix: ' m²',
    label: 'Área projetada',
    detail: 'Planejamento integral do partido ao detalhamento final',
  },
  {
    id: 'direcao',
    value: 100,
    suffix: '%',
    label: 'Direção autoral em obra',
    detail: 'Rigor construtivo em cada encontro de matéria',
  },
];

export const ARCHITECTURAL_PROJECTS: ArchitecturalProject[] = [
  {
    id: 'casa-horizonte',
    title: 'Casa Horizonte',
    category: 'Residencial',
    year: '2025',
    area: '780 m²',
    location: 'Serra da Mantiqueira',
    summary:
      'Balanço estrutural em concreto e travertino romano desenhado para suspender a área social sobre a mata atlântica.',
    concept:
      'Implantada na cota mais elevada da encosta, a residência adota dois prismas horizontais ortogonais que enquadram a linha do horizonte sem interferir na topografia original. A lâmina d’água atua como regulador térmico passivo e extensão visual do estar.',
    materials: [
      'Concreto aparente moldado in loco',
      'Travertino bruto paginado',
      'Caixilhos minimalistas em alumínio anodizado',
    ],
    coverImage: casaHorizonte,
    coverAlt:
      'Residência contemporânea Casa Horizonte com grande balanço estrutural em concreto e travertino sobre piscina de borda infinita diante de montanhas arborizadas',
    featured: true,
    gallery: [
      {
        src: casaHorizonte,
        alt: 'Vista externa da Casa Horizonte com balanço em concreto e piscina de borda infinita',
        caption: 'Fachada voltada ao vale com varanda coberta e espelho d’água contínuo',
      },
      {
        src: galeriaJardins,
        alt: 'Sala de estar integrada com pé-direito duplo e mobiliário em madeira escura',
        caption: 'Estar principal com iluminação linear embutida e controle acústico natural',
      },
      {
        src: patioSerena,
        alt: 'Pátio interno em pedra natural com pergolado e iluminação zenital',
        caption: 'Pátio de transição térmica entre a ala social e o núcleo íntimo',
      },
    ],
  },
  {
    id: 'pavilhao-brisa-pedra',
    title: 'Pavilhão Brisa & Pedra',
    category: 'Residencial',
    year: '2025',
    area: '640 m²',
    location: 'Litoral Norte',
    summary:
      'Volume superior protegido por brises de cumaru repousa sobre base envidraçada e muro de pedra seca.',
    concept:
      'O programa divide-se em dois estratos claros: o pavimento térreo permeável, onde o estar se abre integralmente para o espelho d’água, e o bloco superior protegido por ripado de madeira certificada que filtra a insolação intensa do poente.',
    materials: [
      'Concreto armado aparente',
      'Brises verticais em madeira cumaru',
      'Alvenaria estrutural em pedra moledo',
    ],
    coverImage: heroResidencia,
    coverAlt:
      'Pavilhão Brisa e Pedra ao anoitecer com bloco superior em concreto e madeira sobre térreo envidraçado refletido na piscina',
    gallery: [
      {
        src: heroResidencia,
        alt: 'Perspectiva noturna do Pavilhão Brisa e Pedra refletido no espelho d’água',
        caption: 'Reflexo noturno da galeria térrea sob o prisma protegido por brises móveis',
      },
      {
        src: casaHorizonte,
        alt: 'Detalhe de cobertura plana e integração com paisagismo tropical',
        caption: 'Relação direta entre a plataforma de pedra natural e o entorno preservado',
      },
    ],
  },
  {
    id: 'sede-atlantica',
    title: 'Edifício Sede Atlântica',
    category: 'Comercial',
    year: '2024',
    area: '4.200 m²',
    location: 'Distrito Corporativo',
    summary:
      'Exoesqueleto metálico em preto fosco e pele de vidro azul-marinho para uma instituição financeira de porte nacional.',
    concept:
      'O edifício propõe uma praça pública rebaixada em calcário português no pavimento térreo, suavizando a transição entre a via urbana e o saguão corporativo. A modulação rigorosa da estrutura externa libera vãos internos sem pilares intermediários.',
    materials: [
      'Aço estrutural com pintura eletrostática fosca',
      'Vidro duplo de controle solar tom marinho',
      'Embasamento em calcário apicoado',
    ],
    coverImage: sedeAtlantica,
    coverAlt:
      'Fachada corporativa do Edifício Sede Atlântica com grelha estrutural metálica escura, vidro azul-marinho e praça pública iluminada ao entardecer',
    gallery: [
      {
        src: sedeAtlantica,
        alt: 'Esquina do Edifício Sede Atlântica com praça de acesso em pedra clara',
        caption: 'Grelha estrutural modular e embasamento monumental iluminado',
      },
      {
        src: galeriaJardins,
        alt: 'Interior corporativo de pé-direito duplo com revestimento mineral',
        caption: 'Área de recepção institucional com linguagem mineral e acústica controlada',
      },
    ],
  },
  {
    id: 'galeria-jardins',
    title: 'Galeria Jardins',
    category: 'Interiores',
    year: '2025',
    area: '390 m²',
    location: 'Jardins · São Paulo',
    summary:
      'Pé-direito duplo de proporções silenciosas, com piso em calcário levigado, nogueira americana e luz difusa.',
    concept:
      'Concebido como uma galeria habitável para colecionadores de arte contemporânea, o projeto elimina ornamentos supérfluos para valorizar a incidência de luz natural filtrada por linho cru e o diálogo entre madeira esculpida e concreto aparente.',
    materials: [
      'Calcário português levigado',
      'Marcenaria autoral em nogueira',
      'Linho belga e iluminação linear de baixo ofuscamento',
    ],
    coverImage: galeriaJardins,
    coverAlt:
      'Interior minimalista da Galeria Jardins com pé-direito duplo, sofá escuro em madeira, piso claro e grandes janelas com cortinas de linho',
    gallery: [
      {
        src: galeriaJardins,
        alt: 'Estar com pé-direito duplo e escada monolítica ao fundo',
        caption: 'Eixo de circulação vertical em concreto e mobiliário desenhado sob medida',
      },
      {
        src: estudioArquiteto,
        alt: 'Estudo de texturas e materiais naturais no estúdio',
        caption: 'Composição tátil de pedras naturais e madeiras selecionadas na fase de curadoria',
      },
    ],
  },
  {
    id: 'patio-serena',
    title: 'Pátio Serena',
    category: 'Residencial',
    year: '2024',
    area: '520 m²',
    location: 'Interior Paulista',
    summary:
      'Arquitetura introspectiva organizada ao redor de um claustro contemporâneo com pergolado e espelho d’água.',
    concept:
      'Diante de um lote urbano denso, a casa volta-se para dentro por meio de um pátio central protegido por muros de pedra talhada. O desenho das vigas do pergolado projeta uma trama geométrica mutável sobre o piso ao longo do dia.',
    materials: [
      'Blocos monolíticos de pedra talhada',
      'Pergolado misto de aço e madeira tratada',
      'Piso drenante em basalto escovado',
    ],
    coverImage: patioSerena,
    coverAlt:
      'Pátio interno da residência Pátio Serena com paredes de pedra rústica, pergolado desenhando sombras geométricas e árvore escultórica sobre espelho d’água',
    gallery: [
      {
        src: patioSerena,
        alt: 'Claustro central com espelho d’água e sombras do pergolado',
        caption: 'Modulação solar projetada pelo pergolado sobre o pátio de contemplação',
      },
      {
        src: heroResidencia,
        alt: 'Continuidade espacial entre galeria interna e lâmina d’água',
        caption: 'Transição contínua entre o estar social e a superfície aquática',
      },
    ],
  },
];

export const CREATIVE_PROCESS_STEPS: CreativeProcessStep[] = [
  {
    number: '01.',
    title: 'Imersão & Programa',
    description:
      'Leitura minuciosa do terreno, orientação solar, ventos dominantes, restrições legais e hábitos cotidianos de quem habitará o espaço.',
    deliverable: 'Estudo de viabilidade e programa de necessidades',
  },
  {
    number: '02.',
    title: 'Partido Arquitetônico',
    description:
      'Definição volumétrica por meio de maquetes físicas e digitais, estabelecendo proporções, fluxos, visuais estratégicas e seleção matérica.',
    deliverable: 'Anteprojeto volumétrico e caderno de materialidade',
  },
  {
    number: '03.',
    title: 'Detalhamento Executivo',
    description:
      'Compatibilização integral entre estrutura, instalações, luminotécnica, esquadrias e marcenaria de precisão milimétrica.',
    deliverable: 'Pranchas executivas e caderno completo de especificações',
  },
  {
    number: '04.',
    title: 'Direção de Obra',
    description:
      'Acompanhamento técnico periódico junto a engenheiros e artífices para assegurar que cada junta, alinhamento e textura cumpra o projeto original.',
    deliverable: 'Curadoria de execução e entrega técnica final',
  },
];
