# eslint-config-moni-web

## Installation

All the dependencies have to be installed explicitly (see [`eslint/eslint#3458`](https://github.com/eslint/eslint/issues/3458)).
```bash
$ npm install --save-dev eslint-config-moni-web eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-next eslint-config-prettier eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort prettier
```

Alternatively you can use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):
```bash
$ npm install install-peerdeps --global
$ npm install eslint-config-moni-web --save-dev
$ install-peerdeps eslint-config-moni-web --dev
```

## Usage

Once the `eslint-config-moni-web` package is installed, you can use it by specifying the different configs in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  extends: [
    'moni-web'
  ],
  rules: {
    // Additional, project specific rules...
  }
}
```
