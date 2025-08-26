import PocketBase from "pocketbase";
export const pb = new PocketBase(import.meta.env.VITE_PB_URL);

export type Guest = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  address?: string;
  date_of_birth?: string; // ISO date
  created: string;
};
