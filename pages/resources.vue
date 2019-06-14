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
          STEAM (kein Zugriff auf diese Infos bei der Arbeit...)
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Resourcen'
    }
  }
}
</script>
