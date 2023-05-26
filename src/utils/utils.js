import $ from "jquery";

export const isEmptyObj = (obj) => {
  if (obj)
    return Object.keys(obj).length === 0;
  return true;
};

export const queryParamsToQueryString = (params) => {
  if (!params || !Object.keys(params).length) {
    return "";
  }

  const queryParams = removeAllBlankOrNull(params);
  const queryString = $.param(queryParams);

  return queryString.length ? `?${queryString}` : "";
};

const removeAllBlankOrNull = (jsonObj) => {
  Object.keys(jsonObj).forEach((key) => {
    if (jsonObj[key] === "" || jsonObj[key] === null) {
      delete jsonObj[key];
    } else if (typeof jsonObj[key] === "object") {
      jsonObj[key] = removeAllBlankOrNull(jsonObj[key]);
    }
  });

  return jsonObj;
};

