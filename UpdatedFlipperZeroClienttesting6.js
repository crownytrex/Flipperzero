let dialog = require("dialog");

let result1 = dialog.message("Hacks Warning", "Are you sure you want to open this file?");
print(result1);

let dialog_params = ({
    header: "K_hacks",
    text: "Proceed?",
    button_left: "$",
    button_right: "*",
    button_center: "Wait 10 Secs"
});

let result2 = dialog.custom(dialog_params);
if (result2 === "") {
    print("Back is pressed");
} else {
    print(result2, "is pressed");
}

let submenu = require("submenu");

submenu.addItem("===Water===", 0);  let notify = require("notification");
notify.error();
delay(1000);
notify.success();
delay(1000);
for (let i = 0; i < 10; i++) {
    notify.blink("green", "short");
    delay(500);
}
submenu.addItem("Drink Water", 1);
submenu.addItem("Trash Bottle", 2);
submenu.addItem("Recycle Bottle", 3);
submenu.addItem("Sell Bottle", 4);
submenu.setHeader("-----Water-----");

let result = submenu.show();
// Returns undefined when pressing back
print("Result:", result);