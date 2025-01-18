import Cards from "./Cards";

export const CARDS = {
  id: crypto.randomUUID(),
  path: "cartas",
  to: "/cartas",
  display: "Cartas",
  element: <Cards />,
};
