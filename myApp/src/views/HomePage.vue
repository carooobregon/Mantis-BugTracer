<template>
  <ChatLayout :message="message">
    <template v-slot:chat>
      <MessageChat :message="message" />
    </template>

    <template v-slot:listing>
      <MessagesListing :projects="projects" />
    </template>
  </ChatLayout>
</template>

<script>
import ChatLayout from "../layouts/ChatLayout.vue";
import MessagesListing from "../components/MessagesListing.vue";
import MessageChat from "../components/MessageChat.vue";

const projects = [
  {
    id: 1,
    name: "Arboleda",
    issues: [
      {
        id: 1,
        sender: "Gloria Roberston",
        href: "#",
        date: "hace 1 dia",
        datetime: "2021-01-27T16:35",
        status: "Open",
        preview:
          "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
      },
      {
        id: 2,
        sender: "Alejandra Garza",
        href: "#",
        date: "hace 3 dia",
        datetime: "2021-01-27T16:35",
        status: "Closed",
        preview:
          "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
      },
    ],
  },
  {
    id: 2,
    name: "Cooking App",
    issues: [
      {
        id: 3,
        sender: "Eduardo Torres ",
        href: "#",
        date: "hace 6 dia",
        datetime: "2021-01-27T16:35",
        status: "Open",
        preview:
          "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
      },
    ],
  },
];

const message = {
  project: "New pricing for existing customers",
  sender: "joearmstrong@example.com",
  status: "open",
  items: [
    {
      id: 1,
      author: "Joe Armstrong",
      date: "Yesterday at 7:24am",
      datetime: "2021-01-28T19:24",
      body: "<p>Thanks so much! Can't wait to try it out.</p>",
    },
    {
      id: 2,
      author: "Monica White",
      date: "Wednesday at 4:35pm",
      datetime: "2021-01-27T16:35",
      body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
      `,
    },
    {
      id: 3,
      author: "Joe Armstrong",
      date: "Wednesday at 4:09pm",
      datetime: "2021-01-27T16:09",
      body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p>– Joe</p>
      `,
    },
  ],
};

export default {
  components: {
    ChatLayout,
    MessagesListing,
    MessageChat,
  },
  setup() {
    return {
      projects,
      message,
    };
  },
};
</script>
