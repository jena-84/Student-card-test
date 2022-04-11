// let  paramStr = window.location.href;
// let  url = new URL(paramStr);
// let  id = url.searchParams.get('id');
// console.log(id)
let xhr = new XMLHttpRequest();
let xhrObj;
xhr.open('GET', "https://6221e286666291106a161556.mockapi.io/api/osc/getMockLeads/leads",true)
xhr.responseType ="text";
xhr.send(null);
xhr.onload = function(){
    if(xhr.status === 200){
        xhrObj = JSON.parse(xhr.responseText)
          populateContents(xhrObj)
        }
  } 
  let profileCard = document.getElementById("profile") 
  let option = document.getElementById('option');

  function  populateContents(obj){
    
      for(let i=0 ; i < obj.length; i++) {
           option.innerHTML = option.innerHTML + '<option value="' + 
           obj[i].id + '">' + obj[i].name +'</option>'  
          }
      option.addEventListener("change",eve => {
        if(profileCard.style.display !== "block"){
            profileCard.style.display = "block";
          }
        //console.log(eve.target.value)
        let val = eve.target.value;
        //console.log(val)
        document.getElementById('avatar').src= obj[val-1].avatar;
        document.getElementById('person-name').innerHTML = obj[val-1].name;
        document.getElementById('title').innerHTML = obj[val-1].title;
        document.getElementById('student-id').innerHTML =obj[val-1].student_id;
        document.getElementById('complete-course').innerHTML = obj[val-1].completed_courses;
        document.getElementById('course-status').innerHTML = obj[val-1].enrolment_status;
        document.getElementById('email').innerHTML = `Email: ${obj[val-1].email}`;
        document.getElementById('tel').innerHTML = ` Tel: ${obj[val-1].telephone}`;
        document.getElementById('aboutme').innerHTML = obj[val-1].profile_description;
        document.getElementById('current-course').innerHTML = obj[val-1].course_title;
        
      const photos = document.querySelectorAll('.gallery__img')
        for(let i=0; i < photos.length; i++){
          let photo = photos[i]
          loadImage(photo)

          // let img = obj[val-1].images
            //for(let j = 0; j < arr.length; j ++){

               //photo.src= arr[i]
          //     console.log(photo.src)
               // } 
              //console.log("------")
              }  
         }) 
            
    }
    function closeContents(){
    profileCard.style.display="none"
    }

    function loadImage(photo){
       const url = "https://6221e286666291106a161556.mockapi.io/api/osc/getMockLeads/leads";
       fetch(url)
       .then(response => {
         return response.json(); 
       })
       .then(data =>{
         let persons = data
         //console.log(persons.legth)
         persons.map(person =>{
           let arrImages= person.images
           //console.log(arrImages.length)
           for(let i = 0; i < arrImages.length; i++){
              // arr.push(imges[i])
               photo.src = arrImages[i]
           }          
         
         })
       })
    }
  


  // function populateOption(option,obj){

  //   option.addEventListener("change", (eve)=>{
  //   if(profileCard.style.display !== "block"){
  //       profileCard.style.display = "block";
  //     }
  //   //console.log(eve.target.value)
  //   let val = eve.target.value;
  //   //console.log(val)
  //         document.getElementById('avatar').src= obj[val-1].avatar;
  //         document.getElementById('person-name').innerHTML = obj[val-1].name;
  //         document.getElementById('title').innerHTML = obj[val-1].title;
  //         document.getElementById('student-id').innerHTML =obj[val-1].student_id;
  //         document.getElementById('complete-course').innerHTML = obj[val-1].completed_courses;
  //         document.getElementById('course-status').innerHTML = obj[val-1].enrolment_status;
  //         document.getElementById('email').innerHTML = `Email: ${obj[val-1].email}`;
  //         document.getElementById('tel').innerHTML = ` Tel: ${obj[val-1].telephone}`;
  //         document.getElementById('aboutme').innerHTML = obj[val-1].profile_description;
  //         document.getElementById('current-course').innerHTML = obj[val-1].course_title;

  //   const photos = document.querySelectorAll('.gallery__img')
  //     for(let i=0; i < photos.length; i++){
  //         let photo = photos[i]
  //         let img = obj[val-1].images
  //         for(let j= 0; j < img.length; j ++){
  //               //photos.src = `${"http://placeimg.com/640/480/people"}/${j}}`
  //           photo.src= img[j]+j
  //           console.log(photo.src)
  //           } 
  //         console.log("------")
  //           }
  //         })
        
  // }

  //----------------------
     //console.log(xhrObj[0])
        // document.getElementById('avatar').src= obj[0].avatar;
        // document.getElementById('person-name').innerHTML = obj[0].name;
        // document.getElementById('title').innerHTML = obj[0].title;
        // document.getElementById('student-id').innerHTML =obj[0].student_id;
        // document.getElementById('complete-course').innerHTML = obj[0].completed_courses;
        // document.getElementById('course-status').innerHTML = obj[0].enrolment_status;
        // document.getElementById('email').innerHTML = `Email: ${obj[0].email}`;
        // document.getElementById('tel').innerHTML = ` Tel: ${obj[0].telephone}`;
        // document.getElementById('aboutme').innerHTML = obj[0].profile_description;
        // document.getElementById('current-course').innerHTML = obj[0].course_title;
        //---------------
        // const photos = document.querySelectorAll('.gallery__img')
        //   for(let i=0; i < photos.length; i++){
        //       let photo = photos[i]
        //           let img = obj[0].images
        //       for(let j= 0; j < img.length; j ++){
        //         photo.src = `${"http://placeimg.com/640/480/people"}/${j}}`
        //       } 
        //   }
      // //------------------------------

  


    