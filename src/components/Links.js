import user from "./user";

const Links = (props) => { {
    return (
        <>
            <h3>Links</h3>
            <a href={props.githib}>{props.githib}</a>
            <a href={props.linkedin}>{props.linkedin}</a>
        </>
        
    )
    };
}

export default Links;