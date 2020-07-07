$(document).ready(function () {
    $("[data-elemtype='guideLink']").on("mouseover", function () {
        var thisID = $(this).attr("id");
       $("[data-expend='" + thisID + "']").show();
    });
    $("[data-elemtype='guideLink']").on("mouseout", function () {
        var thisID = $(this).attr("id");
        $("[data-expend='" + thisID + "']").hide();
    });

    $("#morButton").click(function () {
        if ($("#speech-bubble-contactus").is(":visible"))
            $("#speech-bubble-contactus").hide();
        else
            $("#speech-bubble-contactus").show();
    });

    $(".speech-bubble-close-button").click(function () {
        $(this).parent().hide();
    })
    
    $("#title38").on("mouseover", function () {
        $("#div5").css("opacity", "1");
    });
    $("#title38").on("mouseout", function () {
        $("#div5").css("opacity", "0.5");
    });
    $("#title36").on("mouseover", function () {
        $("#div3").css("opacity", "1");
    });
    $("#title36").on("mouseout", function () {
        $("#div3").css("opacity", "0.5");
    });

    $(".opaonover").on("mouseover", function () {
        $(this).css("opacity", "1");
    });
    $(".opaonover").on("mouseout", function () {
        $(this).css("opacity", "0.5");
    });
});


