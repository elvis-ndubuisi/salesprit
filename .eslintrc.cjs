module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "react/react-in-jsx-scope": 0,
        "prettier/prettier": "error",
        "import/no-extraneous-dependencies": 0,
    },
}
