import {
  Definitions,
  pluralReduce
} from "@skylib/framework/es/facade-implementations/lang/dictionary";

export const ru = new Definitions({
  pluralReduce: pluralReduce.ru,
  wordForms: {},
  words: {
    IconPicker: "Выбор иконки",
    Of: "Из",
    SampleWord: "Пробное слово"
  }
});
