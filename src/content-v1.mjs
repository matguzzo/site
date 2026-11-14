// All site content lives here. Every translatable field is an object
// { en, pt, de, es }; a plain string is used as-is in every language.
// Missing languages fall back to English.
//
// Entries marked `check: true` are things Guzzo should confirm before
// publishing (they print a console warning at build time, nothing on the page).

export const site = {
  domain: 'matguzzo.com',
  url: 'https://matguzzo.com',
  name: 'Mateus Guzzo',
  email: 'hello@matguzzo.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/%F0%9F%AA%A9-mateus-guzzo-28965562/' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=Djg3YEYAAAAJ' },
  ],
  langs: ['en', 'pt', 'de', 'es'],
  langNames: { en: 'EN', pt: 'PT', de: 'DE', es: 'ES' },
  langLong: { en: 'English', pt: 'Português', de: 'Deutsch', es: 'Español' },
  htmlLang: { en: 'en', pt: 'pt-BR', de: 'de', es: 'es' },
};

export const ui = {
  description: {
    en: 'Mateus Guzzo is a Brazilian communicator, designer, and technologist working with community architecture, narrative infrastructure, and creative strategy across policy, tech, and academia.',
    pt: 'Mateus Guzzo é um comunicador, designer e tecnólogo brasileiro que trabalha com arquitetura de comunidades, infraestrutura narrativa e estratégia criativa entre políticas públicas, tecnologia e academia.',
    de: 'Mateus Guzzo ist ein brasilianischer Kommunikator, Designer und Technologe. Er arbeitet mit Community-Architektur, narrativer Infrastruktur und kreativer Strategie zwischen Politik, Technologie und Wissenschaft.',
    es: 'Mateus Guzzo es un comunicador, diseñador y tecnólogo brasileño que trabaja con arquitectura de comunidades, infraestructura narrativa y estrategia creativa entre políticas públicas, tecnología y academia.',
  },
  skip: { en: 'Skip to content', pt: 'Pular para o conteúdo', de: 'Zum Inhalt', es: 'Saltar al contenido' },
  mainNav: { en: 'Main', pt: 'Principal', de: 'Hauptmenü', es: 'Principal' },
  language: { en: 'Language', pt: 'Idioma', de: 'Sprache', es: 'Idioma' },
  contact: { en: 'Write to me', pt: 'Escreva para mim', de: 'Schreib mir', es: 'Escríbeme' },
  ongoing: { en: 'ongoing', pt: 'em curso', de: 'laufend', es: 'en curso' },
  inDev: { en: 'in development', pt: 'em desenvolvimento', de: 'in Entwicklung', es: 'en desarrollo' },
  now: { en: 'now', pt: 'hoje', de: 'heute', es: 'hoy' },
  notFound: {
    en: 'This page went to the party and never came back.',
    pt: 'Esta página foi para a festa e nunca mais voltou.',
    de: 'Diese Seite ist auf die Party gegangen und nie zurückgekommen.',
    es: 'Esta página se fue a la fiesta y nunca volvió.',
  },
  backHome: { en: 'Back to the start', pt: 'Voltar ao início', de: 'Zurück zum Anfang', es: 'Volver al inicio' },
  tags: {
    en: 'towards a marginal-centric design • metafictional undocumentaries • critical sociotechnical innovation • cultural infrastructures for creative labor • memes about Brazilian politics',
    pt: 'por um design centrado nas margens • indocumentários metaficcionais • inovação sociotécnica crítica • infraestruturas culturais para o trabalho criativo • memes sobre política brasileira',
    de: 'für ein Design von den Rändern her • metafiktionale Undokumentarfilme • kritische soziotechnische Innovation • kulturelle Infrastrukturen für kreative Arbeit • Memes über brasilianische Politik',
    es: 'hacia un diseño centrado en los márgenes • indocumentales metaficcionales • innovación sociotécnica crítica • infraestructuras culturales para el trabajo creativo • memes sobre política brasileña',
  },
  rights: { en: 'some rights reserved', pt: 'alguns direitos reservados', de: 'einige Rechte vorbehalten', es: 'algunos derechos reservados' },
};

// Navigation order = page order. `slug` is the file name (index for home).
export const nav = [
  { slug: 'work', label: { en: 'Work', pt: 'Trabalho', de: 'Arbeit', es: 'Trabajo' } },
  { slug: 'art', label: { en: 'Films & Art', pt: 'Filmes e arte', de: 'Film & Kunst', es: 'Cine y arte' } },
  { slug: 'research', label: { en: 'Research', pt: 'Pesquisa', de: 'Forschung', es: 'Investigación' } },
  { slug: 'talks', label: { en: 'Talks & Writing', pt: 'Falas e textos', de: 'Vorträge & Texte', es: 'Charlas y textos' } },
  { slug: 'whereabouts', label: { en: 'Whereabouts', pt: 'Paradeiro', de: 'Unterwegs', es: 'Paradero' } },
];

/* ------------------------------------------------------------------ HOME */

export const home = {
  title: { en: 'Mateus Guzzo', pt: 'Mateus Guzzo', de: 'Mateus Guzzo', es: 'Mateus Guzzo' },
  image: { src: 'assets/disco-ball.webp', w: 720, h: 720, alt: { en: 'A mirror ball, in black and white.', pt: 'Um globo espelhado, em preto e branco.', de: 'Eine Discokugel in Schwarzweiß.', es: 'Una bola de espejos, en blanco y negro.' } },
  body: {
    en: [
      'I’m a Brazilian designer and filmmaker. For most of the last decade I’ve built programs, communities and communications for public-interest technology: fellowships, developer ecosystems, convenings, and the stories that make technical work legible to the people it affects.',
      'From November 2026 I run the Sovereign Tech Fellowship and Standards programs at the <a href="https://www.sovereign.tech/">Sovereign Tech Agency</a> in Berlin. Before that I led EMEA developer community and outreach for TikTok’s open-source, AI and privacy-enhancing technology projects, designed the fellowships of Harvard’s Berkman Klein Center, and ran global communications for the Edgelands Institute.',
      'Underneath it all is an art practice. My film <a href="art.html#third-world-manager"><i>Third World Manager</i></a> premiered at the Teatro Amazonas in 2026; other work moves between live cinema, radio, speculative design and interactive diagrams. What interests me is how images, interfaces and infrastructures get built, and how they’re made legible.',
      'I studied media at UNICAMP and hold an MFA in visual arts and speculative design from UC San Diego. I’m from Campinas, and these days I split my time between São Paulo and Berlin.',
      'I also DJ, and run <a href="art.html#demofm">DemoFM</a>, a radio that only broadcasts when there’s a party.',
    ],
    pt: [
      'Sou designer e cineasta brasileiro. Na maior parte da última década, criei programas, comunidades e comunicação para tecnologia de interesse público: fellowships, ecossistemas de desenvolvedores, encontros e as histórias que tornam o trabalho técnico legível para as pessoas que ele afeta.',
      'A partir de novembro de 2026, coordeno os programas Sovereign Tech Fellowship e Standards na <a href="https://www.sovereign.tech/">Sovereign Tech Agency</a>, em Berlim. Antes, liderei a comunidade de desenvolvedores e a comunicação na região EMEA dos projetos de código aberto, IA e tecnologias de proteção de privacidade do TikTok, desenhei os programas de fellowship do Berkman Klein Center, em Harvard, e cuidei da comunicação global do Edgelands Institute.',
      'Por baixo de tudo existe uma prática artística. Meu filme <a href="art.html#third-world-manager"><i>Empresário do Terceiro Mundo</i></a> estreou no Teatro Amazonas em 2026; outros trabalhos transitam entre cinema ao vivo, rádio, design especulativo e diagramas interativos. Me interessa como imagens, interfaces e infraestruturas são construídas, e como se tornam legíveis.',
      'Estudei Midialogia na UNICAMP e fiz mestrado (MFA) em artes visuais e design especulativo na UC San Diego. Sou de Campinas e hoje divido meu tempo entre São Paulo e Berlim.',
      'Também sou DJ e toco a <a href="art.html#demofm">DemoFM</a>, uma rádio que só transmite quando tem festa.',
    ],
    de: [
      'Ich bin brasilianischer Designer und Filmemacher. Den Großteil des letzten Jahrzehnts habe ich Programme, Communities und Kommunikation für gemeinwohlorientierte Technologie aufgebaut: Fellowships, Entwickler-Ökosysteme, Konvenings und die Geschichten, die technische Arbeit für die Menschen verständlich machen, die sie betrifft.',
      'Ab November 2026 leite ich das Sovereign Tech Fellowship und das Standards-Programm der <a href="https://www.sovereign.tech/">Sovereign Tech Agency</a> in Berlin. Zuvor habe ich bei TikTok die Entwickler-Community und Öffentlichkeitsarbeit für Open-Source-, KI- und Privacy-Enhancing-Technology-Projekte in EMEA verantwortet, die Fellowships des Berkman Klein Center in Harvard gestaltet und die globale Kommunikation des Edgelands Institute geleitet.',
      'Darunter liegt eine künstlerische Praxis. Mein Film <a href="art.html#third-world-manager"><i>Third World Manager</i></a> hatte 2026 im Teatro Amazonas Premiere; andere Arbeiten bewegen sich zwischen Live-Kino, Radio, spekulativem Design und interaktiven Diagrammen. Mich interessiert, wie Bilder, Interfaces und Infrastrukturen gebaut werden – und wie man sie lesbar macht.',
      'Ich habe Medienwissenschaft an der UNICAMP studiert und einen MFA in Bildender Kunst und spekulativem Design an der UC San Diego. Ich komme aus Campinas und lebe derzeit zwischen São Paulo und Berlin.',
      'Außerdem lege ich auf und mache <a href="art.html#demofm">DemoFM</a>, ein Radio, das nur sendet, wenn gefeiert wird.',
    ],
    es: [
      'Soy diseñador y cineasta brasileño. Durante la mayor parte de la última década he creado programas, comunidades y comunicación para tecnología de interés público: fellowships, ecosistemas de desarrolladores, encuentros y las historias que hacen legible el trabajo técnico para las personas a las que afecta.',
      'Desde noviembre de 2026 dirijo los programas Sovereign Tech Fellowship y Standards de la <a href="https://www.sovereign.tech/">Sovereign Tech Agency</a> en Berlín. Antes lideré la comunidad de desarrolladores y la difusión en EMEA de los proyectos de código abierto, IA y tecnologías de mejora de la privacidad de TikTok, diseñé los fellowships del Berkman Klein Center de Harvard y dirigí la comunicación global del Edgelands Institute.',
      'Debajo de todo hay una práctica artística. Mi película <a href="art.html#third-world-manager"><i>Third World Manager</i></a> se estrenó en el Teatro Amazonas en 2026; otros trabajos se mueven entre cine en vivo, radio, diseño especulativo y diagramas interactivos. Me interesa cómo se construyen las imágenes, las interfaces y las infraestructuras, y cómo se vuelven legibles.',
      'Estudié medios en la UNICAMP y tengo un MFA en artes visuales y diseño especulativo por la UC San Diego. Soy de Campinas y ahora reparto mi tiempo entre São Paulo y Berlín.',
      'También pincho y llevo <a href="art.html#demofm">DemoFM</a>, una radio que solo emite cuando hay fiesta.',
    ],
  },
};

/* ------------------------------------------------------------------ WORK */

export const work = {
  title: nav[0].label,
  intro: {
    en: 'Programs, communities and communications. The common thread is designing the structures that turn scattered experts into groups that can make things together: who gets invited, how they meet, what rhythm they keep, and how their work travels outward.',
    pt: 'Programas, comunidades e comunicação. O fio condutor é desenhar as estruturas que transformam especialistas dispersos em grupos capazes de criar juntos: quem é convidado, como as pessoas se encontram, que ritmo mantêm e como o trabalho delas circula.',
    de: 'Programme, Communities und Kommunikation. Der rote Faden: Strukturen entwerfen, die verstreute Expert:innen in Gruppen verwandeln, die gemeinsam etwas schaffen – wer eingeladen wird, wie man sich trifft, welchen Rhythmus man hält und wie die Arbeit nach außen wirkt.',
    es: 'Programas, comunidades y comunicación. El hilo conductor es diseñar las estructuras que convierten a especialistas dispersos en grupos capaces de crear juntos: quién recibe la invitación, cómo se encuentran, qué ritmo mantienen y cómo su trabajo llega afuera.',
  },
  sections: [
    {
      h: { en: 'Roles', pt: 'Funções', de: 'Stationen', es: 'Cargos' },
      items: [
        {
          y: '2026–', t: 'Sovereign Tech Agency', href: 'https://www.sovereign.tech/', check: true,
          m: { en: 'Program Manager, Fellowship & Standards · Berlin', pt: 'Program Manager, Fellowship e Standards · Berlim', de: 'Programmmanager, Fellowship & Standards · Berlin', es: 'Program Manager, Fellowship y Standards · Berlín' },
          d: {
            en: 'Running the Sovereign Tech Fellowship and Standards program cohorts: public investment in the open digital infrastructure everyone depends on.',
            pt: 'Coordenação das turmas do Sovereign Tech Fellowship e do programa Standards: investimento público na infraestrutura digital aberta da qual todos dependemos.',
            de: 'Betreuung der Kohorten des Sovereign Tech Fellowship und des Standards-Programms: öffentliche Investitionen in die offene digitale Infrastruktur, auf die alle angewiesen sind.',
            es: 'Coordinación de las cohortes del Sovereign Tech Fellowship y del programa Standards: inversión pública en la infraestructura digital abierta de la que todos dependemos.',
          },
        },
        {
          y: '2024–26', t: 'TikTok',
          m: { en: 'Developer & Community Advocate, EMEA · London', pt: 'Developer & Community Advocate, EMEA · Londres', de: 'Developer & Community Advocate, EMEA · London', es: 'Developer & Community Advocate, EMEA · Londres' },
          d: {
            en: 'Policy-facing communications and outreach for TikTok’s open-source, AI and privacy-enhancing technology projects, translating differential privacy and confidential computing for regulators, researchers and partners. Brand guardian and community manager for the engineering brand in EMEA.',
            pt: 'Comunicação voltada a políticas públicas e relacionamento externo para os projetos de código aberto, IA e tecnologias de proteção de privacidade do TikTok, traduzindo privacidade diferencial e computação confidencial para reguladores, pesquisadores e parceiros. Guardião da marca de engenharia e gestor de comunidade na região EMEA.',
            de: 'Politiknahe Kommunikation und Outreach für TikToks Open-Source-, KI- und Privacy-Enhancing-Technology-Projekte – Differential Privacy und Confidential Computing übersetzt für Regulierer, Forschung und Partner. Markenverantwortlicher und Community-Manager der Engineering-Marke in EMEA.',
            es: 'Comunicación orientada a políticas públicas y difusión para los proyectos de código abierto, IA y tecnologías de mejora de la privacidad de TikTok, traduciendo privacidad diferencial y computación confidencial para reguladores, investigadores y socios. Responsable de la marca de ingeniería y de su comunidad en EMEA.',
          },
        },
        {
          y: '2022–24', t: 'Berkman Klein Center for Internet & Society, Harvard University', href: 'https://cyber.harvard.edu/people/mateus-guzzo',
          m: { en: 'Associate Director, Program Design, Applied Social Media Lab; previously Program Manager, Institute for Rebooting Social Media · Cambridge, MA', pt: 'Associate Director, Program Design, Applied Social Media Lab; antes Program Manager, Institute for Rebooting Social Media · Cambridge, EUA', de: 'Associate Director, Program Design, Applied Social Media Lab; zuvor Programmmanager, Institute for Rebooting Social Media · Cambridge, USA', es: 'Associate Director, Program Design, Applied Social Media Lab; antes Program Manager, Institute for Rebooting Social Media · Cambridge, EE. UU.' },
          d: {
            en: 'Helped launch the Applied Social Media Lab as a new venture. Fellowship architecture for two public-interest technology programs, and more than forty workshops, speaker series, hackathons and conferences.',
            pt: 'Ajudei a criar o Applied Social Media Lab como um novo empreendimento. Arquitetura de fellowship para dois programas de tecnologia de interesse público e mais de quarenta oficinas, ciclos de palestras, hackathons e conferências.',
            de: 'Mitaufbau des Applied Social Media Lab als neues Vorhaben. Fellowship-Architektur für zwei Programme zu gemeinwohlorientierter Technologie und mehr als vierzig Workshops, Vortragsreihen, Hackathons und Konferenzen.',
            es: 'Ayudé a crear el Applied Social Media Lab como un nuevo proyecto. Arquitectura de fellowships para dos programas de tecnología de interés público y más de cuarenta talleres, ciclos de charlas, hackathons y conferencias.',
          },
        },
        {
          y: '2021–22', t: 'Edgelands Institute', href: 'https://edgelands.institute/',
          m: { en: 'Global Communications Manager · Geneva (remote)', pt: 'Gerente de Comunicação Global · Genebra (remoto)', de: 'Global Communications Manager · Genf (remote)', es: 'Responsable de Comunicación Global · Ginebra (remoto)' },
          d: {
            en: 'Communications, culture and community workflows for a 150-person team across Geneva, Medellín, Nairobi and Houston. Fifty-plus storytelling projects and five websites.',
            pt: 'Fluxos de comunicação, cultura e comunidade para uma equipe de 150 pessoas entre Genebra, Medellín, Nairóbi e Houston. Mais de cinquenta projetos narrativos e cinco sites.',
            de: 'Kommunikations-, Kultur- und Community-Abläufe für ein 150-köpfiges Team zwischen Genf, Medellín, Nairobi und Houston. Über fünfzig Storytelling-Projekte und fünf Websites.',
            es: 'Flujos de comunicación, cultura y comunidad para un equipo de 150 personas entre Ginebra, Medellín, Nairobi y Houston. Más de cincuenta proyectos narrativos y cinco sitios web.',
          },
        },
        {
          y: '2021', t: 'Harvard Business School',
          m: { en: 'Research Associate', pt: 'Pesquisador associado', de: 'Research Associate', es: 'Investigador asociado' },
          d: {
            en: 'Literature review on open innovation and its roots in open source and hacker ethics.',
            pt: 'Revisão de literatura sobre inovação aberta e suas raízes no código aberto e na ética hacker.',
            de: 'Literaturrecherche zu Open Innovation und ihren Wurzeln in Open Source und Hackerethik.',
            es: 'Revisión bibliográfica sobre innovación abierta y sus raíces en el código abierto y la ética hacker.',
          },
        },
        {
          y: '2020–22', t: 'Natura &Co · Biscos Design Studio',
          m: { en: 'Designer, educator and community manager · Campinas (remote)', pt: 'Designer, educador e gestor de comunidade · Campinas (remoto)', de: 'Designer, Bildungsgestalter und Community-Manager · Campinas (remote)', es: 'Diseñador, educador y gestor de comunidad · Campinas (remoto)' },
          d: {
            en: 'Co-designed and ran Acolher, a six-month online community program for 52 participants across Brazil. See below.',
            pt: 'Codesenhei e conduzi o Acolher, um programa comunitário online de seis meses para 52 participantes de todo o Brasil. Veja abaixo.',
            de: 'Mitgestaltet und geleitet: Acolher, ein sechsmonatiges Online-Community-Programm für 52 Teilnehmende in ganz Brasilien. Siehe unten.',
            es: 'Codiseñé y dirigí Acolher, un programa comunitario en línea de seis meses para 52 participantes de todo Brasil. Ver abajo.',
          },
        },
        {
          y: '2018–20', t: 'UC San Diego, Department of Visual Arts',
          m: { en: 'Teaching', pt: 'Docência', de: 'Lehre', es: 'Docencia' },
        },
        {
          y: '2016–17', t: '32ª Bienal de São Paulo',
          m: { en: 'Educator · São Paulo', pt: 'Educador · São Paulo', de: 'Kunstvermittler · São Paulo', es: 'Educador · São Paulo' },
          d: {
            en: '120+ guided experiences through 81 artists and 300+ works, for groups of twenty at a time.',
            pt: 'Mais de 120 visitas mediadas por 81 artistas e mais de 300 obras, para grupos de vinte pessoas.',
            de: 'Über 120 Führungen durch 81 künstlerische Positionen und mehr als 300 Werke, für Gruppen von jeweils zwanzig Personen.',
            es: 'Más de 120 visitas guiadas por 81 artistas y más de 300 obras, para grupos de veinte personas.',
          },
        },
        {
          y: '2010–16', t: { en: 'Independent practice', pt: 'Prática independente', de: 'Freie Praxis', es: 'Práctica independiente' },
          m: { en: 'Campinas and São Paulo', pt: 'Campinas e São Paulo', de: 'Campinas und São Paulo', es: 'Campinas y São Paulo' },
          d: {
            en: 'Site-specific arts festivals, documentaries on media democracy, and 150+ multimedia projects.',
            pt: 'Festivais de arte site-specific, documentários sobre democratização da comunicação e mais de 150 projetos multimídia.',
            de: 'Ortsspezifische Kunstfestivals, Dokumentarfilme über Mediendemokratie und über 150 Multimedia-Projekte.',
            es: 'Festivales de arte site-specific, documentales sobre democratización de los medios y más de 150 proyectos multimedia.',
          },
        },
      ],
    },
    {
      h: { en: 'Selected projects', pt: 'Projetos selecionados', de: 'Ausgewählte Projekte', es: 'Proyectos seleccionados' },
      items: [
        {
          y: '2025–26', t: 'PET Arena', href: 'https://developers.tiktok.com/blog/oblivious-tiktok-launch-privacy-ctf-pet-arena',
          m: { en: 'TikTok × Oblivious', pt: 'TikTok × Oblivious', de: 'TikTok × Oblivious', es: 'TikTok × Oblivious' },
          d: {
            en: 'A European capture-the-flag competition that convened 100+ privacy engineering researchers to red-team differential privacy systems. The brief said CTF; what got built was a gathering, from invitation and onboarding to meetups in Dublin and an awards night in Munich.',
            pt: 'Uma competição europeia de capture the flag que reuniu mais de 100 pesquisadores de engenharia de privacidade para testar ataques contra sistemas de privacidade diferencial. O briefing pedia um CTF; o que se construiu foi um encontro, do convite e do onboarding aos meetups em Dublin e à premiação em Munique.',
            de: 'Ein europäischer Capture-the-Flag-Wettbewerb, bei dem über 100 Privacy-Engineering-Forschende Differential-Privacy-Systeme im Red-Teaming prüften. Der Auftrag lautete CTF; entstanden ist eine Zusammenkunft – von Einladung und Onboarding bis zu Meetups in Dublin und einer Preisverleihung in München.',
            es: 'Una competición europea de capture the flag que reunió a más de 100 investigadores en ingeniería de privacidad para hacer red teaming a sistemas de privacidad diferencial. El encargo decía CTF; lo que se construyó fue un encuentro, desde la invitación y el onboarding hasta los meetups en Dublín y la entrega de premios en Múnich.',
          },
        },
        {
          y: '2025', t: { en: 'Designing AI-ready data safeguards with confidential computing', pt: 'Salvaguardas de dados para IA com computação confidencial', de: 'KI-taugliche Datenschutzmechanismen mit Confidential Computing', es: 'Salvaguardas de datos para IA con computación confidencial' },
          href: 'https://confidentialcomputing.io/2025/10/27/designing-ai-data-safeguards-together-a-look-back-at-cccs-san-francisco-workshop/',
          m: { en: 'Linux Foundation Confidential Computing Consortium · San Francisco', pt: 'Linux Foundation Confidential Computing Consortium · São Francisco', de: 'Linux Foundation Confidential Computing Consortium · San Francisco', es: 'Linux Foundation Confidential Computing Consortium · San Francisco' },
          d: {
            en: 'Proposed and facilitated a cross-industry workshop with NVIDIA, Intel, Meta, Google and JPMorgan Chase around a question none of them could answer alone. Member of the consortium’s outreach committee.',
            pt: 'Propus e facilitei uma oficina intersetorial com NVIDIA, Intel, Meta, Google e JPMorgan Chase em torno de uma pergunta que nenhuma delas responderia sozinha. Membro do comitê de outreach do consórcio.',
            de: 'Konzeption und Moderation eines branchenübergreifenden Workshops mit NVIDIA, Intel, Meta, Google und JPMorgan Chase zu einer Frage, die keiner allein beantworten konnte. Mitglied im Outreach-Komitee des Konsortiums.',
            es: 'Propuse y facilité un taller intersectorial con NVIDIA, Intel, Meta, Google y JPMorgan Chase en torno a una pregunta que ninguna podía responder sola. Miembro del comité de difusión del consorcio.',
          },
        },
        {
          y: '2025–26', t: 'State of Open Con 26', href: 'https://stateofopencon.com/',
          m: { en: 'OpenUK · Advisory Board', pt: 'OpenUK · Conselho consultivo', de: 'OpenUK · Beirat', es: 'OpenUK · Consejo asesor' },
          d: {
            en: 'Shaping the program of one of Europe’s main open-source conferences as the field turns towards agentic AI and open models.',
            pt: 'Curadoria do programa de uma das principais conferências de código aberto da Europa, num momento em que o campo se volta para IA agêntica e modelos abertos.',
            de: 'Programmgestaltung für eine der wichtigsten Open-Source-Konferenzen Europas, während sich das Feld agentischer KI und offenen Modellen zuwendet.',
            es: 'Programación de una de las principales conferencias de código abierto de Europa, en un momento en que el campo se orienta hacia la IA agéntica y los modelos abiertos.',
          },
        },
        {
          y: '2023–24', t: 'Applied Social Media Lab', href: 'https://asml.cyber.harvard.edu/',
          m: { en: 'Berkman Klein Center, Harvard', pt: 'Berkman Klein Center, Harvard', de: 'Berkman Klein Center, Harvard', es: 'Berkman Klein Center, Harvard' },
          d: {
            en: 'Recruitment criteria, welcome rituals, engagement cadence, in-person sprints and feedback systems for 30+ fellows and technologists. Projects that left as standalone products and organizations include Frankly, Minus, Term Tabs, Accountability Infrastructure, Social Media Explorer and TransparencyHub. A public event with the Frankly team tested a political-spectrum matching algorithm for a platform later used by 3,000+ people in national deliberations.',
            pt: 'Critérios de seleção, rituais de boas-vindas, cadência de engajamento, sprints presenciais e sistemas de feedback para mais de 30 fellows e tecnólogos. Entre os projetos que viraram produtos e organizações independentes: Frankly, Minus, Term Tabs, Accountability Infrastructure, Social Media Explorer e TransparencyHub. Um evento público com a equipe do Frankly testou um algoritmo de pareamento por espectro político para uma plataforma depois usada por mais de 3.000 pessoas em deliberações nacionais.',
            de: 'Auswahlkriterien, Willkommensrituale, Engagement-Rhythmus, Präsenz-Sprints und Feedbacksysteme für über 30 Fellows und Technolog:innen. Daraus hervorgegangen sind eigenständige Produkte und Organisationen wie Frankly, Minus, Term Tabs, Accountability Infrastructure, Social Media Explorer und TransparencyHub. Eine öffentliche Veranstaltung mit dem Frankly-Team testete einen Matching-Algorithmus entlang des politischen Spektrums – für eine Plattform, die später über 3.000 Menschen in nationalen Deliberationen nutzten.',
            es: 'Criterios de selección, rituales de bienvenida, cadencia de participación, sprints presenciales y sistemas de retroalimentación para más de 30 fellows y tecnólogos. Entre los proyectos que salieron como productos y organizaciones independientes: Frankly, Minus, Term Tabs, Accountability Infrastructure, Social Media Explorer y TransparencyHub. Un evento público con el equipo de Frankly probó un algoritmo de emparejamiento por espectro político para una plataforma usada después por más de 3.000 personas en deliberaciones nacionales.',
          },
        },
        {
          y: '2022–23', t: 'RSM Assembly Fellowship', check: true, href: 'https://rebootingsocialmedia.org/fellows-summary/',
          m: { en: 'Institute for Rebooting Social Media, Harvard', pt: 'Institute for Rebooting Social Media, Harvard', de: 'Institute for Rebooting Social Media, Harvard', es: 'Institute for Rebooting Social Media, Harvard' },
          d: {
            en: 'The Institute’s fellowships brought together 30+ engineers, lawyers, researchers and designers, with a six-month Assembly cohort at the core; together they shipped thirteen products, services and frameworks. I ran the program end to end, from recruitment and cadence to coaching and the sense-making tools the cohort thought with.',
            pt: 'Os fellowships do Instituto reuniram mais de 30 engenheiros, advogados, pesquisadores e designers, com uma turma Assembly de seis meses no centro; juntos, entregaram treze produtos, serviços e frameworks. Conduzi o programa de ponta a ponta, da seleção e da cadência à mentoria e às ferramentas com que a turma pensava.',
            de: 'Die Fellowships des Instituts brachten über 30 Ingenieur:innen, Jurist:innen, Forschende und Designer:innen zusammen, im Kern eine sechsmonatige Assembly-Kohorte; gemeinsam entstanden dreizehn Produkte, Dienste und Frameworks. Ich habe das Programm von Anfang bis Ende geleitet – von Auswahl und Rhythmus bis zu Coaching und den Denkwerkzeugen der Kohorte.',
            es: 'Los fellowships del Instituto reunieron a más de 30 ingenieros, abogados, investigadores y diseñadores, con una cohorte Assembly de seis meses en el centro; juntos lanzaron trece productos, servicios y marcos de trabajo. Dirigí el programa de principio a fin, desde la selección y la cadencia hasta la mentoría y las herramientas con las que pensaba la cohorte.',
          },
        },
        {
          y: '2022–24', t: { en: 'Public programs', pt: 'Programação pública', de: 'Öffentliche Programme', es: 'Programación pública' },
          m: { en: 'Berkman Klein Center, Harvard', pt: 'Berkman Klein Center, Harvard', de: 'Berkman Klein Center, Harvard', es: 'Berkman Klein Center, Harvard' },
          d: {
            en: 'Forty-plus events run end to end across both programs, among them Now & Next: Platform Accountability and Content Governance at Harvard Law School (2023), Imagining Alternative Social Media Designs with Ben Grosser, and a workshop with the Obama Foundation’s Voyager Scholars.',
            pt: 'Mais de quarenta encontros realizados do início ao fim nos dois programas, entre eles Now & Next: Platform Accountability and Content Governance, na Harvard Law School (2023), Imagining Alternative Social Media Designs, com Ben Grosser, e uma oficina com os Voyager Scholars da Obama Foundation.',
            de: 'Über vierzig Veranstaltungen von Anfang bis Ende, in beiden Programmen, darunter Now & Next: Platform Accountability and Content Governance an der Harvard Law School (2023), Imagining Alternative Social Media Designs mit Ben Grosser und ein Workshop mit den Voyager Scholars der Obama Foundation.',
            es: 'Más de cuarenta encuentros organizados de principio a fin en ambos programas, entre ellos Now & Next: Platform Accountability and Content Governance en la Harvard Law School (2023), Imagining Alternative Social Media Designs con Ben Grosser y un taller con los Voyager Scholars de la Obama Foundation.',
          },
        },
        {
          y: '2021–26', t: { en: 'Edgelands Institute communications and archive', pt: 'Comunicação e arquivo do Edgelands Institute', de: 'Kommunikation und Archiv des Edgelands Institute', es: 'Comunicación y archivo del Edgelands Institute' },
          href: 'https://www.edgelands.institute/archive_home.html',
          m: { en: 'Geneva · Medellín · Nairobi · Houston', pt: 'Genebra · Medellín · Nairóbi · Houston', de: 'Genf · Medellín · Nairobi · Houston', es: 'Ginebra · Medellín · Nairobi · Houston' },
          d: {
            en: 'The global launch and city campaigns of a pop-up institute on the digitalization of urban security, and later its public archive, designed with Yves Daccord, Laura García Vargas, Alexandre Bovey, Flávia Lozano and Eva Yampolsky.',
            pt: 'O lançamento global e as campanhas locais de um instituto pop-up sobre a digitalização da segurança urbana e, depois, seu arquivo público, desenhado com Yves Daccord, Laura García Vargas, Alexandre Bovey, Flávia Lozano e Eva Yampolsky.',
            de: 'Globaler Launch und Stadtkampagnen eines Pop-up-Instituts zur Digitalisierung urbaner Sicherheit – und später sein öffentliches Archiv, gestaltet mit Yves Daccord, Laura García Vargas, Alexandre Bovey, Flávia Lozano und Eva Yampolsky.',
            es: 'El lanzamiento global y las campañas locales de un instituto pop-up sobre la digitalización de la seguridad urbana y, más tarde, su archivo público, diseñado con Yves Daccord, Laura García Vargas, Alexandre Bovey, Flávia Lozano y Eva Yampolsky.',
          },
        },
        {
          y: '2020–22', t: 'Acolher',
          m: { en: 'Natura &Co · Brazil', pt: 'Natura &Co · Brasil', de: 'Natura &Co · Brasilien', es: 'Natura &Co · Brasil' },
          d: {
            en: 'A six-month online community program for 52 participants, built on WhatsApp, the tool people already used, during the worst of the pandemic. Participant submissions became stories, videos and podcasts. Retention was 96%, and Natura made the program permanent.',
            pt: 'Um programa comunitário online de seis meses para 52 participantes, construído no WhatsApp, a ferramenta que as pessoas já usavam, no pior momento da pandemia. As contribuições viravam histórias, vídeos e podcasts. A retenção foi de 96% e a Natura tornou o programa permanente.',
            de: 'Ein sechsmonatiges Online-Community-Programm für 52 Teilnehmende, mitten in der härtesten Phase der Pandemie auf WhatsApp gebaut – dem Werkzeug, das alle schon nutzten. Beiträge wurden zu Geschichten, Videos und Podcasts. 96 % blieben dabei, und Natura hat das Programm verstetigt.',
            es: 'Un programa comunitario en línea de seis meses para 52 participantes, construido sobre WhatsApp, la herramienta que la gente ya usaba, en el peor momento de la pandemia. Las contribuciones se convertían en historias, vídeos y pódcasts. La retención fue del 96 % y Natura hizo el programa permanente.',
          },
        },
        {
          y: { en: 'ongoing', pt: 'em curso', de: 'laufend', es: 'en curso' }, t: 'Hermes Experimental Studio',
          m: { en: 'Self-hosted AI studio', pt: 'Estúdio de IA auto-hospedado', de: 'Selbst gehostetes KI-Studio', es: 'Estudio de IA autoalojado' },
          d: {
            en: 'A self-hosted, AI-native development studio with multi-agent orchestration on European infrastructure. A way of staying a practitioner in the agentic-AI builder community.',
            pt: 'Um estúdio de desenvolvimento nativo em IA, auto-hospedado em infraestrutura europeia, com orquestração de múltiplos agentes. Uma forma de seguir praticando na comunidade de quem constrói com IA agêntica.',
            de: 'Ein selbst gehostetes, KI-natives Entwicklungsstudio mit Multi-Agenten-Orchestrierung auf europäischer Infrastruktur. Meine Art, in der Agentic-AI-Community selbst Praktiker zu bleiben.',
            es: 'Un estudio de desarrollo nativo en IA, autoalojado en infraestructura europea, con orquestación de múltiples agentes. Una manera de seguir siendo practicante en la comunidad que construye con IA agéntica.',
          },
        },
      ],
    },
    {
      h: { en: 'Education', pt: 'Formação', de: 'Ausbildung', es: 'Formación' },
      items: [
        {
          y: '2020', t: 'University of California San Diego',
          m: { en: 'MFA, Visual Arts and Speculative Design', pt: 'MFA, Artes Visuais e Design Especulativo', de: 'MFA, Bildende Kunst und spekulatives Design', es: 'MFA, Artes Visuales y Diseño Especulativo' },
          d: {
            en: 'Chancellor’s Interdisciplinary Collaboratories grant. Waggaman Media Award for outstanding graduate film practice.',
            pt: 'Bolsa Chancellor’s Interdisciplinary Collaboratories. Prêmio Waggaman de destaque em prática cinematográfica na pós-graduação.',
            de: 'Chancellor’s Interdisciplinary Collaboratories Grant. Waggaman Media Award für herausragende filmische Praxis.',
            es: 'Beca Chancellor’s Interdisciplinary Collaboratories. Premio Waggaman a la práctica cinematográfica destacada de posgrado.',
          },
        },
        {
          y: '2015', t: 'Universidade Estadual de Campinas (UNICAMP)',
          m: { en: 'BA, Media Studies (Midialogia)', pt: 'Bacharelado em Midialogia (Comunicação Social)', de: 'BA, Medienwissenschaft (Midialogia)', es: 'Grado en Estudios de Medios (Midialogia)' },
          d: {
            en: 'Science Without Borders exchange at Erasmus University Rotterdam and the Royal Academy of Art, The Hague. São Paulo State bachelor fellowship.',
            pt: 'Intercâmbio Ciência sem Fronteiras na Erasmus University Rotterdam e na Royal Academy of Art, em Haia. Bolsa de iniciação científica do Estado de São Paulo.',
            de: 'Austausch über Science Without Borders an der Erasmus-Universität Rotterdam und der Royal Academy of Art in Den Haag. Stipendium des Bundesstaats São Paulo.',
            es: 'Intercambio de Ciencia sin Fronteras en la Universidad Erasmus de Róterdam y la Real Academia de Arte de La Haya. Beca del Estado de São Paulo.',
          },
        },
        {
          t: { en: 'Languages', pt: 'Idiomas', de: 'Sprachen', es: 'Idiomas' },
          m: { en: 'Portuguese (native) · English (fluent) · German and Spanish (advanced) · Italian (basic)', pt: 'Português (nativo) · Inglês (fluente) · Alemão e espanhol (avançado) · Italiano (básico)', de: 'Portugiesisch (Muttersprache) · Englisch (fließend) · Deutsch und Spanisch (fortgeschritten) · Italienisch (Grundkenntnisse)', es: 'Portugués (nativo) · Inglés (fluido) · Alemán y español (avanzado) · Italiano (básico)' },
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------- FILMS & ART */

export const art = {
  title: nav[1].label,
  intro: {
    en: 'Films, live cinema, radio and interactive diagrams, mostly about media and how it gets made. Older work and documentation live at <a href="https://matguzzo.com/">matguzzo.com</a>.',
    pt: 'Filmes, cinema ao vivo, rádio e diagramas interativos, quase sempre sobre mídia e como ela é feita. Trabalhos antigos e documentação estão em <a href="https://matguzzo.com/matguzzo-com-br">matguzzo.com</a>.',
    de: 'Filme, Live-Kino, Radio und interaktive Diagramme – meist über Medien und darüber, wie sie gemacht werden. Ältere Arbeiten und Dokumentation unter <a href="https://matguzzo.com/">matguzzo.com</a>.',
    es: 'Películas, cine en vivo, radio y diagramas interactivos, casi siempre sobre los medios y cómo se hacen. Trabajos anteriores y documentación en <a href="https://matguzzo.com/">matguzzo.com</a>.',
  },
  sections: [
    {
      items: [
        {
          y: { en: 'in development', pt: 'em desenvolvimento', de: 'in Entwicklung', es: 'en desarrollo' }, id: 'grande-assalto', check: true,
          t: { en: '<i>O Grande Assalto ao Pão de Açúcar</i>', pt: '<i>O Grande Assalto ao Pão de Açúcar</i>', de: '<i>O Grande Assalto ao Pão de Açúcar</i>', es: '<i>O Grande Assalto ao Pão de Açúcar</i>' },
          m: { en: 'Feature film · director', pt: 'Longa-metragem · direção', de: 'Spielfilm · Regie', es: 'Largometraje · dirección' },
          d: {
            en: 'Written with Tenca Silva. Produced by Yghor Boy and Rodrigo Faustini; Iolanda Depizzol is assistant director and editor.',
            pt: 'Roteiro com Tenca Silva. Produção de Yghor Boy e Rodrigo Faustini; assistência de direção e montagem de Iolanda Depizzol.',
            de: 'Drehbuch mit Tenca Silva. Produziert von Yghor Boy und Rodrigo Faustini; Regieassistenz und Schnitt: Iolanda Depizzol.',
            es: 'Guion con Tenca Silva. Producción de Yghor Boy y Rodrigo Faustini; ayudantía de dirección y montaje de Iolanda Depizzol.',
          },
        },
        {
          y: '2026', id: 'third-world-manager', href: 'third-world-manager.html',
          t: { en: '<i>Third World Manager</i> (<i>Empresário do Terceiro Mundo</i>)', pt: '<i>Empresário do Terceiro Mundo</i>', de: '<i>Third World Manager</i> (<i>Empresário do Terceiro Mundo</i>)', es: '<i>Third World Manager</i> (<i>Empresário do Terceiro Mundo</i>)' },
          m: { en: 'Creative nonfiction · 66 min · director', pt: 'Documentário de ficção · 66 min · direção', de: 'Kreativer Dokumentarfilm · 66 Min. · Regie', es: 'No ficción creativa · 66 min · dirección' },
          d: {
            en: 'Angelo Madson Tupinambá coordinates Idade Mídia, a community web radio in Belém do Pará. After we meet at a talk I give on speculative design, I become his business consultant and film the attempt to take the station to market. Shot in 2018 as my UC San Diego MFA thesis and finished eight years later. World premiere in the first Mostra Amazônia at the 8th Festival de Cinema da Amazônia – Olhar do Norte, Teatro Amazonas, Manaus, 25 September 2026. Coproduced with Angelo Madson Tupinambá, Ruli Moretti and Rodrigo Faustini.',
            pt: 'Angelo Madson Tupinambá coordena a Idade Mídia, uma web rádio comunitária em Belém do Pará. Depois de nos conhecermos numa palestra que dou sobre design especulativo, viro seu consultor de negócios e filmo a tentativa de levar a rádio ao mercado. Filmado em 2018 como minha tese de MFA na UC San Diego e finalizado oito anos depois. Estreia mundial na primeira Mostra Amazônia do 8º Festival de Cinema da Amazônia – Olhar do Norte, no Teatro Amazonas, em Manaus, em 25 de setembro de 2026. Coprodução com Angelo Madson Tupinambá, Ruli Moretti e Rodrigo Faustini.',
            de: 'Angelo Madson Tupinambá koordiniert Idade Mídia, ein Community-Webradio in Belém do Pará. Nachdem wir uns bei einem Vortrag über spekulatives Design kennenlernen, werde ich sein Unternehmensberater und filme den Versuch, den Sender marktfähig zu machen. 2018 als Abschlussarbeit meines MFA an der UC San Diego gedreht, acht Jahre später fertiggestellt. Weltpremiere in der ersten Mostra Amazônia beim 8. Festival de Cinema da Amazônia – Olhar do Norte, Teatro Amazonas, Manaus, 25. September 2026. Koproduziert mit Angelo Madson Tupinambá, Ruli Moretti und Rodrigo Faustini.',
            es: 'Angelo Madson Tupinambá coordina Idade Mídia, una radio web comunitaria en Belém do Pará. Después de conocernos en una charla que doy sobre diseño especulativo, me convierto en su consultor de negocios y filmo el intento de llevar la emisora al mercado. Rodada en 2018 como mi tesis de MFA en la UC San Diego y terminada ocho años después. Estreno mundial en la primera Mostra Amazônia del 8.º Festival de Cinema da Amazônia – Olhar do Norte, Teatro Amazonas, Manaos, 25 de septiembre de 2026. Coproducida con Angelo Madson Tupinambá, Ruli Moretti y Rodrigo Faustini.',
          },
        },
        {
          y: { en: 'ongoing', pt: 'em curso', de: 'laufend', es: 'en curso' }, id: 'demofm', t: 'DemoFM', check: true,
          m: { en: 'Event radio and party series', pt: 'Rádio de eventos e série de festas', de: 'Event-Radio und Partyreihe', es: 'Radio de eventos y serie de fiestas' },
          d: {
            en: 'Small parties among friends, in different places, with a political tone. The radio is live while the party happens; the recordings go back online afterwards.',
            pt: 'Festas pequenas entre amigos, em lugares diferentes, com tom político. A rádio fica no ar durante a festa; as gravações voltam para a internet depois.',
            de: 'Kleine Partys unter Freund:innen an wechselnden Orten, mit politischem Unterton. Das Radio sendet live, solange gefeiert wird; die Aufnahmen kommen danach online.',
            es: 'Fiestas pequeñas entre amigos, en distintos lugares, con un tono político. La radio está en vivo mientras dura la fiesta; las grabaciones vuelven a internet después.',
          },
        },
        {
          y: '2024', href: 'https://jer.openlibhums.org/article/10464/',
          t: '<i>Letters to the Landscape (or an Alphabet in Ruins)</i>',
          m: { en: 'Video article with Marina Guzzo · original soundtrack · Journal of Embodied Research', pt: 'Videoartigo com Marina Guzzo · trilha original · Journal of Embodied Research', de: 'Videoartikel mit Marina Guzzo · Originalmusik · Journal of Embodied Research', es: 'Videoartículo con Marina Guzzo · banda sonora original · Journal of Embodied Research' },
          d: {
            en: 'A crossing through the Anthropocene as an (un)alphabetical list of letters: WhatsApp audios, YouTube lives and book excerpts addressed to landscapes.',
            pt: 'Uma travessia pelo Antropoceno em forma de lista (des)alfabética de cartas: áudios de WhatsApp, lives do YouTube e trechos de livros endereçados a paisagens.',
            de: 'Eine Durchquerung des Anthropozäns als (un)alphabetische Liste von Briefen: WhatsApp-Sprachnachrichten, YouTube-Livestreams und Buchauszüge, adressiert an Landschaften.',
            es: 'Una travesía por el Antropoceno en forma de lista (des)alfabética de cartas: audios de WhatsApp, directos de YouTube y fragmentos de libros dirigidos a paisajes.',
          },
        },
        {
          y: '2021', id: 'public-audio', t: 'Public Audio', href: 'https://excavations.digital/projects/public-audio/',
          m: { en: 'Interactive diagram and simulation model · with Nathan Schneider, Media Economies Design Lab, CU Boulder', pt: 'Diagrama interativo e modelo de simulação · com Nathan Schneider, Media Economies Design Lab, CU Boulder', de: 'Interaktives Diagramm und Simulationsmodell · mit Nathan Schneider, Media Economies Design Lab, CU Boulder', es: 'Diagrama interactivo y modelo de simulación · con Nathan Schneider, Media Economies Design Lab, CU Boulder' },
          d: {
            en: 'A speculative governance dashboard for Brazil’s public sphere, after Stafford Beer’s Cybersyn: six recursive layers of the media ecosystem as a navigable interface, proposing recursive algorithmic audit. Shown in the Excavations online exhibition and at the 16th Internet Governance Forum.',
            pt: 'Um painel especulativo de governança da esfera pública brasileira, inspirado no Cybersyn de Stafford Beer: seis camadas recursivas do ecossistema de mídia como interface navegável, propondo auditoria algorítmica recursiva. Exibido na mostra online Excavations e no 16º Fórum de Governança da Internet.',
            de: 'Ein spekulatives Governance-Dashboard für Brasiliens Öffentlichkeit, nach Stafford Beers Cybersyn: sechs rekursive Ebenen des Medienökosystems als navigierbares Interface, mit dem Vorschlag eines rekursiven Algorithmen-Audits. Gezeigt in der Online-Ausstellung Excavations und beim 16. Internet Governance Forum.',
            es: 'Un tablero especulativo de gobernanza para la esfera pública brasileña, a partir del Cybersyn de Stafford Beer: seis capas recursivas del ecosistema mediático como interfaz navegable, proponiendo una auditoría algorítmica recursiva. Presentado en la exposición en línea Excavations y en el 16.º Foro de Gobernanza de Internet.',
          },
        },
        {
          y: '2020', t: '<i>Future Number 2</i>',
          m: { en: 'Newspaper · MFA 2020 Thesis Group Show, UC San Diego', pt: 'Jornal · MFA 2020 Thesis Group Show, UC San Diego', de: 'Zeitung · MFA 2020 Thesis Group Show, UC San Diego', es: 'Periódico · MFA 2020 Thesis Group Show, UC San Diego' },
          d: {
            en: 'A newspaper-format apparatus that gave context to the production, interpretation and archiving of the thesis show, and to the distance between the fetish of the artist and art as labor.',
            pt: 'Um dispositivo em formato de jornal que contextualizava a produção, a leitura e o arquivamento da mostra, e a distância entre o fetiche do artista e a arte como trabalho.',
            de: 'Ein Apparat im Zeitungsformat, der Produktion, Deutung und Archivierung der Abschlussausstellung kontextualisierte – und die Distanz zwischen dem Fetisch des Künstlers und Kunst als Arbeit.',
            es: 'Un dispositivo en formato de periódico que contextualizaba la producción, la interpretación y el archivo de la muestra, y la distancia entre el fetiche del artista y el arte como trabajo.',
          },
        },
        {
          y: '2019', t: 'Metajornal', href: 'https://visarts.ucsd.edu/news-events/archive/20190607_mateusguzzo-metajornal.html',
          m: { en: 'News aggregator for Brazilian alternative media · with Qianzi Li, Rodrigo Souza and Danilo Gasques', pt: 'Agregador de notícias da mídia alternativa brasileira · com Qianzi Li, Rodrigo Souza e Danilo Gasques', de: 'Nachrichtenaggregator für brasilianische alternative Medien · mit Qianzi Li, Rodrigo Souza und Danilo Gasques', es: 'Agregador de noticias de medios alternativos brasileños · con Qianzi Li, Rodrigo Souza y Danilo Gasques' },
        },
        {
          y: '2019', t: 'Bureau of Artistic Research (B.A.R.)',
          m: { en: 'Community-art happening · UC San Diego', pt: 'Happening de arte comunitária · UC San Diego', de: 'Community-Art-Happening · UC San Diego', es: 'Happening de arte comunitario · UC San Diego' },
        },
        {
          y: '2018', t: 'LACES(D) · Design Especulativo Latinoamericano',
          m: { en: 'Open conference · UC San Diego Visual Arts, April 2018', pt: 'Conferência aberta · Artes Visuais, UC San Diego, abril de 2018', de: 'Offene Konferenz · UC San Diego Visual Arts, April 2018', es: 'Conferencia abierta · Artes Visuales, UC San Diego, abril de 2018' },
          d: {
            en: 'A lecture, an expert meeting and a moderated panel on speculative design as knowledge, politics and art, centred on Latin America. Proceedings on request.',
            pt: 'Uma palestra, um encontro de especialistas e um painel mediado sobre o design especulativo como campo de conhecimento, prática política e artística, a partir da América Latina. Anais sob pedido.',
            de: 'Ein Vortrag, ein Expert:innentreffen und ein moderiertes Panel über spekulatives Design als Wissen, Politik und Kunst, aus lateinamerikanischer Perspektive. Tagungsband auf Anfrage.',
            es: 'Una conferencia, una reunión de especialistas y un panel moderado sobre el diseño especulativo como conocimiento, política y arte, desde América Latina. Actas bajo petición.',
          },
        },
        {
          y: '2017', t: 'Transmissão Fordlândia', href: 'https://wavefarm.org/wf/archive/xz8ad3',
          m: { en: 'Two-day radio event with radioee.net · Fordlândia, Pará', pt: 'Evento de rádio de dois dias com a radioee.net · Fordlândia, Pará', de: 'Zweitägiges Radio-Event mit radioee.net · Fordlândia, Pará', es: 'Evento radiofónico de dos días con radioee.net · Fordlândia, Pará' },
          d: {
            en: 'Sound collaborator, with Agustina Woodgate, Stephanie Sherman, Ruli Moretti and Angelo Madson, in the town Henry Ford built in the Amazon.',
            pt: 'Colaboração sonora, com Agustina Woodgate, Stephanie Sherman, Ruli Moretti e Angelo Madson, na cidade que Henry Ford construiu na Amazônia.',
            de: 'Sound-Kollaboration mit Agustina Woodgate, Stephanie Sherman, Ruli Moretti und Angelo Madson, in der Stadt, die Henry Ford im Amazonas baute.',
            es: 'Colaboración sonora, con Agustina Woodgate, Stephanie Sherman, Ruli Moretti y Angelo Madson, en la ciudad que Henry Ford construyó en la Amazonía.',
          },
        },
        {
          y: '2015', t: 'Public Concession',
          m: { en: 'Photo series · Museu da Imagem e do Som de Campinas · supported by FAPESP', pt: 'Série fotográfica · Museu da Imagem e do Som de Campinas · apoio FAPESP', de: 'Fotoserie · Museu da Imagem e do Som de Campinas · gefördert von FAPESP', es: 'Serie fotográfica · Museu da Imagem e do Som de Campinas · con apoyo de FAPESP' },
          d: {
            en: 'Documenting the bus network of Campinas.',
            pt: 'Um registro da rede de ônibus de Campinas.',
            de: 'Eine Dokumentation des Busnetzes von Campinas.',
            es: 'Un registro de la red de autobuses de Campinas.',
          },
        },
        {
          y: '2014–16', id: 'evento-do-facebook', t: '<i>Evento do Facebook</i>', href: 'https://www.youtube.com/watch?v=YLgFmb_uof4', check: true,
          m: { en: 'Live cinema · director', pt: 'Cinema ao vivo · direção', de: 'Live-Kino · Regie', es: 'Cine en vivo · dirección' },
          d: {
            en: 'Alex loses access to his Facebook profile, then learns it has been taken over by an agent posing as his doppelgänger. A live expanded-cinema installation made with 50+ students and guest artists at UNICAMP, later staged as a 72-minute live feature at Teatro Castro Mendes, Campinas. UNICAMP Student-Artist Award, 2015.',
            pt: 'Alex perde o acesso ao seu perfil no Facebook e descobre que ele foi tomado por um agente que se passa por seu duplo. Uma instalação de cinema expandido ao vivo feita com mais de 50 estudantes e artistas convidados na UNICAMP, depois encenada como longa ao vivo de 72 minutos no Teatro Castro Mendes, em Campinas. Prêmio Aluno-Artista da UNICAMP, 2015.',
            de: 'Alex verliert den Zugang zu seinem Facebook-Profil und erfährt dann, dass ein Agent es übernommen hat, der sich als sein Doppelgänger ausgibt. Eine Live-Expanded-Cinema-Installation mit über 50 Studierenden und Gastkünstler:innen an der UNICAMP, später als 72-minütiger Live-Spielfilm im Teatro Castro Mendes in Campinas aufgeführt. UNICAMP-Preis Aluno-Artista, 2015.',
            es: 'Alex pierde el acceso a su perfil de Facebook y descubre que lo ha tomado un agente que se hace pasar por su doble. Una instalación de cine expandido en vivo hecha con más de 50 estudiantes y artistas invitados en la UNICAMP, luego presentada como largometraje en vivo de 72 minutos en el Teatro Castro Mendes de Campinas. Premio Aluno-Artista de la UNICAMP, 2015.',
          },
        },
        {
          y: '2013', t: '<i>Attached</i>',
          m: { en: 'Super 8 short · FilmHuis Den Haag · Vida de Perro Festival', pt: 'Curta em Super 8 · FilmHuis Den Haag · Festival Vida de Perro', de: 'Super-8-Kurzfilm · FilmHuis Den Haag · Festival Vida de Perro', es: 'Cortometraje en Super 8 · FilmHuis Den Haag · Festival Vida de Perro' },
          d: {
            en: 'Longing and distance, as an exchange student.',
            pt: 'Saudade e distância, como estudante de intercâmbio.',
            de: 'Sehnsucht und Distanz, als Austauschstudent.',
            es: 'Añoranza y distancia, como estudiante de intercambio.',
          },
        },
        {
          y: '2010s', t: 'Petit Festival de Janeiro', href: 'https://www.youtube.com/watch?v=Cjq7bJLCcXE', check: true,
          m: { en: 'Site-specific arts and music festival · Campinas', pt: 'Festival site-specific de arte e música · Campinas', de: 'Ortsspezifisches Kunst- und Musikfestival · Campinas', es: 'Festival site-specific de arte y música · Campinas' },
          d: {
            en: 'An attempt to collectively occupy and transform an upscale neighbourhood in Campinas.',
            pt: 'Uma tentativa de ocupar e transformar coletivamente um bairro nobre de Campinas.',
            de: 'Der Versuch, ein wohlhabendes Viertel in Campinas gemeinsam zu besetzen und zu verwandeln.',
            es: 'Un intento de ocupar y transformar colectivamente un barrio acomodado de Campinas.',
          },
        },
      ],
    },
  ],
};

/* ---------------------------------------------------------------- RESEARCH */

export const research = {
  title: nav[2].label,
  intro: {
    en: 'I don’t call myself a researcher. But research is how I make things, and one line runs through all of it: from documentary photography method, through speculative design, to the interfaces and infrastructures of platforms. Human-computer interaction, by way of art school.',
    pt: 'Não me chamo de pesquisador. Mas pesquisar é como eu faço as coisas, e existe uma linha que atravessa tudo: do método da fotografia documental ao design especulativo e às interfaces e infraestruturas das plataformas. Interação humano-computador, passando pela escola de arte.',
    de: 'Ich nenne mich nicht Forscher. Aber Forschung ist meine Arbeitsweise, und eine Linie zieht sich durch alles: von der Methode der Dokumentarfotografie über spekulatives Design bis zu den Interfaces und Infrastrukturen von Plattformen. Mensch-Computer-Interaktion, auf dem Umweg über die Kunsthochschule.',
    es: 'No me llamo investigador. Pero investigar es mi manera de hacer las cosas, y hay una línea que lo atraviesa todo: del método de la fotografía documental al diseño especulativo y a las interfaces e infraestructuras de las plataformas. Interacción persona-computadora, pasando por la escuela de arte.',
  },
  threads: [
    {
      y: '2013–17',
      h: { en: 'Images and method', pt: 'Imagem e método', de: 'Bild und Methode', es: 'Imagen y método' },
      p: {
        en: 'At UNICAMP and the Royal Academy of Art in The Hague, I studied how documentary photographers hold their subjects close and at a distance at once. Engagement and estrangement, as a method.',
        pt: 'Na UNICAMP e na Royal Academy of Art, em Haia, estudei como fotógrafos documentais mantêm seus temas ao mesmo tempo perto e à distância. Engajamento e estranhamento como método.',
        de: 'An der UNICAMP und der Royal Academy of Art in Den Haag habe ich untersucht, wie Dokumentarfotograf:innen ihre Motive zugleich nah und auf Distanz halten. Engagement und Verfremdung als Methode.',
        es: 'En la UNICAMP y en la Real Academia de Arte de La Haya estudié cómo los fotógrafos documentales mantienen a sus sujetos cerca y a distancia a la vez. Compromiso y extrañamiento como método.',
      },
    },
    {
      y: '2017–21',
      h: { en: 'Speculative design and sociotechnical systems', pt: 'Design especulativo e sistemas sociotécnicos', de: 'Spekulatives Design und soziotechnische Systeme', es: 'Diseño especulativo y sistemas sociotécnicos' },
      p: {
        en: 'At UC San Diego I used speculative design to prototype alternative media institutions: a conference for Latin American–centred speculative design, a news aggregator for Brazilian alternative media, a study of ritual and protocol at Maker Faire and Burning Man (with Lilly Irani, Matilde Córdoba Azcárate, Charles Thorpe and Ricardo Dominguez), and Public Audio, a Cybersyn-inspired simulation of Brazil’s public sphere built with Nathan Schneider.',
        pt: 'Na UC San Diego, usei o design especulativo para prototipar instituições de mídia alternativas: uma conferência de design especulativo centrado na América Latina, um agregador de notícias da mídia alternativa brasileira, um estudo sobre ritual e protocolo na Maker Faire e no Burning Man (com Lilly Irani, Matilde Córdoba Azcárate, Charles Thorpe e Ricardo Dominguez) e o Áudio Público, uma simulação da esfera pública brasileira inspirada no Cybersyn, feita com Nathan Schneider.',
        de: 'An der UC San Diego habe ich mit spekulativem Design alternative Medieninstitutionen prototypisiert: eine Konferenz für lateinamerikanisch zentriertes spekulatives Design, einen Nachrichtenaggregator für brasilianische alternative Medien, eine Studie über Ritual und Protokoll bei Maker Faire und Burning Man (mit Lilly Irani, Matilde Córdoba Azcárate, Charles Thorpe und Ricardo Dominguez) und Public Audio, eine von Cybersyn inspirierte Simulation der brasilianischen Öffentlichkeit, gebaut mit Nathan Schneider.',
        es: 'En la UC San Diego usé el diseño especulativo para prototipar instituciones mediáticas alternativas: una conferencia de diseño especulativo centrado en América Latina, un agregador de noticias de medios alternativos brasileños, un estudio sobre ritual y protocolo en Maker Faire y Burning Man (con Lilly Irani, Matilde Córdoba Azcárate, Charles Thorpe y Ricardo Dominguez) y Public Audio, una simulación de la esfera pública brasileña inspirada en Cybersyn, hecha con Nathan Schneider.',
      },
    },
    {
      y: '2021–',
      h: { en: 'Interfaces, platforms and verifiable computation', pt: 'Interfaces, plataformas e computação verificável', de: 'Interfaces, Plattformen und verifizierbare Berechnung', es: 'Interfaces, plataformas y computación verificable' },
      p: {
        en: 'At Berkman Klein and TikTok the questions became practical: how fellows design alternative social media, how a deliberation platform matches people across the political spectrum, and how privacy-enhancing technologies and confidential computing could make platforms and AI models auditable without exposing the people in the data.',
        pt: 'No Berkman Klein e no TikTok, as perguntas ficaram práticas: como fellows desenham redes sociais alternativas, como uma plataforma de deliberação aproxima pessoas de diferentes pontos do espectro político, e como tecnologias de proteção de privacidade e computação confidencial podem tornar plataformas e modelos de IA auditáveis sem expor as pessoas que estão nos dados.',
        de: 'Am Berkman Klein Center und bei TikTok wurden die Fragen praktisch: wie Fellows alternative soziale Medien entwerfen, wie eine Deliberationsplattform Menschen über das politische Spektrum hinweg zusammenbringt und wie Privacy-Enhancing Technologies und Confidential Computing Plattformen und KI-Modelle prüfbar machen könnten, ohne die Menschen in den Daten preiszugeben.',
        es: 'En el Berkman Klein y en TikTok las preguntas se volvieron prácticas: cómo diseñan los fellows redes sociales alternativas, cómo una plataforma de deliberación empareja a personas de todo el espectro político, y cómo las tecnologías de mejora de la privacidad y la computación confidencial podrían hacer auditables plataformas y modelos de IA sin exponer a las personas que están en los datos.',
      },
    },
    {
      y: { en: 'next', pt: 'a seguir', de: 'als Nächstes', es: 'lo siguiente' }, check: true,
      h: { en: 'Software’s fourth wall', pt: 'A quarta parede do software', de: 'Die vierte Wand der Software', es: 'La cuarta pared del software' },
      p: {
        en: 'A working paper on interfaces as performative apparatuses that keep us from noticing computation, drawing on Brecht’s estrangement, Harun Farocki’s operational images and Philip Agre’s capture model, and towards the governance of agentic interfaces.',
        pt: 'Um texto em andamento sobre interfaces como dispositivos performativos que nos impedem de perceber a computação, a partir do estranhamento de Brecht, das imagens operativas de Harun Farocki e do modelo de captura de Philip Agre, rumo à governança de interfaces agênticas.',
        de: 'Ein Working Paper über Interfaces als performative Apparate, die verhindern, dass wir Berechnung bemerken – mit Brechts Verfremdung, Harun Farockis operativen Bildern und Philip Agres Capture-Modell, hin zur Governance agentischer Interfaces.',
        es: 'Un texto en curso sobre las interfaces como dispositivos performativos que nos impiden notar la computación, a partir del extrañamiento de Brecht, las imágenes operativas de Harun Farocki y el modelo de captura de Philip Agre, hacia la gobernanza de interfaces agénticas.',
      },
    },
  ],
  pubsTitle: { en: 'Publications', pt: 'Publicações', de: 'Publikationen', es: 'Publicaciones' },
  pubs: [
    { y: '2025', t: 'Ilhas', m: 'M. Guzzo, K. Regina, M. Lisboa, M. Fernandes, E. Artysenk et al. · <i>ClimaCom — Manifesto das águas</i> 12 (28)', check: true },
    { y: '2024', t: 'Letters to the Landscape (or an Alphabet in Ruins)', href: 'https://jer.openlibhums.org/article/10464/', m: 'Marina Guzzo, Mateus Guzzo · <i>Journal of Embodied Research</i> 7 (2)' },
    { y: '2020', t: '<i>Third World Manager</i>', href: 'https://escholarship.org/uc/item/9g10v8pt', m: { en: 'MFA thesis · UC San Diego', pt: 'Dissertação de MFA · UC San Diego', de: 'MFA-Abschlussarbeit · UC San Diego', es: 'Tesis de MFA · UC San Diego' } },
    { y: '2017', t: 'Considering Apparitions: Towards a Conceptual Documentary Photography Methodology', m: 'M. Guzzo, C. Noordenbos · <i>Revista Trama Interdisciplinar</i> 8 (1)' },
    { y: '2017', t: 'Ao olhar, aprender a ver: sobre a prática de fotografia documental', m: 'M. Guzzo, C. Noordenbos · <i>FIF Universidade: mundo imagem mundo</i>, 231–245' },
    { y: '2015', t: 'Engagement and estrangement: contribution to documentary photography methodology', href: 'https://ucsd.academia.edu/MateusGuzzo', m: '<i>Anais do Congresso de Iniciação Científica da Unicamp</i>' },
  ],
  affTitle: { en: 'Affiliations', pt: 'Vínculos', de: 'Zugehörigkeiten', es: 'Afiliaciones' },
  affs: [
    { t: 'LAVITS', href: 'https://lavits.org/', m: { en: 'Member, Latin American Network of Surveillance, Technology and Society Studies', pt: 'Membro da Rede Latino-americana de Estudos sobre Vigilância, Tecnologia e Sociedade', de: 'Mitglied des Lateinamerikanischen Netzwerks für Überwachungs-, Technologie- und Gesellschaftsstudien', es: 'Miembro de la Red Latinoamericana de Estudios sobre Vigilancia, Tecnología y Sociedad' } },
    { t: 'LABCINE, Universidade Presbiteriana Mackenzie', m: { en: 'Collaborating researcher, Laboratory of Cinematic Arts and Visualization', pt: 'Pesquisador colaborador, Laboratório de Artes Cinemáticas e Visualização', de: 'Kooperierender Forscher, Laboratory of Cinematic Arts and Visualization', es: 'Investigador colaborador, Laboratorio de Artes Cinemáticas y Visualización' } },
    { t: 'Edgelands Institute', m: { en: 'Research Associate', pt: 'Pesquisador associado', de: 'Research Associate', es: 'Investigador asociado' } },
    { t: 'Confidential Computing Consortium', href: 'https://confidentialcomputing.io/', m: { en: 'Outreach Committee', pt: 'Comitê de outreach', de: 'Outreach-Komitee', es: 'Comité de difusión' } },
  ],
};

/* --------------------------------------------------------- TALKS & WRITING */

export const talks = {
  title: nav[3].label,
  intro: {
    en: 'Talks, workshops, panels and things I’ve written, across both worlds. Newest first.',
    pt: 'Palestras, oficinas, painéis e textos, dos dois mundos. Os mais recentes primeiro.',
    de: 'Vorträge, Workshops, Panels und Texte aus beiden Welten. Neueste zuerst.',
    es: 'Charlas, talleres, paneles y textos, de los dos mundos. Lo más reciente primero.',
  },
  sections: [
    {
      h: { en: 'Talks and convenings', pt: 'Falas e encontros', de: 'Vorträge und Veranstaltungen', es: 'Charlas y encuentros' },
      items: [
        { y: '2026', t: { en: '<i>Third World Manager</i> · world premiere and Q&A', pt: '<i>Empresário do Terceiro Mundo</i> · estreia mundial e debate', de: '<i>Third World Manager</i> · Weltpremiere und Gespräch', es: '<i>Third World Manager</i> · estreno mundial y coloquio' }, href: 'art.html#third-world-manager', m: '8º Festival de Cinema da Amazônia – Olhar do Norte · Teatro Amazonas, Manaus' },
        { y: '2026', t: 'Private AI: Building Trust Through Verifiable Computation', href: 'https://www.usenix.org/conference/pepr26/presentation/sun', m: { en: 'with Mingshen Sun · PEPR ’26, USENIX · Santa Clara', pt: 'com Mingshen Sun · PEPR ’26, USENIX · Santa Clara', de: 'mit Mingshen Sun · PEPR ’26, USENIX · Santa Clara', es: 'con Mingshen Sun · PEPR ’26, USENIX · Santa Clara' } },
        { y: '2026', t: { en: 'PET Arena awards meetup', pt: 'Premiação da PET Arena', de: 'PET Arena · Preisverleihung', es: 'Entrega de premios de PET Arena' }, m: { en: 'Host · Munich', pt: 'Anfitrião · Munique', de: 'Gastgeber · München', es: 'Anfitrión · Múnich' } },
        { y: '2026', t: 'State of Open Con 26', href: 'https://stateofopencon.com/2025/07/31/2026-mateus-guzzo/', m: { en: 'Advisory Board · OpenUK · London', pt: 'Conselho consultivo · OpenUK · Londres', de: 'Beirat · OpenUK · London', es: 'Consejo asesor · OpenUK · Londres' } },
        { y: '2025', t: { en: 'Designing AI data safeguards together', pt: 'Desenhando juntos salvaguardas de dados para IA', de: 'KI-Datenschutz gemeinsam gestalten', es: 'Diseñar juntos salvaguardas de datos para IA' }, href: 'https://confidentialcomputing.io/2025/10/27/designing-ai-data-safeguards-together-a-look-back-at-cccs-san-francisco-workshop/', m: { en: 'Workshop facilitator · Confidential Computing Consortium · San Francisco', pt: 'Facilitação de oficina · Confidential Computing Consortium · São Francisco', de: 'Workshop-Moderation · Confidential Computing Consortium · San Francisco', es: 'Facilitación del taller · Confidential Computing Consortium · San Francisco' } },
        { y: '2025', t: 'Eyes-Off Data Summit', check: true, m: { en: 'Session with Robert Pisarczyk (Oblivious) · Dublin', pt: 'Sessão com Robert Pisarczyk (Oblivious) · Dublin', de: 'Session mit Robert Pisarczyk (Oblivious) · Dublin', es: 'Sesión con Robert Pisarczyk (Oblivious) · Dublín' } },
        { y: '2025', t: 'ManaTEE: Enabling Verifiable AI Transparency With Confidential Computing', href: 'https://www.youtube.com/watch?v=yk7qmS8OAYM', m: 'Open Source Summit Europe · Linux Foundation · Amsterdam' },
        { y: '2020', t: { en: '<i>Third World Manager</i>: a conversation with Angelo Madson', pt: '<i>Empresário do Terceiro Mundo</i>: conversa com Angelo Madson', de: '<i>Third World Manager</i>: ein Gespräch mit Angelo Madson', es: '<i>Third World Manager</i>: conversación con Angelo Madson' }, href: 'third-world-manager.html', m: { en: 'UC San Diego Visual Arts · online', pt: 'Artes Visuais, UC San Diego · online', de: 'UC San Diego Visual Arts · online', es: 'Artes Visuales, UC San Diego · en línea' } },
        { y: '2019', t: '#ScreentimeBU 2019', href: 'https://sites.bu.edu/demsconference/past-conferences/screentimebu-2019/speakers-2019/', m: { en: 'Panel speaker · Boston University, Division of Emerging Media Studies', pt: 'Painelista · Boston University, Division of Emerging Media Studies', de: 'Panel · Boston University, Division of Emerging Media Studies', es: 'Panelista · Boston University, Division of Emerging Media Studies' } },
        { y: '2019', t: { en: 'Metajornal launch and public critique', pt: 'Lançamento e crítica pública do Metajornal', de: 'Metajornal · Launch und öffentliche Kritik', es: 'Metajornal · lanzamiento y crítica pública' }, href: 'https://visarts.ucsd.edu/news-events/archive/20190607_mateusguzzo-metajornal.html', m: 'UC San Diego' },
        { y: '2018', t: 'LACES(D) · Design Especulativo Latinoamericano', m: { en: 'Organizer and lecture · UC San Diego', pt: 'Organização e palestra · UC San Diego', de: 'Organisation und Vortrag · UC San Diego', es: 'Organización y conferencia · UC San Diego' } },
      ],
    },
    {
      h: { en: 'Writing and interviews', pt: 'Textos e entrevistas', de: 'Texte und Interviews', es: 'Textos y entrevistas' },
      items: [
        { y: '2026', t: 'Inside TikTok’s work on privacy-enhancing tech', href: 'https://usercentrics.com/magazine/articles/inside-tiktok-privacy-enhancing-technology/', m: { en: 'Interview by Brunni Corsato · Usercentrics Magazine', pt: 'Entrevista a Brunni Corsato · Usercentrics Magazine', de: 'Interview von Brunni Corsato · Usercentrics Magazine', es: 'Entrevista de Brunni Corsato · Usercentrics Magazine' } },
        { y: '2025', t: 'European Capture the Flag on Privacy-Preserving Database Systems', href: 'https://developers.tiktok.com/blog/oblivious-tiktok-launch-privacy-ctf-pet-arena', m: { en: 'with Susan Rov · TikTok for Developers', pt: 'com Susan Rov · TikTok for Developers', de: 'mit Susan Rov · TikTok for Developers', es: 'con Susan Rov · TikTok for Developers' } },
        { y: '2025', t: 'Showcasing ManaTEE at FOSDEM 2025', href: 'https://developers.tiktok.com/blog/2025-manatee-fosdem-belgium', m: { en: 'with Dayeol Lee · TikTok for Developers, republished by the Confidential Computing Consortium', pt: 'com Dayeol Lee · TikTok for Developers, republicado pelo Confidential Computing Consortium', de: 'mit Dayeol Lee · TikTok for Developers, übernommen vom Confidential Computing Consortium', es: 'con Dayeol Lee · TikTok for Developers, republicado por el Confidential Computing Consortium' } },
        { y: '2024', t: 'Letters to the Landscape (or an Alphabet in Ruins)', href: 'https://jer.openlibhums.org/article/10464/', m: { en: 'with Marina Guzzo · Journal of Embodied Research', pt: 'com Marina Guzzo · Journal of Embodied Research', de: 'mit Marina Guzzo · Journal of Embodied Research', es: 'con Marina Guzzo · Journal of Embodied Research' } },
        { y: '2020', t: '<i>Third World Manager</i>', href: 'https://escholarship.org/uc/item/9g10v8pt', m: { en: 'MFA thesis · UC San Diego', pt: 'Dissertação de MFA · UC San Diego', de: 'MFA-Abschlussarbeit · UC San Diego', es: 'Tesis de MFA · UC San Diego' } },
        { y: '2019', t: 'Ritual Geographies / Cultural Infrastructures', href: 'https://matguzzo.com/whereabouts', m: { en: 'Blog post · matguzzo.com', pt: 'Post · matguzzo.com', de: 'Blogbeitrag · matguzzo.com', es: 'Entrada de blog · matguzzo.com' } },
        { y: '2015–17', t: { en: 'Papers on documentary photography method', pt: 'Artigos sobre método em fotografia documental', de: 'Aufsätze zur Methode der Dokumentarfotografie', es: 'Artículos sobre método en fotografía documental' }, href: 'research.html#publications', m: { en: 'See Research', pt: 'Ver Pesquisa', de: 'Siehe Forschung', es: 'Ver Investigación' } },
      ],
    },
  ],
};

/* ------------------------------------------------------------- WHEREABOUTS */

export const whereabouts = {
  title: nav[4].label,
  big: { en: 'Unknown.', pt: 'Desconhecido.', de: 'Unbekannt.', es: 'Desconocido.' },
  intro: {
    en: 'Last confirmed sightings, newest first.',
    pt: 'Últimas aparições confirmadas, das mais recentes às mais antigas.',
    de: 'Letzte bestätigte Sichtungen, neueste zuerst.',
    es: 'Últimos avistamientos confirmados, del más reciente al más antiguo.',
  },
  items: [
    { y: { en: 'Nov 2026', pt: 'nov 2026', de: 'Nov. 2026', es: 'nov 2026' }, place: { en: 'Berlin', pt: 'Berlim', de: 'Berlin', es: 'Berlín' }, check: true, d: { en: 'Starting at the Sovereign Tech Agency.', pt: 'Começando na Sovereign Tech Agency.', de: 'Start bei der Sovereign Tech Agency.', es: 'Empezando en la Sovereign Tech Agency.' } },
    { y: { en: 'Oct 2026', pt: 'out 2026', de: 'Okt. 2026', es: 'oct 2026' }, place: 'São Paulo', d: { en: 'Back in Brazil.', pt: 'De volta ao Brasil.', de: 'Zurück in Brasilien.', es: 'De vuelta en Brasil.' } },
    { y: { en: 'Sep 2026', pt: 'set 2026', de: 'Sept. 2026', es: 'sept 2026' }, place: { en: 'Manaus', pt: 'Manaus', de: 'Manaus', es: 'Manaos' }, d: { en: '<i>Third World Manager</i> premieres at the Teatro Amazonas.', pt: '<i>Empresário do Terceiro Mundo</i> estreia no Teatro Amazonas.', de: '<i>Third World Manager</i> feiert Premiere im Teatro Amazonas.', es: '<i>Third World Manager</i> se estrena en el Teatro Amazonas.' } },
    { y: { en: 'Jun 2026', pt: 'jun 2026', de: 'Juni 2026', es: 'jun 2026' }, place: 'Santa Clara', d: { en: 'Talking private AI at PEPR ’26.', pt: 'Falando de IA privada no PEPR ’26.', de: 'Vortrag über private KI bei PEPR ’26.', es: 'Hablando de IA privada en PEPR ’26.' } },
    { y: { en: 'Mar 2026', pt: 'mar 2026', de: 'März 2026', es: 'mar 2026' }, place: { en: 'Munich', pt: 'Munique', de: 'München', es: 'Múnich' }, d: { en: 'Handing out PET Arena prizes.', pt: 'Entregando os prêmios da PET Arena.', de: 'Preisverleihung der PET Arena.', es: 'Entregando los premios de PET Arena.' } },
    { y: { en: 'Oct 2025', pt: 'out 2025', de: 'Okt. 2025', es: 'oct 2025' }, place: { en: 'San Francisco', pt: 'São Francisco', de: 'San Francisco', es: 'San Francisco' }, d: { en: 'Confidential computing workshop.', pt: 'Oficina sobre computação confidencial.', de: 'Workshop zu Confidential Computing.', es: 'Taller de computación confidencial.' } },
    { y: { en: 'Sep 2025', pt: 'set 2025', de: 'Sept. 2025', es: 'sept 2025' }, place: { en: 'Dublin', pt: 'Dublin', de: 'Dublin', es: 'Dublín' }, d: { en: 'Eyes-Off Data Summit, and a pub full of privacy researchers.', pt: 'Eyes-Off Data Summit, e um pub cheio de pesquisadores de privacidade.', de: 'Eyes-Off Data Summit – und ein Pub voller Privacy-Forschender.', es: 'Eyes-Off Data Summit, y un pub lleno de investigadores de privacidad.' } },
    { y: { en: 'Aug 2025', pt: 'ago 2025', de: 'Aug. 2025', es: 'ago 2025' }, place: { en: 'Amsterdam', pt: 'Amsterdã', de: 'Amsterdam', es: 'Ámsterdam' }, d: { en: 'Open Source Summit Europe.', pt: 'Open Source Summit Europe.', de: 'Open Source Summit Europe.', es: 'Open Source Summit Europe.' } },
    { y: { en: 'Dec 2024', pt: 'dez 2024', de: 'Dez. 2024', es: 'dic 2024' }, place: { en: 'London', pt: 'Londres', de: 'London', es: 'Londres' }, d: { en: 'Joining TikTok’s open-source team.', pt: 'Entrando no time de código aberto do TikTok.', de: 'Wechsel ins Open-Source-Team von TikTok.', es: 'Entrando en el equipo de código abierto de TikTok.' } },
    { y: '2022', place: { en: 'Cambridge, Massachusetts', pt: 'Cambridge, Massachusetts', de: 'Cambridge, Massachusetts', es: 'Cambridge, Massachusetts' }, d: { en: 'Berkman Klein Center.', pt: 'Berkman Klein Center.', de: 'Berkman Klein Center.', es: 'Berkman Klein Center.' } },
    { y: '2020–21', place: { en: 'Berlin', pt: 'Berlim', de: 'Berlin', es: 'Berlín' }, d: { en: 'A pandemic year, working remotely with Geneva, Medellín, Nairobi and Houston.', pt: 'Um ano de pandemia, trabalhando remotamente com Genebra, Medellín, Nairóbi e Houston.', de: 'Ein Pandemiejahr, remote mit Genf, Medellín, Nairobi und Houston.', es: 'Un año de pandemia, trabajando en remoto con Ginebra, Medellín, Nairobi y Houston.' } },
    { y: { en: 'Apr 2020', pt: 'abr 2020', de: 'Apr. 2020', es: 'abr 2020' }, place: { en: 'Online', pt: 'Online', de: 'Online', es: 'En línea' }, d: { en: 'A telematic talk with Angelo Madson for UC San Diego. Brian Cross played Brazilian records afterwards, from his house in LA.', pt: 'Uma conversa telemática com Angelo Madson para a UC San Diego. Depois, Brian Cross tocou discos brasileiros direto da casa dele, em LA.', de: 'Ein telematisches Gespräch mit Angelo Madson für die UC San Diego. Danach legte Brian Cross aus seinem Haus in LA brasilianische Platten auf.', es: 'Una charla telemática con Angelo Madson para la UC San Diego. Después, Brian Cross puso discos brasileños desde su casa en LA.' } },
    { y: '2019', place: { en: 'San Mateo and the Nevada desert', pt: 'San Mateo e o deserto de Nevada', de: 'San Mateo und die Wüste von Nevada', es: 'San Mateo y el desierto de Nevada' }, d: { en: 'Fieldwork on ritual and protocol at Maker Faire and Burning Man.', pt: 'Trabalho de campo sobre ritual e protocolo na Maker Faire e no Burning Man.', de: 'Feldforschung zu Ritual und Protokoll bei Maker Faire und Burning Man.', es: 'Trabajo de campo sobre ritual y protocolo en Maker Faire y Burning Man.' } },
    { y: '2018', place: 'Belém do Pará', d: { en: 'Thirteen days of shooting with Angelo.', pt: 'Treze dias filmando com Angelo.', de: 'Dreizehn Drehtage mit Angelo.', es: 'Trece días de rodaje con Angelo.' } },
    { y: '2017–20', place: { en: 'San Diego', pt: 'San Diego', de: 'San Diego', es: 'San Diego' }, d: { en: 'MFA at UC San Diego.', pt: 'MFA na UC San Diego.', de: 'MFA an der UC San Diego.', es: 'MFA en la UC San Diego.' } },
    { y: { en: 'Sep 2017', pt: 'set 2017', de: 'Sept. 2017', es: 'sept 2017' }, place: { en: 'Fordlândia, Pará', pt: 'Fordlândia, Pará', de: 'Fordlândia, Pará', es: 'Fordlândia, Pará' }, d: { en: 'Two days of radio on the Tapajós.', pt: 'Dois dias de rádio no Tapajós.', de: 'Zwei Tage Radio am Tapajós.', es: 'Dos días de radio en el Tapajós.' } },
    { y: '2016', place: 'São Paulo', d: { en: 'Guiding visitors through the 32nd Bienal.', pt: 'Mediando visitas na 32ª Bienal.', de: 'Führungen durch die 32. Biennale.', es: 'Guiando visitas por la 32.ª Bienal.' } },
    { y: '2013–14', place: { en: 'The Hague and Rotterdam', pt: 'Haia e Roterdã', de: 'Den Haag und Rotterdam', es: 'La Haya y Róterdam' }, d: { en: 'Exchange student, Super 8 in hand.', pt: 'Intercambista, com uma Super 8 na mão.', de: 'Austauschstudent, mit Super 8 in der Hand.', es: 'Estudiante de intercambio, con una Super 8 en la mano.' } },
    { y: '1992', place: 'Campinas', d: { en: 'First sighting.', pt: 'Primeira aparição.', de: 'Erste Sichtung.', es: 'Primer avistamiento.' } },
  ],
};
