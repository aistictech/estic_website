import './navbar.html';

Template.navbar.onRendered(function() {
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
    $('.collapsible').collapsible();
    $('.modal').modal();

    $(".dropdown-button-right").dropdown({
        hover: true,
        gutter: 0,
        //alignment: "right",
        //constrainWidth: true,
        //belowOrigin: true 
    });

    $(".dropdown-button-mobile").dropdown({
        hover: true,
        gutter: 0,
        //alignment: "right",
        //constrainWidth: true,
        //belowOrigin: true 
    });
});
