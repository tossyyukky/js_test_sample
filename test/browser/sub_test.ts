// test/browser/sub_test.ts
/// <reference path="../../typings/index.d.ts" />
import * as assert from "power-assert";
import {add} from "../../src/browser/sub";

it("2 + 3 = 5", () => {
    assert(add(2, 3) == 5);
});