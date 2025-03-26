basic.showString("Hello!")
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    # # # . .
    # . . # .
    # . # . .
    # # # . .
    # . . # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . # . . #
    . # . . #
    . # . . #
    . # # # .
    `)
basic.showNumber(10)
basic.showNumber(9)
basic.showNumber(8)
basic.showNumber(7)
basic.showNumber(6)
basic.showNumber(5)
basic.showNumber(4)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
