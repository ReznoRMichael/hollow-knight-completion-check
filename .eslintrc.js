module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node" : true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
    },
    "rules": {
        "no-prototype-builtins": 0,
        "no-unused-vars": 0,
    }
};
