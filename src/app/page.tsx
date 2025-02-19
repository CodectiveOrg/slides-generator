import { ReactElement } from "react";

import Link from "next/link";

import { glob } from "glob";

import styles from "./page.module.css";

export default async function Page(): Promise<ReactElement> {
  const routeFullPaths = await glob("app/**/page.tsx", { cwd: "src" });

  const routes = routeFullPaths
    .map((x) => x.split(/[/\\]/))
    .map((x) => x.slice(1, x.length - 1))
    .map((x) => x.join("/"))
    .filter(Boolean);

  return (
    <div className={styles.page}>
      <ul>
        {routes.map((page) => (
          <li key={page}>
            <Link href={`/${page}`}>{page}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
