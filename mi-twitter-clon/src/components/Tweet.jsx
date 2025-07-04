import "./tweet.css";

const Tweet = ({ tweet, onLike }) => (
  <div className="tweet">
    <div className="tweet-header">
      <div className="tweet-avatar">{tweet.username ? tweet.username[0].toUpperCase() : "U"}</div>
      <span className="tweet-username">{tweet.username || "Usuario"}</span>
    </div>
    <p>{tweet.text}</p>
    <button
      className={`tweet-like-btn${tweet.liked ? " liked" : ""}`}
      onClick={() => onLike(tweet.id)}
    >
      ❤ {tweet.likes}
    </button>
  </div>
);

export default Tweet;