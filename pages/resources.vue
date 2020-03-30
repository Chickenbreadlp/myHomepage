<template>
  <v-container>
    <v-layout align-center justify-center column>
      <p class="display-1">
        Verwendete Resourcen
      </p>
    </v-layout>

    <v-card>
      <v-card-title class="headline">
        Copyright Informationen zu verwendeten Logos
      </v-card-title>
      <v-card-text>
        <p>
          TWITTER, TWEET, RETWEET and the Twitter logo are trademarks of Twitter, Inc. or its affiliates.
        </p>
        <p>
          GITHUB®, the GITHUB® logo design, OCTOCAT® and the OCTOCAT® logo design are exclusive trademarks registered in the United States by GitHub, Inc.
        </p>
        <p>
          Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.
        </p>
      </v-card-text>
    </v-card>

    <v-card class="mt-3">
      <v-card-title class="headline">
        Verwendete Module
        <v-spacer />
        <v-text-field
          v-model="tableSearch"
          append-icon="mdi-magnify"
          label="Suchen"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="packages"
          :expanded.sync="expand"
          show-expand
          single-expand
          :search="tableSearch"
          item-key="name"
          class="elevation-1"
          must-sort
        >
          <template v-slot:item.version="props">
            <div class="text-xs-right">{{ props.item.version }}</div>
          </template>
          <template v-slot:item.author="props">
            {{ props.item.author.name }}
          </template>
          <template v-slot:item.act="props">
            <v-tooltip top :disabled="typeof props.item.homepage !== 'string'">
              <template v-slot:activator="{ on }">
                <v-btn
                  :disabled="typeof props.item.homepage !== 'string'"
                  v-on="on"
                  small
                  icon
                  :href="props.item.homepage"
                >
                  <v-icon>mdi-web</v-icon>
                </v-btn>
              </template>
              <span>Webseite</span>
            </v-tooltip>
            <v-tooltip top :disabled="props.item.licenseText === ''">
              <template v-slot:activator="{ on }">
                <v-btn
                  :disabled="props.item.licenseText === ''"
                  v-on="on"
                  small
                  icon
                  @click="showLicenseDialog(props.item)"
                >
                  <v-icon>mdi-flag</v-icon>
                </v-btn>
              </template>
              <span>Lizenztext anzeigen</span>
            </v-tooltip>
          </template>
          <template v-slot:expanded-item="props">
            <td :colspan="props.headers.length" v-html="props.item.description"></td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <v-dialog
      v-model="licenseDialog.show"
      max-width="700px"
      scrollable
    >
      <v-card>
        <v-card-title class="headline">
          Lizenztext von '{{ licenseDialog.packageName }}'
        </v-card-title>
        <v-card-text v-html="licenseDialog.licenseText" />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Resourcen'
    }
  },
  data () {
    return {
      packages: require('~/assets/AllPackages.json'),

      expand: [],
      headers: [
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'Version', value: 'version', width: '100px' },
        { text: 'Autor', align: 'left', value: 'author', width: '260px' },
        { text: 'Lizenz', align: 'left', value: 'license', width: '260px' },
        { text: '', value: 'act', sortable: false, width: '120px' }
      ],
      tableSearch: '',

      licenseDialog: {
        show: false,
        packageName: '',
        license: '',
        licenseText: ''
      }
    }
  },
  methods: {
    showLicenseDialog(moduleData) {
      this.licenseDialog = {
        show: true,
        packageName: moduleData.name,
        license: moduleData.license,
        licenseText: moduleData.licenseText.split('\n').join('<br>')
      }
    }
  }
}
</script>
