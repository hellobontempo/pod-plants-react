
function PlantCard({info}){ //info vs props.info

    return (
        <div>
            <h1>{info.sci_name}</h1>
            <img src={info.img_src}/>

        </div>
    )

}

export default PlantCard