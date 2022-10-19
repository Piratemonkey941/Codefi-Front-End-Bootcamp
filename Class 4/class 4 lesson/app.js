


const body      = document.body;    
const input     = document.querySelector('input[type=text]');
const overlay   = document.querySelector('.overlay');  


function showFloater() {   
    body.classList.add('show-floater'); //
}

function closeFloater() { 
    if(body.classList.contains('show-floater')) { 
    body.classList.remove('show-floater'); 
    }
}

input.addEventListener('focusin', showFloater); 
input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click', closeFloater); 

// =================================================



const bookmarksList  = document.querySelector('.bookmarks-list');               
const bookmarkForm   = document.querySelector('.bookmark-form');                
const bookmarkInput  = bookmarkForm.querySelector('input[type=text]');          
const bookmarks      =  JSON.parse(localStorage.getItem('bookmarks')) || [];     
// const appId          = '2671d44f-1157-48b1-a340-dfef8b42fa84';                  //


fillBookmarksList(bookmarks);       

function createBookmark(e) {        
    e.preventDefault();             

    const title = bookmarkInput.value;  
    const bookmark = {                   
        title: title   
       
    };

    bookmarks.push(bookmark);   
    
    console.table(bookmarks)  // providing table of item in local storage
    fillBookmarksList(bookmarks);        
    storeBookmarks(bookmarks)            
    bookmarkForm.reset();

    console.table(bookmarks);  
};

function fillBookmarksList(bookmarks = []) { 
    const bookmarksHtml = bookmarks.map((bookmark, i) => {
        return `
        <a href="#" class="bookmark" data-id="${i}"> 
        <div class="img"></div>
        <div class="title">${bookmark.title}</div>
        <span class="fa-solid fa-circle-xmark"></span>
        </a>  
     `;
   }).join('');
   bookmarksList.innerHTML = bookmarksHtml;  

    
  
} 



 


function removeBookmark(e){ 
    if (!e.target.matches('.fa-solid')) return; 

// {/* <i class="fa-solid fa-circle-xmark"></i> */}

    const index = e.target.parentNode.dataset.id; 
    bookmarks.splice(index, 1); 
    fillBookmarksList(bookmarks); 
    storeBookmarks(bookmarks); 
} 

function storeBookmarks(bookmarks = []) { 
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); 
} 


bookmarkForm.addEventListener('submit', createBookmark);
bookmarksList.addEventListener('click', removeBookmark);

 

//NOTES ====================================================================

//From function create createBookmark

    // save that bookmarks list to local storage

    // const title         = bookmarksInput.value;
    // const bookmark      = document.createElement('a');

    // bookmark.className  = 'bookmark'
    // bookmark.innerText  = title;
    // bookmark.href       = '#'
    // bookmark.target     = '_blank'
    // bookmarksList.appendChild(bookmark);
    // bookmarksList.appendChild(bookmark);

//From function fillBookmarksList 
    // let bookmarksHtml = '';
    //   for(let i = 0; i < bookmarks.length; i++) {
    //     bookmarksHtml += `
    //         <a href='#' class='bookmark'>
    //             ${bookmarks[i].title}
    //         </a>`;
    // }

    // console.log(bookmarksHtml);

    // https://www.digitalocean.com/community/tutorials/coding-for-beginners


    
//     fetch(`${apiUrl}/${url}?app_id=${appId}`)  //
//          .then(response => response.json())    //
//          .then(data => {                       //
//             console.log(data);                 //

//            const bookmark = {                   //
//                title: data.hybridGraph.title,   //
//                Image: data.hybridGraph.image,   //
//                link:  data.hybridGraph.url      //
//            };                                   //

//            console.log(bookmarks);              //
       
//            bookmarks.push(bookmark);            //
//            fillBookmarksList(bookmarks);        //
//            storeBookmarks(bookmarks)            //
//            bookmarkForm.reset();                //
//          })                                     //

//          .catch(error => { //
//             alert('there was a problem getting info'); //
//          });  //
         
// };
