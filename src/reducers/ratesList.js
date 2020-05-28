import computeRates from '../middleware/computeRates';

export const ratesList = (state=[], action) => {
  switch (action.type) {
    case "DATA_LOADED":
      let newState = action.data.map((item) => {
        if (item[1] === "Russian Ruble"){
          return {
            name: item[1],
            code: item[2],
            str_code: item[3],
            value: item[4],
            relation: item[5],
            isFavorite: false,
            isBase: true
          }
        }
        return {
          name: item[1],
          code: item[2],
          str_code: item[3],
          value: item[4],
          relation: item[5],
          ...rate(undefined, action)
        };
      });
      return newState;
    case "CLICKED_FAV":
      let sortState = [];
      let newStat = state.map((object) => {
        if (object.name === action.name) {
          object.isFavorite = !object.isFavorite;
        }
        return object;
      });
      newStat.forEach((object) => {
        if (object.isFavorite) {
          sortState.push(object);
        }
      })
      newStat.forEach((object) => {
        if (!object.isFavorite) {
          sortState.push(object);
        }
      });
      return sortState;

    case "CLICKED_BASE":
      let bVal = '';
      state.forEach((object) => {
        if (object.name === action.name) {
          bVal = object.value;
        }
      })
      let baseState = state.map((object) => {
        return {
          name: object.name,
          code: object.code,
          str_code: object.str_code,
          value: computeRates(bVal, object.value),
          relation: object.relation,
          isFavorite: object.isFavorite,
          isBase: object.name === action.name ? true : false
        }
      });
      console.log(baseState)
      return baseState;

    default:
      return state;
  }
}

const rate = (state={}, action) => {
  switch (action.type) {
    case "DATA_LOADED":
      let rate = {
        isFavorite: false,
        isBase: false
      };
      return rate;
    default:
      return state;
  }
}
