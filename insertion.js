export default function sort(A=[]){
    for(let i=0; i<A.length; i++){
        const cEl = A[i];
        let space = i;
        while(space>0 && A[space-1]>cEl){
            A[space]=A[space-1]
            space--;
        }
        A[space]=cEl;
    }
    return A;
}

// console.log(sort([5,2,6,2,8,2,1,54,3,98,4,0]) );