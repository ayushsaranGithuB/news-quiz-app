import { useUser } from "@auth0/nextjs-auth0/client";
import AdminQuestionsManager from "../../components/AdminQuestionsManager";
import styles from '@/styles/Admin.module.css';

export default function Index() {


  const { user, error, isLoading } = useUser();
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;



  if (user) {
    console.log(user);

  }

  if (user && user.roleType.includes("Admin")) {
    return (
      <div className={styles.adminPage}>
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
