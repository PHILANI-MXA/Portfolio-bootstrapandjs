// const javascriptp = [{
//     title: "Project 1",
//     imgURL: "https://picsum.photos/200/300?random=1",
//     description: "Lorem",
//     technologies: "HTML/CSS/JS",
//     links: {
//         github: "Link",
//         live: "Link",
//     },
// }]

$(window).load(function() {

    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-thumbnail',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})