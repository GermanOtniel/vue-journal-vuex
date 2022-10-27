import state from './state';
import * as actions from './actions';
import * as mutation from './mutation';
import * as getters from './getters';

const myCustomModule = {
  namespaced: true,
  actions,
  getters,
  mutation,
  state
};

export default myCustomModule;