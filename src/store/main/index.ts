import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';
import { MainState } from './state';
import { IArticle } from '@/interfaces';

const defaultState: MainState = {
  article: {} as IArticle,
};

export const mainModule = {
  state: defaultState,
  mutations,
  actions,
  getters,
};
