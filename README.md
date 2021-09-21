### My JavaScript implementations of Sorting algorithms
* selection sort
* bubble sort
* quick sort
* insertion sort
* merge sort


running them with some test data to test their performance has some outcomes below
```
test 1
╭┄┄┄┬┄┄┄┄┄┄┄┄┄┄┄┬┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┬┄┄┄┄┄┄┄┄┄┄╮
┊   ┊ name      ┊ time                  ┊ value    ┊
├┄┄┄┼┄┄┄┄┄┄┄┄┄┄┄┼┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┼┄┄┄┄┄┄┄┄┄┄┤
┊ 0 ┊ selection ┊ 0.0016969740390777588 ┊ Array(5) ┊
┊ 1 ┊ bubble    ┊ 0.0019700229167938232 ┊ Array(5) ┊
┊ 2 ┊ quick     ┊ 0.003068000078201294  ┊ Array(5) ┊
┊ 3 ┊ insertion ┊ 0.0044209957122802734 ┊ Array(5) ┊
┊ 4 ┊ merge     ┊ 0.011781007051467896  ┊ Array(5) ┊
╰┄┄┄┴┄┄┄┄┄┄┄┄┄┄┄┴┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┴┄┄┄┄┄┄┄┄┄┄╯
```


```
test 2
┌─────────┬─────────────┬──────────────────────┬─────────────────────────────────┐
│ (index) │    name     │         time         │              value              │
├─────────┼─────────────┼──────────────────────┼─────────────────────────────────┤
│    0    │  'bubble'   │ 0.006471008062362671 │ [ 0, 0, 1, ... 117 more items ] │
│    1    │   'merge'   │ 0.09933900833129883  │ [ 0, 0, 1, ... 117 more items ] │
│    2    │ 'insertion' │  0.2042580246925354  │ [ 0, 0, 1, ... 117 more items ] │
│    3    │ 'selection' │  0.2824999988079071  │ [ 0, 0, 1, ... 117 more items ] │
│    4    │   'quick'   │  0.4935469925403595  │ [ 0, 0, 1, ... 117 more items ] │
└─────────┴─────────────┴──────────────────────┴─────────────────────────────────┘
```
