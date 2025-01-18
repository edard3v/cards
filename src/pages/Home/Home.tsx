import css from "./Home.module.css";
import Layout from "@layouts/Layout/Layout";
import { HOME } from "./config";

export default function Home() {
  return (
    <Layout title={HOME.display}>
      <main className={css.home}>
        <div className={css.hi}>
          <h1>¡Hola mundo 👋!</h1>
          <p>
            Aprende de forma personalizada creando tus propias tarjetas de
            estudio. Organiza un mazo, y comienza a aprender a tu ritmo.
            Comparte tus mazos con la comunidad y ayuda a tus colegas a crecer
            junto a ti.
          </p>
        </div>
      </main>
    </Layout>
  );
}
