const darkTheme = "dark";
const lightTheme = "light";

const storageKey = "theme";

const onClick = () => {
    // flip current value
    theme.value = theme.value === lightTheme ? darkTheme : lightTheme;

    setPreference();
};

const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey);
    else
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? darkTheme
            : lightTheme;
};

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
};

const reflectPreference = () => {
    document.firstElementChild.classList.add(
        theme.value === darkTheme ? darkTheme : lightTheme
    );
    document.firstElementChild.classList.remove(
        theme.value === lightTheme ? darkTheme : lightTheme
    );

    document
        .querySelector("#theme-toggle")
        ?.setAttribute("aria-label", theme.value);

    document
        .querySelector("#slot")
        ?.setAttribute(
            "href",
            theme.value === lightTheme ? "#dark-icon" : "#light-icon"
        );
};

const theme = {
    value: getColorPreference(),
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
    // set on load so screen readers can see latest value on the button
    reflectPreference();

    // now this script can find and listen for clicks on the control
    document.querySelector("#theme-toggle").addEventListener("click", onClick);
};

// sync with system changes
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches: isDark }) => {
        theme.value = isDark ? darkTheme : lightTheme;
        setPreference();
    });
