'use strict';
/**
* @description An Enemy
* @constructor
* @param {number} speed - The speed of Enemy
* @param {number} y - The start y of Enemy
*/
class Enemy {
    constructor(speed, y) {
        this.x = 0;
        this.y = (y - 1) * 83 + 60;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    }

    /**
    * @description Update enemy position
    * @param {number} dt - time delta between ticks
    */
    update(dt) {
        this.x += 101 * dt * this.speed;
        if (this.x > 505) {
            this.x = 0;
        }
    }

    /**
    * @description Draw enemy
    */
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleCollision(player) {
    if (player.y === this.y) {
        if (this.x + 50 > player.x && this.x - 50 < player.x) {
            return true;
        }
    }
    return false;
}
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(playerId) {
        const playerImage = ['images/char-boy.png', 'images/char-cat-girl.png', 
        'images/char-horn-girl.png', 'images/char-pink-girl.png'];
        this.sprite = playerImage[playerId];
        this.x = 101 * 2;
        this.y = 4 * 83 + 60;
    }

    // update() {
    //     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    // }
    /**
    * @description Player enemy
    */
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(move) {
        if (move === 'left') {
            if (this.x != 0) {
                this.x -= 101;
            }
        } else if (move === 'up') {
            if (this.y != 60) {
                this. y -= 83;
            } else {
                this.win();
            }
        } else if (move === 'right') {
            if (this.x != 404) {
                this.x += 101;
            }
        } else if (move === 'down') {
                if (this.y != 4 * 83 + 60) {
                this. y += 83;
            }
        }      
    }

    reset() {
        this.x = 101 * 2;
        this.y = 4 * 83 + 60;
    }
    
    win() {
        this.reset();
        gameFinish();
    }
}

function gameFinish() {
    document.getElementsByClassName('pop-up-button').item(0).addEventListener('click', backtoGame);
    endPop.style.display = "block";
}

function backtoGame() {
    endPop.style.display = "none";
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [new Enemy(1, 1), new Enemy(2, 2), new Enemy(3, 3)];
const player = new Player(0);
const endPop = document.getElementsByClassName('pop-up').item(0);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});