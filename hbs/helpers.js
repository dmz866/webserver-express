const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
});