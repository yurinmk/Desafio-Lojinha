const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storegeTypes = {
  local: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "uploads", "productFiles"));
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);
        file.key = `${hash.toString("hex")}-${file.originalname}`;
        callback(null, file.key);
      });
    },
  }),
};

module.exports = {
  dest: path.resolve(__dirname, "..", "uploads"),
  storage: storegeTypes[process.env.STORAGE_TYPE],
  limites: { fileSize: 25 * 1024 * 1024 },
  fileFilter: (request, file, callback) => {
    const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Formato de imagem não suportado!"));
    }
  },
};
