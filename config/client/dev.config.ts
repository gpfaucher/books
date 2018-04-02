import * as path from 'path';

const root = process.cwd();

const config = {
    entry: path.join(root, 'src/client/index.tsx'),
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx/,
                use: 'ts-loader',
            },
        ],
    },
    output: {
        filename: 'client.bundle.js',
        path: path.join(root, 'dist/bundles'),
    },
};

export default config;
