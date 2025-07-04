import "./profile.css";

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile-cover"></div>
      <div className="profile-avatar">{user?.username[0].toUpperCase()}</div>
      <h1>Perfil</h1>
      <p>Bienvenido a tu perfil, {user?.username}.</p>
    </div>
  );
};

export default Profile;