import { ReactElement } from "react";

import { Highlight, themes } from "prism-react-renderer";

import styles from "./code.module.css";

type Props = {
  language: string;
  code: string;
};

export default function CodeComponent({ language, code }: Props): ReactElement {
  return (
    <div className={styles.code} dir="ltr">
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
