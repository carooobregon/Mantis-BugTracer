<template>
  <div class="h-full flex flex-col">
    <!-- Top nav-->
    <header class="flex-shrink-0 relative h-16 bg-white flex items-center">
      <!-- Logo area -->
      <div class="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
        <a
          href="#"
          class="flex items-center justify-center h-16 w-16 bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20"
        >
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
            alt="Workflow"
          />
        </a>
      </div>

      <!-- Menu button area -->
      <div
        class="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 lg:hidden"
      >
        <!-- Mobile menu button -->
        <button
          type="button"
          class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
          @click="open = true"
        >
          <span class="sr-only">Open main menu</span>
          <MenuIcon class="block h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Desktop nav area -->
      <div
        class="hidden lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between"
      >
        <div class="min-w-0 flex-1"></div>
        <div class="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
          <div class="flex items-center space-x-8">
            <span class="inline-flex">
              <a
                href="#"
                class="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </a>
            </span>

            <Menu as="div" class="relative inline-block text-left">
              <MenuButton
                class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
              </MenuButton>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }" @click="signOut">
                      <a
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                      >
                        Cerrar Sesión
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide this `div` based on menu open/closed state -->
      <TransitionRoot as="template" :show="open">
        <Dialog
          as="div"
          class="fixed inset-0 z-40 lg:hidden"
          @close="open = false"
        >
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75"
            />
          </TransitionChild>

          <TransitionChild
            as="template"
            enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
            enter-from="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
            enter-to="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
            leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
            leave-from="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
            leave-to="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
          >
            <nav
              class="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
              aria-label="Global"
            >
              <div class="h-16 flex items-center justify-between px-4 sm:px-6">
                <a href="#">
                  <img
                    class="block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=cyan&shade=400"
                    alt="Workflow"
                  />
                </a>
                <button
                  type="button"
                  class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                  @click="open = false"
                >
                  <span class="sr-only">Close main menu</span>
                  <XIcon class="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="mt-2 max-w-8xl mx-auto px-4 sm:px-6"></div>

              <div class="border-t border-gray-200 pt-4 pb-3">
                <div class="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="user.imageUrl"
                      alt=""
                    />
                  </div>
                  <div class="ml-3 min-w-0 flex-1">
                    <div class="text-base font-medium text-gray-800 truncate">
                      {{ user.name }}
                    </div>
                    <div class="text-sm font-medium text-gray-500 truncate">
                      {{ user.email }}
                    </div>
                  </div>
                  <a
                    href="#"
                    class="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span class="sr-only">View notifications</span>
                    <BellIcon class="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
                <div class="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
                  <a
                    v-for="item in userNavigation"
                    :key="item.name"
                    @click="item.onClick"
                    class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</a
                  >
                </div>
              </div>
            </nav>
          </TransitionChild>
        </Dialog>
      </TransitionRoot>
    </header>

    <!-- Bottom section -->
    <div class="min-h-0 flex-1 flex overflow-hidden">
      <!-- Main area -->
      <main class="min-w-0 flex-1 border-t border-gray-200 xl:flex">
        <slot name="chat"></slot>
        <slot name="listing"> </slot>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
import { Auth } from "aws-amplify";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [{ name: "Cerrar Sesión", onClick: "signOut" }];

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  props: ["message"],
  methods: {
    async signOut() {
      try {
        await Auth.signOut({ global: true });
        this.$router.push({ name: "Auth" });
      } catch (error) {
        console.log("error signing out: ", error);
      }
    }
  },
  setup() {
    const open = ref(false);

    return {
      user,
      userNavigation,
      open,
    };
  },
};
</script>