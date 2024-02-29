//link: https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
    let arr = n.toString().split("").map(e=>e=Number(e));
    let r = arr.reduce((a, b) => a + b);
    
    if (r > 9) {
        return digitalRoot(r)
    } else {

    } return r;

  }

  console.log(digitalRoot(16));