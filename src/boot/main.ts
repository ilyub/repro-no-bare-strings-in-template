import { boot } from "quasar/wrappers";
import { mdiClose } from "@mdi/js";

import { icons } from "@skylib/facades/es/icons";
import { lang } from "@skylib/facades/es/lang";
import { reactiveStorage } from "@skylib/facades/es/reactiveStorage";
import { Dictionary } from "@skylib/framework/es/facade-implementations/lang/dictionary";

import * as vueStorage from "../facade-implementations/reactiveStorage/vueStorage";
import { plugin } from "../plugin";

import { definitions } from "./lang";

// eslint-disable-next-line import/no-default-export
export default boot(({ app }) => {
  {
    reactiveStorage.setImplementation(vueStorage.implementation);
  }

  {
    icons.setImplementation({
      close: mdiClose
    });
  }

  {
    lang.setImplementation(Dictionary.create(definitions));
    Dictionary.configure({ localeName: "en-US" });
  }

  {
    app.use(plugin);
  }
});
