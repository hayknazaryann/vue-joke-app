<template>
  <v-container>
    <v-row align="start" justify="center">
      <v-col
        md="8" sm="12"
        class="d-flex flex-column ga-2"
        style="min-height: 500px"
      >
        <v-banner
          icon="mdi-format-quote-open"
          v-for="(randomJoke, i) in randomData"
        >
          <v-banner-text class="subheading">
            {{randomJoke.value}}
          </v-banner-text>

          <template v-slot:actions>
            <v-btn :href="randomJoke.url" target="_blank">View on site</v-btn>
          </template>
        </v-banner>
      </v-col>
      <v-divider></v-divider>
      <v-col md="8">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-text-field
              label="Search"
              v-model="keyword"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="8">
        <v-row align="center" justify="center">
          <v-col cols="12" class="overflow-y-auto" style="height: 500px">
            <v-banner
              v-for="(searchItem, index) in searchData"
              icon="mdi-format-quote-open"
            >
              <v-banner-text class="subheading">
                {{ searchItem.value }}
              </v-banner-text>

              <template v-slot:actions>
                <v-btn :href="searchItem.url" target="_blank">View on site</v-btn>
              </template>
            </v-banner>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row align="start" justify="space-between">

    </v-row>

  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import  debounce from "debounce";

export default {
  name: 'Index',
  data(){
    return {
      keyword: ''
    }
  },
  mounted() {
    this.randomJokes()
  },
  watch : {
    keyword() {
      this.searchJoke();
    }
  },
  computed: {
    ...mapGetters({
      randomData: 'jokes/getRandomJokes',
      searchData: 'jokes/getSearchJokes'
    })
  },
  methods:{
    ...mapActions({
      random: 'jokes/random',
      search: 'jokes/search'
    }),
    async randomJokes () {
      try {
        await this.random().then((response) => {});
      } catch (e) {
      }
    },

    searchJoke: debounce(async function () {
      try {
        await this.search(this.keyword).then((response) => {});
      } catch (e) {
      }
    }, 600),
  }
}
</script>

<style scoped>

</style>
