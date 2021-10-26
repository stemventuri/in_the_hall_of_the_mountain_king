input.onButtonPressed(Button.AB, function () {
    play_sequence()
})
function play_sequence () {
    music.playTone(165, music.beat(BeatFraction.Half))
    music.playTone(185, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Half))
    music.playTone(185, music.beat(BeatFraction.Half))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Half))
    music.playTone(185, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Double))
}
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    led.enable(false)
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        music.playTone(165, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music.playTone(185, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        music.playTone(196, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        music.playTone(247, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        music.playTone(220, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        music.playTone(233, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        music.playTone(294, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        music.stopAllSounds()
    }
})
