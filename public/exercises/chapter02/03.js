/**Chess Board
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. 
 * The characters should form a chess board. */

module.exports = {
    algorithm: function () {
        var size = 8;
        var grid = "";
        for (i = 1; i <= size; i++) {
            for (j = 1; j <= size; j++) {
                //linha par
                if (i % 2 == 0) {
                    if (j % 2 == 0)
                        grid += " ";
                    else
                        grid += "#";
                } else {
                    //linha impar
                    if (j % 2 == 0)
                        grid += "#";
                    else
                        grid += " ";
                }
            }
            grid += "<br />";
        }
        return grid;
    }
};
