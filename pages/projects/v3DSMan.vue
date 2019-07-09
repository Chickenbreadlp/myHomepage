<template>
  <v-container>
    <v-layout align-center justify-center column>
      <p class="display-1">
        Citra v3DS Manager
      </p>
    </v-layout>

    <p>
      Citra v3DS Manager ist eine Anwendung, die es einem ermöglicht mehrere "Virtuelle 3DS Systeme" für den 3DS Emulator Citra zu verwalten.
      Citra emuliert einen 3DS vollständig und das inkludiert den SysNAND (internen Speicher) und die SD-Karte.<br>
      Natürlich beinhaltet der Emulierte SysNAND alle Informationen über die Konsole (Name, ID, etc.) und alle Speicherdaten der Spiele.
      Entsprechend sind es diese Daten, die von meiner Anwendung hin- und her-kopiert werden.<br>
      <br>
      Der Benutzer hat mehrere Möglichkeiten diese unterschiedlichen virtuellen Systeme zu verwalten.
      Möglich ist ein Duplizieren, Neu-Erstellen, Umbenennen und Löschen von Systemen.<br>
      <br>
      Citra v3DS Manager ist soweit mein aktuellstes Projekt.
      <a href="https://github.com/Chickenbreadlp/CitraV3DSManager" target="none">Github Link</a>
    </p>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Projekt: Citra v3DS Manager'
    }
  },
}
</script>
