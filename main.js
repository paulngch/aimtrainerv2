import $, { ready } from "jquery";

let gameMasterDuration = {
  ready: 3,
  gameTime: 5,
};

let gameStats = {
  ready: gameMasterDuration.ready,
  gameTime: gameMasterDuration.gameTime,
  totalClicks: 0,
  targetClicks: 0,
  accuracy: 0,
  speed: 0,
  targets: 0,
};

let lastGameStats = {
  totalClicks: 0,
  manualEndAccuracy: 0,
  elapsedGameTime: 0,
  speed: 0,
  elapsedAccuracy: 0,
};

let gamePage = {
  page: "main",
};
//=================================================

//=================================================
//Page Handlers
//=================================================
const renderPage = () => {
  $(".page").hide();
  $(`#${gamePage.page}`).show();
};
renderPage();

const setupPageButtonHandlers = () => {
  $("#startButton").on("click", () => {
    gamePage.page = "ready";
    renderPage();
    console.log("START CLICKED");
  });

  $("#readyButton").on("click", () => {
    const totalClickZero = () => {
      gameStats.totalClicks = 0;
    };
    setTimeout(function () {
      totalClickZero();
    }, (gameMasterDuration.ready + 1) * 1000);
    //Resetting of result page to show only Finished-game stats
    $(".manualResult").hide();
    $("#resultAccuracy").show();
    $("#manualEndSpeed").hide();
    $("#resultSpeed").show();
    gamePage.page = "game";
    renderPage();
  });

  $("#endButton").on("click", () => {
    //code adapted from https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts
    //To clear all timeout IDs
    const highestTimeoutId = window.setTimeout(() => {
      for (let i = highestTimeoutId; i >= 0; i--) {
        window.clearInterval(i);
      }
    }, 0);

    lastGameStats.manualEndAccuracy = Math.floor(
      (gameStats.targetClicks / gameStats.totalClicks) * 100
    );
    if (Number.isNaN(lastGameStats.manualEndAccuracy)) {
      lastGameStats.manualEndAccuracy = 0;
    }

    //Hiding all the Finished-game stats and show Manual-end Stats
    $("#resultAccuracy").hide();
    $(".manualResult").show();
    $("#resultSpeed").hide();
    $("#manualEndSpeed").show();
    $("#manualEndAcc").html(lastGameStats.manualEndAccuracy + "%");
    console.log(gameStats.targetClicks + "GAME STATS TARGET CLICKS");

    //Clear the current gametime and accuracy from HTML, their gameStats REMAIN!!!
    //Means will need to change the html again after ready is clicked
    $("#gameTime").html("");
    gamePage.page = "result";
    renderPage();
  });

  $("#mainMenuFromLast").on("click", () => {
    gamePage.page = "main";
    renderPage();
  });

  $("#playAgainFromLast").on("click", () => {
    gamePage.page = "ready";
    renderPage();
  });
};

const main = () => {
  setupPageButtonHandlers();
};

//=================================================
//Selecting the number of targets
//=================================================
const targetSelector = () => {
  $("#oneTarget").on("click", () => {
    alert("Number of targets = 1");
    gameStats.targets = 1;
    console.log(`TARGETS = ${gameStats.targets}`);
    randDotGenerator();
  });

  $("#twoTargets").on("click", () => {
    alert("Number of targets = 2");
    gameStats.targets = 2;
    console.log(`TARGETS = ${gameStats.targets}`);
    randDotGenerator();
  });

  $("#threeTargets").on("click", () => {
    alert("Number of targets = 3");
    gameStats.targets = 3;
    console.log(`TARGETS = ${gameStats.targets}`);
    randDotGenerator();
  });
};
//=================================================
//Generating random positions of the first 3 dots
//=================================================
const randDotGenerator = () => {
  $(".dot").remove();
  const nums = new Set();
  while (nums.size !== gameStats.targets) {
    nums.add(Math.floor(Math.random() * 30) + 1);
  }
  let randDotArray = [...nums];
  //Now randDotArray is an array of 3 unique numbers from 1-30.
  /////
  for (let i = 0; i < gameStats.targets; i++) {
    let $dotX = $("<span>")
      .attr("class", `dot${i + 1}`)
      .addClass("dot");
    // .attr("id", `dot${i + 1}`)
    $dotX.appendTo(`.item${randDotArray[i]}`);
  }
};

//=================================================
//Dot clicking mechanism (appends dots to elsewhere when clicked)
//=================================================
const clickDots = () => {
  const clickDot1 = () => {
    //upon clicking of .dot1
    $("#game").on("click", `.dot1`, () => {
      console.log("DOT 1 CLICKED");
      //Generating random numbder for choosing new div to place into
      let randomItemDiv = Math.ceil(Math.random() * 30);
      while ($(`.item${randomItemDiv}`).html() !== "") {
        randomItemDiv = Math.ceil(Math.random() * 30);
      }
      $(".dot1").appendTo(`.item${randomItemDiv}`);
    });
  };

  const clickDot2 = () => {
    //upon clicking of .dot1
    $("#game").on("click", `.dot2`, () => {
      console.log("DOT 2 CLICKED");
      //Generating random numbder for choosing new div to place into
      let randomItemDiv = Math.ceil(Math.random() * 30);
      while ($(`.item${randomItemDiv}`).html() !== "") {
        randomItemDiv = Math.ceil(Math.random() * 30);
      }
      $(".dot2").appendTo(`.item${randomItemDiv}`);
    });
  };
  const clickDot3 = () => {
    //upon clicking of .dot3
    $("#game").on("click", `.dot3`, () => {
      console.log("DOT 3 CLICKED");
      //Generating random numbder for choosing new div to place into
      let randomItemDiv = Math.ceil(Math.random() * 30);
      while ($(`.item${randomItemDiv}`).html() !== "") {
        randomItemDiv = Math.ceil(Math.random() * 30);
      }
      $(".dot3").appendTo(`.item${randomItemDiv}`);
    });
  };

  clickDot1();
  clickDot2();
  clickDot3();
};
//////////////////////////////

//=================================================
//Counting the clicks for accuracy measurements and displaying in <span accuracy>span> & SPEED
//=================================================
const accuracyCounter = () => {
  const clickCounter = () => {
    gameStats.totalClicks = 0;
    //Adding event listener for window (so wherever the user clicks on the window will be counted, not just the body)
    //DON'T know how to reference "window" in jquery
    window.addEventListener("click", function (event) {
      gameStats.totalClicks += 1;
      // checking total clicks, can remove later
      console.log(gameStats.totalClicks + "TOTAL clicks");
      lastGameStats.totalClicks = gameStats.totalClicks - 1;
      //checking total.Clicks-1 can remove later
      console.log(lastGameStats.totalClicks + "TOTAL clicks - last game");
    });
  };
  const clickCounterTarget = () => {
    $("#game").on("click", `.dot`, () => {
      gameStats.targetClicks += 1;
      //checking total clicks, can remove later
      console.log(gameStats.targetClicks + " DOT clicks");
    });
  };
  clickCounter();
  clickCounterTarget();

  //=================================================
  //Pointer Event disable and enable (for below function involving readyButton)
  //=================================================
  const pointerStatus = (currentStatus) => {
    let noneOrAuto = "";

    if (currentStatus === 1) {
      noneOrAuto = "";
    } else if (currentStatus === 0) {
      noneOrAuto = "none";
    } else {
      console.log("pointerEvents error, line 104");
    }
    console.log(noneOrAuto + " noneorauto");
    $(".dot").css("pointer-events", `${noneOrAuto}`);
  };

  //=================================================
  //On clicking of readyButton, disable mouse event... enable mouseevent X seconds later when ready countdown finishes
  //=================================================
  $("#readyButton").on("click", () => {
    pointerStatus(0);
    setTimeout(function () {
      pointerStatus(1);
      console.log("pointerEvent AUTO");
    }, (gameStats.ready + 1) * 1000);
  });

  window.addEventListener("click", function (event) {
    gameStats.accuracy = Math.floor(
      (gameStats.targetClicks / gameStats.totalClicks) * 100
    );
    //checking current accuracy can delete later
    console.log("ACCURACY = " + gameStats.accuracy);
    $("#accuracySpan").html(gameStats.accuracy + `%`);
    $("#resultAccuracy").html(lastGameStats.elapsedAccuracy + `%`);
  });
};

//=================================================
///Countdown timer (adapted some code from)
//=================================================
///https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
const timerStart = () => {
  //After clicking ready button, 3 things happen in sequence
  //1. Countdown to game start
  //2. Countdown till game end
  //3. Change to end page
  $("#readyButton").on("click", () => {
    let readyTime = gameMasterDuration.ready;
    let gameTime = gameMasterDuration.gameTime;
    gameStats.totalClicks = 0;
    gameStats.targetClicks = 0;
    gameStats.accuracy = 100;
    let currentCountUp = -1;

    const downloadTimer = setInterval(function () {
      if (readyTime <= 0) {
        clearInterval(downloadTimer);
        $("#countdown").html("");
      } else {
        $("#countdown").html(`${readyTime}`);
      }
      readyTime -= 1;
    }, 1000);

    setTimeout(function () {
      const downloadGameTimer = setInterval(function () {
        if (gameTime <= 0) {
          clearInterval(downloadGameTimer);
          $("#gameTime").html("0");
        } else {
          $("#gameTime").html(`${gameTime}`);
        }

        currentCountUp += 1;
        gameTime -= 1;
        lastGameStats.elapsedGameTime = currentCountUp;

        let finalSpeed =
          Math.round(
            (gameMasterDuration.gameTime / gameStats.targetClicks) * 10
          ) / 10;
        if (isFinite(finalSpeed) === false) {
          finalSpeed = 0;
        }
        $("#resultSpeed").html(`${finalSpeed} Seconds per Hit`);

        let manualSpeed =
          Math.round(
            (lastGameStats.elapsedGameTime / gameStats.targetClicks) * 10
          ) / 10;
        if (isFinite(manualSpeed) === false) {
          manualSpeed = 0;
        }
        $("#manualEndSpeed").html(`${manualSpeed} Seconds per Hit`);

        console.log(lastGameStats.elapsedGameTime + "seconds Past");
      }, 1000);
      setTimeout(function () {
        //fix the final accuracy in lastGameStats.elapsedAccuracy
        lastGameStats.elapsedAccuracy = Math.floor(
          (gameStats.targetClicks / gameStats.totalClicks) * 100
        );
        if (Number.isNaN(lastGameStats.elapsedAccuracy)) {
          lastGameStats.elapsedAccuracy = 0;
        }
        if (Number.isFinite(lastGameStats.elapsedAccuracy) === false) {
          lastGameStats.elapsedAccuracy = 0;
        }
        //any other alternatives to simulate click function?
        $(".item1").click();
        gamePage.page = "result";
        renderPage();
      }, readyTime * 1000 + (gameTime + 1) * 1000);
    }, readyTime * 1000);
  });
};
//////////////////////////
timerStart();
clickDots();
targetSelector();
accuracyCounter();
main();

//Things to do on Monday
//fix lastgamestats.accuracy if need
//colour picker
//audio
//crosshair
