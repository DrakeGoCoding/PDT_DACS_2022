function bai1(m,n){
    let x=[];
for(var i=0;i<m;i++){
    x[i]=i+1;
}

for (var i=0; i<x.length; i++) {
    if(x[i]== n){
        return x[x.length-1-i];
    }

}
}
console.log(bai1(10,4));
