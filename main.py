while True:
    '''   
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
    '''
    print(input.temperature(TemperatureUnit.FAHRENHEIT))
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 81:
        light.set_all(light.rgb(255,128,0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) > 50:
        light.set_all(light.rgb(0,255,0))
    else:
        light.set_all(light.rgb(0,0,255))