//link: https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
// ch: 38

function friend(friends) {
  return friends.filter((e) => e.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
