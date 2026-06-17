import type { LocalizedText } from "../i18n";
import type { AccessKey, StatusKey } from "./accessLevels";

export type Product = {
  id: "isseksi" | "aguelmous";
  /** Brand / product-facing name — canonical across languages. */
  name: string;
  /** Card subtitle. */
  subtitle: LocalizedText;
  statusKey: StatusKey;
  accessKey: AccessKey;
  /** Brand partner name — canonical across languages. */
  partner?: string;
  /** Permit/license reference — detail field only, never a title. */
  permitReference?: string;
  coreValue: LocalizedText;
  cta: LocalizedText;
  /** anchor id of the dedicated section */
  sectionId: string;
};

/**
 * Source: 05_ISSEKSI_READY_PRODUCT_SHEET.md & 06_PR3538746_SMART_FAULT_MVP_SHEET.md.
 * Product 2 is presented product-first as the "Aguelmous Smart Fault
 * Demonstrator"; the permit number (PR3538746) is a detail field only.
 */
export const products: Product[] = [
  {
    id: "isseksi",
    name: "Isseksi Copper Intelligence",
    subtitle: {
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
      ar: "عرض منتج إسيسكي",
      fr: "Voir le produit Isseksi",
    },
    sectionId: "isseksi",
  },
  {
    id: "aguelmous",
    name: "Aguelmous Smart Fault Demonstrator",
    subtitle: {
      en: "AI-assisted exploration MVP",
      ar: "نموذج استكشاف بمساعدة الذكاء الاصطناعي",
      fr: "Démonstrateur d'exploration assisté par IA",
    },
    statusKey: "technical-review",
    accessKey: "nda",
    permitReference: "PR3538746",
    coreValue: {
      en: "AI-assisted fault-controlled target intelligence using QASSAS, HYRION, geochemistry, geophysics, and field evidence.",
      ar: "استخبارات أهداف يتحكم فيها الفالق بمساعدة الذكاء الاصطناعي باستخدام QASSAS وHYRION والجيوكيمياء والجيوفيزياء والأدلة الميدانية.",
      fr: "Intelligence de cibles contrôlées par les failles, assistée par IA, via QASSAS, HYRION, la géochimie, la géophysique et les preuves de terrain.",
    },
    cta: {
      en: "View Aguelmous Demonstrator",
      ar: "عرض نموذج أگلموس",
      fr: "Voir le démonstrateur Aguelmous",
    },
    sectionId: "aguelmous",
  },
];
