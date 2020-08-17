windowss.onload = function() {
    var imgCon = document.getElementsByClassName('card-columns')
    var imgDivs = imgCon[0].getElementsByTagName('div')

    for (var i = 0; i < imgDivs.length; i++) {

        var img = imgDivs[i].getElementsByTagName('img')[0];

        (function(curImg) {

            var tempImg = null;
            tempImg = document.createElement('img');

            tempImg.src = curImg.dataset.src;
            tempImg.onload = function(e) {
                curImg.src = tempImg.src;
                curImg.style.filter = 'blur(0px)';
            }
        })(img)
    }
}

$('[data-magnify]').magnify({
    headToolbar: [
        'close'
    ],
    footToolbar: [
        'zoomIn',
        'zoomOut',
        'prev',
        'fullscreen',
        'next',
        'actualSize',
        'rotateRight'
    ],
    title: true
    // initMaximized: true
});
