class Player {
   health = 100;
   power = 10;

   constructor(name) {
      this.name = name;
   }

   showStatus() {
      console.log(
         `${this.name} (Health => ${this.health}, Power => ${this.power})`
      );
   }

   hit(power) {
      this.health -= power;
      console.log(`Player ${this.name} , has been damage by ${power} points`);
      console.log(`Player ${this.name} , has ${this.health} remaining health`);
   }
}

class ShootingGame {
   constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
   }

   start() {
    console.log("===Start Game===");
      while (this.player1.health > 1 && this.player2.health > 1) {
         console.log(`===Player ${this.player1.name} turns===`);
         this.player1.showStatus();
         this.player2.hit(this.player1);
         this.player2.showStatus();
         console.log(`===Player ${this.player2.name} turns===`);
         this.player2.showStatus();
         this.player1.hit(this.player2);
         this.player1.showStatus();
         if (this.player2.health ===0){
            
         }
      }
   }
}

const ahmad = new Player("Ahmad");
const budi = new Player("Budi");
const game1 = new ShootingGame(ahmad, budi);
game1.start();