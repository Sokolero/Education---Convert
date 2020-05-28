export default function computeRates(bVal, value) {

  let changed_value = Number(value) / Number(bVal);
  changed_value = String(changed_value);

  return changed_value;

}

function formatVisibleValue(value, relation) {
  let visibleValue = Number(value);
  let visibleRelation = relation;
  while (Math.round(visibleValue * 10) === 0) {
    visibleValue *= 10;
    visibleRelation *= 10;
  }

  visibleValue = String(visibleValue);
  visibleRelation = String(visibleRelation);
  visibleValue = visibleValue.slice(0, visibleValue.indexOf('.') + 3);

  return {
    value: visibleValue,
    relation: visibleRelation
  }
}

export { formatVisibleValue };
