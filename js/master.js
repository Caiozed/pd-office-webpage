var app = angular.module("escritorio", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.
    when("/", {
        templateUrl: "templates/home.html"
    }).
    when("/clientes", {
        templateUrl: "templates/clients.html"
    }).
    when("/sobre", {
        templateUrl: "templates/about.html"
    }).
    when("/contato", {
        templateUrl: "templates/contact.html"
    });
});


$(document).on("click", ".dropdown-toggler", function(){
    $(this).parent("section").children(".dropdown").slideToggle("slow");
});

$(document).on("click", ".arrow-down", function(){
    $(".navbar-custom > div").slideToggle("slow");
})