//self-invoked function
(function () {

    //generics
    function filterAges<T>(ages:T[]):T[]{
        return ages.slice(0,3)
    }

    filterAges<string>(['rokaya','mohamed','doha','hussein','sleem'])
    filterAges<number>([1,2,3,4,5,6])



    // console.log(filterAges([1,2,3,4,5,6]));

  console.log("hello");
  let userName: string = "ahmed ali";
  let userAge: number = 28;
  let x:boolean = false

    //tuple
    let productCode:[string , number] = ['toshipa', 313]
    
    // Union
    let id:string|number = 38
})();

//interfaces
(function(){
    let users:object[]={
        {}
    }
})