function callback(){
  console.log("hello");
}

(function(){
  console.log("Finish")
})

function receivesAFunction(name){
name();
}

receivesAFunction(callback);

function returnsANamedFunction(){
  return callback;
}



function returnsAnAnonymousFunction(){
return (function(){});
}

