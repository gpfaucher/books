import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';

const root = process.cwd();

const config = {
    entry: path.join(root, 'src/server/app.ts'),
    externals: [nodeExternals()],
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.ts/,
                use: 'ts-loader',
            },
        ],
    },
    output: {
        filename: 'server.bundle.js',
        path: path.join(root, 'dist/bundles/'),
    },
    target: 'node',
};

export default config;
