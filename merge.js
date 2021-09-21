export default function sort(A=[]){
    // console.log('sorting', A);
    //split the array
    if(A.length>1){
        const iMid = Math.ceil(A.length/2)
        // console.log('iMid', iMid);
        let left = A.slice(0,iMid);
        let right = A.slice(iMid,A.length);
        sort(left);
        sort(right);
        let i=0, li=0, ri=0;
        while (li<left.length && ri<right.length) {
            if(left[li]< right[ri]){
                A[i]=left[li];
                li++
            }else{
                A[i]=right[ri];
                ri++
            }
            i++;
        }
        while (li<left.length) {
            A[i]=left[li];
            li++;
            i++;
        }
        while (ri<right.length) {
            A[i]=right[ri];
            ri++;
            i++;
        }
    }
    return A;  
}

// console.log(sort([5,2,6,2,8,2,1,54,3,98,4,0]) );
// console.log(sort([5,6,5,5]) );
// console.log(sort([5,2,6,2,8, 9, 10]) );
// console.log(sort([5,2,6,2,8, 9, 10]) );
// console.log(sort([5,2,6,2,8]) );