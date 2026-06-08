window.addEventListener("load", () => {

    const loading =
        document.getElementById("loading-screen");

    const app =
        document.getElementById("app");

    setTimeout(() => {

        loading.classList.add("hide");

        app.classList.add("show");

        setTimeout(() => {

            loading.remove();

        }, 800);

    }, 4000);

});