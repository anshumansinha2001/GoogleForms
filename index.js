// By Default COLOR
$(".questions").css("color", "#4C2B87");

$(".questions").on("click", function () {
    $(".questions").css("color", "#4C2B87");
    $(".responses").css("color", "#333");
    $(".settings").css("color", "#333");

    $(".questions-shadow").css("visibility", "visible");
    $(".responses-shadow").css("visibility", "hidden");
    $(".settings-shadow").css("visibility", "hidden");
})

// OnClick for RESPONSES
$(".responses").on("click", function () {
    $(".responses").css("color", "#4C2B87");
    $(".questions").css("color", "#333");
    $(".settings").css("color", "#333");

    $(".responses-shadow").css("visibility", "visible");
    $(".questions-shadow").css("visibility", "hidden");
    $(".settings-shadow").css("visibility", "hidden");
})

// OnClick for SETTINGS
$(".settings").on("click", function () {
    $(".settings").css("color", "#4C2B87");
    $(".questions").css("color", "#333");
    $(".responses").css("color", "#333");

    $(".settings-shadow").css("visibility", "visible");
    $(".questions-shadow").css("visibility", "hidden");
    $(".responses-shadow").css("visibility", "hidden");
});

$(".bi").on("click", function () {
    alert("Opps...Functionality is not given yet!");
})