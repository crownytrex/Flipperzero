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

submenu.addItem("Function1", 0);  let notify = require("notification");
notify.error();
delay(1000);
notify.success();
delay(1000);
for (let i = 0; i < 10; i++) {
    notify.blink("green", "short");
    delay(500);
}
submenu.addItem("Function1_Value_1", 1);
submenu.addItem("Function2_Value_2", 2);
submenu.addItem("Function3_Value_3", 3);
submenu.addItem("Function4_Value_4", 4);
submenu.setHeader("K_Hacks");

let result = submenu.show();
// Returns undefined when pressing back
print("Result:", result);
