import journalApi from "@/api/journalApi";

// export const myAction = async ({ commit }) => {};

// traer data desde un API

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json');
  let entries = [];
  Object.entries(data).forEach((
    [key, value]) => entries.push({ id: key, ...value }));
  commit('setEntries', entries);
};

export const updateEntry = async (/* { commit } */) => {

};

export const createEntry = async (/* { commit } */) => {

};