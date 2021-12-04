import * as frameworkTestUtils from "@skylib/framework/es/testUtils";
import * as functionsTestUtils from "@skylib/functions/es/testUtils";

import { definitions } from "./src/boot/lang";
import * as testUtils from "./src/testUtils";

functionsTestUtils.jestSetup();
functionsTestUtils.jestSetup.dom();
frameworkTestUtils.jestSetup();
frameworkTestUtils.jestSetup.dictionary("en-US", definitions);
frameworkTestUtils.jestSetup.dom();
testUtils.jestSetup();
beforeEach(functionsTestUtils.jestReset);
beforeEach(functionsTestUtils.jestReset.dom);
beforeEach(frameworkTestUtils.jestReset);
beforeEach(() => {
  frameworkTestUtils.jestReset.dictionary("en-US", definitions);
});
beforeEach(frameworkTestUtils.jestReset.dom);
beforeEach(testUtils.jestReset);
