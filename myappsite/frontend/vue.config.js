module.exports = {
    pages: {
      myappsite: {
        entry: 'src/pages/main.js', // エントリーポイントとなるjs
        template: 'public/index.html', // テンプレートのHTML
        filename: 'index.html', // build時に出力されるファイル名
      },
      stockchart: {
        entry: 'src/pages/stockchart/main.js',
        template: 'public/stockchart.html',
        filename: 'stockchart.html',
      },
    },
  };