import {performance, PerformanceObserver} from 'perf_hooks';
import insertionSort from "./insertion.js";
import selectionSort from "./selection.js";
import quickSort from "./quick.js";
import bubbleSort from "./bubble.js";
import mergeSort from "./merge.js";

const funcs ={
    insertion: insertionSort,
    selection: selectionSort,
    bubble: bubbleSort,
    quick: quickSort,
    merge: mergeSort,
}

const tests = {
    'small test 1': [5,2,6,2,8,2,1,54,3,98,4,0],
    'small test 2': [5,6,5,5],
    'small test 3': [5,2,6,2,8, 9, 10],
    'small test 4': [5,2,6,2,8],
    'large test 1': [
        61, 20, 56, 25, 73, 2, 57, 27, 73, 95, 1, 34, 4, 99, 75, 59, 96, 54, 59, 10,
        69, 74, 93, 94, 89, 94, 11, 25, 29, 71, 37, 80, 75, 39, 83, 68, 90, 94, 63, 32,
        16, 85, 15, 42, 97, 60, 34, 11, 69, 64, 50, 74, 40, 93, 91, 40, 0, 39, 16, 59,
        69, 71, 26, 53, 39, 60, 69, 77, 95, 53, 99, 16, 72, 17, 83, 84, 70, 69, 21, 48,
        37, 31, 25, 51, 71, 41, 49, 82, 24, 93, 57, 85, 40, 24, 90, 56, 30, 16, 64, 17,
        23, 24, 46, 3, 27, 4, 94, 76, 74, 60, 34, 5, 16, 0, 32, 84, 4, 64, 61, 15
    ],
}


for (const testKey in tests) {
    let times= [];
    const arr = tests[testKey];
    console.log(testKey);
    for (const key in funcs) {
        const t0 = performance.now()
        const res =  
        funcs[key](arr);
        // console.log(res);
        const t1 = performance.now()
        times.push({
            name: key,
            time: (t1 - t0),
            value: res
        })
    }
    console.table(times.sort((a,b)=>a.time-b.time));
}