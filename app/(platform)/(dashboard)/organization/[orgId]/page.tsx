import { auth } from "@clerk/nextjs"

const page = () => {

    const { userId,orgId } = auth()
  return (
    <div>{orgId}</div>
  )
}
export default page