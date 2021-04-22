const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0) {
      alert("You Win!");
    } else if (currentPlayerHealth <= 0) {
      alert("You Lost!");
    }
}

function attackMonster(attack) {
    damage = dealMonsterDamage(attack)
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler() {
  attackMonster(ATTACK_VALUE);
}

function strongAttackHandler() {
  attackMonster(STRONG_ATTACK_VALUE)
}

function healPlayerHandler () {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);