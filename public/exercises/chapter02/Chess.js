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
