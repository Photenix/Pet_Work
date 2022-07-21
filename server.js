const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('data/db.json');
const middlewares = jsonserver.defaults();

server.use(middlewares);
server.use(router);
const port = process.env.PORT || 4000;

server.listen(port, () => {
	
    console.log( "holiwi 7u7" )
    console.log( 'JSON Server is running port 4000' );

})
