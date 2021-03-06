//DATE : 10/1/20

/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import dynamic from "next/dynamic";

const BrowserComponent = dynamic(() => import("../src/components/browser"), {
  ssr: false,
});

const index = ({ content }) => {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <BrowserComponent />
        <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      </div>
    </div>
  );
};
export default index;

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: "Look at my note app tho",
      },
    },
  };
}
