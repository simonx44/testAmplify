<template>
  <v-btn outlined color="black" :disabled="disabled" @click="triggerClick">
    <v-icon v-if="icon"> {{ icon }}</v-icon> <span v-else>{{ text }}</span>
  </v-btn>
</template>

<script>
export default {
  props: ["text", "disabled", "icon"],
  methods: {
    triggerClick: function () {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
