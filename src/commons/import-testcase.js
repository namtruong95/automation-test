const importTestCase = (name, path) => {
  describe(name, () => {
    require(path);
  });
};

export default importTestCase;
