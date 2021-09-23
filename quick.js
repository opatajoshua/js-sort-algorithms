/** 
 * get a pivot index 
 * rearrange around pivot
 *  -swap partition index value with pivot value
 * partition by pivot recursive
 * @param {*} A 
 * @returns 
 */
export default function sort(A=[]){
    return quickPartition(A, 0, A.length-1);  
}

function quickPartition(A=[], leftI, rightI){
    if(A.length>1 && leftI<rightI){
        // console.log(leftI, rightI, A);
        //get a pivot index
            let pivotValue = A[rightI]
            let partIdx =leftI;

        //rearrange around pivot
            for (let i = leftI; i < rightI; i++) {
                //the idea is to swap all elements lesser than pivotValue to the left of partitionIndex
                //then increase partIndex
                if(A[i]<=pivotValue){
                    const partVal = A[partIdx]
                    A[partIdx]=A[i];
                    A[i]=partVal;
                    partIdx++;
                }
            }
            //swap partition index value with pivot value
            const partVal = A[partIdx]
            A[partIdx]=pivotValue;
            A[rightI]=partVal;

        //partition by pivot recursive
            quickPartition(A,leftI, partIdx-1)//left side
            quickPartition(A,partIdx+1, rightI)//right side
    }
    return A;
}