class MoveCMD {
    constructor(direction, power) {
        this.dir = direction;
    }

    action(actor) {
        //actor.body.
    }

    // Returns Vec3
    // @param power - scalar velocity 0-1
    // @param dir - scalar direction in degrees 0-360, 0 degrees is strait, 1+ to the right, 360- to the left,
    _calcPowerVec(power, dir) {
        
    }
}

export default MoveCMD;