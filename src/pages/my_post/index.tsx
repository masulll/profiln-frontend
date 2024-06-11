import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import FeedsFrame from "binar/components/organisms/HomepageComponents/FeedsFrame";
import { styledMyPostFrame } from "binar/styles/emotion/PostFrame.style";

import { Accordion } from "react-bootstrap";
import { accordionLink } from "binar/styles/emotion/Link.style";
import { IconBook, IconPostIt } from "binar/helpers";
export default function my_Post() {
  const router = useRouter();
  const { data } = useSession();
  console.log(data);
  const [active, setActive] = useState<null | number>(1);

  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <main className="d-flex justify-content-center my-3">
      <div className={`mt-3`}>
        <Accordion
          flush={true}
          defaultActiveKey={"0"}
          className={`${styledMyPostFrame} px-3`}
        >
          <Accordion.Item eventKey="0" style={{ border: "none" }}>
            <Accordion.Header style={{ fontSize: "18px" }}>
              <IconPostIt css={{ marginRight: "10px" }} />
              Postingan
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-column align-items-start">
              <button
                onClick={() => {
                  router.push({
                    pathname: "/my_post",
                    query: { post: "liked" },
                  });
                }}
                className={`${accordionLink}`}
              >
                Disukai
              </button>
              <button
                onClick={() => {
                  router.push({
                    pathname: "/my_post",
                    query: { post: "repost" },
                  });
                }}
                className={`${accordionLink}`}
              >
                Repost
              </button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <button
              onClick={() => {
                router.push({
                  pathname: "/my_post",
                  query: { post: "portfolio" },
                });
              }}
              className={`${accordionLink} mx-3 `}
            >
              <IconBook css={{ marginLeft: "4px", marginRight: "10px" }} />
              Portofolio
            </button>
          </Accordion.Item>
        </Accordion>
      </div>
      <div style={{ margin: "0em 1.3em" }}>
        <FeedsFrame />
      </div>
    </main>
  );
}
