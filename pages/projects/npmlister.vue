<template>
  <v-container>
    <v-layout align-center justify-center column>
      <p class="display-1">
        npmLister
      </p>
    </v-layout>

    <p>
      npmLister ist meine erste Node.JS Anwendung die ich geziehlt für den einsatzt mit npx entwickelt habe.<br>
      npx ist der Name für den sogennannten Node Package Runner, er führt Scripte von npm (Node Package Manager) aus.<br>
      Die Idee hinter npx ist es, dass man kleinere Node Anwendungen nicht mehr auf dem System installieren muss, wenn man diese nicht ständig braucht.<br>
      <br>
      npmLister erstellt eine JSON mit allen installierten Packeten innerhalb eines Projektes.<br>
      Die erstellte Liste lässt sich wahlweise als Array oder als Objekt ausgeben, wobei beim letzteren die Packetnamen als Schlüssel fungieren.<br>
      Bei Bedarf kann auch ein alternativer Pfad für das Projekt angegeben werden, sowie die Liste entweder als JSON Datei auf der Festplatte speichern oder in der Konsole ausgeben lassen.
      <a href="https://github.com/Chickenbreadlp/npmLister" target="none">Github Link</a>
      <a href="https://www.npmjs.com/package/npmlister" target="none">NPM Link</a>
    </p>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Projekt: npmLister'
    }
  },
}
</script>
