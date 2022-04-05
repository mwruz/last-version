// CHAIRMANS TABS 

let chairmanItem = document.querySelectorAll('.chairmans-item');

chairmanItem.forEach(item => {
  let chairmenInformation = item.querySelector('.chairman-information');
  let chairmanBtns = chairmenInformation.querySelector('.chairmans-btns');
  let chairmanBtn = chairmanBtns.querySelectorAll('button');
  let chairmanContent = item.querySelector('.chairman-information-content');
  let chairmanText = item.querySelectorAll('.chairman-text');
  let x=false;
  let y=false;

  chairmanBtn.forEach((btn, index) => {
    btn.addEventListener('click', ()=>{
      if(index==0) {
        x=true;
      } 
      if(index==1) {
        y=true;
      } 
    

      chairmanItem.forEach(() => {
        chairmanText.forEach(text => {
          text.classList.remove('chairman-text-active');
        });

        chairmanBtn.forEach(chairBtn => {
          chairBtn.classList.remove('chairman-btn-active');

          if(x>2) {
            chairmanContent.classList.remove('chairman-information-content-active');
            console.log(x);
            console.log(y);
          } 
        })
      })
      


      chairmanContent.classList.add('chairman-information-content-active');
      chairmanText[index].classList.add('chairman-text-active');
      btn.classList.add('chairman-btn-active');
      console.log(btn);
    })

  })
})