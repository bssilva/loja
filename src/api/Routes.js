import { get, post, put, del } from "./Request";

export const routesApi = {
  establishment: {
    login: (body) => post("establishment/login", { body }),
  },
  prize: {
    postPrize: (body) => post("premium", { body }),
    getPrize: () => get("premium"),
  },
  client: {
    getAllCustomer: () => get("customer/"),
    getCustomerCpf: (cpf) => get(`customer/${cpf}`),
    getCustomer: () => get("customer/establishmentId"),
    deleteCustomer: (cpf) => del(`customer/${cpf}`),
    postCustomer: (body) => post("customer", { body }),
    updateCustomer: (body) => put(`customer/${body.cpf}`, { body }),
  },
  points: {
    getPoints: () => get("point"),
    postPoints: (body) => post("point", { body }),
  },
  redemption: {
    getRedemptions: () => get("redemption"),
    postRedemption: (body) => post("redemption", { body })
  },
  voucher: {
    getVouchers: () => get("vouncher/all")
  }
};
