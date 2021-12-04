import { boot } from "quasar/wrappers";

import { lang } from "@skylib/facades/es/lang";
import { reactiveStorage } from "@skylib/facades/es/reactiveStorage";
import { Dictionary } from "@skylib/framework/es/facade-implementations/lang/dictionary";

// eslint-disable-next-line import/no-relative-parent-imports
import * as vueStorage from "../facade-implementations/reactiveStorage/vueStorage";
// eslint-disable-next-line import/no-relative-parent-imports
import { plugin } from "../plugin";

import { definitions } from "./lang";

// eslint-disable-next-line import/no-default-export
export default boot(({ app }) => {
  {
    reactiveStorage.setImplementation(vueStorage.implementation);
  }

  {
    lang.setImplementation(Dictionary.create(definitions));
    Dictionary.configure({ localeName: "en-US" });
  }

  {
    app.use(plugin);
  }
});
