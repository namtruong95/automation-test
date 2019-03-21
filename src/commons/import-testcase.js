const importTestCase = (name, path) => {
  if (name) {
    describe(name, () => {
      require(path);
    });

    return;
  }

  require(path);
};

export default importTestCase;
