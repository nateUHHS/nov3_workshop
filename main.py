while True:
    # print(input.light_level())
    # if input.light_level() > 55:
    # light.set_all(0xff0080)
    # else:
    # light.set_all(0xff8000)
    print(input.sound_level())
    if input.sound_level() > 125:
        light.set_all(0xff0080)
    else:
        light.set_all(0xff8000)