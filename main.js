document
  .querySelectorAll("button")
  .forEach((item) =>
    item.addEventListener("click", (e) => console.log(e.target)),
  );

// nav tab section
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Remove active class from all links and contents
      tabLinks.forEach((item) => item.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked link and corresponding content
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});
