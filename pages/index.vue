<template>
  <v-layout align-center justify-center column>
    <v-sheet min-width="100%">
      <v-parallax src="/images/GreenCutted.jpg" height="700">
        <v-container>
          <v-layout align-center justify-center column fill-height>
            <p class="display-2 text--elevation-5">
              Willkommen!
            </p>
          </v-layout>
          <v-layout align-end justify-start row floating>
            <p class="caption text--elevation-3">
              Bild &copy; 2018 Falk Drieschner
            </p>
          </v-layout>
        </v-container>
      </v-parallax>
    </v-sheet>

    <v-container>
      <v-layout align-center justify-center column>
        <v-flex xs10 md8 lg6>
          <div width="100%">
            <p>
              Mein Name ist Falk Drieschner, bin männlich, {{ $moment().diff($moment('1999-02-01'), 'years') }} Jahre alt und aktuell als Anwendungsentwickler tätig.<br>
              Anwendungsentwicklung ist nicht nur mein Job, sondern auch meine Leidenschaft.<br>
              In meiner Freizeit entwickle ich gerne kleinere Hilfsanwendungen und helfe bei anderen Open-Source Projekten mit.
            </p>
            <p>
              Ganz unten, auf jeder Seite, finden Sie Kontakmöglichkeiten.<br>
              Online bewege ich mich vielfach unter dem Synonym "Chickenbread", manchmal auch mit den Anhängen "lp" oder "-Designs".
            </p>
            <p>
              Ich habe ein sehr großes Interessen-Spektrum.<br>
              Soft- und Hardware, Virtualisierung und Emulation, Videobearbeitung und Streaming. Nur um ein paar Beispiele zu nennen.
            </p>
            <p>
              Hier sehen sie ein paar Projekte an denen ich mitgewirkt habe:
            </p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex sm12 md10 lg8>
          <v-card>
            <v-container grid-list-md fluid>
              <v-layout row wrap>
                <v-flex
                  v-for="n in projectInfo.length"
                  :key="n"
                  xs3
                  d-flex
                >
                  <v-hover>
                    <v-card
                      flat
                      tile
                      slot-scope="{ hover }"
                      :class="`d-flex elevation-${hover ? 8 : 0}`"
                      @click="openNewTab(projectInfo[n-1].link)"

                      style="cursor: pointer"
                    >
                      <v-img
                        :src="`/projects/${n - 1}.png`"
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
                            style="filter: none;"
                          >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-layout>
                        </template>

                        <v-layout pa-2 column fill-height :class="`${projectInfo[n-1].dark ? 'lightbox white--text': 'darkbox black--text'}`">
                          <v-spacer></v-spacer>
                          <v-flex shrink>
                            <div class="subheading">{{ projectInfo[n-1].name }}</div>
                            <div v-if="projectInfo[n-1].byLink !== ''" class="body-1">Von <a :href="projectInfo[n-1].byLink">{{ projectInfo[n-1].by }}</a></div>
                            <div v-else class="body-1">Von {{ projectInfo[n-1].by }}</div>
                          </v-flex>
                        </v-layout>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  head () {
    return {
      title: 'Homepage'
    }
  },
  data () {
    return {
      projectInfo: [
        {
          name: 'Stream Countdown für OBS',
          link: '/projects/streamCountdown',
          by: 'Mir',
          byLink: '',
          dark: false
        },
        {
          name: 'MenuAPI für C#.NET Konsole',
          link: '/projects/menuAPI',
          by: 'Mir',
          byLink: '',
          dark: true
        },
        {
          name: 'Citra v3DS Manager',
          link: '/projects/v3DSMan',
          by: 'Mir',
          byLink: '',
          dark: false
        },
        {
          name: 'ETS2/ATS Local Radio',
          link: 'https://github.com/Koenvh1/ets2-local-radio',
          by: 'Koenvh1',
          byLink: 'https://github.com/Koenvh1',
          dark: true
        }
      ]
    }
  },
  methods: {
    openNewTab (link) {
      if (typeof link === 'string' && link !== '') {
        if (link.indexOf('http') < 0) {
          this.$router.push({ path: link });
        }
        else {
          window.open(link, '_blank');
        }
      }
    }
  }
}
</script>
