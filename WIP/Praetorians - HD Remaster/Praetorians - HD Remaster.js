Game.KillMutex = ["UnrealEngine4"];
Game.DirSymlinkExclusions = [
    "Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv146\\Win64",
     "Praetorians\\Binaries\\Win64",
];
Game.FileSymlinkExclusions = ["steam_api64.dll", "KalypsoLogo.mp4", "PyroLogo.mp4", "TorusLogo.mp4"];
Game.GameName = "Praetorians - HD Remaster";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.ExecutableName = "Praetorians.exe";
Game.ExecutableToLaunch = "Praetorians\\Binaries\\Win64\\Praetorians-Win64-Shipping.exe";
Game.SteamID = "1100420";
Game.GUID = "Praetorians - HD Remaster";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
//Game.BinariesFolder = "Praetorians\\Binaries\\Win64\\Praetorians-Win64-Shipping.exe";
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = true;
Game.GoldbergExperimental = true;

Game.SupportsPositioning = true;
Game.ForceFinishOnPlay = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Praetorians - HD Remaster  ";

Game.Hook.DInputForceDisable = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;

Game.HookFocus= false;
Game.SetWindowHook = true;
Game.Description = "Create multiplayer game and join with the others. \n" +
"Press END to lock/unlock the inputs, While input is unlocked you can press CTRL+Q to close Nucleus and all of its instances."
Game.PauseBetweenStarts = 15;

//USS deprecated options:

Game.SupportsMultipleKeyboardsAndMice = false;
Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = false;
Game.SendNormalKeyboardInput = false;
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;

//ProtoInput

Game.SupportsMultipleKeyboardsAndMice = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = false;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = false;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;

Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [ 0x0008]; // Blocks WM_KILLFOCUS


Game.Play = function () {

    var Args = Context.Args = " -windowed " + " -AlwaysFocus " + " -nosplash " + " -steam " + " -ResX= " + (Context.Width) + " -ResY= " + (Context.Height);

    Context.StartArguments = Args;

    Game.ProtoInput.OnInputLocked = function() {
        for (var i = 0; i < PlayerList.Count; i++) {
          var player = PlayerList[i];
    
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
    
          //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
          //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
    
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
          
          ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 0, true, true, true, true, true);
    
          System.Threading.Thread.Sleep(1000);
    
          ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
        }
      };
    
      Game.ProtoInput.OnInputUnlocked = function() {
        for (var i = 0; i < PlayerList.Count; i++) {
          var player = PlayerList[i];
    
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
    
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
    
          ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5000, true, true, true, true, true);
        }
      };

};
