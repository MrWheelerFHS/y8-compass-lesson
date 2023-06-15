basic.forever(function () {
    if (input.compassHeading() < 20 || input.compassHeading() > 340) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() > 70 && input.compassHeading() < 110) {
        basic.showString("E")
    } else if (input.compassHeading() > 160 && input.compassHeading() < 200) {
        basic.showString("S")
    } else if (input.compassHeading() > 250 && input.compassHeading() < 290) {
        basic.showString("W")
    } else {
        basic.showIcon(IconNames.No)
    }
})
