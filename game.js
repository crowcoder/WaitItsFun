var gameProperties = {
    screenWidth: 307,
    screenHeight: 307,
};

var states = {
    game: "game",
};

var spinner, waitTxt;

var gameState = function (game) {

};

gameState.prototype = {

    init: function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
    },
    
    preload: function () {
        game.stage.backgroundColor = '#FFFFFF';
        game.load.image('spinner', 'assets/spinner.png');
    },

    create: function () {
        spinner = game.add.sprite(game.world.centerX, game.world.centerY, 'spinner');
        spinner.anchor.setTo(0.5, 0.5);

        waitTxt = game.add.text(6, 90, "WAIT", { font: "100px Arial Black", fill: "#FF0000" });
        waitTxt.stroke = "#FFFFFF";
        waitTxt.strokeThickness = 8;
        //  Apply the shadow to the Stroke only
        waitTxt.setShadow(5, 5, "#333333", 8, true, false);
    },

    update: function () {
        spinner.angle += 2;
    },

    render: function () {
        //   game.debug.body(player);
    }
};

var game = new Phaser.Game(307, 307, Phaser.AUTO, 'game');
game.state.add(states.game, gameState);
game.state.start(states.game);