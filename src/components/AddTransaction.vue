<template>
  <h3>Add new transaction</h3>
  <form id="form">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="text"
        v-model="amount"
        id="amount"
        placeholder="Enter amount..."
      />
    </div>
    <button class="btn" @click.prevent="addTransaction">Add transaction</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
const amount = ref("");
const emit = defineEmits(["AddTransaction"]);

const addTransaction = () => {
  emit("AddTransaction", { text: text.value, amount: amount.value });
  text.value = "";
  amount.value = "";
};
</script>

<style lang="scss" scoped></style>
