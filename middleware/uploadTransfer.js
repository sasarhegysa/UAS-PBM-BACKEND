const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/bukti_transfer/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `bukti-${req.user._id}-${Date.now()}${path.extname(file.originalname)}`
    );
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpg|jpeg|png|pdf/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);
  if (ext && mime) cb(null, true);
  else cb(new Error("File harus berupa JPG, PNG, atau PDF"));
};

const uploadTransfer = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter
});

module.exports = uploadTransfer;
