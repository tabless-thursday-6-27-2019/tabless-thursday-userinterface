const profile = document.querySelectorAll('.member');
profile.forEach(profile =>{profile.addEventListener('mouseenter', function(event){
    console.log(".member");
  event.target.style.border = '8px solid grey';
})})
    
