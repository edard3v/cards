import css from "./Cards.module.css";
import Layout from "@layouts/Layout/Layout";
import { CARDS } from "./config";
import { useGetCards } from "./useGetCards";
import Loading from "@components/loaders/Loading/Loading";
import Card from "./Card/Card";

export default function Cards() {
  const { cards, isLoading, isError } = useGetCards();

  return (
    <Layout title={CARDS.display}>
      <main className={css.cards}>
        {isLoading && <Loading />}
        {isError && !isLoading && <h1>Error</h1>}

        <section className={css.wrapper}>
          {cards?.records.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
