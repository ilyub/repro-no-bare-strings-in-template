import { Definitions } from "@skylib/framework/es/facade-implementations/lang/dictionary";

export const ru = new Definitions({
  pluralReduce(count): number {
    count = Math.abs(count);

    if (count >= 10 && count <= 19) return 5;

    if (count % 10 === 1) return 1;

    if (count % 10 === 2) return 2;

    if (count % 10 === 3) return 2;

    if (count % 10 === 4) return 2;

    return 5;
  },
  wordForms: {},
  words: {
    SampleWord: "Пробное слово"
  }
});
