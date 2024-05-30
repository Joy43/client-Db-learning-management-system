
import { redirect } from "next/navigation";

import { clerkClient } from "@clerk/nextjs/server";
import { checkRole } from "@/app/utils/role";
import { SearchUsers } from "@/app/(admin)/(router)/dashboard/_search-users";
import { setRole } from "@/app/(admin)/(router)/dashboard/_actions";


export default async function AdminDashboard(params: {
  searchParams: { search?: string };
}) {
  if (!checkRole("admin")) {
    redirect("/");
  }

  const query = params.searchParams.search;

  const users = query ? (await clerkClient.users.getUserList({ query })).data : [];

  return (
    <div className="bg-slate-900 grid text-white">
   <div className="text-center">
   <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the  role.</p>
   </div>

     <div className="mx-auto flex items-center">
     <SearchUsers />
     </div>


      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              {user.firstName} {user.lastName}
            </div>
            <div>
              {
                user.emailAddresses.find(
                  (email) => email.id === user.primaryEmailAddressId
                )?.emailAddress
              }
            </div>
            <div>{user.publicMetadata.role as string}</div>
            <div>
              <form action={setRole}>
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="admin" name="role" />
                <button type="submit">Make Admin</button>
              </form>
            </div>
            <div>
              <form action={setRole}>
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="moderator" name="role" />
                <button type="submit">Make Moderator</button>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
}
