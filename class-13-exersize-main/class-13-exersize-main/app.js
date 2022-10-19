
function starLoop(n){
    for(var i=1; i <= n; i++){
        console.log("* ".repeat(i))
    }
}

starLoop(5);

  function pyramidLoop(n){
    for(var i=1; i <= n; i++){

        let str = '_'.repeat(n-i);
        let str2 = '*'.repeat(i*2 - 1)


        console.log(str + str2 + str)
    }
  }
  pyramidLoop(5);




