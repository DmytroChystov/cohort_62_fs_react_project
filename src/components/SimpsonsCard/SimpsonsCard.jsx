import "./styles.css";

function SimpsonsCard({ firstName, lastName, job, hobby, avatar }) {
  return (
    <div className="card">
      <img className="avatar" src={avatar} alt="User Avatar" />
      <p className="card_info">
        <span className="info_title">
          Fullname: {`${firstName} ${lastName}`}
        </span>
      </p>
      <p className="card_info">
        <span className="info_title">Job: {job}</span>
      </p>
      <p className="card_info">
        <span className="info_title">Hobby: {hobby}</span>
      </p>
    </div>
  );
} 

export default SimpsonsCard;

