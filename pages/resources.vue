<template>
  <v-container>
    <v-layout align-center justify-center column>
      <p class="display-1">
        Verwendete Resourcen
      </p>
    </v-layout>

    <v-card>
      <v-card-title class="headline">
        Copyright Notices von GitHub, Twitter und Steam:
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
        Verwendete Ressourcen:
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="packages"
          :expand="expand"
          item-key="name"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <tr @click="props.expanded = !props.expanded">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.version }}</td>
              <td>{{ props.item.author.name }}</td>
              <td>{{ props.item.license }}</td>
              <td>
                <v-btn
                  :disabled="typeof props.item.homepage !== 'string'"
                  small
                  icon
                  :href="props.item.homepage"
                >
                  <v-icon>language</v-icon>
                </v-btn>
                <v-btn
                  :disabled="props.item.licenseText === ''"
                  small
                  icon
                  @click="showLicenseDialog(props.item)"
                >
                  <v-icon>flag</v-icon>
                </v-btn>
              </td>
            </tr>
          </template>
          <template v-slot:expand="props">
            <v-card flat>
              <v-card-text>{{ props.item.description }}</v-card-text>
            </v-card>
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
          Lizenstext von {{ licenseDialog.packageName }}
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

      expand: false,
      headers: [
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'Version', value: 'version' },
        { text: 'Autor', align: 'left', value: 'author' },
        { text: 'Lizens', align: 'left', value: 'license' },
        { text: '', value: 'name', sortable: false }
      ],

      licenseDialog: {
        show: false,
        packageName: '',
        license: '',
        licenseText: ''
      }
    }
  },
  mounted: function () {
    console.log(this.packages)
  },
  methods: {
    showLicenseDialog(moduleData) {
      this.licenseDialog = {
        show: true,
        packageName: moduleData.name,
        license: moduleData.license,
        licenseText: moduleData.licenseText.split('\n').join('<br>')
      }
      console.log(this.licenseDialog)
    }
  }
}
</script>
