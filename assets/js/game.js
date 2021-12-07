var playerName = window.prompt("What is your Model's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// you can log mutliple values at onces like this
// console.log(playerName, playerHealth, playerAttack)
// var enemyName = "Hans"
var enemyHealth = 50;
var enemyAttack = 12;

// Enemy Robots
var enemyNames = ["Bob", "Glorious Amy", "Sweet Jimmy", "Beautiful Hans"];
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
// console.log(enemyNames[3]);
// var enemy1 = "Boborto";
// var enemy2 = "Alfonso";
// var enemy3 = "Sweet Bill";

//Fight or skip prompt
var fight = function() {
    // Alert players that they are starting the round
    window.alert("READY FOR THE POSE OFF?");
    //Fight or Skip prompt
    var promptFight = window.prompt("Would you like to POSE or SKIP? Enter 'POSE' or 'SKIP' to choose!")
    //Su// if player choses to fight, then fight
if (promptFight === "pose" || promptFight === "POSE") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " flexed their massive biceps at " + enemyName + ". " + enemyName + " is knocked back by the raw power, they have " + enemyHealth + " energy remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " couldn't handle your awesome posing!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " energy left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " POSED HARD AGAINST " + playerName + ". " + playerName + " now has " + playerHealth + " energy remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has fainted from" + enemyName+ "'s awesome posing!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " energy left.");
    }
    // if player choses to skip
  } 
else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm skip
    var confirmSkip = window.confirm("You sure about that buddy?");
    //if yes(true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this pose off. COWARD!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no(false), ask question again by running fight() again
    else {
        fight();
    }
    // window.alert(playerName + " has chosen to skip the fight!");
    
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
  };

// fight()

// Game States
// Win - Player has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat all enemy-robots
// "Lose" - Player robot's health is zero or less

for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
}