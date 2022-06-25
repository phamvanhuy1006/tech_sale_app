import { request } from "~/lib";

export const deleteAddress = async (value) => {
  const res = await request.delete(`/api/address/${value}`);
//   return res;
};
