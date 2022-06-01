<template>
  <ul class="list-group list-group-flush" id="side_menu">
    <NuxtLink to="#dashboard">
      <li class="list-menu-item">Inicio</li>
    </NuxtLink>
    <NuxtLink to="#snapshots">
      <li class="list-menu-item">Snapshots</li>
    </NuxtLink>
    <NuxtLink to="#valoracines">
      <li class="list-menu-item">Valoraciones</li>
    </NuxtLink>
    <NuxtLink to="#datasuite">
      <li class="list-menu-item">Data Suite</li>
    </NuxtLink>
    <NuxtLink to="#crowdfunding">
      <li class="list-menu-item">Crowdfunding</li>
    </NuxtLink>
  </ul>
</template>
<script>
export default {
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        // console.log(id)
        // console.log(document.querySelector(`#side_menu a[href="/#${id}"] li`))
        if (entry.intersectionRatio > 0) {
          document
            .querySelector(`#side_menu a[href="/#${id}"] li`)
            .classList.add("active");
        } else {
          document
            .querySelector(`#side_menu a[href="/#${id}"] li`)
            .classList.remove("active");
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll("section[id]").forEach(section => {
      observer.observe(section);
    });
  }
};
</script>