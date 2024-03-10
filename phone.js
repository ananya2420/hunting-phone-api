
//console.log('hunting phone')

const loadPhone =async(searchText)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await res.json();
    const phones=data.data;
    //console.log(data);
    displayPhones(phones);


}
const displayPhones=async phones=>{
    //console.log(phones)


    const phoneContainer=document.getEmementById('phone container')
    //clear phone container cards before add new cards
    phoneContainer.textContent='';

    //display all buttons if these are more than 10 phones
    const showAllContainer=document.getElementById('show-all-container')

    if(phones.length>10){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    phones=phones.slce(0,10)
    console.log(phones.length);

    phones.forEach(phone=>{
        console.log(phone)

        //2.create a div
        const phoneCard=document.createElement('div');
        phoneCard.classList='card w-96 bg-base-100 shadow-xl'

        //3.set innerHTML
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button onclick="handleShowDetails('${phone.slug})" class="btn btn-primary">Show Details</button>
          </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard);
        
    });

    const handleSearch = ()=>{
        //console.log('search handle')
        const searchField=document.getElementById('search-field');
        const searchText=searchField.value;
        console.log(searchText)
        loadPhone(searchText)


    }
    //handle search recap
    /*
    const handleSearch2 = () =>{
        toggleLoadingSpinner();
        const searchField=document.getElementById('search-field2')
        const searchText=searchField.value;
        loadPhone(searchText);

    }
    */

    const toggleLoadingSpinner=() =>{
        const loadingSpinner=document.getElementById('loading-spinner')
        //loadingSpinner.classList.remove('hidden')

        if(isLoading){
            loadingSpinner.classList.remove('hidden')
        }
        else{
            loadingSpinner.classList.add('hidden')
        }
    }
   const showHandleDetails=(id)=>{
    console.log('clicked shoe detals')
   }
   //load single phone data
   const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
   const data=await res.json();
   console.log(data);
}