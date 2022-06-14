import { API_URL } from "./Constants";

async function baseRequest(method, route, options) {
  let headers = {};
  if (sessionStorage.getItem("establishmentId")) {
    headers = {
      "Content-Type": "application/json",
      establishmentId: sessionStorage.getItem("establishmentId"),
    };
  } else
    headers = {
      "Content-Type": "application/json",
    };
  let body;
  if (options?.file) {
    body = options?.body;
    delete headers["Content-Type"];
  } else body = options?.body ? JSON.stringify(options.body) : null;

  const resp = await fetch(
    `${API_URL}${route}`,
    Object.assign(
      {
        method,
        headers,
      },
      { body } || {}
    )
  );
  const json = await resp.json();

  return json;
}

export const get = (route, options) => baseRequest("GET", route, options);
export const post = (route, options) => baseRequest("POST", route, options);
export const put = (route, options) => baseRequest("PUT", route, options);
export const del = (route, options) => baseRequest("DELETE", route, options);
