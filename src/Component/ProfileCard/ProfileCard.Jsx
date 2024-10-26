import './Profile.Css'


const ProfileCard = (props) => {
    return(
        <>
        <div className='card'>
            <img src={props.src} alt={props.altText} className="profile-image" />
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.location}</p>
        </div>
        </>
    )
}


export default ProfileCard;