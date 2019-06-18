<template>
  <v-app>
    <div class="nonWorkingNotice" :hidden="isNotIE">
      <div class="IEOnly" style="display: none;">
        Internet Explorer is not Supported! Please us a different Browser.
      </div>
      <div>
        JavaScript needs to be enabled, in order for this Page to work.
      </div>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      disable-resize-watcher
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          @click="drawer = false"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      clipped-left
      fixed
      app
      dark
      color="primary"
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link to="/" style="color: white; text-decoration: none;">
          {{ title }}
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-layout row justify-center :style="`${$route.path.indexOf('/projects') < 0 ? 'display: none;' : ''}`" class="mb-1 mt-2">
        <v-flex xs12 sm8 md6 lg4 xl3>
          <v-card  ref="projectList">
            <v-layout row justify-center>
              <v-btn flat icon to="/projects" class="projectBtn">
                <v-icon>home</v-icon>
              </v-btn>
              <!--<v-btn flat icon href="https://github.com/Chickenbreadlp/myHomepage" class="projectBtn">
                <v-icon>language</v-icon>
              </v-btn>-->
            </v-layout>

            <v-container grid-list-sm fluid class="pt-0">
              <v-layout row wrap justify-center>
                <v-flex
                  v-for="n in projects.length"
                  :key="n"
                  xs4
                  d-flex
                >
                  <v-hover>
                    <v-card
                      flat
                      tile
                      slot-scope="{ hover }"
                      :class="`d-flex elevation-${hover ? 8 : 0}`"
                      @click="$router.push({ path: '/projects/' + projects[n-1].link })"

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
                          >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-layout>
                        </template>

                        <v-layout pa-2 column fill-height :class="`${projects[n-1].dark ? 'lightbox white--text': 'darkbox black--text'}`">
                          <v-spacer></v-spacer>
                          <v-flex shrink>
                            <div class="subheading">{{ projects[n-1].name }}</div>
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
      <nuxt />
      <v-container fluid class="pt-0">
        <v-sheet color="grey lighten-5">
          <v-layout row justify-center>
            <v-btn flat icon href="https://github.com/Chickenbreadlp"><img src="/icons/GitHub-Mark.svg" width="28px"></v-btn>
            <v-btn flat icon href="https://twitter.com/Teufel904"><img src="/icons/Twitter_Logo_Blue.svg" width="42px"></v-btn>
            <v-btn flat icon href="https://steamcommunity.com/id/chickenbreadlp"><img src="/icons/Steam_Logo.svg" width="28px"></v-btn>
            <v-btn flat icon href="mailto:katzen.alphabet@gmx.net"><v-icon>email</v-icon></v-btn>
          </v-layout>
        </v-sheet>
      </v-container>
    </v-content>
    <v-footer
      fixed
      app
      class="pa-3"
    >
      <v-spacer></v-spacer>
      <span>&copy; 2019 Falk Drieschner</span>
    </v-footer>
    <v-bottom-sheet
      v-model="cookieBanner"
      inset
    >
      <v-card tile >
        <v-layout row>
          <v-card-text>
            Diese Website verwendet KEINE Cookies, um Ihre Erfahrung zu verbessern.<br>
            Die neuen Datenschutzrichtlinien werden von einer einfachen informativen Webseite ohne Nutzerdaten oder Werbung direkt erfüllt.<br>
            Durch Klicken auf "Nicht mehr Anzeigen" Stimmen sie lediglich einer Speicherung dessen zu, dass Sie dieses Banner nicht mehr sehen möchten.<br>
            <br>
            0 Werbung, 0 Tracking, 0 Nutzererkennung. So kann das Web funktionieren.
          </v-card-text>
          <div>
            <v-layout column fill-height justify-center>
              <v-btn flat color="primary" @click="cookieBanner = false">OK</v-btn>
              <v-btn flat color="green" @click="toggleCookieBanner()">Nicht mehr Anzeigen</v-btn>
            </v-layout>
          </div>
        </v-layout>
      </v-card>
    </v-bottom-sheet>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'home',
          title: 'Hallo 👋',
          to: '/'
        },
        {
          icon: 'person',
          title: 'Über Mich',
          to: '/about'
        },
        {
          icon: 'code',
          title: 'Meine Projekte',
          to: '/projects'
        },
        {
          icon: 'copyright',
          title: 'Verwendete Ressourcen',
          to: '/resources'
        }
      ],
      projects: [
        {
          name: 'Stream Countdown',
          link: 'streamCountdown',
          dark: false
        },
        {
          name: 'MenuAPI',
          link: 'menuAPI',
          dark: true
        },
        {
          name: 'Citra v3DS Manager',
          link: 'v3DSMan',
          dark: false
        }
      ],
      title: 'Falk Drieschner',
      cookieBanner: false,
      isNotIE: false
    }
  },
  mounted: function () {
    if (typeof localStorage.cookieBanner === 'string') {
      this.cookieBanner = (localStorage.cookieBanner == 'true')
    }
    else {
      this.cookieBanner = true
    }
    this.isNotIE = true;
  },
  methods: {
    toggleCookieBanner () {
      this.cookieBanner = !this.cookieBanner
      localStorage.cookieBanner = this.cookieBanner
    }
  }
}
</script>

<style>
  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
  .darkbox {
    box-shadow: 0 0 20px inset rgba(255, 255, 255, 0.5);
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, transparent 72px);
  }

  .nonWorkingNotice {
    z-index: 999;
    color: black;
    background-color: white;
  }
  _:-ms-input-placeholder, :root .IEOnly {
    display: block !important;
    z-index: 1000;
    background-color: white;
    height: 100vh;
  }
</style>
<style scoped>
  .projectBtn:before {
    background-color: rgba(0,0,0,0) !important;
  }
  .projectBtn:hover:before, .projectBtn:focus:before {
    background-color: currentColor !important;
  }
</style>
