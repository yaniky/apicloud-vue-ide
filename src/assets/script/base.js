export function setRoot() {
    var baseSize = 100;
    var baseWidth = 750;
    var sWidth;
    var rootEl;

    function screenChange() {
        sWidth = window.screen.width;
        rootEl = document.documentElement;
        if (sWidth && rootEl) {
            rootEl.style.fontSize = sWidth * baseSize / baseWidth + "px";
        } else if (rootEl) {
            rootEl.style.fontSize = baseSize + "px";
        }
    }
    screenChange();
    window.addEventListener("resize", function() {
        screenChange();
    });
}