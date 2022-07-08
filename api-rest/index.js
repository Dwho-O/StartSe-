import express, { json } from 'express';
import {StatusCodes} from 'http-status-codes';
const app = express();
app.use(express.json());
const PORT = 3000;
let users = [
    {id: 1, name: 'Rafael Ribeiro', age: 31},
    {id: 2, name: 'Gabriel Custódio', age: 27}
];
 app.listen(PORT, () =>{
    console.log(`Servidor rodando http://localhost:${PORT}`)
 });

 app.get('/', (request, response) =>{
    return response.send('<h1>Trabalhando com servidor express.</h1>');
 });

 app.get('/users', (request, response) =>{
    return response.send(users);
 });
 //variavel como parâmetro após :
 app.get('/users/:userId', (request, response) =>{
    const userId = request.params.userId;
    const user = users.find(user => {
       return user.id === Number(userId);
    });
    return response.send(user);
 });

 app.post('/users', (request, response) =>{
    const newUser = request.body;
    users.push(newUser);
    return response.status(StatusCodes.CREATED).send(newUser);
 });

 app.put('/users/:userId', (request, response) =>{
   const userId = request.params.userId;
   const updatedUser = request.body;

   users = users.map(user => {
      if(Number(userId)=== user.id){
         return updatedUser;
      }
      return user;
   });
   return response.status(StatusCodes.OK).send(updatedUser);
 });