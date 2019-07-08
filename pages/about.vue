<template>
  <v-container>
    <v-layout align-center justify-center column>
      <p class="display-1">
        Über Mich
      </p>
      <v-flex xs12 style="width: 100%">
        <v-layout align-center row wrap>
          <v-flex md12 lg7 xl8>
            <v-card>
              <v-card-title class="headline">
                Falk Drieschner
              </v-card-title>
              <v-card-text class="pt-0">
                <v-list two-line>
                  <template v-for="(item, index) in knwolegde">
                    <v-subheader
                      v-if="item.header"
                      :key="item.header"
                    >
                      {{ item.header }}
                    </v-subheader>

                    <v-divider
                      v-else-if="item.divider"
                      :key="index"
                      :inset="item.inset"
                    ></v-divider>

                    <v-list-tile
                      v-else
                      :key="item.title"
                      avatar
                      @click="openNewTab(item.link)"
                    >
                      <v-list-tile-avatar v-if="typeof item.icon === 'string'">
                        <img :src="item.icon">
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md12 lg5 xl4>
            <v-card :class="this.$vuetify.breakpoint.mdAndDown ? 'mt-4' : 'ml-5'" style="overflow: hidden; height: 900px;">
              <v-layout justify-end row>
                <img src="/images/IMG_20190611_152043.jpg" height="900px" style="transform: rotate(180deg);">
              </v-layout>
            </v-card>
            <!--<div class="ml-5" style="overflow: hidden; height: 900px;">
              <img src="/images/IMG_20190611_152043.jpg" height="900px" style="transform: rotate(180deg); margin-left: -650px;">
            </div>-->
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Über Mich'
    }
  },
  data () {
    return {
      knwolegde: [
          { header: 'Allgemein' },
          {
            title: 'Männlich'
          },
          { divider: true },
          {
            title: this.$moment().diff(this.$moment('1999-02-01'), 'years') + ' Jahre alt'
          },
          { header: 'Bildung' },
          {
            title: 'Ausbildung zum Fachinformatiker/-in Anwendungsentwicklung',
            subtitle: "Abgeschlossen"
          },
          {
            title: 'Erweiterter Sekundarabschluss I',
            subtitle: "Abgeschlossen"
          },
          { header: 'Sprachkenntnisse' },
          {
            title: 'Deutsch',
            subtitle: "Muttersprache"
          },
          { divider: true },
          {
            title: 'Englisch',
            subtitle: "Sehr gute Kenntnisse"
          },
          { header: 'Programmiersprachen' },
          {
            title: 'Lua',
            icon:'/icons/Lua-logo-nolabel.svg',
            subtitle: "Hauptsächlich durch ComputerCraft angelehrnt - Bisher keine nennenswerte Projekte",
            link: 'http://www.computercraft.info/forums2/'
          },
          { divider: true, inset: true },
          {
            title: 'C#',
            icon: '/icons/C_Sharp_wordmark.svg',
            subtitle: "Viel in der Ausbildung mit zu tun gehabt - Lieblingssprache für Funktionelle Anwendungen",
            link: 'https://docs.microsoft.com/de-de/dotnet/csharp/tour-of-csharp/'
          },
          { divider: true, inset: true },
          {
            title: 'JavaScript',
            icon:'/icons/JS.svg',
            subtitle: "Gelehrnt mit statischer Web-Entwicklung, Node.JS und Nuxt.JS",
            link: 'https://nuxtjs.org/'
          },
          { divider: true, inset: true },
          {
            title: 'PHP',
            icon:'/icons/PHP-logo.svg',
            subtitle: "Wenig mit zu tun gehabt, kann mich aber schnell mit zurecht finden",
            link: 'https://php.net/'
          }
        ]
    }
  },
  methods: {
    openNewTab (link) {
      if (typeof link === 'string' && link !== '')
        window.open(link, '_blank');
    }
  }
}
</script>
