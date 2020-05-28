export default function data_loaded(object) {
  let data = [];
  for (let key in object) {
    let rateRow = object[key];
    data.push(rateRow);
  }
  return {
    type: "DATA_LOADED",
    data: data
  };
}
