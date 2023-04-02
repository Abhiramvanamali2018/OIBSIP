var navClose = (function () {

    //Create a HTML collection of links
    var navigationItem = document.body.getElementsByClassName('navigation__link');

    //Convert the HTML collection to an Array
    var navigationItemArr = Array.prototype.slice.call(navigationItem);

    //Loop through each list item to make checked styling disappear upon click
    navigationItemArr.forEach(function (current) {
        current.addEventListener('click', function () {
            document.getElementById('toggle').checked = false;
        })
    });

})();


