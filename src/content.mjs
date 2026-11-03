// matguzzo.com (v2) content. Every translatable field is { en, pt, de, es };
// a missing language falls back to English. Descriptions that carry over from
// v1 are reused from ./content-v1.mjs so the approved wording stays in one place.
// `check: true` = confirm with Guzzo before publishing (printed at build time).
// `images: [{ src, w, h, alt }]` on a page or entry renders a horizontal-scroll row.

import * as v1 from './content-v1.mjs';

const find = (items, title) => {
  const it = items.find((i) => JSON.stringify(i.t).includes(title));
  if (!it) throw new Error(`v1 item not found: ${title}`);
  return it;
};
const roles = v1.work.sections[0].items;
const projects = v1.work.sections[1].items;
const art1 = v1.art.sections[0].items;
const T = (en, pt, de, es) => ({ en, pt, de, es });
const add = (d, extra) => Object.fromEntries(Object.keys(d).map((k) => [k, `${d[k]} ${extra[k] ?? extra.en}`]));

export const site = {
  ...v1.site,
  links: [
    { label: 'X / Twitter', href: 'https://x.com/matguzzo' },
    { label: 'Instagram', href: 'https://www.instagram.com/matguzzo/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@matguzzo' },
    ...v1.site.links,
  ],
};
export const ui = {
  ...v1.ui,
  menu: T('Menu', 'Menu', 'Menü', 'Menú'),
  close: T('Close', 'Fechar', 'Schließen', 'Cerrar'),
  watch: T('Watch on YouTube', 'Assista no YouTube', 'Auf YouTube ansehen', 'Ver en YouTube'),
  back: T('All visual arts projects', 'Todos os projetos de artes visuais', 'Alle Kunstprojekte', 'Todos los proyectos de artes visuales'),
  frame: T('{n} of {total}', '{n} de {total}', '{n} von {total}', '{n} de {total}'),
};

const sectionTitle = (slug) => nav.find((n) => n.slug === slug).label;

export const nav = [
  { slug: 'open-source', label: T('Technology', 'Tecnologia', 'Technologie', 'Tecnología') },
  { slug: 'education', label: T('Education', 'Educação', 'Bildung', 'Educación') },
  { slug: 'visual-arts', label: T('Visual Arts', 'Artes Visuais', 'Bildende Kunst', 'Artes Visuales') },
  { slug: 'research', label: T('Research', 'Pesquisa', 'Forschung', 'Investigación') },
  { slug: 'engagements', label: T('Engagements', 'Participações', 'Auftritte', 'Participaciones') },
  { slug: 'writing', label: T('Blog', 'Blog', 'Blog', 'Blog') },
  { slug: 'whereabouts', label: T('Whereabouts', 'Paradeiro', 'Unterwegs', 'Paradero') },
];

/* ------------------------------------------------------------------ HOME */
// Pictures for the random image on Whereabouts (galleries live on project pages only).
const randomPool = [
  { src: 'assets/disco-ball.webp', w: 720, h: 720, alt: v1.home.image.alt },
  { src: 'assets/collage.webp', w: 1500, h: 1000, alt: T('A collage of paper, diagrams and landscapes.', 'Uma colagem de papéis, diagramas e paisagens.', 'Eine Collage aus Papier, Diagrammen und Landschaften.', 'Un collage de papeles, diagramas y paisajes.') },
];
export const home = {
  imageAlt: T('A faceted silver disco ball with dithered mirror tiles.', 'Um globo espelhado prateado, facetado, com textura pontilhada.', 'Eine facettierte silberne Discokugel mit gerasterten Spiegelkacheln.', 'Una bola de espejos plateada y facetada con textura tramada.'),
  title: T('Mateus Guzzo', 'Mateus Guzzo', 'Mateus Guzzo', 'Mateus Guzzo'),
  lead: T(
    'You have reached the homepage of Brazilian communicator, designer, and technologist Mateus Guzzo.',
    'Você chegou ao site do comunicador, designer e tecnólogo brasileiro Mateus Guzzo.',
    'Sie haben die Website des brasilianischen Kommunikators, Designers und Technologen Mateus Guzzo erreicht.',
    'Has llegado a la página del comunicador, diseñador y tecnólogo brasileño Mateus Guzzo.',
  ),
  body: T(
    ['I work with community architecture, narrative infrastructure, and creative strategy in projects across policy, tech, and academia.'],
    ['Trabalho com arquitetura de comunidades, infraestrutura narrativa e estratégia criativa em projetos entre políticas públicas, tecnologia e academia.'],
    ['Ich arbeite mit Community-Architektur, narrativer Infrastruktur und kreativer Strategie in Projekten zwischen Politik, Technologie und Wissenschaft.'],
    ['Trabajo con arquitectura de comunidades, infraestructura narrativa y estrategia creativa en proyectos entre políticas públicas, tecnología y academia.'],
  ),
};

/* ----------------------------------------------------------- OPEN-SOURCE */
// Adapted from the live guzzo.party draft (practice areas + selected projects).
const pet = find(projects, 'PET Arena');
const ccc = find(projects, 'AI-ready data safeguards');
const roleLine = (en, pt, de, es) => T(en, pt, de, es);
// newest first: by end year, then start year ("2025–26" → 2026, 2025)
const yrs = (y) => { const m = String(typeof y === 'string' ? y : y?.en ?? '').match(/(\d{4})(?:–(\d{2,4}))?/); if (!m) return [0, 0]; const a = +m[1]; const b = m[2] ? +(m[2].length === 2 ? m[1].slice(0, 2) + m[2] : m[2]) : a; return [b, a]; };
const byDate = (items) => [...items].sort((x, y) => { const [xe, xs] = yrs(x.y), [ye, ys] = yrs(y.y); return ye - xe || ys - xs; });

export const openSource = {
  title: sectionTitle('open-source'),
  sections: [
    {
      h: T('Practice areas', 'Áreas de atuação', 'Arbeitsfelder', 'Áreas de práctica'),
      items: [
        { t: T('Impact communications', 'Comunicação de impacto', 'Wirkungskommunikation', 'Comunicación de impacto'), m: T('Campaigns, launches, events, editorial systems, research translation.', 'Campanhas, lançamentos, eventos, sistemas editoriais, tradução de pesquisa.', 'Kampagnen, Launches, Veranstaltungen, redaktionelle Systeme, Wissenschaftsvermittlung.', 'Campañas, lanzamientos, eventos, sistemas editoriales, traducción de investigación.') },
        { t: T('Program and community architecture', 'Arquitetura de programas e comunidades', 'Programm- und Community-Architektur', 'Arquitectura de programas y comunidades'), m: T('Fellowships, onboarding, rituals, rhythm, convenings, knowledge systems.', 'Fellowships, onboarding, rituais, ritmo, encontros, sistemas de conhecimento.', 'Fellowships, Onboarding, Rituale, Rhythmus, Zusammenkünfte, Wissenssysteme.', 'Fellowships, onboarding, rituales, ritmo, encuentros, sistemas de conocimiento.') },
        { t: T('Product and interface strategy', 'Estratégia de produto e interface', 'Produkt- und Interface-Strategie', 'Estrategia de producto e interfaz'), m: T('Websites, tools, prototypes, local social media, digital systems.', 'Sites, ferramentas, protótipos, redes sociais locais, sistemas digitais.', 'Websites, Tools, Prototypen, lokale soziale Medien, digitale Systeme.', 'Sitios web, herramientas, prototipos, redes sociales locales, sistemas digitales.') },
        { t: T('Brand and visual narrative', 'Marca e narrativa visual', 'Marke und visuelle Erzählung', 'Marca y narrativa visual'), m: T('Lab brands, rebrands, naming, positioning, identity, public presence.', 'Marcas de laboratórios, rebrandings, naming, posicionamento, identidade, presença pública.', 'Lab-Marken, Rebrandings, Naming, Positionierung, Identität, öffentlicher Auftritt.', 'Marcas de laboratorios, rebrandings, naming, posicionamiento, identidad, presencia pública.') },
        { t: T('Advocacy and research', 'Advocacy e pesquisa', 'Advocacy und Forschung', 'Incidencia e investigación'), m: T('Policy outreach, public speaking, developer advocacy, academic and cultural work.', 'Relação com formuladores de políticas, falas públicas, developer advocacy, trabalho acadêmico e cultural.', 'Politik-Outreach, öffentliche Vorträge, Developer Advocacy, akademische und kulturelle Arbeit.', 'Relación con responsables políticos, charlas públicas, developer advocacy, trabajo académico y cultural.') },
      ],
    },
    {
      h: T('Selected projects', 'Projetos selecionados', 'Ausgewählte Projekte', 'Proyectos seleccionados'),
      items: byDate([
        { ...find(projects, 'RSM Assembly Fellowship'), check: false, m: roleLine('Program management and design, UX strategy, facilitation · Berkman Klein Center, Harvard', 'Gestão e desenho de programa, estratégia de UX, facilitação · Berkman Klein Center, Harvard', 'Programmmanagement und -design, UX-Strategie, Moderation · Berkman Klein Center, Harvard', 'Gestión y diseño de programa, estrategia de UX, facilitación · Berkman Klein Center, Harvard') },
        { ...pet, href: 'https://www.oblivious.com/blog/advancing-privacy-through-testing-insights-from-the-first-pet-arena-ctf', m: roleLine('Product and program management, co-design · TikTok × Oblivious · official IEEE SaTML 2026 competition', 'Gestão de produto e programa, codesign · TikTok × Oblivious · competição oficial do IEEE SaTML 2026', 'Produkt- und Programmmanagement, Co-Design · TikTok × Oblivious · offizieller Wettbewerb der IEEE SaTML 2026', 'Gestión de producto y programa, codiseño · TikTok × Oblivious · competición oficial de IEEE SaTML 2026') },
        { ...find(projects, 'Acolher'), m: roleLine('Program management and co-design, UX strategy, events lead · Natura &Co, Brazil', 'Gestão de programa e codesign, estratégia de UX, coordenação de eventos · Natura &Co, Brasil', 'Programmmanagement und Co-Design, UX-Strategie, Eventleitung · Natura &Co, Brasilien', 'Gestión de programa y codiseño, estrategia de UX, dirección de eventos · Natura &Co, Brasil') },
        { ...find(roles, 'Edgelands Institute'), m: roleLine('Impact communications, brand strategy, narrative infrastructure · Geneva (remote)', 'Comunicação de impacto, estratégia de marca, infraestrutura narrativa · Genebra (remoto)', 'Wirkungskommunikation, Markenstrategie, narrative Infrastruktur · Genf (remote)', 'Comunicación de impacto, estrategia de marca, infraestructura narrativa · Ginebra (remoto)') },
        { ...find(projects, 'Applied Social Media Lab'), m: roleLine('Program design, community architecture, brand strategy · Berkman Klein Center, Harvard', 'Desenho de programa, arquitetura de comunidade, estratégia de marca · Berkman Klein Center, Harvard', 'Programmdesign, Community-Architektur, Markenstrategie · Berkman Klein Center, Harvard', 'Diseño de programa, arquitectura de comunidad, estrategia de marca · Berkman Klein Center, Harvard') },
        { ...ccc, m: roleLine('Facilitation and program design · Linux Foundation Confidential Computing Consortium', 'Facilitação e desenho de programa · Linux Foundation Confidential Computing Consortium', 'Moderation und Programmdesign · Linux Foundation Confidential Computing Consortium', 'Facilitación y diseño de programa · Linux Foundation Confidential Computing Consortium') },
        { ...find(roles, 'TikTok'), t: T('TikTok open source, AI and privacy portfolio', 'Portfólio de código aberto, IA e privacidade do TikTok', 'TikToks Open-Source-, KI- und Privacy-Portfolio', 'Portafolio de código abierto, IA y privacidad de TikTok'), href: 'https://www.youtube.com/watch?v=yk7qmS8OAYM', m: roleLine('Outreach, public speaking, events management · London', 'Relacionamento externo, falas públicas, gestão de eventos · Londres', 'Outreach, öffentliche Vorträge, Eventmanagement · London', 'Difusión, charlas públicas, gestión de eventos · Londres') },
      ]),
    },
  ],
};

/* ------------------------------------------------------------ VISUAL ARTS */
// = the projects on matguzzo.com. Each has its own page with a sideways gallery.
// Images are hot-linked from matguzzo.com's Cargo CDN for now; self-host them later.
const cargo = (hash, name) => `https://freight.cargo.site/w/1500/q/75/i/${hash}/${name}`;
const twm = find(art1, 'Third World Manager');
export const visualProjects = [
  {
    slug: 'public-audio', y: '2021', t: 'Public Audio',
    m: find(art1, 'Public Audio').m,
    lede: T('An interactive diagram and hypothetical simulation model of the Brazilian public sphere.', 'Um diagrama interativo e modelo hipotético de simulação da esfera pública brasileira.', 'Ein interaktives Diagramm und hypothetisches Simulationsmodell der brasilianischen Öffentlichkeit.', 'Un diagrama interactivo y modelo hipotético de simulación de la esfera pública brasileña.'),
    d: find(art1, 'Public Audio').d,
    links: [{ label: T('Project website', 'Site do projeto', 'Projektwebsite', 'Sitio del proyecto'), href: 'https://excavations.digital/projects/public-audio/' }],
    images: [{ src: cargo('c253f34c645d24ab56265be4f9453a04613ab705534119cba3b0db403043fe35', 'Captura-de-Tela-2022-04-20-as-22.29.31.png'), w: 2912, h: 1614, alt: 'Public Audio interface' }],
  },
  {
    slug: 'third-world-manager', y: '2026', t: twm.t, m: twm.m,
    lede: T(
      'A documentary film that considers media democracy activism and entrepreneurialism in Brazil through the story of Angelo Tupinambá, a community organizer in Belém do Pará who coordinates a web-based radio station called Idade Mídia – Comunicação para Cidadania.',
      'Um filme documental sobre midiativismo pela democratização da comunicação e empreendedorismo no Brasil, a partir da história de Angelo Tupinambá, organizador comunitário em Belém do Pará que coordena a web rádio Idade Mídia – Comunicação para Cidadania.',
      'Ein Dokumentarfilm über Medienaktivismus und Unternehmertum in Brasilien, erzählt an Angelo Tupinambá, einem Community-Organisator in Belém do Pará, der das Webradio Idade Mídia – Comunicação para Cidadania koordiniert.',
      'Un documental sobre el mediactivismo por la democratización de los medios y el emprendimiento en Brasil, a través de Angelo Tupinambá, organizador comunitario en Belém do Pará que coordina la radio web Idade Mídia – Comunicação para Cidadania.',
    ),
    d: twm.d,
    links: [
      { label: ui.watch, href: 'https://www.youtube.com/watch?v=VYCmpsxOgDM' },
      { label: 'Idade Mídia', href: 'https://idademidia.org/' },
    ],
  },
  {
    slug: 'laces-d', y: '2018', t: T('Latin American Centered Speculative Design', 'Design Especulativo Latino-americano (DELA)', 'Latin American Centered Speculative Design', 'Diseño Especulativo Latinoamericano'),
    m: find(art1, 'LACES(D)').m,
    lede: T(
      'An open conference held at the Visual Arts Department of the University of California, San Diego, in April 2018. The conference was composed of a lecture, an expert meeting, and a mediated panel that sought, as a whole, to reflect on speculative design as a practice of knowledge, politics, and art.',
      'Uma intervenção discursiva na forma de uma conferência aberta realizada no Departamento de Artes Visuais da Universidade da Califórnia San Diego em abril de 2018. A conferência foi composta por uma palestra, uma reunião com especialistas e um painel mediado que procurou, como um todo, refletir sobre o design especulativo como área de conhecimento, prática política e artística.',
      'Eine offene Konferenz am Visual Arts Department der University of California, San Diego, im April 2018: ein Vortrag, ein Expert:innentreffen und ein moderiertes Panel über spekulatives Design als Praxis von Wissen, Politik und Kunst.',
      'Una conferencia abierta en el Departamento de Artes Visuales de la Universidad de California, San Diego, en abril de 2018: una conferencia, una reunión de especialistas y un panel moderado sobre el diseño especulativo como práctica de conocimiento, política y arte.',
    ),
    d: T('Conference proceedings available upon request.', 'Anais disponíveis sob pedido.', 'Tagungsband auf Anfrage.', 'Actas disponibles bajo petición.'),
    // image removed until confirmed (unnamed.jpg on matguzzo.com may be the poster)
  },
  {
    slug: 'petit-festival-de-janeiro', y: '2015–16', t: 'Petit Festival de Janeiro',
    m: find(art1, 'Petit Festival de Janeiro').m,
    lede: T(
      'A site-specific arts and music festival with the intention of collectively occupying and transforming a high-class neighbourhood in Campinas, interior of São Paulo in Brazil.',
      'Um festival site-specific de arte e música com a intenção de ocupar e transformar coletivamente um bairro nobre de Campinas, no interior de São Paulo.',
      'Ein ortsspezifisches Kunst- und Musikfestival, das ein wohlhabendes Viertel in Campinas im Bundesstaat São Paulo gemeinsam besetzen und verwandeln wollte.',
      'Un festival site-specific de arte y música con la intención de ocupar y transformar colectivamente un barrio acomodado de Campinas, en el interior de São Paulo.',
    ),
    links: [{ label: T('Aerial images (YouTube)', 'Imagens aéreas (YouTube)', 'Luftaufnahmen (YouTube)', 'Imágenes aéreas (YouTube)'), href: 'https://www.youtube.com/watch?v=Cjq7bJLCcXE' }],
    images: [{ src: cargo('6979ec7e1dbd990afaef755503fca1c26d604794a943d867cdf4b63a24530654', 'Screen-Shot-2018-07-19-at-11.31.02-AM.png'), w: 1214, h: 1710, alt: 'Petit Festival de Janeiro' }],
  },
  {
    slug: 'evento-do-facebook', y: '2014–16', t: '<i>Evento do Facebook</i>',
    m: T('Live expanded cinema · director', 'Cinema expandido ao vivo · direção', 'Live Expanded Cinema · Regie', 'Cine expandido en vivo · dirección'),
    lede: T(
      'A live expanded cinema installation on the use of social media. The film explores an experimental setting of live-action theater and live cinema by conveying live-captured footage with pre-recorded scenes. The audience is brought onto the stage where Alex’s room, a middle-class university student, sits next to a screen. Both spaces coexist in and out of the plot from two points of view: the image produced by a camera held by a cinematographer who explores the scene, and the stage itself.',
      'Uma instalação de cinema expandido ao vivo sobre redes sociais e a avatarização do cotidiano. O filme explora um dispositivo experimental entre teatro e cinema ao vivo, combinando imagens captadas em tempo real com cenas pré-gravadas. O público é levado ao palco onde fica o quarto de Alex, um estudante universitário de classe média, ao lado de uma tela. Os dois espaços coexistem dentro e fora da trama por meio de dois pontos de vista: o da imagem produzida pela câmera manipulada por um diretor de fotografia que navega a cena, e o palco em si.',
      'Eine Live-Expanded-Cinema-Installation über soziale Medien: Live-Theater und Live-Kino, live gefilmte Bilder und vorproduzierte Szenen. Das Publikum sitzt auf der Bühne, wo das Zimmer von Alex, einem Studenten aus der Mittelschicht, neben einer Leinwand steht. Beide Räume existieren innerhalb und außerhalb der Handlung – aus Sicht der Kamera, die ein Kameramann durch die Szene führt, und aus Sicht der Bühne.',
      'Una instalación de cine expandido en vivo sobre las redes sociales: teatro y cine en directo, con imágenes captadas en tiempo real y escenas pregrabadas. El público entra al escenario donde está el cuarto de Alex, un estudiante universitario de clase media, junto a una pantalla. Ambos espacios coexisten dentro y fuera de la trama desde dos puntos de vista: la imagen de la cámara que un director de fotografía mueve por la escena, y el escenario mismo.',
    ),
    d: T(
      'Launched in 2014 as my bachelor honors thesis in Media Studies at the State University of Campinas, with more than 50 student and guest artists. The following year it received the university’s Student-Artist Grant as a community outreach program. In 2016 it was staged as a 72-minute live feature at Teatro Castro Mendes, Campinas.',
      'Lançado em 2014 como meu trabalho de conclusão em Midialogia na UNICAMP, com mais de 50 estudantes e artistas convidados. No ano seguinte, recebeu o Prêmio Aluno-Artista da universidade como programa de extensão para a região. Em 2016, foi encenado como longa ao vivo de 72 minutos no Teatro Castro Mendes, em Campinas.',
      'Gestartet 2014 als meine Abschlussarbeit in Medienwissenschaft an der UNICAMP, mit über 50 Studierenden und Gastkünstler:innen. Im Jahr darauf erhielt es das Student-Artist-Stipendium der Universität. 2016 wurde es als 72-minütiger Live-Spielfilm im Teatro Castro Mendes in Campinas aufgeführt.',
      'Lanzado en 2014 como mi trabajo de fin de grado en Estudios de Medios en la UNICAMP, con más de 50 estudiantes y artistas invitados. Al año siguiente recibió la beca Aluno-Artista de la universidad. En 2016 se presentó como largometraje en vivo de 72 minutos en el Teatro Castro Mendes de Campinas.',
    ),
    quote: T('“I kept thinking about us, how we were together, how we should be. I think in the end, I forgot actually to be anything.” – Alex, the main character.'),
    links: [{ label: ui.watch, href: 'https://www.youtube.com/watch?v=YLgFmb_uof4' }],
    images: [
      ['e4b42728f73ee0938564c2ada69f399b9d51b5c2f73181eb503725b13f19b2e3', '01_guzzo.jpg', 1500, 670],
      ['4afdd242070770b73f6f71e3868079062a3cfae49096b6144c5fa9550e3c070c', 'Screen-Shot-2020-07-19-at-5.26.11-AM.png', 1500, 989],
      ['4ef0a0e6d6abc347695c5c03bdfe244257a95c087753c6320e4abd6930360ab8', 'Screen-Shot-2020-07-19-at-5.27.46-AM.png', 1500, 994],
      ['355bb617822a2244d15d18d7c10024238432cd4f3ec0e185b5e2bcc4c39c544b', '_MG_4124.jpg', 1500, 1000],
      ['d28404d93d4c990ea4386fc2aee71535a646200087c9967d7bc121ba5f531aab', '_MG_4000.jpg', 1500, 1000],
      ['d06e497311e752caabba6c0cbdc96160f21c3812055b461900c38e9048e0e216', '_MG_4049.jpg', 1500, 1000],
      ['43b7a6d27bd8e43963059629becc7135365e2bff2f22588af0f09b9f96d6030e', '_MG_3827.jpg', 1500, 1000],
    ].map(([h, n, w, hh]) => ({ src: cargo(h, n), w, h: hh, alt: 'Evento do Facebook' })),
  },
];

export const visualArts = {
  title: sectionTitle('visual-arts'),
  sections: [{ items: byDate(visualProjects).map((p) => ({ y: p.y, t: p.t, href: `${p.slug}.html`, m: p.m, d: p.lede, check: p.check })) }],
};

/* --------------------------------------------------------------- RESEARCH */
export const research = {
  title: sectionTitle('research'),
  intro: T(
    'I am interested in how interfaces make computation believable.',
    'Me interessa como as interfaces tornam a computação crível.',
    'Mich interessiert, wie Interfaces Berechnung glaubwürdig machen.',
    'Me interesa cómo las interfaces hacen creíble la computación.',
  ),
  sections: [
    {
      h: T('Projects', 'Projetos', 'Projekte', 'Proyectos'),
      items: [
        {
          y: '2026–', t: 'Adaptive Operational Images',
          m: T('Work in progress', 'Em andamento', 'In Arbeit', 'En curso'),
          d: T('Generative interfaces change while we use them. How do they present themselves, and how can communities learn to read them?', 'Interfaces generativas mudam enquanto as usamos. Como elas se apresentam, e como comunidades podem aprender a lê-las?', 'Generative Interfaces verändern sich, während wir sie benutzen. Wie stellen sie sich dar – und wie können Communities lernen, sie zu lesen?', 'Las interfaces generativas cambian mientras las usamos. ¿Cómo se presentan y cómo pueden las comunidades aprender a leerlas?'),
        },
        {
          y: '2019–21', t: 'Ritual Geographies / Cultural Infrastructures',
          m: T('Chancellor’s Interdisciplinary Collaboratories grant · UC San Diego', 'Bolsa Chancellor’s Interdisciplinary Collaboratories · UC San Diego', 'Chancellor’s Interdisciplinary Collaboratories Grant · UC San Diego', 'Beca Chancellor’s Interdisciplinary Collaboratories · UC San Diego'),
          d: T('How rituals and protocols make creative labour feel natural at Maker Faire and Burning Man.', 'Como rituais e protocolos fazem o trabalho criativo parecer natural na Maker Faire e no Burning Man.', 'Wie Rituale und Protokolle kreative Arbeit bei Maker Faire und Burning Man natürlich erscheinen lassen.', 'Cómo los rituales y protocolos hacen que el trabajo creativo parezca natural en Maker Faire y Burning Man.'),
        },
        {
          y: '2013–17', t: T('Documentary photography methodology', 'Metodologia da fotografia documental', 'Methodik der Dokumentarfotografie', 'Metodología de la fotografía documental'),
          m: T('UNICAMP · FAPESP grant', 'UNICAMP · bolsa FAPESP', 'UNICAMP · FAPESP-Förderung', 'UNICAMP · beca FAPESP'),
          d: T('Before interfaces, images: how documentary photographs earn our belief.', 'Antes das interfaces, as imagens: como fotografias documentais conquistam nossa confiança.', 'Vor den Interfaces die Bilder: wie Dokumentarfotografien unseren Glauben gewinnen.', 'Antes de las interfaces, las imágenes: cómo las fotografías documentales se ganan nuestra credibilidad.'),
        },
        {
          y: '', t: T('Identity, semiotics and social media profiles', 'Identidade, semiótica e perfis em redes sociais', 'Identität, Semiotik und Profile in sozialen Medien', 'Identidad, semiótica y perfiles en redes sociales'),
          m: T('UNICAMP · CAPES grant', 'UNICAMP · bolsa CAPES', 'UNICAMP · CAPES-Förderung', 'UNICAMP · beca CAPES'),
          d: T('A project applying Peirce to the analysis of the avatarization of self-profiles in social media activity.', 'Um projeto de aplicação de Peirce à análise da avatarização de perfis de si na atividade em redes sociais.', 'Ein Projekt, das Peirce auf die Analyse der Avatarisierung von Selbstprofilen in der Aktivität sozialer Medien anwendet.', 'Un proyecto que aplica Peirce al análisis de la avatarización de los perfiles del yo en la actividad en redes sociales.'),
        },
      ],
    },
    {
      h: T('Published papers', 'Artigos publicados', 'Veröffentlichte Aufsätze', 'Artículos publicados'), id: 'publications',
      items: [
        ...v1.research.pubs.filter((p) => p.t !== 'Ilhas'),
        { t: T('All on Google Scholar', 'Todos no Google Acadêmico', 'Alle bei Google Scholar', 'Todos en Google Académico'), href: 'https://scholar.google.com/citations?user=Djg3YEYAAAAJ' },
      ],
    },
    {
      h: T('Past affiliations', 'Vínculos anteriores', 'Frühere Zugehörigkeiten', 'Afiliaciones anteriores'),
      items: v1.research.affs.filter((a) => !/Confidential/.test(a.t)),
    },
  ],
};

/* ------------------------------------------------------------- EDUCATION */
// Programmes, in his sense of the word: people learning together. Not degrees.
// Rows already published are reused. The internship line is the one fact the
// handoff names that the site did not yet list.
const osProjects = openSource.sections[1].items;
const eduTake = (needle) => {
  const it = osProjects.find((i) => JSON.stringify(i.t).includes(needle));
  if (!it) throw new Error(`education item not found: ${needle}`);
  return it;
};
const eduWorkshop = {
  y: '2025', t: T('Designing AI data safeguards together', 'Desenhando juntos salvaguardas de dados para IA', 'KI-Datenschutz gemeinsam gestalten', 'Diseñar juntos salvaguardas de datos para IA'),
  href: 'https://confidentialcomputing.io/2025/10/27/designing-ai-data-safeguards-together-a-look-back-at-cccs-san-francisco-workshop/',
  m: T('Workshop facilitator · Confidential Computing Consortium · San Francisco', 'Facilitação de oficina · Confidential Computing Consortium · São Francisco', 'Workshop-Moderation · Confidential Computing Consortium · San Francisco', 'Facilitación del taller · Confidential Computing Consortium · San Francisco'),
  d: T('What would make AI built on people’s data trustworthy, and provably so? NVIDIA, Intel, Meta, Google and JPMorgan Chase drafted shared recommendations.', 'O que tornaria confiável, e comprovadamente confiável, uma IA construída com dados de pessoas? NVIDIA, Intel, Meta, Google e JPMorgan Chase redigiram recomendações em comum.', 'Was würde KI, die auf Daten von Menschen beruht, vertrauenswürdig machen – nachweisbar? NVIDIA, Intel, Meta, Google und JPMorgan Chase erarbeiteten gemeinsame Empfehlungen.', '¿Qué haría confiable, y demostrablemente confiable, una IA construida con datos de personas? NVIDIA, Intel, Meta, Google y JPMorgan Chase redactaron recomendaciones comunes.'),
};
export const education = {
  title: sectionTitle('education'),
  intro: T(
    'Nobody learns alone. I design the rooms, programmes and rituals where people learn from each other.',
    'Ninguém aprende sozinho. Desenho os espaços, programas e rituais onde as pessoas aprendem umas com as outras.',
    'Niemand lernt allein. Ich gestalte die Räume, Programme und Rituale, in denen Menschen voneinander lernen.',
    'Nadie aprende solo. Diseño los espacios, programas y rituales donde las personas aprenden unas de otras.',
  ),
  sections: [{
    items: byDate([
      eduTake('PET Arena'),
      eduWorkshop,
      eduTake('Applied Social Media Lab'),
      {
        y: '2022–24',
        t: T('Internship programmes', 'Programas de estágio', 'Praktikumsprogramme', 'Programas de prácticas'),
        m: T('Berkman Klein Center, Harvard', 'Berkman Klein Center, Harvard', 'Berkman Klein Center, Harvard', 'Berkman Klein Center, Harvard'),
        d: T(
          'Designed and ran three internship programmes, with 15+ interns.',
          'Desenhei e conduzi três programas de estágio, com mais de 15 estagiários.',
          'Drei Praktikumsprogramme entworfen und geleitet, mit mehr als 15 Praktikant:innen.',
          'Diseñé y dirigí tres programas de prácticas, con más de 15 pasantes.',
        ),
      },
      eduTake('RSM Assembly Fellowship'),
      eduTake('Acolher'),
    ]),
  }],
};

/* ------------------------------------------------------------ ENGAGEMENTS */
const L = (en, pt, de, es) => T(en, pt ?? en, de ?? en, es ?? en);
export const engagements = {
  title: sectionTitle('engagements'),
  intro: T(
    'Presentations, talks, writing and exhibitions. Newest first.',
    'Apresentações, falas, textos e exposições. Dos mais recentes aos mais antigos.',
    'Präsentationen, Vorträge, Texte und Ausstellungen. Neueste zuerst.',
    'Presentaciones, charlas, textos y exposiciones. Lo más reciente primero.',
  ),
  sections: [
    {
      h: T('Presentations and talks', 'Apresentações e falas', 'Präsentationen und Vorträge', 'Presentaciones y charlas'),
      items: [
        { y: '2026', t: L('PET Arena at IEEE SaTML 2026', 'PET Arena no IEEE SaTML 2026', 'PET Arena bei der IEEE SaTML 2026', 'PET Arena en IEEE SaTML 2026'), href: 'https://satml.org/2026/competitions/', m: L('Official competition · TU Munich', 'Competição oficial · TU Munique', 'Offizieller Wettbewerb · TU München', 'Competición oficial · TU de Múnich') },
        { y: '2025', t: L('Panel on confidential computing', 'Painel sobre computação confidencial', 'Panel zu Confidential Computing', 'Panel sobre computación confidencial'), m: 'Eyes-Off Data Summit · Dublin' },
        { y: '2025', t: 'ManaTEE: Enabling Verifiable AI Transparency With Confidential Computing', href: 'https://www.youtube.com/watch?v=yk7qmS8OAYM', m: L('Panel on evaluating AI · Open Source Summit Europe · Amsterdam', 'Painel sobre avaliação de IA · Open Source Summit Europe · Amsterdã', 'Panel zur Bewertung von KI · Open Source Summit Europe · Amsterdam', 'Panel sobre evaluación de IA · Open Source Summit Europe · Ámsterdam') },
        { y: '2025', t: L('TikTok Open Source meet-up', 'Meet-up de código aberto do TikTok', 'TikTok Open Source Meet-up', 'Meet-up de código abierto de TikTok'), m: L('MC · Berlin', 'Mestre de cerimônias · Berlim', 'Moderation · Berlin', 'Maestro de ceremonias · Berlín') },
        v1.talks.sections[0].items.find((i) => JSON.stringify(i.t).includes('conversation with Angelo')),
        { y: '2019', t: 'Understanding Algorithmically-Mediated News through Flusser and Farocki', href: 'https://sites.bu.edu/demsconference/past-conferences/screentimebu-2019/speakers-2019/', m: '#ScreentimeBU · Boston University, Emerging Media Studies' },
        v1.talks.sections[0].items.find((i) => JSON.stringify(i.t).includes('Metajornal')),
        v1.talks.sections[0].items.find((i) => JSON.stringify(i.t).includes('LACES')),
        { y: '2015', t: L('Paper on documentary photography methodology', 'Comunicação sobre metodologia da fotografia documental', 'Vortrag zur Methodik der Dokumentarfotografie', 'Ponencia sobre metodología de la fotografía documental'), m: 'FIF-BH · Belo Horizonte' },
      ],
    },
    {
      h: T('Writing', 'Textos', 'Texte', 'Textos'),
      items: [
        ...v1.talks.sections[1].items.filter((i) => !/Papers on documentary|Inside TikTok|European Capture|Ritual Geographies|Third World Manager/.test(JSON.stringify(i.t))),
        { y: '2020', t: 'Surveillance is King, and Entrepreneurialism One of its Representatives', href: 'https://medium.com/@edgelandsinstitute/surveillance-is-king-and-entrepreneurialism-one-of-its-representatives-11ceb61205ca', m: L('Essay · Edgelands Institute', 'Ensaio · Edgelands Institute', 'Essay · Edgelands Institute', 'Ensayo · Edgelands Institute') },
      ],
    },
    {
      h: T('Exhibitions and screenings', 'Exposições e exibições', 'Ausstellungen und Vorführungen', 'Exposiciones y proyecciones'),
      items: [
        { y: '2026', t: L('<i>Third World Manager</i>, world premiere', '<i>Empresário do Terceiro Mundo</i>, estreia mundial', '<i>Third World Manager</i>, Weltpremiere', '<i>Third World Manager</i>, estreno mundial'), href: 'third-world-manager.html', m: '8º Festival de Cinema da Amazônia – Olhar do Norte · Teatro Amazonas, Manaus' },
        { y: '2021', t: 'Public Audio', href: 'public-audio.html', m: L('16th Internet Governance Forum · Excavations (online)', '16º Fórum de Governança da Internet · Excavations (online)', '16. Internet Governance Forum · Excavations (online)', '16.º Foro de Gobernanza de Internet · Excavations (en línea)') },
        { y: '2017', t: '<i>O Grande Assalto ao Pão de Açúcar</i>', m: L('Reshoot presentation · Museu da Imagem e do Som, Campinas', 'Apresentação da refilmagem · Museu da Imagem e do Som, Campinas', 'Präsentation des Nachdrehs · Museu da Imagem e do Som, Campinas', 'Presentación del nuevo rodaje · Museu da Imagem e do Som, Campinas') },
        { y: '2016', t: '<i>Evento do Facebook</i>', href: 'evento-do-facebook.html', m: 'Teatro Castro Mendes · Campinas' },
        { y: '2015', t: 'Public Concession', m: 'Museu da Imagem e do Som · Campinas' },
        { y: '2013', t: '<i>Attached</i>', m: 'FilmHuis Den Haag · Vida de Perro, Barcelona' },
        { y: '2012', t: '<i>O Vídeo</i>', m: 'Mostra do Filme Livre · Rio de Janeiro' },
      ],
    },
    {
      h: T('Clipping', 'Clipping', 'Pressespiegel', 'Prensa'),
      items: [
        { y: '2026', t: 'Occupy Cinema Selects presents: “If Birds Believed in God”, “Ambush”, “Saint-Sacrifice” and “Third World Manager”', href: 'https://cinemaoccupy.substack.com/p/occupy-cinema-selects-presents-if', m: 'Occupy Cinema' },
        { y: '2026', t: 'Inside TikTok’s work on privacy-enhancing tech, with Mateus Guzzo', href: 'https://usercentrics.com/magazine/articles/inside-tiktok-privacy-enhancing-technology/', m: L('Interview by Brunni Corsato · Usercentrics Magazine', 'Entrevista a Brunni Corsato · Usercentrics Magazine', 'Interview von Brunni Corsato · Usercentrics Magazine', 'Entrevista de Brunni Corsato · Usercentrics Magazine') },
        { y: '2024', t: 'Governable Spaces: Democratic Design for Online Life', href: 'https://luminosoa.org/books/m/10.1525/luminos.181', m: 'Nathan Schneider · University of California Press · cites Public Audio' },
        { y: '2021', t: 'Excavations · The artists', href: 'https://excavations.digital/artists/', m: L('Artist profile', 'Perfil de artista', 'Künstlerprofil', 'Perfil de artista') },
        { y: '2020', t: 'Visual Arts Grad Exhibitions · MFA 2020 Theses', href: 'https://sites.google.com/ucsd.edu/gradexhibitions/past-exhibitions/2020-mfa-theses/mateus-guzzo', m: L('Artist profile · UC San Diego', 'Perfil de artista · UC San Diego', 'Künstlerprofil · UC San Diego', 'Perfil de artista · UC San Diego') },
        { y: '2017', t: 'G1 (Globo)', m: 'Cites my lost film, and other outlets', check: true },
        { y: '2017', t: 'Transmission Art Archive · radioee.net in Fordlândia', href: 'https://wavefarm.org/wf/archive/xz8ad3', m: 'Wave Farm' },
        { y: '2014–15', t: 'G1 (Globo)', m: 'Cites the works at the Teatro Municipal', check: true },
        { y: '2010', t: 'Folha de S.Paulo', m: 'Quotes my comment on the Mercadante thesis defence', check: true },
      ],
    },
  ],
};

/* ------------------------------------------------------------ WHEREABOUTS */
/* --------------------------------------------------------------- WRITING */
// Posts come from Substack's RSS feed at build time (newest ~20 only), merged
// with the saved archive in src/writing/posts.json so nothing ever drops off.
// Set `substack` to the publication URL (no trailing slash) to switch it on;
// the footer link appears at the same time.
export const writing = {
  title: T('Writing', 'Escrita', 'Texte', 'Escritos'),
  substack: '', // e.g. 'https://vibesmanagement.substack.com'
  substackName: 'Substack',
  soon: T('Still developing. Essays and notes will appear here.', 'Em desenvolvimento. Ensaios e notas vão aparecer aqui.', 'Noch im Aufbau. Essays und Notizen erscheinen bald hier.', 'Todavía en desarrollo. Aquí aparecerán ensayos y notas.'),
  readOn: T('Read on Substack', 'Leia no Substack', 'Auf Substack lesen', 'Leer en Substack'),
  subscribe: T('Subscribe', 'Assine', 'Abonnieren', 'Suscríbete'),
};

export const whereabouts = {
  title: v1.whereabouts.title,
  big: T('unknown.', 'desconhecido.', 'unbekannt.', 'desconocido.'),
  // no pictures on this page for now (Guzzo, 3 Nov 2026)
  // Named only where the timezone is one city in the biography. Everywhere else stays unknown.
  zones: {
    'Europe/London': 'London',
    'Europe/Berlin': 'Berlin',
    'Europe/Amsterdam': 'Amsterdam',
    'Europe/Dublin': 'Dublin',
    'America/Los_Angeles': 'San Francisco',
  },
  clock: {
    London: T('Your clock says London, {time}.', 'Seu relógio diz Londres, {time}.', 'Ihre Uhr sagt London, {time}.', 'Tu reloj dice Londres, {time}.'),
    Berlin: T('Your clock says Berlin, {time}.', 'Seu relógio diz Berlim, {time}.', 'Ihre Uhr sagt Berlin, {time}.', 'Tu reloj dice Berlín, {time}.'),
    Amsterdam: T('Your clock says Amsterdam, {time}.', 'Seu relógio diz Amsterdã, {time}.', 'Ihre Uhr sagt Amsterdam, {time}.', 'Tu reloj dice Ámsterdam, {time}.'),
    Dublin: T('Your clock says Dublin, {time}.', 'Seu relógio diz Dublin, {time}.', 'Ihre Uhr sagt Dublin, {time}.', 'Tu reloj dice Dublín, {time}.'),
    'San Francisco': T('Your clock says San Francisco, {time}.', 'Seu relógio diz São Francisco, {time}.', 'Ihre Uhr sagt San Francisco, {time}.', 'Tu reloj dice San Francisco, {time}.'),
    unknown: T('Your clock says {time}.', 'Seu relógio diz {time}.', 'Ihre Uhr sagt {time}.', 'Tu reloj dice {time}.'),
  },
};

/* ----------------------------------------------------------------- LEGAL */
// Impressum (§ 5 DDG, § 18 Abs. 2 MStV) and privacy policy (GDPR / DSGVO).
// German and English; PT and ES fall back to English. Not legal advice:
// fill in `address` (a postal address where you can be served — no P.O. box)
// before publishing. The build warns while it is empty.
export const legal = {
  name: 'Mateus Guzzo',
  address: '', // e.g. 'Musterstraße 1<br>10115 Berlin<br>Deutschland'
  vatId: '',   // USt-IdNr., only once cult.tools is registered and has one
  updated: { en: 'November 2026', de: 'November 2026' },
  footer: {
    impressum: T('Impressum', 'Impressum', 'Impressum', 'Aviso legal'),
    privacy: T('Privacy', 'Privacidade', 'Datenschutz', 'Privacidad'),
  },
};

export const impressum = {
  title: T('Impressum', 'Impressum', 'Impressum', 'Aviso legal'),
  body: {
    de: (a) => `<h2>Angaben gemäß § 5 DDG</h2>
<p>${legal.name}<br>${a}</p>
<h2>Kontakt</h2>
<p>E-Mail: <a href="mailto:hello@matguzzo.com">hello@matguzzo.com</a></p>
${legal.vatId ? `<h2>Umsatzsteuer-ID</h2>\n<p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: ${legal.vatId}</p>\n` : ''}<h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
<p>${legal.name}, Anschrift wie oben</p>
<h2>Haftung für Links</h2>
<p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entferne ich derartige Links umgehend.</p>
<h2>Urheberrecht</h2>
<p>Texte, Bilder und Filme auf dieser Website sind, soweit nicht anders angegeben, Werke von ${legal.name}. Einige Rechte vorbehalten; für eine Nutzung über das Zitatrecht hinaus bitte vorher anfragen.</p>`,
    en: (a) => `<h2>Information pursuant to § 5 DDG (German Digital Services Act)</h2>
<p>${legal.name}<br>${a}</p>
<h2>Contact</h2>
<p>Email: <a href="mailto:hello@matguzzo.com">hello@matguzzo.com</a></p>
${legal.vatId ? `<h2>VAT ID</h2>\n<p>VAT identification number pursuant to § 27a UStG: ${legal.vatId}</p>\n` : ''}<h2>Responsible for content pursuant to § 18(2) MStV</h2>
<p>${legal.name}, address as above</p>
<h2>Links to other websites</h2>
<p>This website links to external websites run by third parties. I have no control over their content; the respective provider or operator is always responsible for it. If I become aware of any infringement, I will remove the link immediately.</p>
<h2>Copyright</h2>
<p>Unless stated otherwise, the texts, images and films on this website are works by ${legal.name}. Some rights reserved; please ask before any use beyond fair quotation.</p>`,
  },
};

export const privacy = {
  title: T('Privacy policy', 'Política de privacidade', 'Datenschutzerklärung', 'Política de privacidad'),
  body: {
    de: (a) => `<p class="m">Stand: ${legal.updated.de}</p>
<h2>1. Verantwortlicher</h2>
<p>${legal.name}<br>${a}<br>E-Mail: <a href="mailto:hello@matguzzo.com">hello@matguzzo.com</a></p>
<h2>2. Kurz gesagt</h2>
<p>Diese Website setzt keine Cookies, hat keine Formulare und keine Werbung. Schriften und Skripte liegen auf dem eigenen Server. Personenbezogene Daten werden nur dort verarbeitet, wo es technisch nötig ist (Hosting, Bilder) oder in anonymisierter Form für eine einfache Besucherstatistik (Umami).</p>
<h2>3. Hosting: GitHub Pages</h2>
<p>Die Website wird über GitHub Pages bereitgestellt (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Beim Aufruf der Seiten verarbeitet GitHub technisch notwendige Verbindungsdaten, insbesondere Ihre IP-Adresse, und speichert sie nach eigenen Angaben aus Sicherheitsgründen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren, zuverlässigen Auslieferung der Website). Dabei können Daten in die USA übermittelt werden; GitHub stützt solche Übermittlungen auf das EU-US Data Privacy Framework bzw. auf Standardvertragsklauseln. Weitere Informationen: <a href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement">Datenschutzerklärung von GitHub</a>.</p>
<h2>4. Besucherstatistik: Umami</h2>
<p>Für eine anonyme Reichweitenmessung nutze ich Umami Cloud (umami.is). Umami setzt keine Cookies, speichert keine IP-Adressen und verfolgt Sie nicht über andere Websites hinweg. Erfasst werden die aufgerufene Seite, die verweisende Website, Browser, Betriebssystem, Gerätetyp, Bildschirmgröße, Sprache sowie das ungefähre Land bzw. die Region, die aus der IP-Adresse abgeleitet werden, ohne diese zu speichern. Die Daten lassen keinen Rückschluss auf Ihre Person zu. Wenn Ihr Browser „Do Not Track“ sendet, wird gar nichts erfasst. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer datensparsamen Statistik darüber, welche Inhalte gelesen werden). Weitere Informationen: <a href="https://umami.is/privacy">umami.is/privacy</a>.</p>
<h2>5. Bilder von Cargo</h2>
<p>Einige Bilder auf den Seiten zu künstlerischen Projekten werden vom Server von Cargo (freight.cargo.site) geladen, wo mein Kunstportfolio liegt. Dabei wird Ihre IP-Adresse an Cargo übermittelt, damit die Bilder ausgeliefert werden können. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Darstellung meiner Arbeiten).</p>
<h2>6. Kontakt per E-Mail</h2>
<p>Wenn Sie mir schreiben, verarbeite ich Ihre Nachricht und Ihre Kontaktdaten, um zu antworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO), und lösche sie, wenn sie dafür nicht mehr gebraucht werden.</p>
<h2>7. Externe Links</h2>
<p>Links zu anderen Websites (etwa X / Twitter, Substack, YouTube oder Medium) werden erst beim Anklicken aufgerufen; ab dann gilt die Datenschutzerklärung des jeweiligen Anbieters.</p>
<h2>8. Ihre Rechte</h2>
<p>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21). Eine E-Mail genügt. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO).</p>`,
    en: (a) => `<p class="m">Last updated: ${legal.updated.en}</p>
<h2>1. Controller</h2>
<p>${legal.name}<br>${a}<br>Email: <a href="mailto:hello@matguzzo.com">hello@matguzzo.com</a></p>
<h2>2. In short</h2>
<p>This website sets no cookies and has no forms and no ads. Fonts and scripts are served from this site itself. Personal data is processed only where that is technically necessary (hosting, images) or in anonymised form for simple visitor statistics (Umami).</p>
<h2>3. Hosting: GitHub Pages</h2>
<p>This website is served by GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). When you open a page, GitHub processes technically necessary connection data, in particular your IP address, and says it stores it for security purposes. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in delivering the website securely and reliably). Data may be transferred to the USA; GitHub bases such transfers on the EU–US Data Privacy Framework or on standard contractual clauses. More: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">GitHub's privacy statement</a>.</p>
<h2>4. Visitor statistics: Umami</h2>
<p>For anonymous audience measurement I use Umami Cloud (umami.is). Umami sets no cookies, stores no IP addresses and does not follow you across other websites. It records the page visited, the referring website, browser, operating system, device type, screen size, language and approximate country or region, which is derived from the IP address without storing it. None of this identifies you. If your browser sends "Do Not Track", nothing is recorded. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in minimal statistics about which pages are read). More: <a href="https://umami.is/privacy">umami.is/privacy</a>.</p>
<h2>5. Images from Cargo</h2>
<p>Some images on the visual arts project pages are loaded from the servers of Cargo (freight.cargo.site), where my art portfolio is hosted. Your IP address is sent to Cargo so the images can be delivered. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in showing my work).</p>
<h2>6. Contact by email</h2>
<p>If you write to me, I process your message and contact details in order to reply (Art. 6(1)(b) or (f) GDPR) and delete them once they are no longer needed for that.</p>
<h2>7. External links</h2>
<p>Links to other websites (such as X / Twitter, Substack, YouTube or Medium) only connect to them when you click; from then on, that provider's privacy policy applies.</p>
<h2>8. Your rights</h2>
<p>You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and to object to processing based on Art. 6(1)(f) GDPR (Art. 21). An email is enough. You can also lodge a complaint with a data protection supervisory authority (Art. 77 GDPR).</p>`,
  },
};
