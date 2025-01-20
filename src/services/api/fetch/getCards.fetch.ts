import { EdarErr } from "src/errors/Edar.err";
import { API } from "../api";

export const getCardsFetch = async (
  params: GetCardsFetchParams
): Promise<any> => {
  const { signal, limit, page } = params;

  const url = `${API.baseUrl}/get-cards`;
  const newUrl = new URL(url);

  newUrl.searchParams.set("limit", String(limit));
  newUrl.searchParams.set("page", String(page));

  const res = await fetch(newUrl, {
    signal,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new EdarErr({ status: res.status });
  }

  return await res.json();
};

export type GetCardsFetchParams = {
  limit?: number;
  page?: number;
  signal: AbortSignal;
};
