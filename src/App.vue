<template>
  <div>
    <Navbar />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <CurrenciesTable :currencies="currencies" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import CurrenciesTable from "./CurrenciesTable.vue";

export default {
  components: {
    Navbar,
    CurrenciesTable,
  },
  data() {
    return {
      currencies: [],
    };
  },
  mounted() {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => {
        this.currencies = data.data.map(currency => ({
          ...currency,
          price: this.formatUsd(currency.price_usd)
        }));
      });
  },
  methods: {
    formatUsd(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value)
    }
  }
};
</script>
