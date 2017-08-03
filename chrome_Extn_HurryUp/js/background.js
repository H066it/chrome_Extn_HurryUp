var message = function() {
  new Notification('당신의 허리가 울부짖고 있습니다', {
    icon: "/img/hurryUp_big.png",
    body: '허리 펴세요 허리!'
  });
}

var sound = function() {
  var myAudio = new Audio();
  myAudio.src = "alarm.mp3";
  myAudio.play();
}

var runState = 0;
var setTimer;

chrome.browserAction.onClicked.addListener(function(tab) {
  runState+=1;
  if(runState % 4 == 1) {
    clearInterval(setTimer);
    alert("Interval is 15 minutes.ᕕ( ᐛ )ᕗ");
    chrome.browserAction.setIcon({
      path: {
        15: "img/hurryUp_15.png"
      }
    });
    setTimer = setInterval(function() {
      message();
      sound();
    }, 900000);
  } else if(runState % 4 == 2) {
    clearInterval(setTimer);
    alert("Interval is 30 minutes.ᕕ( ᐕ )ᕗ");
    chrome.browserAction.setIcon({
      path: {
        30: "img/hurryUp_30.png"
      }
    });
    setTimer = setInterval(function() {
      message();
      sound();
    }, 1800000);
  } else if(runState % 4 == 3) {
    clearInterval(setTimer);
    alert("Interval is 1 hour.٩( ᐛ )و");
    chrome.browserAction.setIcon({
      path: {
        60: "img/hurryUp_60.png"
      }
    });
    setTimer = setInterval(function() {
      message();
      sound();
    }, 3600000);
  }  else if(runState % 4 == 0) {
    clearInterval(setTimer);
    alert("Alarm termination (. ·ω·.)");
    chrome.browserAction.setIcon({
      path: {
        19: "img/hurryUp.png"
      }
    });
  } else {
    alert("error! restart plz:(");
  }
})
