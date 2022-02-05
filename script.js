$(document).ready(() => {
    setTimeout(() => {
        $(".loading-screen i").html("Epic :)");
        setTimeout(() => $(".loading-screen").addClass("loaded"), 500);
    }, 1000);
});