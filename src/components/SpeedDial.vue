<template>
  <v-speed-dial
      v-model="fab"
      :bottom="true"
      :right="true"
      :open-on-hover="true"
      class="iamspeed"
  >
    <template v-slot:activator>
      <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
      >
        <v-icon v-if="fab">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-menu
        </v-icon>
      </v-btn>
    </template>

    <v-tooltip left>

      <template v-slot:activator="{ on, attrs }">
        <v-btn
            fab
            dark
            small
            color="green"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <span>Left tooltip</span>
    </v-tooltip>

    <v-btn
        fab
        dark
        small
        color="indigo"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn
        fab
        dark
        small
        color="red"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: "SpeedDial",
  data: function (){
    return{
      fab: false
    }
  }
}
</script>

<style scoped>
.iamspeed{
  position: fixed !important;
  right: 48px !important;
  bottom: 48px !important;
}
</style>