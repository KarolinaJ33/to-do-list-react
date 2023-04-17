import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            paramName: searchQueryParamName,
            paramValue: target.value.trim(),
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder={searchQueryParamName}
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};
export default Search;
