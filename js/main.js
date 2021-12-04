function externalLinks() {
    var c = document.getElementsByTagName("a");
    for(a = 0; a < c.length; a++) {
        var b = c[a];
        b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank") && (b.rel = "noopener noreferrer")
    }
};