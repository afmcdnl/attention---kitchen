radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    status = 1
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(1)
})
let status = 0
led.setBrightness(100)
status = 0
radio.setGroup(1)
basic.forever(function on_forever() {
    
    if (status == 0) {
        led.toggle(0, 0)
        basic.pause(1000)
    } else if (status == 1) {
        led.setBrightness(255)
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        status = 0
        led.setBrightness(100)
    }
    
})
