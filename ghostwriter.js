function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Who's idea was ", "I really like ", "Pineapples are spicy and ",
  "I dont like "];
  var body = ["being a computer ", "blue blankets ", "the best soccer player ",
              "rainy days ", "chicken butter "];
  var end = ["stopped and left.", " so i decided to eat a pie instead."];
  randIndex = randomUpTo((intro.length)-1);
  sentence = intro[randIndex];
  randIndex = randomUpTo((body.length)-1);
  sentence += body[randIndex];
  randIndex = randomUpTo((end.length)-1);
  sentence += end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
