'use strict';

    var fortunes = [
        "Conquer your fears or they will conquer you.",
        "Rivers need springs",
        "You will have a pleasant surprise.",
        "Whenever possible, keep it simple."
    ];

    console.log(fortunes);

exports.getFortune = function() {
   var idx = Math.floor(Math.random() * fortunes.length);
   return fortunes[idx];
}
