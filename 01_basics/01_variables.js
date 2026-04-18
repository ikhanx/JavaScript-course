const accountId= 144338
let accountEmail = "ikhan155676@gmail.com"
var accountPassword = "82763m"
accountCity = "Jaipur" // It is possible but prohibited
let accountState;  // will show indefined

// accountId = 2 not allowed

accountEmail = "nbe@gmai.com"
accountPassword = "212212"
accountCity = "Begaluru"

console.log(accountId);

console.table([accountEmail,accountPassword,accountState,accountCity]);



/* // Avoid using var because it is function-scoped (not block-scoped)
// This can cause unexpected bugs

function test() {
    if (true) {
        var x = 10;
    }
    console.log(x); // ✅ 10 (still accessible outside block - problem!)
}

test();

// With let (correct behavior)
function test2() {
    if (true) {
        let y = 20;
    }
    console.log(y); // ❌ Error (y is block-scoped - safe)
}

*/