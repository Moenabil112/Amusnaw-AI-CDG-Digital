/** Section navigation map. `id` must match the section element id in App.tsx. */
export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "cdg-entry", label: "CDG Entry" },
  { id: "products", label: "Products" },
  { id: "isseksi", label: "Isseksi" },
  { id: "pr3538746", label: "PR3538746" },
  { id: "hyrion", label: "HYRION" },
  { id: "qassas", label: "QASSAS" },
  { id: "documents", label: "Documents" },
  { id: "access", label: "Access" },
];
