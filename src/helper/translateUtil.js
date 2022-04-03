const fs = require("fs");
const translate = require("@vitalets/google-translate-api");

const rawData = fs.readFileSync("./english_translation.json");
const translations = JSON.parse(rawData);

const translateText = (key, value) => {
  translate(value, { to: "de" })
    .then((res) => {
      fs.writeFileSync("translation.json", `"${key}": "${res.text}",\n`, {
        flag: "a+",
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
Object.keys(translations).forEach((key) =>
  translateText(key, translations[key])
);
