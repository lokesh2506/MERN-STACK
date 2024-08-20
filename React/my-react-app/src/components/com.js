
// im impoting the class component form the Applee js file

// import Apple from './Apple.js';


// function comm(){
//     return(
//         <>
//         <h3> Im from the component  folder and my name is com.js</h3>
//         <Apple/>
//         </>
//     );
// }
// export default comm;

function Com(props) {
    const { CarInfo } = props;
    const { brand, color } = CarInfo;

    return (
        <>
            <h3>I'm from the component folder and my name is com.js</h3>
            <h3>My name is {color} {brand} car</h3>
        </>
    );
}

export default Com;
