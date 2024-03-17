$(document).ready(function(){
    //slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
        
    });

    //post

    var posts = [
        {
            title: 'prueba de titulo 0',
            date: 'Publicado'+' '+moment().format("MMMM dddd YYYY"),
            content:  'Phasellus leo tortor, feugiat ut dui at, ultrices volutpat metus. Phasellus ac faucibus enim. Etiam vel nulla et ligula auctor lobortis porttito'
        },
        {
            title: 'prueba de titulo 1',
            date: 'Publicado'+' '+moment().format("MMMM dddd YYYY"),
            content:  'Phasellus leo tortor, feugiat ut dui at, ultrices volutpat metus. Phasellus ac faucibus enim. Etiam vel nulla et ligula auctor lobortis porttito'
        

        },
        {
            title: 'prueba de titulo 2',
            date: 'Publicado'+' '+moment().format("MMMM dddd YYYY"),
            content:  'Phasellus leo tortor, feugiat ut dui at, ultrices volutpat metus. Phasellus ac faucibus enim. Etiam vel nulla et ligula auctor lobortis porttito'
        
        },
        {
            title: 'prueba de titulo 3',
            date: 'Publicado'+' '+moment().format("MMMM dddd YYYY"),
            content:  'Phasellus leo tortor, feugiat ut dui at, ultrices volutpat metus. Phasellus ac faucibus enim. Etiam vel nulla et ligula auctor lobortis porttito'
        
        },
    ];
    posts.forEach((item, index) =>{
        var post = `
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button-more">Leer mas</a>
            </article>
        `;
        $("#posts").append(post);
    });
    // selelctor theme
    var theme = $("#theme");
    $("#green").click(function(){
        theme.attr("href","css/green.css")

    })
    $("#blue").click(function(){
        theme.attr("href","css/blue.css")

    })
    $("#red").click(function(){
        theme.attr("href","css/red.css")

    })

    // subir arriba

    $('.subir').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500 );
        return false;
    });
});
