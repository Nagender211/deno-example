const food=Deno.args[0];
if(food === "love"){
    console.log("Deno is love the fod");
}else{
    console.log("Deno is not love the fod");
}
console.table(Deno.matrix())