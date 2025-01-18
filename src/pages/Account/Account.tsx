import Layout from "@layouts/Layout/Layout";
import { ACCOUNT } from "./config";

export default function Account() {
  return (
    <Layout title={ACCOUNT.display}>
      <main>
        <h1>Cuenta</h1>
      </main>
    </Layout>
  );
}
