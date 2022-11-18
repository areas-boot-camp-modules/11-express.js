const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: If the duration is longer than maxDuration, reject() the promise
      // TODO: Otherwise resolve() the promise
      if (duration > maxDuration) {
        reject("Fail!")
      } else {
        resolve("All good!")
      }
    }, duration)
  })

// Why doesn’t this work?
// function callAPI(duration) {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (duration > maxDuration) {
//         reject("Fail!")
//       } else {
//         resolve("All good!")
//       }
//     }, duration)
//   })
// }

const promises = apiCallDurations.map((duration) => callAPI(duration));

console.log('Promises array before the timeouts have finished: ', promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
Promise.all(promises).then((values) => {
  console.log(values)
}).catch((error) => {
  console.error(error)
})
