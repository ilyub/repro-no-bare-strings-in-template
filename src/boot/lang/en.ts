import {
  Definitions,
  pluralReduce
} from "@skylib/framework/es/facade-implementations/lang/dictionary";

export const en = new Definitions({
  pluralReduce,
  wordForms: {},
  words: {
    SampleWord: "Sample word"
  }
});
