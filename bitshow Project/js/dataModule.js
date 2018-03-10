const dataModule = (function() {

    class TVShow {
        constructor(name, imageUrl, id) {
            this.name = name;
            this.imageUrl = imageUrl;
            this.id = id;
        }
    }

    const createTVShow = (name, imageURL, id) => {
        return new TVShow(name, imageURL, id);
    }

    const adaptTvShows = (allShows) => {
        const shows = allShows.slice(0, 51);

        return shows.map((show) => {
            return createTVShow(show.name, show.image.medium, show.id);
        })
    }

    //load top50Movies


    //load movies from search
    $("#search-button").on("click", function() {

        $("#card").empty();

        var searchValue = $("#search").val();

        var request = $.ajax({

            url: "http://api.tvmaze.com/search/shows?q=" + searchValue,
            method: "GET"

        });

        request.done(function(res) {

            console.log(res)

            for (var i = 0; i < res.length; i++) {

                var showName = res[i].show.name;
                var showImage;
                var showNameAndImage = $("#card");

                if (res[i].show.image != null && res[i].show.image.medium != null) {
                    showImage = res[i].show.image.medium;
                } else {
                    showImage = "http://dustyroom.com/wp-content/uploads/2017/01/empty-featured2-1.png";

                }

                var item = $(`<div id="movie" class="col-sm-12 col-md-6 col-lg-4"><div class="card">
            <img class="card-img-top" src=${showImage} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${showName}</h5>
                <p class="card-text"></p>
            </div>`);


                showNameAndImage.append(item);


            }
        });

        request.fail(function(jqXHR, textStatus) {

            alert("Request failed: " + textStatus);

        });

    });


    return {
        createTVShow,
        adaptTvShows
    }
})();