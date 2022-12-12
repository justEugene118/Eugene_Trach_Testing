# Web API homework

In this homework I am uploading [test.txt](test_files/test.txt) file to dropbox, getting its metadata, and then deleting it

Steps to start a project:
1. After cloning a repository WebAPI branch run `npm i`, which will download all the missing packages
2. inside [index.ts](/index.ts) file change `token:` to your oun token
3. Run `tsc`, to create .js files of .ts
4. Run `npm test` to run a WebAPI tests


Stack used in this homework:
1. [DropBox API](https://www.dropbox.com/developers/documentation/http/documentation) and its wrapper [dropbox-v2-api](https://www.npmjs.com/package/dropbox-v2-api/v/2.3.0)
2. [Mocha](https://mochajs.org) test reporter
3. [Typescript](https://www.typescriptlang.org/docs/)