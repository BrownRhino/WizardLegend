var game;
var GameResolution;

var LeftButtonDown = false;
var RightButtonDown = false;
var BButtonDown = false;
var AButtonDown = false;

var CurrentLevel = 0;
var PlayerScore = 0;
var PlayerHealth = 0;
var TotalTime = 0;
var Difficulty = 0;
var MaxDifficulty = 6;
var MinDifficulty = 0;
var NumberOfEnemies = 7;  //Really 6 enemies
var MinTime = 15;
var MaxTime = 30;

var main = function()
{
	GameResolution =
	{
		width: 256,
		height: (window.mobileAndTabletCheck() ? 455 : 240)
	};

	game = new Phaser.Game(GameResolution.width, GameResolution.height, Phaser.AUTO, 'gameDiv', null, false, false);
	game.state.add('Gameplay', GameplayState, false);
	game.state.add('Preload', PreloadState, false);
	game.state.add('LevelStart', LevelStart, false);
	game.state.add('LevelComplete', LevelComplete, false);
	game.state.add('GameOver', GameOver, false);
	game.state.add('TitleScreen', TitleScreen, false);
	game.state.add('Setup', SetupState, true);
}