import { useQuery } from "@tanstack/react-query";
import { fetchBible } from "../api/bibleAPI";

interface defaultBibleType {
  id: string;
  verse: string;
  text: string;
  createdAt: Date;
  updateAt: Date;
}

export const useBible = () => {
  return useQuery<defaultBibleType | undefined>({
    queryKey: ["bible"],
    queryFn: fetchBible,
  });
};
