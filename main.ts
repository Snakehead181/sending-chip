radio.setGroup(1)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(3)
    }
    while (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    while (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(1)
    }
})
