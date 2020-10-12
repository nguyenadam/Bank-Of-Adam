<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="2">
        <v-sheet rounded="lg">
          <QuickAccess />
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="6" class="card-list">
          <v-card elevation="2">
            <v-card-text>
            <div>Primary Account</div>
            <p class="display-1 text--primary">Adam Nguyen</p>
            <p>...1234</p>
            <div class="text--primary">
                well meaning and kindly.
                <br />"a benevolent smile"
            </div>
            </v-card-text>
            <v-card-actions>
            <v-btn text color="deep-purple accent-4">Learn More</v-btn>
            </v-card-actions>
          </v-card>
          <v-card elevation="2">
            <v-card-text>
            <div>Word of the Day</div>
            <p class="display-1 text--primary">be•nev•o•lent</p>
            <p>adjective</p>
            <div class="text--primary">
                well meaning and kindly.
                <br />"a benevolent smile"
            </div>
            </v-card-text>
            <v-card-actions>
            <v-btn text color="deep-purple accent-4">Learn More</v-btn>
            </v-card-actions>
          </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-sheet rounded="lg" min-height="268">
          <RecentTransactions />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QuickAccess from "@/components/QuickAccess.vue";
import RecentTransactions from "@/components/RecentTransactions.vue";

export default {
  name: "Overview",

  components: {
    QuickAccess,
    RecentTransactions,
  },
};
</script>

<style>
.card-list > *{
    margin-bottom: 24px;
}

</style>