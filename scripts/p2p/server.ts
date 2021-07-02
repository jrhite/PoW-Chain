import Peer from 'peerjs';

const peer = new Peer();

// const conn = peer.connect('another-peers-id');

// conn.on('open', () => {
//   conn.send('hi!');
// });

// conn.on('data', (data) => {
//   // print 'hi!'
//   console.log(data);
// });

peer.on('connection', (conn) => {
  conn.on('data', (data) => {
    // print 'hi!'
    console.log(data);
  });
  conn.on('open', () => {
    conn.send('hello!');
  });
});
