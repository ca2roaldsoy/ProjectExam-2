import React from "react";
import { BASE_URL, headers } from "../../../constants/api";

    const url = BASE_URL + "establishments";
    const options = { headers };

    export const fetchUrl = fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setLoading(false);
          setErrorHandle(true);
        }
      })
      .then((json) => {
        setLoading(false);
        setEstablishments(json);
        setSearchEstablishments(json);
        console.log(json);
      })
      .catch((err) => console.log(err));

    switch (api) {
      case 1:
        return
        
      default:
        return null;
    }
}
