module.exports = {
    root: true,
    parserOptions: {
        "tsconfigRootDir": ".",
        "project": ["tsconfig.json"],
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    parser: "@typescript-eslint/parser",
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
        "react-hooks",
        "promise",
        "simple-import-sort"
    ],
    rules: {
        "max-len": [
            "error",
            {
                "code": 150,
                "ignoreRegExpLiterals": true,
                "ignoreStrings": true
            }
        ],
        "react/no-unsafe": [2, {"checkAliases": true}],
        "react/no-deprecated": 2,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "promise/prefer-await-to-then": "error",
        "import/no-extraneous-dependencies": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        "prettier/prettier": [2, {
            bracketSpacing: true,
            singleQuote: true,
            trailingComma: 'all',
            tabWidth: 4,
            bracketSameLine: false,
            eol: 'lf'
        }],
        "comma-dangle": [
            "error",
            "only-multiline"
        ],
        "curly": "error",
        "no-param-reassign": [
            "error",
            {
                "props": true
            }
        ],
        "@typescript-eslint/require-await": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-unsafe-call": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/restrict-template-expressions": 0,
        "@typescript-eslint/no-unsafe-return": 0,
        "@typescript-eslint/unbound-method": 0,
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": ["return", "block", "block-like"]
            },
            {
                "blankLine": "always",
                "prev": ["const", "let", "var"],
                "next": "*"
            }
        ],
        "sort-imports": "off",
        "import/order": "off",
        "simple-import-sort/imports": [
            "error",
            {
                "groups": [
                    [
                        "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)"
                    ],
                    // Packages. `react` related packages come first.
                    ["^react", "^@?\\w"],
                    // Types
                    ["^.+?[Tt]ype.+?"],
                    // Internal packages.
                    ["^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)"],
                    // Hooks imports.
                    ["^.*use[A-Z].*$"],
                    // Side effect imports.
                    ["^\\u0000"],
                    // Parent imports. Put `..` last.
                    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]

                ]
            }
        ],
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "custom": {
                    "regex": "^I[A-Z]",
                    "match": true
                }
            },
            {
                "selector": "class",
                "format": ["PascalCase"]
            }
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Array": "Use [] instead",
                    "Object": {
                        "message": "Use object instead",
                        "fixWith": "object"
                    },
                    "String": {
                        "message": "Use string instead",
                        "fixWith": "string"
                    },
                    "Number": {
                        "message": "Use number instead",
                        "fixWith": "number"
                    },
                    "Boolean": {
                        "message": "Use boolean instead",
                        "fixWith": "boolean"
                    }
                }
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": 2   ,
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "object-curly-spacing": ["error", "always"],
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-unnecessary-type-constraint": "off"
    }
}
