import theme from "binar/constants";
import { forgotPasswordStyle } from "binar/constants/emotion/FormControl.style";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { footerData } from "binar/constants/footerData";
import { styledNeutralLink } from "binar/constants/emotion/Link.style";
import { StyledFooter } from "binar/constants/emotion/Footers.style";
const Footers = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={StyledFooter}>
      <Container className="d-flex justify-content-between">
        <div>
          <Link href={"/"}>
            <Image
              src="/assets/logo/Logo Binar.svg"
              width="175"
              height="47"
              className=""
              alt="React Bootstrap logo"
            />
          </Link>
          <hr
            style={{
              width: "420px",
              background: theme.neutral_colors.grayscale_70,
            }}
          />
          <div>
            <p
              style={{
                color: theme.colors.primary,
                fontWeight: "600",
              }}
            >
              BINAR Office
            </p>
            <div className="d-flex">
              <Image
                src="/assets/icons/WA.svg"
                width="24"
                height="24"
                alt="WA"
              />
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  marginLeft: "10px",
                }}
              >
                021 397 11642
              </p>
            </div>
            <div className="d-flex flex-row ">
              <Image
                src="/assets/icons/Location.svg"
                width="24"
                height="24"
                className=""
                alt="location"
              />
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  marginLeft: "10px",
                  width: "60%",
                }}
              >
                Promenade 20, Unit L, Jl. Bangka Raya No.20, Kec. Mampang
                Prapatan, Daerah Khusus Ibukota Jakarta 12720
              </p>
            </div>
            <div className="d-flex flex-row ">
              <Link
                href={"https://maps.app.goo.gl/1BEZXinL24WRq1tS9"}
                className={`${forgotPasswordStyle}`}
                target="_blank"
              >
                Get Direction
              </Link>
            </div>
          </div>
        </div>
        <div>
          {footerData.slice(0, 2).map((section: any, index: any = 1) => (
            <div key={index} className="">
              <p
                style={{
                  color: theme.colors.primary,
                  fontWeight: "600",
                }}
              >
                {section.title}
              </p>
              <div
                className={"d-flex flex-column"}
                style={{ marginTop: "-15px" }}
              >
                {section.data.map((data: any, index: any) => (
                  <Link
                    key={index}
                    href={data.path}
                    className={styledNeutralLink}
                  >
                    {data.linkName}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex">
          {footerData.slice(2, 4).map((section: any, index: any = 1) => (
            <div key={index} className="d-flex flex-column mx-4">
              <p
                style={{
                  color: theme.colors.primary,
                  fontWeight: "600",
                }}
              >
                {section.title}
              </p>
              <div
                className={"d-flex flex-column"}
                style={{ marginTop: "-15px" }}
              >
                {section.data.map((data: any, index: any) => (
                  <Link
                    key={index}
                    href={data.path}
                    className={styledNeutralLink}
                  >
                    {data.linkName}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "600",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          &copy; 2016 – {currentYear}, Binar Academy, PT Binar Lentera Bangsa
          Benderang
        </p>
      </div>
    </footer>
  );
};

export default Footers;
