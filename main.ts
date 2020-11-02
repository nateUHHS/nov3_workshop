while (true) {
    //  print(input.light_level())
    //  if input.light_level() > 55:
    //  light.set_all(0xff0080)
    //  else:
    //  light.set_all(0xff8000)
    console.log(input.soundLevel())
    if (input.soundLevel() > 125) {
        light.setAll(0xff0080)
    } else {
        light.setAll(0xff8000)
    }
    
}
