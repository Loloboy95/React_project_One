import "./Hello.css"
export default function HelloWorld(){
    let firstName = 'Will';
    let lastName = 'Smith';
    return <p>
        {firstName + " " + lastName}
    </p>
    console.log(firstName,lastName);


    

// let input = (<input type='text' placeholder='Name'/>);
// let button = <button>Submit</button>;
// let form = (
//   <form>
//     {input}
//     {button}
//   </form>
// );

// return form;



}