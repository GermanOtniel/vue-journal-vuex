// export const myMutation = ({ state }) => {

// };

// hacer afectaciones al state

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (/* { state } */) => {

};

export const createEntry = (/* { state } */) => {

};