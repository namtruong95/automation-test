const importTestCase = (name, path) => {
  if (name) {
    return describe(name, () => {
      require(path);
    });
  }

  return require(path);
};

export default importTestCase;
