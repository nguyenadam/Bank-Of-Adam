<template>
  <v-app id="inspire">
    <v-app-bar
      app
      flat
    >
      <v-avatar
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
          :to="link[1]"
        >
          {{ link[0] }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="">
        <router-view></router-view>

    </v-main>

  </v-app>
</template>

<script>

  import SpeedDial from "@/components/SpeedDial";
  export default {
    components: {SpeedDial},
    data: () => ({
      links: [
        ['Overview', '/'],
        ['Accounts', '/accounts'],
        ['Rewards', '/rewards'],
      ],
    }),
  }
</script>