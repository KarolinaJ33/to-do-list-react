import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (paramName) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return searchParams.get(paramName);
};

export const useReplaceQueryParameter = (paramName, paramValue) => {
    const location = useLocation();
    const history = useHistory();

    return ({ paramName, paramValue }) => {
        const searchParams = new URLSearchParams(location.search);

        if (paramValue === undefined) {
            searchParams.delete(paramName);
        } else {
            searchParams.set(paramName, paramValue);
        }
        const newSearch = searchParams.toString();
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }
}
