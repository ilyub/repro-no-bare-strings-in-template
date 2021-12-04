import type { Definitions } from "@skylib/framework/es/facade-implementations/lang/dictionary";
import type { ReadonlyRecord } from "@skylib/functions/es/types/core";
import type { LocaleName } from "@skylib/functions/es/types/locales";

import { en } from "./en";
import { ru } from "./ru";

declare global {
  namespace configurable {
    interface LocaleName {
      readonly "en-US": true;
      readonly "ru-RU": true;
    }
  }

  namespace facades {
    namespace lang {
      interface Word {
        readonly SampleWord: true;
      }
    }
  }
}

export const definitions: ReadonlyRecord<LocaleName, Definitions> = {
  "en-US": en,
  "ru-RU": ru
};
