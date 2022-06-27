import { MainState } from './state';
import { getStoreAccessors } from 'typesafe-vuex';
import { State } from '../state';

export const getters = {
    article: (state: MainState) => {
        return state.article;
    },
};

const { read } = getStoreAccessors<MainState, State>('');

export const readArticle = read(getters.article);
