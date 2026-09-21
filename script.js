// ASTALUXE STUDIO

// AÑO AUTOMÁTICO

const year = document.getElementById("year");

if (year) {
  year.textContent =
    `© ${new Date().getFullYear()} Astaluxe Studio`;
}


// ANIMACIONES AL HACER SCROLL

const reveals =
  document.querySelectorAll(".reveal");

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target
            .classList
            .add("visible");

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


reveals.forEach(element => {
  observer.observe(element);
});
