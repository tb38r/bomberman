const playerArray = []


//checks if username already exists
//returns ok if not, returns err if so 
export default function NameCheck (name){

    const resp = {}
    
    const response = playerArray.includes({name}) ? 'err': 'ok'
    

    if(playerArray.length < 4 && response === 'ok'){
        playerArray.push(name)
        console.log('PARRAY --->', playerArray);
        resp.msg = 'ok'
        resp.count = playerArray.length

        return resp

    }else if (response === 'err'){
       resp.msg = 'duplicate name'
       return resp

    }
   



}

