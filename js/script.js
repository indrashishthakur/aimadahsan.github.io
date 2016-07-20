$(document).ready(function(){
    setTimeout(function() {
        $("#lp-cursor").removeClass("blink");
        typingEffect('#typed', 'AIMAD AHSAN', 40);
        $("#lp-cursor").addClass("blink");
    }, 3000);

    setTimeout(function() {
        $("#lp-cursor").removeClass("blink").html("");
        $(".title-underline").css('width', "100%");
    }, 7000);

    setInterval(function() {
        $("#landing-section").css("background-color", bg_colors[randInt(0, bg_colors.length)]);
    }, 10000);

    var aboutDisplayed = false;

    $(window).scroll(function() {
        var hT = $('#about').offset().top,
        hH = $('#about').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        if (wS >= wH/2 && !aboutDisplayed){
            aboutDisplayed = true;
            typingEffect('#typed-name', 'Aimad Ahsan <br>', 40);
            var tc = 0;
            about.forEach(function(el, index, array){
                if(index > 0)
                    tc += array[index-1].length;
                setTimeout(function(){
                    typingEffect('#typed-erased', el, 40);
                    setTimeout(function(){
                        if(index < about.length - 1)
                            erasingEffect('#typed-erased', 40);
                    }, el.length * 40 + 3000);
                }, (tc * 2 * 40) + (3000 * index) + 2000 * (index+1));
            });
        }
    });
});

bg_colors = [
    "#f44336", "#e91e63", "#9c27b0",
    "#673ab7", "#3f51b5", "#2196f3",
    "#03a9f4", "#00bcd4", "#009688",
    "#4caf50", "#8bc34a", "#cddc39",
    "#ffeb3b", "#ffc107", "#ff9800",
    "#ff5722", "#795548", "#616161"
];

about = [
    "is a student",
    "is a Python programmer",
    "is a JavaScript programmer",
    "likes to read",
    "enjoys listening to music",
    "likes making websites",
    "loves open-source",
    "is passionate about learning new technologies",
    "loves to binge-watch TV shows",
    "loves the Internet."
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
function typingEffect(nodeSelector, text, delay) {
    var i = 0;

    function type() {
        if (text[i] === '<') {
            $(nodeSelector).html($(nodeSelector).html() + '<br>');
            i += 4;
        } else {
            $(nodeSelector).html($(nodeSelector).html() + text[i]);
            i++;
        }
        if (i < text.length)
            setTimeout(function() {
                type();
            }, delay);
    }

    type();
}

/*
   Erasing text effect for a node, requires nodeSelector which is a
   CSS style selector for node which should display the text. The complete
   text within the note will be erased. Additionally, delay between successive
   character erasing can be specified too.
*/
function erasingEffect(nodeSelector, delay) {
    $(nodeSelector).html(
        $(nodeSelector).text().slice(0, -1)
    );
    if ($(nodeSelector).text().length > 0)
        setTimeout(function() {
            erasingEffect(nodeSelector, delay);
        }, delay);
}

/*
   Returns a random integer between min and max
*/
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
