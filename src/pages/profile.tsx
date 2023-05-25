import { withAuthentication } from 'common/hocs';

const Profile = () => {
  return (
    <div>
      <h1>Profile (need to do)</h1>
    </div>
  );
};

const ProfileAuthenticated = withAuthentication(Profile);
ProfileAuthenticated.layout = 'admin';

export default ProfileAuthenticated;
