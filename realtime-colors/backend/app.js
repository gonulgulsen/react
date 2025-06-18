const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

app.use('/', (req, res) => {
    res.send('hello');
})

let lastColor = '#282c34';

io.on('connection' , (socket) => {
    console.log('bir kullanıcı bağlandı!');
    
    socket.emit('receive', lastColor);
    //backend client a bağlandığında son color neyse o iletildi ve ekranda gösterildi

    socket.on('newColor', (color) => {
        console.log(color);

        lastColor = color;
        // socket.broadcast.emit('receive', color);
        //broadcast bağlı olan client hariç bütün clientlara gönderiliyor
        
        //newColor adıyla color ı karşılayıp bütün clientlara bu color ı ilettik
         io.emit('receive', color);
    })

    socket.on('disconnect', () => {
        console.log('Bir kullanıcı ayrıldı.')
    });

});

http.listen(3000, () => console.log('Server is up'));