import { EdarErr } from "@errors/Edar.err";
import { API } from "../api";
import { GetCardsFetchParams, GetCardsRes } from "./types";

export const getCardsFetch = async (
  params: GetCardsFetchParams
): Promise<GetCardsRes> => {
  const { signal, limit = 20, page = 1 } = params;

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
