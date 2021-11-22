module.exports = {
    pages: {
      myappsite: {
        entry: 'src/components/pages/main.js', // エントリーポイントとなるjs
        template: 'public/index.html', // テンプレートのHTML
        filename: 'index.html', // build時に出力されるファイル名
      },
      stockchart: {
        entry: 'src/components/pages/stockchart/main.js',
        template: 'public/stockchart.html',
        filename: 'stockchart.html',
      },
      taskmanagement: {
        entry: 'src/components/pages/taskmanagement/main.js',
        template: 'public/taskmanagement.html',
        filename: 'taskmanagement.html',
      },
    },
  };