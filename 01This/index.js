function solve() {
   let tableBody = document.querySelector(`tbody`);
   let tableRows = document.querySelectorAll(`tbody tr`);
   tableBody.addEventListener(`click`, (event) => {
      let trRef = event.target.parentNode;
      Array.from(tableRows).map(x => {
         if (x !== trRef) {
            x.style.cssText = ``;
         }
      });
      if (!trRef.style.cssText) {
         trRef.style.cssText = `background-color: #413f5e;`;
      } else {
         trRef.style.cssText = ``;
      }
   });
}
