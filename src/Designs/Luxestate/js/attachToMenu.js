var limitFunc = function () {
    if (window.innerWidth < 768) {
        $('#header__menuJoinUs').appendTo('#header__menu');
        console.log('smallScreen');
    }
    else if (window.innerWidth > 768) {
        $('#header__menuJoinUs').appendTo('header');
        console.log('bigScreen');
    }
};
window.addEventListener("resize", limitFunc);
window.addEventListener("onload", limitFunc);
