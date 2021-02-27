<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-white">
      <tr>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Name
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Price
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          24h
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          7d
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Market Cap
        </th>
        <th scope="col" class="relative px-6 py-3">
          <span class="sr-only">Read more</span>
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="currency in currencies" :key="currency.id">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
              <cryptoicon :symbol="currency.symbol" size="32" />
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">
                {{ currency.name }}
              </div>
              <div class="text-sm text-gray-500">
                {{ currency.symbol }}
              </div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">
            {{ currency.price }}
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center text-sm text-red-500">
            <svg
              class="w-6 h-6 mr-2 text-red-500 fill-current"
              fill="current"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              ></path>
            </svg>
            $51,293.40
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center text-sm text-green-500">
            <svg
              class="w-6 h-6 mr-2 fill-current text-green-500"
              fill="current"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
            $51,293.40
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">$941,114,676,888</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
        </td>
      </tr>

      <!-- More items... -->
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["currencies"],
};
</script>
