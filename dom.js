//-------Tag select with Dom---------

const blogTitles = document.getElementsByTagName('h3');

for(const title of blogTitles){
    //----------change the valu in h3
    title.innerText = "I love Javascript"

   title.style.color ="red"
    
}


//-------ID select with Dom---------
const blogDetails = document.getElementById('first-detail')
blogDetails.style.cssText = "background:green; border:red 4px solid; color:white; padding:10px; font-size:20";


//========creat blog=========

const article = document.createElement('article')
article.classList.add('main')
const h3= document.createElement('h3')
h3.innerText = "My First Blog Created By Students"


const p= document.createElement('p')
p.innerText = "Culpa reiciendis recusandae ullam a ea officiis dolor"

article.appendChild(h3);
article.appendChild(p);

const diiv = document.getElementById("article-main");
diiv.appendChild(article)


//-------Class select with Dom---------
const bloges = document.getElementsByClassName('main')
for(const bloge of bloges){
    bloge.style.cssText ="background:blue; border:black 3px solid; color:white; padding:5px;";

}








