module.exports = () => {
  return {
    env: {
      mongoDbURI: `mongodb+srv://db_access:szz2RDOBvNefSYUH@ny-indo-food-bazaar.rdqxj.mongodb.net/data?retryWrites=true&w=majority`,
    },
    future: {
      webpack5: true,
    },
  };
};
