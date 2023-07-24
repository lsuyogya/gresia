import { NextComponentType } from "next";
import AdminLogin from "@/app/admin/login/page";
import { BaseContext } from "next/dist/shared/lib/utils";

function withAuth<T>(Component: NextComponentType<any>) {
  const Auth = (props: T) => {
    // Login data added to props via redux-store (or use react context for example)
    const isLoggedIn = true;

    // If user is not logged in, return login component
    if (!isLoggedIn) {
      return <AdminLogin />;
    }

    // If user is logged in, return original component
    //@ts-ignore
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;
