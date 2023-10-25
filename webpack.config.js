import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default 
{
    "entry":["./client/src/index.ts"],
    "watch": false,
    "module": {
        "rules": [
            {
                "test": /\.ts?$/,
                "use": 'ts-loader',
                "exclude": /node_modules/,
            },
        ],
    },
    "resolve": {
        "extensions": [".ts", ".tsx", ".js", ".jsx"],
    },
    "output": {
        "filename": "index.js",
        "path": path.resolve(__dirname, 'client/dist'),
        "library": "main"
    }
}