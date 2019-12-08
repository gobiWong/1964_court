import CourtBgc from '@/components/CourtBgc.vue'
import Child from '@/views/Child.vue'
import Father from '@/views/Father.vue'
import View1 from '@/views/View1.vue'
import View2 from '@/views/View2.vue'
import View3 from '@/views/View3.vue'
import Home from '@/views/Home.vue'

function loadView(view){
return ()=>import(`@/views/${view}.vue`)
}
const routes =
  [
    
    {
      path: '/view2',
      name: 'view2',
      component: View2
    },
    
    {
      path: '/parent/:id',
      name: 'parent',
      component: Father,
      children:[{
        path: 'child',
        name: 'child',
        component: Child,
      }]
    },
    {
      path: '/',
      name: 'Home',
      component:Home
    
    }
    
  ]



  export default routes