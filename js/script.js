$(document).ready(function(){
    setTimeout(function(){
        type('#typed', 'AIMAD AHSAN', 60);
    }, 3000);

    setTimeout(function(){
        $(".cursor").removeClass("blink").html("");
        $(".title-underline").css('width', "100%");
    }, 7000);

    setInterval(function() {
        $("body").css("background-color", bg_colors[randInt(0, bg_colors.length)]);
    }, 10000);
});

bg_colors = [
    "#f44336", "#e91e63", "#9c27b0",
    "#673ab7", "#3f51b5", "#2196f3",
    "#03a9f4", "#00bcd4", "#009688",
    "#4caf50", "#8bc34a", "#cddc39",
    "#ffeb3b", "#ffc107", "#ff9800",
    "#ff5722", "#795548", "#616161"
];

//
// User-defined functions
//

/*
   Typing text effect for a node, requires nodeSelector which is a
   CSS style selector for node which should display the text and 'text' which
   which is the text to be displayed, additionally delay between successive
   characters can be specified too.
*/
function type(nodeSelector, text, delay = 60){
    $(nodeSelector).text(
        text.slice(0, $(nodeSelector).text().length + 1)
    );
    if($(nodeSelector).text().length < text.length)
        setTimeout(function(){
            type(nodeSelector, text, delay);
        }, delay);
}

/*
   Erasing text effect for a node, requires nodeSelector which is a
   CSS style selector for node which should display the text. Additionally,
   delay between successive characters can be specified too.
*/
function erase(nodeSelector, delay = 60){
    $(nodeSelector).text(
        $(nodeSelector).text().slice(0, -1)
    );
    if($(nodeSelector).text().length > 0)
        setTimeout(function(){
            erase(nodeSelector, delay);
        }, delay);
}

/*
   Returns a random integer between min and max
*/
function randInt(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}
