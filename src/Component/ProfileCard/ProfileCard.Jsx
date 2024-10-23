// import './Profile.Css'


const ProfileCard = (props) => {
    return(
        <>
        <div>
            <img src={props.src} alt={props.altText} style={{ width: '200px', height: 'auto' }} />
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.location}</p>
        </div>
        </>
    )
}


export default ProfileCard;