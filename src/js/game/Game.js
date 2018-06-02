class Game {
    constructor() {
        console.log("game");
        let self = this;
        this.sceneLoaded = new Promise((resolve,reject) => {
            console.log("here1");
            window.onload = (() => {
                console.log("here2");
                self.sceneEl = document.querySelector('a-scene');
                    // Aframe Scene has loaded
                resolve();
            });
        });
    }

    setup() {
        this.sceneLoaded.then(() => {
            let el = this.sceneEl.querySelector('#test');
            console.log("happened1");

            el.body.fixedRotation = true;
            el.body.updateMassProperties();

            let power = 40;

            setInterval(() => {
                // el.body.applyImpulse(
                // /* impulse */        new CANNON.Vec3(0, 1, -1),
                // /* world position */ new CANNON.Vec3().copy(el.getComputedAttribute('position'))
                // );
                el.body.applyForce(
                    /* impulse */        new CANNON.Vec3(power, 0, 0),
                    /* world position */ new CANNON.Vec3().copy(el.getComputedAttribute('position'))
                    );
                console.log("Power: ", power);
            }, 50);
        });
    }

    addToScene(obj) {
        
    }

}

export default Game;