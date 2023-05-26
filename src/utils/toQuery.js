// import deepSortObject from "deep-sort-object";
//
// const RADIX = 16,
//
//   encodeParam = (string) => {
//     return encodeURIComponent(string).replace(/[!'()*]/g, function(char) {
//       //Note: Convert '(' to '%28' and ')' to '%29'
//       return `%${char.charCodeAt(0).toString(RADIX)}`.toUpperCase();
//     }).replace(/%20/g, "+");
//   },
//
//   encodeQuery = (object, useFormData = false, key = null) => {
//     const keyValues = Array.isArray(object)
//         ? object.map(el => ({ key: "", value: el }))
//         : Object.keys(object).map(key => ({ key, value: object[key] })),
//       queryParams = keyValues.reduce((allParams, currentParam) => {
//         let newKey = key !== null ? `${key}[${currentParam.key}]` : currentParam.key;npm au
//
//         if (Array.isArray(currentParam.value) && !currentParam.value.length) {
//           return allParams;
//         }
//         if (currentParam.value === null) {
//           return allParams.concat(`${encodeParam(newKey)}=`);
//         } else if (typeof currentParam.value === "object") {
//           return allParams.concat(encodeQuery(currentParam.value, useFormData, newKey));
//         }
//
//         return allParams.concat(`${encodeParam(newKey)}=${encodeParam(currentParam.value)}`);
//       }, []);
//
//     return queryParams.join("&");
//   },
//
//   toQuery = (object, useFormData = false) => {
//     return encodeQuery(deepSortObject(object), useFormData);
//   };
//
// export default toQuery;
