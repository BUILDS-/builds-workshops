# Game Modding Workshop

Welcome to the Game Modding Workshop! 

This will be a basic overview of the tools and methods used to create mods for two popular video games: Sid Meier's Civilization V and The Elder Scrolls V: Skyrim. Both these games are great for modding for several reasons, but primarily because their developers actively support community-created content with publicly-available SDKs and mod tools. Because of this, both games maintain sizable and active modding communities years after their release, and new creators have a wealth of experience and support to draw from. Healthy mod communities no doubt reinforce the longevity of these games as well: Civilization 5, a nearly eight-year-old game, [is still the 12th most-played game on Steam as of this writing](http://store.steampowered.com/stats/), far outliving many big-budget AAA titles. Similarly, Skyrim (five and a half years old) is 24th, still well above any other game from its time period.

But that's enough history. Let's start modding! If you have one or both of these games and you want to follow along, make sure you have them fully installed. I'm assuming people are using Steam for the purposes of this workshop, and I will also assume some familiarity with the games at hand.

## Civilization V

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

You can move around the map by right-clicking and dragging, and you can zoom with the mousewheel or trackpad. To your right is the toolbar with all the map-editing tools. If you left-click on a hex tile, you can edit it here--changing its terrain type, what kind of resources and features it has, natural wonders, et cetera. You can also specify a tile as a starting point for a random player or city-state. If you don't feel like being *that* granular, you can use the "Paint" tab to do things in batch, or the "Plopper" tab for terrain features. If you want to randomize the world's resources, go to the "Misc" tab and select "Scatter resources." You can add rivers here too, and define continental borders. All this stuff is fairly self-explanatory, so go out and have fun with it!

For demonstration's sake, I'm going to focus on a small island on my map and plop salt all over. You should take more time than I did, though--this is the creative part of making the mod. Go crazy!

![Salty.](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/salty.png)

As-is, we can take this map, save it (top left corner), and play it like any other saved map in Civ 5, with random leaders and start points. The next step is more granular control of how your game will actually play out, and that's where we get into scenarios.

To start editing your scenario, look on the top toolbar for the "Scenario Editor." Once you're in, you should see this:

![Set your rules here.](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/scenario_editor.png)

Here, you can set all the rules for your game: what era you start in, the game speed, allowed victories, and all sorts of cool stuff. In the bottom left of this window you'll also see the Players and City States window, which is where you can add in civs you want to see in-game. You can edit everything about the civ: what kind of techs they have researched, whether they are playable, what team they're on (so you can create multi-civ blocs), and even the team colors. I created the BUILDS civ, based off England, with leader Sean Smith. :)

Once you have at least one civ in your scenario, a few more map options will become available to you. When editing a tile, you may recall that we had the option to set it as a random start point; now, we can specifically tell a tile to be the starting point for an included civ. Alternatively, if we go to the Cities tab, we can plop cities and then edit them. I created a city for BUILDS and then renamed it to HankTheTank. Finally, under the "Units" tab, you can add units for a civ onto the map. I gave HankTheTank a warrior to help protect it, named after me...

![I like this civ.](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/scenario-finished.png)

Phew... we're done creating our scenario! Now, let's actually see it in game. To do this, we need to build a mod instead of just using the map file. Save your map and close out of WorldBuilder, then start up the Civ 5 SDK again. Next, open up ModBuddy (the top option). Like before, you may need to install some utilities to get this working. 

Once inside, we want to create a Map Pack project. Go to File, New, Project:

![Here's how to get there.](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/modbuddy_nav.png)

Name your map pack something descriptive.

![Name it!](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/modbuddy_mappack.png)

Click through the menus until you get the option to add your map, then add it.

![Name it!](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/modbuddy_addmap.png)

Finally, build your mod by going to Build, Build \<your mod\>:

![Name it!](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/modbuddy_build.png)

And we're done! At this point, you should be able to boot up your game and play your scenario. Note that if you want to make any changes to the map later on, you'll need to open up this map pack project again in Modbuddy and rebuild it in addition to any changes you make in Worldbuilder.

Let's test it out! Boot up Civ 5 and enter the Mods menu:

![Here's the mods menu.](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/civ_main_menu_mods.jpg)

Next, enable your mod (ignore all my other mods, you won't see those unless you have your own mods installed)

![Just enable your mod.](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/civ_enable_mod.jpg)

Click past the disclaimer for mod safety and, under Single Player, select "Set Up Game." Then, change the map:

![You want to go under "Additional Maps" to find yours.](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/civ_setup_screen_1.jpg)

Go to "Additional Maps" and find your custom map, waiting for you!

![There it is!!](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/civ_setup_screen_2.jpg)

Once it's selected, there will be an awkwardly-placed checkbox entitled "Play Scenario." Check this, and the settings will lock in to the ones you specified earlier. 

![That is a weird checkbox.](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/civ_setup_screen_3.jpg)

Choose your leader (if you had multiple playable leaders) and start playing.

![Name it!](https://raw.githubusercontent.com/mbestavros/builds-workshops/master/game-modding/images/civ_ingame.jpg)

There it is--our very own, very salty BUILDS Civ!

**Give yourself a pat on the back. You just developed your own mod for Civ 5!**

Ready for more? :)

## The Elder Scrolls V: Skyrim

Let's jump into Skyrim now!

On the face of it, Skyrim can be a lot more intimidating to approach than Civilization V. Where with Civ you have a nice, graphical map creator, with Skyrim you get the Creation Kit: a powerful tool that gets much closer to the structure of the game and requires a much deeper understanding about how the game works. It can take some time to learn, but once you've got the hang of it, you can change pretty much everything about Skyrim easily.

The way Skyrim handles its game world is actually very clever. One of the things that always boggled my mind about the game is how well it handled world state, 
