<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item
                v-for="(account, i) in $store.state.accounts"
                :key="i"
                link
                :to="'/accounts/' + account.number"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ account.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                link
                color="grey lighten-4"
            >
              <v-list-item-content>
                <v-list-item-title >
                  Add an Account
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet
            min-height="70vh"
            rounded="lg"
        >

          <v-data-table
              :headers="headers"
              :items="transactions"
              class="elevation-1"
          >
<!--            <template v-slot:item.calories="{ item }">-->
<!--              <v-chip-->
<!--                  :color="getColor(item.calories)"-->
<!--                  dark-->
<!--              >-->
<!--                {{ item.calories }}-->
<!--              </v-chip>-->
<!--            </template>-->
          </v-data-table>

        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'Accounts',
  props: ['id'],
  computed: {
    transactions: function(){
      const account = this.$store.state.accounts.find(x => x.number === this.id)

      return account ? account.transactions : []
    }
  },
  data: function(){
    return {
      headers: [
        {
          text: 'From',
          align: 'start',
          sortable: false,
          value: 'from',
        },
        { text: 'To', value: 'to' },
        { text: 'Amount', value: 'amount' },
      ],
    }
  }
}
</script>