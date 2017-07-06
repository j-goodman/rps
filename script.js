var choices = {
  rock: "High Ground",
  paper: "Treason",
  scissors: "Spinning",
};

onload = function () {
  var params;
  params = {};
  params.throwRock = document.getElementById('rock');
  params.throwPaper = document.getElementById('paper');
  params.throwScissors = document.getElementById('scissors');

  params.rockWins = document.getElementById('rock-wins');
  params.paperWins = document.getElementById('paper-wins');
  params.scissorsWins = document.getElementById('scissors-wins');

  params.computer = document.getElementById('computer');
  params.commenter = document.getElementById('commenter');
  params.choices = document.getElementById('choices');

  params.throwRock.onclick = play.bind(params, 'rock');
  params.throwPaper.onclick = play.bind(params, 'paper');
  params.throwScissors.onclick = play.bind(params, 'scissors');

  params.commenter.onclick = function () {
    window.location.reload();
  };
};

var play = function (choice) {
  var reply;
  reply = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
  if (reply === choice) {
    this.commenter.innerText = "It's a tie. Try again.";
  } else if (
    choice === 'rock' &&
    reply === 'scissors'
  ) {
    this.rockWins.className = 'active';
    this.commenter.innerText = "You win.";
    this.computer.innerText = choices.rock + " beats " + choices.scissors + ".";
    this.choices.className = 'inactive';
  } else if (
    choice === 'scissors' &&
    reply === 'paper'
  ) {
    this.scissorsWins.className = 'active';
    this.commenter.innerText = "You win.";
    this.computer.innerText = choices.scissors + " beats " + choices.paper + ".";
    this.choices.className = 'inactive';
  } else if (
    choice === 'paper' &&
    reply === 'rock'
  ) {
    this.rockWins.className = 'active';
    this.commenter.innerText = "You win.";
    this.computer.innerText = choices.paper + " beats " + choices.rock + ".";
    this.choices.className = 'inactive';
  } else if (
    choice === 'rock' &&
    reply === 'paper'
  ) {
    this.paperWins.className = 'active';
    this.commenter.innerText = "You have lost.";
    this.computer.innerText = choices.paper + " beats " + choices.rock + ".";
    this.choices.className = 'inactive';
  } else if (
    choice === 'paper' &&
    reply === 'scissors'
  ) {
    this.scissorsWins.className = 'active';
    this.commenter.innerText = "You have lost.";
    this.computer.innerText = choices.scissors + " beats " + choices.paper + ".";
    this.choices.className = 'inactive';
  } else if (
    choice === 'scissors' &&
    reply === 'rock'
  ) {
    this.rockWins.className = 'active';
    this.commenter.innerText = "You have lost.";
    this.computer.innerText = choices.rock + " beats " + choices.scissors + ".";
    this.choices.className = 'inactive';
  }
  setTimeout(function () {
    this.commenter.innerText = "(Play again)";
    this.commenter.style.fontSize = '18px';
  }.bind(this), 4000);
};
