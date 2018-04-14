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
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
    output: {
        filename: 'client.bundle.js',
        path: path.join(root, 'dist/bundles'),
    },
    resolve: {
        extensions: ['.css', '.ts', '.tsx', '.js', '.jsx'],
    },
};

export default config;
