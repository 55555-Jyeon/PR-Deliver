import { redirect } from "next/navigation";

export default function UserPage({ params }: { params: { userId: string } }) {
  redirect(`/${params.userId}/repo-list`);
}
