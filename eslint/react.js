module.exports = {
  extends: [`standard-jsx`, `standard-react`, `prettier/react`, `.`],
  plugins: [`react-hooks`, `react`],
  rules: {
    "react-hooks/rules-of-hooks": `error`,
    "react-hooks/exhaustive-deps": `warn`,
    "react/prop-types": `off`,
  },
};
