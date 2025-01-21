export type GetCardsFetchParams = {
  limit?: number;
  page?: number;
  signal: AbortSignal;
};

export interface GetCardsRes {
  limit: number;
  page: number;
  totalPages: number;
  records: GetCardsRecord[];
}

export interface GetCardsRecord {
  id: string;
  name: string;
  front: string;
  back: string;
  likes: number;
  category: string;
  author: string;
  createdAt: Date;
  updateAt: Date;
  audio: string;
  img: string;
}
