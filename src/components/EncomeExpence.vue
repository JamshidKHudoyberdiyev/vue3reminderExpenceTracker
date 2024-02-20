<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <div id="money-plus" class="money plus">${{ Income }}</div>
    </div>
    <div>
      <h4>Expence</h4>
      <div id="money-minus" class="money minus">-${{ Expence }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  Expence: {
    type: Number,
  },
  Income: {
    type: Number,
  },
});
</script>

<style lang="scss" scoped></style>
