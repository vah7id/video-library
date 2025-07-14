import { useQuery } from "@tanstack/react-query";
import { createVideoApi } from "../api/createVideoApi";

export const useAvailableTags = () => {
    return useQuery({
      queryKey: ['tags'],
      queryFn: () => createVideoApi.getTags(),
      select: (response) => response.data,
    });
  }; 