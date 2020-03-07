const fs = require("fs");

const readJSON = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (data) {
        try {
          resolve(JSON.parse(data.toString()));
        } catch (ex) {
          reject(ex);
        }
      } else {
        reject(err);
      }
    });
  });
};

// const writeJSON = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// };

module.exports = {
  readJSON
};