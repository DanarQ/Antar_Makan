import mitra from "../data/mitra.js";

const getMitras = (req, res) => {
  res.json(mitra);
};

export { getMitras };
