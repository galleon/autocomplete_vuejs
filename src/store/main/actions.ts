import { getStoreAccessors } from 'typesafe-vuex';
import { ActionContext } from 'vuex';
import { State } from '../state';
import { MainState } from './state';

type MainContext = ActionContext<MainState, State>;

export const actions = {};

const { dispatch } = getStoreAccessors<MainState | any, State>('');
