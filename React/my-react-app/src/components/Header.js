// import './Header.css' ;
import styles from './Header.module.css';
function Header(){
    // const internalStyling={
    //     backgroundColor:"blue",
    //     color:"white",
    //     padding:"50px"
    // }
    
    return (
    <>
        {/* <h2 style={{color:"red"}}>Text Color</h2>
        <p style={internalStyling}>Para Color</p> */}
         <h2 className={styles.bigBlue}>External Styling</h2>
    
    </>
    );
}

export default Header;