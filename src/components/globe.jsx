import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",

  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodejs",
  "angular",
  "nextjs",
  "redux",
  "graphql",
  "mysql",
  "hibernate",
  "jpa",
  "spring",
  "springboot",
  "lifrery",
  "odoo",
  "oracle",

  "kubernetes",

  "tailwindcss",
  "bootstrap",
  "git",

  "github",
  "gitlab",
  "visualstudiocode",
  "intellijidea",
  "webstorm",
  "eclipse",
  "netbeans",
  "sublimetext",

];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
