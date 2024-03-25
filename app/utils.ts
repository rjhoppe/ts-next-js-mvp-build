export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalize2(str: string) {
  return str && str.charAt(0).toUpperCase() + str.slice(1);
}


// export function genTempId() {
//   const minCeiled = Math.ceil(1000000);
//   const maxFloored = Math.floor(9999999)
//   const genNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
//   const genId = "T" + genNumber
//   return genId
// }