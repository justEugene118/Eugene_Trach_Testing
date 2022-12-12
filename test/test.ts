const assert = require('assert');
const dropboxV2Api = require('dropbox-v2-api');

import {DeleteFile, UploadFile, FileMetadata} from "../index"

describe('DropBox API test', function () {
    this.timeout(7000);

    it('Upload file', async () => {
        await UploadFile('test_files/', 'test.txt', '/')
            .then(function (result) {
                assert.ok(result);
            })
    });

    it('Get file metadata', async () => {
        await FileMetadata('/', 'test.txt')
            .then(function (result) {
                assert.ok(result);
            })
    });

    it('Delete file', async () => {
        DeleteFile('/', 'test.txt')
            .then(function (result) {
                assert.ok(result);
            })
    });
});