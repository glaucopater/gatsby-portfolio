const fs = require("fs");

module.exports = {
  createYmlFile: function (path) {
    const photoPathTokens = path.split("/");
    const photoPath =
      "./" +
      photoPathTokens[photoPathTokens.length - 2] +
      photoPathTokens[photoPathTokens.length - 1] +
      "/";
    const template = (title, author, file) =>
      `- title: ${title}
  author: ${author}
  image: ${photoPath + file}
`;

    fs.readdir(path, (err, data) => {
      if (err) throw err;
      data.forEach((el) => {
        if (!el.startsWith(".")) console.log(template(el, "Glauco Pater", el));

        fs.readFile(path + el, (err, data) => {
          if (err) throw err;
        });
      });
    });
  },
};
