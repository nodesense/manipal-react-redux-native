given same input, same output is expected - pure function

function add(a, b) {
    // 500 ms
    return a + b
}

memorized values

 add(10, 20) == 30 [cache]

 check if the input got changed, if not return the same value

 add(10, 20) [already cached, no change a, b], return 30 from cache, do not call add 


 add(10, 2) - change in input, b valeu change, impact result
            add function shall be called


add(10, 20) == 30
add(10, 20) == 30
add(10, 20) == 30
add(10, 20) == 30
add(10, 20) == 30
add(10, 20) == 30
add(10, 20) == 30
