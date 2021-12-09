import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import type { ReadonlyRecord } from "@skylib/functions/es/types/core";

declare global {
  namespace facades {
    namespace lang {
      interface Word {
        readonly IconPicker: true;
        readonly Of: true;
      }
    }
  }
}

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly chevronLeft: string;
        readonly chevronRight: string;
        readonly imageEdit: string;
        readonly imageEditOutline: string;
      }
    }
  }
}

export const icons: ReadonlyRecord<
  "chevronLeft" | "chevronRight" | "imageEdit" | "imageEditOutline",
  string
> = baseIcons;

export const lang: DictionaryAndWords<"IconPicker" | "Of"> = baseLang;
