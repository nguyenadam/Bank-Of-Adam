  
<template>
  <v-container>
    <p class="text-overline">
      Recent Transactions
    </p>     
    <v-list>
      <template v-for="(item, index) in items">

        <v-list-item :key="index">
          <v-list-item-avatar color="blue">
            <span class="white--text headline text-center mx-auto">JC</span>
            <!-- <v-img :src="item.avatar"></v-img> -->
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle>{{item.desc ? item.date + " • " + item.desc : item.date}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-action-text v-text="item.amount"></v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>

  </v-container>        

</template>

<script>
  export default {
      name: 'RecentTransactions',
      data: function () {
        return {
          items: [
            {
              name: "Jonathan",
              amount: "$123.12",
              date: "9/11",
              // header: "sdfsdf"
            },
            {
              name: "Jonathan",
              amount: "$123.12",
              date: "9/11",
              // header: "sdfsdf"
            },
            {
              name: "Jonathan",
              amount: "$123.12",
              date: "9/11",
              desc: "THingy!"
              // header: "sdfsdf"
            },
          ],
        };
      },
  }
</script>