function PasswordInput (){
    const handleChange = () => {
        console.log("Entering password...");
    }

    return(
        <input type="password" onChange={handleChange} 
          placeholder="please input password" />
    )
}

export default PasswordInput;