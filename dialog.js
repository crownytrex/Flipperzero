let dialog = require("dialog");

let result1 = dialog.message("Hacks Warning", "Are you sure you want to open this file?");
print(result1);

let dialog_params = ({
    header: "K_hacks",
    text: "Proceed?",
    button_left: "Yes",
    button_right: "No",
    button_center: "Close"
});

let result2 = dialog.custom(dialog_params);
if (result2 === "") {
    print("Back is pressed");
} else {
    print(result2, "is pressed");
}
