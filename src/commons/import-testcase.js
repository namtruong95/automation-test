module.exports = function importTestCase(name, path) {
  describe(name, () => {
    require(path);
  });
};
