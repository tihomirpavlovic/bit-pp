const mainModule = (function(dataModule, UIModule) {

    $(function() {

        var request = $.ajax({
            url: "http://api.tvmaze.com/shows",
            method: "GET"
        });

        request.done(function(response) {
            const showObjects = dataModule.adaptTvShows(response);
            UIModule.displayTVShows(showObjects);

        });


        request.fail(function(jqXHR, textStatus) {

            alert("Request failed: " + textStatus);

        });

    });

})(dataModule, UIModule);