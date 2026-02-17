import { notFound } from "next/navigation";
import { getProjects, getProject } from "@/util/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/app/components/mdx-components";
import { Header } from "./header";
import "./mdx.css";

export const revalidate = 60;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects = getProjects();
  return projects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage(props: Props) {
  const params = await props.params;
  const slug = params?.slug;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <MDXRemote source={project.content} components={components} />
      </article>
    </div>
  );
}
