<template>
  <NavbarDayBook/>

  <div v-if="isLoadingEntries" class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-2">
      Espere por favor...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync" />
      </h3>
    </div>
  </div>

  <div v-else class="d-flex">
    <div class="col-4">
      <EntryList/>
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

  export default {
    components: {
      NavbarDayBook: defineAsyncComponent(() => import('../components/NavbarDaybook.vue')),
      EntryList: defineAsyncComponent(() => import('../components/EntryList.vue')),
    },
    methods: {
      ...mapActions('journal', ['loadEntries'])
    },
    created() {
      this.loadEntries();
    },
    computed: {
      ...mapState('journal', {
        isLoadingEntries: ({ isLoading }) => isLoading
      })
    }
  }
</script>