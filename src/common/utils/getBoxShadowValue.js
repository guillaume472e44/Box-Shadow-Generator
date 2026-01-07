export default function getBoxShadowValue(shadows) {
  let finalString = "";

  shadows.forEach((shadow, index) => {
    if (shadow.active) {
      shadow.inputs.forEach((input) => {
        if (input.type === "range") finalString += `${input.value}px `;
        else if (input.type === "color") finalString += `${input.value}`;
      });

      if (shadow.inset) finalString += ` inset`;

      if (index === shadows.length - 1) finalString += `;`;
      else finalString += `,`;
    }
  });

  return finalString;
}
