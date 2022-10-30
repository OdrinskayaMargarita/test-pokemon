import axios from "axios";

import { baseUrl } from "./config";

export const api = {
  getCharacterListPage() {
    return axios({
      method: "get",
      url: baseUrl + `pokemon/?offset=0&limit=1154`,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }).catch((error) => error);
  },

  getOneCharacter(id) {
    return axios({
      method: "get",
      url: baseUrl + `pokemon/${id}`,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }).catch((error) => error);
  },
};


