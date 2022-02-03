// function debounce(fn, ms) {
//   let timeout;
//   return function(...args) {
//     const context = this
//     clearTimeout(timeout)
//     timeout = setTimeout(() => fn.apply(context, args), ms)
//   }
// }
// export default{
// debounce:(fn, ms = 500) => {
//       let timeout;
//         return () => {
//           clearTimeout(timeout);
//           timeout = setTimeout(fn, ms)
//         };
//       },
// }
      // export default 

// const debounce = (fn, ms) => {

//     let isCooldown = false;

//     return function () {
//       if (isCooldown) return;

//       isCooldown = true;

//       setTimeout(() => {
//         isCooldown = false;
//         fn.apply(this, arguments);
//       }, ms)
//     }
//   };

function debounce(fn, ms = 2000) {
  let timeout;
  return function(...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(context, args), ms)
  }
}

export default debounce;