import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type Project = {
    slug: string;
    title: string;
    description: string;
    date?: string;
    published?: boolean;
    url?: string;
    repository?: string;
    content: string;
};

export function getProjects(): Project[] {
    const text = fs.readdirSync(projectsDirectory);
    const projects = text
        .filter((file) => path.extname(file) === ".mdx")
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const fullPath = path.join(projectsDirectory, file);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title,
                description: data.description,
                date: data.date ? new Date(data.date).toISOString() : undefined,
                published: data.published,
                url: data.url,
                repository: data.repository,
                content,
            };
        });

    return projects.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getProject(slug: string): Project | undefined {
    const projects = getProjects();
    return projects.find((project) => project.slug === slug);
}
