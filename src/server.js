import express from 'express';
import nunjucks from 'nunjucks';

const app = express();

const proffys = [
    {
        name: 'Diego Fernandes',
        avatar: `https://avatars2.githubusercontent.com/u/2254731?s=400&
    u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4`,
        whatsapp: '89996112400',
        bio: `Entusiasta das melhores tecnologias de química avançada.
    <br><br>Apaixonado por explodir coisas em laboratório e por mudar 
    a vida das pessoas através de experiências. Mais de 200.000 pessoas 
    já passaram por uma das minhas explosões.`,
        subject: 'Química',
        cost: '20',
        weekday: [0],
        time_from: [720],
        time_to: [1220],
    },
    {
        name: 'Mayk Brito',
        avatar: `https://avatars2.githubusercontent.com/u/2254731?s=400&
    u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4`,
        whatsapp: '89996112400',
        bio: `Entusiasta das melhores tecnologias de química avançada.
    <br><br>Apaixonado por explodir coisas em laboratório e por mudar 
    a vida das pessoas através de experiências. Mais de 200.000 pessoas 
    já passaram por uma das minhas explosões.`,
        subject: 'Química',
        cost: '20',
        weekday: [0],
        time_from: [720],
        time_to: [1220],
    },
];

const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação Física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química',
];

const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta Feira',
    'Sábado',
];

// Configurações
app.use(express.static('public'));

nunjucks.configure('src/views', {
    express: app,
    noCache: true,
});

function getSubject(subjectNumber) {
    const arrayPosition = subjectNumber - 1;
    return subjects[arrayPosition];
}

// Rotas
app.get('/', (req, res) => res.render('index.html'));

app.get('/study', (req, res) => {
    const filters = req.query;
    return res.render('study.html', {
        proffys,
        filters,
        subjects,
        weekdays,
    });
});

app.get('/give-classes', (req, res) => {
    const data = req.query;

    const isNotEmpty = Object.keys(data).length > 0;

    if (isNotEmpty) {
        data.subject = getSubject(data.subject);

        proffys.push(data);

        res.redirect('/study');
    }

    return res.render('give-classes.html', { subjects, weekdays });
});

app.listen(3333);
