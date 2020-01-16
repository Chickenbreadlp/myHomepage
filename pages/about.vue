<template>
  <v-container>
    <v-layout align-center column>
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

                    <v-list-item
                      v-else
                      :key="item.title"
                      @click="openNewTab(item.link)"
                    >
                      <v-list-item-avatar v-if="typeof item.icon === 'string'">
                        <img :src="item.icon">
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md12 lg5 xl4>
            <v-card :class="this.$vuetify.breakpoint.mdAndDown ? 'mt-4' : 'ml-5'" style="overflow: hidden; height: 900px">
              <v-img src="/images/IMG_20190611_152043.jpg" height="900px" position="right">
                <v-layout
                  align-end
                  justify-start
                  fill-height
                  white--text
                >
                  <div
                    class="caption pl-1 text-box"
                  >&copy; 2019 Falk Drieschner</div>
                </v-layout>
              </v-img>
            </v-card>
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
            subtitle: "Abgeschlossen in 2019"
          },
          { divider: true },
          {
            title: 'Erweiterter Sekundarabschluss I',
            subtitle: "Abgeschlossen in 2016"
          },
          { header: 'Sprachkenntnisse' },
          {
            title: 'Deutsch',
            subtitle: "Muttersprache"
          },
          { divider: true },
          {
            title: 'Englisch',
            subtitle: "Sehr gute Kenntnisse / Fließend"
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
            subtitle: "Viel in der Ausbildung mit zu tun gehabt - Lieblingssprache für funktionelle Anwendungen",
            link: 'https://docs.microsoft.com/de-de/dotnet/csharp/tour-of-csharp/'
          },
          { divider: true, inset: true },
          {
            title: 'JavaScript',
            icon:'/icons/JS.svg',
            subtitle: "Gelernt mit statischer Web-Entwicklung, Node.JS und Nuxt.JS",
            link: 'https://nuxtjs.org/'
          },
          { divider: true, inset: true },
          {
            title: 'PHP',
            icon:'/icons/PHP-logo.svg',
            subtitle: "Wenig mit zu tun gehabt, kann mich aber schnell mit zurechtfinden",
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

<style>
  .text-box {
    -webkit-box-shadow: 0px 0px 5px 5px rgba(0,0,0,.35);
    -moz-box-shadow: 0px 0px 5px 5px rgba(0,0,0,.35);
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,.35);
    background-color: rgba(0,0,0,.35)
  }
</style>
