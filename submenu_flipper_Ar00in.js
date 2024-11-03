let submenu = require("submenu");

submenu.addItem("Ohio", 0);
submenu.addItem("Skibidi", 1);
submenu.addItem("Rizz", 2);
submenu.addItem("Kyle_PC", 3);

submenu.setHeader("Kyles Utils");

let result = submenu.show();
// Returns undefined when pressing back
print("Result:", result);
