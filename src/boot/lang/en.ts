import { Definitions } from "@skylib/framework/es/facade-implementations/lang/dictionary";

export const en = new Definitions({
  pluralReduce(count): number {
    count = Math.abs(count);

    return count === 1 ? 1 : 2;
  },
  wordForms: {},
  words: {
    SampleWord: "Sample word"
  }
});
