<template>
  <h3>History</h3>
  <ul class="list" id="list">
    <li
      v-for="item in transactionList"
      :key="item.id"
      :class="item.amount > 0 ? 'plus' : 'minus'"
    >
      {{ item.text }}
      <span> ${{ item.amount }}</span>
      <button class="delete-btn" @click="Delete(item.id)">x</button>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  transactionList: {
    type: Array,
    default: [],
    requied: true,
  },
});

const emit = defineEmits(["deleteTransaction"]);

const Delete = (e) => {
  emit("deleteTransaction", e);
};
</script>

<style lang="scss" scoped></style>
