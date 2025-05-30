import path from 'path';

export default {
    // Fichier d'entrée :
    entry: './src/index.js',
    // Fichier de sortie :
    output: {
        path: path.resolve(import.meta.dirname, './build'),
        filename: 'index.bundle.js',
        publicPath: '/build/',
    },
    // compatibilité anciens navigateurs (si besoin du support de IE11 ou android 4.4)
    target: ['web', 'es5'],
    // connexion webpack <-> babel :
    module: {
        rules: [
            {
                test: /\.(js)$/, // tous les fichiers js ou ts ...
                exclude: /node_modules/, // ... sauf le dossier node_modules ...
                use: {
                    // ... seront compilés par tsc !
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        hot: false, // désactivation hot-reload (inutilisé)
        static: {
            directory: './', // racine du serveur http
            watch: {
                // optimisation live-reload
                ignored: 'node_modules',
            },
        },
        port: 8000,
        historyApiFallback: true, // gestion deeplinking
    },
};
