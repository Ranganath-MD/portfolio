import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project, siteConfig } from "@/data/site";

const ProjectCard: React.FC<Project> = ({ ...props }) => {
  return (
    <Card className="hover:scale-105">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <a
            className="text-prime"
            href={props.links.github}
            target={"_blank"}
            rel={"noreferrer"}
          >{props?.name.repo_name}</a>
        </CardTitle>
        {
          props.links.demo !== "" && (
            <a
              className="text-prime"
              href={props.links.demo}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 3C4.5885 3 3 4.5885 3 12C3 19.4115 4.5885 21 12 21C19.4115 21 21 19.4115 21 12" />
                <path d="M20.5 3.5L15 9" /> <path d="M16 3H20.6717C20.853 3 21 3.14703 21 3.32837V8" />
              </svg>
            </a>
          )
        }

      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{props.name.project_name}</div>
        <CardDescription>
          {props.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export const Projects = () => {
  const { projects } = siteConfig;
  return (
    <section className="mt-12">
      <h1 className="text-3xl font-bold mb-6">Side Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          projects?.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))
        }

      </div>
      
    </section>
  )
}