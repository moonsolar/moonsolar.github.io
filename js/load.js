$("document").ready(function() {
    // var firstType = document.getElementById('type')

    // alert(firstType)
    loadPageWithTypeName("products/iPhone Case.data")
});

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
