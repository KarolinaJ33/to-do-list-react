import { all } from "redux-saga/effects";
import { taskSaga } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([taskSaga()]);
}