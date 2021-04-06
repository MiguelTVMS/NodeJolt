import * as chai from 'chai';
import { expect } from 'chai';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { JObject } from '../JObject';

var _jsonFolder = "./json";

const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

function getJsonFile(jsonPath: string): string {
    jsonPath = path.join(__dirname, _jsonFolder, jsonPath);
    var fileStats = fs.statSync(jsonPath);

    return fs.readFileSync(jsonPath, 'utf8');
};

describe('JObject', function () {
    it('Serialize input from a file', () => {
        var jsonString = getJsonFile("sample/input.json");
        var json = JObject.fromJsonString(jsonString);

        expect(typeof json).to.be.eql("object");
    });
});