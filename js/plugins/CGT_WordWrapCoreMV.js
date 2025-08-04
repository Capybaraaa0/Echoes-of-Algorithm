
/*:
 * @plugindesc Core plugin for CGT Word Wrap system (Simplified version with parameters) v1.0
 * @author ChatGPT
 *
 * @param MessageBoxes
 * @text Wrapper for Message Boxes
 * @desc The wrapper to use for message boxes (e.g., "basic")
 * @default basic
 *
 * @param SidePadding
 * @text Side Padding
 * @desc Padding on both sides of the text box in pixels
 * @type number
 * @default 20
 *
 * @help
 * This is a simplified version of CGT_WordWrapCoreMV.js.
 * It supports wrapper registration and simple word wrapping logic.
 * Requires a wrapper plugin like WWC_BasicWrapper.js
 */

var Imported = Imported || {};
Imported.CGT_WordWrapCoreMV = true;

var CGTWWCore = CGTWWCore || {};

(() => {
  const parameters = PluginManager.parameters('CGT_WordWrapCoreMV');
  const wrapperName = String(parameters['MessageBoxes'] || "basic");
  const sidePadding = Number(parameters['SidePadding'] || 20);

  CGTWWCore._wrappers = {};
  CGTWWCore._params = {
    MessageBoxes: wrapperName,
    SidePadding: sidePadding
  };

  CGTWWCore.registerWrapper = function(name, wrapperClass) {
    this._wrappers[name.toLowerCase()] = new wrapperClass();
  };

  CGTWWCore.getWrapper = function(name) {
    return this._wrappers[(name || "").toLowerCase()] || null;
  };

  // Patch Window_Message to use our wrapper if available
  const _Window_Message_processNormalCharacter = Window_Message.prototype.processNormalCharacter;
  Window_Message.prototype.processNormalCharacter = function(textState) {
    const wrapper = CGTWWCore.getWrapper(CGTWWCore._params.MessageBoxes);
    if (wrapper && !textState._wrapped) {
      const text = textState.text.slice(textState.index);
      const maxWidth = this.contentsWidth() - CGTWWCore._params.SidePadding * 2;
      const lines = wrapper.wrapText(text, maxWidth, this.contents);
      textState.text = lines.join('
');
      textState.index = 0;
      textState._wrapped = true;
    }
    _Window_Message_processNormalCharacter.call(this, textState);
  };
})();
