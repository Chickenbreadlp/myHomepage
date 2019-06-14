<template>
  <v-container>
    <v-layout column align-center justify-center>
      <v-card class="elevation-8">
        <div class="errorGif" :style="`height: ` + errorGifHeight">
          <v-layout align-start justify-end fill-height column>
            <div id="errorGifText" class="display-1 errorGifText pa-2 ma-3">
              {{ error.statusCode }} - {{ errorMessage }}
            </div>
          </v-layout>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title = this.error.statusCode
    return {
      title
    }
  },
  data() {
    return {
    }
  },
  computed: {
    errorMessage () {
      if (this.error.statusCode === 404) {
        return 'Diese Seite wurde nicht gefunden'
      }
      else if (this.error.statusCode === 500) {
        return 'Ohh... Da mag der Server etwas nicht :('
      }
      else {
        return 'Das sollte so nicht passieren...'
      }
    },
    errorGifHeight () {
      var subtraction = 0;

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          if (this.$vuetify.breakpoint.height < this.$vuetify.breakpoint.width) {
            subtraction = 180
          }
          else {
            subtraction = 188
          }
          break;
        case 'md':
        case 'lg':
        case 'xl':
          subtraction = 220
      }

      if (this.$route.path.indexOf('/projects') === 0) {
        subtraction += 210;
      }

      return 'calc(100vh - ' + subtraction + 'px);'
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }
  .errorGif {
    background: url('/moss.gif') no-repeat 50% ;
    background-size: cover;
    width: 95vw;
    min-height: 88px;
  }
  .errorGifText {
    background-color: rgba(0,0,0,0.3);
    color: #fff;
  }
</style>
