# Promise

This is a test file

When readFile() is called, a Promise object is returned.

The callback inside the Promise object is called with 'resolve' and 'reject'.

The Promise callback is executed to read the file.

The fs.readFile() is asynchronous and when either there is an error or file content
is read, the callback function for fs.readFile() is called with 'err' and 'data'
If there is an error, 'reject' of the Promise callback function, is called
If there are no errors, 'resolve' of the Promise callback function, is called.

When 'resolve' is called, then() is invoked.
When 'reject' is called, catch() is invoked.
