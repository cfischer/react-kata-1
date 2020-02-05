import Papa from 'papaparse/papaparse';

class CSVToJsonParser {
  static async parse(url) {
    return new Promise(resolve => {
      Papa.parse(url, {
        download: true,
        delimiter: ';',
        header: true,
        complete(results) {
          resolve(results.data)
        }
      })
    })
  }
}

export default CSVToJsonParser;
