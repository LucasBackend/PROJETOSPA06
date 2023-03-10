export default class Router {

page = document.querySelector('#page')

mapRouter = {}
route = ""

    add(map,path){
        this.mapRouter[map] = path
        
    }

    routes(event){

        event = event || window.event

        event.preventDefault()

        window.history.pushState({},"",event.target.href)

             
        this.handle()

        
    }

    handle(){
        const {pathname} = window.location
        this.route = this.mapRouter[pathname] || thin.mapRouter['/Pages/home.html']
        
       

        fetch(this.route).then(data=>data.text()).then(html=>{

            this.page.innerHTML = html


        })


    }






}