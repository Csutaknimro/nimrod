def on_button_pressed_a():
    basic.show_leds("""
        # . # . .
        . # # # .
        . . # . #
        . # . # .
        . # . # .
        """)
    basic.show_leds("""
        . # # . .
        . # # # .
        . . # . #
        . # . # .
        . # . # .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_string("Hello!")
basic.show_leds("""
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    """)
basic.show_leds("""
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    """)
basic.show_leds("""
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    """)
basic.show_leds("""
    # # # . .
    # . . # .
    # . # . .
    # # # . .
    # . . # .
    """)
basic.show_leds("""
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    """)
basic.show_leds("""
    . # # # .
    . # . . #
    . # . . #
    . # . . #
    . # # # .
    """)
basic.show_number(10)
basic.show_number(9)
basic.show_number(8)
basic.show_number(7)
basic.show_number(6)
basic.show_number(5)
basic.show_number(4)
basic.show_number(3)
basic.show_number(2)
basic.show_number(1)
basic.show_icon(IconNames.HEART)

def on_forever():
    pass
basic.forever(on_forever)
