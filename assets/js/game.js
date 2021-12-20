var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 50;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = randomNumber(40, 60);
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
debugger;

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
    window.alert(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    window.alert(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
// function to start a new game
var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = Math.floor(Math.random() * 21) + 40;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // if player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    };
// after loops ends, player is either out of helath or enemies to fight
    endGame();
  };
}
var endGame = function() {
// if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Fantastic job, you've survived the game! You now have a score of " + playerMoney + ".")
  }
  else {
    window.alert("You've lost, may God have mercy on your soul")
  }
  //asks if player would like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
      // restart the game
      startGame();
    }
    else {
      window.alert ("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
//shop funtion
var shop = function() {
  var shopOptionPrompt = window.prompt("would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  // use switch to carry out action
switch (shopOptionPrompt) {
  case "REFILL":
  case "refill":
    if (playerMoney >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");

    // increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
    }
    else {
      window.alert("YOU BROKE SON")
    }
  break;
  case "UPGRADE":
  case "upgrade":
    if (playerMoney >=7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");

    // increase attack and decrease money
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
    } 
    else {
      window.alert("YOU BROKE")
    };
    break;
  case "LEAVE":
  case "leave":
    window.alert("Leaving the store.");

    // do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
}
};
// function to generate a random numeric value
function randomNumber(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// prints 100
console.log(Math.max(10, 20, 100));

// prints 0
console.log(Math.max(0, -50));

//starts game when page loads
startGame()
// Wrap the game logic in a startGame() function
// When the player is defeated or there are no more enemies, call an endGame() function that:
//    Alerts the player's total stats
//    Asks the player if they want to play again
//    If yes, call startGame() to restart the game
// After the player skips or defeats an enemy (and there are still more robots to fight):
//    Ask the player if they want to "shop"
//    If no, continue as normal
//    If yes, call the shop() function
//    In the shop() function, ask player if they want to "refill" health, "upgrade" attack, or "leave" the shop
//    If refill, subtract money points from player and increase health
//    If upgrade, subtract money points from player and increase attack power
//    If leave, alert goodbye and exit the function
//    If any other invalid option, call shop() again