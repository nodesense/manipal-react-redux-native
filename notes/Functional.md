Redux - predictable state container

Functional - 90%+
Rarely use class component

class Calculator {
    int sum = 0;
    // impure function
    int add(int value) {
        // state mutation
        sum += value;
        return sum;
    }
}

class CArt {
    ArrayList<CartItem> cartItems = ArrayList<CartItem>();

    // impuer function
    addItem(CartItem item) {
        // mutating state
        cartItems.push(item);
    }
}

predictable or not

calc = new Cacluator();

calc.add(10); // output 10
calc.add(10); // 20
calc.add(10);  
calc.add(10);  
calc.add(10); // 20
calc.add(10); 
calc.add(10);  
calc.add(5); //  ??


predictable


// pure function
// given same input, return same output
function add(sum, value) {
    return sum + value
}

function addItem(items, item) {
    // immutable, no push/append
    return [...items, item];
}

add(10, 20); // 30

add(10, 20); 
add(10, 20); 
add(10, 20); 
add(10, 20); 
add(10, 20); 
add(10, 20); 
add(10, 20); 
add(10, 20); 
add(10, 20); 
add(10, 20); 
add(10, 20); 