/** @type {import('stylelint').Config} */
export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-html",
        "stylelint-config-html/astro",
        "stylelint-config-pepelsbey",
    ],
    rules: {
        "selector-class-pattern": null,
    },
};
