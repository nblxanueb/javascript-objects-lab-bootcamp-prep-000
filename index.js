var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;

  return object;

}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},recipes);
  delete newObj.recipes;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;

}
