const express = require('express');
const nunjucks = require('nunjucks');

const {
    pageLanding,
    pageStudy,
    pageGiveClass,
    saveClasses,
} = require('./pages');

const server = express();

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
    autoescape: false,
});

server
    .use(express.urlencoded({ extended: true }))
    .use(express.static('public'))

    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClass)
    .post('/save-classes', saveClasses)

    .listen(3333);
