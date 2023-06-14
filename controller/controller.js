function rutaGet(req, res) {
  res.send("Esta haciendo get");
}
function rutaPut(req, res) {
  res.send("Esta haciendo Put");
}
function rutaPost(req, res) {
  res.send("Esta haciendo Post");
}
function rutaDelete(req, res) {
  res.send("Esta haciendo Delete");
}

module.exports = {
  rutaGet,
  rutaPost,
  rutaPut,
  rutaDelete,
};
