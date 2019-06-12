<template>
  <v-layout align-center justify-center column>
    <v-sheet min-width="100%" class="mb-4">
      <v-parallax src="/images/GreenCutted.jpg" height="600">
      </v-parallax>
    </v-sheet>
    <v-sheet color="grey lighten-5">
      <p class="display-1">
        Willkommen!
      </p>
    </v-sheet>
    <v-sheet color="grey lighten-5">
      <p>
        Mein Name ist Falk Drieschner, bin Männlich, 20 Jahre alt und aktuell Auszubildender für den Beruf "Fachinformatiker/-in Fachbereich Anwendungsentwicklung".<br>
        Anwendungsentwicklung ist nicht nur mein Job sondern auch meine Leidenschaft.<br>
        Online bewege ich mich vielfach unter dem Synonym "Chickenbread", manchmal auch mit den Anhängen "lp" oder "-Designs".
      </p>
    </v-sheet>
    <v-sheet min-width="100%" class="mb-4">
      <v-parallax src="/images/BURST20181005114253607_COVER.jpg" height="600">
      </v-parallax>
    </v-sheet>
    <v-sheet color="grey lighten-5">
      <p>
        In meiner Freizeit entwickle ich gerne kleinere Hilfsanwendungen und helfe bei anderen Open-Source Projekten mit.<br>
        Weiter unten finden Sie, Links zu Seiten, wo Sie mich finden können.
      </p>
      <p style="margin-bottom: 0;">
        Hier sehen sie ein paar Projekte an denen ich mitgewirkt habe:
      </p>
    </v-sheet>

    <v-container>
      <v-layout row justify-center>
        <v-flex sm12 md10 lg8>
          <v-card>
            <v-container grid-list-sm fluid>
              <v-layout row wrap>
                <v-flex
                  v-for="n in 4"
                  :key="n"
                  xs3
                  d-flex
                >
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="`/projects/${n - 1}/img.png`"
                      :lazy-src="`/projects/${n - 1}.png`"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-layout
                          fill-height
                          align-center
                          justify-center
                          ma-0
                        >
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-layout>
                      </template>

                      <v-layout pa-2 column fill-height class="lightbox white--text">
                        <v-spacer></v-spacer>
                        <v-flex shrink>
                          <div class="subheading">{{ projectInfo[n-1].name }}</div>
                          <div v-if="projectInfo[n-1].byLink !== ''" class="body-1">Von <a :href="projectInfo[n-1].byLink">{{ projectInfo[n-1].by }}</a></div>
                          <div v-else class="body-1">Von {{ projectInfo[n-1].by }}</div>
                        </v-flex>
                      </v-layout>
                    </v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>


    <v-sheet color="grey lighten-5">
      <v-sheet color="grey lighten-5" min-width="100%">
        <v-layout row justify-center>
          <v-btn flat icon href="https://github.com/Chickenbreadlp"><img src="/icons/GitHub-Mark.svg" width="28px"></v-btn>
          <v-btn flat icon href="https://twitter.com/Teufel904"><img src="/icons/Twitter_Logo_Blue.svg" width="32px"></v-btn>
          <v-btn flat icon href="https://steamcommunity.com/id/chickenbreadlp"><img src="/icons/Steam_Logo.svg" width="28px"></v-btn>
          <v-btn flat icon href="mailto:falk@adrieschner.de"><v-icon>email</v-icon></v-btn>
        </v-layout>
      </v-sheet>
    </v-sheet>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      projectInfo: [
        {
          name: 'Stream Countdown für OBS',
          link: '',
          by: 'Mir',
          byLink: ''
        },
        {
          name: 'MenuAPI für C#.NET Konsole',
          link: '',
          by: 'Mir',
          byLink: ''
        },
        {
          name: 'Citra v3DS Manager',
          link: '',
          by: 'Mir',
          byLink: ''
        },
        {
          name: 'ETS2/ATS Local Radio',
          link: 'https://github.com/Koenvh1/ets2-local-radio',
          by: 'Koenvh1',
          byLink: 'https://github.com/Koenvh1'
        }
      ]
    }
  }
}
</script>

<style>
  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
</style>
