const profile = document.querySelectorAll('.member');
profile.forEach(profile =>{profile.addEventListener('mouseenter', function(event){
    console.log(".member");
  event.target.style.border = '4px solid #E4BE4D';
})})
    
