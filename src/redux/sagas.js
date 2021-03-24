import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_POSTS, REQUEST_POSTS} from './types'
import {hideLoader, showLoader} from "./actions";

export function* sagaWatcher() {
    //функция обрабатывает action поступающий в store
    //будем следить за REQUEST_POSTS action
    //на каждый эффект будем выполнять sagaWorker
    //но чтобы генератор работал надо добавить приставку yield
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    //метод put позволяет дисптчить некоторые события в store
    yield put(showLoader())
    //payload будет совпадать с response.json()
    const payload = yield call(fetchPosts)
    yield put({type: FETCH_POSTS, payload})
    yield put(hideLoader())
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}