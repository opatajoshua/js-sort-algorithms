export default function sort(A=[]){
    for(let pass=A.length-1; pass>0;pass--){
        let allSorted= true; //to prevent redundant passes when already sorted
        for(let i=0; i<pass; i++){
            if(A[i]>A[i+1]){
                let iVal = A[i]
                A[i]=A[i+1]
                A[i+1]=iVal;
                allSorted =false;
            }
        }
        if(allSorted)
            break;
    }
    return A;
}

// console.log(sort([5,2,6,2,8,2,1,54,3,98,4,0]) );
// console.log(sort([5,2,6,2,8]) );