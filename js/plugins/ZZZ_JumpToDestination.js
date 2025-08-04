//=============================================================================
// JumpToDestination.js
//=============================================================================

/*:
 * @plugin JumpToDestination
 * @author Salyzzz
 *
 *
 * @param 是否初始开启瞬移模式
 * @desc 0.关闭 1.开启
 * @default 0
 * @help 使用这个插件，可以在鼠标点击移动时直接瞬移到鼠标点击处
 * 可以触发“[在玩家下方]的[确定键触发]”的事件
 * 插件指令1（打开瞬移模式）：  jump_on
 * 插件指令2（关闭瞬移模式）：  jump_off
 */

var Salyzzz = Salyzzz || {};
Salyzzz.parameters = PluginManager.parameters('ZZZ_JumpToDestination');

Salyzzz.ifJump = (Number)(Salyzzz.parameters['是否初始开启瞬移模式']);

//==============================
// * PluginCommand
//==============================
Salyzzz.JumpToDestination_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Salyzzz.JumpToDestination_pluginCommand.call(this,command, args)
    if (command === "jump_on") {
        Salyzzz.ifJump = true;
    } else if (command === "jump_off") {
        Salyzzz.ifJump = false;
    } 
    return true;
};

//==============================
// * setDestination
//==============================

Game_Temp.prototype.setDestination = function(x, y) {
    this._destinationX = x;
    this._destinationY = y;
    if(Salyzzz.ifJump == true){
        $gamePlayer.locate(x, y);
    }
};