AFRAME.registerComponent('a-player', {
    dependencies: ['dynamic-body'],
    schema: {},
    init: function () {
        //this.asset = //get asset
        //this.geo = //get geo

        this.el.emit("playerinit", {player: this});
        this.body = this.el.body;
        console.log("Body:", this.body);


    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {},

    executeAction: function(command) {
        command.action(this);
    },

    // Ensures the Player doesn't go faster than intended
    // Needs to be run in each game step
    checkMaxSpeed: function() {
        
        //     if (body.position[a.axis] > a.max) {
        //       body.position[a.axis] = a.max;
        //       body.velocity[a.axis] = 0;
        //     } else if (body.position[a.axis] < a.min) {
        //       body.position[a.axis] = a.min;
        //       body.velocity[a.axis] = 0;
        //     }
        //   }); 
    }
});