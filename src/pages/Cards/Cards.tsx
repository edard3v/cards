import Layout from "@layouts/Layout/Layout";
import { CARDS } from "./config";

export default function Cards() {
  return (
    <Layout title={CARDS.display}>
      <main>
        <h1>Cartas</h1>
      </main>
    </Layout>
  );
}
