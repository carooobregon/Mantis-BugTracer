<template>
  <section
    aria-labelledby="message-heading"
    class="
      min-w-0
      flex-1
      h-full
      flex flex-col
      overflow-hidden
      xl:order-last
      relative
    "
  >
    <div class="min-h-0 flex-1 overflow-y-auto mb-44">
      <div class="bg-white pt-5 pb-6 shadow">
        <div
          class="
            px-4
            sm:flex sm:justify-between sm:items-baseline sm:px-6
            lg:px-8
          "
        >
          <div class="sm:w-0 sm:flex-1">
            <h1 id="message-heading" class="text-lg font-medium text-gray-900">
              {{ message.project }}
            </h1>
            <p class="mt-1 text-sm text-gray-500 truncate">
              {{ message.sender }}
            </p>
          </div>

          <div
            class="
              mt-4
              flex
              items-center
              justify-between
              sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start
            "
          >
              <span
                class="
                  inline-flex
                  items-center
                  px-3
                  py-0.5
                  rounded-full
                  text-sm
                  font-medium
                  text-cyan-800
                "
                v-bind:style=" message.status == 'Closed' ? {backgroundColor : 'rgb(252 165 165)'}: {backgroundColor:'rgb(207 250 254)'}"
              >
                {{ message.status }}
              </span>
          </div>
        </div>
      </div>

      <!-- Thread section-->
      <ul role="list" class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
        <li
          v-for="item in message.items"
          :key="item.id"
          class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6"
        >
          <div class="sm:flex sm:justify-between sm:items-baseline">
            <h3 class="text-base font-medium">
              <span class="text-gray-900">{{ item.author }}</span>
              {{ " " }}
              <span class="text-gray-600">wrote</span>
            </h3>
            <p
              class="
                mt-1
                text-sm text-gray-600
                whitespace-nowrap
                sm:mt-0 sm:ml-3
              "
            >
              <time :datetime="item.datetime">{{ item.date }}</time>
            </p>
          </div>
          <div
            class="mt-4 space-y-6 text-sm text-gray-800"
            v-html="item.body"
          />
        </li>
      </ul>
    </div>
    <!-- Text area -->
    <div class="bg-white px-8 pt-5 pb-6 absolute bottom-0 inset-x-0">
      <form>
        <div class="mt-1">
          <textarea
            rows="4"
            name="comment"
            id="comment"
            class="
              shadow-sm
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>
        <div class="flex justify-end mt-3">
          <button
            type="button"
            class="
              inline-flex
              items-center
              px-3
              py-2
              border border-transparent
              text-sm
              leading-4
              font-medium
              rounded-md
              shadow-sm
              text-white
              bg-blue-600
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-blue-500
            "
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: ["message"],
};
</script>
