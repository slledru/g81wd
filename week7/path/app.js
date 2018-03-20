const path = require('path')

console.log(path.posix);
console.log(path.win32);

console.log('basename', path.basename('/Users/slledru/workspace/g81wd/week7/path/files/index.html'));
console.log('basename', path.basename('/Users/slledru/workspace/g81wd/week7/path/files/index.html', '.html'));
console.log('PATH', process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));
console.log('dirname', path.dirname('/Users/slledru/workspace/g81wd/week7/path/files/index.html'));
console.log('dirname', path.dirname('~slledru/workspace/g81wd/week7/path/files/index.html'));
console.log('extname', path.extname('~slledru/workspace/g81wd/week7/path/files/index.html'));
console.log('isAbsolute', path.isAbsolute('~slledru/workspace/g81wd/week7/path/files/index.html'));
console.log('isAbsolute', path.isAbsolute('/Users/slledru/workspace/g81wd/week7/path/files/index.html'));
console.log('normalize', path.normalize('/foo/bar//baz/asdf/quux/..'));
console.log('parse', path.parse('/home/user/dir/file.txt'));
console.log('relative', path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
console.log('resolve', path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

console.log('__dirname', __dirname);
console.log('dirname', path.dirname('app.js'));

let myFile = `${__dirname}/myFile.txt`
console.log(myFile);
myFile = path.join(__dirname, 'myFile.txt')
console.log('using join: ', myFile);
