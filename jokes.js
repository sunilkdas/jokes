try {
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
            document.getElementById('hint').style.display="block";
          }
        });
    }
  };
  window.addEventListener("load", () => jokesObj.getJokes());
} catch (e) {
  console.log("Error while fetching jokes ", e);
}
