import {isProduction} from "./utils/common";

export const PATHS = {
    DEFAULT_PATH: `http://${isProduction ? '172.17.1.14' : 'localhost'}:5000/api`
}