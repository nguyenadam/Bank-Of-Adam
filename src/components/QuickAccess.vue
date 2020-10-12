  
<template>
  <v-container>
    <p class="text-overline">
        Quick Actions
    </p>        
    <v-list-item
        v-for="link in links"
        :key="link"
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


  </v-container>        

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