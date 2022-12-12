import { getProviders,  useSession } from "next-auth/react"
import SignIn from "@components/Login/Login"

import Verify from "@components/Login/Verify"

export default function LogIn({ providers }: { providers: any }) {
  const { data: session } = useSession();
  return (
    <SignIn providers={providers} session={session} />
  )
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
