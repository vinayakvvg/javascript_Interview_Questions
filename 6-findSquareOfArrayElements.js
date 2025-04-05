//[1,2,3,4].square() = [1,4,9,16]

let square = function(arr) {
    let sq = [];
    let index=0;
    for(i=0;i<arr.length;i++) {
        if(arr[i] == null || typeof arr[i] != "number" || arr[i] == null) {
            // sq[i] = 0;
            continue;
        }
        sq[index] = arr[i] * arr[i];
        index++;
    }
    console.log(sq);
}

square([1,2,3,4]) // [1,4,9,16]
square([1,2,null,3,4]) // [1,4,9,16]
square([1,2,"Hello",3,4]) // [1,4,9,16]

