export const addThousandsSeparator = (value) => {
  const str = String(value);
  const regexp = /(\d)(?=(\d\d\d)+([^\d]|$))/g;

  if (str.includes(".")) {
    /*const integer = str.substr(0, str.indexOf("."));
    const decimal = str.substr(str.indexOf(".") + 1);
    const formatInteger = integer.replace(regexp, "$1\u00A0"); //narrow no-break space \u202F
    return `${formatInteger},${decimal}`;*/

    const numberParts = str.split(".");
    const integer = numberParts[0];
    numberParts[0] = integer.replace(regexp, "$1\u00A0");
    return numberParts.join();
  }

  return str.replace(regexp, "$1\u00A0");
};