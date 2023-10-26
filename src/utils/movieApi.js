import { get } from "./apiCaller";

export const getAllMovie = (keyword) => {
    return get(keyword);
};
