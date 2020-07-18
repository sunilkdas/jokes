try {
    $( "document" ).on( "swiperight", swipeRightHandler );
 
    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeRightHandler( event ){
        jokesObj.getJokes();
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
