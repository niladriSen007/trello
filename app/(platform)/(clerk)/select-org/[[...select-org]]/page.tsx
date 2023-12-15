import { OrganizationList } from "@clerk/nextjs"

const page = () => {
  return (
    <OrganizationList
    hidePersonal
    afterCreateOrganizationUrl={"/organization/:id"}
    afterSelectOrganizationUrl={"/organization/:id"}
    />
  )
}
export default page