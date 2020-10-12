<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="3" xl="2" >
        <v-sheet rounded="lg">


          <QuickAccess />

        </v-sheet>
      </v-col>

      <v-col  class="card-list flex-grow-1" style="flex-direction:column">

        <v-row
            class="d-flex align-center "


        >
          <v-col
              v-for="n in 3"
              :key="n"
              class="col-12 col-lg-6 flex-grow-1"
          >
            <v-card elevation="2" >
              <v-card-text>
                <div>
                  <span class="text-h6">Primary Account  </span>
                  <span class="text-overline">...1234</span>
                </div>
                <p class="text-h2 mb-0">₳ 420</p>
                <!--            <div class="text--primary">-->
                <!--                well meaning and kindly.-->
                <!--                <br />"a benevolent smile"-->
                <!--            </div>-->
              </v-card-text>
              <v-card-actions>
                <v-btn text color="">Transfer</v-btn>
                <v-btn text color="">Transactions</v-btn>

              </v-card-actions>
            </v-card>

          </v-col>

          <v-col class="flex-grow-1 text-center">
              <v-btn
                  elevation="0"
                  color="darkgrey"
                  rounded
                  class="btn-xl"

              >
                <v-icon x-large>
                  mdi-plus
                </v-icon>

              </v-btn>

          </v-col>
        </v-row>


      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
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
import SpeedDial from "@/components/SpeedDial";

export default {
  name: "Overview",

  components: {
    SpeedDial,
    QuickAccess,
    RecentTransactions,
  },
};
</script>

<style>
.card-list > *{
    margin-bottom: 24px;
}
.card-list{
  padding-top: 0 !important;

}
.btn-xl{
  height: 96px !important;
  width: 96px !important;
  border-radius: 50% !important;

}

</style>