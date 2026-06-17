import type { LocalizedText } from "../i18n";
import type { AccessKey, StatusKey } from "./accessLevels";

export type Product = {
  id: "isseksi" | "pr3538746";
  /** Brand name — canonical across languages. */
  name: string;
  type: LocalizedText;
  statusKey: StatusKey;
  accessKey: AccessKey;
  /** Brand partner name — canonical across languages. */
  partner?: string;
  coreValue: LocalizedText;
  cta: LocalizedText;
  /** anchor id of the dedicated section */
  sectionId: string;
};

/** Source: 05_ISSEKSI_READY_PRODUCT_SHEET.md & 06_PR3538746_SMART_FAULT_MVP_SHEET.md */
export const products: Product[] = [
  {
    id: "isseksi",
    name: "Isseksi Copper Intelligence",
    type: {
      en: "Ready Mining Intelligence & Governance Product",
      ar: "منتج جاهز في استخبارات التعدين والحوكمة",
      fr: "Produit prêt d'intelligence minière et de gouvernance",
    },
    statusKey: "ready",
    accessKey: "controlled",
    partner: "Atlas Mining",
    coreValue: {
      en: "Governed mining product room, license intelligence, evidence architecture, and HYRION-ready decision support.",
      ar: "غرفة منتج تعدين محوكمة، واستخبارات الرخص، ومعمارية الأدلة، ودعم قرار جاهز لـ HYRION.",
      fr: "Salle produit minière gouvernée, intelligence des licences, architecture des preuves et aide à la décision prête pour HYRION.",
    },
    cta: {
      en: "View Isseksi Product",
      ar: "عرض منتج Isseksi",
      fr: "Voir le produit Isseksi",
    },
    sectionId: "isseksi",
  },
  {
    id: "pr3538746",
    name: "PR3538746 Smart Fault Exploration",
    type: {
      en: "R&D-ready Smart Exploration MVP",
      ar: "نموذج MVP للاستكشاف الذكي جاهز للبحث والتطوير",
      fr: "MVP d'exploration intelligente prêt pour la R&D",
    },
    statusKey: "technical-review",
    accessKey: "nda",
    coreValue: {
      en: "AI-assisted fault-controlled target intelligence using QASSAS, HYRION, geochemistry, geophysics, and field evidence.",
      ar: "استخبارات أهداف يتحكم فيها الفالق بمساعدة الذكاء الاصطناعي باستخدام QASSAS وHYRION والجيوكيمياء والجيوفيزياء والأدلة الميدانية.",
      fr: "Intelligence de cibles contrôlées par les failles, assistée par IA, via QASSAS, HYRION, la géochimie, la géophysique et les preuves de terrain.",
    },
    cta: {
      en: "View PR3538746 MVP",
      ar: "عرض MVP الخاص بـ PR3538746",
      fr: "Voir le MVP PR3538746",
    },
    sectionId: "pr3538746",
  },
];
