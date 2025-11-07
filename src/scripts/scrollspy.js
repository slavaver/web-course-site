document.addEventListener("astro:load", () => {
    const links = document.querySelectorAll(`aside a[href^="#"]`);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute("id");
                if (entry.intersectionRatio > 0) {
                    document
                        .querySelector(`aside a[href="#${id}"]`)
                        ?.classList?.add("in-view");
                } else {
                    document
                        .querySelector(`aside a[href="#${id}"]`)
                        ?.classList?.remove("in-view");
                }

                links.forEach((link) => {
                    link.classList.remove("bg-amber-600");
                });

                if (document.querySelector(".in-view")) {
                    document
                        .querySelector(".in-view")
                        .classList.add("bg-amber-600");
                }
            });
        },
        {
            root: null,
            rootMargin: "0px 0px -25% 0px",
            threshold: 0.5,
        }
    );

    document
        .querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
        .forEach((heading) => {
            observer.observe(heading);
        });
});
