/*:
 * @help
 * Use Plugin Command:
 *   WaitForClick
 *
 * This will pause the event until the player presses Enter, Z, Space,
 * or clicks the mouse (left button).
 *
 * There are no parameters.
 */

(function() {
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'WaitForClick') {
            this._waitForClick = true;
            this.setWaitMode('waitForClick');
        }
    };

    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        if (this._interpreter && this._interpreter._waitMode === 'waitForClick') {
            if (Input.isTriggered('ok') || TouchInput.isTriggered()) {
                this._interpreter._waitForClick = false;
                this._interpreter.setWaitMode('');
            }
        }
    };
})();
