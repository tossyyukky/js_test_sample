module.exports = {
        entry: {
                // エントリポイント (main関数のあるファイルみたいなもの) の場所を列挙する。
                // エントリポイントの中でrequireやimportによって指定した依存関係のあるファイルをwebpackが自動的に結合してくれる。
                // __dirnameはwebpack.config.jsのあるディレクトリ
                app: __dirname + '/src/browser/app.ts',
        },
        output: {
                // 出力先のディレクトリを指定する
                path: __dirname + '/dist',
                // 出力するファイル名
                // [name]にはentryのキーにした名前が入る。今回の例ではapp.bundle.jsになる
                filename: "[name].bundle.js",
        },
        resolve: {
                // requireやimportしたときに省略を自動的に補完してくれる拡張子の一覧
                // http://dackdive.hateblo.jp/entry/2016/04/13/123000#resolve
                extensions: ['.ts', '.js'],
        },
        module: {
                rules: [
                        // testに書いた正規表現にマッチするファイルをloaderに投げる
                        // loaderを複数指定したときには右から左に適用される
                        // http://dackdive.hateblo.jp/entry/2016/04/13/123000#moduleloaders
                        {
                                test: /\.ts$/,
                                loader: 'ts-loader'
                        },
                        {
                                test: /_test\.ts$/,
                                use: ['webpack-espower-loader'],
                                enforce: 'post' // or 'post'
                        },
                ],
        },
};
