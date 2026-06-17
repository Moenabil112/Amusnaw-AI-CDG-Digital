import type { LocalizedText } from "./index";

/**
 * Static UI chrome strings (section titles, eyebrows, buttons, labels, notes)
 * for EN / AR / FR. Structured content that lives in arrays (modules, cards,
 * roadmap, documents) is translated inline in the `src/data/*` files.
 *
 * Brand/defined terms kept canonical across languages: Amusnaw AI SA, CDG,
 * HYRION, QASSAS, Isseksi, PR3538746, Atlas Mining, ZYNTRA, AKANIL, GIS, IP,
 * AI, MVP, R&D, USD, and element symbols.
 */
export const S = {
  common: {
    requestAccess: {
      en: "Request Access",
      ar: "طلب وصول",
      fr: "Demander l'accès",
    },
    requestInstitutionalAccess: {
      en: "Request Institutional Access",
      ar: "طلب وصول مؤسسي",
      fr: "Demander un accès institutionnel",
    },
    partner: { en: "Partner", ar: "الشريك", fr: "Partenaire" },
    accessGated: { en: "Access-gated", ar: "محكوم بالوصول", fr: "Accès restreint" },
  },

  hero: {
    badge: {
      en: "Controlled Institutional Digital Window",
      ar: "نافذة رقمية مؤسسية مضبوطة",
      fr: "Fenêtre numérique institutionnelle contrôlée",
    },
    reviewCdg: {
      en: "Review CDG Entry",
      ar: "مراجعة دخول CDG",
      fr: "Examiner l'entrée de la CDG",
    },
    viewProducts: {
      en: "View Launch Products",
      ar: "عرض منتجات الإطلاق",
      fr: "Voir les produits de lancement",
    },
  },

  thesis: {
    eyebrow: { en: "Strategic Thesis", ar: "الأطروحة الاستراتيجية", fr: "Thèse stratégique" },
    titleLead: {
      en: "Morocco does not only need more mining permits.",
      ar: "المغرب لا يحتاج فقط إلى المزيد من رخص التعدين.",
      fr: "Le Maroc n'a pas seulement besoin de plus de permis miniers.",
    },
    titleEmph: {
      en: "Morocco needs better mining data infrastructure.",
      ar: "المغرب يحتاج إلى بنية تحتية أفضل لبيانات التعدين.",
      fr: "Le Maroc a besoin d'une meilleure infrastructure de données minières.",
    },
    theGap: { en: "The Gap", ar: "الفجوة", fr: "Le déficit" },
    theSolution: { en: "The Solution", ar: "الحل", fr: "La solution" },
    quote: {
      en: "“Mining data, when governed and structured correctly, becomes strategic infrastructure.”",
      ar: "«بيانات التعدين، عند حوكمتها وهيكلتها بشكل صحيح، تتحول إلى بنية تحتية استراتيجية.»",
      fr: "« Les données minières, lorsqu'elles sont gouvernées et structurées correctement, deviennent une infrastructure stratégique. »",
    },
  },

  cdg: {
    eyebrow: { en: "CDG Strategic Entry", ar: "الدخول الاستراتيجي لـ CDG", fr: "Entrée stratégique de la CDG" },
    title: {
      en: "CDG is invited as a strategic co-builder — not a passive financier.",
      ar: "تُدعى CDG كشريك مؤسس استراتيجي — وليس كممول سلبي.",
      fr: "La CDG est invitée comme co-bâtisseur stratégique — non comme financier passif.",
    },
    intro: {
      en: "Strategic co-builder of Morocco's intelligent mining data infrastructure, entering through a disciplined, staged, and infrastructure-driven commitment.",
      ar: "شريك مؤسس استراتيجي للبنية التحتية لبيانات التعدين الذكي في المغرب، يدخل عبر التزام منضبط ومرحلي قائم على البنية التحتية.",
      fr: "Co-bâtisseur stratégique de l'infrastructure marocaine de données minières intelligentes, entrant par un engagement discipliné, échelonné et axé sur l'infrastructure.",
    },
    fundsTitle: {
      en: "What the USD 350,000 funds",
      ar: "ما الذي يموّله مبلغ 350,000 دولار أمريكي",
      fr: "Ce que finance le montant de 350 000 USD",
    },
    seedStructure: { en: "Seed Structure", ar: "هيكل التأسيس", fr: "Structure d'amorçage" },
    seedFootnote: {
      en: "Structured for staged CDG step-up acquisition. Subject to legal review.",
      ar: "مُهيكل للاستحواذ التدريجي من CDG. خاضع للمراجعة القانونية.",
      fr: "Structuré pour une acquisition progressive par la CDG. Sous réserve d'examen juridique.",
    },
  },

  products: {
    eyebrow: { en: "Launch Products", ar: "منتجات الإطلاق", fr: "Produits de lancement" },
    title: {
      en: "Two ready products at launch",
      ar: "منتجان جاهزان عند الإطلاق",
      fr: "Deux produits prêts au lancement",
    },
    description: {
      en: "A balanced launch portfolio: one ready mining intelligence product and one disciplined R&D exploration demonstrator.",
      ar: "محفظة إطلاق متوازنة: منتج جاهز لاستخبارات التعدين، ونموذج استكشاف منضبط في إطار البحث والتطوير.",
      fr: "Un portefeuille de lancement équilibré : un produit d'intelligence minière prêt et un démonstrateur d'exploration R&D discipliné.",
    },
  },

  isseksi: {
    eyebrow: { en: "Product 01 — Ready Product", ar: "المنتج 01 — منتج جاهز", fr: "Produit 01 — Produit prêt" },
    type: {
      en: "Ready Mining Intelligence & Governance Product",
      ar: "منتج جاهز في استخبارات التعدين والحوكمة",
      fr: "Produit prêt d'intelligence minière et de gouvernance",
    },
    gisTitle: {
      en: "GIS license visualization",
      ar: "تصور الرخص عبر نظم المعلومات الجغرافية (GIS)",
      fr: "Visualisation GIS des licences",
    },
    gisHint: {
      en: "Interactive map placeholder — GeoJSON / HYRION integration in a future version",
      ar: "عنصر خريطة تفاعلية مؤقت — تكامل GeoJSON / HYRION في إصدار لاحق",
      fr: "Espace réservé pour carte interactive — intégration GeoJSON / HYRION dans une future version",
    },
    gisLock: {
      en: "Controlled spatial data — displayed under access level only.",
      ar: "بيانات مكانية مضبوطة — تُعرض وفق مستوى الوصول فقط.",
      fr: "Données spatiales contrôlées — affichées uniquement selon le niveau d'accès.",
    },
    roomTitle: { en: "Controlled Product Room", ar: "غرفة المنتج المضبوطة", fr: "Salle produit contrôlée" },
    roomBody: {
      en: "Executive snapshot, license & evidence layer, governance logic, and HYRION-ready access control — staged by clearance.",
      ar: "لقطة تنفيذية، طبقة الرخص والأدلة، منطق الحوكمة، وضبط الوصول الجاهز لـ HYRION — مُدرّج حسب التصريح.",
      fr: "Aperçu exécutif, couche licence et preuves, logique de gouvernance et contrôle d'accès prêt pour HYRION — échelonné par habilitation.",
    },
    viewRoom: { en: "View Controlled Product Room", ar: "عرض غرفة المنتج المضبوطة", fr: "Voir la salle produit contrôlée" },
    requestReview: {
      en: "Request Isseksi Product Review",
      ar: "طلب مراجعة منتج Isseksi",
      fr: "Demander l'examen du produit Isseksi",
    },
  },

  pr: {
    eyebrow: {
      en: "Product 02 — R&D / MVP Demonstrator",
      ar: "المنتج 02 — نموذج بحث وتطوير / MVP",
      fr: "Produit 02 — Démonstrateur R&D / MVP",
    },
    type: {
      en: "R&D-ready Smart Exploration MVP",
      ar: "نموذج MVP للاستكشاف الذكي جاهز للبحث والتطوير",
      fr: "MVP d'exploration intelligente prêt pour la R&D",
    },
    qassasModules: { en: "QASSAS Modules", ar: "وحدات QASSAS", fr: "Modules QASSAS" },
    expectedOutputs: { en: "Expected Outputs", ar: "المخرجات المتوقعة", fr: "Résultats attendus" },
    requestReview: { en: "Request MVP Review", ar: "طلب مراجعة الـ MVP", fr: "Demander l'examen du MVP" },
  },

  hyrion: {
    eyebrow: {
      en: "HYRION Mining Data Infrastructure",
      ar: "HYRION — البنية التحتية لبيانات التعدين",
      fr: "HYRION — Infrastructure de données minières",
    },
    title: {
      en: "The operating system for mining evidence governance",
      ar: "نظام التشغيل لحوكمة أدلة التعدين",
      fr: "Le système d'exploitation pour la gouvernance des preuves minières",
    },
    dataRoom: { en: "Traditional Data Room", ar: "غرفة بيانات تقليدية", fr: "Salle de données traditionnelle" },
    processFlow: { en: "Process Flow", ar: "مسار العملية", fr: "Flux de processus" },
  },

  qassas: {
    eyebrow: {
      en: "QASSAS Morocco Adaptation",
      ar: "تكييف QASSAS مع المغرب",
      fr: "Adaptation QASSAS Maroc",
    },
    title: {
      en: "Exploration intelligence adapted to Moroccan geology",
      ar: "ذكاء استكشافي مُكيّف مع الجيولوجيا المغربية",
      fr: "Intelligence d'exploration adaptée à la géologie marocaine",
    },
    module: { en: "Module", ar: "وحدة", fr: "Module" },
  },

  roadmap: {
    eyebrow: { en: "Six-Month Delivery Roadmap", ar: "خارطة طريق التسليم لستة أشهر", fr: "Feuille de route de six mois" },
    title: {
      en: "From incorporation to a CDG scale decision in six months",
      ar: "من التأسيس إلى قرار التوسع مع CDG في ستة أشهر",
      fr: "De la constitution à une décision d'échelle de la CDG en six mois",
    },
  },

  shareholding: {
    eyebrow: {
      en: "Shareholding & Step-Up Pathway",
      ar: "هيكل المساهمة ومسار الاستحواذ التدريجي",
      fr: "Actionnariat et parcours d'acquisition progressive",
    },
    title: {
      en: "Structured for staged CDG step-up acquisition",
      ar: "مُهيكل للاستحواذ التدريجي من CDG",
      fr: "Structuré pour une acquisition progressive par la CDG",
    },
    postSeed: { en: "Post-Seed Allocation", ar: "التوزيع بعد التأسيس", fr: "Répartition post-amorçage" },
    stepUp: { en: "Step-Up Pathway", ar: "مسار الاستحواذ التدريجي", fr: "Parcours d'acquisition progressive" },
    seedUse: {
      en: "Seed Use of Funds — USD 350,000",
      ar: "أوجه استخدام أموال التأسيس — 350,000 دولار أمريكي",
      fr: "Emploi des fonds d'amorçage — 350 000 USD",
    },
  },

  documents: {
    eyebrow: { en: "Document Center", ar: "مركز المستندات", fr: "Centre de documents" },
    title: {
      en: "The controlled institutional document package",
      ar: "حزمة المستندات المؤسسية المضبوطة",
      fr: "Le dossier documentaire institutionnel contrôlé",
    },
    description: {
      en: "Ten documents organized by category, status, and access level. Sensitive materials are not exposed by default — access is reviewed manually.",
      ar: "عشرة مستندات منظمة حسب الفئة والحالة ومستوى الوصول. لا تُعرض المواد الحساسة افتراضيًا — تتم مراجعة الوصول يدويًا.",
      fr: "Dix documents organisés par catégorie, statut et niveau d'accès. Les éléments sensibles ne sont pas exposés par défaut — l'accès est examiné manuellement.",
    },
    all: { en: "All", ar: "الكل", fr: "Tous" },
    document: { en: "Document", ar: "مستند", fr: "Document" },
    access: { en: "Access", ar: "الوصول", fr: "Accès" },
    preview: { en: "Preview", ar: "معاينة", fr: "Aperçu" },
    download: { en: "Download", ar: "تنزيل", fr: "Télécharger" },
    modalNote: {
      en: "This document is held in the controlled package; preview and download are released on approval.",
      ar: "هذا المستند محفوظ ضمن الحزمة المضبوطة؛ تُتاح المعاينة والتنزيل بعد الموافقة.",
      fr: "Ce document fait partie du dossier contrôlé ; l'aperçu et le téléchargement sont libérés après approbation.",
    },
  },

  access: {
    eyebrow: { en: "Institutional Access Request", ar: "طلب وصول مؤسسي", fr: "Demande d'accès institutionnel" },
    title: { en: "Request controlled access", ar: "طلب وصول مضبوط", fr: "Demander un accès contrôlé" },
    ladder: { en: "Access ladder", ar: "سلّم الوصول", fr: "Échelle d'accès" },
    fullName: { en: "Full name", ar: "الاسم الكامل", fr: "Nom complet" },
    institution: { en: "Institution", ar: "المؤسسة", fr: "Institution" },
    institutionPh: { en: "Institution / organization", ar: "المؤسسة / المنظمة", fr: "Institution / organisation" },
    role: { en: "Role / department", ar: "الدور / القسم", fr: "Fonction / département" },
    rolePh: { en: "Role or department", ar: "الدور أو القسم", fr: "Fonction ou département" },
    email: { en: "Email", ar: "البريد الإلكتروني", fr: "E-mail" },
    phone: { en: "Phone", ar: "الهاتف", fr: "Téléphone" },
    level: { en: "Requested access level", ar: "مستوى الوصول المطلوب", fr: "Niveau d'accès demandé" },
    reason: { en: "Reason for access", ar: "سبب طلب الوصول", fr: "Motif de la demande d'accès" },
    reasonPh: {
      en: "Briefly describe the institutional purpose of your request.",
      ar: "صف بإيجاز الغرض المؤسسي من طلبك.",
      fr: "Décrivez brièvement la finalité institutionnelle de votre demande.",
    },
    ndaRequired: { en: "NDA required", ar: "اتفاقية عدم إفصاح مطلوبة", fr: "Accord de confidentialité requis" },
    yes: { en: "yes", ar: "نعم", fr: "oui" },
    no: { en: "no", ar: "لا", fr: "non" },
    submit: { en: "Submit Access Request", ar: "إرسال طلب الوصول", fr: "Envoyer la demande d'accès" },
    noStore: {
      en: "No data is stored. This opens a pre-filled email to",
      ar: "لا تُخزَّن أي بيانات. يفتح هذا رسالة بريد إلكتروني مُعبّأة مسبقًا إلى",
      fr: "Aucune donnée n'est conservée. Ceci ouvre un e-mail prérempli vers",
    },
    successTitle: { en: "Request prepared", ar: "تم تجهيز الطلب", fr: "Demande préparée" },
    successBodyA: {
      en: "Your email client has been opened with a pre-filled request to",
      ar: "تم فتح برنامج البريد لديك برسالة طلب مُعبّأة مسبقًا إلى",
      fr: "Votre messagerie a été ouverte avec une demande préremplie vers",
    },
    successBodyB: {
      en: ". If it did not open, please send your details to that address. Access is reviewed manually for institutional purposes.",
      ar: ". إذا لم يُفتح، يرجى إرسال بياناتك إلى هذا العنوان. تتم مراجعة الوصول يدويًا لأغراض مؤسسية.",
      fr: ". S'il ne s'est pas ouvert, veuillez envoyer vos coordonnées à cette adresse. L'accès est examiné manuellement à des fins institutionnelles.",
    },
    submitAnother: { en: "Submit another request", ar: "إرسال طلب آخر", fr: "Envoyer une autre demande" },
  },

  footer: {
    blurb: {
      en: "A controlled institutional digital window presented to support a first CDG review conversation — before incorporation and execution.",
      ar: "نافذة رقمية مؤسسية مضبوطة تُقدَّم لدعم أول حوار مراجعة مع CDG — قبل التأسيس والتنفيذ.",
      fr: "Une fenêtre numérique institutionnelle contrôlée présentée pour soutenir une première discussion d'examen avec la CDG — avant constitution et exécution.",
    },
    confidential: {
      en: "Confidential — controlled institutional materials. Not a public offering, fundraising, or solicitation. All structure, ownership, and IP terms remain subject to legal review and final documentation.",
      ar: "سري — مواد مؤسسية مضبوطة. ليست عرضًا عامًا ولا جمع تبرعات ولا استقطابًا. تظل جميع شروط الهيكل والملكية والملكية الفكرية خاضعة للمراجعة القانونية والتوثيق النهائي.",
      fr: "Confidentiel — documents institutionnels contrôlés. Il ne s'agit ni d'une offre publique, ni d'une levée de fonds, ni d'une sollicitation. Toutes les modalités de structure, de propriété et de propriété intellectuelle restent soumises à un examen juridique et à une documentation finale.",
    },
  },
} satisfies Record<string, Record<string, LocalizedText>>;
