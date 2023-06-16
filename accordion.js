// $(document).ready(function() {
//     const accordionData = [
//       {
//         title: "Accordion Item #1",
//         body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
//       },
//       {
//         title: "Accordion Item #2",
//         body: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
//       },
//       {
//         title: "Accordion Item #3",
//         body: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
//       }
//       // Add more items as needed
//     ];
  
//     const accordion = document.getElementById('accordion');
  
//     accordionData.forEach((item, index) => {
//       const panelId = `panelsStayOpen-collapse${index}`;
  
//       const accordionItem = document.createElement('div');
//       accordionItem.className = 'accordion-item text-bg-secondary';
  
//       const header = document.createElement('h2');
//       header.className = 'accordion-header p-2';
  
//       const button = document.createElement('button');
//       button.className = 'accordion-button collapsed text-bg-secondary fs-2';
//       button.type = 'button';
//       button.setAttribute('data-bs-toggle', 'collapse');
//       button.setAttribute('data-bs-target', `#${panelId}`);
//       button.setAttribute('aria-expanded', 'false');
//       button.setAttribute('aria-controls', panelId);
//       button.innerText = item.title;
  
//       header.appendChild(button);
  
//       const body = document.createElement('div');
//       body.id = panelId;
//       body.className = 'accordion-collapse collapse';
  
//       const bodyContent = document.createElement('div');
//       bodyContent.className = 'accordion-body fs-5';
//       bodyContent.innerHTML = item.body;
  
//       body.appendChild(bodyContent);
  
//       accordionItem.appendChild(header);
//       accordionItem.appendChild(body);
  
//       accordion.appendChild(accordionItem);
//     });
//   });