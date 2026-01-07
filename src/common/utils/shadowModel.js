export const shadowModel = {
  id: undefined,
  active: true,
  inset: false,
  inputs: [
    {
      inputNumber: 0,
      name: "Offset-x",
      value: 0,
      type: "range",
      minMax: [-256, 256],
    },
    {
      inputNumber: 1,
      name: "Offset-y",
      value: 8,
      type: "range",
      minMax: [-256, 256],
    },
    {
      inputNumber: 2,
      name: "Blur-radius",
      value: 16,
      type: "range",
      minMax: [0, 256],
    },
    {
      inputNumber: 3,
      name: "Spread-radius",
      value: -2,
      type: "range",
      minMax: [-256, 256],
    },
    {
      inputNumber: 4,
      name: "Color",
      value: "#4f4f4f",
      type: "color",
    },
  ],
};
