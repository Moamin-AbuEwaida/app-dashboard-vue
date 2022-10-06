<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-4">
        <AccountDash />
      </div>
      <div class="col-8">
        <div class="row q-col-gutter-md">
          <div class="col-10">
            <q-card class="my-card q-px-sm" flat bordered>
              <q-toolbar>
                <q-icon name="fas fa-archive" class="q-mr-sm" />
                <div class="text-overline q-mr-sm">voucher</div>
                <q-badge
                  label="8"
                  rounded
                  color="green"
                  class="q-mr-sm"
                ></q-badge>
                <q-icon name="fas fa-user" class="q-mr-sm" />
                <div class="text-overline q-mr-sm">Partners</div>
                <q-badge label="6" rounded color="green" />
                <q-icon name="fas fa-shield-alt" class="q-mx-sm" />
                <div class="text-overline q-mr-sm">Support</div>
                <q-space></q-space>
                <q-btn color="green" icon="fab fa-mixcloud" label="On Left" />
              </q-toolbar>
            </q-card>
          </div>
          <div class="col-2">
            <q-card class="my-card q-px-sm" flat bordered>
              <q-toolbar class="flex flex-center column">
                <q-icon name="fas fa-ellipsis-h" class="q-mx-sm" />
              </q-toolbar>
            </q-card>
          </div>
        </div>
        <h6 class="text-weight-bolder q-ml-lg topTitle">Dashboard</h6>
        <q-toolbar class="topToolbar">
          <div class="text-overline q-mr-sm">My Game servers</div>
          <q-badge label="10" rounded color="black" class="q-mr-sm" />
          <div class="text-overline q-mr-sm">My VPS</div>
          <q-badge label="17" rounded color="grey" />
          <div class="text-overline q-mx-sm">My Root servers</div>
          <q-badge label="29" rounded color="grey" />
          <div class="text-overline q-mx-sm">My Domains</div>
          <q-badge label="5" rounded color="grey" />
          <q-space></q-space>
          <q-icon name="fas fa-ellipsis-h" class="q-mx-sm" />
        </q-toolbar>
        <div class="row q-col-gutter-md">
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card1" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Online" rounded color="green" />
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">
                Fivem Dev #256019
              </div>
              <div class="text-overline q-ml-md">185.234.43.564.32</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-md">
                  23-08-2022
                </div>
                <q-space></q-space>
                <q-btn
                  color="grey"
                  round
                  flat
                  dense
                  :icon="
                    expanded1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  "
                  @click="expanded1 = !expanded1"
                />
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded1">
                  <q-separator />
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md" />
                    <q-icon name="fas fa-laptop" class="q-mr-md" />
                    <q-icon name="far fa-credit-card" class="q-mr-md" />
                    <q-icon name="fas fa-box" class="q-mr-md" />
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card2" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Online" rounded color="green" />
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">
                UI/UX Dev #15019
              </div>
              <div class="text-overline q-ml-md">185.543.43.564.23</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-md">
                  03-06-2022
                </div>
                <q-space></q-space>
                <q-btn
                  color="grey"
                  round
                  flat
                  dense
                  :icon="
                    expanded2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  "
                  @click="expanded2 = !expanded2"
                />
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded2">
                  <q-separator />
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md" />
                    <q-icon name="fas fa-laptop" class="q-mr-md" />
                    <q-icon name="far fa-credit-card" class="q-mr-md" />
                    <q-icon name="fas fa-box" class="q-mr-md" />
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card3" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Offline" rounded color="red" />
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">
                Mobile Dev #6029
              </div>
              <div class="text-overline q-ml-md">923.234.22.671.32</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-md">
                  30-03-2022
                </div>
                <q-space></q-space>
                <q-btn
                  color="grey"
                  round
                  flat
                  dense
                  :icon="
                    expanded3 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  "
                  @click="expanded3 = !expanded3"
                />
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded3">
                  <q-separator />
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md" />
                    <q-icon name="fas fa-laptop" class="q-mr-md" />
                    <q-icon name="far fa-credit-card" class="q-mr-md" />
                    <q-icon name="fas fa-box" class="q-mr-md" />
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card4" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Online" rounded color="green" />
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">
                Graphic Designer #0939
              </div>
              <div class="text-overline q-ml-md">333.986.21.348.09</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-md">
                  15-04-2022
                </div>
                <q-space></q-space>
                <q-btn
                  color="grey"
                  round
                  flat
                  dense
                  :icon="
                    expanded1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  "
                  @click="expanded4 = !expanded4"
                />
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded4">
                  <q-separator />
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md" />
                    <q-icon name="fas fa-laptop" class="q-mr-md" />
                    <q-icon name="far fa-credit-card" class="q-mr-md" />
                    <q-icon name="fas fa-box" class="q-mr-md" />
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card5" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Offline" rounded color="red" />
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">
                CTO #02
              </div>
              <div class="text-overline q-ml-md">000.001.01.01.02</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-md">
                  01-01-2022
                </div>
                <q-space></q-space>
                <q-btn
                  color="grey"
                  round
                  flat
                  dense
                  :icon="
                    expanded5 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  "
                  @click="expanded5 = !expanded5"
                />
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded5">
                  <q-separator />
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md" />
                    <q-icon name="fas fa-laptop" class="q-mr-md" />
                    <q-icon name="far fa-credit-card" class="q-mr-md" />
                    <q-icon name="fas fa-box" class="q-mr-md" />
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card6" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar6.jpg" />
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Online" rounded color="green" />
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">
                DevOps Dev #293419
              </div>
              <div class="text-overline q-ml-md">123.456.12.826.46</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-md">
                  05-06-2022
                </div>
                <q-space></q-space>
                <q-btn
                  color="grey"
                  round
                  flat
                  dense
                  :icon="
                    expanded6 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  "
                  @click="expanded6 = !expanded6"
                />
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded6">
                  <q-separator />
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md" />
                    <q-icon name="fas fa-laptop" class="q-mr-md" />
                    <q-icon name="far fa-credit-card" class="q-mr-md" />
                    <q-icon name="fas fa-box" class="q-mr-md" />
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import AccountDash from "../components/AccountDash.vue";

export default {
  name: "HomeView",
  components: { AccountDash },
  setup() {
    return {
      expanded1: ref(false),
      expanded2: ref(false),
      expanded3: ref(false),
      expanded4: ref(false),
      expanded5: ref(false),
      expanded6: ref(false),
    };
  },
};
</script>
<style scope>
.topTitle {
  margin-top: 10px;
}
.topToolbar {
  margin-top: -40px;
}
.secCard {
  border-radius: 20px;
}
.card1 {
  background: #01e1aa;
}
.card2 {
  background: #fed8ea;
}
.card3 {
  background: #f6f8f7;
}
.card4 {
  background: #01eced;
}
.card5 {
  background: #fab1a0;
}
.card6 {
  background: #ffeaa7;
}
</style>
