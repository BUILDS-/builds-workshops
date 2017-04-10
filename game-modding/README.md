# Game Modding Workshop

Welcome to the Game Modding Workshop! 

This will be a basic overview of the tools and methods used to create mods for two popular video games: Civilization V and The Elder Scrolls V: Skyrim. Both these games are great for modding for several reasons, but primarily because their developers actively support community-created content with publicly-available SDKs and mod tools. Because of this, both games maintain sizable and active modding communities years after their release, and new creators have a wealth of experience and support to draw from. Healthy mod communities no doubt reinforce the longevity of these games as well: Civilization 5, a nearly eight-year-old game, [is still the 12th most-played game on Steam as of this writing](http://store.steampowered.com/stats/), far outliving many big-budget AAA titles. Similarly, Skyrim (five and a half years old) is 24th, still well above any other game from its time period.

But that's enough history. Let's start modding! If you have one or both of these games and you want to follow along, make sure you have them fully installed. I'm assuming people are using Steam for the purposes of this workshop.

## Civilization 5

We'll start with a fairly simple yet fun Civ 5 mod: how to make your own custom map and/or scenario. Rig your start and be super OP!

Before we start, we need to get the Civ 5 SDK from Steam. You can find it by mousing over "Library" and finding "Tools" in the dropdown. 

![Click on "Tools."](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/nav-to-tools.png)

This is where we will find all the modding tools available to us. For Civ 5, we want to find the "Sid Meier's Civilization V SDK" and install it. On Windows, you may be prompted to install a few extra things during setup; say yes and install them (they're just Microsoft shared libraries).

![The SDK is ready!](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/civsdk.png)

Hooray! We're all set up with the mod tools for Civ.

The next thing we want to do is actually start making our custom map. We can start this by clicking on the "WorldBuilder" option in that first menu. Again, you may be prompted to install something and restart the app if you're on Windows, and it's fine to do so. 

Once you've launched it, you should see options to create a new map or load an existing map file. For this tutorial, I'm going to show off how to create a map entirely from scratch, but you can load any map you want; whether it's a preset like Earth, or just a particularly cool map that you saved from a previous game of Civ. I will note that if you're modifying a preset map, make a copy first--if you save over the original preset, there's no way to get that preset back short of a full game reinstall!

Once you click "New Map," you should see this:

![Just a boring, blank map.](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/generator_blank.png)

This is where you can randomly generate a new map with the same scripts that the game uses. You can change the initial size, the generation algorithm, and world parameters. These parameters can be a bit confusing, so [to be clear:](https://www.reddit.com/r/civ/comments/22v14b/how_exactly_do_temperature_rainfall_and_world_age/)

* World age affects how rocky the world is. A younger world (3 billion years) has eroded less, and thus will have more mountains and hills. An older world will be more flat.

* Temperature affects how many deserts and jungles you will have. A hotter world will have more desert and jungle.

* Rainfall affects how many marshes, forests, and jungles will be generated. More rainfall = more plants.

* Sea Level affects the ratio of water to land. Higher sea level means more oceans.

* Resources... are nebulous. The basic options are pretty self-explanatory, but "Legendary Start" and "Strategic Balance" aren't well defined. [Check out this post over on r/civ](https://www.reddit.com/r/civ/comments/2a37ws/effects_of_setting_resources_to_abundant_or_sparse/) to find out more for yourself.

Once you've set these parameters, click the "Generate with..." button to create your map. **DO NOT CLICK ACCEPT MAP UNTIL YOU'RE SATISFIED WITH YOUR STARTING POINT**, or you'll have a blank map!

Since I love playing as England (which has a strong navy), I'm going to generate an ocean-heavy map with Small Continents and high sea level. 

![That's more like it.](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/generator_complete.png)

Now I click "Accept Map," and we're brought to the main editing window. This is where the fun begins!
