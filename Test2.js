let submenu = require("submenu");

submenu.addItem("Kyle", 0);
submenu.addItem("Robert", 1);
submenu.addItem("Klein", 2);
submenu.addItem("Kyle_PC", 3);

submenu.setHeader("Kyles Utils");

let result = submenu.show();
// Returns undefined when pressing back
print("Result:", result);
