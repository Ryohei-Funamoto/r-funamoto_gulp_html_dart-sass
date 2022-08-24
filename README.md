# R-Funamoto_Gulp_Dart-Sass_HTML
* 当ファイルはDart Sass, HTML対応のgulpfileです。

## 手順
1. ターミナルを開きます。
2. cdコマンドで_gulpフォルダに移動します。
3. `npm i`コマンドを実行し、package-lock.jsonとnode_modulesを生成します。
4. `npm run dev`コマンドで開発環境を起動します。
* CSS非圧縮
* css.map作成
* メディアクエリをまとめない
5. `npm run pro`コマンドで本番環境用ファイルを出力します。
* CSS非圧縮
* css.mapを作成しない
* メディアクエリをまとめる
* 自動キャッシュクリア

## 注意点
* 開発フォルダは_assetsです。
* _assetsフォルダ内のファイルは_static/distフォルダに吐き出されます。

## Nodeについて
* node v16.14.0にて動作を確認済。

## Sass
* 当ファイルはDart Sass対応ですが、globでまとめられるようにしておりますので、globalフォルダ以外の各フォルダ内のファイルを_index.scssでまとめる必要はございません。
* 当ファイルは、FLOCSS記法に準じたファイル構成になっております。
* globalフォルダには、変数、関数、mixin等が格納されております。
* 各ファイルでglobalフォルダ内の変数等を使用する場合は、@use "global" as *;の記述が必要です。※相対パスで書く必要はございません。
* objectフォルダ内には、component, project, utilityフォルダがあります。
* pageフォルダには、各ページ固有のCSSを定義したファイルを格納します。
* structureフォルダには、JSライブラリ等のCSSを格納します。
