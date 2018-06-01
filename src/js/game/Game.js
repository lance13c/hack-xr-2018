import Player from "../player/Player";

class Game {
    constructor() {
        this.sceneEl = document.querySelector('a-scene');
    }

    setup() {

        this.sceneEl.addEventListener('loaded', () => {
        let el = sceneEl.querySelector('#test');

            setInterval(() => {
                el.body.applyImpulse(
                /* impulse */        new CANNON.Vec3(0, 1, -1),
                /* world position */ new CANNON.Vec3().copy(el.getComputedAttribute('position'))
                );
                console.log("happened");
            }, 2000);
        });

    }

    addToScene(obj) {
        
    }

}