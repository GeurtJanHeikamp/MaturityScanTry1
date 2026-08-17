/* ==========================================================================
   Maturity Scan Digitaal Toetsen — data.js
   Inhoud gebaseerd op:
   - Handboek Digitaal Toetsen (SURF / SIG / Community Digitaal toetsen en
     ontwikkelen) — sig-dt.github.io/handboek-digitaal-toetsen
   - Toetsweb-Scan (HAN, methodiek "De Toetsing Getoetst") — toetsweb.netlify.app
   - Vormgeving geïnspireerd op de Innovatie Maturity Scan (TIM Foundation)
   ========================================================================== */

const LEVELS = [
  {
    key: "A",
    value: 1,
    label: "Ad hoc",
    short: "Toeval en goede bedoelingen",
    description:
      "Er gebeurt van alles, maar vooral op initiatief van individuele docenten. Er is geen gedeeld beeld en geen vastgelegde aanpak."
  },
  {
    key: "B",
    value: 2,
    label: "Herkenbaar",
    short: "Losse afspraken, nog niet geborgd",
    description:
      "Er zijn eerste afspraken en voorbeelden, maar die leven vooral bij een aantal enthousiastelingen. Het is nog afhankelijk van personen."
  },
  {
    key: "C",
    value: 3,
    label: "Gestructureerd",
    short: "Vastgelegd en gedeeld",
    description:
      "Er is een gedragen aanpak die is vastgelegd, gedeeld en door de meeste betrokkenen wordt gevolgd. De basis staat."
  },
  {
    key: "D",
    value: 4,
    label: "Beheerst",
    short: "Gestuurd op kwaliteit",
    description:
      "De aanpak wordt gemonitord en bijgestuurd op basis van gegevens en ervaringen. Verantwoordelijkheden zijn belegd."
  },
  {
    key: "E",
    value: 5,
    label: "Optimaliserend",
    short: "Continu verbeteren en vooroplopen",
    description:
      "Er is een cultuur van continu leren en verbeteren. De instelling loopt voorop en deelt kennis met anderen."
  }
];

const DOMAINS = [
  {
    id: "beleid",
    number: 1,
    name: "Beleid & visie",
    tagline: "De uitgangspunten voor digitaal toetsen",
    color: "#8C3B2E",
    chapter: "Hoofdstuk 2 · Randvoorwaarden",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/02-randvoorwaarden.html",
    intro:
      "Een heldere visie op toetsen bepaalt welke digitale ondersteuning nodig is. Toets je vooral om van te leren, om te beoordelen, of allebei? Dit thema kijkt naar visie, beleid en de mate waarin die breed gedragen worden.",
    aspects: [
      {
        id: "visie",
        title: "Visie op toetsen",
        levels: [
          "Er is geen gedeelde visie op toetsen; iedereen vult dit persoonlijk in.",
          "Er zijn eerste gesprekken gevoerd over een gezamenlijke visie, nog niet vastgelegd.",
          "Er ligt een vastgestelde visie op toetsen, gebaseerd op bijvoorbeeld het Toekomstperspectief op digitaal toetsen.",
          "De visie stuurt aantoonbaar keuzes voor toetsvormen, systemen en scholing.",
          "De visie wordt periodiek herijkt met docenten, studenten en examencommissies, en werkt inspirerend."
        ]
      },
      {
        id: "toetsbeleid",
        title: "Toetsbeleid",
        levels: [
          "Er is geen toetsbeleid; keuzes worden per vak of docent gemaakt.",
          "Losse afspraken over toetsen bestaan, maar zijn niet gebundeld in beleid.",
          "Er is een toetsbeleidsdocument, bijvoorbeeld opgesteld met het Stappenplan digitaal toetsbeleid van SURF.",
          "Het toetsbeleid wordt actief gebruikt bij ontwerp, inkoop en kwaliteitszorg van toetsen.",
          "Het toetsbeleid wordt jaarlijks geëvalueerd en bijgesteld op basis van data en trends."
        ]
      },
      {
        id: "draagvlak",
        title: "Draagvlak en eigenaarschap",
        levels: [
          "Toetsbeleid is onbekend bij de meeste docenten en studenten.",
          "Een kleine groep kartrekkers kent en gebruikt het beleid.",
          "Management, examencommissie en docenten kennen en onderschrijven het beleid.",
          "Eigenaarschap is helder belegd; rollen en verantwoordelijkheden zijn vastgelegd.",
          "Toetsbeleid is onderdeel van de professionele cultuur en wordt actief uitgedragen."
        ]
      },
      {
        id: "hulpmiddelen",
        title: "Gebruik van hulpmiddelen voor visie en positiebepaling",
        levels: [
          "Er zijn geen instrumenten gebruikt om de visie of huidige stand van zaken te bepalen.",
          "Er is incidenteel gebruikgemaakt van een tool zoals de Visietool Toetsen.",
          "Positiebepaling is één keer gedaan, bijvoorbeeld met een maturity scan of de Toetsweb-Scan.",
          "Positiebepaling gebeurt periodiek en de uitkomsten leiden tot concrete actieplannen.",
          "Positiebepaling is een terugkerend onderdeel van de kwaliteitscyclus, met opvolging op alle niveaus."
        ]
      },
      {
        id: "deskundigheid",
        title: "Deskundigheid en scholing",
        levels: [
          "Er is geen scholing of deskundigheidsbevordering rond (digitaal) toetsen.",
          "Losse, incidentele scholingsmomenten vinden plaats, vooral op eigen initiatief.",
          "Er is een vast scholingsaanbod rond toetsdeskundigheid voor docenten.",
          "Scholing is verplicht of sterk aanbevolen en aantoonbaar gekoppeld aan rollen, zoals itemconstructeur of examinator.",
          "Deskundigheidsbevordering is continu, wordt geëvalueerd en houdt gelijke tred met nieuwe ontwikkelingen."
        ]
      }
    ]
  },
  {
    id: "toetsvormen",
    number: 2,
    name: "Toetsvormen & kwaliteit",
    tagline: "Passende vormen en goed gemaakte vragen",
    color: "#3B5A8C",
    chapter: "Hoofdstuk 3 & 6 · Toetsvormen, Kwaliteit toetsvragen",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/03-toetsvormen.html",
    intro:
      "Digitaal toetsen maakt nieuwe toetsvormen mogelijk, van geautomatiseerde kennistoetsen tot rijke, authentieke opdrachten. Dit thema gaat over variatie in vormen én over de kwaliteit van het vraagontwerp.",
    aspects: [
      {
        id: "variatie",
        title: "Variatie in toetsvormen",
        levels: [
          "Er wordt vrijwel uitsluitend met traditionele schriftelijke toetsen gewerkt.",
          "Enkele docenten experimenteren op eigen initiatief met digitale toetsvormen.",
          "Een palet aan digitale toetsvormen is beschikbaar en bekend bij docenten.",
          "De keuze voor een toetsvorm wordt bewust gemaakt op basis van leerdoelen en constructive alignment.",
          "Toetsvormen worden continu doorontwikkeld, inclusief authentieke en rijke vormen."
        ]
      },
      {
        id: "vraagontwerp",
        title: "Kwaliteit van vraagontwerp",
        levels: [
          "Vragen worden individueel gemaakt, zonder gedeelde kwaliteitscriteria.",
          "Er zijn losse tips en voorbeelden voor het maken van goede vragen.",
          "Er zijn gedeelde richtlijnen voor vraagontwerp, bijvoorbeeld een itemschrijfhandleiding.",
          "Vragen worden systematisch gereviewd door collega's voordat ze worden ingezet.",
          "Vraagontwerp wordt continu verbeterd op basis van analysegegevens en peer review."
        ]
      },
      {
        id: "analyse",
        title: "Toetsanalyse en validatie",
        levels: [
          "Toetsresultaten worden niet geanalyseerd na afname.",
          "Cijfers worden bekeken, maar item- of toetsanalyse ontbreekt.",
          "Basale toetsanalyse (bijvoorbeeld p-waarden) wordt af en toe uitgevoerd.",
          "Toetsanalyse is een vast onderdeel van de kwaliteitscyclus rond elke toets.",
          "Toetsanalyse voedt structureel de itembank en het ontwerp van nieuwe toetsen."
        ]
      },
      {
        id: "balans",
        title: "Formatief en summatief in balans",
        levels: [
          "Toetsen is vrijwel uitsluitend summatief en gericht op een cijfer.",
          "Er is beperkte aandacht voor formatieve toetsing, los van het summatieve programma.",
          "Formatieve en summatieve toetsing zijn beide belegd in de opleiding.",
          "Formatief en summatief toetsen zijn inhoudelijk op elkaar afgestemd binnen de toetsprogrammering.",
          "Studenten en docenten gebruiken formatieve data actief om leren en toetsen te verbeteren."
        ]
      },
      {
        id: "toegankelijkheid-vorm",
        title: "Toegankelijkheid van toetsen",
        levels: [
          "Er is geen aandacht voor toegankelijkheid van toetsen voor studenten met een ondersteuningsbehoefte.",
          "Aanpassingen, zoals extra tijd, worden per geval en ad hoc geregeld.",
          "Er zijn vastgelegde afspraken over aangepaste toetsomstandigheden en voorzieningen.",
          "Toegankelijkheid wordt al bij het ontwerp van een toets meegenomen, niet pas achteraf.",
          "Toegankelijkheid is vanzelfsprekend onderdeel van de toetscultuur en wordt continu verbeterd samen met studenten."
        ]
      }
    ]
  },
  {
    id: "systemen",
    number: 3,
    name: "Systemen & standaarden",
    tagline: "De technische ruggengraat van digitaal toetsen",
    color: "#2E6B5E",
    chapter: "Hoofdstuk 4 & 5 · Toetssystemen, Toetsstandaarden",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/04-toetssystemen.html",
    intro:
      "Toetssystemen en de standaarden waarmee ze toetsmateriaal uitwisselen, bepalen de flexibiliteit en toekomstbestendigheid van digitaal toetsen.",
    aspects: [
      {
        id: "keuze-systemen",
        title: "Keuze en beheer van toetssystemen",
        levels: [
          "Er is geen bewuste keuze gemaakt; systemen worden ad hoc gebruikt.",
          "Eén of meerdere systemen zijn in gebruik, zonder gezamenlijk afwegingskader.",
          "Er is een bewuste, gedocumenteerde keuze voor het toetssysteem of de toetssystemen.",
          "Beheer en doorontwikkeling van systemen zijn structureel belegd, inclusief gebruikersondersteuning.",
          "De systeemkeuze wordt periodiek heroverwogen op basis van behoeften en ontwikkelingen in de markt."
        ]
      },
      {
        id: "standaarden",
        title: "Gebruik van toetsstandaarden",
        levels: [
          "Er wordt geen rekening gehouden met standaarden zoals QTI bij het uitwisselen van materiaal.",
          "Standaarden zijn bekend, maar toetsmateriaal wordt meestal handmatig overgezet.",
          "Bij nieuwe toetsmaterialen wordt bewust gekozen voor standaard-conforme formats.",
          "Uitwisseling van toetsmateriaal tussen systemen verloopt overwegend via standaarden.",
          "De instelling volgt actief de ontwikkeling van standaarden en past die tijdig toe."
        ]
      },
      {
        id: "koppeling",
        title: "Koppeling met de leeromgeving",
        levels: [
          "Toetssysteem en leeromgeving staan los van elkaar, met veel handwerk.",
          "Er zijn losse koppelingen gerealiseerd, met wisselende betrouwbaarheid.",
          "Toetssysteem en leeromgeving zijn structureel gekoppeld (bijvoorbeeld via LTI).",
          "Koppelingen worden gemonitord en snel hersteld bij verstoringen.",
          "Systemen vormen een naadloze leer- en toetsomgeving voor studenten en docenten."
        ]
      },
      {
        id: "continuiteit",
        title: "Technisch beheer en continuïteit",
        levels: [
          "Er is geen zicht op risico's rond uitval tijdens een toetsafname.",
          "Bij storingen wordt ad hoc gehandeld, zonder vastgelegde procedure.",
          "Er zijn noodprocedures en een helpdesk beschikbaar tijdens toetsafnames.",
          "Continuïteit wordt getest (bijvoorbeeld capaciteitstests) voorafgaand aan grote afnames.",
          "Continuïteitsmanagement is volledig ingebed, met evaluatie en verbetering na elke afname."
        ]
      },
      {
        id: "toegangsrechten",
        title: "Rollen en toegangsrechten",
        levels: [
          "Toegang tot het toetssysteem is niet geregeld via rollen; iedereen heeft dezelfde rechten.",
          "Er zijn losse afspraken over wie wat mag, maar dit is niet vastgelegd in het systeem.",
          "Rollen en rechten, zoals docent, examinator en beheerder, zijn ingericht in het systeem.",
          "Toegangsrechten worden periodiek gecontroleerd en tijdig aangepast bij personeelswisselingen.",
          "Rollenbeheer is volledig geautomatiseerd en gekoppeld aan HR- of studentinformatiesystemen."
        ]
      }
    ]
  },
  {
    id: "itembanken",
    number: 4,
    name: "Itembanken & samenwerking",
    tagline: "Vragen hergebruiken, delen en doorontwikkelen",
    color: "#7A5230",
    chapter: "Hoofdstuk 7 · Itembanken",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/07-itembanken.html",
    intro:
      "Een goed opgezette itembank maakt het mogelijk om vragen efficiënt te hergebruiken, te analyseren en samen te onderhouden.",
    aspects: [
      {
        id: "opzet",
        title: "Opzet van de itembank",
        levels: [
          "Vragen staan verspreid in documenten van individuele docenten.",
          "Er is een gedeelde plek voor vragen, zonder duidelijke structuur.",
          "Er is een itembank met een vastgestelde structuur en toegangsregels.",
          "De itembank wordt actief gevuld en onderhouden volgens afspraken.",
          "De itembank is een centraal, continu verrijkt kennisbestand voor de hele opleiding."
        ]
      },
      {
        id: "metadata",
        title: "Metadatering en hergebruik",
        levels: [
          "Vragen hebben geen metadata; hergebruik is afhankelijk van geheugen.",
          "Sommige vragen zijn gelabeld, bijvoorbeeld met een onderwerp.",
          "Vragen zijn consequent gelabeld met onderwerp, niveau en toetsdoel.",
          "Metadata wordt gebruikt om toetsen samen te stellen en dekking te bewaken.",
          "Metadata en analysegegevens samen sturen actief de doorontwikkeling van de itembank."
        ]
      },
      {
        id: "samenwerking",
        title: "Samenwerking tussen opleidingen",
        levels: [
          "Er is geen uitwisseling van vragen of ervaring tussen opleidingen.",
          "Incidenteel wordt materiaal gedeeld tussen collega's.",
          "Er zijn afspraken over het delen van vragen binnen de opleiding of instelling.",
          "Itembanken worden structureel gedeeld tussen verwante opleidingen.",
          "De instelling werkt samen met andere instellingen aan gedeelde itembanken."
        ]
      },
      {
        id: "kwaliteitsborging-items",
        title: "Kwaliteitsborging van de itembank",
        levels: [
          "Er is geen zicht op de kwaliteit van vragen in de bank.",
          "Verouderde of slecht functionerende vragen worden soms toevallig ontdekt.",
          "Er is een periodieke check op kwaliteit en actualiteit van vragen.",
          "Itemanalyse wordt structureel gekoppeld aan onderhoud van de itembank.",
          "Kwaliteitsborging is volledig geautomatiseerd en ondersteund door data-analyse."
        ]
      },
      {
        id: "auteursrecht",
        title: "Auteursrecht en gebruiksrechten",
        levels: [
          "Er is geen aandacht voor auteursrecht of gebruiksrechten van vragen in de itembank.",
          "Er is een globaal besef dat dit relevant is, zonder concrete afspraken.",
          "Er zijn afspraken vastgelegd over eigenaarschap en gebruiksrechten van items.",
          "Bij het delen van items tussen opleidingen of instellingen worden rechten expliciet geregeld.",
          "Gebruiksrechten zijn geborgd in de itembank zelf, ook bij extern hergebruik of samenwerking."
        ]
      }
    ]
  },
  {
    id: "veiligheid",
    number: 5,
    name: "Veiligheid & integriteit",
    tagline: "Een betrouwbaar en eerlijk toetsproces",
    color: "#8C2E3B",
    chapter: "Hoofdstuk 8 · Veilig digitaal toetsen",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/08-veilig-digitaal-toetsen.html",
    intro:
      "Veilig toetsen gaat over het hele proces: van risicoanalyse en proctoring tot het omgaan met fraude en onregelmatigheden.",
    aspects: [
      {
        id: "risicoanalyse",
        title: "Risicoanalyse toetsproces",
        levels: [
          "Er is geen zicht op risico's in het toetsproces.",
          "Risico's worden soms besproken, maar niet systematisch vastgelegd.",
          "Er is een risicoanalyse uitgevoerd, bijvoorbeeld met het Werkboek Veilig toetsen.",
          "Maatregelen uit de risicoanalyse zijn geïmplementeerd en belegd.",
          "De risicoanalyse wordt periodiek herhaald en actief gebruikt om te verbeteren."
        ]
      },
      {
        id: "proctoring",
        title: "Online proctoring",
        levels: [
          "Er is geen beleid over online surveilleren op afstand.",
          "Proctoring wordt incidenteel en ad hoc ingezet.",
          "Er is een afgewogen keuze over óf en hoe proctoring wordt ingezet, mede op basis van de SURF-whitepaper.",
          "Proctoring-beleid houdt rekening met privacy, toegankelijkheid en studentenwelzijn.",
          "Proctoring-inzet wordt periodiek geëvalueerd en waar mogelijk vervangen door alternatieve toetsvormen."
        ]
      },
      {
        id: "fraude",
        title: "Fraude en onregelmatigheden",
        levels: [
          "Er is geen procedure voor het omgaan met fraude of onregelmatigheden.",
          "Er zijn losse afspraken, sterk afhankelijk van de examinator.",
          "Er is een vastgelegd stappenplan voor onregelmatigheden en fraude.",
          "Examencommissies passen het stappenplan consistent en aantoonbaar toe.",
          "Fraudepreventie is geïntegreerd in toetsontwerp, niet alleen in de afhandeling achteraf."
        ]
      },
      {
        id: "privacy",
        title: "Privacy en gegevensbescherming",
        levels: [
          "Er is geen aandacht voor privacy bij de inzet van digitale toetstools.",
          "Privacy komt af en toe aan de orde, zonder formele toetsing.",
          "Nieuwe toetstools worden getoetst aan de AVG voordat ze in gebruik gaan.",
          "Privacyafwegingen zijn vastgelegd, bijvoorbeeld in DPIA's voor toetssystemen.",
          "Privacy by design is een vast onderdeel van de keuze en inrichting van toetstools."
        ]
      },
      {
        id: "identificatie",
        title: "Identificatie en authenticatie",
        levels: [
          "Er wordt niet gecontroleerd of de student die de toets maakt ook daadwerkelijk de ingeschreven student is.",
          "Identiteitscontrole gebeurt incidenteel en informeel.",
          "Er is een vastgelegde werkwijze voor identificatie bij toetsafnames, op locatie of op afstand.",
          "Identificatie wordt consistent toegepast en is afgestemd op het risico van de toets.",
          "Identificatie en authenticatie worden periodiek geëvalueerd en waar nodig vernieuwd."
        ]
      }
    ]
  },
  {
    id: "innovatie",
    number: 6,
    name: "Innovatie & toekomstgerichtheid",
    tagline: "Meebewegen met nieuwe mogelijkheden",
    color: "#4A3B7A",
    chapter: "Hoofdstuk 9 · Innovaties",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/09-innovaties.html",
    intro:
      "Nieuwe technologie, zoals AI, verandert wat toetsen kan betekenen. Dit thema gaat over de mate waarin een opleiding verkent, experimenteert en vooruitkijkt.",
    aspects: [
      {
        id: "verkennen",
        title: "Verkennen van innovaties",
        levels: [
          "Nieuwe ontwikkelingen zoals AI worden niet gevolgd of besproken.",
          "Individuele docenten volgen ontwikkelingen op eigen initiatief.",
          "Er is een vast moment waarop innovaties gezamenlijk worden verkend.",
          "Innovaties worden systematisch beoordeeld op kansen en risico's voor toetsen.",
          "De opleiding loopt aantoonbaar voorop bij het verkennen van nieuwe mogelijkheden."
        ]
      },
      {
        id: "experimenteren",
        title: "Ruimte om te experimenteren",
        levels: [
          "Er is geen ruimte of budget om met nieuwe toetsvormen te experimenteren.",
          "Experimenten gebeuren incidenteel, buiten de reguliere kaders om.",
          "Er is expliciete ruimte (tijd, budget) om te experimenteren met innovaties.",
          "Experimenten worden geëvalueerd en bij succes opgeschaald.",
          "Experimenteren is een structureel onderdeel van de onderwijs- en toetscyclus."
        ]
      },
      {
        id: "kennisdeling",
        title: "Kennisdeling en netwerken",
        levels: [
          "Er is geen contact met andere instellingen over digitaal toetsen.",
          "Kennis wordt af en toe gedeeld via informele contacten.",
          "De opleiding neemt actief deel aan netwerken zoals de Community Digitaal toetsen en ontwikkelen.",
          "Opgedane kennis wordt structureel teruggekoppeld en toegepast binnen de opleiding.",
          "De opleiding draagt zelf actief bij aan kennisontwikkeling, bijvoorbeeld via publicaties of het handboek."
        ]
      },
      {
        id: "toekomstbestendigheid",
        title: "Toekomstbestendigheid van de strategie",
        levels: [
          "Er is geen doordachte strategie voor de toekomst van toetsen.",
          "Er zijn losse ideeën over de toekomst, niet vertaald naar een plan.",
          "Er is een toekomstgerichte strategie, bijvoorbeeld gebaseerd op het Toekomstperspectief 2027.",
          "De strategie wordt regelmatig getoetst aan actuele ontwikkelingen en bijgesteld.",
          "De strategie is toonaangevend en wordt gebruikt als voorbeeld door andere instellingen."
        ]
      },
      {
        id: "studentbetrokkenheid",
        title: "Betrokkenheid van studenten bij innovatie",
        levels: [
          "Studenten worden niet betrokken bij innovaties rond toetsen.",
          "Studenten worden af en toe geraadpleegd, zonder vaste vorm.",
          "Er is een vast moment waarop studenten meedenken over vernieuwing van toetsen.",
          "Studenten zijn actief partner bij het ontwerpen en testen van nieuwe toetsvormen.",
          "Studenten hebben een structurele stem in de innovatieagenda rond toetsen."
        ]
      }
    ]
  },
  {
    id: "ai-toetsing",
    number: 7,
    name: "AI & toetsing",
    tagline: "Toetsen in een tijd van generatieve AI",
    color: "#B08A2E",
    chapter: "Hoofdstuk 9 · Innovaties",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/09-innovaties.html",
    intro:
      "Generatieve AI verandert zowel hoe studenten toetsen kunnen maken als hoe toetsen ontworpen, ondersteund en nagekeken kunnen worden. Dit thema gaat over AI-bestendig toetsontwerp, spelregels voor studenten, AI-ondersteuning voor docenten en hoe u omgaat met (vermoedelijk) AI-gebruik.",
    aspects: [
      {
        id: "ai-toetsontwerp",
        title: "AI-bestendig toetsontwerp",
        levels: [
          "Toetsen zijn niet aangepast aan de komst van generatieve AI; opdrachten zijn eenvoudig door een AI-tool te maken.",
          "Docenten zijn zich bewust van het risico, maar passen het toetsontwerp nog niet structureel aan.",
          "Toetsen worden bewust doorgelicht op AI-gevoeligheid, bijvoorbeeld met een toolkit zoals AI-Bestendig Toetsen (HAN).",
          "Opleidingen passen toetsvormen structureel aan (proces, mondeling, authentiek) om AI-bestendigheid te vergroten.",
          "AI-bestendigheid is een vast criterium bij elk toetsontwerp en wordt periodiek herijkt aan nieuwe AI-mogelijkheden."
        ]
      },
      {
        id: "ai-spelregels",
        title: "Spelregels voor studenten",
        levels: [
          "Er zijn geen afspraken over het gebruik van AI door studenten bij toetsen.",
          "Er zijn losse, per docent verschillende afspraken over AI-gebruik.",
          "Er is een gedeeld kader dat aangeeft wanneer AI wel of niet is toegestaan bij een toets.",
          "Studenten worden actief geïnformeerd en toegerust in verantwoord en transparant AI-gebruik.",
          "Spelregels voor AI-gebruik worden samen met studenten doorontwikkeld en passen bij de leerdoelen per toets."
        ]
      },
      {
        id: "ai-ondersteuning-docent",
        title: "AI-ondersteuning voor docenten",
        levels: [
          "AI wordt niet gebruikt bij het ontwikkelen, nakijken of analyseren van toetsen.",
          "Individuele docenten experimenteren op eigen initiatief met AI, bijvoorbeeld bij vraagontwikkeling.",
          "Er zijn gedeelde voorbeelden en richtlijnen voor het inzetten van AI bij toetsontwikkeling en feedback.",
          "AI-ondersteuning bij toetsontwikkeling of nakijken wordt structureel en verantwoord ingezet, met menselijke controle.",
          "De opleiding zet AI doordacht in binnen de hele toetscyclus en deelt de opgedane ervaring met anderen."
        ]
      },
      {
        id: "ai-omgaan-gebruik",
        title: "Omgaan met (onterecht) AI-gebruik",
        levels: [
          "Er is geen beeld van hoe wordt omgegaan met vermoedelijk onterecht AI-gebruik bij een toets.",
          "Signalen van AI-gebruik worden per geval en ad hoc beoordeeld.",
          "Er is een aanpak die aansluit bij het stappenplan onregelmatigheden en fraude, toegespitst op AI-gebruik.",
          "Docenten en examencommissies zijn geschoold in het herkennen en bespreekbaar maken van AI-gebruik.",
          "De opleiding zet in op transparantie en het gesprek met studenten, naast (niet uitsluitend) detectie."
        ]
      },
      {
        id: "ai-geletterdheid",
        title: "AI-geletterdheid",
        levels: [
          "Er is geen aandacht voor AI-geletterdheid bij docenten of studenten.",
          "Enkele docenten of studenten verdiepen zich op eigen initiatief in AI.",
          "Er is een basisaanbod om AI-geletterdheid van docenten en studenten te vergroten.",
          "AI-geletterdheid is een vast onderdeel van scholing en het curriculum.",
          "De opleiding loopt voorop in AI-geletterdheid en deelt kennis actief met studenten, collega's en andere instellingen."
        ]
      }
    ]
  }
];

/* Aanbevelingen per volwassenheidsniveau (gemiddelde score van het thema) */
function getRecommendation(domain, avgValue) {
  const level = Math.round(avgValue);
  const texts = {
    1: `Begin klein: bespreek binnen het team wat "${domain.name.toLowerCase()}" voor jullie opleiding zou moeten betekenen. Gebruik ${domain.chapter} van het handboek als gezamenlijk startpunt.`,
    2: `Er zijn goede eerste stappen gezet. Leg de losse afspraken rond ${domain.name.toLowerCase()} vast, zodat ze niet afhankelijk blijven van individuele collega's.`,
    3: `De basis staat. Zorg dat afspraken rond ${domain.name.toLowerCase()} breed bekend zijn en daadwerkelijk worden toegepast, niet alleen vastgelegd.`,
    4: `Dit thema is goed op orde. Blijf sturen op basis van gegevens en ervaringen, en borg dat verantwoordelijkheden helder belegd blijven.`,
    5: `Dit thema is sterk ontwikkeld. Overweeg de opgedane kennis te delen met andere opleidingen of instellingen, bijvoorbeeld via de community rond het handboek.`
  };
  return texts[level] || texts[3];
}

const GRADE_STAMPS = [
  { min: 1, max: 1.79, label: "Beginnend", stamp: "IN OPBOUW" },
  { min: 1.8, max: 2.59, label: "Herkenbaar", stamp: "EERSTE STAPPEN" },
  { min: 2.6, max: 3.39, label: "Gestructureerd", stamp: "OP KOERS" },
  { min: 3.4, max: 4.19, label: "Beheerst", stamp: "GOED GEREGELD" },
  { min: 4.2, max: 5, label: "Optimaliserend", stamp: "VOOROPLOPEND" }
];

function getGradeStamp(avg) {
  return (
    GRADE_STAMPS.find((g) => avg >= g.min && avg <= g.max) ||
    GRADE_STAMPS[2]
  );
}
