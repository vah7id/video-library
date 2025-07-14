import { Tag } from "./tag";

export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  duration: number;
  views: number;
  tags: Tag[];
}

