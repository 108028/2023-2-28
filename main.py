function Aa () {
    方塊 = game.createSprite(2, 0)
    方塊.turn(Direction.Right, 90)
}
function 得分2 () {
    game.addScore(1)
    led.stopAnimation()
    basic.pause(1100)
    得分4()
}
input.onButtonPressed(Button.A, function () {
    方塊.turn(Direction.Right, 90)
    方塊.move(1)
    方塊.turn(Direction.Left, 90)
})
function Turn () {
    b0.turn(Direction.Right, 90)
    b1.turn(Direction.Right, 90)
    b2.turn(Direction.Right, 90)
    b3.turn(Direction.Right, 90)
    b4.turn(Direction.Right, 90)
}
function 得分 () {
    if (b0.get(LedSpriteProperty.Y) == 3 && (b1.get(LedSpriteProperty.Y) == 3 && (b2.get(LedSpriteProperty.Y) == 3 && (b3.get(LedSpriteProperty.Y) == 3 && b4.get(LedSpriteProperty.Y) == 3)))) {
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
input.onButtonPressed(Button.AB, function () {
    game.pause()
    basic.showNumber(game.score())
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    方塊.turn(Direction.Left, 90)
    方塊.move(1)
    方塊.turn(Direction.Right, 90)
})
function 得分4 () {
    b0.set(LedSpriteProperty.Y, 4)
    b1.set(LedSpriteProperty.Y, 4)
    b2.set(LedSpriteProperty.Y, 4)
    b3.set(LedSpriteProperty.Y, 4)
    b4.set(LedSpriteProperty.Y, 4)
    while (Y4.length != 0) {
        Y4.pop().delete()
    }
    list = Math.constrain(0, 0, 25)
}
function _1 () {
    while (!(方塊.isTouching(b0) || (方塊.isTouching(b1) || 方塊.isTouching(b2)) || (方塊.isTouching(b3) || 方塊.isTouching(b4)))) {
        方塊.move(1)
        basic.pause(900)
    }
    if (方塊.isTouching(b0)) {
        b0.move(-1)
    } else if (方塊.isTouching(b1)) {
        b1.move(-1)
    } else if (方塊.isTouching(b2)) {
        b2.move(-1)
    } else if (方塊.isTouching(b3)) {
        b3.move(-1)
    } else if (方塊.isTouching(b4)) {
        b4.move(-1)
    }
    Y4.push(方塊)
}
let list = 0
let Y4: game.LedSprite[] = []
let 方塊: game.LedSprite = null
let b4: game.LedSprite = null
let b3: game.LedSprite = null
let b2: game.LedSprite = null
let b1: game.LedSprite = null
let b0: game.LedSprite = null
led.enable(true)
Aa()
b0 = game.createSprite(0, 4)
b1 = game.createSprite(1, 4)
b2 = game.createSprite(2, 4)
b3 = game.createSprite(3, 4)
b4 = game.createSprite(4, 4)
Light()
Turn()
basic.forever(function () {
    _1()
    得分()
    Aa()
})
