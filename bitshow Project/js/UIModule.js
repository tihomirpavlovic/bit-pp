const UIModule = (function() {
    function displayTVShows(tvShows) {
        tvShows.forEach(show => {
            const item = $(`<div id="movie" class="col-sm-12 col-md-6 col-lg-4"><div class="card">
                    <img class="card-img-top" src=${show.imageUrl} alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${show.name}</h5>
                        <p class="card-text"></p>
                    </div>`);

            $("#card").append(item);


        });
    }

    return {
        displayTVShows
    }

})();