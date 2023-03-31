# Raspberry Pi Game Console Workshop

### What is the Raspberry Pi?

"*The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer monitor or TV, and uses a standard keyboard and mouse.*"

### What we're doing Today
Like the title describes, we're going to be turning our Pis into fully functional emulators (for over [40 different platforms](https://github.com/RetroPie/RetroPie-Setup/blob/master/platforms.cfg))!

### Configuration
The Software that we're going to use is called [Retropie](https://github.com/RetroPie/RetroPie-Setup).

Two awesome installation guides for reference:

- [https://github.com/RetroPie/RetroPie-Setup/wiki/first-installation](https://github.com/RetroPie/RetroPie-Setup/wiki/first-installation)
- [https://supernintendopi.wordpress.com/](https://supernintendopi.wordpress.com/)


**Recommended Emulator Controls (with Keyboard):"**

Tip: *To skip an input, just hold a button you've already bound*

- D-pad: Arrow Keys

- Start: Enter

- Select: Shift

- A: U key

- B: I key

- X: O key

- Y: P Key

- Left Bottom & Right Bottom: **Ignore**

- Left Top: Q key

- Right Top: E key

- Left Thumb & Right Thumb: **Ignore**

- Analog Stick: W A S D Keys


Here are a few [ROMs](https://drive.google.com/folderview?id=0B8dSWWttT6cEUDZpcWRJUDVhZEE&usp=sharing) that I downloaded myself if you're interested!

If you want to play Gameboy Advanced games, you'll need to add the gba_bios.bin file I've put in the link above. [Here](https://weekendengineer.wordpress.com/2014/09/08/setting-up-gameboy-advance-for-retropie/) is the guide I used for reference. I believe you just need to put it in the following directory:

```
$ /opt/retropie/emulators/gpsp/
```