<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-4">
        <AccountDash />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AccountDash from "../components/AccountDash.vue";

export default {
  name: "HomeView",
  components: { AccountDash },
};
</script>
