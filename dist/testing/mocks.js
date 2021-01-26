"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newJsonFetchResponse = exports.newMockExecutionContext = exports.newMockSyncExecutionContext = void 0;
const sinon_1 = __importDefault(require("sinon"));
const uuid_1 = require("uuid");
function newMockSyncExecutionContext(overrides) {
    return Object.assign(Object.assign(Object.assign({}, newMockExecutionContext()), { sync: {} }), overrides);
}
exports.newMockSyncExecutionContext = newMockSyncExecutionContext;
function newMockExecutionContext(overrides) {
    return Object.assign({ invocationLocation: {
            protocolAndHost: 'https://coda.io',
        }, timezone: 'America/Los_Angeles', invocationToken: uuid_1.v4(), fetcher: {
            fetch: sinon_1.default.stub(),
        }, temporaryBlobStorage: {
            storeUrl: sinon_1.default.stub(),
            storeBlob: sinon_1.default.stub(),
        }, logger: {
            trace: sinon_1.default.stub(),
            debug: sinon_1.default.stub(),
            info: sinon_1.default.stub(),
            warn: sinon_1.default.stub(),
            error: sinon_1.default.stub(),
        } }, overrides);
}
exports.newMockExecutionContext = newMockExecutionContext;
function newJsonFetchResponse(body, status = 200, headers) {
    const allHeaders = Object.assign({ 'Content-Type': 'application/json' }, headers);
    return { status, body, headers: allHeaders };
}
exports.newJsonFetchResponse = newJsonFetchResponse;
