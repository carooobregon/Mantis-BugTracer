<template>
  <aside class="hidden xl:block xl:flex-shrink-0 xl:order-first">
    <div
      class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100"
    >
      <div class="flex-shrink-0">
        <div class="h-16 bg-white px-6 flex flex-col justify-center">
          <div class="flex items-baseline space-x-3">
            <h2 class="text-lg font-medium text-gray-900">Inbox</h2>
            <p class="text-sm font-medium text-gray-500">
              {{ projects[0].issues.length }} messages
            </p>
          </div>
        </div>
        <div
          class="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500"
        >
          Sorted by date
        </div>
      </div>
      <nav aria-label="Message list" class="min-h-0 flex-1 overflow-y-auto">
        <div v-for="project in projects" :key="project.id">
          <h6 class="projectTitle">{{ project.name }}</h6>
          <ul
            role="list"
            class="border-b border-gray-200 divide-y divide-gray-200"
          >
            <li
              v-for="issues in project.issues"
              :key="issues.id"
              class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
            >
              <div class="flex justify-between space-x-3">
                <div class="min-w-0 flex-1">
                  <a :href="issues.href" class="block focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900 truncate">
                      {{ issues.sender }}
                    </p>
                    <p class="text-sm text-gray-500 truncate">
                      Issue #{{ issues.id }}
                    </p>
                  </a>
                </div>
                <time
                  :datetime="issues.datetime"
                  class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                  >{{ issues.date }}</time
                >
                <div
                  class="mt-4 flex justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start"
                >
                  <span
                    style="width:20px height:15px"
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium text-cyan-800"
                    v-bind:style="
                      issues.status == 'Closed'
                        ? { backgroundColor: 'rgb(252 165 165)' }
                        : { backgroundColor: 'rgb(207 250 254)' }
                    "
                  >
                    <p>
                      {{ issues.status }}
                    </p>
                  </span>
                </div>
              </div>
              <div class="mt-1">
                <p class="line-clamp-2 text-sm text-gray-600">
                  {{ issues.preview }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["projects"],
};
</script>

<style scoped>
.projectTitle {
  color: #eaeaea;
  padding: 0.7rem 1.5rem;
  margin: 0;
  background-color: #263060;
}
</style>
