<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <EncomeExpence :Income="Income" :Expence="Expence" />
    <TransactionList
      :transactionList="transactionList"
      @deleteTransaction="DeleteTransaction"
    />
    <AddTransaction @AddTransaction="handleAdd" />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import EncomeExpence from "./components/EncomeExpence.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

import { computed, ref } from "vue";
import { toast } from "vue3-toastify";

const transactionList = ref([
  {
    id: 1,
    text: "Flower",
    amount: -19.99,
  },
  {
    id: 12,
    text: "Salary",
    amount: 299.97,
  },
  {
    id: 3,
    text: "Book",
    amount: -10,
  },
  {
    id: 4,
    text: "Camera",
    amount: 150,
  },
]);

localStorage.setItem("transaction", transactionList);

const total = computed(() => {
  return transactionList.value.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
});
const Income = computed(() => {
  return transactionList.value
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
});
const Expence = computed(() => {
  return transactionList.value
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
});
const handleAdd = (e) => {
  if (e.text != "" && e.amount != "") {
    transactionList.value.push({ id: Math.trunc(Math.random * 1000), ...e });
    toast.success("Success saved new trnasaction!");
  } else {
    toast.error("Success saved new trnasaction!");
  }
};

const DeleteTransaction = (e) => {
  transactionList.value = transactionList.value.filter((item) => item.id != e);
  toast.error("Delete a transaction!");
};
</script>

<style lang="scss" scoped></style>
