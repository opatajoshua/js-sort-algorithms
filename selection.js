export default function sort(A=[]){
    for(let pass=0; pass<A.length-1;pass++){
        // let allSorted= true; //does not work well with selection sort
        let minIndex = pass;
        for(let i=pass+1; i<A.length; i++){
            if(A[i]<A[minIndex]){
                minIndex = i;
                // allSorted = false;
            }
        }

        let cVal = A[pass];
        let min = A[minIndex];
        A[pass] = min;
        A[minIndex] =cVal;
    }
    return A;
}

// console.log(sort([5,2,6,2,8,2,1,54,3,98,4,0]) );
// console.log(sort([5,6,5,5]) );
// console.log(sort([5,2,6,2,8, 9, 10]) );
// console.log(sort([5,2,6,2,8, 9, 10]) );
// console.log(sort([5,2,6,2,8]) );