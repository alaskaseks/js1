"use strict";

const createAuthService = () => {
    const users = [];
    return {

        register: (login, password) => {

            users.push({
                login: login,
                password: password,
                attempts: 0,
                blocked: false
            });

        },

        login: (login, password) => {

            for (let user of users) {
                if (user.login === login) {
                    if (user.blocked) {
                        console.log("Account is blocked");
                        return;
                    }
                    if (user.password === password) {
                        user.attempts = 0;
                        console.log("Login successful");
                    }
                    else {
                        user.attempts++;
                        console.log("Wrong password");
                        if (user.attempts >= 3) {
                            user.blocked = true;
                            console.log("Account is blocked");
                        }
                    }
                    return;
                }
            }
            console.log("User not found");
        }
    };
};

const createNotificationService = () => {

    const subscribers = [];

    return {
        subscribe: (name) => {
            subscribers.push(name);
        },
        unsubscribe: (name) => {

            for (let i = 0; i < subscribers.length; i++) {
                if (subscribers[i] === name) {
                    subscribers.splice(i, 1);
                    return;
                }
            }
        },

        notifyAll: (message) => {

            for (let subscriber of subscribers) {
                console.log(subscriber + " received a message: " + message);
            }
        }
    };
};

const createTaskManager = () => {

    const tasks = [];

    return {
        addTask: (title) => {
            tasks.push({
                title: title,
                completed: false
            });
        },
        deleteTask: (title) => {
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].title === title) {
                    tasks.splice(i, 1);
                    return;
                }
            }
        },

        changeStatus: (title) => {
            for (let task of tasks) {
                if (task.title === title) {
                    task.completed = !task.completed;
                    return;
                }
            }
        },
        showTasks: () => {
            console.log("Task list:");
            for (let task of tasks) {
                console.log(
                    task.title +
                    " - " +
                    (task.completed ? "Done" : "Not done")
                );
            }
        },

        findTask: (title) => {
            for (let task of tasks) {
                if (task.title === title) {

                    console.log("Found:");
                    console.log(task);

                    return;
                }
            }

            console.log("Task not found");
        }
    };
};

const createPromoService = () => {

    const promoCodes = [];

    return {
        addPromo: (code, count) => {
            promoCodes.push({
                code: code,
                count: count
            });
        },
        usePromo: (code) => {
            for (let promo of promoCodes) {
                if (promo.code === code) {
                    if (promo.count > 0) {
                        promo.count--;
                        console.log(
                            "Promo used. Remaining uses: "
                            + promo.count
                        );
                    }
                    else {
                        console.log("Promo is invalid");
                    }
                    return;
                }
            }
            console.log("Promo not found");
        },
        showPromos: () => {
            console.log(promoCodes);
        }
    };
};

console.log("=== Authentication ===");

const auth = createAuthService();

auth.register("admin", "1234");

auth.login("admin", "1111");
auth.login("admin", "2222");
auth.login("admin", "3333");
auth.login("admin", "1234");

console.log("=== Subscriptions ===");

const notifications = createNotificationService();

notifications.subscribe("Ivan");
notifications.subscribe("Petro");

notifications.notifyAll("New event");

notifications.unsubscribe("Petro");

notifications.notifyAll("Another event");

console.log("=== Tasks ===");

const tasks = createTaskManager();

tasks.addTask("JavaScript");
tasks.addTask("HTML");
tasks.addTask("CSS");

tasks.showTasks();

tasks.changeStatus("HTML");

tasks.showTasks();

tasks.findTask("JavaScript");

tasks.deleteTask("CSS");

tasks.showTasks();

console.log("=== Promo codes ===");

const promos = createPromoService();

promos.addPromo("SALE50", 2);

promos.usePromo("SALE50");
promos.usePromo("SALE50");
promos.usePromo("SALE50");

promos.showPromos();