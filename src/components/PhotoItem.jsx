function PhotoItem({data}){
    return (
        <div className="photo-card">
            <img className="avatar-user" src={data.avatar} alt="" />
            <div className="data-user">
                <h4>{data.first_name + data.last_name}</h4>
                <p>{data.email}</p>
            </div>
        </div>
    )
}

export default PhotoItem;