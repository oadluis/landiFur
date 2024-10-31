const linksHeader = document.querySelectorAll(".links");

function scrollSmooth() {
  linksHeader.forEach((link) => {
    addEventListener("click", function () {
      console.log(link);
      e.preventDefault();
      const sectionTargetID = link.href.substring(link.href.indexOf("#") + 1);
      console.log(sectionTargetID);
      const sectionTarget = document.getElementById(`${sectionTargetID}`);
      console.log(sectionTarget);

      sectionTarget.scrollIntoView({
        block: start,
        behavior: "smooth",
      });
    });
  });
}
scrollSmooth();
