// export  let formDate = function (milliseconds) {
//   let date= new Date(milliseconds)
// }

export function formDate(milliseconds) {
  let date = new Date(milliseconds)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hhmmss = date.toTimeString().substr(0,5)
  let formDate = `${year}-${month < 10 ? '0'+month : month}-${day} ${hhmmss}`
  // console.log(formDate)
  return formDate
}