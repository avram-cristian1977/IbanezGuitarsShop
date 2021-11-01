import './EndorserCard.css'

const EndorserCard = ({guitarist}) => {

    return <div>
        <div className="guitaristImgWrapper">
            <div className="guitaristName">{guitarist.name}</div>
            <img src={guitarist.image} alt="" />
        </div>
    </div>;
}
 
export default EndorserCard;