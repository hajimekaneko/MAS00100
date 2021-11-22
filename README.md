# MAS00100

## MyAppSite

https://blog.narito.ninja/detail/201
https://qiita.com/Mitsuzara/items/34d413698d1d88033ec0



## MPA対応
https://qiita.com/kamicop/items/c5c0917ed226234ee288


## VUEディレクトリ構成
https://qiita.com/tockn/items/2ce68b99e0839df52200


```
.
├── App.vue
├── assets
├── components
│   ├── atoms　　　　　　　　　　　　　　　　　　：最小単位
│   │   ├── Card.vue
│   │   ├── Button.vue
│   │   ├── LargeUser.vue
│   │   └── Loading.vue
│   ├── globals　　　　　　　　　　　　　　　　　
│   │   ├── Footer.vue
│   │   └── Header.vue
│   ├── molecules　　　　　　　　　　　　　　　　：パーツ単位
│   │   ├── Post.vue
│   │   ├── PostDesciption.vue
│   │   └── UserPosts.vue
│   ├── organisms　　　　　　　　　　　　　　　　：機能単位
│   │   ├── PostTable.vue
│   │   └── UserProfile.vue
│   └── pages
│       ├── stockchart
│       │   ├── StockChart.vue
│       │   └── main.js
│       └── taskmanagement
│           ├── StockChart.vue
│           └── main.js


```
### atoms
あとみっくなコンポーネント群です。ボタンとか。Vuexとやり取りしません。

### molecules
atomsのコンポーネントを利用して作るコンポーネント群です。Vuexとやり取りしません。

### organisms
atomsとmoleculesを利用して作るコンポーネント群です。Vuexとやり取りします。

### pages
organisms moleculesを利用してページを構成します。Vuexとやり取りします。
nuxtっぽく、ルーティングと合わせる感じでディレクトリを切っています。

感想