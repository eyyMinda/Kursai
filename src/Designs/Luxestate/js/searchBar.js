// $(function () {
//     $("#includedContent").load("index.html");
// });


// let payload = {
//     token: "8hvoHfPhYzrCqCbRm38LMQ",
//     data: {
//         name: "nameFirst",
//         email: "internetEmail",
//         phone: "phoneHome",
//         _repeat: 300
//     }
// };

// $.ajax({
//     type: "POST",
//     url: "https://app.fakejson.com/q",
//     data: payload,
//     success: function (resp) {
//         // Do something with fake data
//         console.log(resp)
//     }
// });


$(document).ready(function () {
    $("#search").focus(function () {
        $('#locationCards').show('fast');
        $('#locationCards').css("display", "grid");
    });
    $('#search').blur(function () {
        if (!$(this).val()) {
            $('#locationCards').hide('fast');
        }
    });
});
$(document).ready(function () {
    $("#search2").focus(function () {
        $('#locationCards2').show('fast');
        $('#locationCards2').css("display", "grid");
    });
    $('#search2').blur(function () {
        if (!$(this).val()) {
            $('#locationCards2').hide('fast');
        }
    });
});

function search_location() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('search_locationCard');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            console.log("not displayed");
            $("p").text("No apartments in this location...")
        }
        else {
            x[i].style.display = "block";
            console.log("displayed");
            $("p").text("")
        }
    }
}
function search_location2() {
    let input = document.getElementById('search2').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('search_locationCard2');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            console.log("not displayed");
            $("p").text("No apartments in this location...")
        }
        else {
            x[i].style.display = "block";
            console.log("displayed");
            $("p").text("")
        }
    }
}