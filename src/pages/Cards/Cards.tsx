import Layout from "@layouts/Layout/Layout";
import { CARDS } from "./config";
import { useGetCards } from "./useGetCards";

export default function Cards() {
  const { cards, isLoading, isError } = useGetCards();

  return (
    <Layout title={CARDS.display}>
      <main>
        {isLoading && <h1>Cargando...</h1>}
        {isError && !isLoading && <h1>Error</h1>}
        {cards?.records.map((card) => (
          <h2 key={card.id}>{card.name}</h2>
        ))}
      </main>
    </Layout>
  );
}
