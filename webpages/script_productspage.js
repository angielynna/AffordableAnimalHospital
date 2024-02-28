document.addEventListener("DOMContentLoaded", function () {
    // Function to get URL parameters
    function getUrlParameter(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
  
    const sectionToHighlight = getUrlParameter('highlight');
  
    // Function to highlight section
    function highlightSection(sectionId) {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.classList.add("highlight-section");
  
        // Scroll to the highlighted section and center it in the view immediately
        targetSection.scrollIntoView({ behavior: "auto", block: "center" });
  
        // Remove the highlight class after a delay
        setTimeout(() => {
          targetSection.classList.remove("highlight-section");
        }, 1000); // Adjust the duration as needed
      }
    }
  
    // Highlight the section if the URL parameter is present
    if (sectionToHighlight) {
      highlightSection(sectionToHighlight);
    }
  
    // Add event listeners to helpful links
    const helpfulLinks = document.querySelectorAll(".bottom-nav a");
    helpfulLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        const targetSectionId = link.getAttribute("href").substring(1);
        if (targetSectionId === "carecredit" || targetSectionId === "petfinder" || targetSectionId === "poisoncontrol" || targetSectionId === "emergency-clinics") {
          event.preventDefault(); // Prevent default behavior of anchor tag
          window.location.href = 'helpfullinkspage.html?highlight=' + targetSectionId;
        }
      });
    });
  
    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll(".bottom-nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        const targetSectionId = link.getAttribute("href").substring(1);
        // Check if the clicked link is the "Homepage" link
        if (targetSectionId === "homepage") {
          // Redirect to homepage.html
          window.location.href = "homepage.html";
        } else if (targetSectionId === "about-us" || targetSectionId === "contact-info") {
          // Redirect to homepage.html and highlight the section
          window.location.href = 'homepage.html#' + targetSectionId;
        } else {
          event.preventDefault(); // Prevent default behavior of anchor tag
          highlightSection(targetSectionId);
        }
      });
    });
  });
  

// function searchFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('searchInput');
//     filter = input.value.toUpperCase();
//     ul = document.querySelector('.bottom-nav');
//     li = ul.getElementsByTagName('li');

//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }