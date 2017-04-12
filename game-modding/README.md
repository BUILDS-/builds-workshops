# Game Modding Workshop

Welcome to the Game Modding Workshop! 

This will be a basic overview of the tools and methods used to create mods for two popular video games: Sid Meier's Civilization V and The Elder Scrolls V: Skyrim. Both these games are great for modding for several reasons, but primarily because their developers actively support community-created content with publicly-available SDKs and mod tools. Because of this, both games maintain sizable and active modding communities years after their release, and new creators have a wealth of experience and support to draw from. Healthy mod communities no doubt reinforce the longevity of these games as well: Civilization 5, a nearly eight-year-old game, [is still the 12th most-played game on Steam as of this writing](http://store.steampowered.com/stats/), far outliving many big-budget AAA titles. Similarly, Skyrim (five and a half years old) is 24th, still well above any other game from its time period.

But that's enough history. Let's start modding! If you have one or both of these games and you want to follow along, make sure you have them fully installed. I'm assuming people are using Steam for the purposes of this workshop, and I will also assume some familiarity with the games at hand.

## Civilization V

We'll start with a fairly simple yet fun Civ 5 mod: how to make your own custom map and/or scenario. Rig your start and be super OP!

Before we start, we need to get the Civ 5 SDK from Steam. You can find it by mousing over "Library" and finding "Tools" in the dropdown. 

![Click on "Tools."](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/nav-to-tools.png)

This is where we will find all the modding tools available to us. For Civ 5, we want to find the "Sid Meier's Civilization V SDK" and install it. On Windows, you may be prompted to install a few extra things during setup; say yes and install them (they're just Microsoft shared libraries).

![The SDK is ready!](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/civsdk.png)

Hooray! We're all set up with the mod tools for Civ.

The next thing we want to do is actually start making our custom map. We can start this by clicking on the "WorldBuilder" option in that first menu. Again, you may be prompted to install something and restart the app if you're on Windows, and it's fine to do so. 

Once you've launched it, you should see options to create a new map or load an existing map file. For this tutorial, I'm going to show off how to create a map entirely from scratch, but you can load any map you want; whether it's a preset like Earth, or just a particularly cool map that you saved from a previous game of Civ. I will note that if you're modifying a preset map, make a copy first--if you save over the original preset, there's no way to get that preset back short of a full game reinstall!

Once you click "New Map," you should see this:

![Just a boring, blank map.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/generator_blank.png)

This is where you can randomly generate a new map with the same scripts that the game uses. You can change the initial size, the generation algorithm, and world parameters. These parameters can be a bit confusing, so [to be clear:](https://www.reddit.com/r/civ/comments/22v14b/how_exactly_do_temperature_rainfall_and_world_age/)

* World age affects how rocky the world is. A younger world (3 billion years) has eroded less, and thus will have more mountains and hills. An older world will be more flat.

* Temperature affects how many deserts and jungles you will have. A hotter world will have more desert and jungle.

* Rainfall affects how many marshes, forests, and jungles will be generated. More rainfall = more plants.

* Sea Level affects the ratio of water to land. Higher sea level means more oceans.

* Resources... are nebulous. The basic options are pretty self-explanatory, but "Legendary Start" and "Strategic Balance" aren't well defined. [Check out this post over on r/civ](https://www.reddit.com/r/civ/comments/2a37ws/effects_of_setting_resources_to_abundant_or_sparse/) to find out more for yourself.

Once you've set these parameters, click the "Generate with..." button to create your map. **DO NOT CLICK ACCEPT MAP UNTIL YOU'RE SATISFIED WITH YOUR STARTING POINT**, or you'll have a blank map!

Since I love playing as England (which has a strong navy), I'm going to generate an ocean-heavy map with Small Continents and high sea level. 

![That's more like it.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/generator_complete.png)

Now I click "Accept Map," and we're brought to the main editing window. This is where the fun begins! 

You can move around the map by right-clicking and dragging, and you can zoom with the mousewheel or trackpad. To your right is the toolbar with all the map-editing tools. If you left-click on a hex tile, you can edit it here--changing its terrain type, what kind of resources and features it has, natural wonders, et cetera. You can also specify a tile as a starting point for a random player or city-state. If you don't feel like being *that* granular, you can use the "Paint" tab to do things in batch, or the "Plopper" tab for terrain features. If you want to randomize the world's resources, go to the "Misc" tab and select "Scatter resources." You can add rivers here too, and define continental borders. All this stuff is fairly self-explanatory, so go out and have fun with it!

For demonstration's sake, I'm going to focus on a small island on my map and plop salt all over. You should take more time than I did, though--this is the creative part of making the mod. Go crazy!

![Salty.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/salty.png)

As-is, we can take this map, save it (top left corner), and play it like any other saved map in Civ 5, with random leaders and start points. The next step is more granular control of how your game will actually play out, and that's where we get into scenarios.

To start editing your scenario, look on the top toolbar for the "Scenario Editor." Once you're in, you should see this:

![Set your rules here.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/scenario_editor.png)

Here, you can set all the rules for your game: what era you start in, the game speed, allowed victories, and all sorts of cool stuff. In the bottom left of this window you'll also see the Players and City States window, which is where you can add in civs you want to see in-game. You can edit everything about the civ: what kind of techs they have researched, whether they are playable, what team they're on (so you can create multi-civ blocs), and even the team colors. I created the BUILDS civ, based off England, with leader Sean Smith. :)

Once you have at least one civ in your scenario, a few more map options will become available to you. When editing a tile, you may recall that we had the option to set it as a random start point; now, we can specifically tell a tile to be the starting point for an included civ. Alternatively, if we go to the Cities tab, we can plop cities and then edit them. I created a city for BUILDS and then renamed it to HankTheTank. Finally, under the "Units" tab, you can add units for a civ onto the map. I gave HankTheTank a warrior to help protect it, named after me...

![I like this civ.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/scenario-finished.png)

Phew... we're done creating our scenario! Now, let's actually see it in game. To do this, we need to build a mod instead of just using the map file. Save your map and close out of WorldBuilder, then start up the Civ 5 SDK again. Next, open up ModBuddy (the top option). Like before, you may need to install some utilities to get this working. 

Once inside, we want to create a Map Pack project. Go to File, New, Project:

![Here's how to get there.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/modbuddy_nav.png)


Name your map pack something descriptive.

![Name it!](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/modbuddy_mappack.png)

Click through the menus until you get the option to add your map, then add it.

![Name it!](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/modbuddy_addmap.png)

Finally, build your mod by going to Build, Build \<your mod\>:

![Name it!](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/modbuddy_build.png)

And we're done! At this point, you should be able to boot up your game and play your scenario. Note that if you want to make any changes to the map later on, you'll need to open up this map pack project again in Modbuddy and rebuild it in addition to any changes you make in Worldbuilder.

Let's test it out! Boot up Civ 5 and enter the Mods menu:

![Here's the mods menu.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/civ_main_menu_mods.jpg)

Next, enable your mod (ignore all my other mods, you won't see those unless you have your own mods installed)

*![Just enable your mod.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/civ_enable_mod.jpg)

Click past the disclaimer for mod safety and, under Single Player, select "Set Up Game." Then, change the map:

![You want to go under "Additional Maps" to find yours.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/civ_setup_screen_1.jpg)

Go to "Additional Maps" and find your custom map, waiting for you!

![There it is!!](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/civ_setup_screen_2.jpg)

Once it's selected, there will be an awkwardly-placed checkbox entitled "Play Scenario." Check this, and the settings will lock in to the ones you specified earlier. 

![That is a weird checkbox.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/civ_setup_screen_3.jpg)

Choose your leader (if you had multiple playable leaders) and start playing.

![Name it!](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/civ_ingame.jpg)

There it is--our very own, very salty BUILDS Civ!

**Give yourself a pat on the back. You just developed your own mod for Civ 5!**

Ready for more? :)

## The Elder Scrolls V: Skyrim

Let's jump into Skyrim now!

On the face of it, Skyrim can be a lot more intimidating to approach than Civilization V. Where with Civ you have a nice, graphical map creator, with Skyrim you get the Creation Kit: a powerful tool that gets much closer to the structure of the game and requires a much deeper understanding about how the game works. It can take some time to learn, but once you've got the hang of it, you can change pretty much everything about Skyrim easily.
"
There are actually two mod tools we need to become familiar with: the Creation Kit, and the game itself. The Creation Kit allows you to change pretty much everything in the game directly: it presents every single game object, along with their properties and relationships to each other, and allows you to edit them at will. Any changes you make are then saved as a mod, and when the mod is loaded, the game reflects that mod's changes. This process is highly related to how the game manages data, and if you're interested in learning about that, I've written a more technical explanation below. <sup>1</sup>

### In-Game Console

In a progression-driven game like Skyrim, testing your mods can be difficult and time-consuming without aid. Fortunately, Skyrim on PC has a powerful built-in console that allows us to manipulate our game easily, making testing much easier. (You may be familiar with it as a form of "cheat code.") Let's cover that before we dive into the Creation Kit.

Jump in-game to Skyrim on PC. By default, if you don't have a controller plugged in, the key to bring up the console is ``~``. The game should stop simulation and prompt you for your command:

![There's your console!](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/skyrim_console.jpg)

You can tell the bottom half of the screen is tinted dark; that's the console window. We can type in any accepted command here. The full list (with explanations about what they do) can be found [here](http://en.uesp.net/wiki/Skyrim:Console). You shouldn't need to use most of these at all, and there are only a handful that I use on a regular basis. 

**PLEASE NOTE:** while most of the commands I show you here are perfectly safe and can be used anywhere you want with no issues to your game, you should always err on the side of caution--especially if you're experimenting with more exotic ones. 

We'll start with a command that is very useful for testing mods. First, go to the main menu, bring up the console, type:

``coc qasmoke``

and press Enter. This teleports you to the qasmoke chamber, which, as the name would imply, is used for QA smoke testing by the developers. It's especially useful for testing mods because 1) when entered from the main menu, it creates a clean save, allowing you to test the mod from a clean slate, and 2) it contains every crafting station, chests that contain every single object in the game, and an enemy spawner room. In essence, if your mod relies on a built-in game system, you can access that system from qasmoke. 

Okay, let's say we wanted to make Ebony Armor. How would we go about that without playing through the entire game? You guessed it, with the console! Firstly, in order to craft ebony armor, we need to have the requisite Smithing skill--but since this is a new game, we don't have that yet. Not to worry! All we need to do is type in the console:

``advskill smithing 1000000``

This command **adv**ances the **skill** we specify by the number of XP we specify. In this case, we advanced the Smithing skill by enough to allow us to get the "Ebony Smithing" perk. Once we get that perk, we can go to a smelter and craft Ebony Armor... or rather, we would be able to if we had the correct materials on us. Once again, the console comes to the rescue: you can fully manage your or any other NPC's inventory in the console. You can type ``player.inv`` to see everything in your inventory:

![Taking stock.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/skyrim_console_inv.jpg)

You'll notice that every item has a hex value associated with it. Those are the object IDs, which we can use to reference those objects. For example, we can see that the Iron Helmet has ID ``00012e4d``. If we wanted to add another Iron Helmet to our inventory, all we'd need to do is ``player.additem 12e4d 1`` to add a single Iron Helmet to our inventory. (The leading zeros in the ID don't matter.) 

![So this is how you cheat...](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/skyrim_console_additem.jpg)
![Ooo, multiple helmets!](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/skyrim_dualironhelmet.jpg)

Similarly, if we want to remove something, we can use ``player.removeitem 12e4d 1``. 

If we want to know the ID of something that we have a proper name for, we can use the ``help`` command. Just type your query afterwards and it'll give you a list of everything that relates to that string. For example, ``help ingot`` will return the IDs of all the ingots in the game. If you want to do a multi-word query, surround it with quotes: ``help "iron ingot"``. 

So, to make our ebony armor, it looks like we'll need 5 ebony ingots and 3 leather strips. Simple enough: we type ``help "ebony ingot``, get the id (``5ad9d``), add five of them to the player: ``player.additem 5ad9d 5``, and do the same for the leather strips. Yay! Now we have the materials to make our armor!

If we want to manage the inventory of an NPC, we need to click on them in the console, which brings up their RefID. (This is a different type of ID that points to the specific **ref**erence of an object in the game. This doesn't change, and you can look up NPC RefIDs online pretty easily.) When this happens, it means we have targeted them, and any commands we run will now be performed on that target if we don't specify otherwise. We can use ``inv``, ``additem``, and ``removeitem`` on them as we would on the player. We can also use ``equipitem``, which equips the specified item of clothing to that NPC, eg. ``equipitem 12e4d``.

Finally, you can change your character's appearance with the console using ``showracemenu``. There are some caveats to this, though: changing your character's race will result in their skills being reset, and there may be lingering issues in some parts of the game if you change gender. These issues will only persist if you save the game, though, so if you're just using it to test (or design a face, more on that later) you should be fine. You *can* use this in a normal playthrough and you shouldn't have any issues, as long as you stick to basic changes (like facial appearance and hairstyles). 

### Creation Kit

Okay, that's the console--now let's dig into the Creation Kit. Quit Skyrim and navigate to Steam's "Tools" menu (same as before). Look for the "Skyrim Creation Kit," and install it. Open it up, and you'll see something like this:

![Doesn't look like much, does it?](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/ck_default.png)

Right now, it doesn't do anything useful: it's just empty. To start modding, we have to tell it which files to load, which we can do by clicking the "Load" button in the top left corner. You'll see a list of master and plugin files; the ones you choose here will affect which items you can screw around with when you make your mod. By default, you should always select ``Skyrim.esm`` and ``Update.esm``. This will get you the fully updated version of Skyrim loaded in. If you want to load any expansions, there's another step you need to take, which I'll detail in a footnote.<sup>2</sup> Once you've selected all you want, then click "OK" and wait for it to load (it may take a while). If any warnings pop up, just say "Yes to all" (they're harmless) and keep going. Eventually, the sub-window called the "Object Window" will populate, at which point you are ready to go! But first... save your mod. Seriously. The Creation Kit is *very* unstable, and it **WILL** crash. It's an absolute certainty. You just don't know exactly *when* it'll crash, so save and save often. Name it something descriptive.

With that out of the way, let's actually get to modding! We'll do a simple mod: we're going to change how Jarl Balgruuf looks and give him some mutton chops. To start, in the Object Window, expand "Actors" -> "Actor" -> "NordRace" -> "Male" and look for "BalgruufTheGreater." Once you find him, right-click and click "Edit," and you should see this:

![Jarl Ballin'](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/ck_balgruufinobjectmenu.png)

![Let's edit...](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/ck_balgruufeditor.png)

From here, you can change anything about Balgruuf. What we're interested in is what he looks like. At the bottom you should see a checkbox for "Preview." Select "Head," and a preview of how he looks will pop up to your left. 

To modify his appearance, look at the top tabs and scroll right until you can see the tab for "Character Gen Morphs." Click on it, and you should see this:

![All sorts of things to change!](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/ck_balgruufpreview.png)

This gives you a bunch of characteristics you can modify about him. In the box on the right-hand side of the window called "Base Head Parts," you should see an entry for Facial Hair. Click on it, and you can modify his facial hair with the dropdown below:

![BEARDS](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/ck_bearddropdown.png)

You can also modify a bunch of his other characteristics, like what warpaint he has on, or his hair color, or what scars he has. For good measure, I also gave him some lipstick. (And I renamed him to Mr. Python himself. :) )

![Benevolent Dictator for Life Guido van Rossum is in Skyrim.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/ck_balgruufsideburn.png)

The next tab over also lets you modify his face shape, if you want to.

Once you're done, click "OK." The last step is to click on him (so he's highlighted) and then press Ctrl+F4. Click OK on the popups, and then **SAVE**. What we just did was export the face data so that his face appears properly. If we skip this step, his head will be grey and look weird.

![This is important. Don't forget this.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/ck_exportfacegen.png)

Alright, let's see what we just made! Open up the Skyrim launcher. Click on "Data Files" and ensure that your mod is checked and after all the base game data files:

![Load order is important when you have a lot of mods, but not right now.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/skyrim_loadorder.png)

With that done, start up Skyrim. Now is a great time to practice the console and to teach you something new. Go to qasmoke (remember, ``coc qasmoke`` in the console) to start up. Now, we need to get to Whiterun (where Balgruuf, the man we edited, lives). One trick to do this is to teleport yourself to somebody living in Whiterun--say, Adrianne Avenicci, the blacksmith--and then go from there. We can look up her RefID [online](http://en.uesp.net/wiki/Skyrim:Adrianne_Avenicci) (it's ``0001A67C``) and use ``player.moveto 1a67c`` to move to her. Now, we just need to go to Dragonsreach, the palace on the hill, to see our handiwork:

![Jarl van Rossum. What a sight.](https://raw.githubusercontent.com/BUILDS-/builds-workshops/master/game-modding/images/skyrim_jarlvanrossum.jpg)

Mutton Chop Balgruuf! Not bad for our first Skyrim mod!

Like I said, this just scratches the surface of modding Skyrim. If you're interested in going further with this, just poke around the Creation Kit. The entire game is right there, ready for you to tinker with.

I sincerely hope you enjoyed the workshop as much as I did making it! If you have any questions, do not hesitate to get in touch.



<sup>1</sup> One of the things that always boggled my mind about Skyrim was how well it handled game state: pretty much every action the player did had an effect that was reflected, and remembered, in the world. You could move a cup from one table to another in an inn, travel around the world, and come back and that cup would be right where you left it--and it tracks small changes like this for *everything.* This, in an extremely detailed and densely-packed game world. How does it manage to keep track of everything without a gigantic save file that records the state of every single object in the game?

The answer, as it turns out, is pretty clever. Essentially, Skyrim's game files represent the initial game state; in other words, as it is when the player clicks "New Game" on the main menu. Anything the player does to change the game from that initial state is recorded and stored in the save files. Since, presumably, the player won't change literally everything from the way it was when the game started, the changes that need to be stored are pretty small, and most save files weigh in at under 10 megabytes. 

This "changes to master" model affects how we can think about mods: essentially, most (static) changes to Skyrim are just modifications to the initial game state. The Creation Kit allows you to modify this initial game state directly, providing access to every object in the game along with their properties and relationships to each other. Any changes you make are stored in an .esp file, short for "Elder Scrolls **Plugin** file, running on top of an .esm (or "Elder Scrolls **Master**" file) where the game is stored.

<sup>2</sup> By default, Skyrim's configuration files are not set up properly to load the expansion packs. If you want to load something from, say, Dawnguard, there's one more step you need to do. Go to your Skyrim install directory (if you use Steam, it should be ``<your Steam install directory>/steamapps/common/skyrim``. There will be a configuration file called SkyrimEditor.ini (if it isn't there, run the Creation Kit and it should appear). Open this file up in a text editor of your choice. Scroll and look for a section called ``[Archive]``. By default, there should be a line that says ``SResourceArchiveList2=Skyrim - Shaders.bsa, Update.bsa``. What you need to do is add the .bsa file for the expansion you want to this line. For Dawnguard (as an example), this should be ``SResourceArchiveList2=Skyrim - Shaders.bsa, Update.bsa, Dawnguard.bsa``. Save the file and try loading the Creation Kit with your desired expansion again. You may encounter a few more warnings than usual, but it should load. Have fun!
