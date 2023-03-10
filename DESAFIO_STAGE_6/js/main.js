import Router from "./router.js"
const homePage = document.querySelector('#homepage')
const universePage = document.querySelector('#universepage')
const explorerPage = document.querySelector('#explorerpage')
const pageSpa = document.querySelector('#page')
const body = document.querySelector('body')
const navHome = document.querySelector('#homepage')
const navUniverse = document.querySelector('#universepage')
const navExplorer = document.querySelector('#explorerpage')


const router = new Router()

router.add('/home','/Pages/home.html')
router.add('/Universe','/Pages/universe.html')
router.add('/Explorer','/Pages/explorer.html')

window.addEventListener('load',()=>{

window.history.pushState({},"","/home")
router.routes()


})

const controls = {
 
    homePage: function homePage(){
        pageSpa.classList.remove('universeAtual')
        pageSpa.classList.remove('explorerAtual')

        body.classList.remove('imgUniverse')
        body.classList.remove('imgExplorer')

        navHome.classList.add('AtualNav')
        navUniverse.classList.remove('AtualNav')
        navExplorer.classList.remove('AtualNav')

    },

    universePage: function universePage(){
        pageSpa.classList.add('universeAtual')
        body.classList.add('imgUniverse')
        body.classList.remove('imgExplorer')
        navUniverse.classList.add('AtualNav')
        navHome.classList.remove('AtualNav')
        navExplorer.classList.remove('AtualNav')

    },

    explorerPage: function explorerPage(){
        pageSpa.classList.add('explorerAtual')
        pageSpa.classList.remove('universeAtual')
        body.classList.remove('imgUniverse')
        body.classList.add('imgExplorer')

        navUniverse.classList.remove('AtualNav')
        navHome.classList.remove('AtualNav')
        navExplorer.classList.add('AtualNav')


    }


}


homePage.addEventListener('click',()=>{
    router.routes()
    controls.homePage()
})





universePage.addEventListener('click',()=>{
    router.routes()
    controls.universePage()


})

explorerPage.addEventListener('click',()=>{
    router.routes()
    controls.explorerPage()





})

window.onpopstate = ()=>{ 
    router.handle()

    console.log(window.location.pathname)

    if(window.location.pathname=='/home'){
        controls.homePage()
    }
    
    if (window.location.pathname=='/Universe') {
        controls.universePage()
    } 
    
    if(window.location.pathname=='/Explorer') {
        controls.explorerPage()
    }



   

    
}
