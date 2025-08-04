
/*:
 * @plugindesc [WordWrapCore] Basic Wrapper for standard message boxes (RMMV)
 * @author ChatGPT
 * @help
 * Requires: CGT_WordWrapCoreMV.js
 */

(function() {
  if (!Imported || !Imported.CGT_WordWrapCoreMV) {
    throw new Error("WWC_BasicWrapper requires CGT_WordWrapCoreMV.js!");
  }

  // 注册一个 wrapper，名字是 "basic"
  CGTWWCore.registerWrapper("basic", class {
    constructor() {}

    // 实际的换行逻辑
    wrapText(text, maxWidth, bitmap) {
      const words = text.split(" ");
      let lines = [];
      let currentLine = "";

      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let testLine = currentLine + (currentLine.length > 0 ? " " : "") + word;
        let testWidth = bitmap.measureTextWidth(testLine);

        if (testWidth > maxWidth && currentLine !== "") {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }

      if (currentLine.length > 0) {
        lines.push(currentLine);
      }

      return lines;
    }
  });
})();
