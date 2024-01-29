const {createServer} = require('http');

const server = createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    if (request.url == '/accueil') {
        response.write("Bienvenue sur l'accueil")
        console.log("Vous êtes a l'accueil")
    }
    if (request.url == '/Logo') {
        response.write("<img src='https://i0.wp.com/face-sud-provence.org/wp-content/uploads/2017/05/epitech-marseille-900x600.jpg?ssl=1'>")
        console.log("Vous êtes au logo")
    }
    if (request.url == '/profile') {
        response.write("Bienvenue sur votre profile")
        console.log("Vous êtes sur votre profile")
    }
});
server.listen(3001, () => console.log('Serveur créer'));