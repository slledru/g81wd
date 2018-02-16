document.addEventListener('DOMContentLoaded', function () {
  let elements = [
    { name: 'Hydrogen', number: 1, symbol: 'H' },
    { name: 'Mercury', number: 80, symbol: 'Hg' },
    { name: 'Lead', number: 82, symbol: 'Pb' },
    { name: 'Bismuth', number: 83, symbol: 'Bi' },
    { name: 'Neon', number: 10, symbol: 'Ne' }
  ];

  let table = this.querySelector('table');
  let tbodies = this.getElementsByTagName('tbody');
  if (tbodies.length > 0) {
    let tbody = tbodies[0];
    for (let i = 0; i < elements.length; i++) {
      let row = elements[i];
      let tableRow = document.createElement('tr');
      for (let key in row) {
        let tableCol = document.createElement('td');
        tableCol.innerText=row[key];
        tableRow.appendChild(tableCol);
      }
      tbody.append(tableRow);
    }
  }

});
