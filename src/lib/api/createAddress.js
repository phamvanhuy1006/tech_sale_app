import { request } from "~/lib";

export const createAddress = async (value) => {
  const res = await request.post("/api/address", value);
  return res;
};
