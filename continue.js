// Break will go out of entire iteration

var data = [1, 2, 13, 6, 5, 8, 11];

for(var i = 0; i<data.length; i++) {
    
    if(data[i] % 2 == 1) {
        continue;
    }


    if(data[i] % 2 == 0) {
        console.log(data[i])
    } 
}