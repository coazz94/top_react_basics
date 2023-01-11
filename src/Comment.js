
const Avatar = (props) => {
    return (
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    )
}

const Userinfo = (props) => {
    return(
        <div className="UserInfo">
        <Avatar user={props.user}/>
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    </div>
    )
}

const Comment = (props) => {
    return (
        <div className="Comment">
            <Userinfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    );
}



export {Comment};

