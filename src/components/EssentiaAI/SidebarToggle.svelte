<script>
  import Sidebar from "@/icons/svelte/sidebar.svelte";
  import NewChat from "@/icons/svelte/new-chat.svelte";
  import Tooltip from "@/components/Tooltip.svelte";

  export let toggleSidebar;
  export let createNewChat;
  export let sidebarOpen;
</script>

{#if !sidebarOpen}
  <div
    class="flex flex-row items-center justify-center fixed top-20 left-[1px] p-3 rounded-r-xl bg-white dark:bg-base-dark shadow-medium origin-left slide-animation-in"
  >
    <Tooltip
      text="Abrir barra lateral"
      position="-translate-x-6"
      origin="origin-top-left"
      delay="delay-150"
    >
      <button
        on:click={toggleSidebar}
        class="h-10 rounded-xl px-2 text-base-color-h dark:text-base-color-dark-h hover:bg-gray-200 dark:hover:bg-base-full-dark"
      >
        <Sidebar />
      </button>
    </Tooltip>
    <Tooltip text="Nuevo chat" position="-translate-x-1/2" delay="delay-150">
      <button
        on:click={createNewChat}
        class="h-10 rounded-xl px-2 text-base-color-h dark:text-base-color-dark-h hover:bg-gray-200 dark:hover:bg-base-full-dark"
      >
        <NewChat />
      </button>
    </Tooltip>
  </div>
{/if}

<style>
  .slide-animation-in {
    animation: slide-in 0.3s ease;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
