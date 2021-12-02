var playerName = window.prompt("What is your robot's name?");
var playerHealth = 12;
var playerAttack = 10;
// you can log mutliple values at onces like this
console.log(playerName, playerHealth, playerAttack)

var enemyName = "Evilbot";
var enemyHeatlh = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHeatlh = enemyHeatlh - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHeatlh + " health remaining"
    );
    //check enemy's health
    if (enemyHeatlh <= 0) {
        window.alert(enemyName + " IS FUCKING DIED!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHeatlh + " health left.")
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  };
// check to seee if the value of the playerHealth variable is greater than 0
// if (playerHealth > 0) {
//     console.log("Your player is still alive!")
// };
// if (playerHealth === 0) {
//     console.log("Hey guy you dead, hit refreshhhhhhhhh");
// };
// check player health function
// function checkHealth() {
//     console.log(playerName +"'s health is" + playerHealth)
// }

// if (playerHealth === 0) {
//   console.log("This will not run.");
// } 
// else {
//   console.log("This will run instead.");
// }

fight()
