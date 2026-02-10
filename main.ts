input.onButtonPressed(Button.A, function () {
    spiller.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    bold = game.createSprite(2, 2)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        bold.change(LedSpriteProperty.Y, 1)
        basic.pause(300)
    }
    if (bold.isTouching(spiller)) {
        game.addScore(1)
    }
    bold.delete()
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 1, 255, 255, 9999, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    spiller.change(LedSpriteProperty.Y, 1)
})
let bold: game.LedSprite = null
let spiller: game.LedSprite = null
game.setScore(0)
spiller = game.createSprite(2, 2)
