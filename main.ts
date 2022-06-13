input.onButtonPressed(Button.A, function () {
    方向 += -1
    if (方向 < 0) {
        方向 = 3
    }
})
input.onButtonPressed(Button.AB, function () {
    run = true
    方向 = 0
    dx = 1
    dy = 0
    Head_x = 0
    Head_y = 0
    egg_x = 4
    egg_y = 4
    score = 0
    BodyList_x = [Head_x]
    BodyList_y = [Head_y]
    Delay = 1000
})
input.onButtonPressed(Button.B, function () {
    方向 += 1
    if (方向 > 3) {
        方向 = 0
    }
})
function move () {
    if (方向 == 0) {
        dx = 1
        dy = 0
    }
    if (方向 == 1) {
        dx = 0
        dy = 1
    }
    if (方向 == 2) {
        dx = -1
        dy = 0
    }
    if (方向 == 3) {
        dx = 0
        dy = -1
    }
    Head_x += dx
    Head_y += dy
}
let Delay = 0
let BodyList_y: number[] = []
let BodyList_x: number[] = []
let score = 0
let egg_y = 0
let egg_x = 0
let Head_y = 0
let Head_x = 0
let dy = 0
let dx = 0
let 方向 = 0
let run = false
run = false
basic.forever(function () {
    if (run) {
        basic.clearScreen()
        move()
    }
    if (Head_x == egg_x && Head_y == egg_y) {
        BodyList_x.insertAt(0, Head_x)
        BodyList_y.insertAt(0, Head_y)
        egg_x = randint(0, 4)
        egg_y = randint(0, 4)
        score += 1
        Delay += -10
    } else {
        BodyList_x.insertAt(0, Head_x)
        BodyList_y.insertAt(0, Head_y)
        BodyList_x.pop()
        BodyList_y.pop()
    }
    for (let index = 0; index <= BodyList_x.length - 1; index++) {
        led.plotBrightness(BodyList_x[index], BodyList_y[index], 255)
    }
    led.plotBrightness(egg_x, egg_y, 50)
    basic.pause(Delay)
})
basic.forever(function () {
    if (Head_x < 0 || Head_x > 4) {
        run = false
        basic.showNumber(score)
    } else if (Head_y < 0 || Head_y > 4) {
        run = false
        basic.showNumber(score)
    }
})
