let totalNumber = 0
input.onButtonPressed(Button.A, function () {
    totalNumber = totalNumber + 10
})
input.onButtonPressed(Button.B, function () {
    totalNumber = totalNumber + 1
})
basic.forever(function () {
    basic.showNumber(totalNumber)
    basic.pause(500)
})
