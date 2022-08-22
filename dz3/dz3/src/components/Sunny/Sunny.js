


function Sunny (props)  {
    console.log(props.sunny);
    return(
        <div>
            <ul>
            {
                props.sunny.map((sunn, key) =>{
                return(
                    <li style={{width: '50%'}}>
                        <div>
                            {sunn.thre}
                        </div>
                    </li>
            )
            })
            }
            </ul>
        </div>
    )
}

export default Sunny;