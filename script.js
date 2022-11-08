//StarwarsMiniProject
function loadCharacter(qualifiedName, value) {
  document.getElementById("character-info-container").style.display = "none";
  document.getElementById("donut").style.display = "inline-block";
  console.log("click!");
  let randChar = Math.floor(Math.random() * 86);
  xhr = new XMLHttpRequest();
  xhr.open("GET", `https://www.swapi.tech/api/people/${randChar}`);
  xhr.send();
  console.log(xhr);

  xhr.onload = () => {
    if (xhr.status != 200) {
      document.getElementById("character-info-container").textContent =
        "Dont Have This Character";
      document.getElementById("character-info-container").style.display =
        "flex";
      document.getElementById("donut").style.display = "none";
    } else {
      console.log(JSON.parse(xhr.response).result.properties);
      let character = JSON.parse(xhr.response).result.properties;
      console.log("loaded");
      displayCharacter(character);
      document.getElementById("donut").style.display = "none";
      document.getElementById("character-info-container").style.display =
        "flex";
    }
  };

  xhr.onerror = function () {
    console.log("Error something wrong###");
  };
}

function displayCharacter(character) {
  document.getElementById("name").textContent = "Name: " + character.name;
  document.getElementById("height").textContent = "Height: " + character.height;
  document.getElementById("gender").textContent = "Gender: " + character.gender;
  document.getElementById("birth").textContent =
    "Birth: " + character.birth_year;
  getHomeworld(character.homeworld);
}

function getHomeworld(url) {
  xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  console.log(xhr);
  xhr.onload = () => {
    console.log(JSON.parse(xhr.response));
    let homeworldName = JSON.parse(xhr.response).result.properties.name;
    console.log(homeworldName);
    document.getElementById("home-world").textContent =
      "Home World: " + homeworldName;
  };

  xhr.onerror = function () {
    console.log("Error something wrong###");
  };
}
