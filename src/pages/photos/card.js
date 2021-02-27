import './photos.css';

function Card(props) {
  return (         
        <div className="card">
            <img
              className="card--image"
              src={props.src}
              width="50%"
              height="50%"
            />
        </div>
                          

  );
}

export default Card;
