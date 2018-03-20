const fs = require('fs')

fs.unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});

try {
  fs.unlinkSync('/tmp/hello1');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
  console.log('err', err);
}

fs.rename('/tmp/hello2', '/tmp/world', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});
fs.stat('/tmp/world', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});
