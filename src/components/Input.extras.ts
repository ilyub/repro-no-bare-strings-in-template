import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { ReadonlyRecord } from "@skylib/functions/es/types/core";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly close: string;
      }
    }
  }
}

export const icons: ReadonlyRecord<"close", string> = baseIcons;
