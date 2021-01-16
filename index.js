var random_num = Math.floor((Math.random() * 6) + 1);
var random_num_src = "images/dice" + random_num + ".png";
var images1 = document.querySelectorAll('img')[0];
images1.setAttribute("src", random_num_src);

var random_num2 = Math.floor(Math.random() * 6) + 1;
var random_num_src2 = "images/dice" + random_num2 + ".png";
var images2 = document.querySelectorAll('img')[1];
images2.setAttribute('src', random_num_src2);

if (random_num > random_num2){
  document.querySelector('h1').innerHTML = "Player1 wins";
}
else if (random_num < random_num2){
  document.querySelector('h1').innerHTML = "Player2 wins";
}
else{
  document.querySelector('h1').innerHTML = "It's a Draw";
}
