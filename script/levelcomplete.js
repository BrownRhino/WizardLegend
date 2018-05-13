var LevelComplete =
{
	range: null,
	newdifficulty: null,
	
	analyze: function()
	{
		if(TotalTime<MinTime)
		{
			this.range=0;
		}
		else if (TotalTime>MaxTime)
		{
			this.range=1;
		}
		else
		{
			this.range=2;
		}
	},
	
	plan: function()
	{
		if(this.range == 0)
		{
			if(Difficulty == MaxDifficulty)	
			{}
			else
			{
				this.newdifficulty = Difficulty+1;	
			}
		}
		else if (this.range == 1)
		{
			if(Difficulty == MinDifficulty)
			{}
			else
			{
				this.newdifficulty = Difficulty-1;				
			}
		}
		else
			this.newdifficulty = Difficulty;
			
	},
	
	execute: function()
	{
	//	Difficulty = this.newdifficulty;
		if(this.range == 0)
		{
			if(Difficulty == MaxDifficulty)	
				game.add.text(30, 240 / 2, 'Difficulty At Max At ' + Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	
	
			else
			{
				Difficulty = this.newdifficulty;
				game.add.text(30, 240 / 2, 'Difficulty Increased At ' +Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	
			}
		}
		else if (this.range == 1)
		{
			if(Difficulty == MinDifficulty)
				game.add.text(30, 240 / 2, 'Difficulty At Min At ' +Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	

			else
			{
				Difficulty = this.newdifficulty;
				game.add.text(30, 240 / 2, 'Difficulty Decreased At ' +Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	
			}
		}
		else
			game.add.text(30, 240 / 2, 'Difficulty The Same At ' + Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });

		
		game.add.sprite(256 / 2 - 8, 240 / 2 + 16, 'wizard', 32);

		game.time.events.add(3000, function() { game.state.start('Gameplay'); }, this);

		
	},
	
	create: function()
	{
		CurrentLevel++;

		game.add.text(64, 240 / 2 - 32, 'nice you got gem', { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });
		game.add.text(82, 240 / 2 - 16, 'level ' + CurrentLevel + ' now', { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });
	//	if(CurrentLevel%2 == 0)
			game.add.text(82, 240 / 2 - 8, 'timer ' + TotalTime, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });
	//	else
	//		game.add.text(64, 240 / 2 - 0, 'You\'re right on track', { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });


		this.analyze();
		this.plan();
		this.execute();
		
		/*
		if(this.range == 0)
		{
			if(Difficulty == MaxDifficulty)
				game.add.text(30, 240 / 2, 'Difficulty At Max At ' + Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	
	
			else
			{
				Difficulty++;
				game.add.text(30, 240 / 2, 'Difficulty Increased At ' +Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	
			}
		}
		else if (this.range == 1)
		{
			if(Difficulty == MinDifficulty)
				game.add.text(30, 240 / 2, 'Difficulty At Min At ' +Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	

			else
			{
				Difficulty--;
				game.add.text(30, 240 / 2, 'Difficulty Decreased At ' +Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	
			}
		}
		else
			game.add.text(30, 240 / 2, 'Difficulty The Same At ' + Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });
		*/
/*
		if(TotalTime<MinTime)
		{
			if(Difficulty == MaxDifficulty)
				game.add.text(30, 240 / 2, 'Difficulty At Max At ' + Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	
	
			else
			{
				Difficulty++;
				game.add.text(30, 240 / 2, 'Difficulty Increased At ' +Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	
			}
		}
		else if (TotalTime>MaxTime)
		{
			if(Difficulty == MinDifficulty)
				game.add.text(30, 240 / 2, 'Difficulty At Min At ' +Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	

			else
			{
				Difficulty--;
				game.add.text(30, 240 / 2, 'Difficulty Decreased At ' +Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });	
			}
		}
		else
			game.add.text(30, 240 / 2, 'Difficulty The Same At ' + Difficulty, { font: '8px Conv_Gamegirl', fill: 'white', align: 'center' });
*/
		

/*
		game.add.sprite(256 / 2 - 8, 240 / 2 + 16, 'wizard', 32);

		game.time.events.add(3000, function() { game.state.start('Gameplay'); }, this);
*/
		// Initialize the touchscreen buttons
		var leftButton = game.add.button(0, 240, 'touchbuttons', undefined, this, 0, 0, 1, 0);
		leftButton.onInputDown.add(function() { LeftButtonDown = true; }, this);
		leftButton.onInputUp.add(function() { LeftButtonDown = false; }, this);
		leftButton.onInputOut.add(function() { LeftButtonDown = false; }, this);
		leftButton.fixedToCamera = true;
		var rightButton = game.add.button(64, 240, 'touchbuttons', function() {}, this, 2, 2, 3, 2);
		rightButton.onInputDown.add(function() { RightButtonDown = true; }, this);
		rightButton.onInputUp.add(function() { RightButtonDown = false; }, this);
		rightButton.onInputOut.add(function() { RightButtonDown = false; }, this);
		rightButton.fixedToCamera = true;
		var bButton = game.add.button(128, 240, 'touchbuttons', function() {}, this, 4, 4, 5, 4);
		bButton.onInputDown.add(function() { BButtonDown = true; }, this);
		bButton.onInputUp.add(function() { BButtonDown = false; }, this);
		bButton.onInputOut.add(function() { BButtonDown = false; }, this);
		bButton.fixedToCamera = true;
		var aButton = game.add.button(192, 240, 'touchbuttons', function() {}, this, 6, 6, 7, 6);
		aButton.onInputDown.add(function() { AButtonDown = true; }, this);
		aButton.onInputUp.add(function() { AButtonDown = false; }, this);
		aButton.onInputOut.add(function() { AButtonDown = false; }, this);
		aButton.fixedToCamera = true;
	}
};