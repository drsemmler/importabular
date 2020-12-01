import { _parsePasteEvent } from "./_parsePasteEvent";
import { _arrToHTML } from "./_arrToHTML";

test("_parsePasteEvent", () => {
  const baseTable = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
  ];
  const event = {
    clipboardData: {
      getData(type) {
        if (type === "text/html") {
          return _arrToHTML(baseTable);
        } else {
          return baseTable.map((line) => line.join("\t")).join("\n");
        }
      },
    },
  };
  expect(_parsePasteEvent(event)).toEqual(baseTable);
});
