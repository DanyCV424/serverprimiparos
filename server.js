const http = require ('http')
const server = http.createServer((req, res)=>{
})

//const/let nombre = (()=>{ codigo });

const PORT = 5500

server.listen(PORT, () => {
    console.log(`Servidor escuchando el puerto ${PORT}`);
});