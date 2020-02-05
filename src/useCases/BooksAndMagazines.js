import CSVToJsonParser from '../services/CSVToJsonParser';

const authorsUrl = '/data/authors.csv';
const booksUrl = '/data/books.csv';
const magazinesUrl = '/data/magazines.csv';

function fixAuthorEmails(data, authors) {
  let emails = data.authors.split(',');
  if (!Array.isArray(emails) || !emails.length) {
    return data;
  }
  emails = emails.map((email) => {
    if (email.startsWith('null')) {
      const match = authors.find((a) => a.email === email);
      return email.replace(/null/g, match.firstname.toLowerCase());
    }
    return email;
  })
  const result = { title: data.title, authors: emails, isbn: data.isbn };
  if (data.description) {
    result.description = data.description;
  }
  return result;
}

async function BooksAndMagazines() {
  const authorsData = await CSVToJsonParser.parse(authorsUrl);
  const booksData = await CSVToJsonParser.parse(booksUrl);
  const magazinesData = await CSVToJsonParser.parse(magazinesUrl);

  const books = booksData.map(book => fixAuthorEmails(book, authorsData));
  const magazines = magazinesData.map(magazine => fixAuthorEmails(magazine, authorsData));
  return { books, magazines };
}

export default BooksAndMagazines;
