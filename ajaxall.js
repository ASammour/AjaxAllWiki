/*
*Works basically in Arabic wikipedia
**

//Make rollback operation
$(document).on('click', 'a', function(e) {
    var title = "https://ar.wikipedia.org"+$(this).attr('href');
    if (title.includes("rollback")){
        e.preventDefault();
        $.get(title, function( data ) {
        });
        $(this).html("تم الاسترجاع!");
    }
    else if (title.includes("undo")){
        e.preventDefault();
        title += "&autoclick=wpSave";
        console.log(title);
        $.get(title, function( data ) {
        });
        $(this).html("تم الرجوع!");
    }
});

importStylesheet( 'User:ASammour/test.css' );

var myArray = [];

function getContent (title){
    var mycontent;
    for (var i=0;i<myArray.length;i++){
        if (myArray[i].split("*******")[0] == title){
            mycontent = myArray[i].split("*******")[1];
        }
    }
    return mycontent;
}

$(document).on('mouseenter', 'p', function(e) {
    
    $(this).find("a").each (function (){
        //e.preventDefault();
        var title = "https://ar.wikipedia.org"+$(this).attr('href');
        if (!title.includes("rollback")){
            $.get(title, function( data ) {
                myArray.push(title+"*******"+data);
            });
        }
    });
});


$(document).on('click', 'a', function(e) {
    e.preventDefault();
    var mytitle = "https://ar.wikipedia.org"+$(this).attr('href');
    var content = getContent (mytitle);
    if (content === undefined){
        $.get(mytitle, function( data ) {
            $("body").html('');
            $("body").html(data);
        });
    }
    $("body").html('<div class="loader">Loading...</div>');
    $("body").html(content);
    window.scrollTo(0, 0);
    window.history.pushState('page2', 'Title', mytitle);
});
