var wordOrder = function(text) {
  var text = text.toLowerCase()
  var splitText = text.split(" ").sort();
  var textLength = splitText.length;
  var word = [];
  var count = [];

  word.push(splitText, textLength);
  var result = splitText.concat(textLength);

  return result;
};
