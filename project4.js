function getValue(){
    return Promise.resolve(10)
}
getValue()
.then(result => result + 5)
.then(result => result * 2)
.then(result => console.log(result))


function getUser(){
    return Promise.resolve({id:1, name: "Ivan"});
}
function getOrder(user){
    return Promise.resolve({userId: user.id, orderId:2,amount:100});
}
function getDiscount(order){
    return Promise.resolve(order.amount * 0.1);
}
getUser()
.then(user => {
    console.log("The user was found: ",user.name);
    return getOrder(user)
})
.then(order =>{
    console.log("the order was found on the amount: ", order.amount);
    return getDiscount(order);
})
.then(discount =>{
    console.log("The discount is: ", discount)
})

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}