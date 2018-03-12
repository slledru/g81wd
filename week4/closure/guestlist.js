function guestListLog() {
  const Log = []
  const List = []
  return function(mode, name) {
    let result;
    switch (mode) {
      case 'add':
        List.push(name)
        Log.push(`${mode} ${name}`)
        break;
      case 'remove':
        let index = List.indexOf(name)
        if (index >= 0) {
          List.splice(index, 1)
        }
        Log.push(`${mode} ${name}`)
        break;
      case 'print':
        result = List.reduce((last, element, i) => {
          if (i > 0) {
            last += ', '
          }
          last += element
          return last
        }, '')
        Log.push(`${mode} ${name}`)
        return result
      case 'log':
        result = Log.reduce((last, element, i) => {
          if (i > 0) {
            last += ', '
          }
          last += element
          return last
        }, '')
        return result
    }
  }
}
