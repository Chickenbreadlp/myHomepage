<template>
  <v-app>
    <div class="nonWorkingNotice" :hidden="isNotIE">
      <div class="IEOnly" style="display: none;">
        <div style="margin-bottom: 20px">
          Um die Vollständige Seite sehen zu können, wechseln sie bitte den Browser auf einen aus der folgenden Auswahl:<br>
          <ul>
            <li><a href="https://www.microsoftedgeinsider.com/">Microsoft Edge Insider</a> (Persönliche Empfehlung)</li>
            <li><a href="https://www.mozilla.org/firefox/new/">Mozilla Firefox</a></li>
            <li><a href="https://www.google.com/chrome/">Google Chrome</a></li>
            <li><a href="https://www.opera.com/">Opera</a></li>
            <li><a href="https://vivaldi.com/">Vivaldi</a></li>
            <li><a href="https://brave.com">Brave</a></li>
          </ul>
        </div>
        <div style="margin-bottom: 30px">
          <p class="display-1">
            Über Mich
          </p>

          <div style="float: right; width: 25%">
            <div style="overflow: hidden">
              <img src="/images/IMG_20190611_152043.jpg" width="195%" style="transform: rotate(180deg); float: right">
            </div>
          </div>

          <p class="headline">Allgemein</p>
          <div>
            <p class="subheading">Falk Drieschner</p>
          </div>
          <hr width="600px" align="left">
          <div>
            <p class="subheading">Männlich</p>
          </div>
          <hr width="600px" align="left">
          <div>
            <p class="subheading">
              {{ this.$moment().diff(this.$moment('1999-02-01'), 'years') }} Jahre alt
            </p>
          </div>

          <p class="headline">Bildung</p>
          <div>
            <div class="subheading">Ausbildung zum Fachinformatiker/-in Anwendungsentwicklung</div>
            <p class="grey--text text--darken-1">
              2019 - Abgeschlossen
            </p>
          </div>
          <hr width="600px" align="left">
          <div>
            <div class="subheading">Erweiterter Sekundarabschluss I</div>
            <p class="grey--text text--darken-1">
              2016 - Abgeschlossen
            </p>
          </div>

          <p class="headline">Sprachkenntnisse</p>
          <div>
            <div class="subheading">Deutsch</div>
            <p class="grey--text text--darken-1">
              Muttersprache
            </p>
          </div>
          <hr width="600px" align="left">
          <div>
            <div class="subheading">Englisch</div>
            <p class="grey--text text--darken-1">
              Sehr gute Kenntnisse / Fließend
            </p>
          </div>

          <p class="headline">Programmiersprachen</p>
          <div>
            <div class="subheading"><a href="http://www.computercraft.info/forums2/" rel="noopener noreferrer" target="_blank">Lua</a></div>
            <p class="grey--text text--darken-1">
              Hauptsächlich durch ComputerCraft angelehrnt - Bisher keine nennenswerte Projekte
            </p>
          </div>
          <hr width="600px" align="left">
          <div>
            <div class="subheading"><a href="https://docs.microsoft.com/de-de/dotnet/csharp/tour-of-csharp/" rel="noopener noreferrer" target="_blank">C#</a></div>
            <p class="grey--text text--darken-1">
              Viel in der Ausbildung mit zu tun gehabt - Lieblingssprache für funktionelle Anwendungen
            </p>
          </div>
          <hr width="600px" align="left">
          <div>
            <div class="subheading"><a href="https://nuxtjs.org/" rel="noopener noreferrer" target="_blank">JavaScript</a></div>
            <p class="grey--text text--darken-1">
              Gelernt mit statischer Web-Entwicklung, Node.JS und Nuxt.JS
            </p>
          </div>
          <hr width="600px" align="left">
          <div>
            <div class="subheading"><a href="https://php.net/" rel="noopener noreferrer" target="_blank">PHP</a></div>
            <p class="grey--text text--darken-1">
              Wenig mit zu tun gehabt, kann mich aber schnell mit zurechtfinden
            </p>
          </div>

          <p class="headline">Kontakt</p>
          <div>
            <p class="subheading">
              <a href="https://github.com/Chickenbreadlp" rel="noopener noreferrer" target="_blank">GitHub</a>
              <a href="https://xing.com/profile/Falk_Drieschner" rel="noopener noreferrer" target="_blank">Xing</a>
              <a href="https://twitter.com/Teufel904" rel="noopener noreferrer" target="_blank">Twitter</a>
              <a href="https://steamcommunity.com/id/chickenbreadlp" rel="noopener noreferrer" target="_blank">Steam</a>
              <a href="mailto:webmaster@fdrieschner.de">E-Mail</a>
            </p>
          </div>
        </div>
        <div class="IEFooter">
          &copy; 2019 Falk Drieschner
        </div>
      </div>
      <div>
        Diese Seite benötigt JavaScript für die korrekte Funktionsweise.
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
    <v-content class="NotIE">
      <v-layout row justify-center :style="`${$route.path.indexOf('/projects') < 0 ? 'display: none;' : ''}`" class="mb-1 mt-2">
        <v-flex xs12 sm8 md6 lg4 xl3>
          <v-card  ref="projectList">
            <v-layout row justify-center>
              <v-btn flat icon to="/projects" class="projectBtn">
                <v-icon>home</v-icon>
              </v-btn>
              <v-tooltip bottom>
                <v-btn
                  slot="activator"
                  flat
                  icon
                  href="https://github.com/Chickenbreadlp/myHomepage"
                  class="projectBtn"
                >
                  <v-icon>language</v-icon>
                </v-btn>
                <span>Quellcode dieser Webseite</span>
              </v-tooltip>
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
            <v-btn flat icon href="https://github.com/Chickenbreadlp" rel="noopener noreferrer" target="_blank">
              <img src="/icons/GitHub-Mark.svg" width="28px">
            </v-btn>
            <v-btn flat icon href="https://xing.com/profile/Falk_Drieschner" rel="noopener noreferrer" target="_blank">
              <img src="/icons/icon-xing.svg" width="60px">
            </v-btn>
            <v-btn flat icon href="https://twitter.com/Teufel904" rel="noopener noreferrer" target="_blank">
              <img src="/icons/Twitter_Logo_Blue.svg" width="42px">
            </v-btn>
            <v-btn flat icon href="https://steamcommunity.com/id/chickenbreadlp" rel="noopener noreferrer" target="_blank">
              <img src="/icons/Steam_Logo.svg" width="28px">
            </v-btn>
            <v-btn flat icon href="mailto:webmaster@fdrieschner.de">
              <v-icon>email</v-icon>
            </v-btn>
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
    position: fixed;
    z-index: 999;
    color: black;
    background-color: white;
    width: 100vw;
  }

  @media screen and (min-width:0\0) {
    .nonWorkingNotice {
      width: calc(100vw - 17px);
    }
    .IEOnly {
      display: block !important;
      z-index: 1000;
      background-color: white;
      height: 100vh;
      overflow-y: scroll;
      padding: 10px;
    }
    .IEFooter {
      position: fixed;
      bottom: 0;
      right: 17px;
      left: 0;

      height: 20px;
      padding-right: 5px;

      background-color: #ccc;

      text-align: right;
    }

    .NotIE {
      display: none !important;
      overflow: hidden;
    }
  }

  .text--elevation-3 {
    text-shadow:
    0px 3px 3px rgba(0,0,0,0.2),
    0px 3px 4px rgba(0,0,0,0.14),
    0px 1px 8px rgba(0,0,0,0.12);
  }
  .text--elevation-5 {
    text-shadow:
    0px 3px 5px rgba(0,0,0,0.2),
    0px 5px 8px rgba(0,0,0,0.14),
    0px 1px 14px rgba(0,0,0,0.12)
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
