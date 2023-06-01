// import { isSignedIn } from "utils.js/session";
// import platformsServices from "api/platformsService";
// import transactionsService from "api/transactionsService";
// import moment from "moment";
// import userServices from "../../api/userServices";
// import { INCLUDE_TYPE_BY_LIST_TYPE } from "utils.js/transactionConstants/transaction";

// const handlerLoadMoreReceiverPlatform = async ({name, pages, size}) => {
//   return constructPlatformData(await platformsServices.getAllPlatforms({
//     name,
//     pages: pages,
//     size: size
//   }));
// };

// const handlerLoadMoreSenderPlatform = async ({name, pages, size}) => {
//   return constructPlatformData(await platformsServices.getPlatforms({
//     name,
//     pages: pages,
//     size: size
//   }));
// };
//
// const handlerOnChangeCheckField = (key, data, setData) => (item) => {
//   setData({...data, [key]: item.target.checked});
// };
//
const onChangeTextField = (key, setData) => (item) => {
  setData((prevData) => ({
    ...prevData,
    [key]: item.target.value
  }));
};

const onChangeInputText = (key, setData) => (item) => {
  setData((prevData) => ({
    ...prevData,
    [key]: item
  }));
};

const onChangeInputFile = (key, setData) => (item) => {
  setData((prevData) => ({
    ...prevData,
    [key]: item.target.files[0]
  }));
};

const onChangeDate = (key, setData) => (item) => {
  setData((prevData) => ({
    ...prevData,
    [key]: item
  }));
};

//
// const handlerOnChangeSelectField = (key, data, setData) => (item) => {
//   setData({
//     ...data,
//     [key]: item?.value || item?.target?.value || item || null
//   });
// };
//
// const handlerOnChangeSelectObjectField = (key, data, setData) => (item) => {
//   setData({
//     ...data,
//     [key]: item
//   });
// };
//
// const handlerOnChangeDateField = (key, per, data, setData) => (item) => {
//   if (item?.$d) {
//     setData({
//       ...data,
//       [key]: {
//         ...data[key],
//         [per]: moment(item.$d, "YYYY-MM-DDTHH:mm:ss.SSS")
//       }
//     });
//   }
// };
//
// const constructPlatformData = (data) => {
//   return {
//     data: data.data.map(i => {
//       return {
//         label: i.attributes["platform-name"],
//         value: i.attributes.alias,
//         id: i.id
//       };
//     }),
//     links: data.links
//   };
// };
//
// const handlerOnChangeRadioField = (key, data, setData) => (item) => {
//   setData({
//     ...data,
//     [key]: item?.value || item?.target?.value || item
//   });
// };
//
// const handlerLoadMoreTags = (type) => async (tags) => {
//   if (isSignedIn()) {
//     return (await transactionsService.getTags({
//       tags: tags,
//       type: type
//     })).data.attributes.tags;
//   }
// };
//
// const handlerLoadMoreProduct = async (code, data) => {
//   if (isSignedIn()) {
//     const res = await userServices.getUserProductByCode(
//       code, INCLUDE_TYPE_BY_LIST_TYPE[data.listType], 1, 50);
//     const ids = new Set(data.products.map((d) => d.id || d));
//     return data.products
//       .concat(
//         res.filter((d) => !ids.has(d.id || d))
//           .map(i => i.attributes.code));
//   }
// };

export const handlers = {
  onChangeTextField,
  onChangeInputFile,
  onChangeInputText,
  onChangeDate
};
