//-------------------------------------------------------------1

var breakfast = {

    name: "Greek",

    ingredients: ["eggs", "ham", "cheese"],

    energy: 600,

    printInstructions: function () {
        return breakfast.name + " breakfast-ingredients: " + breakfast.ingredients;
    },

    jsCompilant: function () {

        if (breakfast.energy > 500) {

            return true;

        } else {
            
            return false;
        }
    }


}

console.log(breakfast.printInstructions());

//-------------------------------------------------------------2

