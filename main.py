while True:
    print(input.light_level())
    
    if input.light_level() > 555:
        light.set_all(0xff0080)
    else:
        light.set_all(0xff8000)