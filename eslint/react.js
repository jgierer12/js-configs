module.exports = {
  extends: [`healthier/react`],
  plugins: [`react-hooks`],
  rules: {
    "healthier/rules-of-hooks": `error`,
    "healthier/prop-types": `off`,
  },
};
