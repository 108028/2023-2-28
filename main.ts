input.onButtonPressed(Button.AB, function () {
    game.pause()
    basic.showNumber(game.score())
    game.resume()
})
function Aa () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    方塊 = game.createSprite(2, 0)
    方塊.turn(Direction.Right, 90)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function _1 () {
    pins.digitalWritePin(DigitalPin.P3, 0)
    while (!(方塊.isTouching(b0) || (方塊.isTouching(b1) || 方塊.isTouching(b2)) || (方塊.isTouching(b3) || 方塊.isTouching(b4)))) {
        方塊.move(1)
        basic.pause(隨便)
    }
    if (方塊.isTouching(b0)) {
        b0.move(-1)
        _0Y4.push(方塊)
    } else if (方塊.isTouching(b1)) {
        b1.move(-1)
        _1y4.push(方塊)
    } else if (方塊.isTouching(b2)) {
        b2.move(-1)
        _2y4.push(方塊)
    } else if (方塊.isTouching(b3)) {
        b3.move(-1)
        _3y4.push(方塊)
    } else if (方塊.isTouching(b4)) {
        b4.move(-1)
        _4y4.push(方塊)
    }
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1000)
}
function 得分2 () {
    game.addScore(1)
    led.stopAnimation()
    得分4()
}
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    方塊.turn(Direction.Left, 90)
    方塊.move(1)
    方塊.turn(Direction.Right, 90)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onGesture(Gesture.EightG, function () {
    game.pause()
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 1e+46; index++) {
        basic.showNumber(game.score())
    }
})
function Turn () {
    b0.turn(Direction.Right, 90)
    b1.turn(Direction.Right, 90)
    b2.turn(Direction.Right, 90)
    b3.turn(Direction.Right, 90)
    b4.turn(Direction.Right, 90)
}
function 得分 () {
    if (_0Y4.length > 0 && (_1y4.length > 0 && _2y4.length > 0) && (_3y4.length > 0 && _4y4.length > 0)) {
        得分2()
    }
}
function Light () {
    b0.set(LedSpriteProperty.Brightness, 0)
    b1.set(LedSpriteProperty.Brightness, 0)
    b2.set(LedSpriteProperty.Brightness, 0)
    b3.set(LedSpriteProperty.Brightness, 0)
    b4.set(LedSpriteProperty.Brightness, 0)
}
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    方塊.turn(Direction.Right, 90)
    方塊.move(1)
    方塊.turn(Direction.Left, 90)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
function 得分4 () {
    b0.move(1)
    b1.move(1)
    b2.move(1)
    b3.move(1)
    b4.move(1)
    while (_0Y4.length > 0 && (_1y4.length > 0 && _2y4.length > 0) && (_3y4.length > 0 && _4y4.length > 0)) {
        隨便 += -10
        _0Y4.pop().delete()
        _1y4.pop().delete()
        _2y4.pop().delete()
        _3y4.pop().delete()
        _4y4.pop().delete()
    }
    list = 0
    Light()
}
let 無限 = 0
let list = 0
let _4y4: game.LedSprite[] = []
let _3y4: game.LedSprite[] = []
let _2y4: game.LedSprite[] = []
let _1y4: game.LedSprite[] = []
let _0Y4: game.LedSprite[] = []
let 方塊: game.LedSprite = null
let 隨便 = 0
let b4: game.LedSprite = null
let b3: game.LedSprite = null
let b2: game.LedSprite = null
let b1: game.LedSprite = null
let b0: game.LedSprite = null
basic.showLeds(`
    . . # . .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # . .
    . # . . .
    . # . . .
    # # . . .
    # # . . .
    `)
basic.showLeds(`
    . . . # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . # # .
    . . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . . . #
    . . . . #
    # . . . #
    . # # # .
    `)
Aa()
b0 = game.createSprite(0, 4)
b1 = game.createSprite(1, 4)
b2 = game.createSprite(2, 4)
b3 = game.createSprite(3, 4)
b4 = game.createSprite(4, 4)
Light()
Turn()
隨便 = 1000
pins.digitalWritePin(DigitalPin.P2, 1)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    _1()
    得分()
    Aa()
})
control.inBackground(function () {
    無限 = 1
    for (let index = 0; index < 無限; index++) {
        無限 += 1
        music.playMelody("A - E F G - F E ", 135)
        music.playMelody("D - D F A - G F ", 135)
        music.playMelody("E - E F G - A - ", 135)
        music.playMelody("F - D - D - - - ", 135)
    }
})
