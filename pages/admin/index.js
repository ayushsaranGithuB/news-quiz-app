import { useUser } from "@auth0/nextjs-auth0/client";
import AdminQuestionsManager from "../../components/AdminQuestionsManager";

export default function Index() {


  const { user, error, isLoading } = useUser();
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;



  if (user) {
    console.log(user);

  }

  if (user && user.roleType.includes("Admin")) {
    return (
      <div className="centered">
        <h1>Admin Panel</h1>
        <p>
          Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        </p>
        <AdminQuestionsManager />
      </div>
    );
  }
  return (
    <>
      <div className="centered">
        <h1>
          <a href="/api/auth/login">Login</a>
        </h1>
      </div>
    </>
  );
}
