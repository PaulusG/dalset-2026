import { redirect } from "next/navigation";

/** Root path redirects to Norwegian front page. */
export default function Home() {
  redirect("/forside");
}
