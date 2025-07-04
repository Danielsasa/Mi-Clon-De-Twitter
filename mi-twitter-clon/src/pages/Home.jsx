import { useState } from "react";
import Tweet from "../components/Tweet";
import "./home.css";

const Home = ({ user }) => {
  const [tweets, setTweets] = useState([]);
  const [text, setText] = useState("");

  const handleTweet = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setTweets([
        {
          id: Date.now(),
          text,
          likes: 0,
          liked: false,
          username: user.username,
        },
        ...tweets,
      ]);
      setText("");
    }
  };

  const handleLike = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              likes: tweet.liked ? tweet.likes - 1 : tweet.likes + 1,
              liked: !tweet.liked,
            }
          : tweet
      )
    );
  };

  return (
    <div className="home-container">
      <h1>Inicio</h1>
      {user && (
        <form className="tweet-form" onSubmit={handleTweet}>
          <div className="tweet-avatar">{user.username[0].toUpperCase()}</div>
          <input
            type="text"
            placeholder="¿Qué está pasando?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="tweet-input"
            maxLength={280}
          />
          <span className="char-count">{280 - text.length}</span>
          <button type="submit" className="tweet-btn" disabled={!text.trim()}>
            Twittear
          </button>
        </form>
      )}
      <div>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
};

export default Home;