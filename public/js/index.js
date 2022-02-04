var enemy, block;

window.addEventListener("load", function () {
    enemy = document.getElementById("enemy");
    block = document.getElementById("block");

    document.addEventListener('keydown', (e) => {
        var code = e.keyCode;
        if (code < 37 || code > 40) return;

        var dist = 10;
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        switch (code) {
            case 37: //left
                moveLeft(block, dist);
                break;
            case 38: //up
                moveUp(block, dist);
                break;
            case 39: //right
                moveRight(block, dist);
                break;
            case 40: //down
                moveDown(block, dist);
                break;
        }
    })
})

function moveUp(el, dist) {
    var elTop = parseInt(window.getComputedStyle(el).getPropertyValue("top"))
    el.style.top = (elTop - dist) + "px"
}
function moveDown(el, dist) {
    var elTop = parseInt(window.getComputedStyle(el).getPropertyValue("top"))
    el.style.top = (elTop + dist) + "px"
}
function moveLeft(el, dist) {
    var elLeft = parseInt(window.getComputedStyle(el).getPropertyValue("left"))
    el.style.left = (elLeft - dist) + "px"
}
function moveRight(el, dist) {
    var elLeft = parseInt(window.getComputedStyle(el).getPropertyValue("left"))
    el.style.left = (elLeft + dist) + "px"
}

/*var checkDead = setInterval(function (){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose.");
    };
}, 10);*/