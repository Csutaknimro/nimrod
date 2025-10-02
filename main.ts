input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # . # . .
            . # # # .
            . . # . #
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . # # . .
            . # # # .
            . . # . #
            . # . # .
            . # . # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("HE")
    basic.showString("NE CSINALD!!!!!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("TITKOS KOD!!!!")
    basic.showString("A KOD: csutaknimrod14@gmail.com")
    basic.showString("es a jelszó: 369Guru963!2014")
    basic.showString("A MEGLEPID: rtl+premium meg active")
})
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
	
})
