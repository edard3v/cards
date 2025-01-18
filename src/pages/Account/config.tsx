import Account from "./Account";

export const ACCOUNT = {
  id: crypto.randomUUID(),
  path: "cuenta",
  to: "/cuenta",
  display: "Cuenta",
  element: <Account />,
};
