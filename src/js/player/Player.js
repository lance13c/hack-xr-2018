class Player {

    /**
     * position - THREE.Vector3
     */
    constructor(asset, position) {
        this.asset = asset;

        if (position) {
            this.pos = position;
        } else {
            this.pos = new THREE.Vector3(0, 0, 0);
        }
    }

    executeAction(command) {
        command.action(this);
    }
}