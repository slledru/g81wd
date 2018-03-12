$(document).ready(() => {
  const books = [];
  const googleApiKey = loadLocalStorage().google.appKey;
  const renderBooks = () => {
    let bookSection = $('.google-books-result');
    bookSection.empty();
    books.forEach((element) => {
      // title: element.volumeInfo.title,
      // buyLink: element.saleInfo.buyLink,
      // retailPrice: element.saleInfo.retailPrice,
      // authors: element.volumeInfo.authors,
      // categories: element.volumeInfo.categories,
      // description: element.volumeInfo.description,
      // publisher: element.volumeInfo.publisher,
      // publishedDate: element.volumeInfo.publishedDate
      let div = $('<div class="book col-md-4"></div>');
      div.append($(`<h4>${element.title}</h4>`));
      if (element.publisher !== undefined) {
        div.append($(`<p>Published by '${element.publisher}'</p>`));
      } else {
        div.append($('<p class="warning">No Publisher Information Available</p>'));
      }
      div.append($(`<p>Published on '${element.publishedDate}'</p>`));
      if (element.description !== undefined) {
        div.append($(`<p class=''>
          <img class="img-thumbnail" src="${element.imageLink}" alt="${element.title}">
          ${element.description}
          </p>`));
      } else {
        div.append($('<p class="warning">No Description Available</p>'));
      }
      if (element.buyLink !== undefined) {
        div.append($(`<a href="${element.buyLink}" target="_blank">Order Here</a>`))
      }
      bookSection.append(div);
    });
  }
  $('#google-books-submit').click((event) => {
    event.preventDefault();
    books.length = 0;
    const bookTitle = $('#book-title').val();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&api_key=${googleApiKey}&maxResults=40`;
    let getJSON = $.getJSON(url);
    getJSON.done((data) => {
      if (getJSON.status !== 200) {
        return;
      }
      if (Array.isArray(data.items)) {
        data.items.forEach((element) => {
          console.log(element);
          let book = {
            title: element.volumeInfo.title,
            buyLink: element.saleInfo.buyLink,
            retailPrice: element.saleInfo.retailPrice,
            authors: element.volumeInfo.authors,
            categories: element.volumeInfo.categories,
            description: element.volumeInfo.description,
            publisher: element.volumeInfo.publisher,
            publishedDate: element.volumeInfo.publishedDate,
            imageLink: element.volumeInfo.imageLinks.smallThumbnail
          };
          books.push(book);
        });
        renderBooks();
      }
    });
  });
});
