export const limitText = (sentence, charLimit) => {
  return sentence.slice(0, charLimit) + "...";
};

export const nameMaker = (fullName) => {
  let result = "";
  fullName.split(" ").forEach((part) => {
    result += part.split('')[0]
  });
  return result.toUpperCase();
};

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
