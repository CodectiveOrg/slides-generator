import { ReactElement } from "react";

import { Highlight, themes } from "prism-react-renderer";

import clsx from "clsx";

import styles from "./code.module.css";

type Size = "medium" | "large";

type Props = {
  language: string;
  size?: Size;
  code: string;
};

export default function CodeComponent({
  language,
  size = "large",
  code,
}: Props): ReactElement {
  return (
    <div className={clsx(styles.code, styles[size])} dir="ltr">
      <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, lineIndex) => (
              <div key={lineIndex} {...getLineProps({ line })}>
                <span className={styles["line-number"]}>{lineIndex + 1}</span>
                <span className={styles["line-content"]}>
                  {line.map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
