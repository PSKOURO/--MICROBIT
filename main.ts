basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
})
