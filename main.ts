while (true) {
    console.log(input.lightLevel())
    if (input.lightLevel() > 555) {
        light.setAll(0xff0080)
    } else {
        light.setAll(0xff8000)
    }
    
}
