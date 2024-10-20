import './Profile.Css'


const ProfileCard = (props) => {
    return(
        <>
        <div>
            <img>{props.profileImage}</img>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.location}</p>
        </div>
        </>
    )
}


export default ProfileCard