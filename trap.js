for (const link of document.getElementsByClassName("link")) {
    link.onmousemove = e => {
        const decimal = e.clientX / link.offsetWidth;

        const basePercent = 80,
            percentRange = 20,
            adjustablePercent = percentRange * decimal;

        const redPercent = basePercent + adjustablePercent;

        link.style.setProperty("--red-percent", `${redPercent}%`);
    }
}

document.getElementById("cards").onmousemove = e => {
    for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}