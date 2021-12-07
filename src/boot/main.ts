import { Notify } from "quasar";
import { boot } from "quasar/wrappers";
import { mdiClose } from "@mdi/js";

import { icons } from "@skylib/facades/es/icons";
import { lang } from "@skylib/facades/es/lang";
import { reactiveStorage } from "@skylib/facades/es/reactiveStorage";
import { Dictionary } from "@skylib/framework/es/facade-implementations/lang/dictionary";
import * as cast from "@skylib/functions/es/converters";

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
    // eslint-disable-next-line @skylib/prefer-readonly
    app.config.errorHandler = function (err, _vm, info): void {
      // eslint-disable-next-line no-console
      console.error(err, info);
      Notify.create({
        color: "negative",
        message: cast.string(err)
      });
    };

    // eslint-disable-next-line @skylib/prefer-readonly
    app.config.warnHandler = function (err, _vm, info): void {
      // eslint-disable-next-line no-console
      console.warn(err, info);
      Notify.create({
        color: "negative",
        message: cast.string(err)
      });
    };

    app.use(plugin);
  }
});
