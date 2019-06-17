<template>
  <v-container>
    <v-layout align-center justify-center column>
      <p class="display-1">
        Stream Countdown
      </p>
    </v-layout>

    <p>
      Stream Countdown ist eine Anwendung die es einem erlaubt einen Simplen Countdown zu erstellen und diesen in eine Text-Datei abzuspeichern.<br>
      Es ist mit Stream Countdown auch möglich die unterschiedlichen Werte des Countdowns (Minuten, Sekunden etc.) ein einer Zeile Text mit Platzhalten zu platzieren.<br>
      <br>
      Zusätzlich sollte die Anwendung eine kleine eigene Scriptsprache mitbringen, mit welcher man ja nach noch verfügbarer Zeit des Countdowns den ebend genannten Text mit Platzhaltern zu steuern.<br>
      Leider ist die Scriptsprache nie zu einem Fehlerfreien Zustand gekommen.<br>
      <br>
      Die Anwendung wurde zur verwendung mit der Streaming Software 'OBS' vorgesehen.<br>
      <br>
      <br>
      Den Funktionstüchtigen Teil der Anwendung verwende ich bis heute noch in meinen privaten Streams.
      <a href="https://github.com/Chickenbreadlp/Stream-Countdown" target="none">Github Link</a>
    </p>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Projekt: Stream Countdown'
    }
  }
}
</script>
