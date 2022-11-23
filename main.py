def on_button_pressed_a():
    global menu, option
    if menu > 3:
        menu = 0
        option = 0
    else:
        option += 1
        menu += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

option = 0
menu = 0
radio.set_group(1)
menu = 0
option = 0

def on_forever():
    global option
    if menu == 1:
        basic.show_leds("""
            # . # . #
                        . # # # .
                        # # . # #
                        . # # # .
                        # . # . #
        """)
        option = 1
    elif menu == 2:
        basic.show_leds("""
            # # # # #
                        # . # . #
                        # # # # #
                        # . # . #
                        # # # # #
        """)
        option = 2
    elif menu == 3:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
        option = 3
    else:
        basic.show_icon(IconNames.HOUSE)
basic.forever(on_forever)
