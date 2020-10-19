  
<template>

    <v-expansion-panels accordion>
      <v-expansion-panel>
        <v-expansion-panel-header class="text-overline" :v-model="[0]">Quick Actions</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list-item
              v-for="(link, i) in links"
              :key="i"
              :to="link[1]"
          >
            <v-list-item-icon>
              <v-icon v-text="link[2]"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>


              <v-list-item-title>
                {{ link[0] }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>


</template>

<script>
  export default {
      name: 'QuickAccess',
      data: () => ({
      links: [
        ['Transfer', '/transfer', 'mdi-bank-transfer'],
        ['Request', '/request', 'mdi-bank-transfer-in'],
        ['Send', '/send', 'mdi-bank-transfer-out'],
        ['Redeem', '/redeem', 'mdi-ticket-percent-outline'],
        ['Support', '/support', 'mdi-phone'],
      ],
      }),
  }
</script>