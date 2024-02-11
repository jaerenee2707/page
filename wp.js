genre = ["fantasy", "horror", "mystery", "romance", "sci-fi", "victorian", "superhero"];
setting = ["in space", "on a train", "in a graveyard", "on the moon", "in a bar", "on a dance floor", "on a plane"];
plot = ["falls of a cliff", "gets trapped in a story", "gets trapped in a painting", "loses their job", "gets cancer", "has no food in their fridge", "gets hit by a bus", "fails a class", "fails a test", "is getting married"];
twist = ["has a talking hamster", "has anemsia", "is homeless", "dresses poorly", "is rich", "needs friends", "is allergic to grapes"];
character = ["The main character", "An OC", "The antagonist from the last show you watched", "Your least favorite teacher", "A plumber"]

generatespace = document.getElementById("generate_space");
heart = document.getElementById("love");
function generate() {
  if (heart.style.display == "none") {
    heart.style.display = "block";
  }
  //console.log(genre[Math.floor(Math.random() * genre.length)]);
  g = genre[Math.floor(Math.random() * genre.length)];
  s = setting[Math.floor(Math.random() * setting.length)];
  p = plot[Math.floor(Math.random() * plot.length)];
  t = twist[Math.floor(Math.random() * twist.length)];
  c = character[Math.floor(Math.random() * character.length)];
  heart.innerText = "🖤";
  generatespace.innerText = "Write a " + g + " story set " + s + ". " + c + " " + p + " and " + t + ".";
}



//let loved_prompts = [];
let loved_prompts_json = localStorage.getItem("loved_prompts");

let loved_prompts = [];
if (loved_prompts_json != null)
  loved_prompts = JSON.parse(loved_prompts_json);



heart.addEventListener("click", pushFav);
function pushFav() {
  if (heart.innerText == "🖤") {
    heart.innerText = "❤️";
    loved_prompts.push(generatespace.innerText);
    let loved_prompts_json = JSON.stringify(loved_prompts);

    localStorage.setItem("loved_prompts", loved_prompts_json);

    //console.log(loved_prompts);
  }
  else {
    heart.innerText = "🖤";
    loved_prompts.pop();
    //console.log(loved_prompts);
  }
}
favs = document.getElementById("favs");
favSpace = document.getElementById("favBlocks");

function favorites() {
  localStorage.setItem('loved_propmts', JSON.stringify(loved_prompts));
  favs.style.display = "block";
  let counter = 0;
  loved_prompts.forEach(function(loved_prompt, index) {
    favB = document.createElement('div');
    favT = document.createElement('p');
    trash = document.createElement('p');

    favT.innerText = loved_prompt;
    trash.innerText = "🗑️ ";
    trash.style.userSelect = "none";

    favB.appendChild(trash);
    favB.appendChild(favT);
    favSpace.appendChild(favB);

    counter++;
    if (counter % 2 === 1) {
      favB.style.backgroundColor = '#c3eac9';
    }
    trash.onclick = function() {
      x = confirm("Remove from favorites? This can't be undone.");
      if (x) {
        this.parentNode.style.display = "none";
        loved_prompts.splice(index, 1);
        let loved_prompts_json = JSON.stringify(loved_prompts);

        localStorage.setItem("loved_prompts", loved_prompts_json);

        //console.log(loved_prompts);
      }
    };
  });
}
function clearAndClose() {
  favs.style.display = 'none';
  favSpace.innerText = "";
  counter = 0;
}