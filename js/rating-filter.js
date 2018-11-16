'use strict';

function setUpRatingFilter() {
    var ratings;
    var ratingList = [];
    $('.teacher').each(function() {
        ratings = $(this).attr('data-ratings').split(',');
        ratings.forEach(function(rating) {
            if(ratingList.indexOf(rating) < 0) {
                ratingList.push(rating);
            }
        });
    });
    ratingList.sort();
    ratingList.forEach(function(rating) {
        var optionTag = `<option value="${rating}">${rating}</option>`;
        $('#rating-filter').append(optionTag);
    });
};

function handleRatingFilter() {
    $('#rating-filter').on('change', function() {
        if($(this).val()) {
            $('.teacher').hide();
            $(`.teacher[data-ratings*="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.teacher').fadeIn();
        }
    });
};

setUpRatingFilter();
handleRatingFilter();