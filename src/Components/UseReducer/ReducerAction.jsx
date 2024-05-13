// export default function ReducerAction(state,action){
//     switch (action.type) {
//         case 'ADD':{
//             return state+1
//         }
//         case 'SUB' :{
//             return state-1
//         }  
        
    
//         default: {
//             return state
//         }
            
//     }
// }

export default function ReducerAction(state,action){
    switch (action.type) {
           case 'INC':{
               return state+action.payload
           }
             case 'DEC' :{
                  return state-action.payload
               }  
                
            
              default: {
                   return state
               }
                    
           }
}