import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "mongodb",
  "tailwindcss",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "gitlab",
  "django",
  "tensorflow",
];

export function IconCloudDemo() {
  return (
    <div className="flex relative h-full w-full max-w-[28rem] md:max-w-[32rem] items-center justify-center overflow-hidden px-8 md:px-28 pb-10 md:pb-20 pt-4 md:pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
