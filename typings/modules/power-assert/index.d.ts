// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/ada1df33d63c1cc16a18240d15e4df46974c9914/power-assert/index.d.ts
declare module 'power-assert' {
// Type definitions for power-assert 1.4.1
// Project: https://github.com/twada/power-assert
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// copy from assert external module in node.d.ts

/// <reference types="empower" />
/// <reference types="power-assert-formatter" />

import * as empower from 'empower';

export = assert;
export as namespace assert;

function assert(value:any, message?:string):void;
namespace assert {
    export class AssertionError implements Error {
        name:string;
        message:string;
        actual:any;
        expected:any;
        operator:string;
        generatedMessage:boolean;

        constructor(options?:{message?: string; actual?: any; expected?: any; operator?: string; stackStartFunction?: Function});
    }

    export function fail(actual?:any, expected?:any, message?:string, operator?:string):void;

    export function ok(value:any, message?:string):void;

    export function equal(actual:any, expected:any, message?:string):void;

    export function notEqual(actual:any, expected:any, message?:string):void;

    export function deepEqual(actual:any, expected:any, message?:string):void;

    export function notDeepEqual(acutal:any, expected:any, message?:string):void;

    export function strictEqual(actual:any, expected:any, message?:string):void;

    export function notStrictEqual(actual:any, expected:any, message?:string):void;

    export function deepStrictEqual(actual:any, expected:any, message?:string):void;

    export function notDeepStrictEqual(actual:any, expected:any, message?:string):void;

    export var throws:{
        (block:Function, message?:string): void;
        (block:Function, error:Function, message?:string): void;
        (block:Function, error:RegExp, message?:string): void;
        (block:Function, error:(err:any) => boolean, message?:string): void;
    };

    export var doesNotThrow:{
        (block:Function, message?:string): void;
        (block:Function, error:Function, message?:string): void;
        (block:Function, error:RegExp, message?:string): void;
        (block:Function, error:(err:any) => boolean, message?:string): void;
    };

    export function ifError(value:any):void;

    export interface Options {
        assertion?: empower.Options;
        output?: powerAssertFormatter.Options;
    }

    export function customize(options:Options):typeof assert;
}
}
