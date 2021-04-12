import { expect } from 'chai';
import * as fs from 'fs';
import { doesNotMatch } from 'node:assert';
import * as path from 'path';
import { promisify } from 'util';
import { JoltError } from '../errors/JoltError';
import { JObject } from '../JObject';

var _jsonFolder = "./json";

const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

function getJsonFile(jsonPath: string): string {
    jsonPath = path.join(__dirname, _jsonFolder, jsonPath);
    var fileStats = fs.statSync(jsonPath);

    return fs.readFileSync(jsonPath, 'utf8');
};

describe("JObject", function () {
    it("Factory fromJsonString", () => {
        var jsonString = '{"rating":{"primary":{"value":3},"quality":{"value":3}}}';
        var json = JObject.fromJsonString(jsonString);

        expect(json).to.be.a.instanceOf(JObject);
        expect(json).property("rating").to.have.property("primary").to.have.property("value").eql(3);
    });
    it("Constructor with value argument", () => {
        var obj = { "rating": { "primary": { "value": 3 }, "quality": { "value": 3 } } };
        var json = new JObject(obj);

        expect(json).to.be.a.instanceOf(JObject);
        expect(json).property("rating").to.have.property("primary").to.have.property("value").eql(3);
    });
    it("Constructor without argument", () => {
        var json = new JObject();

        expect(json).to.be.a.instanceOf(JObject);
    });
    it("Error on json serialization", () => {
        var jsonString = "{Not Valid JSON}";

        try {
            JObject.fromJsonString(jsonString);
        } catch (error) {
            expect(error).to.be.a.instanceOf(JoltError);
            expect(error).property("message").to.contain("Unable to serialize JSON:");
        }
    });
});