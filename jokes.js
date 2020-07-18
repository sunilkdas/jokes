try {
  var touchstartX = 0;
  var touchstartY = 0;
  var touchendX = 0;
  var touchendY = 0;

  var gesuredZone = document.querySelector("body");

  gesuredZone.addEventListener(
    "touchstart",
    function (event) {
      touchstartX = event.screenX;
      touchstartY = event.screenY;
    },
    false
  );

  gesuredZone.addEventListener(
    "touchend",
    function (event) {
      touchendX = event.screenX;
      touchendY = event.screenY;
      handleGesure();
    },
    false
  );

  function handleGesure() {
    var swiped = "swiped: ";
    if (touchendX < touchstartX) {
        jokesObj.getJokes()    
    }
    if (touchendX > touchstartX) {
        jokesObj.getJokes()    
        
    }
    if (touchendY < touchstartY) {
        jokesObj.getJokes()    
      
    }
    if (touchendY > touchstartY) {
        jokesObj.getJokes()    
      
    }
    if (touchendY == touchstartY) {
      //  jokesObj.getJokes()    
        
    }
  }
  const jokesURL = `https://official-joke-api.appspot.com/random_joke`;

  let jokesObj = {};
  jokesObj.getJokes = function () {
    if (jokesURL) {
      let dataFromAPI = fetch(jokesURL);
      dataFromAPI
        .then((response) => response.json())

        .then((json) => {
          let header = document.getElementById("header");
          let jokeEle = document.getElementById("jokesetup");
          let punchlineEle = document.getElementById("punchline");
          if (header && jokeEle && punchlineEle) {
            header.innerHTML = "#" + json.id;

            jokeEle.innerHTML = json.setup;

            punchlineEle.innerHTML = json.punchline;
          }
        });
    }
  };
  window.addEventListener("load", () => jokesObj.getJokes());
} catch (e) {
  console.log("Error while fetching jokes ", e);
}
