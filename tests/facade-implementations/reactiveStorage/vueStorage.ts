import { nextTick, watch } from "vue";

import { reactiveStorage } from "@skylib/facades/es/reactiveStorage";

interface Data {
  value: number;
}

it("reactiveStorage", async () => {
  const callback = jest.fn();

  const data: Data = reactiveStorage({ value: 0 });

  watch(data, value => {
    callback(value);
  });

  {
    data.value = 2;
    expect(callback).not.toBeCalled();
    await nextTick();
    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith({ value: 2 });
    callback.mockClear();
  }

  {
    data.value = 3;
    expect(callback).not.toBeCalled();
    await nextTick();
    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith({ value: 3 });
    callback.mockClear();
  }
});

it("reactiveStorage.withChangesHandler", async () => {
  const callback = jest.fn();

  const onChange = jest.fn();

  const data: Data = reactiveStorage.withChangesHandler(
    { value: 0 },
    onChange,
    reduce
  );

  watch(data, value => {
    callback(value);
  });

  {
    data.value = 2;
    expect(callback).not.toBeCalled();
    expect(onChange).not.toBeCalled();
    await nextTick();
    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith({ value: 2 });
    expect(onChange).not.toBeCalled();
    callback.mockClear();
  }

  {
    data.value = 3;
    expect(callback).not.toBeCalled();
    expect(onChange).not.toBeCalled();
    await nextTick();
    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith({ value: 3 });
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(1);
    callback.mockClear();
    onChange.mockClear();
  }

  function reduce(x: Data): number {
    return x.value % 2;
  }
});
