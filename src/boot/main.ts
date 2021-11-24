import { boot } from "quasar/wrappers";

declare global {
  namespace configurable {
    interface LocaleName {
      readonly "en-US": true;
      readonly "ru-RU": true;
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default boot(() => {});
