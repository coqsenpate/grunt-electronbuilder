# grunt-electronpackager-alt

> Runs electron-packager in grunt.

This task directly sends the provided config to [electron-packager](https://github.com/electron/packager) (which you must provide).

## Install

```
$ npm install --save-dev electron-packager grunt-electronpackager-alt
```

## Usage

```js
require('load-grunt-tasks')(grunt);

grunt.initConfig({
  electronpackager: {
    options: {
      buildFunction: require('electron-packager')
    },
    macos: {
      options: {
        platform: 'darwin',
        arch: 'x64',
        ...
      },
    },
  },
});

grunt.registerTask('default', ['electronpackager']);
```
