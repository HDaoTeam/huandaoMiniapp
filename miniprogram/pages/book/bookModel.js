
function getBookInfoItems(book) {
  var items = []
  if(book.author) {
    items.push({"key":"作者","value":book.author})
  }

  if (book.publisher) {
    items.push({ "key": "出版社", "value": book.publisher})
  }
  if (book.pubdate) {
    items.push({ "key": "出版", "value": book.pubdate})
  }
  if (book.subtitle) {
    items.push({ "key": "副标题", "value": book.subtitle})
  }
  if (book.binding) {
    items.push({ "key": "装帧", "value": book.binding})
  }
  return items;
}

module.exports = {
  getBookInfoItems
}