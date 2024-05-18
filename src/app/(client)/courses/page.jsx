import { client } from "@/lib/sanityConfig";
import Container from "./Container";
import Topbar from "./Topbar";

export default async function page() {

  const filter = `*[_type=="courses"]`;
  const query = `${filter}{
    _id,
  }`;

  const courses = await client.fetch(query);

  return (
    <section>
      <Topbar />
      <Container />
    </section>
  )
}
