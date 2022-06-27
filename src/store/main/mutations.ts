import { MainState } from './state';
import { State } from '../state';
import { IArticle } from '@/interfaces';
import { getStoreAccessors } from 'typesafe-vuex';

export const mutations = {
    setArticle(state: MainState, payload: IArticle) {
        state.article = payload;
    }
};

const { commit } = getStoreAccessors<MainState | any, State>('');

export const commitSetArticle = commit(mutations.setArticle);
