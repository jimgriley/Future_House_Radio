input.onButtonPressed(Button.A, function () {
    if (menu > 3) {
        menu = 0
    } else {
        menu += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (menu == 1) {
        if (lightstate == 0) {
            radio.sendNumber(5)
            lightstate = 1
            basic.showIcon(IconNames.Yes)
            basic.pause(100)
        } else {
            radio.sendNumber(6)
            lightstate = 0
            basic.showIcon(IconNames.No)
            basic.pause(100)
        }
    } else if (menu == 2) {
        if (blindstate == 0) {
            radio.sendNumber(7)
            blindstate = 1
            basic.showIcon(IconNames.Yes)
            basic.pause(100)
        } else {
            radio.sendNumber(8)
            blindstate = 0
            basic.showIcon(IconNames.No)
            basic.pause(100)
        }
    } else if (menu == 3) {
        if (fanstate == 0) {
            radio.sendNumber(9)
            fanstate = 1
            basic.showIcon(IconNames.Yes)
            basic.pause(100)
        } else {
            radio.sendNumber(10)
            fanstate = 0
            basic.showIcon(IconNames.No)
            basic.pause(100)
        }
    }
})
let blindstate = 0
let lightstate = 0
let fanstate = 0
let menu = 0
radio.setGroup(1)
menu = 0
let option = 0
fanstate = 0
basic.forever(function () {
    if (menu == 1) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
    } else if (menu == 2) {
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # # #
            # . # . #
            # # # # #
            `)
    } else if (menu == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showIcon(IconNames.House)
    }
})
