//load top50Movies
$(document).ready(function(){

    var request = $.ajax({
        url: "http://api.tvmaze.com/shows",
        method: "GET"
    });

    request.done(function (response) {

        for (let i = 0; i < 51; i++) {

            var showName = response[i].name;
            var showImage = response[i].image.medium;
            var showNameAndImage = $("#card");
            var item = $('<div id="movie" class="col-sm-12 col-md-6 col-lg-4"><div class="card">' +
                '<img class="card-img-top" src="' + showImage + '" alt="Card image cap">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + showName + '</h5>' +
                '<p class="card-text">' +
                '</p>' +
                '</div>' +
                '</div></div>');

            showNameAndImage.append(item);

        }
    })

    request.fail(function (jqXHR, textStatus) {

        alert("Request failed: " + textStatus);
        
    });

});

//load movies from search
$("#search-button").on("click", function () {

    var searchValue = $("#search").val();

    var request = $.ajax({

        url: "http://api.tvmaze.com/search/shows?q=" + searchValue,
        method: "GET"

    });

    request.done(function (res) {
        console.log(res)

        // for (var i = 0; i < res.length; i++) {

            // var showName = response[i].name;
            // var showImage = response[i].image.medium;
            // var showNameAndImage = $("#card");
            // var item = $('<div id="movie" class="col-sm-12 col-md-6 col-lg-4"><div class="card">' +
            //     '<img class="card-img-top" src="' + showImage + '" alt="Card image cap">' +
            //     '<div class="card-body">' +
            //     '<h5 class="card-title">' + showName + '</h5>' +
            //     '<p class="card-text">' +
            //     '</p>' +
            //     '</div>' +
            //     '</div></div>');

            // showNameAndImage.append(item);

        // }
    });

    request.fail(function (jqXHR, textStatus) {

        alert("Request failed: " + textStatus);

    });

});
