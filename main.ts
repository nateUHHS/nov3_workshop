while (true) {
    /**    
    print(input.light_level())
    if input.light_level() > 55:
        light.set_all(light.rgb(255,128,0))
    else:
        light.set_all(light.rgb(0,0,255))

    print(input.sound_level())
    if input.sound_level() > 125:
        light.set_all(light.rgb(255,128,0))
    else:
        light.set_all(light.rgb(0,0,255))
    
 */
    console.log(input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 81) {
        light.setAll(light.rgb(255, 128, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 50) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
