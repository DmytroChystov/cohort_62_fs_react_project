import "./styles.css";

// props - это возможность передавать данные из родительского компонента в дочерний компонет
// props является обьектом
// function SimpsonsCard(props) {
function SimpsonsCard({ firstName, lastName, job, hobby, avatar }) {
  // До деструктуризации props в аргументе SimpsonsCard
  // console.log(props);
  // const { firstName, lastName, job, hobby, avatar } = props;

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
